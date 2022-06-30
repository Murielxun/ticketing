import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from '@murielxun-tickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
