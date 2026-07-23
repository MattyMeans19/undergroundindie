export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="w-full bg-linear-to-b from-green-500/45 to-lime-400/45 p-4 flex justify-between text-gray-700">
        <h1 className="text-6xl font-bold text-start text-shadow-lg text-shadow-emerald-700">UnderGroundIndie</h1>
        <h2 className="font-semibold text-start text-shadow-md text-shadow-emerald-500 pr-5 self-end text-4xl">Alone we're good...Together we're great.</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4">
        <article className="border-slate-50/50 border-2 rounded-lg p-4 bg-linear-to-b from-green-500/25 to-lime-400/15 flex flex-col justify-center items-center gap-4">
          <p className="text-4xl font-semibold text-center">Welcome to UnderGroundIndie!</p>
          <p className="text-2xl text-center">We are a community of indie developers, artists, and creators who believe in the power of collaboration and support. Our mission is to provide a platform where independent creators can connect, share their work, and grow together.</p>
        </article>
        <article className="row-start-2 col-start-2 border-slate-50/50 border-2 rounded-lg p-4 bg-linear-to-b from-green-500/25 to-lime-400/15 flex flex-col justify-center items-center gap-4">
          <p className="text-4xl font-semibold text-center">Join Us!</p>
          <p className="text-2xl text-center">Whether you're a developer, artist, musician, or any other type of creator, we welcome you to join our community. Share your projects, get feedback, and collaborate with like-minded individuals who are passionate about indie creation.</p>
        </article>
      </div>
    </div>
  );
}
