import React, { useRef, useEffect, useState } from "react";

const TelecomSection = () => {
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
      className="flex flex-col items-center justify-center min-h-[70vh] py-12 px-4"
      style={{ background: "#101417" }}
    >
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col md:flex-row md:items-start gap-10">
          {/* Left: Text */}
          <div className="flex-1">
            <div
              className={`flex items-center gap-3 mb-2 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <span className="text-3xl bg-blue-500 text-white rounded-lg px-3 py-1">📞</span>
              <h2
                className="text-4xl font-extrabold"
                style={{ color: "#faf4fa" }}
              >
                Telecom Solutions
              </h2>
            </div>
            <p
              className={`text-lg mb-6 transition-all duration-700 delay-100 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ color: "#d1d5db" }}
            >
              Transform network operations and customer experiences with AI-powered automation designed for telecommunications infrastructure and service delivery.
            </p>
            <div
              className={`transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="font-bold mb-2" style={{ color: "#faf4fa" }}>
                Key Challenges We Address:
              </div>
              <ul className="list-disc pl-6 space-y-1 text-base" style={{ color: "#faf4fa" }}>
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
              className={`rounded-lg overflow-hidden mb-4 w-full max-w-md transition-all duration-700 delay-300 ${
                visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
                alt="Telecom"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="flex w-full max-w-md">
              <div className="flex-1 text-center py-4 bg-[#151a1e] rounded-bl-lg text-[#7fbcff]">
                <div className="text-xl font-bold">45%</div>
                <div className="text-sm text-[#faf4fa]">Network Downtime Reduction</div>
              </div>
              <div className="flex-1 text-center py-4 bg-[#151a1e] rounded-br-lg text-[#7fbcff]">
                <div className="text-xl font-bold">78%</div>
                <div className="text-sm text-[#faf4fa]">Customer Query Resolution</div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Cards */}
        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <div
            className={`flex-1 bg-transparent border border-[#7fbcff] rounded-2xl p-6 transition-all duration-700 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="font-bold text-lg mb-2" style={{ color: "#faf4fa" }}>
              Network Intelligence
            </div>
            <div className="text-gray-300 mb-2">
              AI-powered network monitoring and predictive maintenance to prevent outages and optimize performance.
            </div>
            <ul className="list-disc pl-5 text-[#7fbcff]">
              <li>Predictive Maintenance</li>
              <li>Real-time Monitoring</li>
              <li>Automated Optimization</li>
            </ul>
          </div>
          <div
            className={`flex-1 bg-transparent border border-[#7fbcff] rounded-2xl p-6 transition-all duration-700 delay-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="font-bold text-lg mb-2" style={{ color: "#faf4fa" }}>
              Customer Experience AI
            </div>
            <div className="text-gray-300 mb-2">
              Intelligent customer service automation with personalized support and proactive issue resolution.
            </div>
            <ul className="list-disc pl-5 text-[#7fbcff]">
              <li>Chatbot Integration</li>
              <li>Sentiment Analysis</li>
              <li>Proactive Support</li>
            </ul>
          </div>
          <div
            className={`flex-1 bg-transparent border border-[#7fbcff] rounded-2xl p-6 transition-all duration-700 delay-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="font-bold text-lg mb-2" style={{ color: "#faf4fa" }}>
              Revenue Optimization
            </div>
            <div className="text-gray-300 mb-2">
              AI-driven billing accuracy, fraud detection, and revenue assurance for maximum profitability.
            </div>
            <ul className="list-disc pl-5 text-[#7fbcff]">
              <li>Fraud Detection</li>
              <li>Billing Accuracy</li>
              <li>Revenue Assurance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelecomSection;