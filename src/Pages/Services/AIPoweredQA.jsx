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

const steps = [
  {
    title: "Gen AI Kicks Off",
    desc: "Scans code changes Generates test cases Identifies API/UI breakpoints & edge cases",
    border: "border-purpletext",
  },
  {
    title: "Manual QA leads to release drag",
    desc: "Slow, human-dependent processes bottleneck release cycles.",
    border: "border-purpletext",
  },
  {
    title: "Flaky results break trust in pipelines",
    desc: "Inconsistent test outcomes erode confidence in quality gates.",
    border: "border-purpletext",
  },
  {
    title: "Bugs escape to production",
    desc: "Ineffective testing allows critical defects to reach end-users.",
    border: "border-purpletext",
  },
];

const offers = [
  {
    title: "QA as a Service Subscription",
    border: "border-purpletext",
    points: [
      { highlight: "Complete QA Ownership:", text: "From strategy to execution, we take full responsibility for your quality assurance needs." },
      { highlight: "AI-Powered Testing Platform:", text: "Automated test generation tailored to your product." },
      { highlight: "Real-time Quality Insights:", text: "Actionable metrics and seamless integration with your development tools." },
      { highlight: "Flexible Subscription Model:", text: "Scale up or down based on your needs while maintaining consistent quality standards." },
    ]
  },
  {
    title: "On-Demand Testing",
    border: "border-cyantext",
    points: [
      { highlight: "Scalable QA Workforce:", text: "Expand your testing team instantly with seasoned experts, backed by our AI capabilities." },
      { highlight: "AI-Assisted Testing Execution:", text: "Blending human expertise with AI-driven efficiency for faster, more accurate results." },
      { highlight: "Flexible, Pay-as-You-Go Model:", text: "Adaptable to your project needs without long-term commitments, perfect for peak periods and specific projects." },
    ]
  }
];

function Card({ children, border, className = "" }) {
  return (
    <div
      tabIndex={0}
      className={`bg-white rounded-lg  shadow-md py-4 px-4 min-h-[120px] border-l-4 ${border}
        transition-all duration-300
        hover:text-purple focus:text-purple
        hover:shadow-lg focus:shadow-lg
        animate-fadeIn outline-none ${className}`}
    >
      {children}
    </div>
  );
}


const technologies = [
  { name: "Generative AI", color: "bg-cyan-100 text-cyan-700" },
  { name: "Machine Learning", color: "bg-blue-100 text-blue-700" },
  { name: "Test Automation Frameworks", color: "bg-purpletext text-white" },
  { name: "Predictive Analytics", color: "bg-pink-100 text-pink-700" },
  { name: "MLOps for QA", color: "bg-green-100 text-green-700" },
  { name: "Cloud Testing", color: "bg-white text-gray-700 border border-gray-200" },
];

const testimonials = [
  {
    client: "Client1",
    name: "Seyed–Mahdi Khaligh",
    role: "Chief Innovation Officer, Cognetivity Neurosciences",
    text: `“We've entrusted our Quality Assurance entirely to Ideas2IT, allowing us to scale our efforts according to our needs. They have proven to be the fastest and most accurate partner we’ve worked with.”`,
    accent: "border-purpletext",
  },
  {
    client: "Client2",
    name: "Kumar Srivatsan",
    role: "Founder & CEO - Fego",
    text: `“Our product lines were owned by Ideas2IT and the QA platform + human subscription allowed us to ship product fast enough to launch 3 completely new fintech products in a matter of 8 months.”`,
    accent: "border-purpletext",
  },
  {
    client: "Client3",
    name: "Raj Abishek",
    role: "Co-Founder, Product - Nurturebox",
    text: `“As a startup founder, having fast and accurate QA is crucial for our accelerated go-to-market timelines. Ideas2IT delivers 100% of our QA efforts, ensuring we catch critical issues and stay on track, consistently.”`,
    accent: "border-purpletext",
  },
];


export default function QASection() {
     const [issueHover, setIssueHover] = useState(-1);
  const [impactHover, setImpactHover] = useState(-1);
  const [techHover, setTechHover] = useState(-1);
  const [testimonialHover, setTestimonialHover] = useState(-1);
  const [ctaHover, setCtaHover] = useState(false);

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

    {/* section5 & 6 */}
            <section className="bg-background w-full py-10 px-2 flex flex-col items-center transition-all">
  {/* How It Works Section */}
  <div className="w-full max-w-3xl mx-auto mb-10 animate-fadeIn">
    <h2 className="text-2xl md:text-3xl font-bold text-purple text-center mb-2">
      How It <span className="text-cyan-400">Works</span>
    </h2>
    <p className="text-gray-700 text-center mb-6">
      We plug into your repo, CI/CD tools, and product flow. Here’s a simplified breakdown:
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {steps.map((step, i) => (
        <Card key={i} border={step.border}>
          <h3 className="font-semibold text-purpletext mb-1 text-base">{step.title}</h3>
          <p className="text-gray-700 text-sm">{step.desc}</p>
        </Card>
      ))}
    </div>
  </div>
  {/* What We Offer Section */}
  <div className="w-full max-w-3xl mx-auto animate-fadeIn">
    <h2 className="text-2xl md:text-3xl font-bold text-purple text-center mb-2">
      What <span className="text-cyan-400">We Offer</span>
    </h2>
    <p className="text-gray-700 text-center mb-6">
      Designed for Engineering-Led Teams. Built by engineers who’ve scaled products from 0 to millions of users.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {offers.map((offer, i) => (
        <Card key={i} border={offer.border} className="flex flex-col">
          <h3 className="font-semibold text-black mb-2 text-base">{offer.title}</h3>
          <ul className="text-sm text-gray-700 list-none space-y-2">
            {offer.points.map((point, idx) => (
              <li key={idx}>
                <span className="font-bold text-black">{point.highlight}</span>{" "}
                <span>{point.text}</span>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  </div>
</section>


    {/* section 6 7 8 */}
    <section className="bg-background py-10 px-2 flex flex-col items-center w-full">
      {/* Technologies */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-gray-900">
        Key <span className="text-purpletext">Technologies We Leverage</span>
      </h2>
      <p className="text-gray-500 text-base text-center mb-7 max-w-xl mx-auto">
        Our expertise spans a wide range of cutting-edge AI and testing technologies.
      </p>
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {technologies.map((tech, idx) => (
          <span
            key={tech.name}
            className={`px-5 py-2 rounded-full font-semibold text-sm shadow
            transition-all duration-300 cursor-pointer
            ${tech.color}
            ${techHover === idx ? "scale-105 text-purple-500 border border-purpletext shadow-lg" : "hover:scale-105 hover:text-purple-500 hover:border-purpletext"} 
            `}
            onMouseEnter={() => setTechHover(idx)}
            onMouseLeave={() => setTechHover(-1)}
          >
            {tech.name}
          </span>
        ))}
      </div>

      {/* QA Covered */}
      <h3 className="text-xl sm:text-2xl font-bold text-center mb-2 text-gray-900">
        We've Got Your <span className="text-purpletext">QA Covered.</span>
      </h3>
      <p className="text-gray-500 text-center text-base mb-8 max-w-2xl mx-auto">
        Powerful stories from leading companies that made the switch to AI-powered QA, and never looked back.
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mb-14 w-full max-w-4xl">
        {testimonials.map((t, idx) => (
          <div
            key={t.name}
            className={`bg-white rounded-xl shadow-md px-6 py-8 flex-1 min-w-[240px] max-w-sm
              border-t-4 ${t.accent}
              transition-all duration-300 cursor-pointer
              text-center
              ${testimonialHover === idx ? "scale-105 shadow-xl border-purpletext text-purple-500" : "hover:scale-105 hover:shadow-xl hover:text-purple-500"}
            `}
            onMouseEnter={() => setTestimonialHover(idx)}
            onMouseLeave={() => setTestimonialHover(-1)}
          >
            <div className="font-bold opacity-60 mb-2 text-xs">{t.client}</div>
            <div className="font-bold text-base mb-1">{t.name}</div>
            <div className="text-gray-400 text-xs mb-3 font-semibold">{t.role}</div>
            <div className="text-gray-800 text-sm">{t.text}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <h4 className="text-gray-900 text-lg text-center font-bold mb-2">
        Let’s Get You <span className="text-purpletext">Real QA ROI</span>
      </h4>
      <p className="text-gray-500 text-center text-base mb-5 max-w-xl mx-auto">
        Start with a free QA assessment. We’ll show you exactly where your bottlenecks are, and what a better path looks like.
      </p>
      <button
        className={`px-8 py-2 rounded-lg border-2 font-semibold mb-6
        transition duration-300
        ${ctaHover ? "border-purpletext text-purple-500 bg-white scale-105 shadow-lg" : "border-cyan-400 text-cyan-400 bg-background hover:scale-105 hover:text-purple-500 hover:border-purpletext hover:bg-white"}
        `}
        onMouseEnter={() => setCtaHover(true)}
        onMouseLeave={() => setCtaHover(false)}
      >
        Start Your Free Assessment
      </button>
    </section>  
    </>
  );
}



