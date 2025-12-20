"use client"
import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button2'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }
  return (
    <section id="contact" className="bg-white dark:bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Get in touch
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            We&rsquo;d love to hear from you. Please fill out this form or shoot us an email.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column: Contact Form */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-slate-600 mb-8">
                  Thanks for reaching out. We&rsquo;ll get back to you within 24 hours.
                </p>
                <Button variant="outline" className=' text-white' onClick={() => setSubmitted(false)}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 dark:text-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
                  <Input
                    label="First name"
                    placeholder="Jane"
                    required
                  />
                  <Input
                    label="Last name"
                    placeholder="Doe"
                    required
                  />
                </div>
                
                <Input
                  label="Email"
                  type="email"
                  placeholder="jane@example.com"
                  required
                />
                
                <Textarea
                  label="Message"
                  placeholder="How can we help you?"
                  required
                />
                
                <Button type="submit" className="w-full" isLoading={isSubmitting}>
                  Send Message
                </Button>
              </form>
            )}
          </div>
          {/* Right Column: Contact Info */}
          <div className="flex flex-col justify-center space-y-8 lg:pl-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Our team is available Monday through Friday, 9am to 5pm EST.
                Reach out for support, sales, or general inquiries.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-medium text-slate-900 dark:text-white">Email</h4>
                  <p className="mt-1 text-slate-600 dark:text-slate-400">hello@company.com</p>
                  <p className="text-slate-600 dark:text-slate-400">support@company.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-medium text-slate-900 dark:text-white">Phone</h4>
                  <p className="mt-1 text-slate-600 dark:text-slate-400">+1 (555) 123-4567</p>
                  <p className="text-slate-600 dark:text-slate-400">+1 (555) 987-6543</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-medium text-slate-900 dark:text-white">Office</h4>
                  <p className="mt-1 text-slate-600 dark:text-slate-400">
                    123 Innovation Drive<br />
                    Tech Valley, CA 94043
                  </p>
                </div>
              </div>
            </div>
            {/* Map Placeholder */}
            <div className="mt-8 h-48 w-full rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 dark:bg-slate-800 dark:border-slate-700 text-sm">
              Interactive Map Component
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}