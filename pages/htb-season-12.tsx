import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Award, ExternalLink, Flag, ShieldCheck, Trophy } from 'lucide-react';

const machines = [
  { name: 'Layover', difficulty: 'Medium', os: 'Linux' },
  { name: 'Touch', difficulty: 'Easy', os: 'Windows' },
  { name: 'Stream', difficulty: 'Medium', os: 'Linux' },
  { name: 'Autopilot', difficulty: 'Insane', os: 'Windows' },
  { name: 'DutyBound', difficulty: 'Medium', os: 'Linux' },
  { name: 'Takeoff', difficulty: 'Hard', os: 'Linux' },
  { name: 'Unclaimed', difficulty: 'Medium', os: 'Windows' },
  { name: 'RedEye', difficulty: 'Hard', os: 'Windows' },
  { name: 'Handler', difficulty: 'Insane', os: 'Windows' },
];

const skills = [
  'Linux and Windows penetration testing',
  'Network and service enumeration',
  'Active Directory enumeration',
  'LDAP and Kerberos authentication',
  'DPAPI and credential analysis',
  'Certificate analysis and ADCS',
  'Privilege escalation',
  'Windows remote administration',
  'Post-exploitation and troubleshooting',
];

const evidence = [
  {
    src: '/assets/images/htb-season-12/season-dashboard.webp',
    alt: 'Hack The Box Season 12 Aero dashboard showing Holo tier, rank 525, 660 points, and nine user solves',
    caption: 'Season dashboard snapshot: Holo tier, rank #525, 660 points, and 9 user solves.',
  },
  {
    src: '/assets/images/htb-season-12/season-progress.webp',
    alt: 'Hack The Box season progress showing the Holo tier and season point totals',
    caption: 'Progress and Holo tier details from the season dashboard.',
  },
  {
    src: '/assets/images/htb-season-12/season-machines.webp',
    alt: 'Hack The Box Season 12 machine list with all nine machines and completion indicators',
    caption: 'Season machine list showing the nine completed user flags.',
  },
];

const stats = [
  { label: 'Machines completed', value: '9', icon: ShieldCheck },
  { label: 'Season tier', value: 'Holo', icon: Award },
  { label: 'Leaderboard rank', value: '#525', icon: Trophy },
  { label: 'Season points', value: '660', icon: Flag },
];

export default function HtbSeason12Page() {
  return (
    <>
      <Head>
        <title>Hack The Box Season 12 — Aero | Arpit Kumar</title>
        <meta name="description" content="Season 12: Aero Hack The Box achievement: nine machines completed, Holo tier, and hands-on Windows and Linux security practice." />
      </Head>
      <main className="min-h-screen bg-background px-4 py-10 text-text-primary sm:px-6 md:py-16">
        <article className="mx-auto max-w-6xl">
          <Link href="/#projects" className="inline-flex items-center gap-2 rounded-md text-sm font-bold text-text-muted transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to portfolio
          </Link>

          <header className="relative mt-8 overflow-hidden rounded-2xl border border-primary/30 bg-background-card p-6 shadow-xl sm:p-10 md:p-14">
            <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
            <div className="relative max-w-4xl">
              <p className="font-mono text-xs font-black uppercase tracking-[0.2em] text-primary sm:text-sm">Hack The Box / Season achievement</p>
              <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-5xl md:text-7xl">Season 12 — Aero</h1>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-text-secondary sm:text-xl">
                Completed all nine seasonal machines across Linux and Windows, earning Holo tier in Hack The Box’s Special Season Aero.
              </p>
              <p className="mt-3 text-sm text-text-muted">Season period: September–November 2026 · Difficulty range: Easy to Insane</p>
              <a href="https://app.hackthebox.com/users/3929565" target="_blank" rel="noreferrer" className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-5 py-3 font-bold text-background transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                View Hack The Box profile <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </header>

          <section aria-label="Season achievement metrics" className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.map(({ label, value, icon: Icon }) => (
              <div key={label} className="rounded-xl border border-border bg-background-elevated p-4 sm:p-5">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <p className="mt-3 font-display text-2xl font-black sm:text-3xl">{value}</p>
                <p className="mt-1 text-xs font-semibold text-text-muted sm:text-sm">{label}</p>
              </div>
            ))}
          </section>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_.7fr]">
            <section className="rounded-2xl border border-border bg-background-card p-6 sm:p-8">
              <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-primary">Season recap</p>
              <h2 className="mt-3 font-display text-2xl font-black sm:text-3xl">A season of hands-on security practice</h2>
              <p className="mt-4 leading-relaxed text-text-secondary">
                Season 12 provided practical experience with penetration testing across Linux and Windows systems, from initial network and service enumeration through vulnerability analysis, authentication, and privilege escalation.
              </p>
              <h3 className="mt-8 text-lg font-black">Machines completed</h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {machines.map((machine, index) => (
                  <li key={machine.name} className="flex items-center justify-between gap-3 rounded-lg border border-border bg-background-elevated px-4 py-3">
                    <span className="flex min-w-0 items-center gap-3"><span className="font-mono text-xs text-primary">{String(index + 1).padStart(2, '0')}</span><span className="truncate font-bold">{machine.name}</span></span>
                    <span className="shrink-0 text-xs text-text-muted">{machine.difficulty} · {machine.os}</span>
                  </li>
                ))}
              </ul>
            </section>

            <aside className="space-y-6">
              <section className="rounded-2xl border border-border bg-background-card p-6 sm:p-7">
                <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-primary">Skills practiced</p>
                <ul className="mt-4 space-y-3">
                  {skills.map((skill) => <li key={skill} className="flex gap-3 text-sm leading-relaxed text-text-secondary"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />{skill}</li>)}
                </ul>
              </section>
              <section className="rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-7">
                <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-primary">Handler learning note</p>
                <h2 className="mt-3 text-xl font-black">What I completed, and what I’m still learning</h2>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  I submitted both User and Root flags on Handler. For the final Administrator authentication, I used an AES key from a published walkthrough, then independently performed the Kerberos ticket acquisition and remote flag retrieval. Reproducing the intended escalation chain independently remains a learning goal.
                </p>
              </section>
              <p className="rounded-xl border border-border bg-background-card p-4 text-xs leading-relaxed text-text-muted">
                Rank #525 and 660 points are from the supplied dashboard snapshot. The same snapshot shows 9 user solves and 8 system solves; the machine completion list is presented separately as supplied.
              </p>
            </aside>
          </div>

          <section className="mt-12" aria-labelledby="evidence-heading">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-primary">Proof of progress</p>
                <h2 id="evidence-heading" className="mt-2 font-display text-2xl font-black sm:text-3xl">Season dashboard screenshots</h2>
              </div>
              <a href="https://app.hackthebox.com/users/3929565" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-text-secondary hover:text-primary">HTB profile <ExternalLink className="h-4 w-4" aria-hidden="true" /></a>
            </div>
            <div className="grid gap-4">
              {evidence.map((image) => (
                <figure key={image.src} className="overflow-hidden rounded-xl border border-border bg-background-card">
                  <img src={image.src} alt={image.alt} loading="lazy" className="h-auto w-full" />
                  <figcaption className="border-t border-border px-4 py-3 text-sm text-text-muted">{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <footer className="mt-10 border-t border-border pt-6 text-sm text-text-muted">
            Achievement: <span className="font-bold text-text-primary">HTB Season 12 — Holo Tier</span>
          </footer>
        </article>
      </main>
    </>
  );
}
