import { HorizontalTabs } from '@/components/page/HorizontalTabs';

export default function Home() {
  return (
    //Main
    <main className="min-h-screen f">
      <div className="flex flex-col gap-6">
        <h1 className=" text-3xl font-medium">Settings</h1>

        <nav className="  flex flex-row gap-4 border-b ">
          <HorizontalTabs title="My details" link="#" />
          <HorizontalTabs title="Profile" link="#" />
          <HorizontalTabs title="Password" link="#" />
          <HorizontalTabs title="Team" link="#" />
          <HorizontalTabs title="Plan" link="#" />
          <HorizontalTabs title="Billing" link="#" />
          <HorizontalTabs title="Email" link="#" />
          <HorizontalTabs title="Notifications" link="#" />
          <HorizontalTabs title="Integrations" link="#" />
          <HorizontalTabs title="API" link="#" />
        </nav>
      </div>

      {/*Container*/}
    </main>
  );
}
