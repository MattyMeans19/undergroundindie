import Header from "@/components/Header";
import PrelaunchForm from "@/components/prelauch-form";

export default function PrelaunchPage() {
  return (
    <div className="flex flex-col items-center text-center px-1 md:px-5 min-h-screen bg-app-bg">
      <Header />
      <h1 className="text-4xl font-bold text-app-secondary mb-4 md:mt-25 mt-35">Welcome to the Prelaunch Page</h1>
      <p className="text-2xl text-app-secondary">We're excited to have you here!</p>
      <p className="text-2xl text-app-secondary">The goal of UnderGroundIndie is to create a community platform for Indie developers across various genres and skill levels.</p>
      <p className="text-2xl text-app-secondary">There will be a free tier available for users to get started, but premium paid features will be available for those who wish to support the platform.</p>
      <p className="text-2xl text-app-accent">With enough support, if our goal is reached, we aim to invest back into the community by offering access to grants and financial support to developers.</p>
      <p className="text-2xl text-app-accent">Help us take back the industry from the soulless corporations that care only for profits!</p>
      <p className="text-2xl text-app-accent">Together, we can build a better future for indie developers!</p>
      <p className="text-2xl text-app-secondary">Users will be able to create a profile listing all of their skills and experience, create a Studio/Team to collaborate with other developers, and 
        post open positions for collaborations to fill your team, or outsource work.
      </p>

      <div className="border-5 rounded-xl border-app-border mt-25 p-5 w-full max-w-2xl bg-app-muted/30">
        <p className="text-4xl text-app-accent">Current Goal to achieve community funded grants:  <br/> 
          <strong className="italic">95,000</strong> free users <br /> 
          <strong className="italic">5000</strong> premium users <br />
        </p>
        <p className="text-2xl text-app-secondary mt-10">
          We aim for full transparency with our community, and will provide regular updates on our progress towards this goal. Once we reach this goal, we will begin offering grants to developers in the community to help fund their projects.
        </p>
        <p className="text-lg text-app-muted">
          We understand that in a perfect world this would all be free, and we are committed to making the platform as accessible as possible for all developers.
          Our goal revenue structure would be 80% of all revenue generated from the platform would go back into the community to fund grants, and 20% would go towards maintaining and improving the platform.
        </p>
      </div>
      <p className="text-4xl mt-10  text-app-accent">Current planned tiers</p>
      <p className="text-lg text-app-muted">*Note: Prices and benefits are subject to change based on community feedback and platform development.</p>
      <p className="text-lg text-app-muted">*'Open Collaborations' means open positions for collaborations to fill your team, or outsource work on solo projects.</p>

      <div className="border-5 rounded-xl border-app-border p-5 w-full md:max-w-7xl bg-app-muted/30 grid grid-cols-3 gap-4">
      <span className="text-2xl md:text-4xl text-app-secondary underline col-span-full mb-10">User Tiers</span>
        <p className="text-2xl md:text-4xl text-app-accent underline">Tier</p>
        <p className="text-2xl md:text-4xl text-app-accent underline">Price</p>
        <p className="text-2xl md:text-4xl text-app-accent underline">Benefits</p>

        <p className="text-2xl text-app-secondary">Free (contains ads)</p>
        <p className="text-2xl text-app-secondary">$0</p>
        <p className="text-sm md:text-2xl text-app-secondary">List/Grid style profile, <strong>5</strong> collaboration/Studio applications per month, 
          <strong> 1</strong> Studio/Team creation, <strong> 1</strong> open collaboration.
        </p>

        <p className="text-2xl text-app-secondary">Premium</p>
        <p className="text-2xl text-app-secondary">$5.99</p>
        <p className="text-sm md:text-2xl text-app-secondary">No Ads, Gallery style profile, <strong>10</strong> collaboration/Studio applications per month, 
          <strong> 1</strong> Studio/Team creation, <strong>5</strong> open collaborations.
        </p>

        <span className="text-4xl text-app-secondary underline col-span-full mb-10">Studio/Team Tiers</span>
        <p className="text-2xl md:text-4xl  text-app-accent underline">Tier</p>
        <p className="text-2xl md:text-4xl text-app-accent underline">Price</p>
        <p className="text-2xl md:text-4xl text-app-accent underline">Benefits</p>

        <p className="text-2xl text-app-secondary">Free</p>
        <p className="text-2xl text-app-secondary">$0</p>
        <p className="text-sm md:text-2xl text-app-secondary">Public Studio/Team Profile, <strong>5</strong> open projects, 
          <strong className="italic"> Unlimtied</strong> open position postings, access to limited funding via community voting.
        </p>

        <p className="text-2xl text-app-secondary">Pro</p>
        <p className="text-2xl text-app-secondary">$4.99</p>
        <p className="text-sm md:text-2xl text-app-secondary">Everything in the free tier, plus a recommendations page for devs that match open positions in your Studio/Team
          <strong className="italic"> AND</strong> access to greater funding via community voting. <br />
          <span className="text-lg text-app-muted">*Note: Requires Studio/Team Founder to have a premium user account.</span>
        </p>
      </div>

      <p className="text-3xl text-app-muted my-10 max-w-7xl">
        This platform is focused mainly on Indie Game Developement, however we encourage artists, designers, musicians, voice actors, and other creative professionals to join our community.
        Projects will NOT be limited to just game development, but we will have a strong focus on it. We want to create a community where all creative professionals can come together and collaborate on projects, regardless of their skill level or experience.
      </p>

      <div className="border-5 rounded-xl border-app-border p-5 w-full max-w-7xl bg-app-muted/30 flex flex-col gap-4 mb-5">
        <span className="text-4xl text-app-secondary underline col-span-full mb-10">Interested in Joining?</span>
        <PrelaunchForm />
      </div>
    </div>
  );
}