import ernestHero from '../assets/ernest-0.jpg'

interface Props {
  onOpenForm: () => void
}

const chips = [
  {
    angle: 0,
    delay: '0.00s',
    label: 'Email',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F5BFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    angle: 60,
    delay: '0.33s',
    label: 'DM',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F5BFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
        <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
      </svg>
    ),
  },
  {
    angle: 120,
    delay: '0.66s',
    label: 'Lead',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F5BFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="2.2" />
        <path d="M5.5 16a3.5 3.5 0 0 1 7 0M15 9h3M15 13h3" />
      </svg>
    ),
  },
  {
    angle: 180,
    delay: '0.99s',
    label: 'Funnel',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F5BFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 4h18l-7 8v6l-4 2v-8z" />
      </svg>
    ),
  },
  {
    angle: 240,
    delay: '1.32s',
    label: 'CRM',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F5BFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="5" height="16" rx="1" />
        <rect x="10" y="4" width="5" height="11" rx="1" />
        <rect x="17" y="4" width="4" height="7" rx="1" />
      </svg>
    ),
  },
  {
    angle: 300,
    delay: '1.65s',
    label: 'Socials',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1F5BFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="2.5" />
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="19" r="2.5" />
        <path d="m8.2 10.8 7.6-4.4M8.2 13.2l7.6 4.4" />
      </svg>
    ),
  },
]

export default function Hero({ onOpenForm }: Props) {
  return (
    <section className="bg-paper pt-16 pb-0 overflow-hidden text-center">
      <style>{`
        @media (max-width: 420px) {
          .cm-chip { width: 56px !important; height: 56px !important; margin: -28px 0 0 -28px !important; }
          .cm-chip svg { width: 22px !important; height: 22px !important; }
          .cm-tag { font-size: .78rem !important; padding: 8px 12px !important; }
        }
      `}</style>
      <div className="max-w-[1120px] mx-auto px-[22px]">
        <h1
          className="font-black uppercase leading-[1.02] tracking-[-0.01em] mx-auto mb-[26px] max-w-[22ch] text-ink"
          style={{ fontSize: 'clamp(2rem, 6vw, 3.6rem)', margin: '0 auto 26px' }}
        >
          Stop chasing leads. Start attracting <span style={{ color: '#1F5BFF' }}>raving fans</span> who want what you have and can afford you.
        </h1>
        <p
          className="max-w-[52ch] mx-auto mb-9 text-ink"
          style={{ fontSize: 'clamp(1.1rem, 3.2vw, 1.3rem)', lineHeight: 1.5 }}
        >
          We help raving fans find you and keep them coming back to buy more. You're one relationship from changing your future. We find that raving fan for you, over and over again.
        </p>

        <button
          onClick={onOpenForm}
          className="block w-full max-w-[520px] mx-auto border-0 cursor-pointer text-center no-underline bg-blue text-white font-black text-[1.1rem] tracking-[.04em] uppercase py-5 px-7 rounded-full hover:bg-blue-dark active:translate-y-px transition-colors relative z-[6]"
        >
          Get your free business blueprint
        </button>

        {/* Magnet stage */}
        <div
          className="relative mx-auto mt-14"
          style={{ maxWidth: 520, aspectRatio: '4/5' }}
          aria-hidden="true"
        >
          {/* Field rings */}
          <div
            className="cm-field-ring absolute left-1/2 top-[44%] rounded-full border border-dashed border-blue/25 z-[1]"
            style={{
              width: '120%',
              aspectRatio: '1',
              transform: 'translate(-50%,-50%)',
              animation: 'cm-spin 40s linear infinite',
            }}
          />
          <div
            className="cm-field-ring absolute left-1/2 top-[44%] rounded-full border border-dashed border-blue/15 z-[1]"
            style={{
              width: '150%',
              aspectRatio: '1',
              transform: 'translate(-50%,-50%)',
              animation: 'cm-spin 60s linear infinite reverse',
            }}
          />

          {/* Orbit chips */}
          <div
            className="absolute z-[3] left-1/2 top-[46%] pointer-events-none"
            style={{ width: '98%', aspectRatio: '1', transform: 'translate(-50%,-50%)' }}
          >
            <div
              className="cm-orbit-spin absolute inset-0"
              style={{ animation: 'cm-orbit 32s linear infinite' }}
            >
              {chips.map(({ angle, delay, label, svg }) => (
                <div
                  key={label}
                  className="absolute inset-0"
                  style={{ transform: `rotate(${angle}deg)` }}
                >
                  <div
                    className="cm-chip absolute left-1/2 top-0 flex flex-col items-center justify-center gap-[3px] rounded-[16px]"
                    style={{
                      ['--a' as string]: `${angle}deg`,
                      ['--d' as string]: delay,
                      width: 66,
                      height: 66,
                      margin: '-33px 0 0 -33px',
                      background: 'linear-gradient(145deg,rgba(255,255,255,.97),rgba(234,240,255,.92))',
                      border: '1.5px solid rgba(31,91,255,.35)',
                      boxShadow: '0 0 0 4px rgba(31,91,255,.08),0 0 22px rgba(31,91,255,.35),0 12px 24px -12px rgba(11,31,77,.5)',
                      animation: `cm-upright 32s linear infinite`,
                      transform: `rotate(calc(-1 * ${angle}deg))`,
                    }}
                  >
                    <span
                      className="relative"
                      style={{
                        width: 26,
                        height: 26,
                      }}
                    >
                      {svg}
                    </span>
                    <small
                      className="text-navy font-bold uppercase leading-none"
                      style={{ fontSize: '.58rem', letterSpacing: '.06em' }}
                    >
                      {label}
                    </small>
                    {/* Ping ring */}
                    <span
                      className="absolute rounded-[20px] border border-blue/35"
                      style={{
                        inset: -6,
                        animation: `cm-ping 2s ease-out infinite`,
                        animationDelay: delay,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ernest photo */}
          <div
            className="absolute z-[2] overflow-hidden"
            style={{
              inset: '8% 10% 0',
              borderRadius: '260px 260px 0 0',
              background: 'var(--deep)',
              boxShadow: '0 0 0 10px rgba(31,91,255,.10),0 0 0 22px rgba(31,91,255,.06)',
            }}
          >
            <img
              src={ernestHero}
              alt="Ernest Nkagbu"
              className="w-full h-full object-cover"
              style={{ objectPosition: '50% 30%' }}
            />
          </div>

          {/* Floating tags */}
          <div
            className="cm-tag absolute z-[4] bg-white rounded-full px-4 py-[10px] font-semibold text-[.9rem] flex items-center gap-2 whitespace-nowrap"
            style={{ left: '-2%', top: '30%', boxShadow: '0 12px 28px -12px rgba(11,31,77,.5)' }}
          >
            <span className="w-[10px] h-[10px] rounded-full bg-[#22C55E]" />
            5000+ Leads captured
          </div>
          <div
            className="cm-tag absolute z-[4] bg-white rounded-full px-4 py-[10px] font-semibold text-[.9rem] flex items-center gap-2 whitespace-nowrap"
            style={{ right: '-2%', top: '58%', boxShadow: '0 12px 28px -12px rgba(11,31,77,.5)' }}
          >
            <span className="w-[10px] h-[10px] rounded-full bg-[#22C55E]" />
            5× more reach
          </div>
        </div>
      </div>
    </section>
  )
}
