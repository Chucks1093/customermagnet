interface Props {
  onOpenForm: () => void
}

function Sheet({ title, rows, className, style }: {
  title: string
  rows: [string, string][]
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <div
      className={`absolute top-5 w-[46%] h-[180px] bg-white overflow-hidden ${className ?? ''}`}
      style={{
        border: '1px solid #D7DEEC',
        boxShadow: '0 18px 30px -18px rgba(11,31,77,.4)',
        ...style,
      }}
    >
      <div className="bg-navy text-white font-bold px-[10px] py-[6px] uppercase" style={{ fontSize: '.72rem' }}>
        {title}
      </div>
      {rows.map(([key, val]) => (
        <div
          key={key}
          className="grid border-b border-[#E5EAF4]"
          style={{ gridTemplateColumns: '30% 1fr', fontSize: '.55rem' }}
        >
          <span className="bg-blue text-white px-[6px] py-[5px] font-semibold">{key}</span>
          <span className="text-muted px-[6px] py-[5px]">{val}</span>
        </div>
      ))}
    </div>
  )
}

export default function Blueprint({ onOpenForm }: Props) {
  return (
    <section className="bg-paper py-14 pb-[72px]" id="blueprint">
      <div className="max-w-[1120px] mx-auto px-[22px]">
        <div
          className="relative bg-[#FAFBFD] rounded-[18px] max-w-[900px] mx-auto overflow-hidden text-center"
          style={{ padding: '56px 22px 30px' }}
        >
          {/* Badge */}
          <span
            className="absolute top-0 right-0 bg-badge text-white font-extrabold italic text-[1.25rem] px-7 py-[14px]"
            style={{ borderRadius: '0 18px 0 18px' }}
          >
            It's Free
          </span>

          {/* Sheets graphic — hidden on small screens */}
          <div className="relative h-[220px] max-w-[640px] mx-auto my-5" aria-hidden="true">
            <Sheet
              title="1: Attract"
              rows={[['Social','Who sees you'],['Content','What you post'],['Offer','Why they reach out'],['Capture','Where leads land']]}
              className="left-0"
              style={{ transform: 'perspective(600px) rotateY(18deg)', opacity: .9 }}
            />
            <Sheet
              title="2: Capture and follow up"
              rows={[['Funnel','One clear next step'],['CRM','Every lead in one place'],['Email','Stay top of mind'],['Booking','Calls on your calendar'],['Gaps','Where leads slip away'],['90 days','What to fix first']]}
              className="left-1/2"
              style={{ width: '54%', height: 210, transform: 'translateX(-50%)', zIndex: 2, top: 0 }}
            />
            <Sheet
              title="3: Keep"
              rows={[['Nurture','Not ready yet'],['Reviews','Happy customers'],['Referrals','Word of mouth'],['Repeat','Come back again']]}
              className="right-0"
              style={{ transform: 'perspective(600px) rotateY(-18deg)', opacity: .9 }}
            />
          </div>

          <h2
            className="font-black uppercase leading-[1.1] mb-3 text-ink"
            style={{ fontSize: 'clamp(1.7rem, 5.5vw, 2.6rem)', margin: '0 0 12px' }}
          >
            Your Free Business Blueprint
          </h2>
          <p className="max-w-[46ch] mx-auto mb-7 text-muted text-[1.05rem]">
            Tell us your biggest challenge and where you want to be in 90 days. We'll show you where customers are slipping away and the simple system to fix it.
          </p>
          <button
            onClick={onOpenForm}
            className="block w-full max-w-[520px] mx-auto border-0 cursor-pointer text-center bg-blue text-white font-bold text-[1.05rem] tracking-[.02em] uppercase py-5 px-7 rounded-full hover:bg-blue-dark active:translate-y-px transition-colors"
          >
            Get my free business blueprint
          </button>
        </div>
      </div>
    </section>
  )
}
