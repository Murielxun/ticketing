import Queue from 'bull';
import { ExpirationCompletePublisher } from '../events/publishers/expiration-complete-publisher';
import { natsWrapper } from '../nats-wrapper';

interface Payload {
  orderId: string;
}

// can have other names
const expirationQueue = new Queue<Payload>('order:expiration', {
  // tell queue to use redis
  redis: {
    host: process.env.REDIS_HOST,
  },
});

// code to process a job
// job is an object that wraps the data and has some info about job itself as well
expirationQueue.process(async (job) => {
  // publish expiration:complete
  new ExpirationCompletePublisher(natsWrapper.client).publish({
    orderId: job.data.orderId,
  });
});

export { expirationQueue };
