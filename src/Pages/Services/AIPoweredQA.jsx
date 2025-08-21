import React from 'react';
import { useState } from 'react';
// Animated, color-gradient button that highlights text-purple on hover/focus
function GradientButton({ children, color }) {
  return (
    <button
      className={`px-5 py-2 rounded-lg bg-white border transition-all duration-300 shadow-md
        ${color} border-cyan-400 font-semibold text-black
        hover:text-purple focus:text-purple outline-none
        hover:shadow-cyan-400/80 hover:border-cyan-500
      animate-fadeIn`}
    >
      {children}
    </button>
  );
}

const issues = [
  {
    title: "Engineering teams burn time on repetitive tests",
    desc: "Manual, redundant testing drains valuable engineering resources.",
    accent: "border-l-4 border-purpletext",
  },
  {
    title: "Manual QA leads to release drag",
    desc: "Slow, human-dependent processes bottleneck release cycles.",
    accent: "border-l-4 border-purpletext",
  },
  {
    title: "Flaky results break trust in pipelines",
    desc: "Inconsistent test outcomes erode confidence in quality gates.",
    accent: "border-l-4 border-purpletext",
  },
  {
    title: "Bugs escape to production",
    desc: "Ineffective testing allows critical defects to reach end-users.",
    accent: "border-l-4 border-purpletext",
  },
];

const impacts = [
  {
    stat: "80% ↓",
    desc: "Time to create new tests\nAI handles test case generation, fast and at scale.",
    accent: "border-l-4 border-purpletext",
  },
  {
    stat: "60% ↓",
    desc: "Manual effort in scripting\nReduced via AI-generated, low-maintenance tests.",
    accent: "border-l-4 border-purpletext",
  },
  {
    stat: "50% ↓",
    desc: "Test runtime\nOptimized by intelligent, targeted execution.",
    accent: "border-l-4 border-purpletext",
  },
  {
    stat: "40% ↓",
    desc: "Time investigating bugs\nAccelerated by our smart reporting platform.",
    accent: "border-l-4 border-purpletext",
  },
];

export default function QASection() {
     const [issueHover, setIssueHover] = useState(-1);
  const [impactHover, setImpactHover] = useState(-1);

  return (
    <>
    <section className="bg-background w-full min-h-screen flex flex-col items-center justify-center px-4 py-14 transition-all">
      {/* Headline & description */}
      <div className="w-full max-w-4xl mx-auto text-center animate-fadeIn">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Revolutionize Quality Assurance with{' '}
          <span className="text-purpletext">AI Powered Testing</span>
        </h1>
        <p className="text-gray-900 text-base md:text-lg mb-8">
          Most testing pipelines are bloated, slow, and miss bugs anyway. We built our AI Powered QA-as-a-Service to change that using Gen AI where it makes sense, and real experts where it matters.
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-row justify-center gap-4 mb-10">
          <GradientButton color="bg-purpletext">Schedule a Consultation</GradientButton>
          <GradientButton color="bg-bluetext">Learn More</GradientButton>
        </div>
      </div>
      {/* Secondary Info Card */}
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center bg-white py-10 mt-0 rounded-xl shadow-md animate-fadeIn">
        <h2 className="text-xl md:text-2xl font-bold text-black mb-2">
          QA Deserves the <span className="text-cyan-400">Spotlight</span>
        </h2>
        <p className="text-gray-700 text-center max-w-2xl">
          We’re not just here to plug gaps — we help elevate QA to the strategic function it was always meant to be. Our system gives your QA team the tools, visibility, and impact they need to be the heroes of product quality.
        </p>
      </div>
    </section>

    {/* // section2 & 3 */}
    <section className="bg-background py-10 px-2 flex flex-col items-center w-full md:-mt-24">
      {/* QA Crisis */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-gray-900 ">
        The <span className="text-purpletext">QA Engineering Crisis</span>
      </h2>
      <p className="text-gray-500 text-center text-base mb-7">
        Engineering time is bleeding into QA debt.
      </p>
      <div className="flex flex-col md:flex-row gap-5 mb-7 w-full max-w-5xl justify-center items-center">
        {issues.map((item, idx) => (
          <div
            key={item.title}
            className={`
              bg-white
              rounded-xl
              px-5 py-5
              shadow-md
              min-w-[230px] flex-1
              text-center
              ${item.accent}
              transition-all duration-300
              cursor-pointer
              ${issueHover === idx ? "scale-105 shadow-xl border-purpletext text-purple-500" : "hover:scale-105 hover:shadow-xl hover:text-purple-500"}
            `}
            onMouseEnter={() => setIssueHover(idx)}
            onMouseLeave={() => setIssueHover(-1)}
          >
            <div className="font-bold mb-2 text-base">{item.title}</div>
            <div className="text-gray-700 text-sm">{item.desc}</div>
          </div>
        ))}
      </div>
      {/* Crisis Result */}
      <div className="text-center text-white text-base mb-10">
        The result: Higher costs, slower launches, and greater risk – all pointing to one conclusion:
        <span className="text-cyan-400 font-semibold ml-1">
          Traditional QA is not built for velocity.
        </span>
      </div>
      {/* Impact Stats */}
      <h3 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-gray-900">
        Full-Spectrum <span className="text-purpletext">QA Impact</span> for Modern Teams
      </h3>
      <p className="text-gray-500 text-center text-base mb-7">
        We're not throwing around "50%" randomly. These are hard-won outcomes.
      </p>
      <div className="flex flex-col md:flex-row gap-5 mb-5 w-full max-w-5xl justify-center items-center">
        {impacts.map((item, idx) => (
          <div
            key={item.stat}
            className={`
              bg-white
              rounded-xl
              px-5 py-5
              shadow-md
              min-w-[180px] flex-1
              text-center
              ${item.accent}
              transition-all duration-300
              cursor-pointer
              ${impactHover === idx ? "scale-105 shadow-xl border-purpletext text-purple-500" : "hover:scale-105 hover:shadow-xl hover:text-purple-500"}
            `}
            onMouseEnter={() => setImpactHover(idx)}
            onMouseLeave={() => setImpactHover(-1)}
          >
            <div className="font-bold mb-2 text-lg">{item.stat}</div>
            <div className="text-gray-700 text-sm whitespace-pre-line">{item.desc}</div>
          </div>
        ))}
      </div>
      <div className="text-gray-400 text-xs text-center mb-2 max-w-xl mx-auto">
        *Validated across SaaS, fintech, healthtech, marketplaces, and complex B2B platforms.
      </div>
    </section>
    </>
  );
}



