import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="py-8 px-6 text-center">
      <p className="text-text-muted text-sm">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  )
}
