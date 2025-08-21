import React, { useRef, useEffect, useState } from "react";
import { useRef as useScrollRef } from "react"; // Add this import for scroll refs
import telecomImg from "../assets/telecom.png";
import bfsiImg from "../assets/bfsi.png";
import insuranceImg from "../assets/insurance.png";
import workforceImg from "../assets/workforce.png";

const industries = [
  {
    icon: (
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center"
        style={{
          background: "#7f00d4",
          boxShadow: "0 4px 24px 0 #7f00d440",
          transition: "transform 0.4s",
        }}
      >
        <span
          className="text-5xl text-white transition-transform duration-500"
          role="img"
          aria-label="Telecom"
        >
          📞
        </span>
      </div>
    ),
    label: "Telecom",
  },
  {
    icon: (
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center"
        style={{
          background: "#7f00d4",
          boxShadow: "0 4px 24px 0 #7f00d440",
          transition: "transform 0.4s",
        }}
      >
        <span
          className="text-5xl text-white transition-transform duration-500"
          role="img"
          aria-label="BFSI"
        >
          💳
        </span>
      </div>
    ),
    label: "BFSI",
  },
  {
    icon: (
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center"
        style={{
          background: "#7f00d4",
          boxShadow: "0 4px 24px 0 #7f00d440",
          transition: "transform 0.4s",
        }}
      >
        <span
          className="text-5xl text-white transition-transform duration-500"
          role="img"
          aria-label="Insurance"
        >
          🏦
        </span>
      </div>
    ),
    label: "Insurance",
  },
  {
    icon: (
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center"
        style={{
          background: "#7f00d4",
          boxShadow: "0 4px 24px 0 #7f00d440",
          transition: "transform 0.4s",
        }}
      >
        <span
          className="text-5xl text-white transition-transform duration-500"
          role="img"
          aria-label="Workforce"
        >
          👥
        </span>
      </div>
    ),
    label: "Workforce",
  },
];

const Industries = () => {
  // Animation on scroll/refresh
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) setVisible(true);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center min-h-[70vh] py-10"
      style={{ background: "#faf4fa" }}
    >
      {/* Reduced margin-top for heading */}
      <div className="mt-10 w-full flex flex-col items-center">
        <h1
          className={`text-6xl font-extrabold text-gray-900 text-center mb-6 transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          Industry-Specific{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #7f00d4 40%, #00eaff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AI Solutions
          </span>
        </h1>
        <p
          className={`text-2xl text-gray-900 text-center max-w-3xl mb-14 transition-all duration-700 delay-200 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          Tailored AI automation solutions designed for the unique challenges,
          regulatory requirements, and operational needs of your industry vertical.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-12 mb-16">
        {industries.map((item) => (
          <div
            key={item.label}
            className="w-36 h-36 rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-[#ede7f6] group transition-transform duration-500 hover:scale-105"
            style={{
              background: "#ede7f6", // outer circle is now #ede7f6
              boxShadow: "0 0 32px 0 rgba(127,0,212,0.08)",
            }}
          >
            <div className="w-full h-1/2 flex items-center justify-center rounded-t-full transition-transform duration-500 group-hover:scale-110">
              {item.icon}
            </div>
            <div className="flex-1 flex items-center justify-center">
              <span className="text-black text-lg font-bold">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-6">
        <button
          className="px-7 py-3 rounded-lg text-lg font-medium bg-black text-white border-2 border-cyan-400 shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:bg-black hover:text-white hover:shadow-[0_0_24px_0_#00eaff]"
          style={{
            boxShadow: "0 0 24px 0 #00eaff80",
          }}
        >
          Get Started Today
        </button>
        <button
          className="px-7 py-3 rounded-lg text-lg font-medium bg-black text-white border-2 border-gray-400 shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 hover:bg-gray-900 hover:text-white hover:shadow-[0_0_16px_0_#b3b3b3]"
        >
          Explore Solutions
        </button>
      </div>
    </section>
  );
};

const TelecomSection = ({ style }) => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const [imgHover, setImgHover] = useState(false);
  const [cardHover, setCardHover] = useState([false, false, false]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) setVisible(true);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCardHover = (idx, val) => {
    setCardHover((prev) => {
      const arr = [...prev];
      arr[idx] = val;
      return arr;
    });
  };

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center min-h-[55vh] pt-10 pb-8 px-2"
      style={{
        background: "#faf4fa",
        scrollMarginTop: "120px",
        ...style,
      }}
    >
      <div className="max-w-5xl w-full mx-auto">
        {/* Curvy rectangle highlight START */}
        <div
          style={{
            background: "#ede7f6",
            borderRadius: "32px",
            boxShadow: "0 2px 16px 0 #ede7f680",
            padding: "32px 32px 32px 32px",
            marginBottom: "32px",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Left: Text */}
            <div className="flex-1">
              <div
                className={`flex items-center gap-2 mb-1 transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <span className="text-2xl rounded-lg px-2 py-1" style={{ background: "#7f00d4", color: "#fff" }}>
                  📞
                </span>
                <h2
                  className="text-2xl md:text-3xl font-extrabold"
                  style={{ color: "#1a202c" }}
                >
                  Telecom Solutions
                </h2>
              </div>
              <p
                className={`text-base mb-3 transition-all duration-700 delay-100 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ color: "#1a202c" }}
              >
                Transform network operations and customer experiences with
                AI-powered automation designed for telecommunications infrastructure
                and service delivery.
              </p>
              <div
                className={`transition-all duration-700 delay-200 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <div
                  className="font-bold mb-1"
                  style={{ color: "#7f00d4", fontSize: "1rem" }}
                >
                  Key Challenges We Address:
                </div>
                <ul className="list-disc pl-5 space-y-0.5 text-sm" style={{ color: "#1a202c" }}>
                  <li>Network optimization and predictive maintenance</li>
                  <li>Customer service automation and support</li>
                  <li>Fraud detection and security monitoring</li>
                  <li>Revenue assurance and billing optimization</li>
                </ul>
              </div>
            </div>
            {/* Right: Image & KPIs */}
            <div className="flex-1 flex flex-col items-center">
              <div
                className={`rounded-lg overflow-hidden mb-2 w-full max-w-xs transition-all duration-700 delay-300
    ${visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"}`}
                onMouseEnter={() => setImgHover(true)}
                onMouseLeave={() => setImgHover(false)}
                style={{
                  filter: imgHover
                    ? "grayscale(0%) brightness(1.1) drop-shadow(0 0 12px #7f00d4)"
                    : "grayscale(40%) brightness(0.95)",
                  transition: "filter 0.4s",
                  cursor: "pointer",
                }}
              >
                <img
                  src={telecomImg}
                  alt="Telecom"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="flex w-full max-w-xs">
                <div className="flex-1 text-center py-2 bg-[#0e1a14] rounded-bl-lg text-[#00b96b]">
                  <div className="text-base font-bold">45%</div>
                  <div className="text-xs text-white">
                    Network Downtime Reduction
                  </div>
                </div>
                <div className="flex-1 text-center py-2 bg-[#0e1a14] rounded-br-lg text-[#00b96b]">
                  <div className="text-base font-bold">78%</div>
                  <div className="text-xs text-white">
                    Customer Query Resolution
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Cards */}
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            {[
              {
                title: "Network Intelligence",
                desc: "AI-powered network monitoring and predictive maintenance to prevent outages and optimize performance.",
                points: [
                  "Predictive Maintenance",
                  "Real-time Monitoring",
                  "Automated Optimization",
                ],
              },
              {
                title: "Customer Experience AI",
                desc: "Intelligent customer service automation with personalized support and proactive issue resolution.",
                points: [
                  "Chatbot Integration",
                  "Sentiment Analysis",
                  "Proactive Support",
                ],
              },
              {
                title: "Revenue Optimization",
                desc: "AI-driven billing accuracy, fraud detection, and revenue assurance for maximum profitability.",
                points: [
                  "Fraud Detection",
                  "Billing Accuracy",
                  "Revenue Assurance",
                ],
              },
            ].map((card, idx) => (
              <div
                key={card.title}
                className={`flex-1 bg-white rounded-[22px] p-5 relative transition-all duration-500 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                onMouseEnter={() => handleCardHover(idx, true)}
                onMouseLeave={() => handleCardHover(idx, false)}
                style={{
                  border: cardHover[idx] ? "1.5px solid #7f00d4" : "1.5px solid transparent",
                  background: cardHover[idx]
                    ? "linear-gradient(120deg, #faf4fa 80%, #ede7f6 100%)"
                    : "#fff",
                  boxShadow: cardHover[idx]
                    ? "0 0 12px 0 #7f00d4aa"
                    : "0 1px 4px 0 #e5e7eb33",
                  transition:
                    "background 0.4s, box-shadow 0.4s, border 0.4s, transform 0.4s",
                  cursor: "pointer",
                  zIndex: 1,
                }}
              >
                <span
                  className="pointer-events-none absolute inset-0 rounded-[22px] transition-all duration-500"
                  style={{
                    border: cardHover[idx]
                      ? "2px solid #7f00d4"
                      : "2px solid transparent",
                    boxShadow: cardHover[idx]
                      ? "0 0 0 2px #ede7f6, 0 0 8px 1px #7f00d4aa"
                      : "none",
                    opacity: cardHover[idx] ? 1 : 0,
                    transition:
                      "border 0.4s, box-shadow 0.4s, opacity 0.4s",
                  }}
                ></span>
                <div
                  className="font-bold text-base mb-1 relative z-10"
                  style={{ color: "#1a202c" }}
                >
                  {card.title}
                </div>
                <div className="text-gray-900 mb-1 text-sm relative z-10">{card.desc}</div>
                <ul className="list-disc pl-5 text-[#7f00d4] text-sm relative z-10">
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Curvy rectangle highlight END */}
      </div>
    </section>
  );
};

const BfsiSection = ({ style }) => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const [imgHover, setImgHover] = useState(false);
  const [cardHover, setCardHover] = useState([false, false, false]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) setVisible(true);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCardHover = (idx, val) => {
    setCardHover((prev) => {
      const arr = [...prev];
      arr[idx] = val;
      return arr;
    });
  };

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center min-h-[55vh] pt-10 pb-8 px-2"
      style={{
        background: "#faf4fa",
        scrollMarginTop: "120px",
        ...style,
      }}
    >
      <div className="max-w-5xl w-full mx-auto">
        <div
          style={{
            background: "#ede7f6",
            borderRadius: "32px",
            boxShadow: "0 2px 16px 0 #ede7f680",
            padding: "32px 32px 32px 32px",
            marginBottom: "32px",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Left: Text */}
            <div className="flex-1">
              <div
                className={`flex items-center gap-2 mb-1 transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <span className="text-2xl rounded-lg px-2 py-1" style={{ background: "#7f00d4", color: "#fff" }}>
                  💳
                </span>
                <h2
                  className="text-2xl md:text-3xl font-extrabold"
                  style={{ color: "#1a202c" }}
                >
                  BFSI Solutions
                </h2>
              </div>
              <p
                className={`text-base mb-3 transition-all duration-700 delay-100 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ color: "#1a202c" }}
              >
                Secure, compliant AI solutions for banking, financial services, and insurance that enhance customer experiences while maintaining regulatory compliance.
              </p>
              <div
                className={`transition-all duration-700 delay-200 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <div
                  className="font-bold mb-1"
                  style={{ color: "#7f00d4", fontSize: "1rem" }}
                >
                  Key Challenges We Address:
                </div>
                <ul className="list-disc pl-5 space-y-0.5 text-sm" style={{ color: "#1a202c" }}>
                  <li>Fraud detection and prevention</li>
                  <li>Regulatory compliance automation</li>
                  <li>Customer onboarding and KYC</li>
                  <li>Risk assessment and management</li>
                </ul>
              </div>
            </div>
            {/* Right: Image & KPIs */}
            <div className="flex-1 flex flex-col items-center">
              <div
                className={`rounded-lg overflow-hidden mb-2 w-full max-w-xs transition-all duration-700 delay-300
    ${visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"}`}
                onMouseEnter={() => setImgHover(true)}
                onMouseLeave={() => setImgHover(false)}
                style={{
                  filter: imgHover
                    ? "grayscale(0%) brightness(1.1) drop-shadow(0 0 12px #00b96b)"
                    : "grayscale(40%) brightness(0.95)",
                  transition: "filter 0.4s",
                  cursor: "pointer",
                }}
              >
                <img
                  src={bfsiImg}
                  alt="BFSI"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="flex w-full max-w-xs">
                <div className="flex-1 text-center py-2 bg-[#0e1a14] rounded-bl-lg text-[#00b96b]">
                  <div className="text-base font-bold">92%</div>
                  <div className="text-xs text-white">
                    Fraud Detection Rate
                  </div>
                </div>
                <div className="flex-1 text-center py-2 bg-[#0e1a14] rounded-br-lg text-[#00b96b]">
                  <div className="text-base font-bold">65%</div>
                  <div className="text-xs text-white">
                    Faster KYC Processing
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Cards */}
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            {[
              {
                title: "Fraud Prevention AI",
                desc: "Advanced machine learning algorithms for real-time fraud detection and prevention across all channels.",
                points: [
                  "Real-time Monitoring",
                  "Behavioral Analysis",
                  "Risk Scoring",
                ],
              },
              {
                title: "Compliance Automation",
                desc: "Automated regulatory reporting and compliance monitoring to ensure adherence to financial regulations.",
                points: [
                  "Regulatory Reporting",
                  "AML Monitoring",
                  "Audit Trails",
                ],
              },
              {
                title: "Digital Onboarding",
                desc: "Streamlined customer onboarding with automated KYC, document verification, and risk assessment.",
                points: [
                  "Document OCR",
                  "Identity Verification",
                  "Risk Profiling",
                ],
              },
            ].map((card, idx) => (
              <div
                key={card.title}
                className={`flex-1 bg-white rounded-[22px] p-5 relative transition-all duration-500 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                onMouseEnter={() => handleCardHover(idx, true)}
                onMouseLeave={() => handleCardHover(idx, false)}
                style={{
                  border: cardHover[idx] ? "1.5px solid #7f00d4" : "1.5px solid transparent",
                  background: cardHover[idx]
                    ? "linear-gradient(120deg, #faf4fa 80%, #ede7f6 100%)"
                    : "#fff",
                  boxShadow: cardHover[idx]
                    ? "0 0 12px 0 #7f00d4aa"
                    : "0 1px 4px 0 #e5e7eb33",
                  transition:
                    "background 0.4s, box-shadow 0.4s, border 0.4s, transform 0.4s",
                  cursor: "pointer",
                  zIndex: 1,
                }}
              >
                <span
                  className="pointer-events-none absolute inset-0 rounded-[22px] transition-all duration-500"
                  style={{
                    border: cardHover[idx]
                      ? "2px solid #7f00d4"
                      : "2px solid transparent",
                    boxShadow: cardHover[idx]
                      ? "0 0 0 2px #ede7f6, 0 0 8px 1px #7f00d4aa"
                      : "none",
                    opacity: cardHover[idx] ? 1 : 0,
                    transition:
                      "border 0.4s, box-shadow 0.4s, opacity 0.4s",
                  }}
                ></span>
                <div
                  className="font-bold text-base mb-1 relative z-10"
                  style={{ color: "#1a202c" }}
                >
                  {card.title}
                </div>
                <div className="text-gray-900 mb-1 text-sm relative z-10">{card.desc}</div>
                <ul className="list-disc pl-5 text-[#7f00d4] text-sm relative z-10">
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const InsuranceSection = ({ style }) => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const [imgHover, setImgHover] = useState(false);
  const [cardHover, setCardHover] = useState([false, false, false]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) setVisible(true);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCardHover = (idx, val) => {
    setCardHover((prev) => {
      const arr = [...prev];
      arr[idx] = val;
      return arr;
    });
  };

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center min-h-[55vh] pt-10 pb-8 px-2"
      style={{
        background: "#faf4fa",
        scrollMarginTop: "120px",
        ...style,
      }}
    >
      <div className="max-w-5xl w-full mx-auto">
        <div
          style={{
            background: "#ede7f6",
            borderRadius: "32px",
            boxShadow: "0 2px 16px 0 #ede7f680",
            padding: "32px 32px 32px 32px",
            marginBottom: "32px",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Left: Text */}
            <div className="flex-1">
              <div
                className={`flex items-center gap-2 mb-1 transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <span className="text-2xl rounded-lg px-2 py-1" style={{ background: "#7f00d4", color: "#fff" }}>
                  🏦
                </span>
                <h2
                  className="text-2xl md:text-3xl font-extrabold"
                  style={{ color: "#1a202c" }}
                >
                  Insurance Solutions
                </h2>
              </div>
              <p
                className={`text-base mb-3 transition-all duration-700 delay-100 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ color: "#1a202c" }}
              >
                Intelligent insurance automation that streamlines claims processing, enhances risk assessment, and improves customer experiences across all insurance verticals.
              </p>
              <div
                className={`transition-all duration-700 delay-200 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <div
                  className="font-bold mb-1"
                  style={{ color: "#7f00d4", fontSize: "1rem" }}
                >
                  Key Challenges We Address:
                </div>
                <ul className="list-disc pl-5 space-y-0.5 text-sm" style={{ color: "#1a202c" }}>
                  <li>Claims processing automation and fraud detection</li>
                  <li>Risk assessment and underwriting optimization</li>
                  <li>Customer service and policy management</li>
                  <li>Regulatory compliance and reporting</li>
                </ul>
              </div>
            </div>
            {/* Right: Image & KPIs */}
            <div className="flex-1 flex flex-col items-center">
              <div
                className={`rounded-lg overflow-hidden mb-2 w-full max-w-xs transition-all duration-700 delay-300
    ${visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"}`}
                onMouseEnter={() => setImgHover(true)}
                onMouseLeave={() => setImgHover(false)}
                style={{
                  filter: imgHover
                    ? "grayscale(0%) brightness(1.1) drop-shadow(0 0 12px #00b96b)"
                    : "grayscale(40%) brightness(0.95)",
                  transition: "filter 0.4s",
                  cursor: "pointer",
                }}
              >
                <img
                  src={insuranceImg}
                  alt="Insurance"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="flex w-full max-w-xs">
                <div className="flex-1 text-center py-2 bg-[#0e1a14] rounded-bl-lg text-[#00b96b]">
                  <div className="text-base font-bold">73%</div>
                  <div className="text-xs text-white">
                    Faster Claims Processing
                  </div>
                </div>
                <div className="flex-1 text-center py-2 bg-[#0e1a14] rounded-br-lg text-[#00b96b]">
                  <div className="text-base font-bold">89%</div>
                  <div className="text-xs text-white">
                    Fraud Detection Accuracy
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Cards */}
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            {[
              {
                title: "Claims Intelligence",
                desc: "AI-powered claims processing with automated damage assessment, fraud detection, and settlement optimization.",
                points: [
                  "Automated Assessment",
                  "Image Recognition",
                  "Fast Settlement",
                ],
              },
              {
                title: "Risk Analytics",
                desc: "Advanced risk modeling and underwriting automation with predictive analytics for better decision-making.",
                points: [
                  "Predictive Modeling",
                  "Automated Underwriting",
                  "Portfolio Optimization",
                ],
              },
              {
                title: "Customer Experience",
                desc: "Personalized insurance experiences with AI-driven recommendations and automated customer service.",
                points: [
                  "Personalization",
                  "Chatbot Support",
                  "Policy Management",
                ],
              },
            ].map((card, idx) => (
              <div
                key={card.title}
                className={`flex-1 bg-white rounded-[22px] p-5 relative transition-all duration-500 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                onMouseEnter={() => handleCardHover(idx, true)}
                onMouseLeave={() => handleCardHover(idx, false)}
                style={{
                  border: cardHover[idx] ? "1.5px solid #7f00d4" : "1.5px solid transparent",
                  background: cardHover[idx]
                    ? "linear-gradient(120deg, #faf4fa 80%, #ede7f6 100%)"
                    : "#fff",
                  boxShadow: cardHover[idx]
                    ? "0 0 12px 0 #7f00d4aa"
                    : "0 1px 4px 0 #e5e7eb33",
                  transition:
                    "background 0.4s, box-shadow 0.4s, border 0.4s, transform 0.4s",
                  cursor: "pointer",
                  zIndex: 1,
                }}
              >
                <span
                  className="pointer-events-none absolute inset-0 rounded-[22px] transition-all duration-500"
                  style={{
                    border: cardHover[idx]
                      ? "2px solid #7f00d4"
                      : "2px solid transparent",
                    boxShadow: cardHover[idx]
                      ? "0 0 0 2px #ede7f6, 0 0 8px 1px #7f00d4aa"
                      : "none",
                    opacity: cardHover[idx] ? 1 : 0,
                    transition:
                      "border 0.4s, box-shadow 0.4s, opacity 0.4s",
                  }}
                ></span>
                <div
                  className="font-bold text-base mb-1 relative z-10"
                  style={{ color: "#1a202c" }}
                >
                  {card.title}
                </div>
                <div className="text-gray-900 mb-1 text-sm relative z-10">{card.desc}</div>
                <ul className="list-disc pl-5 text-[#7f00d4] text-sm relative z-10">
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkforceSection = ({ style }) => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const [imgHover, setImgHover] = useState(false);
  const [cardHover, setCardHover] = useState([false, false, false]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) setVisible(true);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCardHover = (idx, val) => {
    setCardHover((prev) => {
      const arr = [...prev];
      arr[idx] = val;
      return arr;
    });
  };

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center min-h-[55vh] pt-10 pb-8 px-2"
      style={{
        background: "#faf4fa",
        scrollMarginTop: "120px",
        ...style,
      }}
    >
      <div className="max-w-5xl w-full mx-auto">
        <div
          style={{
            background: "#ede7f6",
            borderRadius: "32px",
            boxShadow: "0 2px 16px 0 #ede7f680",
            padding: "32px 32px 32px 32px",
            marginBottom: "32px",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Left: Text */}
            <div className="flex-1">
              <div
                className={`flex items-center gap-2 mb-1 transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <span className="text-2xl rounded-lg px-2 py-1" style={{ background: "#7f00d4", color: "#fff" }}>
                  👥
                </span>
                <h2
                  className="text-2xl md:text-3xl font-extrabold"
                  style={{ color: "#1a202c" }}
                >
                  Workforce Management
                </h2>
              </div>
              <p
                className={`text-base mb-3 transition-all duration-700 delay-100 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ color: "#1a202c" }}
              >
                Intelligent workforce optimization solutions that enhance employee productivity, automate scheduling, and improve operational efficiency across all business functions.
              </p>
              <div
                className={`transition-all duration-700 delay-200 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <div
                  className="font-bold mb-1"
                  style={{ color: "#7f00d4", fontSize: "1rem" }}
                >
                  Key Challenges We Address:
                </div>
                <ul className="list-disc pl-5 space-y-0.5 text-sm" style={{ color: "#1a202c" }}>
                  <li>Employee productivity optimization</li>
                  <li>Automated scheduling and resource allocation</li>
                  <li>Performance monitoring and analytics</li>
                  <li>Talent acquisition and retention</li>
                </ul>
              </div>
            </div>
            {/* Right: Image & KPIs */}
            <div className="flex-1 flex flex-col items-center">
              <div
                className={`rounded-lg overflow-hidden mb-2 w-full max-w-xs transition-all duration-700 delay-300
    ${visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"}`}
                onMouseEnter={() => setImgHover(true)}
                onMouseLeave={() => setImgHover(false)}
                style={{
                  filter: imgHover
                    ? "grayscale(0%) brightness(1.1) drop-shadow(0 0 12px #ff4d4f)"
                    : "grayscale(40%) brightness(0.95)",
                  transition: "filter 0.4s",
                  cursor: "pointer",
                }}
              >
                <img
                  src={workforceImg}
                  alt="Workforce"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="flex w-full max-w-xs">
                <div className="flex-1 text-center py-2 bg-[#0e1a14] rounded-bl-lg text-[#ff4d4f]">
                  <div className="text-base font-bold">34%</div>
                  <div className="text-xs text-white">
                    Productivity Increase
                  </div>
                </div>
                <div className="flex-1 text-center py-2 bg-[#0e1a14] rounded-br-lg text-[#ff4d4f]">
                  <div className="text-base font-bold">56%</div>
                  <div className="text-xs text-white">
                    Scheduling Efficiency
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Cards */}
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            {[
              {
                title: "Smart Scheduling",
                desc: "AI-powered scheduling optimization that considers employee preferences, skills, and business requirements.",
                points: [
                  "Automated Scheduling",
                  "Skill Matching",
                  "Preference Management",
                ],
              },
              {
                title: "Performance Analytics",
                desc: "Real-time performance monitoring with predictive insights for employee development and retention.",
                points: [
                  "Real-time Monitoring",
                  "Predictive Insights",
                  "Development Planning",
                ],
              },
              {
                title: "Talent Intelligence",
                desc: "AI-driven talent acquisition and retention strategies with automated candidate screening and matching.",
                points: [
                  "Resume Screening",
                  "Candidate Matching",
                  "Retention Prediction",
                ],
              },
            ].map((card, idx) => (
              <div
                key={card.title}
                className={`flex-1 bg-white rounded-[22px] p-5 relative transition-all duration-500 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                onMouseEnter={() => handleCardHover(idx, true)}
                onMouseLeave={() => handleCardHover(idx, false)}
                style={{
                  border: cardHover[idx] ? "1.5px solid #7f00d4" : "1.5px solid transparent",
                  background: cardHover[idx]
                    ? "linear-gradient(120deg, #faf4fa 80%, #ede7f6 100%)"
                    : "#fff",
                  boxShadow: cardHover[idx]
                    ? "0 0 12px 0 #7f00d4aa"
                    : "0 1px 4px 0 #e5e7eb33",
                  transition:
                    "background 0.4s, box-shadow 0.4s, border 0.4s, transform 0.4s",
                  cursor: "pointer",
                  zIndex: 1,
                }}
              >
                <span
                  className="pointer-events-none absolute inset-0 rounded-[22px] transition-all duration-500"
                  style={{
                    border: cardHover[idx]
                      ? "2px solid #7f00d4"
                      : "2px solid transparent",
                    boxShadow: cardHover[idx]
                      ? "0 0 0 2px #ede7f6, 0 0 8px 1px #7f00d4aa"
                      : "none",
                    opacity: cardHover[idx] ? 1 : 0,
                    transition:
                      "border 0.4s, box-shadow 0.4s, opacity 0.4s",
                  }}
                ></span>
                <div
                  className="font-bold text-base mb-1 relative z-10"
                  style={{ color: "#1a202c" }}
                >
                  {card.title}
                </div>
                <div className="text-gray-900 mb-1 text-sm relative z-10">{card.desc}</div>
                <ul className="list-disc pl-5 text-[#7f00d4] text-sm relative z-10">
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PeerSuccessSection = ({ style }) => (
  <section
    className="flex flex-col items-center justify-center min-h-[40vh] pt-10 pb-8 px-2"
    style={{
      background: "#faf4fa", // Match the light theme
      scrollMarginTop: "120px",
      ...style,
    }}
  >
    <div className="max-w-6xl w-full mx-auto">
      <h2 className="text-[#1a202c] text-2xl md:text-3xl font-bold text-center mb-8">
        Peer Success Stories
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center mb-12">
        {/* Card 1 */}
        <div className="flex-1 bg-white border border-[#7f00d4] rounded-[22px] p-6 shadow-md max-w-md mx-auto transition-all duration-300"
          style={{
            boxShadow: "0 1px 8px 0 #e5e7eb33",
          }}
        >
          <div className="flex items-center gap-3 mb-2">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Global Manufacturing Corp"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="font-bold text-[#1a202c]">Global Manufacturing Corp</div>
              <div className="text-gray-500 text-sm">15,000+ employees</div>
            </div>
          </div>
          <div className="text-gray-900 mb-4">
            "Cogniwide's workforce management solution reduced our scheduling conflicts by 78% and improved employee satisfaction scores by 45%."
          </div>
          <div className="flex gap-8">
            <div>
              <div className="text-[#7f00d4] font-bold text-lg">78%</div>
              <div className="text-gray-700 text-xs">Conflict Reduction</div>
            </div>
            <div>
              <div className="text-[#7f00d4] font-bold text-lg">45%</div>
              <div className="text-gray-700 text-xs">Satisfaction Increase</div>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="flex-1 bg-white border border-[#7f00d4] rounded-[22px] p-6 shadow-md max-w-md mx-auto transition-all duration-300"
          style={{
            boxShadow: "0 1px 8px 0 #e5e7eb33",
          }}
        >
          <div className="flex items-center gap-3 mb-2">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Retail Solutions Inc"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="font-bold text-[#1a202c]">Retail Solutions Inc</div>
              <div className="text-gray-500 text-sm">8,500+ employees</div>
            </div>
          </div>
          <div className="text-gray-900 mb-4">
            "The AI-powered talent acquisition system helped us reduce hiring time by 60% while improving candidate quality by 35%."
          </div>
          <div className="flex gap-8">
            <div>
              <div className="text-[#7f00d4] font-bold text-lg">60%</div>
              <div className="text-gray-700 text-xs">Faster Hiring</div>
            </div>
            <div>
              <div className="text-[#7f00d4] font-bold text-lg">35%</div>
              <div className="text-gray-700 text-xs">Better Quality</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CrossIndustryBenefitsSection = ({ style }) => (
  <section
    className="flex flex-col items-center justify-center min-h-[45vh] pt-10 pb-8 px-2"
    style={{
      background: "#faf4fa",
      scrollMarginTop: "120px",
      ...style,
    }}
  >
    <div className="max-w-6xl w-full mx-auto">
      <h2 className="text-[#1a202c] text-3xl md:text-4xl font-bold text-center mb-4">
        Cross-Industry Benefits
      </h2>
      <p className="text-gray-700 text-lg text-center mb-10">
        Common advantages that Cogniwide AI solutions deliver across all industry verticals
      </p>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch mb-16">
        {/* Benefit 1 */}
        <div className="flex-1 bg-white border border-[#7f00d4] rounded-[22px] p-6 min-w-[220px]">
          <div className="font-bold text-[#1a202c] text-lg mb-1">Operational Efficiency</div>
          <div className="text-gray-900 text-base">
            Average 65% improvement in process efficiency across all implementations
          </div>
        </div>
        {/* Benefit 2 */}
        <div className="flex-1 bg-white border border-[#7f00d4] rounded-[22px] p-6 min-w-[220px]">
          <div className="font-bold text-[#1a202c] text-lg mb-1">Cost Reduction</div>
          <div className="text-gray-900 text-base">
            Typical 40-60% reduction in operational costs within first year
          </div>
        </div>
        {/* Benefit 3 */}
        <div className="flex-1 bg-white border border-[#7f00d4] rounded-[22px] p-6 min-w-[220px]">
          <div className="font-bold text-[#1a202c] text-lg mb-1">Compliance Assurance</div>
          <div className="text-gray-900 text-base">
            Built-in compliance monitoring and automated reporting capabilities
          </div>
        </div>
        {/* Benefit 4 */}
        <div className="flex-1 bg-white border border-[#7f00d4] rounded-[22px] p-6 min-w-[220px]">
          <div className="font-bold text-[#1a202c] text-lg mb-1">Scalable Growth</div>
          <div className="text-gray-900 text-base">
            Solutions that grow with your business and adapt to changing requirements
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <h3 className="text-[#1a202c] text-2xl md:text-3xl font-bold text-center mb-2">
          Ready to <span style={{
            background: "linear-gradient(90deg, #7f00d4 40%, #00eaff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>Transform Your Industry?</span>
        </h3>
        <p className="text-gray-700 text-lg text-center mb-6 max-w-2xl">
          Discover how Cogniwide's industry-specific AI solutions can revolutionize your operations and drive measurable results.
        </p>
        <button
          className="px-7 py-3 rounded-lg text-lg font-medium bg-white text-[#7f00d4] border-2 border-[#7f00d4] shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#7f00d4] hover:bg-[#ede7f6] hover:text-[#7f00d4] hover:shadow-[0_0_24px_0_#7f00d4]"
          style={{
            boxShadow: "0 0 24px 0 #7f00d480",
          }}
        >
          Schedule Industry Demo
        </button>
      </div>
    </div>
  </section>
);

// Add this section to your IndustriesPage component:
const IndustriesPage = () => {
  // Create refs for each solution section
  const telecomRef = useScrollRef(null);
  const bfsiRef = useScrollRef(null);
  const insuranceRef = useScrollRef(null);
  const workforceRef = useScrollRef(null);

  // Scroll handler
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Updated industries array with click handlers
  const industries = [
    {
      icon: (
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{
            background: "#7f00d4",
            boxShadow: "0 4px 24px 0 #7f00d440",
            transition: "transform 0.4s",
          }}
        >
          <span
            className="text-5xl text-white transition-transform duration-500"
            role="img"
            aria-label="Telecom"
          >
            📞
          </span>
        </div>
      ),
      label: "Telecom",
      onClick: () => scrollToSection(telecomRef),
    },
    {
      icon: (
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{
            background: "#7f00d4",
            boxShadow: "0 4px 24px 0 #7f00d440",
            transition: "transform 0.4s",
          }}
        >
          <span
            className="text-5xl text-white transition-transform duration-500"
            role="img"
            aria-label="BFSI"
          >
            💳
          </span>
        </div>
      ),
      label: "BFSI",
      onClick: () => scrollToSection(bfsiRef),
    },
    {
      icon: (
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{
            background: "#7f00d4",
            boxShadow: "0 4px 24px 0 #7f00d440",
            transition: "transform 0.4s",
          }}
        >
          <span
            className="text-5xl text-white transition-transform duration-500"
            role="img"
            aria-label="Insurance"
          >
            🏦
          </span>
        </div>
      ),
      label: "Insurance",
      onClick: () => scrollToSection(insuranceRef),
    },
    {
      icon: (
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{
            background: "#7f00d4",
            boxShadow: "0 4px 24px 0 #7f00d440",
            transition: "transform 0.4s",
          }}
        >
          <span
            className="text-5xl text-white transition-transform duration-500"
            role="img"
            aria-label="Workforce"
          >
            👥
          </span>
        </div>
      ),
      label: "Workforce",
      onClick: () => scrollToSection(workforceRef),
    },
  ];

  // Industries selector section with clickable cards
  const IndustriesSelector = () => {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) setVisible(true);
      };
      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <section
        ref={sectionRef}
        className="flex flex-col items-center justify-center min-h-[70vh] py-10"
        style={{ background: "#faf4fa" }}
      >
        {/* ...existing heading and description code... */}
        <div className="mt-10 w-full flex flex-col items-center">
          <h1
            className={`text-6xl font-extrabold text-gray-900 text-center mb-6 transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Industry-Specific{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #7f00d4 40%, #00eaff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AI Solutions
            </span>
          </h1>
          <p
            className={`text-2xl text-gray-900 text-center max-w-3xl mb-14 transition-all duration-700 delay-200 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Tailored AI automation solutions designed for the unique challenges,
            regulatory requirements, and operational needs of your industry vertical.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 mb-16">
          {industries.map((item) => (
            <button
              key={item.label}
              onClick={item.onClick}
              className="w-36 h-36 rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-[#ede7f6] group transition-transform duration-500 hover:scale-105 focus:outline-none"
              style={{
                background: "#ede7f6",
                boxShadow: "0 0 32px 0 rgba(127,0,212,0.08)",
                cursor: "pointer",
              }}
              aria-label={`Go to ${item.label} Solution`}
            >
              <div className="w-full h-1/2 flex items-center justify-center rounded-t-full transition-transform duration-500 group-hover:scale-110">
                {item.icon}
              </div>
              <div className="flex-1 flex items-center justify-center">
                <span className="text-black text-lg font-bold">{item.label}</span>
              </div>
            </button>
          ))}
        </div>
        {/* ...existing buttons code... */}
        <div className="flex gap-6">
          <button
            className="px-7 py-3 rounded-lg text-lg font-medium bg-black text-white border-2 border-cyan-400 shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:bg-black hover:text-white hover:shadow-[0_0_24px_0_#00eaff]"
            style={{
              boxShadow: "0 0 24px 0 #00eaff80",
            }}
          >
            Get Started Today
          </button>
          <button
            className="px-7 py-3 rounded-lg text-lg font-medium bg-black text-white border-2 border-gray-400 shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 hover:bg-gray-900 hover:text-white hover:shadow-[0_0_16px_0_#b3b3b3]"
          >
            Explore Solutions
          </button>
        </div>
      </section>
    );
  };

  return (
    <>
      <IndustriesSelector />
      <div ref={telecomRef}>
        <TelecomSection style={{ marginTop: "24px" }} />
      </div>
      <div ref={bfsiRef}>
        <BfsiSection style={{ marginTop: "24px" }} />
      </div>
      <div ref={insuranceRef}>
        <InsuranceSection style={{ marginTop: "24px" }} />
      </div>
      <div ref={workforceRef}>
        <WorkforceSection style={{ marginTop: "24px" }} />
      </div>
      <PeerSuccessSection style={{ marginTop: "24px" }} />
      <CrossIndustryBenefitsSection style={{ marginTop: "24px" }} />
    </>
  );
};

export default IndustriesPage;