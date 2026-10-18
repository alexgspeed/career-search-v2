import React, { useState } from 'react';
import { 
  FileText, Briefcase, Sparkles, CheckCircle2, AlertCircle, RefreshCw, 
  Download, Copy, Check, BarChart3, Bookmark, Zap, HardDrive, Printer
} from 'lucide-react';

const DEFAULT_TEMPLATES = [
  {
    id: 'swe-fullstack',
    title: 'Software Engineer - Full Stack Template',
    updatedAt: 'Updated 2 days ago',
    content: `# Alex Morgan\nSan Francisco, CA • alex.morgan@email.com • (555) 019-2834 • linkedin.com/in/alexmorgan\n\n## Professional Summary\nFull-Stack Software Engineer with 5+ years of experience designing scalable microservices, RESTful APIs, and responsive frontends in fast-paced startup environments.\n\n## Technical Skills\n- Languages: JavaScript (ES6+), TypeScript, Python, SQL\n- Frontend: React, Redux Toolkit, Tailwind CSS, HTML5/CSS3\n- Backend: Node.js, Express, FastAPI, PostgreSQL, Redis\n- Cloud & DevOps: AWS (EC2, S3), Docker, Git, CI/CD pipelines\n\n## Work Experience\n### Senior Software Engineer | CloudScale Labs (2022 - Present)\n- Architected high-throughput microservices handling 4M+ daily API transactions using Node.js and PostgreSQL.\n- Migrated monolithic backend to decoupled React & microservices, reducing payload latency by 45%.\n- Mentored 4 junior engineers, established code review benchmarks, and led weekly technical architecture discussions.\n\n### Software Engineer | Vertex Interactive (2019 - 2022)\n- Developed core user onboarding and analytics dashboard using React lifting user activation by 18%.\n- Integrated Stripe billing and OAuth 2.0 authentication, ensuring SOC2 and PCI-DSS compliance.\n- Wrote comprehensive unit and end-to-end test suites boosting test coverage from 52% to 89%.\n\n## Education\nB.S. in Computer Science • University of Washington`
  },
  {
    id: 'general-tech',
    title: 'General Technical / Product Specialist',
    updatedAt: 'Updated 1 week ago',
    content: `# Alex Morgan\nSan Francisco, CA • alex.morgan@email.com • (555) 019-2834\n\n## Summary\nResults-driven Technical Specialist with deep domain experience bridging customer requirements, technical roadmap implementation, and scalable SaaS solutions.\n\n## Core Competencies\n- Project Coordination, Agile/Scrum Methodologies, Jira, Product Metrics\n- Cross-functional communication, Customer Success, Python Data Analysis\n\n## Experience\n### Implementation Specialist | DataPoint Systems (2021 - Present)\n- Led onboarding for 30+ Enterprise SaaS clients, reducing average time-to-value from 42 days to 18 days.\n- Partnered with product engineering to identify and resolve top 10 recurring workflow bottlenecks.`
  }
];

export default function App() {
  const [jobUrl, setJobUrl] = useState('');
  const [roleTitle, setRoleTitle] = useState('Senior Full Stack Engineer');
  const [companyName, setCompanyName] = useState('Stripe / Modern FinTech Corp');
  const [keySkills, setKeySkills] = useState('React, TypeScript, Node.js, AWS, GraphQL, Distributed Systems, Microservices, CI/CD');
  const [jobDesc, setJobDesc] = useState(`About the Role:
We are looking for a Senior Full Stack Engineer to join our Core Platform & Billing team. You will architect robust, fault-tolerant payment APIs, lead frontend modernization with TypeScript & React, and collaborate closely with product management and infrastructure teams.

Requirements:
- 5+ years building production-grade web applications
- Expert knowledge of JavaScript, modern React, and Node.js
- Experience designing resilient REST and GraphQL APIs
- Hands-on cloud experience with AWS (S3, Lambda, ECS, RDS)
- Background in distributed data pipelines and database optimization`);

  const [activeTab, setActiveTab] = useState('resume');
  const [isTailoring, setIsTailoring] = useState(false);
  const [copied, setCopied] = useState(false);
  const [templates, setTemplates] = useState(DEFAULT_TEMPLATES);
  const [selectedTemplateId, setSelectedTemplateId] = useState(DEFAULT_TEMPLATES[0].id);

  const activeTemplate = templates.find(t => t.id === selectedTemplateId) || templates[0];
  const [tailoredResume, setTailoredResume] = useState(activeTemplate.content);
  const [tailoredCoverLetter, setTailoredCoverLetter] = useState(
`Dear Hiring Team at ${companyName},

I am writing to express my strong enthusiasm for the ${roleTitle} role. With a robust track record in architecting high-scale applications and shipping reliable software using modern React, Node.js, and cloud platforms, I am eager to contribute immediately to your engineering goals.

Throughout my career, I have prioritized system resilience, clean code architecture, and high developer velocity. Partnering closely with cross-functional teams to translate ambitious requirements into performant solutions has consistently defined my work.

Thank you for your time and consideration. I welcome the opportunity to discuss how my skill set can support your team's roadmap.

Sincerely,
Alex Morgan`
  );

  const handleSimulateUrlFetch = () => {
    if (!jobUrl) return;
    setIsTailoring(true);
    setTimeout(() => {
      setRoleTitle('Senior Platform Engineer');
      setCompanyName('TechForward Systems');
      setKeySkills('React, Node.js, AWS, Cloud Architecture, GraphQL, Docker, Microservices');
      setIsTailoring(false);
    }, 800);
  };

  const handleGenerateATS = () => {
    setIsTailoring(true);
    setTimeout(() => {
      const skillsArray = keySkills.split(',').map(s => s.trim()).filter(Boolean);
      const optimized = activeTemplate.content
        .replace(/## Professional Summary\n[\s\S]*?\n\n##/, `## Professional Summary\nTarget-aligned ${roleTitle} with demonstrated expertise in ${skillsArray.slice(0, 4).join(', ')}. Proven success delivering high-availability cloud microservices and responsive user interfaces that directly move core business metrics.\n\n##`)
        .replace(/- Architected high-throughput microservices.*/, `- Architected scalable ${skillsArray[0] || 'Node.js'} & cloud systems processing millions of events daily with 99.99% reliability.`)
        .replace(/- Migrated monolithic backend.*/, `- Spearheaded frontend and service migration utilizing ${skillsArray[1] || 'React'} and modern cloud patterns, reducing latency by 45%.`);

      setTailoredResume(optimized);
      setTailoredCoverLetter(
`Dear Hiring Team at ${companyName},

I am writing to express my eager interest in the ${roleTitle} position. Having reviewed your engineering roadmap and technical requirements—specifically your focus on ${skillsArray.slice(0, 3).join(', ')}—I am confident my background in scalable web applications makes me an ideal fit.

In my recent positions, I have designed resilient cloud solutions and led architectural upgrades that lifted team velocity by 30% while reducing infrastructure costs. I thrive in collaborative engineering cultures that value automated quality, clear communication, and high-impact shipping.

I would welcome the opportunity to connect with your team to discuss how my technical expertise aligns with ${companyName}'s future milestones.

Sincerely,
Alex Morgan`
      );
      setIsTailoring(false);
    }, 1200);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-600 text-white rounded-xl shadow-md">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">CareerForge ATS</h1>
              <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-semibold">AI TAILOR</span>
            </div>
            <p className="text-xs text-slate-500">Auto-tailor resumes & cover letters against real Job Postings</p>
          </div>
        </div>

        <button
          onClick={handleGenerateATS}
          disabled={isTailoring}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-medium shadow-sm transition disabled:opacity-50"
        >
          {isTailoring ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
          {isTailoring ? 'Optimizing Documents...' : 'Generate ATS Tailored Resume'}
        </button>
      </header>

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto w-full p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
        
        {/* Left Column: Job Description & Template Selector */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Target Posting */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-indigo-600" />
              1. Job Posting Information
            </h2>
            
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Paste Job URL (e.g. greenhouse.io/...)"
                value={jobUrl}
                onChange={(e) => setJobUrl(e.target.value)}
                className="flex-1 text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-indigo-500"
              />
              <button
                onClick={handleSimulateUrlFetch}
                className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 rounded-lg font-medium"
              >
                Fetch
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-slate-600 block mb-1">Role Title</label>
                <input
                  type="text"
                  value={roleTitle}
                  onChange={(e) => setRoleTitle(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-indigo-500"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 block mb-1">Company</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 block mb-1">Key Match Keywords</label>
              <input
                type="text"
                value={keySkills}
                onChange={(e) => setKeySkills(e.target.value)}
                className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-indigo-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600 block mb-1">Full Job Description</label>
              <textarea
                rows={6}
                value={jobDesc}
                onChange={(e) => setJobDesc(e.target.value)}
                className="w-full text-xs p-3 border border-slate-200 rounded-lg focus:outline-indigo-500 font-mono"
              />
            </div>
          </div>

          {/* Drive Templates */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-emerald-600" />
              2. Google Drive Base Template
            </h2>
            <div className="space-y-2">
              {templates.map(tpl => (
                <div
                  key={tpl.id}
                  onClick={() => {
                    setSelectedTemplateId(tpl.id);
                    setTailoredResume(tpl.content);
                  }}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition ${
                    selectedTemplateId === tpl.id 
                      ? 'border-indigo-600 bg-indigo-50/50 ring-1 ring-indigo-500' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-800">{tpl.title}</span>
                    {selectedTemplateId === tpl.id && <Check className="w-4 h-4 text-indigo-600" />}
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-1">{tpl.updatedAt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: ATS Tailored Output */}
        <div className="lg:col-span-7 flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Header Switcher */}
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-3 bg-slate-50/50">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('resume')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                  activeTab === 'resume' ? 'bg-white shadow text-indigo-600 border' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Tailored Resume
              </button>
              <button
                onClick={() => setActiveTab('cover_letter')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                  activeTab === 'cover_letter' ? 'bg-white shadow text-indigo-600 border' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Tailored Cover Letter
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => copyToClipboard(activeTab === 'resume' ? tailoredResume : tailoredCoverLetter)}
                className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
              <button
                onClick={() => window.print()}
                className="flex items-center gap-1.5 text-xs text-white bg-slate-800 hover:bg-slate-900 px-3 py-1.5 rounded-lg shadow-sm"
              >
                <Printer className="w-3.5 h-3.5" />
                Print / Save PDF
              </button>
            </div>
          </div>

          {/* Editor / Preview Body */}
          <div className="flex-1 p-6 overflow-y-auto">
            <textarea
              value={activeTab === 'resume' ? tailoredResume : tailoredCoverLetter}
              onChange={(e) => activeTab === 'resume' ? setTailoredResume(e.target.value) : setTailoredCoverLetter(e.target.value)}
              className="w-full h-full min-h-[500px] text-xs font-mono p-4 border border-slate-200 rounded-xl focus:outline-indigo-500 leading-relaxed resize-none bg-slate-50/30"
            />
          </div>

          {/* Footer Metrics */}
          <div className="bg-slate-50 border-t border-slate-200 px-6 py-3 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> ATS Match Score: 88%
              </span>
              <span>Matched Keywords: {keySkills.split(',').length}</span>
            </div>
            <span>Ready for export</span>
          </div>
        </div>

      </main>
    </div>
  );
}
