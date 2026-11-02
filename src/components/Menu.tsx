interface Props {
  isOpen: boolean
  onClose: () => void
  onOpenForm: () => void
}

export default function Menu({ isOpen, onClose, onOpenForm }: Props) {
  const handleNavClick = (href: string) => {
    onClose()
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 350)
  }

  return (
    <div
      className="fixed inset-0 z-60 bg-navy text-white overflow-y-auto"
      style={{
        padding: `calc(20px + env(safe-area-inset-top, 0px)) 16px calc(28px + env(safe-area-inset-bottom, 0px))`,
        transform: isOpen ? 'none' : 'translateY(-100%)',
        visibility: isOpen ? 'visible' : 'hidden',
        transition: 'transform .35s ease, visibility .35s',
        zIndex: 60,
      }}
      aria-hidden={!isOpen}
    >
      <div className="flex justify-between items-center max-w-[720px] mx-auto mb-6 px-[6px]">
        <span className="flex items-center gap-[10px] font-extrabold text-[1.25rem]">
          <strong>CUSTOMER</strong>{' '}
          <span className="font-normal opacity-85">MAGNET</span>
        </span>
        <button
          className="bg-transparent border-0 text-white text-[2rem] leading-none cursor-pointer px-[10px] py-[6px]"
          onClick={onClose}
          aria-label="Close menu"
        >
          ×
        </button>
      </div>

      <nav className="max-w-[720px] mx-auto grid gap-3">
        <button
          className="block w-full text-left bg-blue px-6 py-[22px] text-[1.25rem] font-medium no-underline text-white cursor-pointer border-0 hover:bg-blue-dark"
          onClick={() => { onClose(); setTimeout(onOpenForm, 350) }}
        >
          Free Business Blueprint
        </button>
        <button
          className="block w-full text-left bg-blue px-6 py-[22px] text-[1.25rem] font-medium no-underline text-white cursor-pointer border-0 hover:bg-blue-dark"
          onClick={() => handleNavClick('#services')}
        >
          Services
        </button>
        <button
          className="block w-full text-left bg-blue px-6 py-[22px] text-[1.25rem] font-medium no-underline text-white cursor-pointer border-0 hover:bg-blue-dark"
          onClick={() => handleNavClick('#faq')}
        >
          FAQs
        </button>
        <button
          className="block w-full text-left bg-blue px-6 py-[22px] text-[1.25rem] font-medium no-underline text-white cursor-pointer border-0 hover:bg-blue-dark"
          onClick={() => handleNavClick('#about')}
        >
          About Ernest
        </button>
      </nav>

      <div className="max-w-[720px] mx-auto mt-7 px-[6px]">
        <h3 className="text-[.95rem] font-semibold opacity-75 m-0 mb-3">Follow Ernest</h3>
        <div className="flex gap-3 mb-[22px]">
          <a
            href="https://www.instagram.com/ernestnkagbu"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="#fff" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ernestnkagbu"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V21h-4z" />
            </svg>
          </a>
        </div>
        <h3 className="text-[.95rem] font-semibold opacity-75 mb-3">Talk to us</h3>
        <a className="block no-underline text-[1.05rem] py-[6px] opacity-95" href="tel:+18302669617">
          +1 (830) 266 9617
        </a>
        <a className="block no-underline text-[1.05rem] py-[6px] opacity-95" href="mailto:contact@customermagnet.net">
          contact@customermagnet.net
        </a>
        <button
          className="mt-7 w-full border-0 cursor-pointer text-center no-underline bg-blue text-white font-bold text-[1.05rem] tracking-[.02em] uppercase py-5 px-7 rounded-full hover:bg-blue-dark active:translate-y-px transition-colors"
          onClick={() => { onClose(); setTimeout(onOpenForm, 350) }}
        >
          Get my free blueprint
        </button>
      </div>
    </div>
  )
}
