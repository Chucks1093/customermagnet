interface Props {
  onOpenForm: () => void
}

const steps = [
  { title: 'Get your free blueprint', body: 'Fill in the short form and the blueprint lands in your inbox, ready to download in one click.' },
  { title: 'Do your homework', body: "Work through the questions on your strategy, marketing, customer experience and what you measure. It's your business, so this part matters." },
  { title: 'Book your clarity call', body: "The link is in the same email, right below your blueprint. Bring your answers and we'll map out what your business needs next." },
]

export default function HowItWorks({ onOpenForm }: Props) {
  return (
    <section style={{ padding: '84px 0', background: '#F2F4F8' }} id="how">
      <div className="max-w-[1120px] mx-auto px-[22px] text-center">
        <h2 className="font-black uppercase text-ink leading-[1.08] mb-4" style={{ fontSize: 'clamp(2rem,6vw,3rem)' }}>
          How it works
        </h2>
        <p className="text-muted text-[1.05rem] mx-auto mb-0" style={{ maxWidth: '36ch' }}>
          Three simple steps. No guesswork.
        </p>

        <ol
          className="mx-auto text-left"
          style={{ listStyle: 'none', counterReset: 'st', padding: 0, margin: '44px auto 34px', maxWidth: 720, display: 'grid', gap: 18 }}
        >
          {steps.map(({ title, body }, i) => (
            <li
              key={title}
              style={{
                position: 'relative',
                background: '#fff',
                borderRadius: 16,
                padding: '24px 22px 24px 86px',
                minHeight: 96,
              }}
            >
              <span style={{
                position: 'absolute',
                left: 22,
                top: 22,
                width: 46,
                height: 46,
                borderRadius: '50%',
                background: '#1F5BFF',
                color: '#fff',
                fontWeight: 900,
                fontSize: '1.3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {i + 1}
              </span>
              <h3 style={{ margin: '0 0 6px', fontSize: '1.2rem', fontWeight: 800, lineHeight: 1.3 }}>{title}</h3>
              <p style={{ margin: 0, color: '#4D5B78', fontSize: '1rem', lineHeight: 1.6 }}>{body}</p>
            </li>
          ))}
        </ol>

        <p
          className="text-left mx-auto mb-8"
          style={{
            maxWidth: 720,
            fontSize: '1.02rem',
            lineHeight: 1.6,
            color: '#0B1530',
            background: '#fff',
            borderLeft: '5px solid #FF5A3C',
            padding: '16px 20px',
            borderRadius: '0 12px 12px 0',
          }}
        >
          Clarity calls are only for business owners who've completed their blueprint. Your time is valuable, and so is ours.
        </p>

        <button
          onClick={onOpenForm}
          className="inline-block bg-blue text-white font-bold uppercase tracking-[.02em] rounded-full border-0 cursor-pointer hover:bg-blue-dark active:translate-y-px transition-colors"
          style={{ fontSize: '1.05rem', padding: '20px 28px' }}
        >
          Get your free business blueprint
        </button>
      </div>
    </section>
  )
}
