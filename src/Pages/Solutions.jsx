import React, { useEffect, useState } from 'react'

const StatNumber = ({ value, prefix = '', suffix = '', duration = 1200, decimals = 0 }) => {
	const [displayValue, setDisplayValue] = useState(0)

	useEffect(() => {
		let frameId = 0
		const startTime = performance.now()
		const animate = (now) => {
			const elapsed = now - startTime
			const progress = Math.min(elapsed / duration, 1)
			const current = value * progress
			setDisplayValue(current)
			if (progress < 1) {
				frameId = requestAnimationFrame(animate)
			}
		}
		frameId = requestAnimationFrame(animate)
		return () => cancelAnimationFrame(frameId)
	}, [value, duration])

	const formatted = decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue).toString()
	return (
		<span>{`${prefix}${formatted}${suffix}`}</span>
	)
}

const Solutions = () => {
    return (
        <div>
            {/* KPI boxes section with centered heading and description */}
            <section className="bg-[#F5F5F5] text-[#110B38] py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Real-World AI Success Stories</h2>
                        <p className="mt-4 text-sm sm:text-base md:text-lg text-[#110B38]/70">
                            Discover how leading enterprises across industries have transformed their operations with Cogniwide AI solutions, achieving measurable ROI and operational excellence.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="rounded-xl border border-[#7B439B]/20 bg-white p-6 text-center shadow-lg shadow-[#7B439B]/10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[#7B439B]/20">
                            <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#7B439B] to-[#FF6B00] bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-x">
                                <StatNumber value={150} suffix="+" />
                            </div>
                            <div className="mt-2 text-sm text-[#110B38]/70">Successful Implementations</div>
                        </div>
                        <div className="rounded-xl border border-[#7B439B]/20 bg-white p-6 text-center shadow-lg shadow-[#7B439B]/10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[#7B439B]/20">
                            <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#7B439B] to-[#FF6B00] bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-x">
                                <StatNumber value={87} suffix="%" />
                            </div>
                            <div className="mt-2 text-sm text-[#110B38]/70">Average Efficiency Gain</div>
                        </div>
                        <div className="rounded-xl border border-[#7B439B]/20 bg-white p-6 text-center shadow-lg shadow-[#7B439B]/10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[#7B439B]/20">
                            <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#7B439B] to-[#FF6B00] bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-x">
                                <StatNumber value={2.4} prefix="$" suffix="M" decimals={1} />
                            </div>
                            <div className="mt-2 text-sm text-[#110B38]/70">Average Cost Savings</div>
                        </div>
                        <div className="rounded-xl border border-[#7B439B]/20 bg-white p-6 text-center shadow-lg shadow-[#7B439B]/10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[#7B439B]/20">
                            <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#7B439B] to-[#FF6B00] bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-x">
                                <StatNumber value={6} suffix=" Mo" />
                            </div>
                            <div className="mt-2 text-sm text-[#110B38]/70">Average ROI Timeline</div>
                        </div>
                    </div>
                    
                </div>
            </section>

            {/* Following section after the KPI (green) boxes */}
            <section className="bg-[#F5F5F5] text-[#110B38] pt-6 pb-16">
                <div className="max-w-[1920px] w-full mx-auto px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight md:whitespace-nowrap animate-fade-in-up">Deep Dive into Our Core Enterprise Solutions</h2>
                        <p className="mt-4 text-sm sm:text-base md:text-lg text-[#110B38]/70">
                            Explore the functionality, underlying architecture, and tangible benefits of our flagship AI-powered agents.
                        </p>
                        {/* Single large card for detailed content */}
                        <div className="mt-8 max-w-[1920px] w-full mx-auto">
                            <div className="w-full rounded-2xl border border-[#7B439B] bg-white p-8 md:p-12 text-left text-[#110B38]">
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#7B439B]">Insurance Underwriting Agent</h3>
                                </div>
                                <div className="max-w-none">
                                    <p className="mt-4 text-sm md:text-base leading-relaxed">Our AI-powered Underwriting Agent revolutionizes the insurance policy issuance process by automating risk assessment and policy generation, significantly reducing manual effort and processing time.</p>
                                </div>
                                {/* Two-column split: How it works | Architecture Overview */}
                                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="rounded-xl border border-[#7B439B]/20 bg-[#F5F5F5] p-8 transition shadow-sm hover:shadow-md">
                                        <h4 className="text-xl font-semibold text-[#7B439B]">How it works</h4>
                                        <div className="mt-4 space-y-3">
                                            <div className="flex items-start gap-3">
                                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7B439B]/10 text-[#7B439B] text-xs font-bold border border-[#7B439B]/30">1</span>
                                                <p className="text-sm md:text-base text-[#110B38]/80">Data Ingestion: Securely collects data from various sources like CRM, electronic health records (EHR), credit bureaus, and existing policy databases. It handles structured and unstructured data, including text documents.</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7B439B]/10 text-[#7B439B] text-xs font-bold border border-[#7B439B]/30">2</span>
                                                <p className="text-sm md:text-base text-[#110B38]/80">Intelligent Risk Assessment: Utilizes advanced machine learning models to analyze applicant data, identify risk factors, detect potential fraud patterns, and generate a comprehensive risk score. Natural Language Processing (NLP) is used to extract relevant information from free-form text fields and documents.</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7B439B]/10 text-[#7B439B] text-xs font-bold border border-[#7B439B]/30">3</span>
                                                <p className="text-sm md:text-base text-[#110B38]/80">Automated Policy Generation: Based on the risk assessment and predefined business rules, the agent automatically applies appropriate policy terms, conditions, and premiums. It can generate personalized policy documents and quotes in real-time.</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7B439B]/10 text-[#7B439B] text-xs font-bold border border-[#7B439B]/30">4</span>
                                                <p className="text-sm md:text-base text-[#110B38]/80">Human-in-the-Loop: For complex or edge cases, the system intelligently flags applications for human underwriter review, providing them with all relevant data and AI-generated recommendations to expedite decision-making.</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7B439B]/10 text-[#7B439B] text-xs font-bold border border-[#7B439B]/30">5</span>
                                                <p className="text-sm md:text-base text-[#110B38]/80">Continuous Learning: The agent continuously learns from new data and human underwriter decisions, improving its accuracy and efficiency over time.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-xl border border-[#FF6B00]/30 bg-[#FF6B00]/5 p-0 overflow-hidden transition shadow-sm hover:shadow-md">
                                        <div className="px-6 md:px-8 pt-6 md:pt-8 animate-fade-in-up">
                                            <h4 className="text-xl font-semibold text-[#FF6B00]">Architecture Overview</h4>
                                            <p className="mt-3 text-sm md:text-base text-[#110B38]/80">The Insurance Underwriting Agent is built on a scalable, cloud‑native microservices architecture, ensuring high availability and performance.</p>
                                        </div>
                                        <div className="mt-4 md:mt-6 bg-white text-[#110B38] px-4 md:px-6 py-4 md:py-6 border border-[#7B439B]/10 overflow-x-auto w-full">
                                            {/* Row 1 */}
                                            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center justify-items-center gap-x-2 py-2">
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">Data Sources</span>
                                                <span className="text-[#FF6B00] text-sm md:text-base lg:text-lg font-semibold animate-pulse-soft">→</span>
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">API Gateway</span>
                                                <span className="text-[#FF6B00] opacity-0 select-none">→</span>
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-transparent bg-transparent opacity-0 select-none">Placeholder</span>
                                            </div>
                                            <div className="h-px bg-[#110B38]/10 my-2"></div>
                                            {/* Row 2 */}
                                            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center justify-items-center gap-x-2 py-2">
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">Data Lake</span>
                                                <span className="text-[#FF6B00] text-sm md:text-base lg:text-lg font-semibold animate-pulse-soft">→</span>
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">ETL</span>
                                                <span className="text-[#FF6B00] text-sm md:text-base lg:text-lg font-semibold">→</span>
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">Features</span>
                                            </div>
                                            <div className="h-px bg-[#110B38]/10 my-2"></div>
                                            {/* Row 3 */}
                                            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center justify-items-center gap-x-2 py-2">
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">ML Models</span>
                                                <span className="text-[#FF6B00] text-sm md:text-base lg:text-lg font-semibold animate-pulse-soft">↔</span>
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">NLP Analysis</span>
                                                <span className="text-[#FF6B00] text-sm md:text-base lg:text-lg font-semibold animate-pulse-soft">↔</span>
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">Fraud Detection</span>
                                            </div>
                                            <div className="h-px bg-[#110B38]/10 my-2"></div>
                                            {/* Row 4 */}
                                            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center justify-items-center gap-x-2 py-2">
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">Orchestration</span>
                                                <span className="text-[#FF6B00] text-sm md:text-base lg:text-lg font-semibold">↔</span>
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">Rules Engine</span>
                                                <span className="text-[#FF6B00] text-sm md:text-base lg:text-lg font-semibold">↔</span>
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">Human Interface</span>
                                            </div>
                                            <div className="h-px bg-[#110B38]/10 my-2"></div>
                                            {/* Row 5 */}
                                            <div className="flex items-center justify-start gap-2 py-2 flex-wrap md:flex-nowrap">
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">Knowledge Base</span>
                                                <span className="text-[#FF6B00] text-[10px] md:text-xs animate-pulse-soft">↔</span>
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">Policy Rules</span>
                                                <span className="text-[#FF6B00] text-[10px] md:text-xs">↔</span>
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">Historical Data</span>
                                            </div>
                                            <div className="h-px bg-[#110B38]/10 my-2"></div>
                                            {/* Row 6 */}
                                            <div className="flex items-center justify-start gap-2 py-2 flex-wrap md:flex-nowrap">
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">Policy Gen</span>
                                                <span className="text-[#FF6B00] text-sm md:text-base lg:text-lg font-semibold animate-pulse-soft">→</span>
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">Recommendations</span>
                                                <span className="text-[#FF6B00] text-sm md:text-base lg:text-lg font-semibold animate-pulse-soft">→</span>
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">CRM/PAS</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RFP Response Agent */}
                        <div className="mt-12 max-w-[1920px] w-full mx-auto">
                            <div className="w-full rounded-2xl border border-[#7B439B] bg:white bg-white p-8 md:p-12 text-left text-[#110B38]">
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#7B439B]">RFP Response Agent</h3>
                                </div>
                                <div className="max-w-none">
                                    <p className="mt-4 text-sm md:text-base leading-relaxed">Our RFP Response Agent dramatically accelerates the proposal generation process by leveraging AI to automatically draft, review, and customize responses based on past successful bids and company knowledge.</p>
                                </div>
                                {/* Two-column split: How it works | Architecture Overview */}
                                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="rounded-xl border border-[#7B439B]/20 bg-[#F5F5F5] p-8 transition shadow-sm hover:shadow-md">
                                        <h4 className="text-xl font-semibold text-[#7B439B]">How it works</h4>
                                        <div className="mt-4 space-y-3">
                                            <div className="flex items-start gap-3">
                                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7B439B]/10 text-[#7B439B] text-xs font-bold border border-[#7B439B]/30">1</span>
                                                <p className="text-sm md:text-base text-[#110B38]/80">RFP Ingestion & Analysis: The agent ingests incoming RFP documents (PDF, Word, etc.) and uses advanced OCR and NLP to parse and analyze the content, identifying key requirements, questions, and themes. It categorizes requirements and maps them to relevant solution areas.</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7B439B]/10 text-[#7B439B] text-xs font-bold border border-[#7B439B]/30">2</span>
                                                <p className="text-sm md:text-base text-[#110B38]/80">Automated Draft Generation: Leveraging a vast, intelligent content library of approved responses, past successful proposals, product documentation, and technical specifications, the agent generates initial draft responses for each section of the RFP.</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7B439B]/10 text-[#7B439B] text-xs font-bold border border-[#7B439B]/30">3</span>
                                                <p className="text-sm md:text-base text-[#110B38]/80">Customization & Personalization: The generative AI module fine-tunes the drafted content to align with the client's specific needs, industry nuances, and desired tone, ensuring brand voice consistency and maximizing relevance.</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7B439B]/10 text-[#7B439B] text-xs font-bold border border-[#7B439B]/30">4</span>
                                                <p className="text-sm md:text-base text-[#110B38]/80">Collaborative Review & Approval: The platform provides a collaborative environment for human experts (sales, legal, technical) to review, edit, and approve the generated responses. Version control ensures traceability and compliance.</p>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7B439B]/10 text-[#7B439B] text-xs font-bold border border-[#7B439B]/30">5</span>
                                                <p className="text-sm md:text-base text-[#110B38]/80">Finalization & Export: Once approved, the agent compiles the complete RFP response into the required format (e.g., PDF, Word) and can integrate with CRM systems to update opportunity records.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-xl border border-[#FF6B00]/30 bg-[#FF6B00]/5 p-0 overflow-hidden transition shadow-sm hover:shadow-md">
                                        <div className="px-6 md:px-8 pt-6 md:pt-8 animate-fade-in-up">
                                            <h4 className="text-xl font-semibold text-[#FF6B00]">Architecture Overview</h4>
                                            <p className="mt-3 text-sm md:text-base text-[#110B38]/80">The RFP Response Agent is powered by a sophisticated blend of content management, natural language processing, and advanced generative AI.</p>
                                        </div>
                                        <div className="mt-4 md:mt-6 bg-white text-[#110B38] px-4 md:px-6 py-4 md:py-6 border border-[#7B439B]/10 overflow-x-auto w-full bg-[radial-gradient(ellipse_at_center,_rgba(17,11,56,0.03),_transparent_60%)]">
                                            {/* Row 1 */}
                                            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center justify-items-center gap-x-2 py-2">
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">RFP Ingestion</span>
                                                <span className="text-[#FF6B00] text-sm md:text-base lg:text-lg font-semibold animate-pulse-soft">→</span>
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">OCR / NLP</span>
                                                <span className="text-[#FF6B00] opacity-0 select-none">→</span>
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-transparent bg-transparent opacity-0 select-none">Placeholder</span>
                                            </div>
                                            <div className="h-px bg-[#110B38]/10 my-2"></div>
                                            {/* Row 2 */}
                                            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center justify-items-center gap-x-2 py-2">
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">Content Library</span>
                                                <span className="text-[#FF6B00] text-sm md:text-base lg:text-lg font-semibold animate-pulse-soft">↔</span>
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">Vector DB</span>
                                                <span className="text-[#FF6B00] text-sm md:text-base lg:text-lg font-semibold animate-pulse-soft">↔</span>
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">Doc DB</span>
                                            </div>
                                            <div className="h-px bg-[#110B38]/10 my-2"></div>
                                            {/* Row 3 */}
                                            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center justify-items-center gap-x-2 py-2">
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">Generative AI</span>
                                                <span className="text-[#FF6B00] text-sm md:text-base lg:text-lg font-semibold animate-pulse-soft">↔</span>
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">Prompt Eng.</span>
                                                <span className="text-[#FF6B00] text-sm md:text-base lg:text-lg font-semibold animate-pulse-soft">↔</span>
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">Response Gen.</span>
                                            </div>
                                            <div className="h-px bg-[#110B38]/10 my-2"></div>
                                            {/* Row 4 */}
                                            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center justify-items-center gap-x-2 py-2">
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">Collaboration</span>
                                                <span className="text-[#FF6B00] text-sm md:text-base lg:text-lg font-semibold">↔</span>
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">Review Workflow</span>
                                                <span className="text-[#FF6B00] text-sm md:text-base lg:text-lg font-semibold">↔</span>
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">Approval Engine</span>
                                            </div>
                                            <div className="h-px bg-[#110B38]/10 my-2"></div>
                                            {/* Row 5 */}
                                            <div className="flex items-center justify-start gap-2 py-2 flex-wrap md:flex-nowrap">
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">Version Control</span>
                                                <span className="text-[#FF6B00] text-[10px] md:text-xs animate-pulse-soft">↔</span>
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">Audit Trail</span>
                                            </div>
                                            <div className="h-px bg-[#110B38]/10 my-2"></div>
                                            {/* Row 6 */}
                                            <div className="flex items-center justify-start gap-2 py-2 flex-wrap md:flex-nowrap">
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">Doc Export</span>
                                                <span className="text-[#FF6B00] text-sm md:text-base lg:text-lg font-semibold animate-pulse-soft">→</span>
                                                <span className="inline-flex items-center justify-center w-24 md:w-32 h-8 rounded-md border border-[#7B439B] bg-white text-[#110B38] whitespace-nowrap text-[11px] md:text-xs font-medium px-1 transition-transform duration-200 hover:-translate-y-0.5">CRM Integration</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Three-Way Invoice Matching Agent */}
            <section className="bg-[#F5F5F5] text-[#110B38] pt-0 pb-16">
                <div className="max-w-6xl w-full mx-auto px-4">
                    <div className="mt-6 max-w-6xl w-full mx-auto">
                        <div className="w-full rounded-2xl border border-[#7B439B] bg-white px-8 md:px-12 pt-6 md:pt-8 pb-8 md:pb-12 text-left text-[#110B38] overflow-hidden shadow-[0_-2px_0_#F5F5F5]">
                            <div className="flex items-start justify-between gap-4">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#7B439B]">Three-Way Invoice Matching Agent</h3>
                            </div>
                            <div className="max-w-none">
                                <p className="mt-4 text-sm md:text-base leading-relaxed">Our Three-Way Invoice Matching Agent automates the critical process of reconciling purchase orders, invoices, and goods receipts, ensuring accuracy, preventing fraud, and accelerating payment cycles.</p>
                            </div>
                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="rounded-xl border border-[#7B439B]/20 bg-[#F5F5F5] p-8 transition shadow-sm hover:shadow-md">
                                    <h4 className="text-xl font-semibold text-[#7B439B]">How it works</h4>
                                    <p className="mt-4 text-sm md:text-base text-[#110B38]/80">Add your steps here.</p>
                                </div>
                                <div className="rounded-xl border border-[#FF6B00]/30 bg-[#FF6B00]/5 p-0 overflow-hidden transition shadow-sm hover:shadow-md">
                                    <div className="px-6 md:px-8 pt-6 md:pt-8 animate-fade-in-up">
                                        <h4 className="text-xl font-semibold text-[#FF6B00]">Architecture Overview</h4>
                                        <p className="mt-3 text-sm md:text-base text-[#110B38]/80">The Three-Way Invoice Matching Agent features a robust data processing pipeline with intelligent matching algorithms and seamless integration capabilities.</p>
                                    </div>
                                    <div className="bg-white text-[#110B38] px-4 md:px-6 py-4 md:py-6 border border-[#7B439B]/10 overflow-x-auto w-full">
                                        <div className="text-xs text-[#110B38]/60">Add your rows here (same grid as above agents).</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Solutions;