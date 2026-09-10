import { useEffect, useRef } from 'react'

const lines = [
  "// currently compiling: sleep schedule",
  "const coffee = new Coffee(); coffee.refill();",
  "if (gpa === 4.0) { flex = true; }",
  "// 210 books read, 0 regrets",
  "status: open_to_internships = true;",
  "for (let i = 0; i < hackathons; i++) { win(); }",
  "// last commit: 2:47am, no comment",
  "while (learning) { keepGoing(); }",
  "console.log('hire me maybe');",
  "git commit -m 'it works, dont ask how'",
]

export default function FloatingCodeBg() {
  const wrapRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const els = lines.map((text, i) => {
      const el = document.createElement('div')
      el.textContent = text
      el.style.position = 'absolute'
      el.style.left = `${5 + Math.random() * 70}%`
      el.style.top = '110%'
      el.style.fontFamily = 'monospace'
      el.style.fontSize = '12px'
      el.style.color = 'rgba(255,255,255,0.18)'
      el.style.whiteSpace = 'nowrap'
      el.style.animation = `floatUp ${14 + Math.random() * 10}s linear infinite`
      el.style.animationDelay = `${-i * 2.2}s`
      wrap.appendChild(el)
      return el
    })
    return () => els.forEach((el) => el.remove())
  }, [])

  return (
    <div
      ref={wrapRef}
      style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}
    />
  )
}