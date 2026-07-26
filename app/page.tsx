import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
<div className="min-h-screen w-full bg-app-bg flex flex-col gap-12 relative">
  <Header />

  {/* Hero / Pitch Statement */}
  <section className="w-full px-6 max-w-4xl mx-auto flex flex-col items-center gap-4 text-center">
    <h1 className="text-3xl md:text-5xl font-bold text-app-text leading-tight">
      AAA studios are monopolizing the industry and suffocating the soul of <strong className="text-app-accent">creation</strong>.
    </h1>
    <p className="text-xl md:text-4xl text-app-muted max-w-2xl">
      They ignore the community while raking in millions. It’s time to reclaim the art form.
    </p>
    <p className="text-lg md:text-3xl font-medium text-app-accent">
      Alone we’re good. Together we’re unstoppable.
    </p>
  </section>

  {/* Mission & CTA Grid */}
  <main className="grow px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center pb-16">
    {/* Left Column: Mission */}
    <div className="flex flex-col gap-6 text-left">
      <h2 className="text-3xl font-semibold text-app-text">
        Connect, collaborate, and build <strong className="text-app-accent">real projects</strong>.
      </h2>
      <p className="text-base md:text-lg text-app-muted leading-relaxed">
        Showcase your work, exchange actionable feedback, and team up with other creators to bring ambitious ideas to life.
      </p>
      <p className="text-base md:text-lg text-app-muted leading-relaxed">
        <strong className="text-app-text">UnderGroundIndie</strong> exists to unite indie developers and creators—leveling the playing field against a stale, corporate market.
      </p>
    </div>

    {/* Right Column: CTA Box */}
    <div className="flex flex-col items-center justify-center p-8 border border-app-accent/20 rounded-xl bg-app-card/50 text-center gap-6">
      <h3 className="text-2xl font-bold text-app-text">
        Join the <span className="text-app-accent">Indie Revolution</span>
      </h3>
      <p className="text-app-muted max-w-xs">
        Find your next teammate or launch your project today.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 w-full justify-center max-w-xs">
        <Link href="/signup" className="bg-app-accent text-app-bg hover:bg-app-accent-hover font-semibold px-5 py-2.5 rounded-md transition-colors w-full">
          Create Account
        </Link>
        <Link href="/signin" className="text-app-text border border-app-accent/40 hover:border-app-accent hover:bg-app-accent/10 px-5 py-2.5 rounded-md transition-colors w-full">
          Sign In
        </Link>
      </div>
    </div>
  </main>
</div>
  );
}
