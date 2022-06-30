import { Publisher, Subjects, TicketCreatedEvent } from "@murielxun-tickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  // channel name
  readonly subject = Subjects.TicketCreated;

}