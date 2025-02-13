import Image from 'next/image'
import TestimonialsLayout from './layout'

export default function Testimonials() {
  const testimonials = [
    {
      name: "365 Badge of Leetcode",
      position: "Leetcode",
      content: "Compeleted 365 days sloving problems on leetcode",
      image: "/images/360.png"
    },
    {
      name: "Monthly Badge of Leetcode",
      position: "Leetcode",
      content: "Consistently solving problem of the day for whole month",
      image: "/images/Monthly.png"
    },
    {
      name: "Master Badge in Data Structure",
      position: "Coding Ninjas",
      content: "By solving 700+, I recieved master badge from Coding Ninjas",
      image: "/images/Master.png"
    },
    {
      name: "Annual Badge'24 on leetcode",
      position: "Leetcode",
      content: "Recieve Annual badge from leetcode",
      image: "/images/Annual.png"
    }
  ]

  return (
    <TestimonialsLayout>
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Badges on Coding Platform</h2>
      <div className="">
        <div className="flex slider">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
              <div className="glass-effect hover-glow p-6 h-full rounded-2xl">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TestimonialsLayout>
  )
}

