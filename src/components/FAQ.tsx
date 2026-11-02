import { useState } from 'react'

const faqs = [
  {
    q: 'What is the free Business Blueprint?',
    a: "It's a simple plan for your business. It shows where leads and customers are slipping away, the system that would fix it, and what to focus on in the next 90 days.",
  },
  {
    q: 'Is it really free?',
    a: "Yes. There's no cost and no obligation. If you want help putting it in place, we can talk about that. If not, the blueprint is yours to keep.",
  },
  {
    q: 'Who is it for?',
    a: 'Service businesses that already get enquiries but struggle to follow up, stay consistent on social media, or keep track of leads. That includes insurance agents, real estate professionals, coaches, consultants and agencies.',
  },
  {
    q: 'How do I get it?',
    a: 'Tap any "Get my free business blueprint" button and fill in the short form. It\'s sent to your email, so check your promotions or spam folder if you don\'t see it.',
  },
  {
    q: 'What happens after I request it?',
    a: "You can use the blueprint on your own, or reach out to talk it through. We never pressure anyone into buying.",
  },
  {
    q: 'Do you close sales for me?',
    a: 'No. We build and run the system that attracts, captures and follows up with your leads. You stay in charge of the conversations that close the sale.',
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
