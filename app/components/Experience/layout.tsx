export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section id="experience" className="py-20 bg-gradient-to-r from-[#4C3957] to-[#6B5B7B]">
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  )
}

