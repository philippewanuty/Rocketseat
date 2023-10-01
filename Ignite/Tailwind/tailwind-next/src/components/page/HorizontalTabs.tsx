export interface HorizontalTabsProps {
  title: string;
  link: string;
}

export function HorizontalTabs({ title, link }: HorizontalTabsProps) {
  return (
    <button className="relative group px-1 pb-4 ">
      <span className="whitespace-nowrap font-medium text-sm text-zinc-500 group-hover:text-violet-700">
        <a href={link} className="">
          {title}
        </a>
      </span>
      <div className="absolute left-0 right-0 h-0.5 -bottom-px group-hover:border-b-2 group-hover:border-violet-700 "></div>
    </button>
  );
}
