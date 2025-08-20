import React, { useState } from "react";

// Individual chat bubble
function ChatBubble({ text, sender, align, highlighted }) {
  return (
    <div className={`flex items-center mb-2 ${align === "right" ? "justify-end" : ""}`}>
      <div className={`flex items-center`}>
        <div
          className={`font-bold px-2 mr-2 rounded-full text-xs
            ${sender === "AI" ? "bg-purple text-white" : "bg-blue-500 text-white"}
          `}
        >
          {sender}
        </div>
        <div
          className={`rounded-lg px-4 py-2 max-w-xs text-left text-base shadow
            ${sender === "AI"
              ? highlighted
                ? "bg-white text-white"
                : "bg-white text-black"
              : highlighted
                ? "bg-purple text-white"
                : "bg-purpletext text-white"}
          `}
        >
          {text}
        </div>
        {align === "right" && (
          <div
            className={`font-bold px-2 ml-2 rounded-full text-xs
              bg-blue-500 text-white
            `}
          >
            You
          </div>
        )}
      </div>
    </div>
  );
}

const iconMap = {
    lowcode: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    genai: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="4" fill="currentColor"/>
      </svg>
    ),
    multichannel: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24">
        <rect x="4" y="7" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 17v2h6v-2" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    nlp: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24">
        <rect x="6" y="3" width="12" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 7h4M9 11h6M9 15h2" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    analytics: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24">
        <rect x="3" y="10" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
        <rect x="9" y="6" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
        <rect x="15" y="3" width="4" height="15" rx="1" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    security: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24">
        <rect x="5" y="11" width="14" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 3v8" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="15" r="2" fill="currentColor"/>
      </svg>
    ),
  };
  
  const features = [
    {
      icon: "lowcode",
      title: "Low-Code Development",
      desc: "Rapidly build, deploy, and manage conversational AI agents with minimal coding, empowering business users and developers alike.",
      bullets: [
        "Intuitive drag-and-drop interface",
        "Pre-built templates & components",
        "Seamless integration with existing systems"
      ]
    },
    {
      icon: "genai",
      title: "Generative AI Power",
      desc: "Leverage the latest Generative AI models for more natural, human-like conversations, dynamic content generation, and intelligent responses.",
      bullets: [
        "Context-aware responses",
        "Dynamic content generation",
        "Automated intent recognition"
      ]
    },
    {
      icon: "multichannel",
      title: "Multi-Channel Deployment",
      desc: "Deploy your conversational AI across various channels including web, mobile, messaging apps, and voice assistants.",
      bullets: [
        "Web, mobile, & in-app support",
        "Social media & messaging platforms",
        "Voice assistant integration"
      ]
    },
    {
      icon: "nlp",
      title: "Natural Language Processing",
      desc: "Advanced NLP understands context, sentiment, and intent across 45+ languages with industry-leading accuracy.",
      bullets: [
        "Context-aware understanding",
        "Multilingual support (45+ languages)",
        "Intent recognition accuracy: 97.3%"
      ]
    },
    {
      icon: "analytics",
      title: "Analytics & Insights",
      desc: "Comprehensive conversation analytics with sentiment analysis, topic clustering, and performance metrics.",
      bullets: [
        "Sentiment & intent breakdown",
        "Topic clustering by volume",
        "Real-time dashboard metrics"
      ]
    },
    {
      icon: "security",
      title: "Enterprise Security",
      desc: "Ensure data privacy, role-based access, and compliance with enterprise-grade security controls.",
      bullets: [
        "Role-based access control (RBAC)",
        "Data encryption at rest & in transit",
        "Compliance with GDPR & ISO standards"
      ]
    }
  ];

  const CrmIcon = () => (
    <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
  const CommIcon = () => (
    <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24">
      <rect x="4" y="7" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M9 17v2h6v-2" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
  const HelpdeskIcon = () => (
    <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 8v4l2 2" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
  
  const leftCards = [
    {
      icon: <CrmIcon />,
      title: "CRM Integration",
      bullets: [
        "Salesforce, HubSpot, Microsoft Dynamics",
        "Automatic contact & lead creation",
        "Conversation history sync"
      ]
    },
    {
      icon: <CommIcon />,
      title: "Communication Platforms",
      bullets: [
        "WhatsApp, Telegram, Facebook Messenger",
        "Slack, Microsoft Teams integration",
        "Unified conversation management"
      ]
    },
    {
      icon: <HelpdeskIcon />,
      title: "Helpdesk Systems",
      bullets: [
        "Zendesk, Freshdesk, ServiceNow",
        "Automatic ticket creation",
        "Agent handoff with context"
      ]
    }
  ];
  
  const rightApiBullets = [
    "RESTful API with comprehensive documentation",
    "WebSocket support for real-time communication",
    "SDKs available for popular languages",
    "OAuth 2.0 and API key authentication support",
  "Rate limiting and throttling to ensure stability",
  "Detailed API usage analytics and monitoring",
  "Support for JSON and XML payload formats",
  "Webhook support for event-driven integrations",
  "Versioned API endpoints for backward compatibility",
  "Comprehensive error handling and retry mechanisms",
  "Sandbox environment for safe testing and development",
  "Multi-tenant architecture with role-based access control"
  ];

  // Dummy icons (use your actual SVGs if you prefer)
const LockIcon = () => (
    <svg className="w-10 h-10 text-purpletext" fill="none" viewBox="0 0 24 24">
      <rect x="6" y="10" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 6v4" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="16" r="2" fill="currentColor"/>
    </svg>
  );
  
  const SecurityIcon = () => (
    <svg className="w-10 h-10 text-purpletext" fill="none" viewBox="0 0 24 24">
      <path d="M12 3l9 4v6c0 5.25-3.8 10.2-9 11c-5.2-0.8-9-5.75-9-11V7l9-4z" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" fill="currentColor"/>
    </svg>
  );
  
  const ControlIcon = () => (
    <svg className="w-10 h-10 text-purpletext" fill="none" viewBox="0 0 24 24">
      <rect x="2" y="7" width="20" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M7 7v10M17 7v10" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
  
  const advantages = [
    {
      icon: <LockIcon />,
      title: "Data Sovereignty",
      desc: "Keep all your sensitive data within your own infrastructure, meeting strict regulatory and compliance requirements.",
    },
    {
      icon: <SecurityIcon />,
      title: "Enhanced Security",
      desc: "Leverage your existing security protocols and infrastructure to protect your conversational AI deployments.",
    },
    {
      icon: <ControlIcon />,
      title: "Customization & Control",
      desc: "Tailor the platform to your exact specifications, integrate deeply with internal systems, and manage resources directly.",
    },
  ];


  const CostIcon = () => (
    <svg className="w-10 h-10 text-purpletext" fill="none" viewBox="0 0 24 24">
      <rect x="5" y="5" width="14" height="14" rx="5" fill="currentColor" opacity="0.25"/>
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
      <line x1="12" y1="9" x2="12" y2="15" stroke="currentColor" strokeWidth="2"/>
      <line x1="9" y1="12" x2="15" y2="12" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
  
  const ExperienceIcon = () => (
    <svg className="w-10 h-10 text-purpletext" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
      <circle cx="9" cy="10" r="1.5" fill="currentColor"/>
      <circle cx="15" cy="10" r="1.5" fill="currentColor"/>
      <path d="M9 15c1 1 5 1 6-2" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
  
  const ValueIcon = () => (
    <svg className="w-10 h-10 text-purpletext" fill="none" viewBox="0 0 24 24">
      <rect x="7" y="7" width="10" height="10" rx="5" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
  
  const outcomes = [
    {
      icon: <CostIcon />,
      title: "Reduced Operational Costs",
      desc: "Automate repetitive tasks and reduce reliance on human agents for routine queries, significantly cutting operational expenses.",
      bullets: [
        "Up to 60% reduction in support costs",
        "Improved agent efficiency"
      ]
    },
    {
      icon: <ExperienceIcon />,
      title: "Enhanced Customer Experience",
      desc: "Provide instant, 24/7 support and personalized interactions, leading to higher customer satisfaction and loyalty.",
      bullets: [
        "24/7 instant support",
        "Personalized interactions"
      ]
    },
    {
      icon: <ValueIcon />,
      title: "Accelerated Time-to-Value",
      desc: "The low-code approach and pre-built components ensure rapid deployment and faster realization of business value.",
      bullets: [
        "Weeks, not months, to deploy",
        "Quick iterations and improvements"
      ]
    }
  ];


  const ChatIcon = () => (
    <svg className="w-10 h-10 text-purpletext" fill="none" viewBox="0 0 24 24">
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 13h8M8 9h5" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
  
  const ArrowUpIcon = () => (
    <svg className="w-10 h-10 text-purpletext" fill="none" viewBox="0 0 24 24">
      <rect x="5" y="5" width="14" height="14" rx="5" fill="currentColor" opacity="0.25"/>
      <path d="M12 17V7M12 7l-5 5M12 7l5 5" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
  
  const useCases = [
    {
      icon: <ChatIcon />,
      title: "Customer Service Automation",
      desc: "Handle routine inquiries, provide instant answers, and escalate complex issues seamlessly to human agents.",
      bullets: [
        "24/7 support availability",
        "Reduced call center volume"
      ]
    },
    {
      icon: <ChatIcon />,
      title: "HR & Employee Support",
      desc: "Automate HR FAQs, benefits inquiries, and internal support requests, freeing up HR teams.",
      bullets: [
        "Instant answers to HR queries",
        "Streamlined internal processes"
      ]
    },
    {
      icon: <ArrowUpIcon />,
      title: "Sales & Marketing Engagement",
      desc: "Qualify leads, provide product information, and guide prospects through the sales funnel 24/7.",
      bullets: [
        "Automated lead qualification",
        "Enhanced customer journey"
      ]
    }
  ];

  const features1 = [
    {
      label: "Generative AI Capabilities",
      cogni: <span className="text-cyan-400 text-2xl font-semibold">✓</span>,
      chatbot: <span className="text-xl text-gray-400">✗</span>,
      highcode: "Limited",
    },
    {
      label: "Low-Code Development",
      cogni: <span className="text-cyan-400 text-2xl font-semibold">✓</span>,
      chatbot: <span className="text-cyan-400 text-2xl font-semibold">✓</span>,
      highcode: <span className="text-xl text-gray-400">✗</span>,
    },
    {
      label: "On-Premise Deployment",
      cogni: <span className="text-cyan-400 text-2xl font-semibold">✓</span>,
      chatbot: "No / Limited",
      highcode: "Complex",
    },
    {
      label: "Scalability & Performance",
      cogni: <span className="text-cyan-400 font-bold">Enterprise-Grade</span>,
      chatbot: "Basic",
      highcode: <span>High <span className="text-xs text-gray-500">(Requires Expertise)</span></span>,
    },
    {
      label: "Time-to-Value",
      cogni: <span className="text-cyan-400 font-bold">Rapid</span>,
      chatbot: "Moderate",
      highcode: "Slow",
    },
  ];
  

const CogniAssist=()=> {
  // Highlight bubbles on hover (demo only)
  const [highlighted, setHighlighted] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [cardHighlight, setCardHighlight] = useState(null);
  const [rightHighlight, setRightHighlight] = useState(false);
  const [highlight, setHighlight] = useState(-1);


  return (
    <>
    <section className="w-full min-h-screen py-16 bg-background fade-in">
      <div
        className="max-w-7xl mx-auto
          flex flex-col-reverse lg:flex-row items-center
          gap-10 lg:gap-16 px-4
        "
      >
        {/* Left Content */}
        <div className="flex-1 w-full">
        <div className="inline-flex items-center space-x-2 bg-cyan-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium animate-bounce-slow mb-6">
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <span>Intelligent Workflow Orchestration</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span  className="bg-clip-text text-transparent animate-fade-in"
                style={{
                  backgroundImage: "linear-gradient(var(--color-purpletext), var(--color-purpletext))"
                }}>CogniAssist</span>
            <br />
            Intelligent Conversations,
            <br />
            Simplified.
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-xl">
            Empower your business with enterprise-grade conversational AI, built with low-code simplicity and the power of Generative AI, deployable securely on-premise.
          </p>
          <div className="flex gap-4 mb-10 flex-col sm:flex-row">
            <button
              className="px-6 py-2 font-semibold text-base rounded-md  text-purple border-2 border-purple shadow shadow-purple focus:outline-none ring-1 ring-purple transition
                hover:text-white hover:border-purple hover:shadow-purple hover:bg-purple"
              onMouseEnter={() => setHighlighted("demo")}
              onMouseLeave={() => setHighlighted(null)}
            >
              Request On-Prem Demo
            </button>
            <button
              className="px-6 py-2 font-semibold text-base rounded-md bg-gray-900 text-white border border-gray-500 transition hover:border-cyan-400 hover:text-purple"
              onMouseEnter={() => setHighlighted("usecase")}
              onMouseLeave={() => setHighlighted(null)}
            >
              Explore Use Cases
            </button>
          </div>
        </div>
        {/* Right Content (Chat preview) */}
        <div className="flex-1 w-full flex justify-center items-center">
          <div className="b rounded-2xl px-8 py-8 max-w-md w-full shadow-lg  hover:scale-105 hover:shadow-purple">
            <h3 className="text-purple font-bold text-lg mb-4">Conversational Flow Preview</h3>
            {/* Chat bubbles */}
            <div className="mb-8">
              <ChatBubble
                text="Hello! How can I assist you today?"
                sender="AI"
                align="left"
                highlighted={highlighted === "bubble1"}
              />
              <ChatBubble
                text="I need help with my account."
                sender="You"
                align="right"
                highlighted={highlighted === "bubble2"}
              />
              <ChatBubble
                text="Certainly. Are you looking to update your details, check your balance, or something else?"
                sender="AI"
                align="left"
                highlighted={highlighted === "bubble3"}
              />
            </div>
            <div className="text-xs text-gray-600 mb-2">Powered by Generative AI</div>
            <div className="text-sm text-gray-500">
              Visualize and build complex conversational flows with ease.
            </div>
          </div>
        </div>
      </div>
    </section>

<section className="w-full py-16 bg-amber-50 -mt-36 lg:-mt-56">
<div className="max-w-7xl mx-auto px-4">
  <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3 bg-clip-text animate-fade-in text-purpletext"  >   
    Unleash the Power of Conversational AI
  </h2>
  <p className="text-lg text-gray-400 text-center mb-12 max-w-2xl mx-auto">
    CogniAssist combines cutting-edge AI with an intuitive low-code platform for unparalleled flexibility and performance.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {features.map((feature, i) => (
      <div
        key={feature.title}
        className={`
          rounded-2xl shadow-lg p-8 bg-[#181a1b]
          transition-all duration-300 fade-in zoom-in
          ${hovered === i ? "border-2 border-purple/80 shadow-purple/60 text-purple" : "border border-transparent text-white"}
          hover:border-purple/80 hover:shadow-purple/60 hover:text-purple hover:scale-105
          focus:outline-none
        `}
        onMouseEnter={() => setHovered(i)}
        onMouseLeave={() => setHovered(null)}
        onFocus={() => setHovered(i)}
        onBlur={() => setHovered(null)}
        tabIndex={0}
        style={{ animationDelay: `${0.05 * i}s` }}
      >
        <div className="mb-4">{iconMap[feature.icon]}</div>
        <h3 className={`font-bold text-lg mb-2 ${hovered === i ? "text-purple" : "text-white"}`}>
          {feature.title}
        </h3>
        <p className={`text-gray-300 mb-4 ${hovered === i ? "text-purple" : ""}`}>
          {feature.desc}
        </p>
        <ul className="space-y-1">
          {feature.bullets.map((b, bi) => (
            <li
              key={bi}
              className={`pl-4 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full
               before:bg-cyan-400 text-sm ${hovered === i ? "text-purple" : "text-gray-300"}`}
            >
              {b}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>
</section>


{/* section3 */}
<section className="w-full py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3 text-purpletext">
          Seamless CRM & Platform Integration
        </h2>
        <p className="text-lg text-gray-500 text-center mb-10 max-w-2xl mx-auto">
          Connect CogniAssist with your existing technology stack for unified customer communication experiences.
        </p>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-stretch">
          {/* Left Cards, vertical stack */}
          <div className="flex flex-col gap-8 h-full">
            {leftCards.map((c, i) => (
              <div
                key={c.title}
                className={`p-7 bg-white rounded-2xl shadow-md transition-all duration-300 border
                  ${cardHighlight === i
                    ? "border-purple text-purple shadow-purple/40"
                    : "border-transparent text-black"}
                  fade-in zoom-in
                  hover:border-purple hover:text-purple hover:shadow-purple/40 hover:scale-105
                  focus:outline-none
                  flex-1
                `}
                onMouseEnter={() => setCardHighlight(i)}
                onMouseLeave={() => setCardHighlight(null)}
                onFocus={() => setCardHighlight(i)}
                onBlur={() => setCardHighlight(null)}
                tabIndex={0}
              >
                <div className="mb-3">{c.icon}</div>
                <div className={`font-bold text-lg mb-2 ${cardHighlight === i ? "text-purple" : "text-black"}`}>{c.title}</div>
                <ul className="space-y-1">
                  {c.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      className={`pl-4 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full
                        before:bg-cyan-400 text-sm ${cardHighlight === i ? "text-purple" : "text-gray-600"}`}
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Right Card, API code + bullets */}
          <div
            className={`p-7 bg-white rounded-2xl shadow-md transition-all duration-300 border
              ${rightHighlight
                ? "border-purple text-purple shadow-purple/40"
                : "border-transparent text-black"}
              fade-in zoom-in flex-1 flex flex-col justify-start
              hover:border-purple hover:text-purple hover:shadow-purple/40 hover:scale-105
              focus:outline-none
            `}
            onMouseEnter={() => setRightHighlight(true)}
            onMouseLeave={() => setRightHighlight(false)}
            onFocus={() => setRightHighlight(true)}
            onBlur={() => setRightHighlight(false)}
            tabIndex={0}
            style={{ animationDelay: "0.2s" }}
          >
            <div>
              <div className="font-bold text-lg mb-4 text-black">API Integration Example</div>
              <pre className={`bg-gray-100 rounded-lg p-4 text-xs font-mono mb-4 overflow-x-auto ${rightHighlight ? "text-purple" : "text-black"}`}>
{`// CogniAssist API Integration
POST /api/v1/conversations
Content-Type: application/json
{
    "user_id": "user123",
    "message": "Hello, I need help",
    "channel": "web",
    "context": {
        "page": "/products",
        "user_tier": "premium"
    }
}`}
              </pre>
            </div>
            <ul className="space-y-2">
              {rightApiBullets.map((b, bi) => (
                <li
                  key={bi}
                  className={`pl-4 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full
                    before:bg-cyan-400 text-sm ${rightHighlight ? "text-purple" : "text-gray-600"}`}
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* section 4 */}
    <section className="w-full py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3 text-purpletext">
          The On-Premise Advantage
        </h2>
        <p className="text-lg text-gray-500 text-center mb-10 max-w-3xl mx-auto">
          Maintain complete control, security, and compliance with CogniAssist's flexible on-premise deployment options.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((item, idx) => (
            <div
              key={item.title}
              className={`
                bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center
                transition-all duration-300 fade-in zoom-in
                border ${highlighted === idx ? "border-purple text-purple shadow-purple/40" : "border-transparent text-black"}
                hover:border-purple hover:text-purple hover:shadow-purple/40 hover:scale-105
                focus:outline-none
              `}
              onMouseEnter={() => setHighlighted(idx)}
              onMouseLeave={() => setHighlighted(null)}
              onFocus={() => setHighlighted(idx)}
              onBlur={() => setHighlighted(null)}
              tabIndex={0}
            >
              <div className="mb-4">{item.icon}</div>
              <div className={`font-bold text-lg mb-2 ${highlighted === idx ? "text-purple" : "text-black"}`}>
                {item.title}
              </div>
              <div className={`text-gray-600 ${highlighted === idx ? "text-purple" : ""}`}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* section4 */}
    <section className="w-full py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3 text-purpletext">
          Tangible Business Outcomes
        </h2>
        <p className="text-lg text-gray-500 text-center mb-10 max-w-3xl mx-auto">
          CogniAssist delivers measurable ROI by transforming customer interactions and internal processes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {outcomes.map((item, idx) => (
            <div
              key={item.title}
              className={`
                bg-white rounded-2xl shadow-lg p-8 flex flex-col
                transition-all duration-300 fade-in zoom-in
                border ${highlighted === idx ? "border-purple text-purple shadow-purple/40" : "border-transparent text-black"}
                hover:border-purple hover:text-purple hover:shadow-purple/40 hover:scale-105
                focus:outline-none
              `}
              onMouseEnter={() => setHighlighted(idx)}
              onMouseLeave={() => setHighlighted(null)}
              onFocus={() => setHighlighted(idx)}
              onBlur={() => setHighlighted(null)}
              tabIndex={0}
            >
              <div className="mb-4">{item.icon}</div>
              <div className={`font-bold text-lg mb-2 ${highlighted === idx ? "text-purple" : "text-black"}`}>
                {item.title}
              </div>
              <div className={`text-gray-600 mb-4 ${highlighted === idx ? "text-purple" : ""}`}>
                {item.desc}
              </div>
              <ul className="space-y-1">
                {item.bullets.map((b, bidx) => (
                  <li
                    key={bidx}
                    className={`pl-4 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full
                      before:bg-cyan-400 text-sm ${highlighted === idx ? "text-purple" : "text-gray-600"}`}
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* section5 */}
    <section className="w-full py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3 text-purpletext">
          Transformative Use Cases
        </h2>
        <p className="text-lg text-gray-500 text-center mb-10 max-w-3xl mx-auto">
          CogniAssist empowers diverse industries to automate interactions and streamline operations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((item, idx) => (
            <div
              key={item.title}
              className={`
                bg-white rounded-2xl shadow-lg p-8 flex flex-col
                transition-all duration-300 fade-in zoom-in
                border ${highlighted === idx ? "border-purple text-purple shadow-purple/40" : "border-transparent text-black"}
                hover:border-purple hover:text-purple hover:shadow-purple/40 hover:scale-105
                focus:outline-none
              `}
              onMouseEnter={() => setHighlighted(idx)}
              onMouseLeave={() => setHighlighted(null)}
              onFocus={() => setHighlighted(idx)}
              onBlur={() => setHighlighted(null)}
              tabIndex={0}
            >
              <div className="mb-4">{item.icon}</div>
              <div className={`font-bold text-lg mb-2 ${highlighted === idx ? "text-purple" : "text-black"}`}>
                {item.title}
              </div>
              <div className={`text-gray-600 mb-4 ${highlighted === idx ? "text-purple" : ""}`}>
                {item.desc}
              </div>
              <ul className="space-y-1">
                {item.bullets.map((b, bidx) => (
                  <li
                    key={bidx}
                    className={`pl-4 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full
                      before:bg-cyan-400 text-sm ${highlighted === idx ? "text-purple" : "text-gray-600"}`}
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* section5 */}
    <section className="w-full py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-purpletext">
          Why CogniAssist Stands Out
        </h2>
        <p className="text-lg text-gray-500 text-center mb-10 max-w-3xl">
          A true enterprise-grade solution for modern conversational AI needs.
        </p>
        {/* Comparison Table */}
        <div className="w-full flex flex-col items-center fade-in zoom-in">
          <div className="w-full max-w-4xl bg-[#181a1b] rounded-2xl shadow-md overflow-x-auto transition-all mb-12 border border-transparent px-1 py-2 animate-fade-in">
            <table className="min-w-full w-full text-left text-white rounded-2xl">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="py-3 px-4 font-medium">Feature</th>
                  <th className="py-3 px-4 font-medium text-cyan-400">CogniAssist</th>
                  <th className="py-3 px-4 font-medium">Traditional Chatbots</th>
                  <th className="py-3 px-4 font-medium">High-Code Platforms</th>
                </tr>
              </thead>
              <tbody>
                {features1.map((row, idx) => (
                  <tr key={row.label}
                    className={`
                      transition-all cursor-pointer
                      ${highlight === idx ? "border-l-4 border-purple bg-black bg-opacity-30 text-purple" : "border-l-4 border-transparent"}
                      hover:bg-black hover:bg-opacity-20 hover:border-purple hover:text-purple
                    `}
                    onMouseEnter={() => setHighlight(idx)}
                    onMouseLeave={() => setHighlight(-1)}
                    tabIndex={0}
                    onFocus={() => setHighlight(idx)}
                    onBlur={() => setHighlight(-1)}
                  >
                    <td className="py-4 px-4 font-semibold">{row.label}</td>
                    <td className="py-4 px-4">{row.cogni}</td>
                    <td className="py-4 px-4">{row.chatbot}</td>
                    <td className="py-4 px-4">{row.highcode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* CTA Section */}
        <div className="w-full max-w-3xl mx-auto text-center mt-4 fade-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
            Ready to <span className="text-purpletext">Revolutionize Your Conversations</span>?
          </h3>
          <p className="mb-8 text-lg text-gray-500">
            Experience the future of conversational AI with CogniAssist. Secure, scalable, and simple.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="px-6 py-2 font-semibold text-base rounded-md bg-transparent border-2 border-purpletext text-purpletext shadow-purpletext shadow focus:outline-none transition
            hover:shadow-purple hover:bg-purpletext hover:text-white"
            >
              Get Started with On-Prem Demo
            </button>
            <button
              className="px-6 py-2 font-semibold text-base rounded-md bg-[#23282d] text-white border border-gray-500 transition hover:border-cyan-400 hover:text-purple"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
</>
  );
}
export default CogniAssist;