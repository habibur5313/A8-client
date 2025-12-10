import React from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge2"               
import { Clock, MessageSquare, Calendar } from "lucide-react"
export type TicketStatus = "Open" | "In Progress" | "Resolved" | "Closed"
export interface Ticket {
  id: string
  subject: string
  status: TicketStatus
  date: string
  lastReply: string
  preview: string
}
interface TicketListProps {
  tickets: Ticket[]
  onSelectTicket?: (id: string) => void
}
const getStatusVariant = (status: TicketStatus) => {
  switch (status) {
    case "Open":
      return "info"
    case "In Progress":
      return "warning"
    case "Resolved":
      return "success"
    case "Closed":
      return "secondary"
    default:
      return "default"
  }
}
export function TicketList({ tickets, onSelectTicket }: TicketListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {tickets.map((ticket) => (
        <Card 
          key={ticket.id} 
          className="cursor-pointer transition-all hover:shadow-md hover:border-primary/20"
          onClick={() => onSelectTicket?.(ticket.id)}
        >
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start gap-2">
              <Badge variant={getStatusVariant(ticket.status)}>{ticket.status}</Badge>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {ticket.date}
              </span>
            </div>
            <CardTitle className="text-lg mt-2 line-clamp-1">{ticket.subject}</CardTitle>
          </CardHeader>
          <CardContent className="pb-3">
            <p className="text-sm text-muted-foreground line-clamp-2">
              {ticket.preview}
            </p>
          </CardContent>
          <CardFooter className="pt-0 text-xs text-muted-foreground flex justify-between items-center border-t p-4 mt-2 bg-muted/20">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Last reply: {ticket.lastReply}
            </div>
            <div className="flex items-center gap-1 text-primary font-medium">
              View Details
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}