export default function Footer() {
  return (
    <footer
      className="bg-blue text-white"
      style={{ padding: `48px 0 calc(40px + env(safe-area-inset-bottom, 0px))` }}
    >
      <div className="max-w-[1120px] mx-auto px-[22px]">
        <a
          href="#top"
          className="flex items-center gap-[10px] no-underline text-white font-extrabold text-[1.6rem] tracking-[.01em] mb-[34px]"
        >
          <svg width="34" height="34" viewBox="0 0 40 40" aria-hidden="true">
            <path d="M8 6h8v14a4 4 0 0 0 8 0V6h8v14a12 12 0 0 1-24 0z" fill="#FFFFFF" />
            <rect x="8" y="6" width="8" height="6" fill="rgba(255,255,255,0.4)" />
            <rect x="24" y="6" width="8" height="6" fill="rgba(255,255,255,0.4)" />
          </svg>
          <span><strong>CUSTOMER</strong> <span className="font-normal opacity-85">MAGNET</span></span>
        </a>

        <nav className="border-t border-white/30">
          {[
            { href: '#blueprint', label: 'Free Blueprint' },
            { href: '#services', label: 'Services' },
            { href: '#faq', label: 'FAQs' },
            { href: '#about', label: 'About' },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="block py-[22px] border-b border-white/30 no-underline font-bold text-[1.2rem] tracking-[.1em] uppercase text-white hover:opacity-80"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="mt-[30px] mb-2">
          <a className="block no-underline text-[1.05rem] py-[6px] opacity-95 text-white" href="tel:+18302669617">
            +1 (830) 266 9617
          </a>
          <a className="block no-underline text-[1.05rem] py-[6px] opacity-95 text-white" href="mailto:contact@customermagnet.net">
            contact@customermagnet.net
          </a>
        </div>

        <div className="flex gap-3 mb-[22px]">
          <a
            href="https://www.instagram.com/ernestnkagbu"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            className="w-12 h-12 rounded-full border border-white/60 flex items-center justify-center hover:bg-white/10"
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
            className="w-12 h-12 rounded-full border border-white/60 flex items-center justify-center hover:bg-white/10"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V21h-4z" />
            </svg>
          </a>
        </div>

        <p className="text-[1.15rem] leading-[1.6] my-[30px] max-w-[60ch] opacity-95">
          Every business deserves customers who find it, trust it and come back. We build the system behind your business so you can stay top of mind with your current and future clients.
        </p>
        <p className="font-light leading-[1.35] my-[34px] mb-[18px] opacity-95" style={{ fontSize: 'clamp(.95rem, 3.4vw, 1.15rem)' }}>
          Ernest's results and the results of any Customer Magnet client are not typical and are not a guarantee of your success. Every business is different, and your results will depend on your industry, market, offer, effort, follow through and many other factors outside our control. Customer Magnet builds and manages marketing and customer systems such as social media, email marketing, CRM and funnels. We do not guarantee a specific number of leads, sales, appointments or amount of revenue. Responding to leads, holding sales conversations and closing sales remain the responsibility of each client unless agreed otherwise in writing. We do not give legal, tax, financial or other professional advice. Any examples, numbers or experiences shared on this website are for informational purposes only. The information, images and content on this website are the property of Customer Magnet, and any use without written permission is prohibited. Copyright © 2026 Customer Magnet. All Rights Reserved.
        </p>
        <p className="text-[.85rem] opacity-80 m-0">customermagnet.net</p>
      </div>
    </footer>
  )
}
