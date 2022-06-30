import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from '@murielxun-tickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
