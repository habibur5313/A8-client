"use client";
import React, { useState } from "react";

export default function PaymentPage() {
  const [method, setMethod] = useState<"card" | "bKash" | "paypal">("card");
  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [exp, setExp] = useState("");
  const [cvv, setCvv] = useState("");
  const [email, setEmail] = useState("");
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState("");

  // Mock order data
  const order = {
    title: "Private City Walking Tour",
    date: "2025-12-20",
    guests: 2,
    pricePerPerson: 35,
  };

  const total = order.pricePerPerson * order.guests;

  const handlePay = async () => {
    setProcessing(true);
    setSuccess("");
    // simulate validation
    if (method === "card") {
      if (!cardNumber || !nameOnCard || !exp || !cvv) {
        alert("Please fill all card fields");
        setProcessing(false);
        return;
      }
    }

    // Simulate network/payment processing
    await new Promise((r) => setTimeout(r, 1200));

    setProcessing(false);
    setSuccess("Payment request sent! We will contact you with confirmation.");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left - Payment Form */}
        <section className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Complete your payment</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Secure checkout — choose a payment method and submit your booking request.</p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <label className={`px-3 py-2 rounded-lg cursor-pointer border ${method === "card" ? "border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-400" : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"}`}>
                  <input className="sr-only" type="radio" name="method" checked={method === "card"} onChange={() => setMethod("card")} />
                  <div className="flex items-center gap-3">
                    <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="28" height="18" rx="3" fill="#0EA5A4" />
                    </svg>
                    <div className="text-sm">
                      <div className="font-medium text-gray-800 dark:text-white">Credit / Debit Card</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Visa, Mastercard, Amex</div>
                    </div>
                  </div>
                </label>

                <label className={`px-3 py-2 rounded-lg cursor-pointer border ${method === "bKash" ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"}`}>
                  <input className="sr-only" type="radio" name="method" checked={method === "bKash"} onChange={() => setMethod("bKash")} />
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-pink-400 flex items-center justify-center text-white font-bold">bK</div>
                    <div className="text-sm">
                      <div className="font-medium text-gray-800">bKash</div>
                      <div className="text-xs text-gray-500">Mobile wallet</div>
                    </div>
                  </div>
                </label>

                <label className={`px-3 py-2 rounded-lg cursor-pointer border ${method === "paypal" ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"}`}>
                  <input className="sr-only" type="radio" name="method" checked={method === "paypal"} onChange={() => setMethod("paypal")} />
                  <div className="flex items-center gap-3">
                    <svg width="36" height="14" viewBox="0 0 36 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="36" height="14" rx="3" fill="#2563EB" />
                    </svg>
                    <div className="text-sm">
                      <div className="font-medium text-gray-800">PayPal</div>
                      <div className="text-xs text-gray-500">Pay with account</div>
                    </div>
                  </div>
                </label>
              </div>

              {/* Conditional forms */}
              {method === "card" && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Card number</label>
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={19}
                      placeholder="4242 4242 4242 4242"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Name on card</label>
                    <input
                      type="text"
                      placeholder="Full name"
                      value={nameOnCard}
                      onChange={(e) => setNameOnCard(e.target.value)}
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Expiry</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      maxLength={5}
                      value={exp}
                      onChange={(e) => setExp(e.target.value)}
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">CVV</label>
                    <input
                      type="password"
                      placeholder="123"
                      maxLength={4}
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                  </div>
                </div>
              )}

              {method === "bKash" && (
                <div className="mt-4">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">bKash number</label>
                  <input
                    type="tel"
                    placeholder="01XXXXXXXXX"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  />
                  <p className="text-xs text-gray-500 mt-2">Follow the instructions on your bKash app to complete payment.</p>
                </div>
              )}

              {method === "paypal" && (
                <div className="mt-4">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">PayPal email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              )}

              <div className="mt-6 flex items-center justify-between gap-4">
                <button
                  onClick={handlePay}
                  disabled={processing}
                  className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white shadow ${processing ? "bg-gray-400 cursor-not-allowed" : "bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"}`}>
                  {processing ? "Processing..." : "Request to Pay"}
                </button>

                <div className="text-sm text-gray-600">
                  <div>Secure payments</div>
                  <div className="text-xs text-gray-400">We don’t store your card details.</div>
                </div>
              </div>

              {success && <div className="mt-4 rounded-md bg-green-50 p-3 text-sm text-green-800">{success}</div>}
            </div>
          </div>
        </section>

        {/* Right - Summary */}
        <aside>
          <div className="bg-white rounded-2xl shadow p-6 sticky top-24">
            <h3 className="text-lg font-medium text-gray-800">Booking summary</h3>
            <p className="text-sm text-gray-500 mt-1">{order.title}</p>

            <div className="mt-4 border rounded-lg border-gray-100 p-4 bg-gray-50">
              <div className="flex justify-between text-sm text-gray-600">
                <div>Date</div>
                <div className="font-medium text-gray-800">{order.date}</div>
              </div>

              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <div>Guests</div>
                <div className="font-medium text-gray-800">{order.guests}</div>
              </div>

              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <div>Price</div>
                <div className="font-medium text-gray-800">${order.pricePerPerson} / person</div>
              </div>

              <div className="mt-4 border-t pt-4 flex justify-between items-center">
                <div className="text-sm text-gray-600">Total</div>
                <div className="text-lg font-bold text-gray-900">${total}</div>
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-500">You won’t be charged yet. This will send a booking request to the host.</div>

            <div className="mt-6 flex gap-2">
              <button className="flex-1 px-3 py-2 rounded-lg border border-gray-200 text-sm">Cancel</button>
              <button className="flex-1 px-3 py-2 rounded-lg bg-white shadow text-sm">Save for later</button>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-gray-400">
            <div>Secure · Encrypted · Trusted</div>
          </div>
        </aside>
      </div>
    </div>
  );
}
