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
    const height = wrap.clientHeight

    const items = lines.map((text, i) => {
      const el = document.createElement('div')
      el.textContent = text
      el.style.position = 'absolute'
      el.style.left = `${5 + ((i * 37) % 70)}%`
      el.style.fontFamily = 'monospace'
      el.style.fontSize = '13px'
      el.style.whiteSpace = 'nowrap'
      wrap.appendChild(el)
      return {
        el,
        y: (height / lines.length) * i,
        speed: 0.25 + Math.random() * 0.2,
      }
    })

    let frameId
    const tick = () => {
      items.forEach((item) => {
        item.y -= item.speed
        if (item.y < -30) item.y = height + 30
        item.el.style.top = `${item.y}px`
        const fade = Math.min(item.y / 60, (height - item.y) / 150, 1)
        item.el.style.opacity = Math.max(fade, 0) * 0.5
        item.el.style.color = 'rgba(148, 210, 255, 1)'
      })
      frameId = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(frameId)
      items.forEach((item) => item.el.remove())
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}
    />
  )
}