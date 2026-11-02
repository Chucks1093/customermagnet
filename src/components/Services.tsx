interface Props {
  onOpenService: (key: string) => void
}

const services = [
  {
    key: 'social',
    badge: 'Be seen',
    title: 'Social Media Management',
    desc: 'Consistent posts on the platforms your customers use, so they keep seeing you and trusting you.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="#fff" />
      </svg>
    ),
  },
  {
    key: 'email',
    badge: 'Stay in touch',
    title: 'Email Marketing',
    desc: 'Weekly emails that keep you top of mind, so people think of you first when they\'re ready to buy.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    key: 'crm',
    badge: 'Get organised',
    title: 'CRM Setup and Management',
    desc: 'Every lead in one place, with clear stages and reminders, so nobody falls through the cracks.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6">
        <rect x="3" y="4" width="5" height="16" rx="1" />
        <rect x="10" y="4" width="5" height="11" rx="1" />
        <rect x="17" y="4" width="4" height="7" rx="1" />
      </svg>
    ),
  },
  {
    key: 'funnel',
    badge: 'Turn clicks into calls',
    title: 'Funnel Building',
    desc: 'A clear page with one job: turn curious visitors into booked calls, connected straight to your CRM.',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6">
        <path d="M3 4h18l-7 8v6l-4 2v-8z" />
      </svg>
    ),
  },
]

export default function Services({ onOpenService }: Props) {
  return (
    <section className="py-[80px] text-center" id="services">
      <div className="max-w-[1120px] mx-auto px-[22px]">
        <h2
          className="font-black uppercase leading-[1.05] mb-[14px] text-ink"
          style={{ fontSize: 'clamp(2.2rem, 7vw, 3.6rem)' }}
        >
          <em className="not-italic text-blue">Four ways</em> we bring customers to you
        </h2>
        <p className="text-[1.15rem] text-muted max-w-[40ch] mx-auto">
          Pick one or connect them all into a single system that works while you focus on your clients.
        </p>
        <hr className="border-0 border-t-2 border-[#C9D2E3] max-w-[900px] mx-auto my-11" />

        <div className="services-grid grid max-w-[1000px] mx-auto" style={{ gap: 28 }}>
          {services.map(({ key, badge, title, desc, svg }) => (
            <div key={key} className="flex flex-col text-center">
              <span
                className="self-end bg-badge text-white font-extrabold italic text-[.95rem] px-4 py-2"
                style={{ borderRadius: '6px 6px 0 6px' }}
              >
                {badge}
              </span>
              <h3
                className="font-extrabold uppercase leading-[1.2] my-[14px] text-ink"
                style={{ fontSize: 'clamp(1rem, 3vw, 1.35rem)' }}
              >
                {title}
              </h3>
              <div
                className="aspect-square rounded-full bg-navy flex items-center justify-center mx-[6%] mb-[18px] relative"
              >
                <span className="w-[46%] h-[46%]">{svg}</span>
              </div>
              <p className="text-[.95rem] text-muted mb-5 flex-1">{desc}</p>
              <button
                onClick={() => onOpenService(key)}
                className="block w-full border-0 cursor-pointer text-center bg-blue text-white font-semibold text-[1rem] py-[15px] px-[22px] rounded-full hover:bg-blue-dark active:translate-y-px transition-colors"
              >
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-grid { grid-template-columns: repeat(2, 1fr); }
        @media (min-width: 900px) {
          .services-grid { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>
    </section>
  )
}
