import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <div className="flex flex-col items-center md:grid grid-cols-4 grid-rows-auto md:items-start gap-2 min-h-screen w-screen bg-app-bg">
      <h1 className="col-span-1 text-4xl tracking-wider p-3 h-fit text-app-secondary -mb-2"> ./ UnderGroundIndie</h1>
      <div className="col-span-2 col-start-2 row-start-1 flex items-end justify-end gap-2 p-3 h-fit -mb-2">
        <button className="text-app-text border border-app-accent hover:bg-app-accent-hover px-4 py-2 rounded-md transition-colors">
          Access // Login
        </button>
        <button className="bg-app-accent text-app-bg hover:bg-app-accent-hover px-4 py-2 rounded-md transition-colors">
          Initialize Account
        </button>
      </div>
      <div className="col-span-1 col-start-4 row-start-1 flex items-end justify-end gap-2 p-3 h-fit -mb-2 border border-b-3 border-app-border md:border-0">
        <ThemeSwitcher />
      </div>
      <section className="col-span-1 col-start-1 sectionRowMed flex flex-col justify-start gap-2 bg-app-muted/5">
        <h2 className="text-3xl font-bold text-app-text text-center w-full">Navigation Console</h2>
        <div  className="grow flex flex-col border border-app-border gap-2 p-2 m-2 content-center bg-app-bg/75">

        </div>
      </section>
      <section className="col-span-2 col-start-2 sectionRowMed flex flex-col justify-start gap-2 bg-app-muted/5">
        <h2 className="text-3xl font-bold text-app-text text-center w-full">Current Console</h2>
        <div  className="grow flex flex-col border border-app-border gap-2 p-2 m-2 content-center bg-app-bg/75">

        </div>
      </section>
      <section className="col-span-1 col-start-4 row-start-2 sectionRowMed flex flex-col justify-start gap-2 bg-app-muted/5">
        <h2 className="text-3xl font-bold text-app-text text-center w-full">Spotlight Console</h2>
        <div  className="grow flex flex-col border border-app-border gap-2 p-2 m-2 content-center bg-app-bg/75">

        </div>
      </section>
    </div>
  );
}
