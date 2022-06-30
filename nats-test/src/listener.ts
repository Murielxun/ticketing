import nats, { Message, Stan } from 'node-nats-streaming';
import { randomBytes } from 'crypto';
import { TicketCreatedListener } from './events/ticket-created-listener';

// client id => random generated
const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
  url: 'http://localhost:4222',
});

// watch for connect event
stan.on('connect', () => {
  console.log('Listener connected to NATS');

  // code that help shutdown faster
  // end this process
  stan.on('close', () => {
    console.log('NATS connection closed!');
    process.exit();
  });

  new TicketCreatedListener(stan).listen();

  // to customize the subscription
  // not passing in object, but chain them
  // provide it as the third arg for .subscribe()

  // to get event that is missed before creation of listen / when it's down -> .setDelieveryAllAvailable
  // const options = stan
  //   .subscriptionOptions()
  //   .setManualAckMode(true)
  //   .setDeliverAllAvailable()
  //   .setDurableName('accounting-service');

  // const subscription = stan.subscribe(
  //   'ticket:created',
  //   // add queue group
  //   'queue-group-name',
  //   options
  // );

  // // need to tell ts, msg isn't type of any, but type Message
  // subscription.on('message', (msg: Message) => {
  //   const data = msg.getData();

  //   if (typeof data === 'string') {
  //     console.log(`Received event #${msg.getSequence()}, with data:${data}`);
  //   }

  //   msg.ack();
  // });
});

// handlers to watch for any single time that someone tries to close down this process
// when restart program / hit crtl+c

// watch for interrupt signals or terminate signals
// meaning, don't kill just yet, need to stop the connection first
// stan.close() -> reach out to nats server, telling it don't send messages
// after it closed -> continue to that stan.on('close') function

// on windows, not always work -> still rely on hb mechanism
process.on('SIGINT', () => stan.close());
process.on('SIGTERM', () => stan.close());
