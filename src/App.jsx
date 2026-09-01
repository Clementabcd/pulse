import { useState } from 'react'
import './styles.css'

const stats = [
  { label: 'Focus', value: '2h 24m', accent: 'violet' },
  { label: 'Breaks', value: '3', accent: 'orange' },
]

function Stat({ label, value, accent }) {
  return (
    <article className="stat-card">
      <span className={"stat-dot " + accent} />
      <p>{label}</p>
      <strong>{value}</strong>
    </article>
  )
}

function ScoreRing({ score }) {
  return (
    <div className="score-ring" style={{ '--score': score }}>
      <div className="score-inner">
        <strong>{score}</strong>
        <span>focus score</span>
      </div>
    </div>
  )
}

function App() {
  const [sessions, setSessions] = useState(4)

  return (
    <main className="page-shell">
      <section className="dashboard">
        <header className="header">
          <div className="brand">
            <span className="brand-mark"><i /><i /><i /></span>
            <h1>Pulse</h1>
          </div>
          <div className="today"><span className="calendar-dot" />Tuesday, June 18</div>
        </header>

        <div className="welcome">
          <div>
            <p className="eyebrow">DAILY FOCUS</p>
            <h2>Make today count.</h2>
          </div>
          <p className="summary">You’re building a steady rhythm. Keep your attention where it matters.</p>
        </div>

        <section className="score-card">
          <div>
            <p className="eyebrow">TODAY’S FOCUS SCORE</p>
            <h3>Thoughtful work,<br />well paced.</h3>
            <p className="score-copy">You’re ahead of your weekly average. A great session is one click away.</p>
            <button onClick={() => setSessions((count) => count + 1)}>
              <span>↗</span> Start session
            </button>
          </div>
          <ScoreRing score={84} />
        </section>

        <section className="stats" aria-label="Daily stats">
          {stats.map((stat) => <Stat key={stat.label} {...stat} />)}
          <article className="stat-card">
            <span className="stat-dot green" />
            <p>Sessions</p>
            <strong>{sessions}</strong>
          </article>
        </section>

        <section className="progress-section">
          <div className="progress-heading">
            <div>
              <p className="eyebrow">FOCUS RHYTHM</p>
              <h3>Your day, at a glance</h3>
            </div>
            <span>84% of goal</span>
          </div>
          <div className="bar-chart" aria-label="Focus rhythm chart">
            {[42, 68, 50, 88, 74, 96, 64].map((height, index) => (
              <div className="bar-wrap" key={index}>
                <div className={"bar " + (index === 5 ? 'active' : '')} style={{ height: height + '%' }} />
              </div>
            ))}
          </div>
          <div className="days"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div>
        </section>
      </section>
    </main>
  )
}

export default App
