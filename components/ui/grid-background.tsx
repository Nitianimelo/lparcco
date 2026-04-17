export function GridBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: '#030712',
        backgroundImage: `
          radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.18) 1px, transparent 0),
          radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0),
          radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.12) 1px, transparent 0)
        `,
        backgroundSize: '20px 20px, 30px 30px, 25px 25px',
        backgroundPosition: '0 0, 10px 10px, 15px 5px',
      }}
    />
  )
}
