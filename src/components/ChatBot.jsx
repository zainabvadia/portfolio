import { useState, useRef, useEffect } from 'react'
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa'

const SYSTEM_PROMPT = `You are Zainab AI, a friendly and knowledgeable assistant for Zainab Vadia's portfolio website. Answer questions about Zainab concisely and professionally. Here is everything about her:

NAME: Zainab Mustak Vadia
LOCATION: Toronto, ON, Canada
EMAIL: zmvadia@my.yorku.ca
LINKEDIN: linkedin.com/in/zainabvadia
GITHUB: github.com/zainabvadia
PORTFOLIO: zainabvadia.vercel.app

EDUCATION:
- Bachelor of Arts in Computer Science, York University, Expected April 2028
- Awards: 2nd Place HackThe6ix, Best Use of DigitalOcean at ElleHacks

EXPERIENCE:
- Pfizer AI/ML Extern (May 2026 - Present) at Extern x Pfizer, Remote
  * Developing AI-powered document intelligence system using Python, OCR, and LLMs
  * Building RAG-based smart search system for pharmaceutical compliance documents
  * Implementing automated document routing and NLP-powered chatbot

- IT Support & Management Associate (Dec 2025 - Present) at AWS Cloud Club @ York
  * Deployed cloud-native apps on AWS using Amplify, S3, SageMaker
  * Standardized GitHub version control workflows across 5+ projects

LEADERSHIP:
- International Director (Sept 2025 - Present) at Lassonde Student Congress, York University
  * Supported 1,000+ international students with academic guidance

PROJECTS:
- PackWise: AI travel packing companion, 2nd Place HackThe6ix among 600+ participants
  * Flutter, Dart, Firebase, Gemini API
  * Cross-platform iOS and Android app with AI-generated packing recommendations
  * 35% improvement in packing accuracy

- JustTalk: Speech analytics platform, Best Use of DigitalOcean at ElleHacks among 200+ participants
  * TypeScript, Java, Spring Boot, PostgreSQL, Docker, Gemini API, Next.js
  * 85-90% transcript accuracy, video-transcript mapping

- PricePulse: Canadian inflation insight dashboard
  * Python, Streamlit, Pandas, Altair
  * Visualizes grocery price trends across 100+ products

SKILLS:
- Languages: Java, Python, C/C++, SQL, JavaScript, HTML/CSS, Dart
- Frameworks: React, Node.js, Next.js, Tailwind CSS, Spring Boot, FastAPI, Flutter
- Tools: Git, Docker, Firebase, Google Cloud, Vercel, Jira, VS Code

PERSONALITY: Zainab is ambitious, curious, and passionate about AI and full stack development. She loves reading (100+ books!), binge watching shows and movies, and can do a surprising amount of mental math. She is open to Fall 2026 internships.

Keep answers concise, friendly, and professional. If asked something you don't know about Zainab, say you don't have that information but suggest they reach out via email.`

const SUGGESTED = [
  'Tell me about her experience',
  'What projects has she built?',
  'What are her skills?',
  'Is she open to internships?'
]

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '👋 Hi! I\'m Zainab AI. Ask me anything about Zainab!' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = async (text) => {
    const userMsg = text || input.trim()
    if (!userMsg) return
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMsg }])
    setLoading(true)

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: [
            ...messages.filter(m => m.role !== 'assistant' || messages.indexOf(m) !== 0).map(m => ({
              role: m.role,
              content: m.content
            })),
            { role: 'user', content: userMsg }
          ]
        })
      })
      const data = await response.json()
      const reply = data.content?.[0]?.text || 'Sorry, I could not get a response.'
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, something went wrong. Please try again!' }])
    }
    setLoading(false)
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
        style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)' }}
      >
        {open ? <FaTimes size={24} color="white" /> : <FaRobot size={28} color="white" />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-96 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col" style={{ height: '520px' }}>

          {/* Header */}
          <div className="px-5 py-4 flex items-center gap-3" style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)' }}>
            <FaRobot size={22} color="white" />
            <div>
              <p className="text-white font-bold text-base">Zainab AI</p>
              <p className="text-white/70 text-xs">Ask me anything about Zainab!</p>
            </div>
            <button onClick={() => setOpen(false)} className="ml-auto text-white/70 hover:text-white">
              <FaTimes size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-[#0a0a0a]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-xs px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'text-white rounded-br-sm'
                      : 'bg-[#1a1a1a] text-gray-300 rounded-bl-sm border border-white/10'
                  }`}
                  style={msg.role === 'user' ? { background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)' } : {}}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#1a1a1a] border border-white/10 px-4 py-3 rounded-2xl rounded-bl-sm text-gray-400 text-sm">
                  Thinking...
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggested questions */}
          {messages.length <= 1 && (
            <div className="px-4 py-2 bg-[#0a0a0a] flex gap-2 overflow-x-auto">
              {SUGGESTED.map((s, i) => (
                <button
                  key={i}
                  onClick={() => send(s)}
                  className="text-xs px-3 py-2 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/30 whitespace-nowrap transition-colors bg-[#111]"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-[#0a0a0a] border-t border-white/10 flex gap-3 items-center">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Ask something..."
              className="flex-1 bg-[#1a1a1a] border border-white/10 rounded-full px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-400/50"
            />
            <button
              onClick={() => send()}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 shrink-0"
              style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)' }}
            >
              <FaPaperPlane size={14} color="white" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}