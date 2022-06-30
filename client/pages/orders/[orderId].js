import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import useRequest from '../../hooks/use-request';
import Router from 'next/router';

const OrderShow = ({ order, currentUser }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const { doRequest, errors } = useRequest({
    url: '/api/payments',
    method: 'post',
    body: {
      orderId: order.id,
    },
    onSuccess: () => Router.push('/orders'),
  });

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };

    // setInterval will wait 1s to call the very first findTimeLeft
    // we want to see it immediately
    // so call it once manually
    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);

    // when return a func in useEffect
    // this funct will be invoked if we are about to navigate away from this component
    // or, if the component is going to be re-rendered (when has dep in list, but the list is empty)
    return () => {
      clearInterval(timerId);
    };
  }, [order]);

  if (timeLeft < 0) {
    return <div>Order Expired</div>;
  }

  return (
    <div>
      Time left to pay: {timeLeft} seconds
      <StripeCheckout
        token={({ id }) => doRequest({ token: id })}
        stripeKey="pk_test_51LFvD2ANRHvIGstZut8oEKZm76ZeHI8y5HECDJqBW7nUiBgU6aELbDbd65CPN7hGCYjSdA5as7YM3kh1xWJz7Eb800DhOBqHNO"
        amount={order.ticket.price * 100}
        email={currentUser.email}
      />
    {errors}
    </div>
  );
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default OrderShow;
