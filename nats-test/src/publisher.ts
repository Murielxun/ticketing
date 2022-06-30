import nats from 'node-nats-streaming';
import { TicketCreatedPublisher } from './events/ticket-created-publisher';

// create a client, client id = abc
// cannot use localhost:4222
// because tyring to access the program that's running in a pod in cluster
// and to access cluster -> thru ingress-nginx / create a nodeport service for NATS pod
const stan = nats.connect('ticketing', 'abc', {
  url: 'http://localhost:4222',
});

// wait for successful connect
stan.on('connect', async () => {
  console.log('Publisher connected to NATS');

  const publisher = new TicketCreatedPublisher(stan);
  try {
    await publisher.publish({
      id: '123',
      title: 'concert',
      price: 20,
    });
  } catch (error) {
    console.error(error);
  }

  // // can only share string / raw data, not object
  // const data = JSON.stringify({
  //   id: '123',
  //   title: 'concert',
  //   price: 20,
  // });

  // // add channel name & data
  // // call back function invoked after publish the data
  // stan.publish('ticket:created', data, () => {
  //   console.log('Event published');
  // });
});
