/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button2"
import { Plus, LifeBuoy, Search, Filter } from "lucide-react"
import { Ticket, TicketList } from "@/components/modules/Tourist/Support/TicketList"
import { TicketForm } from "@/components/modules/Tourist/Support/TicketForm"


// Mock data
const MOCK_TICKETS: Ticket[] = [
  {
    id: "1",
    subject: "Booking confirmation not received",
    status: "Open",
    date: "Oct 24, 2023",
    lastReply: "2 hours ago",
    preview: "I booked the City Tour for tomorrow but haven't received the email confirmation yet. Can you please check?"
  },
  {
    id: "2",
    subject: "Change tour date request",
    status: "In Progress",
    date: "Oct 22, 2023",
    lastReply: "1 day ago",
    preview: "Hi, I need to reschedule my Museum Pass visit from Tuesday to Wednesday due to flight changes."
  },
  {
    id: "3",
    subject: "Refund for cancelled flight",
    status: "Resolved",
    date: "Oct 15, 2023",
    lastReply: "3 days ago",
    preview: "My flight was cancelled by the airline. I would like to request a refund for the airport transfer service."
  },
  {
    id: "4",
    subject: "Luggage storage inquiry",
    status: "Closed",
    date: "Oct 10, 2023",
    lastReply: "1 week ago",
    preview: "Do you offer luggage storage at the visitor center? We have a late flight and want to explore the city."
  },
  {
    id: "5",
    subject: "Accessibility information needed",
    status: "Open",
    date: "Today",
    lastReply: "Just now",
    preview: "My mother uses a wheelchair. Is the boat tour accessible? I couldn't find this info on the booking page."
  }
]
export default function SupportCenter() {
  const [view, setView] = useState<"list" | "form">("list")
  const [tickets, setTickets] = useState<Ticket[]>(MOCK_TICKETS)
  const [searchQuery, setSearchQuery] = useState("")
  const handleCreateTicket = (data: any) => {
    const newTicket: Ticket = {
      id: Math.random().toString(36).substr(2, 9),
      subject: data.subject,
      status: "Open",
      date: "Just now",
      lastReply: "Waiting for reply",
      preview: data.message
    }
    setTickets([newTicket, ...tickets])
    setView("list")
  }
  const filteredTickets = tickets.filter(ticket => 
    ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.preview.toLowerCase().includes(searchQuery.toLowerCase())
  )
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Header */}
      <header className="bg-white border-b ">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-lg">
              <LifeBuoy className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-xl font-bold tracking-tight">Tourist Support Center</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex text-sm text-muted-foreground">
              <span className="font-medium text-foreground mr-1">Support Hours:</span> 
              24/7 for emergencies
            </div>
            <div className="h-8 w-[1px] bg-border hidden md:block"></div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                JD
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {view === "list" ? (
          <div className="space-y-6">
            {/* Action Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Your Tickets</h2>
                <p className="text-muted-foreground">Manage your support requests and view their status.</p>
              </div>
              <Button onClick={() => setView("form")} className="shadow-sm">
                <Plus className="mr-2 h-4 w-4" />
                Create New Ticket
              </Button>
            </div>
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 items-center bg-white p-4 rounded-lg border shadow-sm">
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search tickets..." 
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2 w-full sm:w-auto ml-auto">
                <Button variant="outline" size="sm" className="w-full sm:w-auto">
                  <Filter className="mr-2 h-3 w-3" />
                  Filter Status
                </Button>
              </div>
            </div>
            {/* Ticket List */}
            {filteredTickets.length > 0 ? (
              <TicketList tickets={filteredTickets} />
            ) : (
              <div className="text-center py-12 bg-white rounded-lg border border-dashed">
                <div className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4">
                  <LifeBuoy className="h-12 w-12" />
                </div>
                <h3 className="text-lg font-medium">No tickets found</h3>
                <p className="text-muted-foreground mb-4">
                  {searchQuery ? "Try adjusting your search terms." : "You haven't created any support tickets yet."}
                </p>
                {!searchQuery && (
                  <Button onClick={() => setView("form")}>Create your first ticket</Button>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-6">
              <Button variant="ghost" onClick={() => setView("list")} className="pl-0 hover:pl-2 transition-all">
                ← Back to Tickets
              </Button>
            </div>
            <TicketForm 
              onCancel={() => setView("list")} 
              onSubmit={handleCreateTicket} 
            />
          </div>
        )}
      </main>
    </div>
  )
}