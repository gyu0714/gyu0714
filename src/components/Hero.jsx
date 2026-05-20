import { Github, Mail, ExternalLink } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16"
    >
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* 프로필 카드 (PDF 1페이지 왼쪽 카드 스타일) */}
        <div className="flex justify-center md:justify-start">
          <div className="neu-card p-8 flex flex-col items-center gap-5 w-64">
            {/* 아바타 */}
            <div
              className="w-28 h-28 rounded-full flex items-center justify-center text-5xl"
              style={{
                background: 'linear-gradient(135deg, #5b9cf6, #1d6ae5)',
                boxShadow: '4px 4px 10px #b8cce0, -4px -4px 10px #ffffff',
              }}
            >
              {profile.avatar ? (
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                '👤'
              )}
            </div>

            {/* 이름 / 역할 */}
            <div className="text-center">
              <p className="text-xl font-bold text-text">{profile.name}</p>
              <p className="text-sm font-semibold text-primary mt-1">{profile.role}</p>
              <p className="text-xs text-text-muted mt-1">{profile.birth}</p>
            </div>

            {/* 구분선 */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-shadow-dark to-transparent" />

            {/* 소셜 링크 */}
            <div className="flex gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="neu-btn p-3 rounded-xl text-text-muted hover:text-primary"
              >
                <Github size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="neu-btn p-3 rounded-xl text-text-muted hover:text-primary"
              >
                <Mail size={18} />
              </a>
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neu-btn p-3 rounded-xl text-text-muted hover:text-primary"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* 인트로 텍스트 (PDF 1페이지 오른쪽 스타일) */}
        <div className="flex flex-col gap-10">
          <div>
            <p className="text-text leading-relaxed text-lg">
              {profile.intro.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < profile.intro.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          <div>
            <p className="text-text-muted leading-relaxed">
              {profile.intro2.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < profile.intro2.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <a href="#projects" className="neu-btn text-primary font-semibold">
              프로젝트 보기
            </a>
            <a href="#contact" className="neu-btn text-text-muted">
              연락하기
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
