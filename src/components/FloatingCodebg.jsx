import { useEffect, useRef } from 'react'

const lines = [
  "// currently compiling: sleep schedule",
  "const coffee = new Coffee(); coffee.refill();",
  "if (gpa === 4.0) { flex = true; }",
  "status: open_to_internships = true;",
  "while (learning) { keepGoing(); }",
  "console.log('hire me maybe');",
]

const palette = ['#06b6d4', '#8b5cf6']

export default function FloatingCodeBg() {
  const wrapRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const height = wrap.clientHeight
    const safeHeight = height - 140

    const items = lines.map((text, i) => {
      const el = document.createElement('div')
      el.textContent = text
      el.style.position = 'absolute'
      el.style.left = i % 2 === 0
        ? `${2 + Math.random() * 13}%`
        : `${80 + Math.random() * 13}%`
      el.style.fontFamily = 'monospace'
      el.style.fontSize = '13px'
      el.style.fontWeight = '600'
      el.style.whiteSpace = 'nowrap'
      wrap.appendChild(el)
      return {
        el,
        y: (safeHeight / lines.length) * i * 1.6,
        speed: 0.2 + Math.random() * 0.15,
        color: palette[i % palette.length],
      }
    })

    let frameId
    const tick = () => {
      items.forEach((item) => {
        item.y -= item.speed
        if (item.y < -30) item.y = safeHeight + 30
        item.el.style.top = `${item.y}px`
        const fade = Math.min(item.y / 60, (safeHeight - item.y) / 150, 1)
        item.el.style.opacity = Math.max(fade, 0) * 0.6
        item.el.style.color = item.color
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