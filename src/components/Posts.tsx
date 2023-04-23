import { PostCard } from "./PostCard";

export function Posts() {
  return (
    <section className="mt-[72px] mb-16">
      <div className="flex items-center justify-between mb-3">
        <strong className="text-lg text-subtitle-500">Publicações</strong>
        <p className="text-sm text-text-700">4 publicações</p>
      </div>
      <form action="">
        <input
          className="w-full py-3 px-4 rounded-md bg-input-500 text-white placeholder:text-text-900 border border-border-500"
          type="text"
          placeholder="Buscar conteúdo"
        />
      </form>

      <div className="grid grid-cols-2 gap-8 mt-12">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </section>
  );
}
