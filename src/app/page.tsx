import Link from 'next/link';
import { source } from '@/lib/source';

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
    <div className="min-h-screen bg-[#F5F2EB] grain">
      {/* Floating geometric elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Circles */}
        <div className="absolute top-[15%] right-[10%] w-16 h-16 rounded-full bg-[#002FA7] opacity-70 float-1" />
        <div className="absolute top-[45%] left-[5%] w-10 h-10 rounded-full bg-[#E2725B] opacity-60 float-2" />
        <div className="absolute bottom-[25%] right-[15%] w-20 h-20 rounded-full bg-[#9DC183] opacity-50 float-3" />
        <div className="absolute top-[70%] left-[12%] w-6 h-6 rounded-full bg-[#002FA7] opacity-80 float-4" />
        <div className="absolute top-[25%] left-[20%] w-8 h-8 rounded-full bg-[#E2725B] opacity-40 float-5" />

        {/* Rings */}
        <div className="absolute top-[35%] right-[8%] w-12 h-12 ring text-[#002FA7] opacity-50 float-2" />
        <div className="absolute bottom-[40%] left-[8%] w-16 h-16 ring text-[#E2725B] opacity-40 float-1" />
        <div className="absolute top-[60%] right-[25%] w-8 h-8 ring text-[#9DC183] opacity-60 float-3" />

        {/* Triangles */}
        <div className="absolute top-[20%] right-[25%] triangle text-[#E2725B] opacity-60 float-5" />
        <div className="absolute bottom-[30%] left-[18%] triangle triangle-lg text-[#002FA7] opacity-40 float-2" />
        <div className="absolute top-[55%] right-[5%] triangle triangle-sm text-[#9DC183] opacity-70 float-4" />
        <div className="absolute bottom-[15%] right-[30%] triangle text-[#002FA7] opacity-50 float-1" />
        <div className="absolute top-[80%] left-[25%] triangle triangle-sm text-[#E2725B] opacity-60 float-3" />

        {/* Squares */}
        <div className="absolute top-[40%] right-[20%] w-8 h-8 bg-[#9DC183] opacity-50 float-4 rotate-12" />
        <div className="absolute bottom-[50%] left-[15%] w-6 h-6 bg-[#002FA7] opacity-40 float-5 rotate-45" />
        <div className="absolute top-[75%] right-[12%] w-10 h-10 border-4 border-[#E2725B] opacity-50 float-2 rotate-12" />

        {/* Small dots */}
        <div className="absolute top-[30%] left-[30%] w-3 h-3 rounded-full bg-[#2D2D2D] opacity-30 float-1" />
        <div className="absolute top-[50%] right-[35%] w-4 h-4 rounded-full bg-[#2D2D2D] opacity-20 float-3" />
        <div className="absolute bottom-[35%] left-[35%] w-3 h-3 rounded-full bg-[#2D2D2D] opacity-25 float-5" />
      </div>

      {/* Top brutal header bar */}
      <div className="relative z-10 bg-[#002FA7] text-white py-3 px-6 flex items-center justify-between">
        <span className="font-mono text-sm tracking-wider">SEAN.DEV</span>
        <Link href="/blog" className="font-mono text-sm border-2 border-white px-4 py-1 hover:bg-white hover:text-[#002FA7] transition-all">
          BLOG →
        </Link>
      </div>

      <main className="relative z-10 px-6 py-8 max-w-6xl mx-auto">
        {/* Hero - compact with geometric grid */}
        <div className="grid grid-cols-12 gap-4 mb-8">
          {/* Main intro card */}
          <div className="col-span-12 md:col-span-6 bg-white border-4 border-[#2D2D2D] p-6">
            <div className="w-12 h-2 bg-[#E2725B] mb-4" />
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#2D2D2D] mb-3 uppercase">
              Sean
            </h1>
            <p className="text-lg text-[#5A5A5A] mb-2 font-medium">
              I build things for the web.
            </p>
            <p className="text-sm text-[#7A7A7A]">
              Student / Developer / Learning in public
            </p>
          </div>

          {/* Geometric blocks */}
          <div className="col-span-6 md:col-span-3 bg-[#002FA7] p-6 flex flex-col justify-between min-h-[160px]">
            <div className="w-8 h-8 border-4 border-white" />
            <span className="text-white font-mono text-xs">01 — CODE</span>
          </div>
          <div className="col-span-6 md:col-span-3 bg-[#E2725B] p-6 flex flex-col justify-between min-h-[160px]">
            <div className="w-8 h-8 border-4 border-white rounded-full" />
            <span className="text-white font-mono text-xs">02 — CREATE</span>
          </div>
        </div>

        {/* Blog highlight - BRUTAL and prominent */}
        <Link href="/blog" className="block mb-8 group">
          <div className="bg-[#2D2D2D] border-4 border-[#2D2D2D] p-6 hover:bg-[#1a1a1a] transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-[#E2725B] flex items-center justify-center">
                  <span className="text-white font-black text-2xl">B</span>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white uppercase tracking-wide">
                    Read the Blog
                  </h2>
                  <p className="text-white/60 font-mono text-sm">
                    {posts.length} post{posts.length !== 1 ? 's' : ''} — thoughts & learnings
                  </p>
                </div>
              </div>
              <div className="text-white text-4xl group-hover:translate-x-2 transition-transform">→</div>
            </div>
          </div>
        </Link>

        {/* Dense grid of cards */}
        <div className="grid grid-cols-12 gap-4 mb-8">
          {/* Connect cards */}
          <div className="col-span-12 md:col-span-4">
            <div className="bg-white border-4 border-[#2D2D2D] p-4 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-4 h-4 bg-[#002FA7]" />
                <span className="font-mono text-xs text-[#7A7A7A] uppercase tracking-wider">Connect</span>
              </div>
              <div className="space-y-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                   className="block border-2 border-[#2D2D2D] p-3 font-bold hover:bg-[#2D2D2D] hover:text-white transition-all">
                  GITHUB ↗
                </a>
                <a href="mailto:your@email.com"
                   className="block border-2 border-[#E2725B] bg-[#E2725B] text-white p-3 font-bold hover:bg-[#c55a47] transition-all">
                  EMAIL →
                </a>
                <a href="#"
                   className="block border-2 border-[#2D2D2D] p-3 font-bold hover:bg-[#9DC183] hover:border-[#9DC183] transition-all">
                  LINKEDIN ↗
                </a>
              </div>
            </div>

            {/* Small geometric filler */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#9DC183] aspect-square flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-white" />
              </div>
              <div className="bg-[#002FA7] aspect-square flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-white rounded-full" />
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="col-span-12 md:col-span-8">
            <div className="bg-white border-4 border-[#2D2D2D] p-4 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 bg-[#E2725B] rounded-full" />
                <span className="font-mono text-xs text-[#7A7A7A] uppercase tracking-wider">Projects</span>
                <div className="flex-1 h-1 bg-[#D4D0C8]" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Project 1 */}
                <div className="border-l-4 border-[#002FA7] bg-[#F5F2EB] p-4 hover:bg-[#002FA7]/10 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#002FA7] text-white font-black flex items-center justify-center">P</div>
                    <h3 className="font-bold text-[#2D2D2D] uppercase">Portfolio</h3>
                  </div>
                  <p className="text-sm text-[#5A5A5A] mb-3">Personal site & blog</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs font-mono px-2 py-1 bg-[#002FA7] text-white">NEXT</span>
                    <span className="text-xs font-mono px-2 py-1 bg-[#E2725B] text-white">TW</span>
                    <span className="text-xs font-mono px-2 py-1 bg-[#9DC183] text-white">TS</span>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="border-l-4 border-[#9DC183] bg-[#F5F2EB] p-4 hover:bg-[#9DC183]/10 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#9DC183] text-white font-black flex items-center justify-center">+</div>
                    <h3 className="font-bold text-[#2D2D2D] uppercase">More Soon</h3>
                  </div>
                  <p className="text-sm text-[#5A5A5A] mb-3">Building & learning</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs font-mono px-2 py-1 bg-[#2D2D2D] text-white">RUST</span>
                    <span className="text-xs font-mono px-2 py-1 bg-[#2D2D2D] text-white">GO</span>
                  </div>
                </div>

                {/* Project 3 placeholder */}
                <div className="border-4 border-dashed border-[#D4D0C8] p-4 flex items-center justify-center min-h-[120px]">
                  <span className="text-[#7A7A7A] font-mono text-sm">COMING SOON</span>
                </div>

                {/* Project 4 placeholder */}
                <div className="bg-[#2D2D2D] p-4 flex items-center justify-center min-h-[120px]">
                  <div className="text-center">
                    <div className="w-8 h-8 border-2 border-white mx-auto mb-2" />
                    <span className="text-white/60 font-mono text-xs">IN PROGRESS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent posts strip */}
        <div className="bg-white border-4 border-[#2D2D2D] mb-8">
          <div className="bg-[#2D2D2D] text-white px-4 py-2 flex items-center justify-between">
            <span className="font-mono text-sm uppercase tracking-wider">Latest Posts</span>
            <Link href="/blog" className="font-mono text-xs hover:underline">VIEW ALL →</Link>
          </div>
          <div className="divide-y-4 divide-[#2D2D2D]">
            {posts.length === 0 ? (
              <div className="p-6 text-center text-[#7A7A7A] font-mono">No posts yet...</div>
            ) : (
              posts.map((post, index) => {
                const colors = ['#002FA7', '#E2725B', '#9DC183'];
                const color = colors[index % colors.length];
                return (
                  <Link key={post.slug} href={post.url}>
                    <div className="p-4 hover:bg-[#F5F2EB] transition-colors flex items-center gap-4">
                      <div className="w-3 h-12" style={{ backgroundColor: color }} />
                      <div className="flex-1">
                        <h3 className="font-bold text-[#2D2D2D] uppercase">{post.title}</h3>
                        <p className="text-sm text-[#7A7A7A] line-clamp-1">{post.description}</p>
                      </div>
                      <time className="font-mono text-xs text-[#7A7A7A] hidden md:block">{post.date}</time>
                      <span className="text-[#2D2D2D] font-bold">→</span>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>

        {/* Footer brutal bar */}
        <footer className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#002FA7]" />
          <div className="w-8 h-8 bg-[#E2725B] rounded-full" />
          <div className="w-16 h-4 bg-[#9DC183]" />
          <div className="flex-1 h-1 bg-[#2D2D2D]" />
          <span className="font-mono text-xs text-[#7A7A7A]">2025</span>
        </footer>
      </main>
    </div>
  );
}
