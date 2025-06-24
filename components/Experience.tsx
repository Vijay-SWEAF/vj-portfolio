// Horizontal Scrollable Timeline
import { Briefcase, Code, Globe, BarChart } from 'lucide-react';

const experiences = [
  {
    year: '2018 – Present',
    role: 'Software Engineering & Delivery Specialist - IT / Cargo Readiness Officer (Sr)',
    company: 'CMA-CGM India Pvt. Ltd., Mumbai, IN',
    icon: <Briefcase />,
    summary: 'Managing IT solutions delivery for cargo flow optimization across the Subcontinent. Bridging operations with technical systems for efficiency.'
  },
  {
    year: '2010 – 2018',
    role: 'Senior Operation Analyst – Network Logistics Subcontinental',
    company: 'APL Agencies India Pvt. Ltd. (American President Lines, SG), Mumbai, IN',
    icon: <Globe />,
    summary: 'Streamlined regional logistics, reporting, and operations. Implemented automation workflows and supported management dashboards.'
  },
  {
    year: '2006 – 2010',
    role: 'Head – Operations & Logistics',
    company: 'Perma Container Lines & OPAL Asia Logistics Pvt. Ltd., Mumbai, IN',
    icon: <Code />,
    summary: 'Led depot planning, container logistics, and business coordination. Improved customer service and internal SOPs.'
  },
  {
    year: '1999 – 2006',
    role: 'Senior Executive – Depot Management',
    company: 'Surge Marine Services Pvt. Ltd., Navi Mumbai, IN',
    icon: <BarChart />,
    summary: 'Oversaw depot operations and inventory. Automated reporting processes using Excel VBA.'
  },
  {
    year: '1997 – 1999',
    role: 'Admin Assistant / Accountant / Designer',
    company: 'Small Scale Industries, Mumbai & Suburban Area, IN',
    icon: <Code />,
    summary: 'Handled admin, accounts, and graphic design projects across various MSMEs.'
  },
  {
    year: '1996 – 1997',
    role: 'Executive – Logistics',
    company: 'Neptune Orient Lines (NOL) India Pvt. Ltd., Mumbai, IN',
    icon: <Globe />,
    summary: 'Assisted with port logistics, reports, and shipping documentation.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
      <div className="overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-purple-100">
        <div className="flex gap-6 px-2 snap-x snap-mandatory">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="snap-start min-w-[300px] md:min-w-[350px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 flex-shrink-0"
            >
              <div className="flex items-center gap-2 text-purple-600 text-xl mb-2">
                {exp.icon} <span className="font-semibold">{exp.year}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">{exp.role}</h3>
              <p className="text-sm font-medium text-purple-600 mb-2">@ {exp.company}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-justify">{exp.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}