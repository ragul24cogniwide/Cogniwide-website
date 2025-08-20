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
  

const CogniAssist=()=> {
  // Highlight bubbles on hover (demo only)
  const [highlighted, setHighlighted] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [cardHighlight, setCardHighlight] = useState(null);
  const [rightHighlight, setRightHighlight] = useState(false);


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

<section className="w-full py-16 bg-background -mt-36 lg:-mt-56">
<div className="max-w-7xl mx-auto px-4">
  <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3 bg-clip-text text-transparent animate-fade-in"  
                style={{
                  backgroundImage: "linear-gradient(var(--color-purpletext), var(--color-purpletext))"
                }}>
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
</>
  );
}
export default CogniAssist;