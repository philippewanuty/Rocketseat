import { Home, LifeBuoy, Settings } from 'lucide-react';
import { NavBaseItem } from './NavBaseItem';

export function BaseNavegation() {
  return (
    <div className="mt-auto">
      <NavBaseItem title="Support" icon={LifeBuoy} />
      <NavBaseItem title="Settings" icon={Settings} />
    </div>
  );
}
