import { Publisher, Subjects, TicketUpdatedEvent } from "@murielxun-tickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  // channel name
  readonly subject = Subjects.TicketUpdated;

}