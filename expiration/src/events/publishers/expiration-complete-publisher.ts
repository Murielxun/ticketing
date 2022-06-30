import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@murielxun-tickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
