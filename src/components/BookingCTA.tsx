export default function BookingCTA() {
  return (
    <section className="bg-navy py-20 text-center">
      <div className="max-w-[720px] mx-auto px-[22px]">
        <h2
          className="font-black uppercase text-white leading-[1.08] mb-5"
          style={{ fontSize: 'clamp(2rem, 6vw, 3.2rem)' }}
        >
          Ready to book your free clarity call?
        </h2>
        <p className="text-white/70 text-[1.05rem] max-w-[46ch] mx-auto mb-8">
          Let's look at your business together, find where customers are slipping away, and map out the system to fix it.
        </p>
        <a
          href="https://api.leadconnectorhq.com/widget/booking/UnHj38Wb1aM0yjqvGqVy"
          target="_blank"
          rel="noopener"
          className="inline-block bg-blue text-white font-bold text-[1.05rem] uppercase tracking-[.02em] py-5 px-10 rounded-full no-underline hover:bg-blue-dark active:translate-y-px transition-colors"
        >
          Book my free clarity call
        </a>
      </div>
    </section>
  )
}
