'use client';

import * as Tabs from '@radix-ui/react-tabs';

export interface TabsItemProps {
  title: string;
  value: string;
  isSelected?: boolean;
}

export function TabsItem({ title, value, isSelected = false }: TabsItemProps) {
  return (
    <Tabs.Trigger
         value={value} 
         className="relative whitespace-nowrap pb-4 px-1 text-sm/5 font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700">

      <span>{title}</span>

      {isSelected && (
      <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"/>

      )}
    </Tabs.Trigger>
  )
}
