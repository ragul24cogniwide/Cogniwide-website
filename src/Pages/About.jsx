import { useState } from "react";

export default function About() {
     const [highlighted, setHighlighted] = useState(null);
     const [highlight, setHighlight] = useState(-1);
     const [hovered, setHovered] = useState(-1);

    const milestones = [
  {
    year: "2018",
    title: "Company Founded",
    desc: "Cogniwide was established with a vision to democratize AI automation for enterprises worldwide.",
    side: "left",
    accent: "border-cyan-400",
  },
  {
    year: "2020",
    title: "CogniXcellerate Launch",
    desc: "Launched our flagship AI orchestration platform, revolutionizing workflow automation.",
    side: "right",
    accent: "border-blue-400",
  },
  {
    year: "2022",
    title: "Multi-Product Suite",
    desc: "Expanded our platform with CogniLoom, CogniAssist, and CogniAgent for comprehensive AI solutions.",
    side: "left",
    accent: "border-purpletext",
  },
  {
    year: "2025",
    title: "Global Enterprise Scale",
    desc: "Serving 500+ enterprises worldwide with 87% average efficiency improvements.",
    side: "right",
    accent: "border-pink-400",
  },
];

const stats = [
  {
    value: "500+",
    label: "Enterprise Clients",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#fff" />
        <path d="M7 13l3 3 7-7" stroke="#0ff" strokeWidth="2" />
      </svg>
    ),
    color: "bg-cyan-400",
  },
  {
    value: "87%",
    label: "Efficiency Improvement",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#fff" />
        <path d="M7 7h10M7 12h6M7 17h8" stroke="#38bdf8" strokeWidth="2" />
      </svg>
    ),
    color: "bg-blue-400",
  },
  {
    value: "99.9%",
    label: "Platform Uptime",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#fff" />
        <path d="M12 7v5l3 3" stroke="#0ff" strokeWidth="2" />
      </svg>
    ),
    color: "bg-cyan-400",
  },
  {
    value: "24/7",
    label: "Global Support",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#fff" />
        <path d="M12 19a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" stroke="#38bdf8" strokeWidth="2" />
        <path d="M12 9v3l2 2" stroke="#38bdf8" strokeWidth="2" />
      </svg>
    ),
    color: "bg-blue-400",
  },
];

const values = [
  {
    icon: (
      <svg width="28" height="28" fill="none">
        <circle cx="14" cy="14" r="8" fill="#fff" />
      </svg>
    ),
    title: "Innovation Excellence",
    desc: "Continuously pushing the boundaries of AI technology to deliver cutting-edge solutions that transform industries.",
    border: "border-t-4 border-cyan-400",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none">
        <circle cx="14" cy="14" r="8" fill="#fff" /><path d="M14 12v2M14 16h.01" stroke="#22d3ee" strokeWidth="2"/>
      </svg>
    ),
    title: "Customer Success",
    desc: "Our clients' success is our success. We're committed to delivering measurable value and exceeding expectations.",
    border: "border-t-4 border-blue-400",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none">
        <path d="M14 21c5-6 5-10 0-16-5 6-5 10 0 16zm0 0v-6" stroke="#fff" strokeWidth="2"/>
      </svg>
    ),
    title: "Trust & Security",
    desc: "Building secure, reliable AI systems that enterprises can trust with their most critical operations.",
    border: "border-t-4 border-purpletext",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none">
        <rect x="6" y="10" width="16" height="8" fill="#fff" rx="2"/>
        <rect x="10" y="6" width="8" height="4" fill="#fff" rx="1"/>
      </svg>
    ),
    title: "Collaborative Growth",
    desc: "Fostering partnerships and team collaboration to achieve shared success and continuous improvement.",
    border: "border-t-4 border-pink-400",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none">
        <rect width="28" height="28" rx="8" fill="#fff"/>
        <path d="M9 14h10M14 9v10" stroke="#06b6d4" strokeWidth="2"/>
      </svg>
    ),
    title: "Ethical AI",
    desc: "Developing responsible AI solutions that respect privacy, promote fairness, and enhance human capabilities.",
    border: "border-t-4 border-emerald-400",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none">
        <polygon points="14,8 20,20 8,20" fill="#fff"/>
      </svg>
    ),
    title: "Agile Excellence",
    desc: "Adapting quickly to changing market needs while maintaining the highest standards of quality and performance.",
    border: "",
  },
];


  return (
    <>
    {/* section1 */}
    

    {/* section2 */}
    <section className="bg-background py-12 min-h-screen flex flex-col items-center w-full">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-purpletext mb-1">
        Our Journey
      </h2>
      <p className="text-gray-500 text-center mb-10">
        Milestones that shaped our AI innovation
      </p>

      <div className="relative w-full max-w-5xl mx-auto flex flex-col gap-16">
        {/* Timeline vertical line */}
        <div className="absolute left-1/2 top-0 translate-x-[-50%] h-full w-1 bg-cyan-400/60 z-0"></div>
        {milestones.map((m, idx) => (
          <div
            key={m.year}
            className={`relative flex flex-col md:flex-row md:items-center ${idx % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
            onMouseEnter={() => setHighlighted(idx)}
            onMouseLeave={() => setHighlighted(null)}
          >
            {/* For responsive: left/right cards */}
            <div className={`flex ${m.side === "left" ? "md:justify-end" : "md:justify-start"} w-full md:w-1/2 ${m.side === "left" ? "md:pr-12" : "md:pl-12"}`}>
              <div
                className={`
                  bg-white rounded-lg shadow-lg px-8 py-6 max-w-md w-full
                  border-l-4 ${m.accent}
                  transition-all duration-300
                  ${
                    highlighted === idx
                      ? "scale-105 shadow-2xl border-purpletext text-purple-500 ring-2 ring-cyan-400/60"
                      : "hover:scale-105 hover:text-purple-500 hover:border-purpletext"
                  }
                  relative z-10
                `}
              >
                <div className="font-bold text-cyan-400 text-sm mb-1">{m.year}</div>
                <div className="font-bold text-lg mb-1">{m.title}</div>
                <div className="text-gray-700 text-base">{m.desc}</div>
              </div>
            </div>
            {/* Timeline step dot */}
            <div className="absolute left-1/2 translate-x-[-50%] flex flex-col items-center z-20">
              <div
                className={`w-5 h-5 rounded-full border-4 ${m.accent} bg-background transition-all duration-300
                ${highlighted === idx ? "shadow-cyan-400/80 shadow-lg bg-purpletext border-purpletext" : ""}
                `}
                style={{
                  boxShadow: highlighted === idx ? "0 0 16px 4px #06b6d4" : "",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* section3 */}
      <section className="bg-background w-full min-h-[70vh] py-8 px-2 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-10 items-center justify-between mx-auto">
        {/* Mission & Vision */}
        <div className="flex-1 max-w-xl">
          {/* Mission */}
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Our <span className="text-purpletext">Mission</span>
          </h2>
          <p className="text-gray-500 text-lg mb-4">
            To democratize AI automation by making intelligent process orchestration accessible to every enterprise, regardless of size or technical complexity.
          </p>
          <div className="border-b-4 border-cyan-400 w-24 mb-6"></div>
          {/* Vision */}
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Our <span className="text-purpletext">Vision</span>
          </h2>
          <p className="text-gray-500 text-lg mb-4">
            A world where AI amplifies human potential, transforming how enterprises operate and innovate through intelligent automation.
          </p>
          <div className="border-b-4 border-cyan-400 w-24"></div>
        </div>
        {/* Stats */}
        <div className="flex-1 max-w-xl w-full">
          <div className=" rounded-2xl p-8 grid grid-cols-2 gap-8 shadow-lg">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`
                  flex flex-col items-center justify-center
                  rounded-xl py-6 transition duration-300 cursor-pointer
                  ${stat.color}
                  ${highlight === idx ? "scale-110 text-purple-500 ring-4 ring-purple-300 shadow-2xl z-10" : "hover:scale-105 hover:text-purple-500"}
                `}
                onMouseEnter={() => setHighlight(idx)}
                onMouseLeave={() => setHighlight(-1)}
              >
                <div className="mb-2">{stat.icon}</div>
                <div className="font-bold text-2xl">{stat.value}</div>
                <div className="text-black text-sm opacity-90 text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>


    {/* section4 5 */}
    <section className="bg-background w-full py-10 px-2 flex flex-col items-center -mt-24">
      <h2 className="text-purpletext font-bold text-2xl sm:text-3xl text-center mb-1">
        Our Core Values
      </h2>
      <p className="text-gray-500 text-center mb-8">
        The principles that guide our innovation and relationships
      </p>
      {/* Values Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mb-14 w-full max-w-5xl">
        {values.map((v, idx) => (
          <div
            key={v.title}
            className={`
              bg-white rounded-lg px-7 py-8 shadow-md flex flex-col items-center
              ${v.border}
              transition-all duration-300 cursor-pointer text-center
              ${hovered === idx
                ? "scale-105 shadow-2xl text-purple-500 border-t-4 border-purpletext ring-2 ring-cyan-400/30"
                : "hover:scale-105 hover:text-purple-500 hover:border-purpletext"
              }
            `}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(-1)}
          >
            <div className="mb-4">{v.icon}</div>
            <div className="font-bold text-lg mb-1">{v.title}</div>
            <div className="text-gray-300 text-sm">{v.desc}</div>
          </div>
        ))}
      </div>
      {/* CTA */}
      <h3 className="text-white text-2xl font-bold text-center mb-1">
        Ready to Transform Your Enterprise?
      </h3>
      <p className="text-gray-200 text-base text-center mb-5">
        Join the AI revolution with Cogniwide's intelligent automation platform. Let's build the future together.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          className="px-7 py-2 rounded-md border-2 border-cyan-400 text-cyan-400 font-semibold transition duration-300 bg-background hover:text-purple-500 hover:border-purpletext hover:scale-105 shadow"
        >
          Get Started Today
        </button>
        <button
          className="px-7 py-2 rounded-md border-2 border-gray-400 text-gray-200 font-semibold transition duration-300 bg-background hover:text-purple-500 hover:border-purpletext hover:scale-105 shadow"
        >
          Contact Our Team
        </button>
      </div>
    </section>
    </>
  );
}

