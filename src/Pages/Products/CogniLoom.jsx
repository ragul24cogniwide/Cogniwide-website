import { ArrowDown } from "lucide-react";
import { useState } from "react";

const CogniLoom = () => {
  const [active, setActive] = useState(null);
  const [highlight, setHighlight] = useState(null); 
  const [highlighted, setHighlighted] = useState(null); 


  const cards = [
    {
      icon: "⚙️",
      title: "Adaptive Workflow Engine",
      desc: "Dynamically adjusts process flows based on real-time conditions, business rules, and performance metrics.",
      statLabel: "Efficiency Gain",
      stat: "+87%",
    },
    {
      icon: "🔗",
      title: "Seamless Integration Hub",
      desc: "Connect and orchestrate across 500+ enterprise systems with pre-built connectors and APIs.",
      statLabel: "Integration Time",
      stat: "-65%",
    },
    {
      icon: "🤖",
      title: "Intelligent Decision Engine",
      desc: "AI-powered decision making that learns from patterns and optimizes outcomes automatically.",
      statLabel: "Decision Accuracy",
      stat: "99.2%",
    },
  ];

  const Card = ({ card, highlighted, onClick }) => (
    <div
      className={`bg-[var(--color-background)] rounded-xl shadow-lg transition-all duration-300 transform cursor-pointer
        p-6 w-full max-w-md flex flex-col gap-2
        ${highlighted ? "border-2 border-purpletext scale-[1.04]" : "border border-transparent"}
        slide-in`}
      onClick={onClick}
      onMouseEnter={onClick}
      style={{ animationDelay: `${Math.random() * 0.3}s` }}
    >
      <div className="text-3xl mb-2">{card.icon}</div>
      <h3
        className={`font-bold text-lg ${
          highlighted ? "text-brandblue" : " text-[var(--color-purpletext)]"
        }`}
      >
        {card.title}
      </h3>
      <p className="text-gray-700 mb-3">{card.desc}</p>
      <div className="mt-auto flex justify-between items-center">
        <span className="text-sm text-gray-400">{card.statLabel}</span>
        <span
          className={`text-xl font-semibold ${
            highlighted ? "text-[var(--color-purpletext)]" : "text-purple"
          }`}
        >
          {card.stat}
        </span>
      </div>
    </div>
  );

  const apiDocs = [
    { type: "title", text: "# CogniLoom Workflow API" },
    { type: "endpoint", method: "POST", url: "/api/v1/workflows" },
    { type: "endpoint", method: "GET", url: "/api/v1/workflows/{id}" },
    { type: "endpoint", method: "PUT", url: "/api/v1/workflows/{id}/execute" },
    { type: "endpoint", method: "GET", url: "/api/v1/workflows/{id}/status" },
    { type: "feature", text: "RESTful API Design" },
    { type: "feature", text: "Real-time WebSocket Events" },
    { type: "feature", text: "GraphQL Support" },
  ];
  
  const timeline = [
    {
      step: 1,
      title: "Assessment & Planning",
      detail: "Week 1-2: Current state analysis",
    },
    {
      step: 2,
      title: "Integration Setup",
      detail: "Week 3-4: System connections",
    },
    {
      step: 3,
      title: "Workflow Configuration",
      detail: "Week 5-6: Process automation",
    },
    {
      step: 4,
      title: "Testing & Deployment",
      detail: "Week 7-8: Go-live preparation",
    },
  ];

  const stories = [
    {
      initials: "GM",
      title: "Global Manufacturing",
      subtitle: "Fortune 500 Company",
      quote:
        '“CogniLoom transformed our supply chain operations, reducing processing time by 65% and eliminating manual errors completely.”',
      stats: [
        { value: "65%", label: "Time Reduction" },
        { value: "100%", label: "Error Elimination" },
      ],
    },
    {
      initials: "FS",
      title: "Financial Services",
      subtitle: "Leading Investment Bank",
      quote:
        '“The intelligent workflow orchestration enabled us to process transactions 3x faster while maintaining regulatory compliance.”',
      stats: [
        { value: "3x", label: "Faster Processing" },
        { value: "100%", label: "Compliance" },
      ],
    },
  ];

  function StoryCard({ story, highlighted, onMouseEnter, onMouseLeave }) {
    return (
      <div
        className={`bg-background rounded-xl shadow-lg p-8 transition-all duration-300
          border-2 ${highlighted ? "border-purple" : "border-transparent"}
          flex flex-col justify-between w-full max-w-xl zoom-in cursor-pointer`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        tabIndex={0}
        onFocus={onMouseEnter}
        onBlur={onMouseLeave}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-brandaqua flex items-center justify-center text-white bg-purple text-2xl font-bold">{story.initials}</div>
          <div>
            <div className={`font-bold text-lg ${highlighted ? "text-blue-600" : "text-purple"}`}>{story.title}</div>
            <div className="text-gray-500 text-sm">{story.subtitle}</div>
          </div>
        </div>
        <div className={`italic text-gray-200 mb-8 text-base ${highlighted ? "text-purple" : "text-gray-500"}`}>
          {story.quote}
        </div>
        <div className="flex gap-12">
          {story.stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center"
            >
              <span className={`text-xl font-bold ${highlighted ? "text-purple" : "text-brandaqua"}`}>{stat.value}</span>
              <span className="text-gray-500 text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Section 1 */}
      <section className="py-16  bg-background">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side */}
          <div className="flex-1">
            <div className="inline-flex items-center space-x-2 bg-cyan-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium animate-bounce-slow">
              <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span>Intelligent Workflow Orchestration</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="text-purple animate-fade-in">CogniLoom</span>
              <br />
              Weave Intelligence
              <br />
              Into Every Process
            </h1>
            <p className="text-lg text-gray-500 mb-8 max-w-xl">
              Transform your enterprise operations with AI-powered workflow orchestration that seamlessly integrates disparate systems, automates complex processes, and adapts to changing business requirements in real-time.
            </p>
            <div className="flex gap-4 mb-10">
              <button className="px-6 py-2 font-semibold text-base rounded-md bg-transparent border-2 border-purple text-black shadow-purple shadow focus:outline-none transition hover:bg-purple hover:text-black hover:shadow-lg ring-1 ring-purple">
                Initiate Innovation → Start POC
              </button>
              <button className="px-6 py-2 font-semibold text-base rounded-md bg-[#23282d] text-white border border-gray-500 transition hover:border-sky-400">
                Schedule Demo
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 mt-6">
              <div className="flex flex-col items-center text-center">
                <span className="text-purple font-bold text-2xl">87%</span>
                <span className="text-gray-500 text-sm mt-1">Process Efficiency</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-purple font-bold text-2xl">65%</span>
                <span className="text-gray-500 text-sm mt-1">Cost Reduction</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-purple font-bold text-2xl">3x</span>
                <span className="text-gray-500 text-sm mt-1">Faster Deployment</span>
              </div>
            </div>
          </div>

          {/* Right Side (Feature Card) */}
          <div className="flex-1 flex justify-center items-center">
            <div className="bg-[#232427] rounded-2xl px-10 py-10 w-full max-w-md flex flex-col items-center justify-center gap-8 shadow-lg">
              {/* Item 1 */}
              <div className="flex flex-col items-center">
                <div className="flex items-start gap-4">
                  <div className="pt-1">
                    <svg width="28" height="28" fill="none" className="text-sky-400" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <rect x="9" y="9" width="6" height="6" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-white">Data Ingestion</span>
                    <div className="text-gray-400 text-sm leading-tight">
                      Multi-source data collection
                    </div>
                  </div>
                </div>
                <ArrowDown className="text-sky-400 my-3 w-6 h-6" />
              </div>
              {/* Item 2 */}
              <div className="flex flex-col items-center">
                <div className="flex items-start gap-4">
                  <div className="pt-1">
                    <svg width="28" height="28" className="text-sky-400" fill="none" viewBox="0 0 24 24">
                      <rect x="6" y="5" width="12" height="14" stroke="currentColor" strokeWidth="2" rx="2" />
                      <path d="M9 3v4M15 3v4" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-white">Process Automation</span>
                    <div className="text-gray-400 text-sm leading-tight">
                      Intelligent task routing
                    </div>
                  </div>
                </div>
                <ArrowDown className="text-sky-400 my-3 w-6 h-6" />
              </div>
              {/* Item 3 */}
              <div className="flex flex-col items-center">
                <div className="flex items-start gap-4">
                  <div className="pt-1">
                    <svg width="28" height="28" className="text-sky-400" fill="none" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
                      <path d="M8 9h8M8 15h8M8 12h8" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-white">Real-time Analytics</span>
                    <div className="text-gray-400 text-sm leading-tight">
                      Performance monitoring
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className=" bg-[var(--color-background)] px-4 py-16 fade-in">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-purple mb-2">
            Intelligent Process Orchestration
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            CogniLoom's advanced AI capabilities seamlessly weave together disparate systems, creating unified workflows that adapt and optimize in real-time.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full">
          {cards.map((card, idx) => (
            <Card
              key={idx}
              card={card}
              highlighted={active === idx}
              onClick={() => setActive(idx)}
            />
          ))}
        </div>
      </section>



      {/* //Technical Architecture */}
      <section className="w-full min-h-screen bg-background py-16 px-4 flex flex-col items-center fade-in">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-purple">
        Technical Architecture
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl text-center mb-12">
        Built on enterprise-grade infrastructure with comprehensive API documentation and implementation guides.
      </p>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center items-stretch">
        {/* API Documentation Card */}
        <div
          className={`relative bg-background rounded-2xl shadow-lg transition-all border
            ${highlight === "api" ? "border-purple" : "border-transparent"} 
            p-8 flex-1 min-w-[300px] max-w-[500px] zoom-in hover:scale-105`}
          tabIndex="0"
          onMouseEnter={() => setHighlight("api")}
          onMouseLeave={() => setHighlight(null)}
          onFocus={() => setHighlight("api")}
          onBlur={() => setHighlight(null)}
        >
          <h3 className="text-xl font-semibold mb-5 text-purple">
            API Documentation
          </h3>
          <div className="space-y-2">
            {apiDocs.map((item, i) =>
              item.type === "title" ? (
                <div key={i} className="font-bold text-brandblue mb-2">{item.text}</div>
              ) : item.type === "endpoint" ? (
                <div
                  key={i}
                  className={`font-mono ${
                    highlight === "api"
                      ? "text-purple"
                      : "text-gray-700"
                  }`}
                >
                  <span
                    className={`font-bold ${
                      item.method === "POST"
                        ? "text-green-600"
                        : item.method === "GET"
                        ? "text-cyan-600"
                        : "text-orange-500"
                    }`}
                  >
                    {item.method}
                  </span>{" "}
                  {item.url}
                </div>
              ) : (
                <div
                  key={i}
                  className={`flex items-center gap-2 ${
                    highlight === "api"
                      ? "text-purple font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  <span className="text-sm text-purple">•</span>
                  {item.text}
                </div>
              )
            )}
          </div>
        </div>

        {/* Timeline Card */}
        <div
          className={`relative bg-background rounded-2xl shadow-lg transition-all border
            ${highlight === "timeline" ? "border-purple" : "border-transparent"}
            p-8 flex-1 min-w-[300px] max-w-[500px] zoom-in hover:scale-105`}
          tabIndex="0"
          onMouseEnter={() => setHighlight("timeline")}
          onMouseLeave={() => setHighlight(null)}
          onFocus={() => setHighlight("timeline")}
          onBlur={() => setHighlight(null)}
        >
          <h3 className="text-xl font-semibold mb-5 text-purple">
            Implementation Timeline
          </h3>
          <ol className="space-y-6">
            {timeline.map((step, idx) => (
              <li key={idx} className="flex gap-4 items-start">
                <span
                  className={`w-8 h-8 flex items-center justify-center 
                    rounded-full font-bold text-white bg-purple bg-gradient-to-tr from-purple via-purple to-orange 
                    shadow-md border-2 border-white mr-2 text-md
                    ${highlight === "timeline" ? "scale-105" : ""}
                  `}
                >
                  {step.step}
                </span>
                <div>
                  <div
                    className={`font-semibold text-base ${
                      highlight === "timeline" ? "text-purple" : "text-brandblue"
                    }`}
                  >
                    {step.title}
                  </div>
                  <div className="text-gray-600 text-sm">{step.detail}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>

    {/* section4 */}
    <section className="w-full  bg-background py-16 px-4 fade-in flex flex-col items-center -mt-24">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-purple">
        Customer Success Stories
      </h2>
      <p className="text-lg text-gray-600 mb-12 text-center">Real-world implementations across industries</p>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch w-full max-w-5xl">
        {stories.map((story, idx) => (
          <StoryCard
            key={idx}
            story={story}
            highlighted={highlighted === idx}
            onMouseEnter={() => setHighlighted(idx)}
            onMouseLeave={() => setHighlighted(null)}
          />
        ))}
      </div>

      <div className="text-center mt-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Ready to <span className="text-purple">Transform Your Workflows??</span>
        </h3>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Join hundreds of enterprises already benefiting from CogniXcellerate's intelligent orchestration platform.
          Start your transformation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className=" text-white font-semibold py-2 px-6 rounded shadow hover:bg-blue-800 transition bg-purple">
            Initiate Innovation → Start POC
          </button>
          <button className="bg-white border border-blue-700 text-blue-700 font-semibold py-2 px-6 rounded shadow hover:bg-blue-100 transition">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default CogniLoom;
