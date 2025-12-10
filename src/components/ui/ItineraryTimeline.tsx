import { IItineraryStep } from "@/types/tour.interface"
import { Clock } from "lucide-react"
interface ItineraryTimelineProps {
  steps: IItineraryStep[]
}
export function ItineraryTimeline({ steps }: ItineraryTimelineProps) {
  return (
    <div className="relative pl-8 space-y-8 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-20px)] before:w-[2px] before:bg-gray-200">
      {steps.map((step, index) => (
        <div key={index} className="relative">
          <div className="absolute -left-8 top-1 h-6 w-6 rounded-full border-4 border-white bg-blue-600 shadow-sm flex items-center justify-center">
            <div className="h-1.5 w-1.5 rounded-full bg-white" />
          </div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              <Clock className="mr-1 h-3 w-3" />
              {step.time}
            </span>
            <h3 className="font-bold text-gray-900">{step.title}</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
        </div>
      ))}
    </div>
  )
}