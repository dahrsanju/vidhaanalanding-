"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import HeaderLanding from "@/components/header-landing"
import {
  BookOpen,
  Users,
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
  ArrowDown,
  Award,
  Target,
  Briefcase,
  Globe,
  Building,
  TrendingUp,
  MessageCircle,
  FileText,
  Search,
  Shield,
  UserPlus,
  Upload,
  Brain,
  FolderOpen,
  Zap,
} from "lucide-react"

export default function LandingPage() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [contactErrors, setContactErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [activeHighlight, setActiveHighlight] = useState("legal-chatbot")
  const [expandedCase, setExpandedCase] = useState<number | null>(null)
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)


  const validateContactForm = () => {
    const errors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    }

    // Name validation
    if (!contactForm.name.trim()) {
      errors.name = "Name is required"
    }

    // Email validation
    if (!contactForm.email.trim()) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(contactForm.email)) {
      errors.email = "Please enter a valid email address"
    }

    // Phone validation
    if (!contactForm.phone.trim()) {
      errors.phone = "Phone number is required"
    } else if (!/^\d+$/.test(contactForm.phone)) {
      errors.phone = "Phone number can only contain digits"
    } else if (contactForm.phone.length > 20) {
      errors.phone = "Phone number cannot exceed 20 digits"
    }

    // Message validation
    if (!contactForm.message.trim()) {
      errors.message = "Message is required"
    } else if (contactForm.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long"
    }

    setContactErrors(errors)
    return !Object.values(errors).some(error => error !== "")
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateContactForm()) {
      return
    }
    
    console.log("Contact form submitted:", contactForm)
    setIsContactOpen(false)
    window.location.href = "/home"
  }

  const handleInputChange = (field: string, value: string) => {
    let processedValue = value
    
    // Special handling for phone field - only allow digits and limit to 20 characters
    if (field === "phone") {
      processedValue = value.replace(/\D/g, '').slice(0, 20)
    }
    
    setContactForm({ ...contactForm, [field]: processedValue })
    // Clear error when user starts typing
    if (contactErrors[field as keyof typeof contactErrors]) {
      setContactErrors({ ...contactErrors, [field]: "" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <HeaderLanding />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden px-4 sm:px-6 lg:px-8" style={{ minHeight: '100vh' }}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/backgroundimage.jpg')] bg-cover bg-center bg-no-repeat"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full py-8 sm:py-12 lg:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6 sm:space-y-8 pb-4 sm:pb-8 text-center lg:text-left">
              <div className="relative">
                <div className="space-y-6 sm:space-y-8">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-slide-up whitespace-nowrap font-inter px-4 lg:px-0 lg:ml-8">
                    Vidhaana AI Lawyer!
                  </h1>

                  <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-delay font-inter px-4 lg:px-0 lg:ml-12 text-justify sm:text-left" style={{ 
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    lineHeight: '1.5'
                  }}>
                    Empower your firm with AI : Quick, efficient, and secure legal support <span style={{ color: 'yellow' }}>24x7</span> Draft documents, get legal insights, and manage cases effortlessly.
                  </p>
                  
                  {/* Statistics Section */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8 animate-fade-in-delay-3 px-4 lg:px-0 lg:ml-12">
                    {/* Top Line */}
                    <div className="col-span-3 h-px bg-white opacity-60 mt-8 sm:mt-12"></div>
                    
                    {[
                      { icon: "Building", label: "10,000+", description: "Businesses Served" },
                      { icon: "FileText", label: "50M+", description: "Documents Analyzed" },
                      { icon: "Target", label: "95%", description: "Accuracy Rate" }
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="w-6 h-6 mx-auto mb-2 sm:mb-3 flex items-center justify-center bg-black border-2 border-black rounded-full">
                          {stat.icon === "Building" && <Building className="w-3 h-3 sm:w-4 sm:h-4 text-white" />}
                          {stat.icon === "FileText" && <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-white" />}
                          {stat.icon === "Target" && <Target className="w-3 h-3 sm:w-4 sm:h-4 text-white" />}
                        </div>
                        <div className="text-sm sm:text-lg lg:text-2xl font-bold text-white mb-1 font-inter">{stat.label}</div>
                        <div className="text-xs sm:text-sm text-gray-400 font-inter">{stat.description}</div>
                        </div>
                    ))}
                    
                    {/* Bottom Line */}
                    <div className="col-span-3 h-px bg-white opacity-60 mt-2 sm:mt-4"></div>
                    </div>
                    
                  <div className="animate-fade-in-delay-2 pt-6 sm:pt-8 px-4 lg:px-0 lg:ml-12">
                    <Button className="bg-white text-black hover:bg-gray-100 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-base sm:text-lg lg:text-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 rounded-xl w-auto">
                      Start Free Trial
                    </Button>
                  </div>

                  {/* Mobile Contact Form - Below Start Free Trial Button */}
                  <div className="lg:hidden w-full max-w-md mx-auto mt-6 px-4 lg:px-0 lg:ml-12">
                    <div className="relative bg-white rounded-xl p-4 shadow-2xl border border-gray-200 overflow-hidden">
                      <div className="relative z-10">
                        <div className="text-left sm:text-center mb-4">
                          <h3 className="text-sm font-bold text-black mb-2">
                            Send Us a Message
                          </h3>
                        </div>
                            
                        <form onSubmit={handleContactSubmit} className="space-y-3">
                          <div>
                            <Label htmlFor="mobile-name" className="text-black font-medium text-xs text-left block">Full Name *</Label>
                                <Input
                                  id="mobile-name"
                                  value={contactForm.name}
                                  onChange={(e) => handleInputChange("name", e.target.value)}
                                  className={`mt-1 border transition-all duration-300 bg-white text-black placeholder-gray-500 text-xs py-2 ${
                                    contactErrors.name ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" : "border-gray-300 focus:border-black focus:ring-1 focus:ring-black/20"
                                  }`}
                                  placeholder="Enter your full name"
                                />
                                {contactErrors.name && (
                                  <p className="text-red-500 text-xs mt-1">{contactErrors.name}</p>
                                )}
                              </div>
                          <div>
                            <Label htmlFor="mobile-email" className="text-black font-medium text-xs text-left block">Email Address *</Label>
                                <Input
                                  id="mobile-email"
                                  type="email"
                                  value={contactForm.email}
                                  onChange={(e) => handleInputChange("email", e.target.value)}
                                  className={`mt-1 border transition-all duration-300 bg-white text-black placeholder-gray-500 text-xs py-2 ${
                                    contactErrors.email ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" : "border-gray-300 focus:border-black focus:ring-1 focus:ring-black/20"
                                  }`}
                                  placeholder="Enter your email"
                                />
                                {contactErrors.email && (
                                  <p className="text-red-500 text-xs mt-1">{contactErrors.email}</p>
                                )}
                              </div>
                          <div>
                            <Label htmlFor="mobile-phone" className="text-black font-medium text-xs text-left block">Phone Number *</Label>
                                <Input
                                  id="mobile-phone"
                                  type="tel"
                                  value={contactForm.phone}
                                  onChange={(e) => handleInputChange("phone", e.target.value)}
                                  className={`mt-1 border transition-all duration-300 bg-white text-black placeholder-gray-500 text-xs py-2 ${
                                    contactErrors.phone ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" : "border-gray-300 focus:border-black focus:ring-1 focus:ring-black/20"
                                  }`}
                                  placeholder="Enter your phone number"
                                />
                                <div className="flex justify-between items-center mt-1">
                                  {contactErrors.phone && (
                                    <p className="text-red-500 text-xs">{contactErrors.phone}</p>
                                  )}
                                  <p className={`text-xs ml-auto ${contactForm.phone.length > 0 ? 'text-gray-400' : 'text-transparent'}`}>
                                    {contactForm.phone.length}/20 digits
                                  </p>
                                </div>
                              </div>
                          <div>
                            <Label htmlFor="mobile-message" className="text-black font-medium text-xs text-left block">Message *</Label>
                                <Textarea
                                  id="mobile-message"
                                  value={contactForm.message}
                                  onChange={(e) => handleInputChange("message", e.target.value)}
                                  rows={3}
                                  className={`mt-1 border transition-all duration-300 bg-white text-black placeholder-gray-500 text-xs py-2 resize-none ${
                                    contactErrors.message ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" : "border-gray-300 focus:border-black focus:ring-1 focus:ring-black/20"
                                  }`}
                                  placeholder="Please describe your legal question or concern in detail..."
                                />
                                <div className="flex justify-between items-center mt-1">
                                  {contactErrors.message && (
                                    <p className="text-red-500 text-xs">{contactErrors.message}</p>
                                  )}
                                  <p className={`text-xs ml-auto ${contactForm.message.length < 10 ? 'text-gray-400' : 'text-green-600'}`}>
                                    {contactForm.message.length}/10 characters
                                  </p>
                                </div>
                              </div>
                              <Button 
                                type="submit" 
                            className="w-full bg-black text-white hover:bg-gray-800 py-2 text-xs font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                              >
                            Send Message
                              </Button>
                            </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Empty space */}
            <div className="relative hidden lg:block">
              {/* This space is intentionally left empty for the overlay contact form */}
            </div>
          </div>
        </div>

        {/* Contact Form Overlay - Responsive positioning */}
        <div className="absolute top-16 sm:top-20 lg:top-24 right-4 sm:right-8 lg:right-32 z-20 w-80 sm:w-96 hidden lg:block">
          <div className="relative bg-white rounded-xl p-3 shadow-2xl border border-gray-200 overflow-hidden">

            
                <div className="relative z-10">
              <div className="text-center mb-2">
                <h3 className="text-xs sm:text-sm font-bold text-black mb-1">
                  Send Us a Message
                </h3>
                  </div>
                  
              <form onSubmit={handleContactSubmit} className="space-y-1.5">
                <div>
                  <Label htmlFor="name" className="text-black font-medium text-xs">Full Name *</Label>
                      <Input
                        id="name"
                        value={contactForm.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className={`mt-1 border transition-all duration-300 bg-white text-black placeholder-gray-500 text-xs py-0.5 ${
                          contactErrors.name ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" : "border-gray-300 focus:border-black focus:ring-1 focus:ring-black/20"
                        }`}
                        placeholder="Enter your full name"
                      />
                      {contactErrors.name && (
                        <p className="text-red-500 text-xs mt-1">{contactErrors.name}</p>
                      )}
                    </div>
                <div>
                  <Label htmlFor="email" className="text-black font-medium text-xs">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={`mt-1 border transition-all duration-300 bg-white text-black placeholder-gray-500 text-xs py-0.5 ${
                          contactErrors.email ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" : "border-gray-300 focus:border-black focus:ring-1 focus:ring-black/20"
                        }`}
                        placeholder="Enter your email"
                      />
                      {contactErrors.email && (
                        <p className="text-red-500 text-xs mt-1">{contactErrors.email}</p>
                      )}
                    </div>
                <div>
                  <Label htmlFor="phone" className="text-black font-medium text-xs">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={contactForm.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className={`mt-1 border transition-all duration-300 bg-white text-black placeholder-gray-500 text-xs py-0.5 ${
                          contactErrors.phone ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" : "border-gray-300 focus:border-black focus:ring-1 focus:ring-black/20"
                        }`}
                        placeholder="Enter your phone number"
                      />
                      <div className="flex justify-between items-center mt-1">
                        {contactErrors.phone && (
                          <p className="text-red-500 text-xs">{contactErrors.phone}</p>
                        )}
                        <p className={`text-xs ml-auto ${contactForm.phone.length > 0 ? 'text-gray-400' : 'text-transparent'}`}>
                          {contactForm.phone.length}/20 digits
                        </p>
                      </div>
                    </div>
                <div>
                  <Label htmlFor="message" className="text-black font-medium text-xs">Message *</Label>
                      <Textarea
                        id="message"
                        value={contactForm.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        rows={1}
                        className={`mt-1 border transition-all duration-300 bg-white text-black placeholder-gray-500 text-xs py-0.5 resize-none ${
                          contactErrors.message ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/20" : "border-gray-300 focus:border-black focus:ring-1 focus:ring-black/20"
                        }`}
                        placeholder="Please describe your legal question or concern in detail..."
                      />
                      <div className="flex justify-between items-center mt-1">
                        {contactErrors.message && (
                          <p className="text-red-500 text-xs">{contactErrors.message}</p>
                        )}
                        <p className={`text-xs ml-auto ${contactForm.message.length < 10 ? 'text-gray-400' : 'text-green-600'}`}>
                          {contactForm.message.length}/10 characters
                        </p>
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                  className="w-full bg-black text-white hover:bg-gray-800 py-0.5 text-xs font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                  Send Message
                    </Button>
                  </form>
            </div>
          </div>
        </div>


      </section>

      {/* Who Can Use Vidhaana's AI Legal Assistant Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16">
            {/* Left Column - Title */}
            <div className="flex-1 text-center lg:text-left mt-4 sm:mt-8 lg:ml-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black leading-tight max-w-md mx-auto lg:mx-0 font-inter">
                Who Can Use Vidhaana's AI Legal Assistant?
              </h2>
                  </div>

            {/* Right Column - Cards */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-3 sm:gap-4 lg:gap-6 lg:mr-8">
              {[
                {
                  image: "/images/desk image.jpg",
                  title: "Legal Practices",
                  description: "Law firms and individual practitioners"
                },
                {
                  image: "/images/legaleducator.jpg",
                  title: "Legal Educators", 
                  description: "Law schools and training institutions"
                },
                {
                  image: "/images/legalcorporate.jpg",
                  title: "Corporate Legal Teams",
                  description: "In-house legal departments"
                },
                {
                  image: "/images/legal consultant.jpg",
                  title: "Legal Consultants",
                  description: "Independent legal advisors"
                },
                {
                  image: "/images/legalresearch.jpg",
                  title: "Legal Researchers",
                  description: "Legal research professionals"
                }
            ].map((item, index) => (
                <div key={index} className="bg-white border-2 border-black rounded-xl p-2 sm:p-3 text-center shadow-lg hover:shadow-xl transition-all duration-300 w-24 sm:w-28 lg:w-32 h-36 sm:h-40 lg:h-48 flex flex-col animate-slide-in-from-right group cursor-pointer" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="w-full h-16 sm:h-20 lg:h-24 mb-2 sm:mb-3 rounded-2xl overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
                      />
                </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="text-xs sm:text-sm lg:text-base font-bold text-black leading-tight">
                        {index === 0 && (
                          <>
                            <span className="block text-sm sm:text-base">Legal</span>
                            <span className="block text-xs sm:text-sm">Practices</span>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <span className="block text-sm sm:text-base">Legal</span>
                            <span className="block text-xs sm:text-sm">Educators</span>
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <span className="block text-sm sm:text-base">Corporate</span>
                            <span className="block text-xs sm:text-sm">Legal Teams</span>
                          </>
                        )}
                        {index === 3 && (
                          <>
                            <span className="block text-sm sm:text-base">Legal</span>
                            <span className="block text-xs sm:text-sm">Consultants</span>
                          </>
                        )}
                        {index === 4 && (
                          <>
                            <span className="block text-sm sm:text-base">Legal</span>
                            <span className="block text-xs sm:text-sm">Researchers</span>
                          </>
                        )}
                      </h3>
              </div>
            </div>
          </div>
              ))}
        </div>
          </div>
        </div>
        
        {/* Paragraph Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-black leading-relaxed">
            <p className="text-sm sm:text-base max-w-none text-justify sm:text-left">
              Vidhaana's AI Legal Assistant offers valuable benefits across various legal professions. For law firms, it streamlines document review, research, and case management, saving time and improving efficiency. Lawyers, whether solo practitioners or part of a team, can leverage Vidhaana to quickly draft legal documents, conduct in-depth legal research, and access relevant case laws, reducing manual effort. Corporate legal teams benefit from Vidhaana's automation of contract drafting, compliance checks, and internal legal workflows, enhancing productivity and reducing operational costs. Legal consultants can offer clients AI-powered solutions for case analysis, document automation, and legal research, giving them a competitive edge. For legal researchers, Vidhaana accelerates the process of finding precedents, statutes, and case law, empowering them to deliver more comprehensive and accurate findings. In each of these professions, Vidhaana enhances legal operations by reducing human error, increasing speed, and improving overall efficiency, making it an essential tool for modern legal practices.
            </p>
            </div>
        </div>

        {/* Vidhaana Legal AI Highlights Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
              Key Features
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore what this advanced legal AI platform is powered with.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Left Column - Buttons */}
            <div className="lg:w-1/3 space-y-3 sm:space-y-4">
              {[
                {
                  id: "legal-chatbot",
                  title: "Legal Chatbot 24x7",
                  description: "Get instant legal assistance 24/7 with our AI-powered Legal Chatbot. Access instant answers, document processing, and case assistance anytime. Experience high accuracy, time-saving efficiency, and comprehensive legal support."
                },
                {
                  id: "document-generator",
                  title: "Document Generator",
                  description: "Generate professional legal documents instantly with our AI-powered document generator. Create contracts, agreements, and legal forms with accuracy and speed."
                },
                {
                  id: "case-summary",
                  title: "Case Summary from PDFs",
                  description: "Extract key information and generate comprehensive case summaries from PDF documents. Our AI analyzes legal documents to provide quick insights and summaries."
                },
                {
                  id: "multi-jurisdiction",
                  title: "Multi-jurisdiction Support",
                  description: "Access legal information and support across multiple jurisdictions. Get comprehensive coverage of different legal systems and regulations."
                },
                {
                  id: "secure-confidential",
                  title: "100% Secure & Confidential",
                  description: "Your legal data is protected with enterprise-grade security. Bank-level encryption and secure cloud infrastructure ensure complete confidentiality and compliance."
                },
                {
                  id: "multilingual",
                  title: "Multilingual Support",
                  description: "Access legal assistance in multiple languages. Our platform supports diverse language requirements for global legal needs."
                }
            ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveHighlight(item.id)}
                  className={`w-full text-left p-3 sm:p-4 rounded-2xl transition-all duration-300 text-sm sm:text-base ${
                    activeHighlight === item.id
                      ? "bg-black text-white shadow-lg border border-black"
                      : "bg-white text-black border border-gray-300 hover:bg-black hover:text-white"
                  }`}
                >
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold">{item.title}</h3>
                </button>
              ))}
            </div>

            {/* Right Column - Content Box */}
            <div className="lg:w-2/3">
              <div className="bg-white border border-gray-300 rounded-lg p-4 sm:p-6 lg:p-8 h-full">
                {activeHighlight === "legal-chatbot" && (
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mt-4 sm:mt-8 group">
                    <div className="lg:w-2/3">
                      <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 font-inter">Legal Chatbot 24x7</h3>
                      <p className="text-black text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 font-inter">
                        Vidhaana's AI-powered Legal Chatbot provides 24/7 assistance, ensuring that legal support is always just a click away. Available round-the-clock, it instantly answers legal queries, drafts documents, and provides case management assistance. With advanced AI capabilities, the chatbot ensures accurate, timely responses, saving time and resources. Whether you're a law firm, legal consultant, or corporate team, Vidhaana's Legal Chatbot streamlines legal processes, improving efficiency and client satisfaction.
                      </p>
                    </div>
                    <div className="lg:w-1/3 flex items-center justify-center">
                      <div className="text-center">
                        <img 
                          src="/images/chatbot.jpg" 
                          alt="Legal Chatbot Interface" 
                          className="w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 rounded-2xl shadow-lg lg:mr-8 transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeHighlight === "document-generator" && (
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mt-4 sm:mt-8 group">
                    <div className="lg:w-2/3">
                      <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 font-inter">Document Generator</h3>
                      <p className="text-black text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 font-inter">
                        The Document Generator is a powerful AI-powered tool that automates the creation of professional, error-free documents in seconds. It streamlines workflows by generating customized contracts, reports, and letters tailored to your needs. Designed for businesses, legal teams, and professionals, it ensures accuracy, consistency, and compliance. Boost productivity with this fast, secure, and SEO-friendly document generation solution.
                      </p>
                    </div>
                    <div className="lg:w-1/3 flex items-center justify-center">
                      <div className="text-center">
                        <img 
                          src="/images/documentgenrator.jpg" 
                          alt="Person typing on laptop with digital document overlays" 
                          className="w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 object-cover rounded-2xl shadow-lg lg:mr-8 transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeHighlight === "case-summary" && (
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mt-4 sm:mt-8 group">
                    <div className="lg:w-2/3">
                      <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 font-inter">Case Summary from PDFs</h3>
                      <p className="text-black text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 font-inter">
                        The Case Summary from PDFs feature uses advanced AI to extract and summarize key legal information from lengthy case files instantly. It transforms complex judgments, petitions, and legal documents into clear, concise summaries for faster understanding. Ideal for lawyers, law firms, and researchers, it saves hours of manual review. Enhance efficiency and accuracy with this smart, SEO-optimized case summary solution.
                      </p>
                    </div>
                    <div className="lg:w-1/3 flex items-center justify-center">
                      <div className="text-center">
                        <img 
                          src="/images/casesummery.jpg" 
                          alt="Business Report document with charts and graphs on wooden desk" 
                          className="w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 object-cover rounded-2xl shadow-lg lg:mr-8 transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeHighlight === "multi-jurisdiction" && (
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mt-4 sm:mt-8 group">
                    <div className="lg:w-2/3">
                      <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 font-inter">Multi-jurisdiction Support</h3>
                      <p className="text-black text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 font-inter">
                        The Multi-Jurisdiction Support feature enables seamless legal research and document handling across multiple regions and legal systems. It ensures compliance with country-specific laws, regulations, and formatting standards. Perfect for global law firms, corporate legal teams, and cross-border cases, it simplifies complex jurisdictional requirements. Stay accurate, compliant, and efficient with this SEO-optimized multi-jurisdiction legal solution.
                      </p>
                    </div>
                    <div className="lg:w-1/3 flex items-center justify-center">
                      <div className="text-center">
                        <img 
                          src="/images/multijuridiction.jpg" 
                          alt="Multi-jurisdiction legal support illustration" 
                          className="w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 object-cover rounded-2xl shadow-lg lg:mr-8 transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeHighlight === "secure-confidential" && (
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mt-4 sm:mt-8 group">
                    <div className="lg:w-2/3">
                      <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 font-inter">100% Secure & Confidential</h3>
                      <p className="text-black text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 font-inter">
                        The 100% Secure & Confidential feature guarantees that all your legal data and documents are protected with enterprise-grade encryption. It ensures complete privacy, safeguarding sensitive information from unauthorized access. Trusted by law firms, corporate legal teams, and professionals worldwide, it meets strict compliance standards. Work with confidence knowing your information is always secure and confidential.
                      </p>
                    </div>
                    <div className="lg:w-1/3 flex items-center justify-center">
                      <div className="text-center">
                        <img 
                          src="/images/secure.jpg" 
                          alt="Professional with digital security shield and binary code overlay" 
                          className="w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 object-cover rounded-2xl shadow-lg lg:mr-8 transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeHighlight === "multilingual" && (
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mt-4 sm:mt-8 group">
                    <div className="lg:w-2/3">
                      <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 font-inter">Multilingual Support</h3>
                      <p className="text-black text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 font-inter">
                        The Multilingual Support feature allows seamless legal document processing and communication across multiple languages. It ensures accurate translations, enabling legal teams to work with international clients and jurisdictions. Perfect for global law firms and multinational corporations, it breaks language barriers with ease. Enhance your legal operations with this SEO-optimized, multilingual legal solution for better global reach.
                      </p>
                    </div>
                    <div className="lg:w-1/3 flex items-center justify-center">
                      <div className="text-center">
                        <img 
                          src="/images/multilingualsupport.jpg" 
                          alt="Young woman with headset and international flags, working on laptop" 
                          className="w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 object-cover rounded-2xl shadow-lg lg:mr-8 transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Legal AI Works Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Title and CTA */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-inter">
                  How does<br />
                  <span className="text-black">Legal AI Work?</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-inter">
                  Our advanced Legal AI system processes your legal documents through a sophisticated pipeline, delivering insights and support at every step.
                </p>
              </div>
              
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-800 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-2xl w-full sm:w-auto"
                onClick={() => {
                  // Scroll to hero section contact form
                  const heroSection = document.querySelector('section');
                  if (heroSection) {
                    heroSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get In Touch
              </Button>
            </div>

            {/* Right Column - Flowchart */}
            <div className="relative">
              <div className="space-y-6 sm:space-y-8">
                {/* Step 1: Data Intake */}
                <div className="group relative transform transition-all duration-500 hover:scale-105 hover:-translate-x-2">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl border-2 border-dashed border-blue-300 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:border-blue-400 transition-all duration-300">
                      <div className="flex flex-col items-center space-y-1">
                        <div className="w-6 h-1.5 sm:w-8 sm:h-2 bg-blue-600 rounded-full group-hover:bg-blue-700 transition-colors duration-300"></div>
                        <div className="w-6 h-1.5 sm:w-8 sm:h-2 border-2 border-blue-600 bg-white rounded-full group-hover:border-blue-700 transition-colors duration-300"></div>
                        <div className="w-6 h-1.5 sm:w-8 sm:h-2 border-2 border-blue-600 bg-white rounded-full group-hover:border-blue-700 transition-colors duration-300"></div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border-2 border-dashed border-gray-300 p-4 sm:p-6 flex-1 shadow-md group-hover:shadow-xl group-hover:border-blue-400 group-hover:from-blue-50 group-hover:to-indigo-100 transition-all duration-300 transform group-hover:translate-x-2">
                      <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2 group-hover:text-blue-800 transition-colors duration-300 font-inter">Data Intake</h3>
                      <p className="text-gray-600 text-xs sm:text-sm group-hover:text-gray-800 transition-colors duration-300 font-inter">Collects case files, contracts, and legal documents for analysis.</p>
                    </div>
                  </div>
                  {/* Arrow pointing right */}
                  <div className="absolute top-6 sm:top-8 left-16 sm:left-20 w-6 sm:w-8 h-0.5 bg-blue-600 group-hover:bg-blue-700 transition-colors duration-300"></div>
                  <div className="absolute top-5.5 sm:top-7 left-22 sm:left-28 w-0 h-0 border-l-3 sm:border-l-4 border-l-blue-600 group-hover:border-l-blue-700 border-t-1.5 sm:border-t-2 border-t-transparent border-b-1.5 sm:border-b-2 border-b-transparent transition-colors duration-300"></div>
                </div>

                {/* Step 2: Text Analysis */}
                <div className="group relative ml-8 sm:ml-16 transform transition-all duration-500 hover:scale-105 hover:translate-x-2">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-gradient-to-l from-gray-50 to-green-50 rounded-xl border-2 border-dashed border-gray-300 p-4 sm:p-6 flex-1 shadow-md group-hover:shadow-xl group-hover:border-green-400 group-hover:from-green-50 group-hover:to-emerald-100 transition-all duration-300 transform group-hover:-translate-x-2">
                      <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2 group-hover:text-green-800 transition-colors duration-300 font-inter">Text Analysis</h3>
                      <p className="text-gray-600 text-xs sm:text-sm group-hover:text-gray-800 transition-colors duration-300 font-inter">Uses NLP to read, understand, and extract key legal points.</p>
                    </div>
                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl border-2 border-dashed border-green-300 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:border-green-400 transition-all duration-300">
                      <div className="flex flex-col items-center space-y-1.5 sm:space-y-2">
                        <div className="w-6 h-1 sm:w-8 sm:h-1 bg-green-600 group-hover:bg-green-700 transition-colors duration-300"></div>
                        <div className="w-4 h-1 sm:w-5 sm:h-1 bg-green-600 group-hover:bg-green-700 transition-colors duration-300"></div>
                        <div className="w-6 h-1 sm:w-8 sm:h-1 bg-green-600 group-hover:bg-green-700 transition-colors duration-300"></div>
                      </div>
                    </div>
                  </div>
                  {/* Arrow pointing left */}
                  <div className="absolute top-6 sm:top-8 right-16 sm:right-20 w-6 sm:w-8 h-0.5 bg-green-600 group-hover:bg-green-700 transition-colors duration-300"></div>
                  <div className="absolute top-5.5 sm:top-7 right-22 sm:right-28 w-0 h-0 border-r-3 sm:border-r-4 border-r-green-600 group-hover:border-r-green-700 border-t-1.5 sm:border-t-2 border-t-transparent border-b-1.5 sm:border-b-2 border-b-transparent transition-colors duration-300"></div>
                </div>

                {/* Step 3: Insight Generation */}
                <div className="group relative transform transition-all duration-500 hover:scale-105 hover:-translate-x-2">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl border-2 border-dashed border-purple-300 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:border-purple-400 transition-all duration-300">
                      <div className="flex items-end space-x-0.5 sm:space-x-1">
                        <div className="w-1.5 h-3 sm:w-2 sm:h-4 bg-purple-600 group-hover:bg-purple-700 transition-colors duration-300 rounded-sm"></div>
                        <div className="w-1.5 h-4.5 sm:w-2 sm:h-6 bg-purple-600 group-hover:bg-purple-700 transition-colors duration-300 rounded-sm"></div>
                        <div className="w-1.5 h-2.5 sm:w-2 sm:h-3 bg-purple-600 group-hover:bg-purple-700 transition-colors duration-300 rounded-sm"></div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl border-2 border-dashed border-gray-300 p-4 sm:p-6 flex-1 shadow-md group-hover:shadow-xl group-hover:border-purple-400 group-hover:from-purple-50 group-hover:to-violet-100 transition-all duration-300 transform group-hover:translate-x-2">
                      <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2 group-hover:text-purple-800 transition-colors duration-300 font-inter">Insight Generation</h3>
                      <p className="text-gray-600 text-xs sm:text-sm group-hover:text-gray-800 transition-colors duration-300 font-inter">Suggests summaries, clauses, and legal strategies.</p>
                    </div>
                  </div>
                  {/* Arrow pointing right */}
                  <div className="absolute top-6 sm:top-8 left-16 sm:left-20 w-6 sm:w-8 h-0.5 bg-purple-600 group-hover:bg-purple-700 transition-colors duration-300"></div>
                  <div className="absolute top-5.5 sm:top-7 left-22 sm:left-28 w-0 h-0 border-l-3 sm:border-l-4 border-l-purple-600 group-hover:border-l-purple-700 border-t-1.5 sm:border-t-2 border-t-transparent border-b-1.5 sm:border-b-2 border-b-transparent transition-colors duration-300"></div>
                </div>

                {/* Step 4: Action Support */}
                <div className="group relative ml-8 sm:ml-16 transform transition-all duration-500 hover:scale-105 hover:translate-x-2">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-gradient-to-l from-gray-50 to-orange-50 rounded-xl border-2 border-dashed border-gray-300 p-4 sm:p-6 flex-1 shadow-md group-hover:shadow-xl group-hover:border-orange-400 group-hover:from-orange-50 group-hover:to-amber-100 transition-all duration-300 transform group-hover:-translate-x-2">
                      <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2 group-hover:text-orange-800 transition-colors duration-300 font-inter">Action Support</h3>
                      <p className="text-gray-600 text-xs sm:text-sm group-hover:text-gray-800 transition-colors duration-300 font-inter">Assists in drafting, reviewing, and decision-making instantly.</p>
                    </div>
                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl border-2 border-dashed border-orange-300 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:border-orange-400 transition-all duration-300">
                      <div className="relative">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 border-3 sm:border-4 border-orange-600 group-hover:border-orange-700 rounded-full transition-colors duration-300"></div>
                        <div className="absolute top-1.5 sm:top-2 left-1.5 sm:left-2 w-3 h-3 sm:w-4 sm:h-4 bg-orange-600 group-hover:bg-orange-700 rounded-full transition-colors duration-300"></div>
                        <div className="absolute top-0.5 sm:top-1 left-3 sm:left-4 w-0.5 h-4.5 sm:h-6 bg-orange-600 group-hover:bg-orange-700 transition-colors duration-300"></div>
                        <div className="absolute top-3 sm:top-4 left-0.5 sm:left-1 w-4.5 h-0.5 sm:w-6 sm:h-0.5 bg-orange-600 group-hover:bg-orange-700 transition-colors duration-300"></div>
                        <div className="absolute top-0.5 sm:top-1 right-3 sm:right-4 w-0.5 h-4.5 sm:h-6 bg-orange-600 group-hover:bg-orange-700 transition-colors duration-300"></div>
                        <div className="absolute bottom-3 sm:bottom-4 left-0.5 sm:left-1 w-4.5 h-0.5 sm:w-6 sm:h-0.5 bg-orange-600 group-hover:bg-orange-700 transition-colors duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Case Studies
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {/* Case Study 1 */}
            <div className="group relative bg-white rounded-xl border border-gray-300 hover:shadow-lg transition-all duration-300">
              {expandedCase !== 1 ? (
                <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between cursor-pointer space-y-3 sm:space-y-0" onClick={() => setExpandedCase(1)}>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-4">
                    <span className="text-base sm:text-lg font-bold text-black">Case Study-1</span>
                    <span className="text-sm sm:text-base lg:text-lg text-gray-900 font-medium leading-tight">Automated Contract Review for a Tech Startup</span>
                  </div>
                  <button className="w-10 h-10 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-300 self-end sm:self-auto">
                    <ArrowDown className="w-5 h-5 sm:w-5 sm:h-5 text-white" />
                  </button>
                </div>
              ) : (
                <div className="p-5 sm:p-6">
                  <div className="flex justify-between items-center mb-4 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">Automated Contract Review for a Tech Startup</h3>
                    <button 
                      className="text-gray-500 hover:text-gray-700 text-xl sm:text-2xl font-bold" 
                      onClick={() => setExpandedCase(null)}
                    >
                      ×
                    </button>
                  </div>
                  <p className="text-sm sm:text-base text-black leading-relaxed text-justify sm:text-left">
                    A growing SaaS startup used Legal AI to review NDAs and vendor agreements. The AI flagged missing indemnity clauses, reducing legal review time by 60%. This prevented potential IP disputes during a funding round.
                  </p>
                </div>
              )}
            </div>

            {/* Case Study 2 */}
            <div className="group relative bg-white rounded-xl border border-gray-300 hover:shadow-lg transition-all duration-300">
              {expandedCase !== 2 ? (
                <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between cursor-pointer space-y-3 sm:space-y-0" onClick={() => setExpandedCase(2)}>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-4">
                    <span className="text-base sm:text-lg font-bold text-black">Case Study-2</span>
                    <span className="text-sm sm:text-base lg:text-lg text-gray-900 font-medium leading-tight">Litigation Research for a Law Firm</span>
                  </div>
                  <button className="w-10 h-10 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-300 self-end sm:self-auto">
                    <ArrowDown className="w-5 h-5 sm:w-5 sm:h-5 text-white" />
                  </button>
                </div>
              ) : (
                <div className="p-5 sm:p-6">
                  <div className="flex justify-between items-center mb-4 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">Litigation Research for a Law Firm</h3>
                    <button 
                      className="text-gray-500 hover:text-gray-700 text-xl sm:text-2xl font-bold" 
                      onClick={() => setExpandedCase(null)}
                    >
                      ×
                    </button>
                  </div>
                  <p className="text-sm sm:text-base text-black leading-relaxed text-justify sm:text-left">
                    A mid-size law firm deployed AI to search case precedents for corporate disputes, retrieving relevant judgments within seconds instead of hours of manual research. This helped the firm win a high-value arbitration by presenting previously overlooked precedents.
                  </p>
                </div>
              )}
            </div>

            {/* Case Study 3 */}
            <div className="group relative bg-white rounded-xl border border-gray-300 hover:shadow-lg transition-all duration-300">
              {expandedCase !== 3 ? (
                <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between cursor-pointer space-y-3 sm:space-y-0" onClick={() => setExpandedCase(3)}>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-4">
                    <span className="text-base sm:text-lg font-bold text-black">Case Study-3</span>
                    <span className="text-sm sm:text-base lg:text-lg text-gray-900 font-medium leading-tight">GDPR & CCPA Compliance for an E-Commerce Company</span>
                  </div>
                  <button className="w-10 h-10 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-300 self-end sm:self-auto">
                    <ArrowDown className="w-5 h-5 sm:w-5 sm:h-5 text-white" />
                  </button>
                </div>
              ) : (
                <div className="p-5 sm:p-6">
                  <div className="flex justify-between items-center mb-4 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">GDPR & CCPA Compliance for an E-Commerce Company</h3>
                    <button 
                      className="text-gray-500 hover:text-gray-700 text-xl sm:text-2xl font-bold" 
                      onClick={() => setExpandedCase(null)}
                    >
                      ×
                    </button>
                  </div>
                  <p className="text-sm sm:text-base text-black leading-relaxed text-justify sm:text-left">
                    An online retailer used AI to compare EU and California privacy laws. The system identified gaps in data retention and opt-out policies. Compliance updates avoided fines and improved customer trust.
                  </p>
                </div>
              )}
            </div>

            {/* Case Study 4 */}
            <div className="group relative bg-white rounded-xl border border-gray-300 hover:shadow-lg transition-all duration-300">
              {expandedCase !== 4 ? (
                <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between cursor-pointer space-y-3 sm:space-y-0" onClick={() => setExpandedCase(4)}>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-4">
                    <span className="text-base sm:text-lg font-bold text-black">Case Study-4</span>
                    <span className="text-sm sm:text-base lg:text-lg text-gray-900 font-medium leading-tight">Employment Contract Summarization for HR</span>
                  </div>
                  <button className="w-10 h-10 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-300 self-end sm:self-auto">
                    <ArrowDown className="w-5 h-5 sm:w-5 sm:h-5 text-white" />
                  </button>
                </div>
              ) : (
                <div className="p-5 sm:p-6">
                  <div className="flex justify-between items-center mb-4 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">Employment Contract Summarization for HR</h3>
                    <button 
                      className="text-gray-500 hover:text-gray-700 text-xl sm:text-2xl font-bold" 
                      onClick={() => setExpandedCase(null)}
                    >
                      ×
                    </button>
                  </div>
                  <p className="text-sm sm:text-base text-black leading-relaxed text-justify sm:text-left">
                    A multinational used AI to summarize country-specific employment contracts. It highlighted key differences in notice periods and benefits across jurisdictions. HR reduced onboarding document review from 5 hours to under 1 hour per hire.
                  </p>
                </div>
              )}
            </div>

            {/* Case Study 5 */}
            <div className="group relative bg-white rounded-xl border border-gray-300 hover:shadow-lg transition-all duration-300">
              {expandedCase !== 5 ? (
                <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between cursor-pointer space-y-3 sm:space-y-0" onClick={() => setExpandedCase(5)}>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-4">
                    <span className="text-base sm:text-lg font-bold text-black">Case Study-5</span>
                    <span className="text-sm sm:text-base lg:text-lg text-gray-900 font-medium leading-tight">M&A Due Diligence for an Investment Bank</span>
                  </div>
                  <button className="w-10 h-10 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-300 self-end sm:self-auto">
                    <ArrowDown className="w-5 h-5 sm:w-5 sm:h-5 text-white" />
                  </button>
                </div>
              ) : (
                <div className="p-5 sm:p-6">
                  <div className="flex justify-between items-center mb-4 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">M&A Due Diligence for an Investment Bank</h3>
                    <button 
                      className="text-gray-500 hover:text-gray-700 text-xl sm:text-2xl font-bold" 
                      onClick={() => setExpandedCase(null)}
                    >
                      ×
                    </button>
                  </div>
                  <p className="text-sm sm:text-base text-black leading-relaxed text-justify sm:text-left">
                    During an acquisition, AI reviewed thousands of vendor and client contracts. It flagged change-of-control clauses that could trigger penalties post-merger. The insights influenced deal terms and risk mitigation plans.
                  </p>
                </div>
              )}
            </div>

            {/* Case Study 6 */}
            <div className="group relative bg-white rounded-xl border border-gray-300 hover:shadow-lg transition-all duration-300">
              {expandedCase !== 6 ? (
                <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between cursor-pointer space-y-3 sm:space-y-0" onClick={() => setExpandedCase(6)}>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-4">
                    <span className="text-base sm:text-lg font-bold text-black">Case Study-6</span>
                    <span className="text-sm sm:text-base lg:text-lg text-gray-900 font-medium leading-tight">Multilingual Legal Translation for Global Expansion</span>
                  </div>
                  <button className="w-10 h-10 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-300 self-end sm:self-auto">
                    <ArrowDown className="w-5 h-5 sm:w-5 sm:h-5 text-white" />
                  </button>
                </div>
              ) : (
                <div className="p-5 sm:p-6">
                  <div className="flex justify-between items-center mb-4 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">Multilingual Legal Translation for Global Expansion</h3>
                    <button 
                      className="text-gray-500 hover:text-gray-700 text-xl sm:text-2xl font-bold" 
                      onClick={() => setExpandedCase(null)}
                    >
                      ×
                    </button>
                  </div>
                  <p className="text-sm sm:text-base text-black leading-relaxed text-justify sm:text-left">
                    A healthcare company expanding to LATAM used AI to translate legal documents. The AI ensured legal terminology accuracy and detected missing compliance clauses. This accelerated market entry while meeting regulatory requirements.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4 sm:mb-6">
              Organizations
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Law Firms */}
            <div className="rounded-2xl border border-gray-300 p-4 sm:p-6 text-center hover:shadow-md transition-all duration-300 bg-white hover:bg-[#F3F5FD] h-64 sm:h-72 lg:h-80 w-full group cursor-pointer transform hover:scale-105">
              <div className="w-full h-32 sm:h-28 lg:h-32 mb-3 sm:mb-4 overflow-hidden rounded-xl">
                <img 
                  src="/images/lawfirms.jpg" 
                  alt="Professional legal consultation with scales of justice and gavel" 
                  className="w-full h-full object-top sm:object-cover lg:object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-black mb-2 font-inter transition-colors duration-300 group-hover:text-blue-600">Law Firms</h3>
              <p className="text-black text-xs sm:text-sm leading-relaxed font-inter transition-colors duration-300 group-hover:text-gray-700">
                Use AI to speed up contract review and legal research
              </p>
            </div>

            {/* Banking */}
            <div className="rounded-2xl border border-gray-300 p-4 sm:p-6 text-center hover:shadow-md transition-all duration-300 bg-white hover:bg-[#F3F5FD] h-64 sm:h-72 lg:h-80 w-full group cursor-pointer transform hover:scale-105">
              <div className="w-full h-32 sm:h-28 lg:h-32 mb-3 sm:mb-4 overflow-hidden rounded-xl">
                <img 
                  src="/images/banking.jpg" 
                  alt="Digital banking and financial services illustration" 
                  className="w-full h-full object-top sm:object-cover lg:object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-black mb-2 font-inter transition-colors duration-300 group-hover:text-blue-600">Banking</h3>
              <p className="text-black text-xs sm:text-sm leading-relaxed font-inter transition-colors duration-300 group-hover:text-gray-700">
                Leverage AI for regulatory compliance and fraud detection
              </p>
            </div>

            {/* Healthcare */}
            <div className="rounded-2xl border border-gray-300 p-4 sm:p-6 text-center hover:shadow-md transition-all duration-300 bg-white hover:bg-[#F3F5FD] h-64 sm:h-72 lg:h-80 w-full group cursor-pointer transform hover:scale-105">
              <div className="w-full h-32 sm:h-28 lg:h-32 mb-3 sm:mb-4 overflow-hidden rounded-xl">
                <img 
                  src="/images/health care.jpg" 
                  alt="Medical professional providing care to elderly patient" 
                  className="w-full h-full object-top sm:object-cover lg:object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-black mb-2 font-inter transition-colors duration-300 group-hover:text-blue-600">Healthcare</h3>
              <p className="text-black text-xs sm:text-sm leading-relaxed font-inter transition-colors duration-300 group-hover:text-gray-700">
                Apply AI to manage compliance patient consent forms
              </p>
            </div>

            {/* Real Estate */}
            <div className="rounded-2xl border border-gray-300 p-4 sm:p-6 text-center hover:shadow-md transition-all duration-300 bg-white hover:bg-[#F3F5FD] h-64 sm:h-72 lg:h-80 w-full group cursor-pointer transform hover:scale-105">
              <div className="w-full h-32 sm:h-28 lg:h-32 mb-3 sm:mb-4 overflow-hidden rounded-xl">
                <img 
                  src="/images/realstate.jpg" 
                  alt="Miniature cityscape representing urban development and real estate" 
                  className="w-full h-full object-top sm:object-cover lg:object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-black mb-2 font-inter transition-colors duration-300 group-hover:text-blue-600">Real Estate</h3>
              <p className="text-black text-xs sm:text-sm leading-relaxed font-inter transition-colors duration-300 group-hover:text-gray-700">
                Use AI to analyze leases and ensure zoning law compliance
              </p>
            </div>

            {/* E-Commerce */}
            <div className="rounded-2xl border border-gray-300 p-4 sm:p-6 text-center hover:shadow-md transition-all duration-300 bg-white hover:bg-[#F3F5FD] h-64 sm:h-72 lg:h-80 w-full group cursor-pointer transform hover:scale-105">
              <div className="w-full h-32 sm:h-28 lg:h-32 mb-3 sm:mb-4 overflow-hidden rounded-xl">
                <img 
                  src="/images/ecommerce.jpg" 
                  alt="Isometric e-commerce illustration with laptop, shopping cart, and digital payment elements" 
                  className="w-full h-full object-top sm:object-cover lg:object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-black mb-2 font-inter transition-colors duration-300 group-hover:text-blue-600">E-Commerce</h3>
              <p className="text-black text-xs sm:text-sm leading-relaxed font-inter transition-colors duration-300 group-hover:text-gray-700">
                Implement AI for data privacy and intellectual protection
              </p>
            </div>

            {/* Government */}
            <div className="rounded-2xl border border-gray-300 p-4 sm:p-6 text-center hover:shadow-md transition-all duration-300 bg-white hover:bg-[#F3F5FD] h-64 sm:h-72 lg:h-80 w-full group cursor-pointer transform hover:scale-105">
              <div className="w-full h-32 sm:h-28 lg:h-32 mb-3 sm:mb-4 overflow-hidden rounded-xl">
                <img 
                  src="/images/government.jpg" 
                  alt="Grand government building with golden dome and official architecture" 
                  className="w-full h-full object-top sm:object-cover lg:object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-black mb-2 font-inter transition-colors duration-300 group-hover:text-blue-600">Government</h3>
              <p className="text-black text-xs sm:text-sm leading-relaxed font-inter transition-colors duration-300 group-hover:text-gray-700">
                Deploy AI for policy drafting and public legal assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Testimonials Section */}
      <section className="mx-auto max-w-[1500px] px-4 sm:px-6 py-8 sm:py-12">
        <h2 className="mb-8 sm:mb-10 text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold">
          Our Clients Testimonials
        </h2>

        {/* Responsive grid layout */}
        <div className="flex flex-col sm:flex-row items-start justify-center gap-4 sm:gap-6">
          {/* Testimonial Card 1 - Akhil Sharma */}
          <div className="relative isolate h-[250px] sm:h-[300px] w-full sm:w-[300px] lg:w-[350px] group cursor-pointer transform hover:scale-105 transition-all duration-300">
            {/* back rounded frame */}
            <div className="pointer-events-none absolute inset-0 rounded-[20px] border border-black/70" />
            {/* second rounded frame at bottom (slightly offset) */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[68%] translate-y-4 rounded-[20px] border border-black/70" />

            {/* photo overlapping the left edge */}
            <div className="absolute left-2 sm:left-[-50px] top-[60px] sm:top-[70px] z-10 flex w-[70px] sm:w-[90px] flex-col items-center">
              <div className="relative h-[70px] w-[70px] sm:h-[90px] sm:w-[90px] overflow-hidden rounded-[10px]">
                <img 
                  src="/images/akhil.jpg" 
                  alt="Akhil Sharma - Professional headshot" 
                  className="w-full h-full object-contain rounded-[10px] bg-gray-100 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>

            {/* inner speech bubble */}
            <div className="absolute left-[80px] sm:left-[60px] top-[35px] sm:top-[45px] z-0 w-[calc(100%-90px)] sm:w-[250px] rounded-[18px] border border-black/60 bg-black px-4 sm:px-6 py-4 sm:py-6 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:border-black/80">
              <p className="text-[14px] sm:text-[18px] leading-snug text-white transition-colors duration-300 group-hover:text-gray-100">
                Legal AI cut our contract review time in half, letting us focus on strategic cases
              </p>

              {/* rating pill */}
              <div className="mt-4 sm:mt-6 inline-flex items-center gap-1 sm:gap-2 rounded-full bg-gray-300/60 px-3 sm:px-4 py-1.5 sm:py-2">
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-4 sm:w-4 fill-black">
                  <path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z" />
                </svg>
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-4 sm:w-4 fill-black">
                  <path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z" />
                </svg>
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-4 sm:w-4 fill-black">
                  <path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z" />
                </svg>
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-4 sm:w-4 fill-black">
                  <path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z" />
                </svg>
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-4 sm:w-4 fill-black">
                  <path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z" />
                </svg>
              </div>
              
              {/* client name below stars */}
              <div className="mt-3 sm:mt-4 text-center">
                <div className="text-[14px] sm:text-[16px] font-semibold text-white transition-colors duration-300 group-hover:text-blue-200">Akhil Sharma</div>
              </div>
            </div>
          </div>

          {/* Testimonial Card 2 - Priya Menon */}
          <div className="relative isolate h-[250px] sm:h-[300px] w-full sm:w-[300px] lg:w-[350px] group cursor-pointer transform hover:scale-105 transition-all duration-300">
            {/* back rounded frame */}
            <div className="pointer-events-none absolute inset-0 rounded-[20px] border border-black/70" />
            {/* second rounded frame at bottom (slightly offset) */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[68%] translate-y-4 rounded-[20px] border border-black/70" />

            {/* photo overlapping the left edge */}
            <div className="absolute left-2 sm:left-[-50px] top-[60px] sm:top-[70px] z-10 flex w-[70px] sm:w-[90px] flex-col items-center">
              <div className="relative h-[70px] w-[70px] sm:h-[90px] sm:w-[90px] overflow-hidden rounded-[10px]">
                <img 
                  src="/images/priya.jpg" 
                  alt="Priya Menon - Professional headshot" 
                  className="w-full h-full object-contain rounded-[10px] bg-gray-100 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>

            {/* inner speech bubble */}
            <div className="absolute left-[80px] sm:left-[60px] top-[35px] sm:top-[45px] z-0 w-[calc(100%-90px)] sm:w-[250px] rounded-[18px] border border-black/60 bg-black px-4 sm:px-6 py-4 sm:py-6 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:border-black/80">
              <p className="text-[14px] sm:text-[18px] leading-snug text-white transition-colors duration-300 group-hover:text-gray-100">
                With AI-powered legal research, we now resolve client queries in minutes
              </p>

              {/* rating pill */}
              <div className="mt-4 sm:mt-6 inline-flex items-center gap-1 sm:gap-2 rounded-full bg-gray-300/60 px-3 sm:px-4 py-1.5 sm:py-2">
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-4 sm:w-4 fill-black">
                  <path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z" />
                </svg>
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-4 sm:w-4 fill-black">
                  <path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z" />
                </svg>
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-4 sm:w-4 fill-black">
                  <path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z" />
                </svg>
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-4 sm:w-4 fill-black">
                  <path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z" />
                </svg>
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-4 sm:w-4 fill-black">
                  <path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z" />
                </svg>
              </div>
              
              {/* client name below stars */}
              <div className="mt-3 sm:mt-4 text-center">
                <div className="text-[14px] sm:text-[16px] font-semibold text-white transition-colors duration-300 group-hover:text-blue-200">Priya Menon</div>
              </div>
            </div>
          </div>

          {/* Testimonial Card 3 - Rajiv Mehta */}
          <div className="relative isolate h-[250px] sm:h-[300px] w-full sm:w-[300px] lg:w-[350px] group cursor-pointer transform hover:scale-105 transition-all duration-300">
            {/* back rounded frame */}
            <div className="pointer-events-none absolute inset-0 rounded-[20px] border border-black/70" />
            {/* second rounded frame at bottom (slightly offset) */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[68%] translate-y-4 rounded-[20px] border border-black/70" />

            {/* photo overlapping the left edge */}
            <div className="absolute left-2 sm:left-[-50px] top-[60px] sm:top-[70px] z-10 flex w-[70px] sm:w-[90px] flex-col items-center">
              <div className="relative h-[70px] w-[70px] sm:h-[90px] sm:w-[90px] overflow-hidden rounded-[10px]">
                <img 
                  src="/images/rajiv.jpg" 
                  alt="Rajiv Mehta - Professional headshot" 
                  className="w-full h-full object-contain rounded-[10px] bg-gray-100 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>

            {/* inner speech bubble */}
            <div className="absolute left-[80px] sm:left-[60px] top-[35px] sm:top-[45px] z-0 w-[calc(100%-90px)] sm:w-[250px] rounded-[18px] border border-black/60 bg-black px-4 sm:px-6 py-4 sm:py-6 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:border-black/80">
              <p className="text-[14px] sm:text-[18px] leading-snug text-white transition-colors duration-300 group-hover:text-gray-100">
                The AI compliance checks saved us from costly regulatory penalties
              </p>

              {/* rating pill */}
              <div className="mt-4 sm:mt-6 inline-flex items-center gap-1 sm:gap-2 rounded-full bg-gray-300/60 px-3 sm:px-4 py-1.5 sm:py-2">
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-4 sm:w-4 fill-black">
                  <path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z" />
                </svg>
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-4 sm:w-4 fill-black">
                  <path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z" />
                </svg>
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-4 sm:w-4 fill-black">
                  <path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z" />
                </svg>
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-4 sm:w-4 fill-black">
                  <path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z" />
                </svg>
                <svg viewBox="0 0 24 24" className="h-3 w-3 sm:h-4 sm:w-4 fill-black">
                  <path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z" />
                </svg>
              </div>
              
              {/* client name below stars */}
              <div className="mt-3 sm:mt-4 text-center">
                <div className="text-[14px] sm:text-[16px] font-semibold text-white transition-colors duration-300 group-hover:text-blue-200">Rajiv Mehta</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-12 sm:mb-16">Frequently Asked Questions</h2>
          
          <div className="space-y-4 sm:space-y-6">
            {/* FAQ Item 1 */}
            <div className="group">
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-black hover:border-black">
                <div 
                  className="flex items-center justify-between p-6 sm:p-8 cursor-pointer hover:bg-gray-100 transition-all duration-300"
                  onClick={() => setExpandedFAQ(expandedFAQ === 1 ? null : 1)}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-black group-hover:text-gray-800 transition-colors duration-300 pr-4">
                    What is Legal AI?
                  </h3>
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full border-2 border-gray-300 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-gray-200">
                    <span className={`text-gray-600 font-bold text-lg sm:text-xl transition-all duration-500 ${expandedFAQ === 1 ? 'rotate-45 scale-110' : 'group-hover:scale-110'}`}>
                      {expandedFAQ === 1 ? '×' : '+'}
                    </span>
                  </div>
                </div>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedFAQ === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-4 sm:mb-6"></div>
                    <p className="text-black leading-relaxed text-base sm:text-lg font-medium text-justify sm:text-left">
                      Legal AI refers to artificial intelligence tools designed to assist in legal tasks like contract review, legal research, compliance checks, and risk assessment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="group">
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-black hover:border-black">
                <div 
                  className="flex items-center justify-between p-6 sm:p-8 cursor-pointer hover:bg-gray-100 transition-all duration-300"
                  onClick={() => setExpandedFAQ(expandedFAQ === 2 ? null : 2)}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-black group-hover:text-gray-800 transition-colors duration-300 pr-4">
                    Can Legal AI replace lawyers?
                  </h3>
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full border-2 border-gray-300 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-gray-200">
                    <span className={`text-gray-600 font-bold text-lg sm:text-xl transition-all duration-500 ${expandedFAQ === 2 ? 'rotate-45 scale-110' : 'group-hover:scale-110'}`}>
                      {expandedFAQ === 2 ? '×' : '+'}
                    </span>
                  </div>
                </div>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedFAQ === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-4 sm:mb-6"></div>
                    <p className="text-black leading-relaxed text-base sm:text-lg font-medium text-justify sm:text-left">
                      No, Legal AI complements lawyers by automating repetitive tasks, allowing them to focus on strategy and decision-making.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="group">
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-black hover:border-black">
                <div 
                  className="flex items-center justify-between p-6 sm:p-8 cursor-pointer hover:bg-gray-100 transition-all duration-300"
                  onClick={() => setExpandedFAQ(expandedFAQ === 3 ? null : 3)}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-black group-hover:text-gray-800 transition-colors duration-300 pr-4">
                    Is Legal AI secure for sensitive documents?
                  </h3>
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full border-2 border-gray-300 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-gray-200">
                    <span className={`text-gray-600 font-bold text-lg sm:text-xl transition-all duration-500 ${expandedFAQ === 3 ? 'rotate-45 scale-110' : 'group-hover:scale-110'}`}>
                      {expandedFAQ === 3 ? '×' : '+'}
                    </span>
                  </div>
                </div>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedFAQ === 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-4 sm:mb-6"></div>
                    <p className="text-black leading-relaxed text-base sm:text-lg font-medium text-justify sm:text-left">
                      Yes, reputable Legal AI platforms use encryption, role-based access, and compliance with GDPR, HIPAA, and other regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="group">
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-black hover:border-black">
                <div 
                  className="flex items-center justify-between p-6 sm:p-8 cursor-pointer hover:bg-gray-100 transition-all duration-300"
                  onClick={() => setExpandedFAQ(expandedFAQ === 4 ? null : 4)}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-black group-hover:text-gray-800 transition-colors duration-300 pr-4">
                    What types of documents can Legal AI process?
                  </h3>
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full border-2 border-gray-300 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-gray-200">
                    <span className={`text-gray-600 font-bold text-lg sm:text-xl transition-all duration-500 ${expandedFAQ === 4 ? 'rotate-45 scale-110' : 'group-hover:scale-110'}`}>
                      {expandedFAQ === 4 ? '×' : '+'}
                    </span>
                  </div>
                </div>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedFAQ === 4 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-4 sm:mb-6"></div>
                    <p className="text-black leading-relaxed text-base sm:text-lg font-medium text-justify sm:text-left">
                      It can process contracts, case laws, statutes, compliance policies, NDAs, and multilingual legal documents.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="group">
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-black hover:border-black">
                <div 
                  className="flex items-center justify-between p-6 sm:p-8 cursor-pointer hover:bg-gray-100 transition-all duration-300"
                  onClick={() => setExpandedFAQ(expandedFAQ === 5 ? null : 5)}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-black group-hover:text-gray-800 transition-colors duration-300 pr-4">
                    Does Legal AI work across different jurisdictions?
                  </h3>
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full border-2 border-gray-300 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-gray-200">
                    <span className={`text-gray-600 font-bold text-lg sm:text-xl transition-all duration-500 ${expandedFAQ === 5 ? 'rotate-45 scale-110' : 'group-hover:scale-110'}`}>
                      {expandedFAQ === 5 ? '×' : '+'}
                    </span>
                  </div>
                </div>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedFAQ === 5 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-4 sm:mb-6"></div>
                    <p className="text-black leading-relaxed text-base sm:text-lg font-medium text-justify sm:text-left">
                      Yes, advanced Legal AI systems can compare and analyze laws across multiple jurisdictions to ensure compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Button */}
          <div className="text-center mt-12 sm:mt-16 mb-8 sm:mb-12">
            <Button 
              onClick={() => {
                // Scroll to hero section contact form
                const heroSection = document.querySelector('section');
                if (heroSection) {
                  heroSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-black text-white hover:bg-gray-800 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl font-semibold rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Have More Questions? Send Enquiry
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
