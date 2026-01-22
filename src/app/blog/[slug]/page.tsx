import Link from 'next/link';
import { notFound } from 'next/navigation';
import { source } from '@/lib/source';

export async function generateStaticParams() {
  return source.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = source.getPage([slug]);

  if (!page) {
    notFound();
  }

  const MDX = page.data.body;
  const date = (page.data as { date?: string }).date;

  return (
    <div className="min-h-screen bg-[#F5F2EB] grain">
      {/* Floating geometric elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Circles */}
        <div className="absolute top-[25%] right-[5%] w-12 h-12 rounded-full bg-[#002FA7] opacity-50 float-1" />
        <div className="absolute top-[60%] left-[3%] w-16 h-16 rounded-full bg-[#E2725B] opacity-40 float-3" />
        <div className="absolute bottom-[15%] right-[10%] w-8 h-8 rounded-full bg-[#9DC183] opacity-60 float-2" />

        {/* Rings */}
        <div className="absolute top-[40%] right-[8%] w-14 h-14 ring text-[#9DC183] opacity-50 float-4" />
        <div className="absolute bottom-[40%] left-[5%] w-10 h-10 ring text-[#002FA7] opacity-40 float-1" />

        {/* Triangles */}
        <div className="absolute top-[18%] left-[8%] triangle triangle-sm text-[#E2725B] opacity-60 float-5" />
        <div className="absolute bottom-[30%] right-[15%] triangle text-[#002FA7] opacity-40 float-2" />
        <div className="absolute top-[75%] left-[10%] triangle triangle-sm text-[#9DC183] opacity-50 float-4" />

        {/* Squares */}
        <div className="absolute top-[50%] right-[3%] w-6 h-6 bg-[#E2725B] opacity-50 float-3 rotate-12" />
        <div className="absolute bottom-[20%] left-[8%] w-8 h-8 border-4 border-[#002FA7] opacity-40 float-5 rotate-45" />
      </div>

      {/* Top brutal header bar */}
      <div className="relative z-10 bg-[#002FA7] text-white py-3 px-6 flex items-center justify-between">
        <Link href="/blog" className="font-mono text-sm tracking-wider hover:text-[#9DC183] transition-colors">
          ← BLOG
        </Link>
        <span className="font-mono text-sm">ARTICLE</span>
      </div>

      <main className="relative z-10 px-6 py-8 max-w-4xl mx-auto">
        {/* Post header */}
        <header className="mb-8">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-9 bg-white border-4 border-[#2D2D2D] p-6">
              <div className="flex items-center gap-4 mb-4">
                {date && (
                  <div className="px-3 py-1 bg-[#E2725B] text-white font-mono text-sm">
                    {new Date(date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </div>
                )}
                <div className="h-px flex-1 bg-[#D4D0C8]" />
              </div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight text-[#2D2D2D] uppercase leading-tight">
                {page.data.title}
              </h1>
            </div>
            <div className="col-span-12 md:col-span-3 grid grid-cols-2 md:grid-cols-1 gap-4">
              <div className="bg-[#002FA7] p-4 flex items-center justify-center aspect-square md:aspect-auto">
                <div className="w-8 h-8 border-4 border-white" />
              </div>
              <div className="bg-[#9DC183] p-4 flex items-center justify-center aspect-square md:aspect-auto">
                <div className="w-8 h-8 border-4 border-white rounded-full" />
              </div>
            </div>
          </div>
        </header>

        {/* Post content */}
        <div className="bg-white border-4 border-[#2D2D2D] p-6 md:p-10 mb-8">
          <article
            className="prose prose-lg max-w-none
              prose-headings:text-[#2D2D2D] prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight
              prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b-4 prose-h2:border-[#002FA7]
              prose-h3:text-lg prose-h3:mt-6
              prose-p:text-[#5A5A5A] prose-p:leading-relaxed
              prose-a:text-[#002FA7] prose-a:font-bold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[#2D2D2D] prose-strong:font-black
              prose-ul:text-[#5A5A5A] prose-ol:text-[#5A5A5A]
              prose-li:marker:text-[#E2725B] prose-li:marker:font-bold
              prose-code:bg-[#2D2D2D] prose-code:text-[#9DC183] prose-code:px-2 prose-code:py-1 prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-[#2D2D2D] prose-pre:border-l-4 prose-pre:border-[#E2725B] prose-pre:rounded-none
              prose-blockquote:border-l-4 prose-blockquote:border-[#002FA7] prose-blockquote:bg-[#F5F2EB] prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic prose-blockquote:text-[#5A5A5A] prose-blockquote:font-medium"
          >
            <MDX />
          </article>
        </div>

        {/* Footer navigation */}
        <footer className="flex items-center gap-4">
          <Link href="/blog" className="bg-[#2D2D2D] text-white px-6 py-3 font-mono text-sm font-bold hover:bg-[#002FA7] transition-colors flex items-center gap-2">
            <span>←</span>
            <span>ALL POSTS</span>
          </Link>
          <div className="flex-1 h-1 bg-[#2D2D2D]" />
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-[#E2725B]" />
            <div className="w-8 h-8 bg-[#9DC183] rounded-full" />
            <div className="w-8 h-8 bg-[#002FA7]" />
          </div>
        </footer>
      </main>
    </div>
  );
}
