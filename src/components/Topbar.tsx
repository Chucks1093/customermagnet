interface Props {
  onOpenMenu: () => void
}

function LogoIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" aria-hidden="true">
      <path d="M8 6h8v14a4 4 0 0 0 8 0V6h8v14a12 12 0 0 1-24 0z" fill="#FFFFFF" />
      <rect x="8" y="6" width="8" height="6" fill="#1F5BFF" />
      <rect x="24" y="6" width="8" height="6" fill="#1F5BFF" />
    </svg>
  )
}

export default function Topbar({ onOpenMenu }: Props) {
  return (
    <header
      className="sticky top-0 z-40 bg-navy"
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="max-w-[1120px] mx-auto px-[22px] flex items-center justify-between h-[72px]">
        <a
          href="#top"
          className="flex items-center gap-[10px] no-underline font-extrabold text-[1.25rem] tracking-[.01em]"
          style={{ color: '#ffffff', textDecoration: 'none' }}
          aria-label="Customer Magnet home"
        >
          <LogoIcon />
          <span style={{ color: '#ffffff' }}>
            <strong>CUSTOMER</strong>{' '}
            <span style={{ fontWeight: 400, opacity: 0.85 }}>MAGNET</span>
          </span>
        </a>

        <button
          className="bg-transparent border-0 p-[10px] cursor-pointer flex flex-col gap-[6px]"
          onClick={onOpenMenu}
          aria-label="Open menu"
          aria-expanded="false"
        >
          <i className="block w-[30px] h-[3px] rounded-[2px] bg-white not-italic" />
          <i className="block w-[30px] h-[3px] rounded-[2px] bg-white not-italic" />
          <i className="block w-[30px] h-[3px] rounded-[2px] bg-white not-italic" />
        </button>
      </div>
    </header>
  )
}
