    import React, { useState } from "react";

export default function HeroSection() {
  const [hoverIdx, setHoverIdx] = useState(-1);
  const [hovered, setHovered] = useState(-1);
    const [chipHover, setChipHover] = useState(-1);
  const [btnHover, setBtnHover] = useState(false);


  const services = [
  {
    title: "AI-Powered Custom Application Development",
    description:
      "AI-assisted coding, debugging, and CI/CD automation accelerate development, detect defects earlier, and ensure seamless, high-performance deployments.",
    border: "border-l-4 border-purpletext",
  },
  {
    title: "Architecture, Stack & Infra Overhaul",
    description:
      "For CTOs who won’t bolt AI onto broken systems — Cogniwide's Software Consulting rebuilds from first principles: clean architecture, modern stacks, infra built to scale and adapt.",
    border: "border-l-4 border-purpletext",
  },
  {
    title: "AI-Assisted Enterprise Software Development",
    description:
      "AI-powered automation, predictive performance tuning, and proactive security ensure scalable, high-performance enterprise applications.",
    border: "border-l-4 border-purpletext",
  },
  {
    title: "AI-Powered MVP Development",
    description:
      "AI-driven prototyping, automated testing, and continuous analytics accelerate validation, refine product-market fit, and minimize go-to-market risk.",
    border: "border-l-4 border-purpletext",
  },
  {
    title: "AI-Driven UI/UX Design",
    description:
      "AI-powered behavioral analytics, automated testing, and predictive insights create intuitive, high-retention user experiences—optimized in real-time.",
    border: "border-l-4 border-purpletext",
  },
  {
    title: "API & Integrations",
    description:
      "AI-enhanced API design, automated scaling, and intelligent security fortify seamless integrations and future-proofed ecosystems.",
    border: "border-l-4 border-purpletext",
  },
];

function FadeInBox({ children, border }) {
  return (
    <div
      tabIndex={0}
      className={`bg-white rounded-xl shadow-md px-6 py-6 min-h-[170px] flex flex-col justify-start
        ${border} transition-all duration-300
        hover:text-purple focus:text-purple
        hover:shadow-lg focus:shadow-lg
        animate-fadeIn
        outline-none
      `}
    >
      {children}
    </div>
  );
}

const steps = [
  {
    title: "Planning & Ideation",
    desc: "AI assists in initial project scoping, resource allocation, and timeline estimation.",
    accent: "border-cyan-400",
  },
  {
    title: "Requirements & Analysis",
    desc: "AI-powered tools gather and analyze requirements, identifying gaps and inconsistencies.",
    accent: "border-purpletext",
  },
  {
    title: "Design & Prototyping",
    desc: "AI suggests architectural patterns, component designs, and generates interactive prototypes.",
    accent: "border-blue-400",
  },
  {
    title: "Development & Coding",
    desc: "AI-assisted code generation, intelligent refactoring, and real-time debugging for efficiency.",
    accent: "border-teal-400",
  },
  {
    title: "Testing & Quality Assurance",
    desc: "AI generates test cases, predicts defects, and automates comprehensive quality assurance.",
    accent: "border-pink-400",
  },
  {
    title: "Deployment, Ops & Maintenance",
    desc: "AI optimizes deployment, monitors performance, predicts issues, and automates maintenance tasks.",
    accent: "border-orange-400",
  },
];

const benefits = [
  {
    title: "Faster Time-to-Market",
    description:
      "Automate repetitive tasks, accelerate coding, and streamline testing to deliver products faster.",
    border: "border-l-4 border-purpletext",
  },
  {
    title: "Improved Code Quality",
    description:
      "AI identifies and corrects errors, suggests best practices, and ensures consistent code standards.",
    border: "border-l-4 border-purpletext",
  },
  {
    title: "Reduced Development Costs",
    description:
      "Minimize manual effort, reduce rework, and optimize resource allocation for cost savings.",
    border: "border-l-4 border-purpletext",
  },
  {
    title: "Enhanced Developer Productivity",
    description:
      "Empower your developers with intelligent tools that automate mundane tasks, allowing them to focus on innovation.",
    border: "border-l-4 border-purpletext",
  },
];

// Card box with border and animation
function BenefitBox({ children, border }) {
  return (
    <div
      tabIndex={0}
      className={`bg-white rounded-xl shadow-md px-6 py-6 min-h-[150px] flex flex-col justify-start
        ${border} transition-all duration-300
        hover:text-purple focus:text-purple
        hover:shadow-lg focus:shadow-lg
        animate-fadeIn
        outline-none
      `}
    >
      {children}
    </div>
  );
}

const cards = [
  {
    title: "Intelligent Planning",
    desc: "AI assists in requirements analysis, effort estimation, and project planning, ensuring realistic roadmaps.",
    accent: "border-l-4 border-cyan-400",
  },
  {
    title: "Automated Design & Code",
    desc: "Leverage AI for architectural design suggestions, code generation, and refactoring, boosting initial development.",
    accent: "border-l-4 border-purpletext",
  },
  {
    title: "Smart Testing & QA",
    desc: "AI-driven test case generation, defect prediction, and automated testing ensure high-quality software.",
    accent: "border-l-4 border-blue-400",
  },
  {
    title: "Intelligent Deployment & Ops",
    desc: "AI optimizes deployment pipelines, monitors application performance, and predicts operational issues.",
    accent: "border-l-4 border-pink-400",
  },
];

const technologies = [
  { name: "Machine Learning", color: "bg-cyan-100 text-cyan-700" },
  { name: "Deep Learning", color: "bg-blue-100 text-blue-700" },
  { name: "NLP", color: "bg-purpletext text-white" },
  { name: "Computer Vision", color: "bg-pink-100 text-pink-700" },
  { name: "Generative AI", color: "bg-orange-100 text-orange-700" },
  { name: "DevOps & MLOps", color: "bg-green-100 text-green-700" },
];

// Replace with your actual image URI
const caseImage =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fit=crop&w=600&q=80";


  return (
    <>
    <section className="bg-background min-h-screen flex flex-col justify-center items-center px-3 py-10">
      {/* Heading */}
      <h1 className="text-center font-bold leading-tight text-3xl xs:text-4xl md:text-5xl mb-6">
        Accelerate Innovation with{" "}
        <br/>
        <span className={`bg-purpletext bg-clip-text text-transparent animate-pulse`}>
          AI Powered Software Development
        </span>
      </h1>
      {/* Subheading */}
      <p className="text-gray-500 text-center text-base md:text-lg mb-9 max-w-2xl mx-auto">
        Leverage the power of Artificial Intelligence to revolutionize your software development lifecycle, from ideation to deployment and maintenance.
      </p>
      {/* Buttons */}
      <div className="flex flex-col xs:flex-row gap-4 justify-center items-center mb-8">
        <button
          className={`bg-transparent px-7 py-2 rounded-md border-2 border-purpletext shadow-md 
            transition duration-300 font-semibold text-gray-900
            ${hoverIdx === 0 ? "text-purple-500 scale-105 ring-2 ring-purpletext" : "hover:text-purple-500 hover:scale-105"} `}
          onMouseEnter={() => setHoverIdx(0)}
          onMouseLeave={() => setHoverIdx(-1)}
        >
          Discuss Your Project
        </button>
        <button
          className={`bg-transparent px-7 py-2 rounded-md border-2 border-gray-400 shadow-md 
            transition duration-300 font-semibold text-gray-900
            ${hoverIdx === 1 ? "text-purple-500 scale-105 ring-2 ring-purpletext" : "hover:text-purple-500 hover:scale-105"} `}
          onMouseEnter={() => setHoverIdx(1)}
          onMouseLeave={() => setHoverIdx(-1)}
        >
          What We Do
        </button>
      </div>
      {/* Bottom Text */}
      <p className="text-gray-500 text-center text-base md:text-lg max-w-3xl mx-auto">
        With AI embedded at every stage of the SDLC, our top 1% engineering talent is equipped to deliver 10X better software development processes and outcomes.
      </p>
    </section>

    {/* section2 */}
<section className="bg-background py-8 px-4 flex flex-col items-center transition-all md:-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 transition-all text-center">
        What <span className="text-purpletext">We Do</span>
      </h2>
      <p className="text-gray-500 mb-8 text-center max-w-xl">
        Our comprehensive AI-powered software development services.
      </p>
      <div className="w-full max-w-6xl grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {services.map((service, i) => (
          <FadeInBox key={i} border={service.border}>
            <h3 className="text-purpletext font-bold text-lg mb-2">{service.title}</h3>
            <p className="text-gray-700 text-sm">{service.description}</p>
          </FadeInBox>
        ))}
      </div>
    </section>

    {/* section3 */}
    <section className="bg-background min-h-screen flex flex-col items-center py-12 px-3">
      <h2 className="text-white font-bold text-2xl sm:text-3xl text-center mb-2">
        The <span className="text-purpletext">AI SDLC Lifecycle</span>
      </h2>
      <p className="text-gray-500 text-center mb-10 text-base max-w-xl mx-auto">
        A comprehensive approach to building and deploying intelligent systems.
      </p>

      <div className="flex flex-col items-center w-full">
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className={`
              w-full max-w-sm sm:max-w-md md:max-w-lg 
              ${idx > 0 ? "mt-[-8px] sm:mt-[-8px] md:mt-[-6px]" : ""}
              rounded-lg shadow-lg
              bg-white
              border-2 ${step.accent}
              transition-all duration-300
              cursor-pointer
              ${hovered === idx ? "scale-105 shadow-2xl text-purple-500 border-purpletext" : "hover:scale-105 hover:shadow-xl text-purpletext"}
              px-5 py-4
              flex flex-col items-center
              z-${10 - idx}
            `}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(-1)}
            style={{
              marginBottom: -18,
              zIndex: 10 - idx,
            }}
          >
            <div
              className={`font-bold text-base mb-1 ${hovered === idx ? "bg-purpletext bg-clip-text text-transparent" : "text-purpletext"}`}
            >
              {step.title}
            </div>
            <div className="text-gray-700 text-center text-xs">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>

    {/* section4 */}
         <section className="bg-background py-8 px-4 flex flex-col items-center transition-all md:-mt-24 ">
      <h2 className="text-2xl md:text-4xl font-bold text-purpletext mb-2 text-center transition-all">
        Key Benefits of <span className="text-purpletext">AI-Powered Development</span>
      </h2>
      <p className="text-gray-500 mb-8 text-center max-w-2xl">
        Transform your development process with measurable improvements in speed, quality, and cost-effectiveness.
      </p>
      <div className="w-full max-w-6xl grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b, i) => (
          <BenefitBox key={i} border={b.border}>
            <h3 className="text-purpletext font-bold text-base md:text-lg mb-2">{b.title}</h3>
            <p className="text-gray-500 text-sm">{b.description}</p>
          </BenefitBox>
        ))}
      </div>
    </section>

    {/* section5 */}
    <section className="bg-background py-12 px-2 flex flex-col items-center">
      <h2 className="text-gray-900 font-bold text-2xl sm:text-3xl text-center mb-2">
        Our <span className="text-purpletext">AI-Powered Development Approach</span>
      </h2>
      <p className="text-gray-500 text-base text-center mb-8 max-w-2xl">
        We integrate AI at every stage of the software development lifecycle to deliver superior results.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-6xl">
        {cards.map((card, idx) => (
          <div
            key={card.title}
            className={`
              bg-white 
              rounded-xl 
              px-6 py-5 
              flex-1 min-w-[220px] max-w-sm
              ${card.accent}
              transition-all duration-300
              shadow-md
              cursor-pointer
              ${hovered === idx ? "scale-105 shadow-xl border-purpletext text-purple-500" : "hover:scale-105 hover:shadow-xl hover:text-purple-500"}
              relative
            `}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(-1)}
          >
            <h3 className="font-bold text-lg mb-2">{card.title}</h3>
            <p className="text-gray-700 text-base">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>


    {/* section6 */}
    <section className="bg-background py-12 px-3 flex flex-col items-center">
      {/* Key Technologies */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-white">
        Key <span className="text-purpletext">Technologies We Leverage</span>
      </h2>
      <p className="text-gray-500 text-center text-base mb-7 max-w-xl">
        Our expertise spans a wide range of cutting-edge AI and development technologies.
      </p>
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {technologies.map((tech, idx) => (
          <span
            key={tech.name}
            className={`px-5 py-2 rounded-full font-semibold text-sm shadow 
            transition-all duration-300 cursor-pointer
            ${tech.color}
            ${chipHover === idx ? "scale-105 text-purple-500 border border-purpletext shadow-md" : "hover:scale-105 hover:text-purple-500"}
            `}
            onMouseEnter={() => setChipHover(idx)}
            onMouseLeave={() => setChipHover(-1)}
          >
            {tech.name}
          </span>
        ))}
      </div>

      {/* Case Study */}
      <h3 className="text-xl sm:text-2xl font-bold text-center mb-2 text-gray-900">
        Success Story: <span className="text-purpletext">AI-Driven Code Optimization</span>
      </h3>
      <p className="text-gray-500 text-center text-base mb-9 max-w-2xl">
        See how we helped a leading tech company achieve significant improvements.
      </p>
      <div className="w-600px flex flex-col md:flex-row gap-8 justify-center items-center md:items-start mb-14 w-full max-w-3xl bg-white p-12 rounded-2xl">
        {/* Case content */}
        <div className="bg-white rounded-xl shadow-md px-6 py-5 flex-1 min-w-[220px] transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
          <div className="font-bold mb-2 text-black">Client: Global Tech Innovators</div>
          <div className="mb-2">
            <span className="font-semibold text-black">Challenge:</span>
            <span className="ml-2 text-gray-700">
              Manual code reviews were time-consuming and inconsistent. Debugging complex issues consumed significant developer hours, leading to project delays.
            </span>
          </div>
          <div className="mb-3">
            <span className="font-semibold text-black">Solution:</span>
            <span className="ml-2 text-gray-700">
              Implemented Cogniwide’s AI-powered code analysis and optimization platform. This solution automated code reviews, identified performance bottlenecks, and suggested refactoring improvements.
            </span>
          </div>
          <div className="flex gap-12 mt-5">
            <div>
              <div className="text-cyan-500 font-bold text-lg">30%</div>
              <div className="text-gray-700 text-sm">Faster Development Cycles</div>
            </div>
            <div>
              <div className="text-cyan-500 font-bold text-lg">45%</div>
              <div className="text-gray-700 text-sm">Reduction in Critical Bugs</div>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="flex items-center justify-center mt-24 flex-1 min-w-[220px]">
          <img
            src={caseImage}
            alt="Case Study"
            className="rounded-lg shadow-lg w-full h-48 object-cover transition-all duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* CTA */}
      <h4 className="text-white text-lg text-center font-bold mb-2">
        Ready to <span className="text-purpletext">Revolutionize Your Development</span>?
      </h4>
      <p className="text-gray-500 text-center text-base mb-5 max-w-2xl">
        Partner with Cogniwide to integrate AI into your software development and achieve unparalleled efficiency and quality.
      </p>
      <button
        className={`px-8 py-2 rounded-lg border-2 font-semibold
        transition duration-300
        ${btnHover ? "border-purpletext text-purple-500 bg-white scale-105 shadow-lg" : "border-purpletext text-purpletext bg-background hover:scale-105 hover:text-purple-500 hover:border-purpletext hover:bg-white"}
        `}
        onMouseEnter={() => setBtnHover(true)}
        onMouseLeave={() => setBtnHover(false)}
      >
        Start Your AI Transformation
      </button>
    </section>
</>
  );
}
