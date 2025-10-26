'use client';
import { useState } from 'react';

const projects = [

  {
  title: 'GRAPHICS DESIGN',
  description: 'Creative design concepts explored using Adobe tools — primarily for learning, internal tools, and select freelance requests. These works reflect my interest in visual communication and user-centric design.',
  tools: ['Illustrator', 'Photoshop', 'Adobe Express'],
  image: '/assets/projects/adobe.jpeg'
},
  {
  title: 'VIDEO & AUDIO',
  description: 'Exploring creative storytelling through video editing, animation, and sound design using Adobe tools. These projects are driven by personal interest, internal use, and selective freelance collaborations — focused on impactful visual and audio experiences.',
  tools: ['Premiere Pro', 'Audition', 'Animate'],
  image: '/assets/projects/flim.jpeg'
},
  {
  title: 'WEB DESIGN & DEVELOPMENT',
  description: 'A collection of personal and internal-use projects showcasing skills in responsive web design and full-stack application development. These works reflect continuous learning in UI/UX, frontend architecture, and backend integration — using modern frameworks and clean design practices.',
  tools: ['React', 'Next.js', '.NET Core', 'C#', 'Clouds', 'SQL', 'HTML', 'CSS', 'Tailwind CSS', 'Figma', 'Adobe XD'],
  image: '/assets/projects/web.jpeg'
},

  {
    title: 'XdEPOT',
    description: 'A multi-tenant empty container depot management solution with depot operation activities, EDI automation and dynamic billing engine.',
    tools: ['.NET Core', 'Azure SQL Server', 'EDIFACT', 'Cloud Services'],
    image: '/assets/projects/xdepot.jpeg'
  },
  
  {
  title: 'CORE',
  description: 'An automated reporting system delivering daily summaries and detailed trade support insights, including vessel utilization analysis, interactive dashboards, and advanced review tools.',
  tools: ['.NET', 'VBA', 'QlikSense', 'HTML', 'CSS'],
  image: '/assets/projects/core.jpg'
},

{
  title: 'COIN',
  description: 'A market research and analysis tool for the shipping industry, offering valuable insights into commodity trends, trade flows, and market dynamics.',
  tools: ['.NET Framework', 'SQL', 'HTML', 'CSS'],
  image: '/assets/projects/coin.jpg'
},


  {
  title: 'OCR',
  description: 'A comprehensive operational cost (actual v/s budget) analysis tool for pan-India terminals, enabling detailed tracking and evaluation of shipping-related expenses.',
  tools: ['Excel', 'VBA', 'SAP'],
  image: '/assets/projects/ocr.jpg'
},
  {
  title: 'OCG',
  description: 'A comprehensive dashboard for analyzing ongoing costs across marine operations, stevedoring, intermodal transport, logistics, feeder services, and more.',
  tools: ['Excel', 'VBA'],
  image: '/assets/projects/ocg.jpg'
},

  {
  title: 'PPG',
  description: 'A terminal productivity dashboard designed to analyze vessel turnaround times, performance metrics, and overall operational efficiency.',
  tools: ['Excel', 'VBA', 'Vessel Scheduler'],
  image: '/assets/projects/ppg.jpg'
},

{
title: 'OPERA',
description: 'A time-saving automation tool that generates terminal EDIs, DG Shipping and Shipped On Board (SOB) reports instantly with just a few clicks, reducing manual effort and improving accuracy.',
tools: ['Excel', 'VBA'],
image: '/assets/projects/opera.jpg'
   },

  {
    title: 'SuMo',
    description: 'A data-driven survey analysis project focused on container operations at Inland Container Depots (ICDs) for EXIM trade. It covers missing EDI moves, import detention, POD discrepancies, and more — with centralized cloud storage enabling multi-location access, performance tracking, and streamlined container survey workflows.',
    tools: ['VBA', 'Cloud MySQL', 'Excel'],
    image: '/assets/projects/sumo.png'
  },

  {
    title: 'COPS',
    description: 'Built a multi-module Excel VBA system (Project COPS) specifically for an airline security department, managing personnel data, secure item requests (validated via SharePoint), on-hand inventory tracking, and automated re-issue forecasting. This centralized admin functions and enhanced data integrity for security staff logistics.',
    tools: ['VBA', 'SharePoint', 'Excel'],
    image: '/assets/projects/cops.jpg'
  }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-20 text-center bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-fade">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 cursor-pointer backdrop-blur-sm bg-opacity-60 hover:scale-105 transition relative"
            onClick={() => setActiveProject(proj)}
          >
            <img src={proj.image} alt={proj.title} className="rounded mb-4 h-40 w-full object-cover" />
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{proj.description.slice(0, 60)}...</p>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg max-w-md w-full shadow-xl relative">
            <button onClick={() => setActiveProject(null)} className="absolute top-2 right-2 text-xl">×</button>
            <img src={activeProject.image} alt={activeProject.title} className="rounded mb-4 h-48 w-full object-cover" />
            <h3 className="text-2xl font-bold mb-2">{activeProject.title}</h3>
            <p className="mb-4">{activeProject.description}</p>
            <div className="flex flex-wrap gap-2">
              {activeProject.tools.map((tool, i) => (
                <span key={i} className="px-3 py-1 text-xs bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-white rounded-full">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}