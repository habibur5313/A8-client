/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button2"
import { Paperclip, X } from "lucide-react"
interface TicketFormProps {
  onCancel: () => void
  onSubmit: (data: any) => void
}
export function TicketForm({ onCancel, onSubmit }: TicketFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    attachment: null as File | null
  })
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      onSubmit(formData)
    }, 1500)
  }
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, attachment: e.target.files[0] })
    }
  }
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create New Support Ticket</CardTitle>
        <CardDescription>
          Describe your issue and well get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <Input
            label="Subject"
            placeholder="e.g., Booking cancellation issue"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
          
          <Textarea
            label="Message"
            placeholder="Please provide details about your request..."
            className="min-h-[150px]"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none mb-2 block">
              Attachment (Optional)
            </label>
            <div className="flex items-center gap-4">
              <label className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                <Paperclip className="mr-2 h-4 w-4" />
                Attach File
                <input 
                  type="file" 
                  className="hidden" 
                  onChange={handleFileChange}
                />
              </label>
              {formData.attachment && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  {formData.attachment.name}
                  <button 
                    type="button"
                    onClick={() => setFormData({ ...formData, attachment: null })}
                    className="hover:text-destructive"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              Supported formats: JPG, PNG, PDF (Max 5MB)
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-3 border-t bg-muted/10 p-6">
          <Button type="button" variant="ghost" onClick={onCancel} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button type="submit" isLoading={isSubmitting}>
            Submit Ticket
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}