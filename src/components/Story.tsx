export default function Story() {
  return (
    <section style={{ padding: '84px 0', background: '#fff' }}>
      <div className="max-w-[1120px] mx-auto px-[22px] text-center">
        <h2 className="font-black uppercase text-ink leading-[1.08] mb-4" style={{ fontSize: 'clamp(2rem,6vw,3rem)' }}>
          Every great story has a hero and a guide
        </h2>
        <p className="text-muted text-[1.05rem] mx-auto m-0" style={{ maxWidth: '46ch' }}>
          We use the oldest story in the world to build relationships that last.
        </p>

        <div
          className="grid mx-auto mt-12"
          style={{ gap: 22, maxWidth: 1000, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}
        >
          {[
            { who: 'The hero', title: 'Your client', body: "They have a problem they can't solve on their own, and they're looking for someone they can trust to help.", win: false },
            { who: 'The guide', title: 'You', body: "You have exactly what they need. The trouble is, they can't find you, or they forget you before they're ready to buy.", win: false },
            { who: 'The happy ending', title: 'Raving fans', body: 'We connect the right clients to you and keep the relationship going. They win, they tell their friends, and they keep coming back to buy more.', win: true },
          ].map(({ who, title, body, win }) => (
            <div
              key={who}
              className="text-left"
              style={{
                background: win ? '#0B1F4D' : '#F2F4F8',
                borderRadius: 18,
                padding: '28px 24px',
                borderTop: `6px solid ${win ? '#FF5A3C' : '#1F5BFF'}`,
                color: win ? '#fff' : 'inherit',
              }}
            >
              <span style={{
                display: 'inline-block',
                background: '#FF5A3C',
                color: '#fff',
                fontWeight: 800,
                fontStyle: 'italic',
                fontSize: '.95rem',
                padding: '6px 14px',
                borderRadius: 6,
                marginBottom: 14,
              }}>
                {who}
              </span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, lineHeight: 1.25, margin: '0 0 10px', color: win ? '#fff' : '#0B1530' }}>
                {title}
              </h3>
              <p style={{ margin: 0, fontSize: '1.02rem', lineHeight: 1.65, color: win ? 'rgba(255,255,255,.88)' : '#4D5B78' }}>
                {body}
              </p>
            </div>
          ))}
        </div>

        <p className="font-black text-ink mx-auto mt-11 mb-0" style={{ fontSize: 'clamp(1.3rem,4.4vw,1.9rem)', lineHeight: 1.3, maxWidth: '26ch' }}>
          Be a hero to your raving fans. We'll make sure they find you.
        </p>
      </div>
    </section>
  )
}
