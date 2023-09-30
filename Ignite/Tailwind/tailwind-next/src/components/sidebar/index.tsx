import { Logo } from './logo';
import { Search } from 'lucide-react';
import { MainNavegation } from './mainNavegation';
import { BaseNavegation } from './navBase';
import { Input } from './mainNavegation/Input';

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 px-4 py-8 border-r border-zinc-300 ">
      <Logo />

      <Input />

      <MainNavegation />

      <BaseNavegation />
    </aside>
  );
}
