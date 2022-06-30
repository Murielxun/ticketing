import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from '@murielxun-tickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
