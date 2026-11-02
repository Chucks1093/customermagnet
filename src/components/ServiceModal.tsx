interface Props {
  serviceKey: string | null
  onClose: () => void
  onOpenForm: () => void
}

const details: Record<string, {
  title: string
  intro: string
  items: string[]
}> = {
  social: {
    title: 'Social Media Management',
    intro: "Stay visible without living on your phone. We plan, create and post content that keeps your business in front of the right people, so they get to know you and trust you before they ever reach out.",
    items: [
      'A content plan and monthly posting calendar',
      'Graphics, carousels and short videos',
      'Captions written in your voice',
      'Posting and scheduling on the platforms you choose',
      'A monthly check in on what\'s working',
    ],
  },
  email: {
    title: 'Email Marketing',
    intro: "Stay top of mind without writing every email yourself. Most people aren't ready to buy the first time they hear from you. Regular, helpful emails keep you in their inbox, so you're the first person they think of when they are ready.",
    items: [
      'Weekly email campaigns and newsletters',
      'A welcome email for every new lead',
      'Gentle follow up emails for people who aren\'t ready yet',
      'Your contact list organised and kept clean',
      'Simple updates on who is opening and clicking',
    ],
  },
  crm: {
    title: 'CRM Setup and Management',
    intro: "No more lost leads or forgotten follow ups. Your CRM becomes one place for every contact, conversation and appointment, so you always know who needs what next.",
    items: [
      'A CRM set up around the way you already work',
      'Clear stages that show where every lead stands',
      'Automatic reminders and follow up messages',
      'Online booking connected to your calendar',
      'Help using it, so it saves you time instead of adding work',
    ],
  },
  funnel: {
    title: 'Funnel Building',
    intro: "Turn interest into booked calls. When someone is curious about your business, they need one clear next step. We build simple pages that explain what you offer, answer common questions and make it easy to reach out.",
    items: [
      'Mapping the path from first click to booked call',
      'Landing pages and lead capture forms',
      'Free offers that attract the right people',
      'Booking and thank you pages',
      'Everything connected to your CRM, so no lead gets missed',
    ],
  },
}

export default function ServiceModal({ serviceKey, onClose, onOpenForm }: Props) {
  const isOpen = serviceKey !== null
  const detail = serviceKey ? details[serviceKey] : null

  const handleOpenForm = () => {
    onClose()
    setTimeout(onOpenForm, 300)
  }

  return (
    <div
      className="fixed inset-0 flex items-start justify-center overflow-y-auto"
      style={{
        zIndex: 75,
        background: 'rgba(6,14,36,.75)',
        padding: `calc(16px + env(safe-area-inset-top, 0px)) 12px calc(16px + env(safe-area-inset-bottom, 0px))`,
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? 'visible' : 'hidden',
        transition: 'opacity .2s ease, visibility .2s',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
    >
      <div
        className="relative w-full max-w-[620px] mx-auto rounded-[22px] text-white px-[26px] py-14 pb-[30px]"
        style={{
          backgroundColor: '#2A4FE3',
          backgroundImage: 'radial-gradient(rgba(255,255,255,.14) 1px,transparent 1.4px)',
          backgroundSize: '22px 22px',
          transform: isOpen ? 'none' : 'translateY(20px)',
          transition: 'transform .25s ease',
        }}
      >
        <button
          className="absolute top-[10px] right-[10px] w-10 h-10 rounded-full border-0 bg-white/20 text-white text-[1.6rem] leading-none cursor-pointer flex items-center justify-center"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        {detail && (
          <>
            <p className="m-0 mb-[6px] text-[.85rem] font-semibold tracking-[.12em] uppercase opacity-75">
              What's included
            </p>
            <h2 className="m-0 mb-[18px] font-extrabold leading-[1.15] text-white" style={{ fontSize: 'clamp(1.6rem, 6vw, 2.2rem)' }}>
              {detail.title}
            </h2>
            <p className="m-0 mb-[26px] text-[1.08rem] leading-[1.75] opacity-90">
              {detail.intro}
            </p>
            <ul className="list-none m-0 mb-[26px] p-0">
              {detail.items.map((item) => (
                <li
                  key={item}
                  className="relative pl-[30px] py-4 border-b border-white/20 text-[1.05rem] leading-[1.45] last:border-b-0"
                >
                  <span className="absolute left-1 top-6 w-[9px] h-[9px] rounded-full bg-white/85" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="m-0 mb-[18px] text-[.98rem] opacity-85">
              Every service starts with understanding your business. Your free blueprint is the first step.
            </p>
            <button
              onClick={handleOpenForm}
              className="block w-full border-0 cursor-pointer text-center bg-white text-navy font-bold text-[1.05rem] tracking-[.02em] uppercase py-5 px-7 rounded-full hover:bg-sky active:translate-y-px transition-colors"
            >
              Get my free business blueprint
            </button>
          </>
        )}
      </div>
    </div>
  )
}
