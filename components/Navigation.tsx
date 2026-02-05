'use client'

import React from 'react'
import { useState } from 'react'
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChartBarIcon,
  CogIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  RocketLaunchIcon,
  CloudIcon,
  PresentationChartBarIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
  BeakerIcon,
  CursorArrowRaysIcon,
  ComputerDesktopIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  HeartIcon,
  ShoppingBagIcon,
  TruckIcon,
  SignalIcon,
  BriefcaseIcon,
  LifebuoyIcon,
  AcademicCapIcon,
  WrenchIcon
} from '@heroicons/react/24/outline'

import Link from 'next/link'

interface NavigationItem {
  name: string
  href: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  badge?: string
  image?: string
  features?: string[]
  useCases?: string[]
  impact?: string[]
  color?: string
}

interface NavigationGroup {
  title: string
  items: NavigationItem[]
}

interface NavigationSection {
  title: string
  icon: any
  color: string
  groups: NavigationGroup[]
  featured?: NavigationItem
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null)

  // Individual navigation items with proper SVG icons
  const navigationItems = [
    { name: 'Products', href: '/', icon: CogIcon, hasDropdown: true },
    { name: 'Solutions', href: '/solutions', icon: BoltIcon, hasDropdown: true },
    { name: 'Services', href: '/', icon: UserGroupIcon, hasDropdown: true },
    { name: 'Industries', href: '/', icon: BuildingOfficeIcon, hasDropdown: true },
    { name: 'About', href: '/about', icon: BuildingOffice2Icon, hasDropdown: true }
  ]

  const dropdownContent: Record<string, any> = {
    'Products': {
      layout: 'mega-menu',
      featured: {
        title: 'AI Across the SDLC',
        href: '/products',
        icon: BoltIcon
      },
      products: [
        {
          name: 'CogniAssist',
          href: '/products/cogniassist',
          description: 'Agentic AI Platform',
          icon: RocketLaunchIcon,
          badge: 'POPULAR',
          features: [
            'Continuous Delivery & GitOps',
            'Continuous Integration',
            'Internal Developer Portal',
            'Infrastructure as Code Management'
          ]
        },
        {
          name: 'CogniLoom',
          href: '/products/cogniloom',
          description: 'AI-Powered DevSecOps Orchestration',
          icon: CloudIcon,
          badge: 'POPULAR',
          features: [
            'Feature Management & Experimentation',
            'Chaos Engineering',
            'AI Test Automation',
            'AI SRE'
          ]
        },
        {
          name: 'CogniAura',
          href: '/products/cogniaura',
          description: 'Analytics & BI Platform',
          icon: PresentationChartBarIcon,
          features: [
            'Automated Data Visualizations',
            'Predictive Trend Analysis',
            'Natural Language Querying (NLQ)',
            'Custom Executive Dashboards'
          ]
        },
        {
          name: 'CogniNova',
          href: '/products/cogninova',
          description: 'AI-Powered School ERP and LMS',
          icon: AcademicCapIcon,
          features: [
            'Student Information System (SIS)',
            'AI-Assisted Grading & Feedback',
            'Curriculum & Lesson Planning',
            'Parent-Teacher Communication Portal'
          ]
        },
        {
          name: 'CogniForge',
          href: '/products/cogniforge',
          description: 'ERP for Manufacturing Companies',
          icon: WrenchIcon,
          features: [
            'Production Planning',
            'Inventory Management',
            'Quality Control',
            'Supply Chain Optimization'
          ]
        }
      ]
    },
    'Solutions': {
      layout: 'single-column',
      items: [
        {
          name: 'CogniVibe',
          href: '/solutions/cognivibe',
          description: 'AI powered SDLC framework',
          icon: BoltIcon,
          color: 'from-indigo-600 to-purple-600'
        },
        {
          name: 'CogniTest',
          href: '/solutions/cognitest',
          description: 'AI powered test automation',
          icon: BeakerIcon,
          color: 'from-emerald-600 to-teal-600'
        },
        {
          name: 'CogniOps',
          href: '/solutions/cogniops',
          description: 'DevOps automation',
          icon: WrenchScrewdriverIcon,
          color: 'from-orange-600 to-red-600'
        }
      ]
    },
    'Services': {
      layout: 'two-column',
      leftItems: [
        { name: 'AI Consulting', href: '/services/ai-consulting', description: 'Strategic AI implementation', icon: CursorArrowRaysIcon, color: 'from-purple-600 to-indigo-600' },
        { name: 'AI Development', href: '/services/ai-development', description: 'Custom AI solutions', icon: ComputerDesktopIcon, color: 'from-sky-600 to-blue-600' },
        { name: 'Data Engineering', href: '/services/data-engineering', description: 'Data pipeline solutions', icon: ChartBarIcon, color: 'from-teal-600 to-emerald-600' }
      ],
      rightItems: [
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', description: 'Cloud transformation', icon: CloudIcon, color: 'from-orange-600 to-red-600' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security solutions', icon: ShieldCheckIcon, color: 'from-purple-600 to-red-700' }
      ]
    },
    'Industries': {
      layout: 'two-column',
      leftItems: [
        {
          name: 'Banking & Finance',
          href: '/industries/banking',
          description: 'Financial AI solutions',
          icon: BanknotesIcon,
          color: 'from-blue-600 to-indigo-600'
        },
        {
          name: 'Healthcare',
          href: '/industries/healthcare',
          description: 'Healthcare automation',
          icon: HeartIcon,
          color: 'from-rose-600 to-pink-600'
        },
        {
          name: 'Retail',
          href: '/industries/retail',
          description: 'Retail intelligence',
          icon: ShoppingBagIcon,
          color: 'from-amber-600 to-orange-600'
        },
        {
          name: 'Education',
          href: '/industries/education',
          description: 'AI-powered learning solutions',
          icon: AcademicCapIcon,
          color: 'from-indigo-600 to-purple-600'
        }
      ],
      rightItems: [
        {
          name: 'Insurance',
          href: '/industries/insurance',
          description: 'Process automation',
          icon: ShieldCheckIcon,
          color: 'from-teal-600 to-emerald-600'
        },
        {
          name: 'Manufacturing',
          href: '/industries/logistics',
          description: 'Supply chain optimization',
          icon: TruckIcon,
          color: 'from-cyan-600 to-sky-600'
        },
        {
          name: 'Telecommunications',
          href: '/industries/telecom',
          description: 'Network optimization',
          icon: SignalIcon,
          color: 'from-violet-600 to-fuchsia-600'
        }
      ]
    },
    'About': {
      layout: 'two-column',
      leftItems: [
        { name: 'About us', href: '/about', description: 'Our story and mission', icon: BuildingOffice2Icon, color: 'from-blue-600 to-indigo-600' },
        { name: 'Life at Cogniwide', href: '/about/life-at-cogniwide', description: 'Culture and team', icon: LifebuoyIcon, color: 'from-green-500 to-teal-500' }
      ],
      rightItems: [
        { name: 'Careers', href: '/careers', description: 'Join our team', icon: BriefcaseIcon, color: 'from-rose-600 to-pink-600' },
        {name:'Blog', href:'/blog', description:'New Ideas, Reflections, Coding Hacks, and more', icon:PresentationChartBarIcon, color:'from-amber-600 to-orange-600'}
      ]
    }
  }

  const handleDropdownToggle = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key)
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

  const handleMouseEnter = (itemName: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout)
      setCloseTimeout(null)
    }
    setActiveDropdown(itemName)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 200) // 200ms delay before closing
    setCloseTimeout(timeout)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/80 backdrop-blur-lg border-b border-white/20 opacity-95">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gray-200/40 rounded-lg blur-sm -z-10 group-hover:blur-md transition-all duration-300" suppressHydrationWarning></div>
                <img
                  src="/logo-light.png"
                  alt="Cogniwide"
                  className="h-9 w-auto group-hover:scale-105 transition-all duration-300 relative z-10 group-hover:brightness-110"
                  suppressHydrationWarning
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Compact */}
          <div className="hidden lg:block flex-1 mx-auto">
            <div className="flex items-center justify-center space-x-8">
              {navigationItems.map((item) => {
                const content = dropdownContent[item.name];
                const isTwoColumn = content.layout === 'two-column';

                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="flex items-center space-x-1 px-2.5 py-1.5 text-sm font-bold text-black hover:text-gray-700 transition-all duration-300 rounded-lg hover:bg-gray-100/50">
                      <span>{item.name}</span>
                      <ChevronDownIcon className="w-3 h-3" />
                    </button>

                    {activeDropdown === item.name && content.layout === 'mega-menu' && (
                      <div className="fixed left-0 right-0 top-16 pt-2 z-50 flex justify-center">
                        <div className="w-[1280px]">
                          <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200/50 overflow-hidden">
                            {/* Mega Menu Layout */}
                            <div>
                              {/* Featured Banner */}
                              {content.featured && (
                                <Link
                                  href={content.featured.href}
                                  className="block bg-brand-blue-dark text-white px-12 py-3 hover:bg-brand-blue-dark transition-all duration-300 group"
                                  onClick={closeDropdown}
                                >
                                  <div className="flex items-center justify-center space-x-3">
                                    <span className="text-white font-medium text-sm hover:text-white flex items-center space-x-2">
                                      <span>✨</span>
                                      <span>{content.featured.title}</span>
                                      <span>✨</span>
                                    </span>
                                    <div className="relative w-5 h-5 transition-transform duration-500 group-hover:translate-x-2">
                                      <img
                                        src="/icon.png"
                                        alt="AI Icon"
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                          console.log('Icon failed to load');
                                          e.currentTarget.style.display = 'none';
                                        }}
                                      />
                                    </div>
                                  </div>
                                </Link>
                              )}

                              {/* Products Grid - 5 Columns */}
                              <div className="grid grid-cols-5 gap-8 px-12 py-8 bg-white/90">
                                {content.products?.map((product: any, idx: number) => (
                                  <div key={product.name} className={`${idx > 0 ? 'border-l border-gray-200 pl-8' : ''}`}>
                                    {/* Product Header */}
                                    <div className="mb-4">
                                      <Link
                                        href={product.href}
                                        className="block group text-white"
                                        onClick={closeDropdown}
                                      >
                                        <div className="flex items-center space-x-2 mb-3">
                                          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white bg-brand-blue flex-shrink-0 shadow-sm">
                                            {React.createElement(product.icon, { className: "w-5 h-5" })}
                                          </div>
                                          {product.badge && (
                                            <span className="px-2 py-0.5 text-[10px] font-semibold rounded bg-brand-yellow text-brand-dark-grey">
                                              {product.badge}
                                            </span>
                                          )}
                                        </div>
                                        <h3 className="text-gray-900 font-semibold text-sm mb-2 group-hover:text-brand-blue transition-colors duration-200">
                                          {product.name}
                                        </h3>
                                        <p className="text-gray-600 text-xs leading-snug min-h-[32px]">
                                          {product.description}
                                        </p>
                                      </Link>
                                    </div>

                                    {/* Feature List */}
                                    <div className="space-y-2">
                                      {product.features?.map((feature: string) => (
                                        <div key={feature} className="flex items-start space-x-2 group cursor-pointer">
                                          <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 flex-shrink-0 group-hover:bg-brand-yellow transition-colors duration-200"></div>
                                          <span className="text-gray-600 text-xs leading-snug group-hover:text-gray-900 transition-colors duration-200">
                                            {feature}
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeDropdown === item.name && content.layout !== 'mega-menu' && (
                      <div className={`absolute top-14 pt-2 z-50 ${isTwoColumn ? 'left-1/2 -translate-x-1/2 w-[530px]' : 'left-1/2 -translate-x-1/2 w-80'}`}>
                        <div className="bg-white/90  backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200/50 overflow-hidden">
                          {isTwoColumn ? (
                            <div className="p-3 bg-white/90">
                              <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1.5">
                                  {content.leftItems?.map((subItem: any) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="dropdown-item flex items-center space-x-3 p-2.5 rounded-lg hover:bg-gray-100/70 transition-all duration-200 group border border-transparent hover:border-gray-200"
                                      onClick={closeDropdown}
                                    >
                                      <div suppressHydrationWarning className={"w-7 h-7 rounded-md flex items-center justify-center transition-all duration-200 " + (subItem.color ? ("bg-gradient-to-br " + subItem.color) : "bg-gray-200") + " group-hover:brightness-110"}>
                                        {React.createElement(subItem.icon, { className: "w-4 h-4 text-white drop-shadow-sm" })}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center space-x-2">
                                          <div className="font-medium text-sm text-gray-800 group-hover:text-gray-900 transition-colors duration-200 truncate">
                                            {subItem.name}
                                          </div>
                                          {subItem.badge && (
                                            <span className="px-2 py-0.5 text-xs font-medium rounded bg-gray-200 text-gray-800">
                                              {subItem.badge}
                                            </span>
                                          )}
                                        </div>
                                        <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-200 leading-relaxed">
                                          {subItem.description}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                                <div className="space-y-1.5 border-l border-gray-200 pl-3">
                                  {content.rightItems?.map((subItem: any) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="dropdown-item flex items-center space-x-3 p-2.5 rounded-lg hover:bg-gray-100/70 transition-all duration-200 group border border-transparent hover:border-gray-200"
                                      onClick={closeDropdown}
                                    >
                                      <div className="w-7 h-7 rounded-md bg-brand-blue flex items-center justify-center transition-all duration-200">
                                        {React.createElement(subItem.icon, { className: "w-4 h-4 text-white" })}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center space-x-2">
                                          <div className="font-medium text-sm text-gray-800 group-hover:text-gray-900 transition-colors duration-200 truncate">
                                            {subItem.name}
                                          </div>
                                          {subItem.badge && (
                                            <span className="px-2 py-0.5 text-xs font-medium rounded bg-gray-200 text-gray-800">
                                              {subItem.badge}
                                            </span>
                                          )}
                                        </div>
                                        <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-200 leading-relaxed">
                                          {subItem.description}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="p-3 bg-white/90">
                              <div className="space-y-1.5">
                                {content.items?.map((subItem: any) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="dropdown-item flex items-center space-x-3 p-2.5 rounded-lg hover:bg-gray-100/70 transition-all duration-200 group border border-transparent hover:border-gray-200"
                                    onClick={closeDropdown}
                                  >
                                    <div className="w-7 h-7 rounded-md bg-brand-blue flex items-center justify-center transition-all duration-200">
                                      {React.createElement(subItem.icon, { className: "w-4 h-4 text-white" })}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center space-x-2">
                                        <div className="font-medium text-sm text-gray-800 group-hover:text-gray-900 transition-colors duration-200 truncate">
                                          {subItem.name}
                                        </div>
                                        {subItem.badge && (
                                          <span className="px-2 py-0.5 text-xs font-medium rounded bg-gray-200 text-gray-800">
                                            {subItem.badge}
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-200 leading-relaxed">
                                        {subItem.description}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )
              }
              )}
            </div>
          </div>

          {/* Right Side - CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/contact">
                <button className="bg-brand-blue text-white px-4 py-2 rounded-lg font-medium text-sm hover:text-black hover:bg-brand-blue-light transition-all duration-200">
                  <span>Contact Us</span>
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="block lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 text-gray-900 hover:text-gray-700 hover:bg-gray-100/50 hover:shadow-md transition-all duration-300 rounded-lg group z-50 relative bg-white/90 backdrop-blur-sm border-2 border-gray-300 shadow-sm"
              >
                <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                  {isOpen ? (
                    <XMarkIcon className="h-7 w-7 text-gray-900" />
                  ) : (
                    <Bars3Icon className="h-7 w-7 text-gray-900" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="block lg:hidden  border-t border-gray-200/50 bg-white/95 backdrop-blur-xl shadow-2xl rounded-b-xl overflow-hidden">
            <div className="px-3 py-3 space-y-1">
              {navigationItems.map((item, index) => (
                <div className="text-gray-800" key={item.name}>
                  {item.hasDropdown ? (
                    <div className="space-y-1">
                      <button
                        className={`flex items-center justify-between w-full text-left p-3 rounded-lg transition-all duration-300 group ${activeDropdown === item.name
                          ? 'bg-brand-blue text-white shadow-md'
                          : 'hover:bg-brand-blue-light hover:text-gray-900 hover:shadow-sm'
                          }`}
                        onClick={() => handleDropdownToggle(item.name)}
                      >
                        <span className="font-medium text-sm">{item.name}</span>
                        <ChevronDownIcon className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                      </button>

                      {activeDropdown === item.name && (
                        <div className="ml-3 space-y-1 overflow-hidden">
                          {/* Special handling for Products dropdown */}
                          {item.name === 'Products' && dropdownContent[item.name]?.products ? (
                            dropdownContent[item.name].products.map((product: any) => (
                              <Link
                                key={product.name}
                                href={product.href}
                                className="flex items-center space-x-3 p-3 rounded-lg bg-white hover:bg-gray-50 transition-all duration-200 group border border-gray-200"
                                onClick={() => setIsOpen(false)}
                              >
                                <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center flex-shrink-0">
                                  {React.createElement(product.icon, { className: "w-4 h-4 text-white" })}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2">
                                    <span className="font-semibold text-sm text-gray-900 truncate">
                                      {product.name}
                                    </span>
                                    {product.badge && (
                                      <span className="px-2 py-0.5 text-xs font-bold rounded bg-brand-yellow text-brand-dark-grey flex-shrink-0">
                                        {product.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-gray-600 leading-tight">
                                    {product.description}
                                  </p>
                                </div>
                              </Link>
                            ))
                          ) : (
                            /* Regular handling for other dropdowns */
                            (dropdownContent[item.name]?.items || (dropdownContent[item.name]?.leftItems || []).concat(dropdownContent[item.name]?.rightItems || [])).map((subItem: any) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="flex items-start space-x-3 p-3 rounded-lg bg-white hover:bg-gray-50 transition-all duration-200 group border border-gray-200"
                                onClick={() => setIsOpen(false)}
                              >
                                <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center transition-all duration-200 flex-shrink-0">
                                  {React.createElement(subItem.icon, { className: "w-4 h-4 text-white" })}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2 mb-1">
                                    <span className="font-semibold text-sm text-gray-900 truncate">
                                      {subItem.name}
                                    </span>
                                    {subItem.badge && (
                                      <span className="px-2 py-0.5 text-xs font-bold rounded bg-gray-200 text-gray-800 flex-shrink-0">
                                        {subItem.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-gray-600 leading-relaxed">
                                    {subItem.description}
                                  </p>
                                </div>
                              </Link>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2 px-3 rounded-lg hover:bg-gray-600/40 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="font-medium text-sm text-gray-100">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}

              {/* CTA */}
              <div className="border-t border-gray-600 pt-3 mt-3">
                <Link
                  href="/contact"
                  className="block w-full text-center py-3 px-4 bg-brand-blue text-white rounded-lg font-medium hover:bg-brand-blue-dark transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation