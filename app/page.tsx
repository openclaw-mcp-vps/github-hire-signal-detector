export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Recruiters &amp; Founders
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find developers<br />
          <span className="text-[#58a6ff]">open to new opportunities</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          GitHub Hire Signal Detector scans activity patterns — contribution frequency, archived repos, and job-seeking keywords — to rank developers by their likelihood of being open to a role.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Finding Talent — $19/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* How it works */}
      <section className="mb-20 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { icon: "📉", title: "Activity Drop Detection", desc: "Spots developers whose commit frequency has recently declined — a classic signal of disengagement." },
          { icon: "📦", title: "Repo Archiving Signals", desc: "Identifies profiles archiving projects, often indicating a developer is wrapping up and ready to move on." },
          { icon: "🔍", title: "Keyword Scanning", desc: "Searches commits and READMEs for phrases like 'open to work', 'looking for opportunities', and more." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20 flex justify-center">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 w-full max-w-sm text-center">
          <p className="text-[#58a6ff] text-xs font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left text-sm text-[#c9d1d9] space-y-3 mb-8">
            {[
              "Unlimited GitHub profile scans",
              "Hire-signal scoring algorithm",
              "Activity drop &amp; keyword detection",
              "Export results to CSV",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the scoring algorithm work?",
              a: "We analyze public GitHub data: commit frequency trends, repository archiving events, profile bio changes, and keyword matches in recent commits and READMEs. Each signal is weighted and combined into a 0–100 hire-signal score."
            },
            {
              q: "Is this legal and does it respect privacy?",
              a: "Yes. We only use publicly available GitHub data via the official GitHub API, in compliance with GitHub's Terms of Service. No private repositories or personal data beyond public profiles are accessed."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Absolutely. You can cancel at any time from your billing portal with no questions asked. You'll retain access until the end of your current billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} GitHub Hire Signal Detector. All rights reserved.
      </footer>
    </main>
  );
}
