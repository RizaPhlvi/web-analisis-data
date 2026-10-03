export default function Navigation({ index, total, onPrev, onNext, onGo }) {
  return (
    <nav className="nav">
      <button className="btn" onClick={onPrev} disabled={index === 0}>← Previous</button>
      <div className="dots" aria-label="Indikator slide">
        {Array.from({ length: total }, (_, i) => (
          <button key={i} className={`dot ${i === index ? 'on' : ''}`} onClick={() => onGo(i)} aria-label={`Slide ${i + 1}`} />
        ))}
        <span className="counter">{String(index + 1).padStart(2, '0')} / {total}</span>
      </div>
      <button className="btn" onClick={onNext} disabled={index === total - 1}>Next →</button>
    </nav>
  )
}
