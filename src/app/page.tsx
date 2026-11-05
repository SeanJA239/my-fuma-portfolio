import Link from 'next/link';
import { profile } from '@/lib/profile';
import { source } from '@/lib/source';

const accentStyles = {
  blue: {
    border: 'border-[#002FA7]',
    block: 'bg-[#002FA7]',
    tint: 'hover:bg-[#002FA7]/10',
  },
  terracotta: {
    border: 'border-[#E2725B]',
    block: 'bg-[#E2725B]',
    tint: 'hover:bg-[#E2725B]/10',
  },
  sage: {
    border: 'border-[#9DC183]',
    block: 'bg-[#9DC183]',
    tint: 'hover:bg-[#9DC183]/10',
  },
} as const;

function SectionLabel({ label, accent }: { label: string; accent: keyof typeof accentStyles }) {
  const styles = accentStyles[accent];

  return (
    <div className="mb-4 flex items-center gap-3">
      <div className={`h-4 w-4 ${styles.block} ${accent === 'sage' ? 'rounded-full' : ''}`} />
      <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#7A7A7A]">{label}</span>
      <div className="h-1 flex-1 bg-[#D4D0C8]" />
    </div>
  );
}

export default function Home() {
  const pages = source.getPages();
  const posts = pages
    .map((page) => ({
      slug: page.slugs.join('/'),
      title: page.data.title,
      description: page.data.description || '',
      date: (page.data as { date?: string }).date || '',
      url: page.url,
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);

  return (
    <div className="grain min-h-screen bg-[#F5F2EB]">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="float-1 absolute right-[10%] top-[15%] h-16 w-16 rounded-full bg-[#002FA7] opacity-70" />
        <div className="float-2 absolute left-[5%] top-[45%] h-10 w-10 rounded-full bg-[#E2725B] opacity-60" />
        <div className="float-3 absolute bottom-[25%] right-[15%] h-20 w-20 rounded-full bg-[#9DC183] opacity-50" />
        <div className="float-4 absolute left-[12%] top-[70%] h-6 w-6 rounded-full bg-[#002FA7] opacity-80" />
        <div className="float-5 absolute left-[20%] top-[25%] h-8 w-8 rounded-full bg-[#E2725B] opacity-40" />
        <div className="ring float-2 absolute right-[8%] top-[35%] h-12 w-12 text-[#002FA7] opacity-50" />
        <div className="ring float-1 absolute bottom-[40%] left-[8%] h-16 w-16 text-[#E2725B] opacity-40" />
        <div className="ring float-3 absolute right-[25%] top-[60%] h-8 w-8 text-[#9DC183] opacity-60" />
        <div className="triangle float-5 absolute right-[25%] top-[20%] text-[#E2725B] opacity-60" />
        <div className="triangle triangle-lg float-2 absolute bottom-[30%] left-[18%] text-[#002FA7] opacity-40" />
        <div className="triangle triangle-sm float-4 absolute right-[5%] top-[55%] text-[#9DC183] opacity-70" />
        <div className="triangle float-1 absolute bottom-[15%] right-[30%] text-[#002FA7] opacity-50" />
        <div className="triangle triangle-sm float-3 absolute left-[25%] top-[80%] text-[#E2725B] opacity-60" />
      </div>

      <header className="relative z-10 flex items-center justify-between bg-[#002FA7] px-6 py-3 text-white">
        <Link href="/" className="font-mono text-sm tracking-[0.2em]" aria-label="Xiang Jia home">
          XJ.DEV
        </Link>
        <Link
          href="/blog"
          className="border-2 border-white px-4 py-1 font-mono text-sm transition-all hover:bg-white hover:text-[#002FA7] focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#E2725B]"
        >
          BLOG →
        </Link>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-6 py-8">
        <section className="mb-8 grid grid-cols-12 gap-4" aria-labelledby="intro-title">
          <div className="col-span-12 border-4 border-[#2D2D2D] bg-white p-6 md:col-span-7 md:p-8">
            <div className="mb-4 h-2 w-16 bg-[#E2725B]" />
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#7A7A7A]">Mechatronics · Robotics · Embedded AI</p>
            <h1 id="intro-title" className="mb-4 text-5xl font-black uppercase tracking-tight text-[#2D2D2D] md:text-7xl">
              {profile.name}
            </h1>
            <p className="mb-3 max-w-xl text-xl font-bold leading-tight text-[#2D2D2D] md:text-2xl">{profile.intro}</p>
            <p className="max-w-2xl text-sm leading-6 text-[#5A5A5A]">{profile.summary}</p>
            <div className="mt-6 border-t-2 border-[#D4D0C8] pt-4">
              <p className="font-bold text-[#2D2D2D]">{profile.education}</p>
              <p className="font-mono text-xs text-[#7A7A7A]">{profile.educationMeta}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.academicHighlights.map((highlight) => (
                  <span key={highlight} className="bg-[#F5F2EB] px-2 py-1 font-mono text-xs text-[#5A5A5A]">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-6 flex min-h-[190px] flex-col justify-between bg-[#002FA7] p-6 md:col-span-2">
            <div className="h-10 w-10 border-4 border-white" />
            <div>
              <span className="mb-2 block font-mono text-xs text-white/70">01</span>
              <span className="font-mono text-sm text-white">SENSE</span>
            </div>
          </div>
          <div className="col-span-6 flex min-h-[190px] flex-col justify-between bg-[#E2725B] p-6 md:col-span-3">
            <div className="h-10 w-10 rounded-full border-4 border-white" />
            <div>
              <span className="mb-2 block font-mono text-xs text-white/70">02</span>
              <span className="font-mono text-sm text-white">ACTUATE</span>
            </div>
          </div>
        </section>

        <section className="mb-8 grid grid-cols-12 gap-4" aria-labelledby="research-title">
          <div className="col-span-12 border-4 border-[#2D2D2D] bg-[#2D2D2D] p-6 text-white md:col-span-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/60">Research interests</span>
              <span className="font-mono text-xs text-[#9DC183]">04 FIELDS</span>
            </div>
            <h2 id="research-title" className="max-w-2xl text-3xl font-black uppercase leading-none md:text-5xl">
              From high-level intelligence to low-level actuation.
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.researchInterests.map((interest) => (
                <span key={interest} className="border-2 border-white/40 px-3 py-2 font-mono text-xs text-white/90">
                  {interest}
                </span>
              ))}
            </div>
          </div>
          <div className="col-span-12 flex flex-col justify-between border-4 border-[#2D2D2D] bg-[#9DC183] p-6 md:col-span-4">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#2D2D2D]/70">Now building</span>
            <p className="mt-8 text-2xl font-black uppercase leading-tight text-[#2D2D2D]">Bionic faces + safe embedded systems</p>
          </div>
        </section>

        <section className="mb-8 border-4 border-[#2D2D2D] bg-white p-4 md:p-6" aria-labelledby="experience-title">
          <SectionLabel label="Selected research & engineering experience" accent="blue" />
          <h2 id="experience-title" className="sr-only">Selected research and engineering experience</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {profile.experience.map((item, index) => {
              const styles = accentStyles[item.accent];

              return (
                <article key={item.name} className={`border-l-4 bg-[#F5F2EB] p-4 transition-colors ${styles.border} ${styles.tint}`}>
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-1 font-mono text-xs text-[#7A7A7A]">0{index + 1} / {item.period}</p>
                      <h3 className="text-xl font-black uppercase leading-tight text-[#2D2D2D]">{item.name}</h3>
                      <p className="mt-1 text-sm font-bold text-[#5A5A5A]">{item.context}</p>
                    </div>
                    <span className={`hidden h-9 w-9 shrink-0 items-center justify-center font-black text-white sm:flex ${styles.block}`} aria-hidden="true">
                      {item.name.charAt(0)}
                    </span>
                  </div>
                  <p className="mb-3 font-mono text-xs uppercase tracking-wide text-[#7A7A7A]">{item.role}</p>
                  <ul className="space-y-2 text-sm leading-5 text-[#5A5A5A]">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="font-bold text-[#2D2D2D]">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-1">
                    {item.tags.map((tag) => (
                      <span key={tag} className={`${styles.block} px-2 py-1 font-mono text-[10px] text-white`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mb-8 grid grid-cols-12 gap-4" aria-labelledby="projects-title">
          <div className="col-span-12 border-4 border-[#2D2D2D] bg-white p-4 md:col-span-8 md:p-6">
            <SectionLabel label="Software & AI projects" accent="terracotta" />
            <h2 id="projects-title" className="sr-only">Software and AI projects</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {profile.projects.map((project) => {
                const styles = accentStyles[project.accent];

                return (
                  <article key={project.name} className={`border-l-4 bg-[#F5F2EB] p-4 transition-colors ${styles.border} ${styles.tint}`}>
                    <p className="mb-2 font-mono text-xs text-[#7A7A7A]">{project.period}</p>
                    <h3 className="mb-3 text-lg font-black uppercase leading-tight text-[#2D2D2D]">{project.name}</h3>
                    <p className="mb-4 text-sm leading-5 text-[#5A5A5A]">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <span key={tag} className="bg-[#2D2D2D] px-2 py-1 font-mono text-[10px] text-white">{tag}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="col-span-12 border-4 border-[#2D2D2D] bg-[#E2725B] p-6 md:col-span-4">
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.18em] text-white/70">Working stack</p>
            <div className="space-y-5">
              {profile.skills.map((skill) => (
                <div key={skill.label}>
                  <p className="mb-1 font-mono text-xs uppercase tracking-wide text-white/70">{skill.label}</p>
                  <p className="font-bold leading-5 text-white">{skill.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-8 grid grid-cols-12 gap-4" aria-labelledby="connect-title">
          <div className="col-span-12 border-4 border-[#2D2D2D] bg-white p-4 md:col-span-4">
            <SectionLabel label="Connect" accent="sage" />
            <h2 id="connect-title" className="sr-only">Connect with Xiang Jia</h2>
            <div className="space-y-2">
              <a
                href="https://github.com/SeanJA239"
                target="_blank"
                rel="noopener noreferrer"
                className="block border-2 border-[#2D2D2D] p-3 font-bold transition-all hover:bg-[#2D2D2D] hover:text-white focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#002FA7]"
              >
                GITHUB ↗
              </a>
              <a
                href="mailto:s3anjia@gmail.com"
                className="block border-2 border-[#E2725B] bg-[#E2725B] p-3 font-bold text-white transition-all hover:bg-[#c55a47] focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#002FA7]"
              >
                EMAIL →
              </a>
              <a
                href="https://xhslink.com/m/9HGWat8Kfgv"
                target="_blank"
                rel="noopener noreferrer"
                className="block border-2 border-[#2D2D2D] p-3 font-bold transition-all hover:border-[#9DC183] hover:bg-[#9DC183] focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#002FA7]"
              >
                XIAOHONGSHU ↗
              </a>
            </div>
          </div>

          <div className="col-span-12 border-4 border-[#2D2D2D] bg-[#9DC183] p-6 md:col-span-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-[#2D2D2D]/70">Leadership & languages</p>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="mb-3 text-xl font-black uppercase text-[#2D2D2D]">In the community</h2>
                <ul className="space-y-2 text-sm leading-5 text-[#2D2D2D]">
                  {profile.leadership.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="font-bold">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="mb-3 text-xl font-black uppercase text-[#2D2D2D]">Communication</h2>
                <p className="text-sm leading-5 text-[#2D2D2D]">{profile.languages}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8 border-4 border-[#2D2D2D] bg-white" aria-labelledby="posts-title">
          <div className="flex items-center justify-between bg-[#2D2D2D] px-4 py-2 text-white">
            <h2 id="posts-title" className="font-mono text-sm uppercase tracking-[0.18em]">Latest posts</h2>
            <Link href="/blog" className="font-mono text-xs hover:underline focus-visible:outline-2 focus-visible:outline-[#E2725B]">VIEW ALL →</Link>
          </div>
          <div className="divide-y-4 divide-[#2D2D2D]">
            {posts.length === 0 ? (
              <div className="p-6 text-center font-mono text-[#7A7A7A]">No posts yet...</div>
            ) : (
              posts.map((post, index) => {
                const colors = ['#002FA7', '#E2725B', '#9DC183'];
                const color = colors[index % colors.length];

                return (
                  <Link key={post.slug} href={post.url} className="block focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-[#E2725B]">
                    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-[#F5F2EB]">
                      <div className="h-12 w-3" style={{ backgroundColor: color }} aria-hidden="true" />
                      <div className="flex-1">
                        <h3 className="font-bold uppercase text-[#2D2D2D]">{post.title}</h3>
                        <p className="line-clamp-1 text-sm text-[#7A7A7A]">{post.description}</p>
                      </div>
                      <time className="hidden font-mono text-xs text-[#7A7A7A] md:block">{post.date}</time>
                      <span className="font-bold text-[#2D2D2D]" aria-hidden="true">→</span>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </section>

        <footer className="flex items-center gap-4" aria-label="Site footer">
          <div className="h-12 w-12 bg-[#002FA7]" aria-hidden="true" />
          <div className="h-8 w-8 rounded-full bg-[#E2725B]" aria-hidden="true" />
          <div className="h-4 w-16 bg-[#9DC183]" aria-hidden="true" />
          <div className="h-1 flex-1 bg-[#2D2D2D]" aria-hidden="true" />
          <span className="font-mono text-xs text-[#7A7A7A]">2026</span>
        </footer>
      </main>
    </div>
  );
}
