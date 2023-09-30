import { Search } from 'lucide-react';

export function Input() {
  return (
     // EXPORT
    <div className=" mx-2 flex items-center gap-2 px-3.5 py-2.5 rounded-lg border border-zinc-300 shadow-sm ">
      {/* EXPORT */}
      <Search className="w-6 h-5 text-zinc-500" />
      {/* EXOPORT */}
      <input className=" w-full border-none p-0 bg-transparent text-zinc-900 placeholder-zinc-600" placeholder="Search" />

      {/* TODO */}
    </div>
  );
}
