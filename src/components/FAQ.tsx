import { useState } from 'react'

const faqs = [
  {
    q: 'What is the free Business Blueprint?',
    a: 'A simple roadmap that shows you what your business really needs. It walks you through your strategy, your marketing, your customer experience and what you measure, so you know exactly where you stand.',
  },
  {
    q: 'Is it really free?',
    a: "Yes. There's no cost and no obligation. The blueprint is yours to keep.",
  },
  {
    q: 'Who is it for?',
    a: 'Business owners who are tired of chasing leads and want more raving fans: insurance agents, real estate professionals, coaches, consultants and service businesses.',
  },
  {
    q: 'How do I get it?',
    a: "Tap \"Get your free business blueprint\" and fill in the short form. It arrives in your inbox with a one-click download. If you don't see it, check your promotions or spam folder.",
  },
  {
    q: 'How do I book a clarity call?',
    a: "The booking link is in the same email as your blueprint, right below the download. Complete your blueprint first. We only hold clarity calls with people who've done the homework.",
  },
  {
    q: 'Do you close sales for me?',
    a: 'No. We bring raving fans to you and keep them coming back. You stay in charge of the conversations that close the sale.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section className="bg-[#F8F9FB] py-[80px]" id="faq">
      <div className="max-w-[1120px] mx-auto px-[22px]">
        <h2
          className="font-extrabold text-center mb-[30px] text-ink"
          style={{ fontSize: 'clamp(2.2rem, 7vw, 3.2rem)' }}
        >
          FAQs
        </h2>
        <div className="max-w-[820px] mx-auto">
          {faqs.map(({ q, a }, i) => (
            <div key={q} className="border-b-2 border-dashed border-[#9AA6BF]">
              <button
                className="w-full flex justify-between items-center gap-4 py-[26px] font-bold text-left bg-transparent border-0 cursor-pointer text-ink"
                style={{ fontSize: 'clamp(1.1rem, 3.6vw, 1.4rem)', lineHeight: 1.35 }}
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                aria-expanded={openIdx === i}
              >
                {q}
                <span
                  className="shrink-0 w-3 h-3 border-r-[3px] border-b-[3px] border-ink transition-transform"
                  style={{
                    transform: openIdx === i
                      ? 'rotate(225deg) translateY(-2px)'
                      : 'rotate(45deg) translateY(-4px)',
                  }}
                />
              </button>
              {openIdx === i && (
                <p className="text-muted text-[1.05rem] max-w-[62ch] mb-[26px]">{a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
