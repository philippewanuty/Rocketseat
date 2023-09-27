import { Logo } from './logo';
import { Search } from 'lucide-react';
import { MainNavegation } from './mainNavegation';
import { BaseNavegation } from './navBase';

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 px-4 py-8 border-r border-zinc-300 ">
      <Logo />

      <div className=" flex items-center gap-2 px-3.5 ml-2 mr-2 py-2.5 rounded-lg border border-zinc-300 shadow-sm ">
        <Search className="h-5 w-5 text-zinc-500" />
        <input className="border-none p-0 bg-transparent text-zinc-900 placeholder-zinc-600" placeholder="Search" />
      </div>

      <MainNavegation />

      <BaseNavegation />
    </aside>
  );
}
