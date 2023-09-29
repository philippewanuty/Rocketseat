export interface HorizontalTabsProps {
  title: string;
  link: string;
}

export function HorizontalTabs({ title, link }: HorizontalTabsProps) {
  return (
    <button className="group px-1 pb-4  hover:border-b-2 hover:border-violet-700">
      <span className=" whitespace-nowrap font-medium text-sm text-zinc-500 group-hover:text-violet-700">
        <a href={link}>{title}</a>
      </span>
    </button>
  );
}
