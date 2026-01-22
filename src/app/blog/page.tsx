import Link from 'next/link';
import { source } from '@/lib/source';

export default function BlogPage() {
  const pages = source.getPages();
  const colors = ['#002FA7', '#E2725B', '#9DC183'];

  // Sort by date if available
  const posts = pages
    .map((page) => ({
      slug: page.slugs.join('/'),
      title: page.data.title,
      description: page.data.description || '',
      date: (page.data as { date?: string }).date || '',
      url: page.url,
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="min-h-screen bg-[#F5F2EB] grain">
      {/* Floating geometric elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Circles */}
        <div className="absolute top-[20%] left-[8%] w-14 h-14 rounded-full bg-[#9DC183] opacity-60 float-1" />
        <div className="absolute top-[50%] right-[6%] w-10 h-10 rounded-full bg-[#002FA7] opacity-50 float-3" />
        <div className="absolute bottom-[20%] left-[12%] w-8 h-8 rounded-full bg-[#E2725B] opacity-70 float-2" />

        {/* Rings */}
        <div className="absolute top-[30%] right-[12%] w-16 h-16 ring text-[#E2725B] opacity-40 float-5" />
        <div className="absolute bottom-[35%] right-[20%] w-10 h-10 ring text-[#002FA7] opacity-50 float-1" />

        {/* Triangles */}
        <div className="absolute top-[15%] right-[20%] triangle text-[#002FA7] opacity-50 float-2" />
        <div className="absolute bottom-[25%] left-[5%] triangle triangle-lg text-[#9DC183] opacity-40 float-4" />
        <div className="absolute top-[65%] right-[8%] triangle triangle-sm text-[#E2725B] opacity-60 float-3" />

        {/* Squares */}
        <div className="absolute top-[45%] left-[6%] w-6 h-6 bg-[#002FA7] opacity-40 float-5 rotate-45" />
        <div className="absolute bottom-[45%] right-[15%] w-8 h-8 border-4 border-[#9DC183] opacity-50 float-1 rotate-12" />
      </div>

      {/* Top brutal header bar */}
      <div className="relative z-10 bg-[#2D2D2D] text-white py-3 px-6 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm tracking-wider hover:text-[#E2725B] transition-colors">
          ← SEAN.DEV
        </Link>
        <span className="font-mono text-sm border-2 border-white px-4 py-1">
          BLOG
        </span>
      </div>

      <main className="relative z-10 px-6 py-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 mb-8">
          <div className="col-span-12 md:col-span-8 bg-white border-4 border-[#2D2D2D] p-6">
            <div className="w-16 h-2 bg-[#E2725B] mb-4" />
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#2D2D2D] uppercase mb-2">
              Blog
            </h1>
            <p className="text-[#5A5A5A]">
              Thoughts, learnings, and notes from my journey into code.
            </p>
          </div>
          <div className="col-span-6 md:col-span-2 bg-[#002FA7] p-4 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-white" />
          </div>
          <div className="col-span-6 md:col-span-2 bg-[#E2725B] p-4 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-white rounded-full" />
          </div>
        </div>

        {/* Posts count bar */}
        <div className="bg-[#2D2D2D] text-white px-4 py-3 mb-4 flex items-center justify-between">
          <span className="font-mono text-sm uppercase tracking-wider">
            {posts.length} Post{posts.length !== 1 ? 's' : ''}
          </span>
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-[#002FA7]" />
            <div className="w-4 h-4 bg-[#E2725B]" />
            <div className="w-4 h-4 bg-[#9DC183]" />
          </div>
        </div>

        {/* Posts grid */}
        {posts.length === 0 ? (
          <div className="bg-white border-4 border-[#2D2D2D] p-12 text-center">
            <div className="w-12 h-12 border-4 border-dashed border-[#D4D0C8] mx-auto mb-4" />
            <p className="text-[#7A7A7A] font-mono">No posts yet...</p>
          </div>
        ) : (
          <div className="grid grid-cols-12 gap-4">
            {posts.map((post, index) => {
              const color = colors[index % colors.length];
              const isFirst = index === 0;

              return (
                <article
                  key={post.slug}
                  className={isFirst ? 'col-span-12' : 'col-span-12 md:col-span-6'}
                >
                  <Link href={post.url}>
                    <div className={`group bg-white border-4 border-[#2D2D2D] hover:border-[${color}] transition-colors h-full ${isFirst ? 'p-6' : 'p-4'}`}>
                      <div className="flex items-start gap-4">
                        <div
                          className={`shrink-0 ${isFirst ? 'w-16 h-16' : 'w-12 h-12'} flex items-center justify-center text-white font-black ${isFirst ? 'text-2xl' : 'text-lg'}`}
                          style={{ backgroundColor: color }}
                        >
                          {(index + 1).toString().padStart(2, '0')}
                        </div>
                        <div className="flex-1 min-w-0">
                          {post.date && (
                            <time className="font-mono text-xs text-[#7A7A7A] uppercase">
                              {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                              })}
                            </time>
                          )}
                          <h2 className={`font-black text-[#2D2D2D] uppercase group-hover:text-[#002FA7] transition-colors ${isFirst ? 'text-2xl mt-2' : 'text-lg mt-1'}`}>
                            {post.title}
                          </h2>
                          <p className={`text-[#5A5A5A] mt-2 ${isFirst ? '' : 'line-clamp-2 text-sm'}`}>
                            {post.description}
                          </p>
                        </div>
                        <span className="text-2xl text-[#D4D0C8] group-hover:text-[#2D2D2D] transition-colors">→</span>
                      </div>
                      {isFirst && (
                        <div className="mt-4 pt-4 border-t-2 border-[#D4D0C8] flex items-center gap-2">
                          <span className="font-mono text-xs text-[#7A7A7A]">READ ARTICLE</span>
                          <div className="flex-1 h-px bg-[#D4D0C8]" />
                          <span className="font-mono text-xs" style={{ color }}>FEATURED</span>
                        </div>
                      )}
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        )}

        {/* Footer */}
        <footer className="mt-8 flex items-center gap-4">
          <Link href="/" className="bg-[#2D2D2D] text-white px-4 py-2 font-mono text-sm hover:bg-[#002FA7] transition-colors">
            ← BACK HOME
          </Link>
          <div className="flex-1 h-1 bg-[#2D2D2D]" />
          <div className="flex gap-2">
            <div className="w-6 h-6 bg-[#002FA7]" />
            <div className="w-6 h-6 bg-[#E2725B] rounded-full" />
            <div className="w-6 h-6 bg-[#9DC183]" />
          </div>
        </footer>
      </main>
    </div>
  );
}
