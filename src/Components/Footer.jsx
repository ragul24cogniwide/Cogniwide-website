import React from "react";
import cogniwidelogo from "../assets/CogniwideNewLogo.png"

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full bg-background text-gray-900 pt-12 pb-4  rounded-xl shadow-lg border border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top row: logo + about + socials */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between items-start mb-10">
          <div className="flex-1 min-w-[260px]">
            <div className="mb-2 flex items-center gap-4">
              {/* Replace src with your logo asset as needed */}
              <img src={cogniwidelogo} alt="Cogniwide Logo" className="h-10 w-auto" />
              {/* <span className="text-xl font-bold tracking-wide">COGNIWIDE</span> */}
            </div>
            <div className="mb-3">
              Cogniwide is an AI-based IT products and services company that provides high-performance product development, solutions, and operations services that focuses on Digital Transformation.
            </div>
            <div className="mb-3">
              We leverage new generation technologies like AI, RPA, Data Analytics, and Blockchain to build tailor-made digital Web and Mobile solutions and aid in the digital journey of our partners.
            </div>
            <div className="flex gap-4 mt-2 ">
              {/* Social icons */}
              <a  href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg className="w-6 h-6 text-blue-500 hover:text-purple transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5A2.59 2.59 0 1 1 2.4 6.09 2.59 2.59 0 0 1 4.98 3.5ZM3 8.49h4v12H3zm7.538 0h3.667v1.646h.05a4.02 4.02 0 0 1 3.61-1.98c3.861 0 4.577 2.542 4.577 5.846v6.486h-4v-5.75c0-1.374-.026-3.143-1.915-3.143-1.919 0-2.212 1.498-2.212 3.043v5.85h-4z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg className="w-6 h-6 text-blue-500 hover:text-purple transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.96 9.96 0 01-2.828.775 4.932 4.932 0 002.163-2.72c-.949.564-2.003.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.288 8.094 3.868 6.13 1.64 3.161c-.542.929-.85 2.008-.85 3.17 0 2.188 1.116 4.123 2.82 5.257A4.904 4.904 0 01.96 9.713v.062a4.92 4.92 0 003.946 4.828c-.495.135-1.012.207-1.548.207-.378 0-.747-.037-1.105-.106a4.936 4.936 0 004.604 3.417A9.868 9.868 0 010 19.54a13.936 13.936 0 007.548 2.212c9.142 0 14.307-7.72 14.307-14.418 0-.22-.005-.437-.014-.653A10.18 10.18 0 0024 4.557z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="w-6 h-6 text-blue-500 hover:text-purple transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.327v21.346C0 23.405.595 24 1.327 24h11.497v-9.294H9.691v-3.622h3.132V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.405 24 22.673V1.327C24 .595 23.406 0 22.675 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Middle/Right links */}
          <div className="flex-1 grid grid-cols-2 gap-12 min-w-[260px] mt-10 lg:mt-0 md:ml-46">
            {/* Solutions */}
            <div>
              <div className="font-semibold mb-3">Solutions</div>
              <ul className="space-y-1">
                <li><a href="/cognixcelerate" className="hover:text-purple transition">CogniXcellerate</a></li>
                <li><a href="/cogniloom" className="hover:text-purple transition">CogniLoom</a></li>
                <li><a href="cogniassist" className="hover:text-purple transition">CogniAssist</a></li>
                <li><a href="cogniagent" className="hover:text-purple transition">CogniAgent</a></li>
              </ul>
            </div>
            {/* Company */}
            <div>
              <div className="font-semibold mb-3">Company</div>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-purple transition">About Us</a></li>
                <li><a href="#" className="hover:text-purple transition">Leadership Team</a></li>
                <li><a href="#" className="hover:text-purple transition">Life at Cogniwide + Careers</a></li>
                <li><a href="#" className="hover:text-purple transition">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Branches/Addresses Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm mt-8 mb-6">
          <div>
            <div className="font-bold mb-2">Headquarters - Chennai</div>
            Cogniwide Technologies Private Limited,<br />
            3rd Floor, Alpha City, SSPDL Building,<br />
            Rajiv Gandhi Salai, Navalur, Chennai - 603103,<br />
            Tamilnadu, India.
          </div>
          <div>
            <div className="font-bold mb-2">Registered Office - Bengaluru</div>
            Cogniwide Technologies Private Limited,<br />
            1st Floor, SPD Plaza, 52, Jyoti Niwas College Rd,<br />
            Koramangala Industrial Layout, Koramangala,<br />
            Bengaluru, Karnataka, India 560034.
          </div>
          <div>
            <div className="font-bold mb-2">Registered Office - Madurai</div>
            Cogniwide Technologies Private Limited,<br />
            No.15, 4th Floor, Gokale Road, Chinna Chokkikulam,<br />
            Madurai - 625014, Tamilnadu, India.
          </div>
        </div>

        <hr className="my-6 border-gray-200" />

        {/* Bottom Row: year, rights, links */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-xs text-gray-500">
          <span>&copy; {currentYear} Cogniwide AI Platform. All Rights Reserved.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-purple transition">Privacy Policy</a>
            <a href="#" className="hover:text-purple transition">Terms of Service</a>
            <a href="#" className="hover:text-purple transition">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
