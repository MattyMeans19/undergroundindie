import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <div className="md:grid grid-cols-4 grid-rows-auto items-start gap-2 min-h-screen w-screen bg-app-bg">
      <h1 className="col-span-1 text-4xl tracking-wider p-3 h-fit text-app-secondary -mb-2"> ./ UnderGroundIndie</h1>
      <div className="col-span-2 col-start-2 row-start-1 flex items-end justify-end gap-2 p-3 h-fit -mb-2">
        <button className="bg-app-accent text-app-bg hover:bg-app-accent-hover px-4 py-2 rounded-md transition-colors">
          Access // Login
        </button>
        <button className="bg-app-accent text-app-bg hover:bg-app-accent-hover px-4 py-2 rounded-md transition-colors">
          Initialize Account
        </button>
      </div>
      <div className="col-span-1 col-start-4 row-start-1 flex items-end justify-end gap-2 p-3 h-fit -mb-2">
        <ThemeSwitcher />
      </div>
      <section className="col-span-1 col-start-1 row-start-2 row-span-10 border border-app-border min-h-full -mt-10">
      </section>
      <section className="col-span-2 col-start-2 row-start-2 row-span-10 border border-app-border min-h-full -mt-10">
      </section>
      <section className="col-span-1 col-start-4 row-start-2 row-span-10 border border-app-border min-h-full -mt-10">
      </section>
    </div>
  );
}
