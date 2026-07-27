export default function TermsOfService() {

  return (
    <div className="w-full h-full self-center mx-auto bg-white text-gray-800 rounded-xl shadow-lg border border-gray-200 font-sans">
      {/* Header */}
      <div className="bg-gray-900 text-white px-8 py-6">
        <h1 className="text-3xl font-bold tracking-tight">Terms of Service & User Agreement</h1>
        <p className="text-sm text-gray-400 mt-1">Last Updated: July 2026</p>
      </div>

      {/* Terms Content Body */}
      <div className="p-8 space-y-8 max-h-[90vh] overflow-y-auto leading-relaxed text-md">
        
        <p className="text-gray-600">
          Welcome! By accessing or using our platform, you agree to be bound by the following Terms of Service. Please read them carefully before creating an account or using our services.
        </p>

        {/* Section 1: User Terms */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">
            1. User Terms
          </h2>

          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-gray-900 text-base">Age Requirement & Verification</h3>
              <p className="text-gray-600 mt-0.5">
                You must be <span className="font-semibold text-gray-900">at least 16 years of age</span> to create an account or use this platform. By registering, you represent and warrant that you meet this age requirement. You are responsible for providing truthful information during account registration.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 text-base">Community Conduct & Harassment</h3>
              <p className="text-gray-600 mt-0.5">
                We are committed to maintaining a safe and respectful community. <span className="font-semibold text-gray-900">No harassment of any kind will be tolerated.</span> This includes bullying, hate speech, threats, intimidation, or persistent unwelcome contact.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 text-base">Content Rules & Adult Content</h3>
              <p className="text-gray-600 mt-0.5">
                You retain ownership of the content you post. However, <span className="font-semibold text-gray-900">any adult, mature, or sexually explicit content must be properly tagged and labeled</span> as such using the platform's content rating tools prior to posting. Unlabeled adult content or illegal content is strictly prohibited.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 text-base">Independent Transactions & Payment Disputes</h3>
              <p className="text-gray-600 mt-0.5">
                Our platform may facilitate connections between users, creators, and studios, but <span className="font-semibold text-gray-900">we are not a party to any financial agreements or contracts between users.</span> All payments, fees, deliverables, and terms for work done are strictly between the involved users/studios. The platform holds no responsibility or liability for resolving payment disputes, unfulfilled contracts, or refunds.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Platform Terms */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">
            2. Platform Terms & Disclaimers
          </h2>

          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-gray-900 text-base">Data Privacy & Usage</h3>
              <p className="text-gray-600 mt-0.5">
                We respect your privacy. We collect and store necessary account data to provide and improve our services. <span className="font-semibold text-gray-900">We will never sell, rent, or trade your personal data to third-party platforms or advertisers.</span>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 text-base">Account Termination & Moderation</h3>
              <p className="text-gray-600 mt-0.5">
                We reserve the right, at our sole discretion, to suspend, disable, or permanently terminate any user account that violates any of the terms outlined in this agreement, without prior notice.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 text-base">Limitation of Liability (Age Falsification)</h3>
              <p className="text-gray-600 mt-0.5">
                The platform employs reasonable safeguards to enforce age restrictions, but relies on user honesty during registration. <span className="font-semibold text-gray-900">The platform will not be held liable for any account created by a user who falsified their age, date of birth, or identity during registration.</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}