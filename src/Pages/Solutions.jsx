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
            <section className="bg-background text-purpletext py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-5xl font-extrabold tracking-tight text-center mb-6" style={{ color: '#7f00d4' }}>
                            Real-World AI Success Stories
                        </h2>
                        <p className="text-lg text-center text-gray-900 mb-12">
                            Discover how leading enterprises across industries have transformed their operations with Cogniwide AI solutions, achieving measurable ROI and operational excellence.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: 150, suffix: '+', label: 'Successful Implementations' },
                            { value: 87, suffix: '%', label: 'Average Efficiency Gain' },
                            { value: 2.4, prefix: '$', suffix: 'M', decimals: 1, label: 'Average Cost Savings' },
                            { value: 6, suffix: ' Mo', label: 'Average ROI Timeline' }
                        ].map((stat, idx) => (
                            <div
                                key={stat.label}
                                className="rounded-xl border border-transparent bg-white p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:border-0"
                                style={{
                                    boxShadow: '0 4px 24px 0 rgba(140, 44, 172, 0.07)',
                                    background: '#faf4fa'
                                }}
                            >
                                <div
                                    className="text-3xl md:text-4xl font-extrabold mb-2 transition-all duration-300 text-gray-900 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#8B5CF6] hover:to-[#F97316]"
                                >
                                    <span>
                                        {stat.prefix}
                                        {stat.decimals ? stat.value.toFixed(stat.decimals) : stat.value}
                                        {stat.suffix}
                                    </span>
                                </div>
                                <div className="mt-2 text-base text-gray-900">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Following section after the KPI (green) boxes */}
            <section className="bg-background text-purpletext pt-6 pb-16">
                <div className="max-w-[1920px] w-full mx-auto px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-4xl font-extrabold tracking-tight text-center mb-6" style={{ color: '#7f00d4' }}>
                            Deep Dive into Our Core Enterprise Solutions
                        </h2>
                        <p className="text-lg text-center text-gray-900 mb-12">
                            Explore the functionality, underlying architecture, and tangible benefits of our flagship AI-powered agents.
                        </p>
                        {/* Single large card for detailed content */}
                        <div className="mt-8 max-w-[1920px] w-full mx-auto">
                            <div className="w-full rounded-2xl border border-purple bg-white p-8 md:p-12 text-left text-purpletext">
                                <div className="flex items-start justify-between gap-4">
                                    {/* Insurance Underwriting Agent */}
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#7f00d4' }}>
                                        Insurance Underwriting Agent
                                    </h3>
                                </div>
                                <div className="max-w-none">
                                    <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-900">
                                        Our AI-powered Underwriting Agent revolutionizes the insurance policy issuance process by automating risk assessment and policy generation, significantly reducing manual effort and processing time.
                                    </p>
                                </div>
                                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* How it works */}
                                    <div className="rounded-xl border border-purple/20 bg-background p-8 transition shadow-sm hover:shadow-md">
                                        <h4 className="text-xl font-semibold mb-4" style={{ color: '#7f00d4' }}>
                                            How it works
                                        </h4>
                                        <div className="mt-4 space-y-3">
                                            {[
                                                "Data Ingestion: Securely collects data from various sources like CRM, electronic health records (EHR), credit bureaus, and existing policy databases. It handles structured and unstructured data, including text documents.",
                                                "Intelligent Risk Assessment: Utilizes advanced machine learning models to analyze applicant data, identify risk factors, detect potential fraud patterns, and generate a comprehensive risk score. Natural Language Processing (NLP) is used to extract relevant information from free-form text fields and documents.",
                                                "Automated Policy Generation: Based on the risk assessment and predefined business rules, the agent automatically applies appropriate policy terms, conditions, and premiums. It can generate personalized policy documents and quotes in real-time.",
                                                "Human-in-the-Loop: For complex or edge cases, the system intelligently flags applications for human underwriter review, providing them with all relevant data and AI-generated recommendations to expedite decision-making.",
                                                "Continuous Learning: The agent continuously learns from new data and human underwriter decisions, improving its accuracy and efficiency over time."
                                            ].map((step, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-purple/10 text-purple text-xs font-bold border border-purple/30">{idx + 1}</span>
                                                    <p className="text-sm md:text-base text-gray-900">{step}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Architecture Overview */}
                                    <div className="rounded-xl border border-orange/30 bg-orange/5 p-0 overflow-hidden transition shadow-sm hover:shadow-md">
                                        <div className="px-4 md:px-6 pt-4 md:pt-6">
                                            <h4 className="text-xl font-semibold mb-4" style={{ color: '#7f00d4' }}>
                                                Architecture Overview
                                            </h4>
                                            <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-900">
                                                The Insurance Underwriting Agent is built on a scalable, cloud-native microservices architecture, ensuring high availability and performance.
                                            </p>
                                        </div>
                                        <div className="mt-3 md:mt-4 px-2 md:px-4 py-3 md:py-4 w-full flex justify-center">
                                            <div className="rounded-2xl border border-purple/20 max-w-[520px] py-6">
                                                {/* Row 1 */}
                                                <div className="flex flex-row items-center justify-start gap-0 mb-6">
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Data Sources</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">→</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">API Gateway</div>
                                                </div>
                                                {/* Row 2 */}
                                                <div className="flex flex-row items-center justify-start gap-0 mb-6">
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Data Lake</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">→</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">ETL</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">→</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Features</div>
                                                </div>
                                                {/* Row 3 */}
                                                <div className="flex flex-row items-center justify-start gap-0 mb-6">
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">ML Models</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">↔</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">NLP Analysis</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">↔</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Fraud Detection</div>
                                                </div>
                                                {/* Row 4 */}
                                                <div className="flex flex-row items-center justify-start gap-0 mb-6">
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Orchestration</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">↔</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Rules Engine</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">↔</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Human Interface</div>
                                                </div>
                                                {/* Row 5 */}
                                                <div className="flex flex-row items-center justify-start gap-0 mb-6">
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Knowledge Base</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">↔</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Policy Rules</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">↔</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Historical Data</div>
                                                </div>
                                                {/* Row 6 */}
                                                <div className="flex flex-row items-center justify-start gap-0">
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Policy Gen</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">→</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Recommendations</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">→</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">CRM/PAS</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RFP Response Agent */}
                        <div className="mt-12 max-w-[1920px] w-full mx-auto">
                            <div className="w-full rounded-2xl border border-purple bg-white p-8 md:p-12 text-left text-purpletext">
                                <div className="flex items-start justify-between gap-4">
                                    {/* RFP Response Agent */}
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#7f00d4' }}>
                                        RFP Response Agent
                                    </h3>
                                </div>
                                <div className="max-w-none">
                                    <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-900">
                                        Our RFP Response Agent dramatically accelerates the proposal generation process by leveraging AI to automatically draft, review, and customize responses based on past successful bids and company knowledge.
                                    </p>
                                </div>
                                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* How it works */}
                                    <div className="rounded-xl border border-purple/20 bg-background p-8 transition shadow-sm hover:shadow-md">
                                        <h4 className="text-xl font-semibold mb-4" style={{ color: '#7f00d4' }}>
                                            How it works
                                        </h4>
                                        <div className="mt-4 space-y-3">
                                            {[
                                                "RFP Ingestion & Analysis: The agent ingests incoming RFP documents (PDF, Word, etc.) and uses advanced OCR and NLP to parse and analyze the content, identifying key requirements, questions, and themes. It categorizes requirements and maps them to relevant solution areas.",
                                                "Automated Draft Generation: Leveraging a vast, intelligent content library of approved responses, past successful proposals, product documentation, and technical specifications, the agent generates initial draft responses for each section of the RFP.",
                                                "Customization & Personalization: The generative AI module fine-tunes the drafted content to align with the client's specific needs, industry nuances, and desired tone, ensuring brand voice consistency and maximizing relevance.",
                                                "Collaborative Review & Approval: The platform provides a collaborative environment for human experts (sales, legal, technical) to review, edit, and approve the generated responses. Version control ensures traceability and compliance.",
                                                "Finalization & Export: Once approved, the agent compiles the complete RFP response into the required format (e.g., PDF, Word) and can integrate with CRM systems to update opportunity records."
                                            ].map((step, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-purple/10 text-purple text-xs font-bold border border-purple/30">{idx + 1}</span>
                                                    <p className="text-sm md:text-base text-gray-900">{step}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Architecture Overview */}
                                    <div className="rounded-xl border border-orange/30 bg-orange/5 p-0 overflow-hidden transition shadow-sm hover:shadow-md">
                                        <div className="px-6 md:px-8 pt-6 md:pt-8">
                                            <h4 className="text-xl font-semibold mb-4" style={{ color: '#7f00d4' }}>
                                                Architecture Overview
                                            </h4>
                                            <p className="mt-3 text-sm md:text-base text-gray-900">
                                                The RFP Response Agent is powered by a sophisticated blend of content management, natural language processing, and advanced generative AI.
                                            </p>
                                        </div>
                                        {/* Architecture Overview for RFP Response Agent */}
                                        <div className="mt-4 md:mt-6 px-2 md:px-4 py-3 md:py-4 w-full flex justify-center">
                                            <div className="rounded-2xl border border-purple/20 max-w-[520px] py-6">
                                                {/* Row 1 */}
                                                <div className="flex flex-row items-center justify-start gap-0 mb-6">
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">RFP Ingestion</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">→</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">OCR / NLP</div>
                                                </div>
                                                {/* Row 2 */}
                                                <div className="flex flex-row items-center justify-start gap-0 mb-6">
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Content Library</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">↔</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Vector DB</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">↔</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Doc DB</div>
                                                </div>
                                                {/* Row 3 */}
                                                <div className="flex flex-row items-center justify-start gap-0 mb-6">
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Generative AI</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">↔</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Prompt Eng.</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">↔</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Response Gen.</div>
                                                </div>
                                                {/* Row 4 */}
                                                <div className="flex flex-row items-center justify-start gap-0 mb-6">
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Collaboration</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">↔</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Review Workflow</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">↔</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Approval Engine</div>
                                                </div>
                                                {/* Row 5 */}
                                                <div className="flex flex-row items-center justify-start gap-0 mb-6">
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Version Control</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">↔</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Audit Trail</div>
                                                </div>
                                                {/* Row 6 */}
                                                <div className="flex flex-row items-center justify-start gap-0">
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Doc Export</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">→</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">CRM Integration</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Three-Way Invoice Matching Agent */}
                        <div className="mt-12 max-w-[1920px] w-full mx-auto">
                            <div className="w-full rounded-2xl border border-purple bg-white p-8 md:p-12 text-left text-purpletext">
                                <div className="flex items-start justify-between gap-4">
                                    {/* Three-Way Invoice Matching Agent */}
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#7f00d4' }}>
                                        Three-Way Invoice Matching Agent
                                    </h3>
                                </div>
                                <div className="max-w-none">
                                    <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-900">
                                        Our Three-Way Invoice Matching Agent automates the critical process of reconciling purchase orders, invoices, and goods receipts, ensuring accuracy, preventing fraud, and accelerating payment cycles.
                                    </p>
                                </div>
                                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* How it works */}
                                    <div className="rounded-xl border border-purple/20 bg-background p-8 transition shadow-sm hover:shadow-md">
                                        <h4 className="text-xl font-semibold mb-4" style={{ color: '#7f00d4' }}>
                                            How it works
                                        </h4>
                                        <div className="mt-4 space-y-3">
                                            {[
                                                "Document Ingestion & Extraction: The agent automatically receives and processes purchase orders (POs), invoices, and goods receipts (GRs) from various channels. It uses advanced Optical Character Recognition (OCR) and Natural Language Processing (NLP) to accurately extract relevant data points like vendor name, item descriptions, quantities, prices, and terms.",
                                                "Automated Matching: It intelligently compares the extracted data from all three documents (PO, Invoice, GR) to identify matches and discrepancies. This includes line-item matching, quantity verification, price comparison, and term alignment. Fuzzy matching algorithms handle minor variations.",
                                                "Exception Handling & Routing: Any discrepancies or unmatched items are automatically flagged as exceptions. The agent then routes these exceptions to the appropriate personnel (e.g., procurement, accounts payable) for human review and resolution based on predefined business rules and workflows.",
                                                "Automated Approval & Payment: Once an invoice is successfully matched or an exception is resolved, the agent can trigger automated approval workflows and initiate payment processes within the existing ERP or accounting system, significantly accelerating payment cycles and improving vendor relationships.",
                                                "Audit Trail & Reporting: Maintains a detailed audit trail of all transactions, matches, and exceptions, providing comprehensive reporting capabilities for compliance and financial analysis."
                                            ].map((step, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-purple/10 text-purple text-xs font-bold border border-purple/30">{idx + 1}</span>
                                                    <p className="text-sm md:text-base text-gray-900">{step}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Architecture Overview */}
                                    <div className="rounded-xl border border-orange/30 bg-orange/5 p-0 overflow-hidden transition shadow-sm hover:shadow-md">
                                        <div className="px-6 md:px-8 pt-6 md:pt-8">
                                            <h4 className="text-xl font-semibold mb-4" style={{ color: '#7f00d4' }}>
                                                Architecture Overview
                                            </h4>
                                            <p className="mt-3 text-sm md:text-base text-gray-900">
                                                The Three-Way Invoice Matching Agent features a robust data processing pipeline with intelligent matching algorithms and seamless integration capabilities.
                                            </p>
                                        </div>
                                        {/* Architecture Overview for Three-Way Invoice Matching Agent */}
                                        <div className="mt-4 md:mt-6 px-2 md:px-4 py-3 md:py-4 w-full flex justify-center">
                                            <div className="rounded-2xl border border-purple/20 max-w-[520px] py-6">
                                                {/* Row 1 */}
                                                <div className="flex flex-row items-center justify-start gap-0 mb-6">
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Doc Ingestion</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">→</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Doc AI & OCR</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">→</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Data Extract</div>
                                                </div>
                                                {/* Row 2 */}
                                                <div className="flex flex-row items-center justify-start gap-0 mb-6">
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Data Validation</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">→</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Matching Engine</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">↔</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Fuzzy Matching</div>
                                                </div>
                                                {/* Row 3 */}
                                                <div className="flex flex-row items-center justify-start gap-0 mb-6">
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Exception Handling</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">→</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Alerts</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">→</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Human Review</div>
                                                </div>
                                                {/* Row 4 */}
                                                <div className="flex flex-row items-center justify-start gap-0 mb-6">
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Approval Workflow</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">→</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">ERP Integration</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">→</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Payment Init.</div>
                                                </div>
                                                {/* Row 5 */}
                                                <div className="flex flex-row items-center justify-start gap-0">
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Audit & Compliance</div>
                                                    <span className="mx-2 text-orange-500 text-base font-bold">↔</span>
                                                    <div className="border border-[#7f00d4] rounded px-4 py-1 text-[#7f00d4] font-medium text-xs text-center w-[140px]">Reporting</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Add this section below your agent layouts */}
            <section className="bg-background text-purpletext py-16">
    <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold mb-2 text-purple">Enterprise Trust & Compliance</h2>
            <p className="text-lg text-purpletext/70">
                Our implementations meet the highest standards of security, compliance, and reliability
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="rounded-2xl bg-white p-8 flex flex-col items-center shadow-lg border border-purple/10">
                <div className="bg-cyan-400 rounded-xl p-3 mb-4">
                    <span className="text-white text-2xl">🛡️</span>
                </div>
                <div className="font-bold text-lg mb-2 text-purple">SOC 2 Type II</div>
                <div className="text-purpletext/70 text-sm text-center">Certified security controls and operational effectiveness</div>
            </div>
            <div className="rounded-2xl bg-white p-8 flex flex-col items-center shadow-lg border border-purple/10">
                <div className="bg-cyan-400 rounded-xl p-3 mb-4">
                    <span className="text-white text-2xl">🧭</span>
                </div>
                <div className="font-bold text-lg mb-2 text-purple">ISO 27001</div>
                <div className="text-purpletext/70 text-sm text-center">International information security management standard</div>
            </div>
            <div className="rounded-2xl bg-white p-8 flex flex-col items-center shadow-lg border border-purple/10">
                <div className="bg-cyan-400 rounded-xl p-3 mb-4">
                    <span className="text-white text-2xl">✅</span>
                </div>
                <div className="font-bold text-lg mb-2 text-purple">GDPR Compliant</div>
                <div className="text-purpletext/70 text-sm text-center">Full compliance with European data protection regulations</div>
            </div>
            <div className="rounded-2xl bg-white p-8 flex flex-col items-center shadow-lg border border-purple/10">
                <div className="bg-cyan-400 rounded-xl p-3 mb-4">
                    <span className="text-white text-2xl">🏳️</span>
                </div>
                <div className="font-bold text-lg mb-2 text-purple">HIPAA Ready</div>
                <div className="text-purpletext/70 text-sm text-center">Healthcare data protection and privacy compliance</div>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="rounded-2xl bg-white p-8 flex flex-col items-center shadow-lg border border-purple/10">
                <div className="text-cyan-400 text-3xl font-extrabold mb-2">99.97%</div>
                <div className="text-purple font-semibold">Average Uptime</div>
            </div>
            <div className="rounded-2xl bg-white p-8 flex flex-col items-center shadow-lg border border-purple/10">
                <div className="text-cyan-400 text-3xl font-extrabold mb-2">150+</div>
                <div className="text-purple font-semibold">Successful Deployments</div>
            </div>
            <div className="rounded-2xl bg-white p-8 flex flex-col items-center shadow-lg border border-purple/10">
                <div className="text-cyan-400 text-3xl font-extrabold mb-2">4.2 Mo</div>
                <div className="text-purple font-semibold">Average Implementation</div>
            </div>
            <div className="rounded-2xl bg-white p-8 flex flex-col items-center shadow-lg border border-purple/10">
                <div className="text-cyan-400 text-3xl font-extrabold mb-2">24/7</div>
                <div className="text-purple font-semibold">Enterprise Support</div>
            </div>
        </div>
    </div>
</section>

{/* Place this after your KPI cards section */}
<div className="bg-background py-20">
    <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-purple">
            Ready to <span className="text-cyan-400">Join Our Success Stories??</span>
        </h2>
        <p className="text-lg text-purpletext/80 mb-8">
            Transform your enterprise operations with proven AI solutions. Start your journey to measurable ROI today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-6 py-3 rounded-lg border-2 border-cyan-400 text-purple bg-white hover:bg-cyan-400 hover:text-white font-semibold shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 animate-fade-in-up">
                Initiate Innovation → Start POC
            </button>
            <button className="px-6 py-3 rounded-lg border-2 border-purple/40 text-purple bg-white hover:bg-purple hover:text-white font-semibold shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple animate-fade-in-up">
                Schedule Demo
            </button>
        </div>
    </div>
</div>
        </div>
    )
}

export default Solutions;