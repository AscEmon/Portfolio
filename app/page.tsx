"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  MapPin,
  Calendar,
  Award,
  Users,
  Code2,
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

interface Certification {
  title: string
  issuer: string
  date: string
  credentialId: string
  link: string
}

interface Project {
  title: string
  description: string
  tech: string[]
  category: string
  impact: string
  year: string
  link: string
}

interface Experience {
  title: string
  company: string
  period: string
  location: string
  achievements: string[]
}

interface SkillGroup {
  category: string
  items: string[]
}

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "skills", "certifications", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleResumeDownload = () => {
    // Download the PDF resume file
    const link = document.createElement("a")
    link.href = "/Portfolio/resume/Resume_of_Abu_Sayed.pdf"
    link.download = "Abu_Sayed_Chowdhury_Resume.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const projects: Project[] = [
    {
      title: "Autosafe_json",
      description:
        "Dart package that prevents app crashes caused by complex or inconsistent JSON responses. Confidently handle any backend response — lists, maps, nulls, or type mismatches — without extra code.",
      tech: ["Dart", "JSON Parsing", "Flutter Plugin"],
      category: "Open Source",
      impact: "Zero-crash JSON handling",
      year: "2025",
      link: "https://pub.dev/packages/autosafe_json",
    },
    {
      title: "Sumo Restaurants",
      description:
        "Restaurant ordering app with SQLite-based offline support, cash point integration, gift cards, and seamless food ordering experience.",
      tech: ["Flutter", "SQLite", "Gift Cards", "POS"],
      category: "Enterprise",
      impact: "Streamlined restaurant operations",
      year: "2025",
      link: "https://apps.apple.com/us/app/sumo-restaurants/id6504637498",
    },
    {
      title: "Othership Workplace Scheduler",
      description:
        "Enterprise-grade booking and scheduling platform for meeting rooms, desks, and workspaces with real-time availability.",
      tech: ["Flutter", "Riverpod", "REST API", "Firebase"],
      category: "Enterprise",
      impact: "Improved workspace utilization by 40%",
      year: "2023",
      link: "https://apps.apple.com/us/app/othership-workplace-scheduler/id6449196566",
    },
    {
      title: "Othership Visitor Management",
      description:
        "Comprehensive and customizable visitor management solution that simplifies visitor check-ins and enhances security.",
      tech: ["Flutter", "Bloc", "KIOSK", "Real-time"],
      category: "Enterprise",
      impact: "Streamlined visitor management",
      year: "2024",
      link: "https://apps.apple.com/us/app/othership-room-display/id6479629590",
    },
    {
      title: "Othership Room Display",
      description: "KIOSK application developed with Bloc for managing meeting room schedules and display systems on tablets and iPads.",
      tech: ["Flutter", "Flutter Bloc", "KIOSK", "iPad"],
      category: "Enterprise",
      impact: "Streamlined room management",
      year: "2024",
      link: "https://apps.apple.com/us/app/othership-room-display/id6479629590",
    },
    {
      title: "myBKB app",
      description:
        "Secure mobile banking application with biometric authentication, transaction history, and seamless API integration.",
      tech: ["Flutter", "Firebase", "API Integration"],
      category: "FinTech",
      impact: "Processed $1M+ in transactions",
      year: "2025",
      link: "https://apps.apple.com/us/app/mybkb-app/id6739765439",
    },
    {
      title: "Disaster Alert for BD",
      description:
        "Automates disaster management — weather updates, early warnings, shelter landmarks, fire services, medical service, emergency camps, and emergency SMS to relatives.",
      tech: ["SwiftUI", "CoreData", "API Integration"],
      category: "Utility",
      impact: "Real-time disaster alerts for BD",
      year: "2024",
      link: "https://apps.apple.com/us/app/disaster-alert-for-bd/id6743391177",
    },
    {
      title: "BDTax",
      description:
        "Online tax filing service allowing users to upload tax documents, with consultant-prepared returns and acknowledgment slips via email and courier.",
      tech: ["Flutter", "Government API", "PDF Generation"],
      category: "Government",
      impact: "Served 50K+ taxpayers",
      year: "2024",
      link: "https://apps.apple.com/us/app/bdtax-tax-return-online-bd/id6444408079",
    },
    {
      title: "BDHonda+",
      description:
        "All-in-one platform for Bangladeshi Honda bikers — nearby dealers, maintenance guidelines, spare parts info, and safety rules.",
      tech: ["Flutter", "Firebase", "API Integration"],
      category: "Utility",
      impact: "Enhanced biker experience",
      year: "2024",
      link: "https://play.google.com/store/apps/details?id=com.sslwireless.bdhondaPlus&hl=en",
    },
    {
      title: "BASIC Bank App (Magpie)",
      description:
        "Secure mobile banking application with biometric authentication, transaction history, and seamless API integration.",
      tech: ["Flutter", "Security", "REST API", "Biometrics"],
      category: "FinTech",
      impact: "Processed $2M+ in transactions",
      year: "2023",
      link: "https://apps.apple.com/us/app/magpie-app/id6449897818",
    },
    {
      title: "Biometric Callback",
      description:
        "Open-source Flutter package for handling biometric authentication callbacks across Android and iOS platforms.",
      tech: ["Dart", "Flutter", "Biometrics"],
      category: "Open Source",
      impact: "Simplified biometric auth flow",
      year: "2023",
      link: "https://pub.dev/packages/biometric_callback",
    },
    {
      title: "Desco Utility App",
      description: "Utility service application for electricity bill payments, account management, and usage tracking.",
      tech: ["Flutter", "Riverpod", "Payment Integration"],
      category: "Utility",
      impact: "20K+ downloads",
      year: "2022",
      link: "https://apps.apple.com/us/app/desco/id1196216622",
    },
    {
      title: "Ecosuponno",
      description:
        "E-commerce application built with GraphQL and GetX for a seamless online shopping experience.",
      tech: ["Flutter", "GraphQL", "GetX"],
      category: "E-Commerce",
      impact: "Full e-commerce platform",
      year: "2023",
      link: "https://play.google.com/store/apps/details?id=com.sslwireless.ecosuponno",
    },
    {
      title: "Akij Cement CRM",
      description: "CRM application with polished UI, enhancing client interactions and productivity for Akij Cement.",
      tech: ["Flutter", "GetX", "CRM", "UI/UX"],
      category: "Enterprise",
      impact: "Enhanced client productivity",
      year: "2022",
      link: "https://apps.apple.com/us/app/akij-cement-crm/id6446422360",
    },
    {
      title: "Flutter_sslcommerz",
      description:
        "Open-source Flutter payment gateway SDK published on pub.dev, enabling secure SSLCommerz payment processing for Android and iOS.",
      tech: ["Flutter", "Dart", "Payment Gateway", "Dart Package"],
      category: "Open Source",
      impact: "500+ pub.dev downloads",
      year: "2021",
      link: "https://pub.dev/packages/flutter_sslcommerz",
    },
    {
      title: "SSL_CLI",
      description:
        "Command-line tool for automating Flutter project setup, module generation, and APK delivery via Telegram bot.",
      tech: ["Dart", "CLI", "Automation", "Telegram Bot"],
      category: "DevTools",
      impact: "Reduced setup time by 70%",
      year: "2021",
      link: "https://pub.dev/packages/ssl_cli",
    },
    {
      title: "Pay By Link (PBL)",
      description: "Seamless payment link generation and processing app built with Riverpod state management.",
      tech: ["Flutter", "Riverpod", "Payment Integration"],
      category: "FinTech",
      impact: "Simplified payment flows",
      year: "2023",
      link: "https://play.google.com/store/apps/details?id=com.sslwireless.paybylink&hl=en_GB",
    },
    {
      title: "BOnline for Merchants",
      description: "Merchant management app enabling live transaction tracking, order management, and customer insights.",
      tech: ["Flutter", "Riverpod", "Analytics"],
      category: "FinTech",
      impact: "Enhanced merchant experience",
      year: "2022",
      link: "https://apps.apple.com/us/app/bonline-for-merchants/id6444676928",
    },
    {
      title: "B71",
      description:
        "E-commerce application built with GraphQL and GetX for the B71 cricket brand, associated with SSL Wireless.",
      tech: ["Flutter", "GraphQL", "GetX"],
      category: "E-Commerce",
      impact: "Full e-commerce platform",
      year: "2021",
      link: "",
    },
    {
      title: "Rebella (ARFace App)",
      description: "Augmented reality-based face detection application for Android and iOS platforms.",
      tech: ["Flutter", "AR", "Face Detection", "Camera"],
      category: "AR/VR",
      impact: "Innovative AR experience",
      year: "2022",
      link: "https://apps.apple.com/us/app/rebella/id6444242093",
    },
    {
      title: "Employee Buddy",
      description: "Employee management application available on Android and iOS to enhance team collaboration.",
      tech: ["Flutter", "Riverpod", "Team Management"],
      category: "Enterprise",
      impact: "Enhanced team collaboration",
      year: "2021",
      link: "https://apps.apple.com/us/app/employee-buddy/id1517212760",
    },
    {
      title: "Rukon",
      description:
        "Client-based Flutter application built with GetX state management, associated with SSL Wireless.",
      tech: ["Flutter", "GetX", "REST API"],
      category: "Enterprise",
      impact: "Delivered on schedule",
      year: "2021",
      link: "",
    },
    {
      title: "Sohooze Kinun",
      description:
        "E-commerce app developed using Flutter with Provider state management during early career at Ringersoft Limited.",
      tech: ["Flutter", "Provider", "E-Commerce"],
      category: "E-Commerce",
      impact: "Published on Play Store",
      year: "2020",
      link: "https://play.google.com/store/apps/details?id=com.ringersoft.sohoozekinun",
    },
  ]

  const skills: SkillGroup[] = [
    { category: "Frameworks", items: ["Flutter", "SwiftUI", "MERN"] },
    { category: "Programming Languages", items: ["Dart", "JavaScript", "Swift", "Kotlin", "Python"] },
    { category: "State Management", items: ["Riverpod", "BLoC", "GetX", "Provider"] },
    { category: "Backend & APIs", items: ["REST API", "GraphQL", "Firebase", "Express.js", "Node.js"] },
    { category: "Databases", items: ["MongoDB", "SQLite", "Hive", "Firebase", "ObjectBox", "CoreData"] },
    { category: "CI/CD & DevOps", items: ["Jenkins", "GitHub Actions", "Bitbucket Pipelines", "Codemagic"] },
    { category: "Familiar", items: ["Google ADK", "n8n", "MCP", "v0", "NoteBookLM", "Gamma"] },
    { category: "AI IDE & Tools", items: ["Claude Desktop", "Claude Code", "Google Antigravity", "Windsurf", "Cursor"] },
  ]

  const experiences: Experience[] = [
    {
      title: "Senior Software Specialist",
      company: "SSL Wireless",
      period: "Feb 2025 – Present",
      location: "Dhaka, Bangladesh",
      achievements: [
        "Designed and implemented Flutter applications following Clean Architecture principles with a feature-layered pattern for scalable and maintainable code.",
        "Integrated Dependency Injection (DI) for improved modularity and testability across all projects.",
        "Established a Clean Architecture structure with automated module generation using SSL_CLI.",
        "Led AI adaptation initiatives, conducting training sessions and workshops on AI integration for 300+ colleagues.",
        "Developed automation tools using Python, including the SSLLog CLI, to streamline internal workflows.",
        "Gained hands-on experience with Google ADK, n8n, and MCP, enhancing automation and integration capabilities across projects.",
      ],
    },
    {
      title: "Software Specialist",
      company: "SSL Wireless",
      period: "Jan 2023 – Feb 2025",
      location: "Dhaka, Bangladesh",
      achievements: [
        "Led development of 15+ Flutter applications with 100% on-time delivery and zero critical bugs in production.",
        "Architected scalable mobile solutions serving 200K+ users across Android and iOS platforms.",
        "Experienced in integrating Flutter modules with existing Android and iOS apps.",
        "Proficient in working with REST API and GraphQL to develop robust applications.",
        "Guided team members to learn Flutter and improve their skills, mentoring 15+ developers.",
        "Developed banking apps, payment gateways, and enterprise solutions ensuring high-quality code and performance.",
      ],
    },
    {
      title: "Associate Software Engineer",
      company: "SSL Wireless",
      period: "May 2021 – Feb 2023",
      location: "Dhaka, Bangladesh",
      achievements: [
        "Created the country's most well-known SSLCommerz payment gateway SDK for Flutter.",
        "Built a custom Flutter architecture structure to develop high-level, multi-module apps.",
        "Created CLI apps (SSL_CLI) to generate Flutter structure and pre-generated code.",
        "Worked with pair programmers to create product, project, and service-based apps.",
        "Worked with GraphQL to create successful e-commerce applications.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Advanced Apps Bangladesh",
      period: "Nov 2020 – May 2021",
      location: "Dhaka, Bangladesh",
      achievements: [
        "Implemented the Model-View-Controller (MVC) pattern using GetX for optimized app structure and maintainability.",
        "Integrated various Firebase services including database, storage, Crashlytics, Analytics, and push notifications for Android and iOS.",
        "Utilized custom painters with animation to create engaging user interfaces and enhanced user experience.",
        "Built dynamic and responsive interfaces using animation and animated widgets, improving overall aesthetic and usability.",
      ],
    },
    {
      title: "Mobile Application Developer",
      company: "Ringersoft Limited",
      period: "Mar 2020 – Nov 2020",
      location: "Chittagong, Bangladesh",
      achievements: [
        "Developed school management and e-commerce apps, ensuring efficient functionality and user experience.",
        "Successfully developed an e-commerce app using Flutter and Provider state management within a tight 15-day schedule.",
        "Proficient in Android Studio and Java, building robust and efficient applications with optimized code.",
        "Deployed apps on Play Store, ensuring proper app store guidelines are met and apps are easily accessible.",
      ],
    },
  ]

  const certifications: Certification[] = [
    {
      title: "Claude Code in Action",
      issuer: "Anthropic",
      date: "April 2026",
      credentialId: "ANTHROPIC-CC-2026",
      link: "https://verify.skilljar.com/c/bymr5t53nms9",
    },
    {
      title: "Introduction to Agent Skills",
      issuer: "Anthropic",
      date: "April 2026",
      credentialId: "ANTHROPIC-AGENT-SKILLS-2026",
      link: "https://verify.skilljar.com/c/wmwqu3q3agnc",
    },
    {
      title: "Claude 101",
      issuer: "Anthropic",
      date: "April 2026",
      credentialId: "ANTHROPIC-CLAUDE101-2026",
      link: "https://verify.skilljar.com/c/im8wj8iy4qkq",
    },
    {
      title: "Introduction to Claude Cowork",
      issuer: "Anthropic",
      date: "April 2026",
      credentialId: "ANTHROPIC-COWORK-2026",
      link: "https://verify.skilljar.com/c/ywhufzei7knu",
    },
    {
      title: "Introduction to Subagents",
      issuer: "Anthropic",
      date: "April 2026",
      credentialId: "ANTHROPIC-SUBAGENTS-2026",
      link: "https://verify.skilljar.com/c/9evbk9h2ziks",
    },
    {
      title: "Unit 1: Foundations of Agents",
      issuer: "Hugging Face",
      date: "March 2025",
      credentialId: "Sayed1699",
      link: "https://huggingface.co/datasets/agents-course/certificates/resolve/main/certificates/Sayed1699/2025-03-06.png",
    },
    {
      title: "Build Apps with Windsurf’s AI Coding Agents!",
      issuer: "DeepLearning.AI",
      date: "March 2025",
      credentialId: "Windsurf-AI-Coding-Agents",
      link: "https://learn.deeplearning.ai/accomplishments/dea26207-b5d7-4835-8604-6446843f6412",
    },
    {
      title: "Introduction to iOS Mobile Application Development",
      issuer: "Meta",
      date: "March 2024",
      credentialId: "META-iOS-2024",
      link: "https://www.coursera.org/account/accomplishments/verify/RTQPXNUV7DTP?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    },
    {
      title: "Foundation of Cybersecurity",
      issuer: "Google",
      date: "November 2023",
      credentialId: "GOOGLE-CYBER-2023",
      link: "https://www.coursera.org/account/accomplishments/verify/U7E7L36XLJQM?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
    },
    {
      title: "Introduction to Flutter Development Using Dart",
      issuer: "The App Brewery",
      date: "May 2020",
      credentialId: "TAB-FLUTTER-2020",
      link: "https://drive.google.com/file/d/1H8VSfyoGbaJ7KYdWHsLtpvbPuSienV96/view?pli=1",
    },
    {
      title: "Complete Android App Development Masterclass In Bangla",
      issuer: "MSB Academy",
      date: "April 2020",
      credentialId: "MSB-ANDROID-2020",
      link: "",
    },
    {
      title: "Neural Networks and Deep Learning",
      issuer: "Coursera",
      date: "December 2019",
      credentialId: "R68FCJD7E2BR",
      link: "https://www.coursera.org/account/accomplishments/verify/R68FCJD7E2BR",
    },
    {
      title: "Sequence Models",
      issuer: "Coursera",
      date: "November 2019",
      credentialId: "C67X3DNVUX8A",
      link: "https://www.coursera.org/account/accomplishments/verify/C67X3DNVUX8A",
    },
    {
      title: "Natural Language Processing in TensorFlow",
      issuer: "Coursera",
      date: "October 2019",
      credentialId: "3YLC22XKMAA7",
      link: "https://www.coursera.org/account/accomplishments/verify/3YLC22XKMAA7",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="https://v0-portfolio-site-development-ebon.vercel.app/images/abu-sayed-profile.jpg"
                alt="Abu Sayed Chowdhury"
                width={32}
                height={32}
                className="rounded-full transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse"></div>
            </div>
            <h1 className="text-xl font-bold text-primary">Abu Sayed</h1>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center space-x-6">
              {["about", "experience", "projects", "skills", "certifications", "contact"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${activeSection === section ? "text-primary border-b-2 border-primary" : ""
                    }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                size="sm"
                className="flex hover:scale-105 transition-transform duration-200"
                onClick={handleResumeDownload}
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <div
            className={`mb-8 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
              <Image
                src="https://v0-portfolio-site-development-ebon.vercel.app/images/abu-sayed-profile.jpg"
                alt="Abu Sayed Chowdhury - Senior Software Specialist"
                width={160}
                height={160}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance animate-fade-in-up">Abu Sayed Chowdhury</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2 animate-fade-in-up animation-delay-200">
              Senior Software Specialist @SSL Wireless
            </p>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up animation-delay-400">
              6+ years of Flutter expertise • 20+ successful mobile apps • Fintech • AI Automation
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
              {[
                { number: "20+", label: "Apps Delivered" },
                { number: "6+", label: "Years Experience" },
                { number: "200K+", label: "Users Served" },
                { number: "15+", label: "Team Members Mentored" },
              ].map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in-left">
              <p className="text-lg leading-relaxed mb-6">
                Senior Flutter Developer with 6+ years of experience building scalable, high-performance mobile apps.
                I have successfully delivered 20+ applications in fintech, e-commerce, and enterprise domains,
                helping businesses launch secure, user-friendly, and growth-oriented digital products.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                My expertise includes Flutter &amp; Dart advanced concepts, state management (BLoC, Riverpod, GetX),
                fintech solutions with secure payment integrations, and AI automation using Google ADK, n8n, and MCP.
                Beyond coding, I enjoy mentoring developers and fostering a positive, collaborative team culture.
              </p>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-fade-in-right">
              {[
                { number: "20+", label: "Apps Delivered" },
                { number: "6+", label: "Years Experience" },
                { number: "200K+", label: "Users Served" },
                { number: "15+", label: "Team Members Mentored" },
              ].map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="relative hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute left-0 top-6 w-1 h-16 bg-primary rounded-full animate-pulse" />
                <CardHeader className="pl-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pl-8">
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:rotate-1 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <div className="flex flex-col items-end gap-1">
                      <Badge
                        variant="secondary"
                        className="text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                      >
                        {project.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{project.year}</span>
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed mb-3">{project.description}</CardDescription>
                  <div className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md inline-block group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {project.impact}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.link && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full hover:!bg-primary hover:!text-white hover:!border-primary [&:hover>a]:!text-white [&:hover>a>svg]:!text-white transition-all duration-200"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:!text-white">
                        <ExternalLink className="mr-2 h-3 w-3 hover:!text-white" />
                        View Project
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <Card
                key={index}
                className="hover:shadow-md transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-primary" />
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Certifications & Education</h2>

          {/* Education */}
          <div className="mb-12 animate-fade-in-up animation-delay-200">
            <h3 className="text-xl font-semibold mb-6">Education</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">M.Sc. in Computer Science</CardTitle>
                  <CardDescription>Jahangirnagar University, Bangladesh</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">2020 – 2022</span>
                    <Badge variant="outline">CGPA: 3.63/4.0</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">B.Sc. in Computer Science</CardTitle>
                  <CardDescription>Bangladesh Army International University of Science and Technology</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">2016 – 2020</span>
                    <Badge variant="outline">CGPA: 3.87/4.0</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-fade-in-up animation-delay-400">
            <h3 className="text-xl font-semibold mb-6">Professional Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base leading-tight">{cert.title}</CardTitle>
                    <CardDescription className="text-sm">{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-muted-foreground">{cert.date}</span>
                      <Badge variant="outline" className="text-xs">
                        <Award className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    </div>
                    {cert.link && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full hover:!bg-primary hover:!text-white hover:!border-primary transition-all duration-200"
                        asChild
                      >
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-3 w-3" />
                          View Certificate
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 animate-fade-in-up">Let's Build Something Amazing Together</h2>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up animation-delay-200">
            Ready to bring your mobile app vision to life? I'm passionate about creating exceptional Flutter
            applications that deliver real value to users. Let's discuss your project!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up animation-delay-400">
            <Button size="lg" className="text-lg px-8 hover:scale-105 transition-transform duration-200" asChild>
              <a href="mailto:sayem227@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                sayem227@gmail.com
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 hover:!bg-primary hover:!text-white hover:!border-primary hover:scale-105 transition-all duration-200"
              asChild
            >
              <a href="tel:+8801708194191">
                <Phone className="mr-2 h-5 w-5" />
                +8801708194191
              </a>
            </Button>
          </div>
          <div className="flex justify-center gap-4 animate-fade-in-up animation-delay-600">
            {[
              { href: "https://github.com/AscEmon", icon: Github },
              {
                href: "https://www.linkedin.com/in/abu-sayed-chowdhury?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                icon: Linkedin,
              },
              { href: "https://medium.com/@sayem227", icon: "medium" },
            ].map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className="hover:!bg-primary hover:!text-white hover:!border-primary hover:scale-110 hover:rotate-12 transition-all duration-300"
                asChild
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.icon === "medium" ? (
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                    </svg>
                  ) : (
                    <social.icon className="h-5 w-5" />
                  )}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-muted/30">
        <div className="container max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Abu Sayed Chowdhury.</p>
        </div>
      </footer>
    </div>
  )
}

// "use client"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { ThemeToggle } from "@/components/theme-toggle"
// import {
//   Mail,
//   Phone,
//   Github,
//   Linkedin,
//   ExternalLink,
//   Download,
//   MapPin,
//   Calendar,
//   Award,
//   Users,
//   Code2,
// } from "lucide-react"
// import Image from "next/image"
// import { useState, useEffect } from "react"

// interface Certification {
//   title: string
//   issuer: string
//   date: string
//   credentialId: string
//   link: string
// }

// interface Project {
//   title: string
//   description: string
//   tech: string[]
//   category: string
//   impact: string
//   year: string
//   link: string
// }

// interface Experience {
//   title: string
//   company: string
//   period: string
//   location: string
//   achievements: string[]
// }

// interface SkillGroup {
//   category: string
//   items: string[]
// }

// export default function Portfolio() {
//   const [isVisible, setIsVisible] = useState(false)
//   const [activeSection, setActiveSection] = useState("")

//   useEffect(() => {
//     setIsVisible(true)

//     const handleScroll = () => {
//       const sections = ["about", "experience", "projects", "skills", "certifications", "contact"]
//       const scrollPosition = window.scrollY + 100

//       for (const section of sections) {
//         const element = document.getElementById(section)
//         if (element) {
//           const { offsetTop, offsetHeight } = element
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section)
//             break
//           }
//         }
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const handleResumeDownload = () => {
//     // Download the PDF resume file
//     const link = document.createElement("a")
//     link.href = "/Portfolio/resume/Resume_of_Mobile_Developer_5_JU_Sayed.pdf"
//     link.download = "Abu_Sayed_Chowdhury_Resume.pdf"
//     link.target = "_blank"
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
//   }

//   const projects: Project[] = [
//     {
//       title: "Autosafe_json",
//       description:
//         "Dart package that prevents app crashes caused by complex or inconsistent JSON responses. Confidently handle any backend response — lists, maps, nulls, or type mismatches — without extra code.",
//       tech: ["Dart", "JSON Parsing", "Flutter Plugin"],
//       category: "Open Source",
//       impact: "Zero-crash JSON handling",
//       year: "2025",
//       link: "https://pub.dev/packages/autosafe_json",
//     },
//     {
//       title: "Sumo Restaurants",
//       description:
//         "Restaurant ordering app with SQLite-based offline support, cash point integration, gift cards, and seamless food ordering experience.",
//       tech: ["Flutter", "SQLite", "Gift Cards", "POS"],
//       category: "Enterprise",
//       impact: "Streamlined restaurant operations",
//       year: "2025",
//       link: "https://apps.apple.com/us/app/sumo-restaurants/id6504637498",
//     },
//     {
//       title: "Othership Workplace Scheduler",
//       description:
//         "Enterprise-grade booking and scheduling platform for meeting rooms, desks, and workspaces with real-time availability.",
//       tech: ["Flutter", "Riverpod", "REST API", "Firebase"],
//       category: "Enterprise",
//       impact: "Improved workspace utilization by 40%",
//       year: "2023",
//       link: "https://apps.apple.com/us/app/othership-workplace-scheduler/id6449196566",
//     },
//     {
//       title: "Othership Visitor Management",
//       description:
//         "Comprehensive and customizable visitor management solution that simplifies visitor check-ins and enhances security.",
//       tech: ["Flutter", "Bloc", "KIOSK", "Real-time"],
//       category: "Enterprise",
//       impact: "Streamlined visitor management",
//       year: "2024",
//       link: "https://apps.apple.com/us/app/othership-room-display/id6479629590",
//     },
//     {
//       title: "Othership Room Display",
//       description: "KIOSK application developed with Bloc for managing meeting room schedules and display systems on tablets and iPads.",
//       tech: ["Flutter", "Flutter Bloc", "KIOSK", "iPad"],
//       category: "Enterprise",
//       impact: "Streamlined room management",
//       year: "2024",
//       link: "https://apps.apple.com/us/app/othership-room-display/id6479629590",
//     },
//     {
//       title: "myBKB app",
//       description:
//         "Secure mobile banking application with biometric authentication, transaction history, and seamless API integration.",
//       tech: ["Flutter", "Firebase", "API Integration"],
//       category: "FinTech",
//       impact: "Processed $1M+ in transactions",
//       year: "2025",
//       link: "https://apps.apple.com/us/app/mybkb-app/id6739765439",
//     },
//     {
//       title: "Disaster Alert for BD",
//       description:
//         "Automates disaster management — weather updates, early warnings, shelter landmarks, fire services, medical service, emergency camps, and emergency SMS to relatives.",
//       tech: ["SwiftUI", "CoreData", "API Integration"],
//       category: "Utility",
//       impact: "Real-time disaster alerts for BD",
//       year: "2024",
//       link: "https://apps.apple.com/us/app/disaster-alert-for-bd/id6743391177",
//     },
//     {
//       title: "BDTax",
//       description:
//         "Online tax filing service allowing users to upload tax documents, with consultant-prepared returns and acknowledgment slips via email and courier.",
//       tech: ["Flutter", "Government API", "PDF Generation"],
//       category: "Government",
//       impact: "Served 50K+ taxpayers",
//       year: "2024",
//       link: "https://apps.apple.com/us/app/bdtax-tax-return-online-bd/id6444408079",
//     },
//     {
//       title: "BDHonda+",
//       description:
//         "All-in-one platform for Bangladeshi Honda bikers — nearby dealers, maintenance guidelines, spare parts info, and safety rules.",
//       tech: ["Flutter", "Firebase", "API Integration"],
//       category: "Utility",
//       impact: "Enhanced biker experience",
//       year: "2024",
//       link: "https://play.google.com/store/apps/details?id=com.sslwireless.bdhondaPlus&hl=en",
//     },
//     {
//       title: "BASIC Bank App (Magpie)",
//       description:
//         "Secure mobile banking application with biometric authentication, transaction history, and seamless API integration.",
//       tech: ["Flutter", "Security", "REST API", "Biometrics"],
//       category: "FinTech",
//       impact: "Processed $2M+ in transactions",
//       year: "2023",
//       link: "https://apps.apple.com/us/app/magpie-app/id6449897818",
//     },
//     {
//       title: "Biometric Callback",
//       description:
//         "Open-source Flutter package for handling biometric authentication callbacks across Android and iOS platforms.",
//       tech: ["Dart", "Flutter", "Biometrics"],
//       category: "Open Source",
//       impact: "Simplified biometric auth flow",
//       year: "2023",
//       link: "https://pub.dev/packages/biometric_callback",
//     },
//     {
//       title: "Desco Utility App",
//       description: "Utility service application for electricity bill payments, account management, and usage tracking.",
//       tech: ["Flutter", "Riverpod", "Payment Integration"],
//       category: "Utility",
//       impact: "20K+ downloads",
//       year: "2022",
//       link: "https://apps.apple.com/us/app/desco/id1196216622",
//     },
//     {
//       title: "Ecosuponno",
//       description:
//         "E-commerce application built with GraphQL and GetX for a seamless online shopping experience.",
//       tech: ["Flutter", "GraphQL", "GetX"],
//       category: "E-Commerce",
//       impact: "Full e-commerce platform",
//       year: "2023",
//       link: "https://play.google.com/store/apps/details?id=com.sslwireless.ecosuponno",
//     },
//     {
//       title: "Akij Cement CRM",
//       description: "CRM application with polished UI, enhancing client interactions and productivity for Akij Cement.",
//       tech: ["Flutter", "GetX", "CRM", "UI/UX"],
//       category: "Enterprise",
//       impact: "Enhanced client productivity",
//       year: "2022",
//       link: "https://apps.apple.com/us/app/akij-cement-crm/id6446422360",
//     },
//     {
//       title: "Flutter_sslcommerz",
//       description:
//         "Open-source Flutter payment gateway SDK published on pub.dev, enabling secure SSLCommerz payment processing for Android and iOS.",
//       tech: ["Flutter", "Dart", "Payment Gateway", "Dart Package"],
//       category: "Open Source",
//       impact: "500+ pub.dev downloads",
//       year: "2021",
//       link: "https://pub.dev/packages/flutter_sslcommerz",
//     },
//     {
//       title: "SSL_CLI",
//       description:
//         "Command-line tool for automating Flutter project setup, module generation, and APK delivery via Telegram bot.",
//       tech: ["Dart", "CLI", "Automation", "Telegram Bot"],
//       category: "DevTools",
//       impact: "Reduced setup time by 70%",
//       year: "2021",
//       link: "https://pub.dev/packages/ssl_cli",
//     },
//     {
//       title: "Pay By Link (PBL)",
//       description: "Seamless payment link generation and processing app built with Riverpod state management.",
//       tech: ["Flutter", "Riverpod", "Payment Integration"],
//       category: "FinTech",
//       impact: "Simplified payment flows",
//       year: "2023",
//       link: "https://play.google.com/store/apps/details?id=com.sslwireless.paybylink&hl=en_GB",
//     },
//     {
//       title: "BOnline for Merchants",
//       description: "Merchant management app enabling live transaction tracking, order management, and customer insights.",
//       tech: ["Flutter", "Riverpod", "Analytics"],
//       category: "FinTech",
//       impact: "Enhanced merchant experience",
//       year: "2022",
//       link: "https://apps.apple.com/us/app/bonline-for-merchants/id6444676928",
//     },
//     {
//       title: "B71",
//       description:
//         "E-commerce application built with GraphQL and GetX for the B71 cricket brand, associated with SSL Wireless.",
//       tech: ["Flutter", "GraphQL", "GetX"],
//       category: "E-Commerce",
//       impact: "Full e-commerce platform",
//       year: "2021",
//       link: "",
//     },
//     {
//       title: "Rebella (ARFace App)",
//       description: "Augmented reality-based face detection application for Android and iOS platforms.",
//       tech: ["Flutter", "AR", "Face Detection", "Camera"],
//       category: "AR/VR",
//       impact: "Innovative AR experience",
//       year: "2022",
//       link: "https://apps.apple.com/us/app/rebella/id6444242093",
//     },
//     {
//       title: "Employee Buddy",
//       description: "Employee management application available on Android and iOS to enhance team collaboration.",
//       tech: ["Flutter", "Riverpod", "Team Management"],
//       category: "Enterprise",
//       impact: "Enhanced team collaboration",
//       year: "2021",
//       link: "https://apps.apple.com/us/app/employee-buddy/id1517212760",
//     },
//     {
//       title: "Rukon",
//       description:
//         "Client-based Flutter application built with GetX state management, associated with SSL Wireless.",
//       tech: ["Flutter", "GetX", "REST API"],
//       category: "Enterprise",
//       impact: "Delivered on schedule",
//       year: "2021",
//       link: "",
//     },
//     {
//       title: "Sohooze Kinun",
//       description:
//         "E-commerce app developed using Flutter with Provider state management during early career at Ringersoft Limited.",
//       tech: ["Flutter", "Provider", "E-Commerce"],
//       category: "E-Commerce",
//       impact: "Published on Play Store",
//       year: "2020",
//       link: "https://play.google.com/store/apps/details?id=com.ringersoft.sohoozekinun",
//     },
//   ]

//   const skills: SkillGroup[] = [
//     { category: "Mobile Frameworks", items: ["Flutter", "SwiftUI"] },
//     { category: "Programming Languages", items: ["Dart", "Swift", "Python"] },
//     { category: "State Management", items: ["Riverpod", "Bloc", "GetX", "Provider"] },
//     { category: "Databases", items: ["SQLite", "Hive", "Firebase", "ObjectBox"] },
//     { category: "CI/CD & DevOps", items: ["GitHub Actions", "Bitbucket Pipelines", "Codemagic"] },
//     { category: "AI IDE & Tools", items: ["Windsurf", "Cursor", "v0", "MCP", "NoteBookLM", "Gamma"] },
//   ]

//   const experiences: Experience[] = [
//     {
//       title: "Senior Software Specialist",
//       company: "SSL Wireless",
//       period: "March 2021 – Present",
//       location: "Dhaka, Bangladesh",
//       achievements: [
//         "Took ownership of the development process and led sessions for 300+ colleagues focusing on Flutter and AI Development.",
//         "Led development of 15+ Flutter applications with 100% on-time delivery and zero critical bugs in production",
//         "Architected scalable mobile solutions serving 200K+ users across Android and iOS platforms",
//         "Improved API response times by 30% through optimized REST and GraphQL integration patterns",
//         "Mentored and upskilled a team of 15 developers on advanced state management and bloc architecture",
//         "Established CI/CD pipelines reducing deployment time from 2 hours to 15 minutes",
//         "Led technical interviews and contributed to hiring 5 new developers",
//       ],
//     },
//     {
//       title: "Software Engineer",
//       company: "Appbd",
//       period: "Nov 2020 – March 2021",
//       location: "Dhaka, Bangladesh",
//       achievements: [
//         "Skilled in implementing the Model-View-Controller (MVC) pattern using GetX for optimized app structure and maintainability.",
//         "Proficient in integrating various Firebase services, including database, storage, Crashlytics, Analytics, Firebase Messaging, local notifications, and push notifications for Android and iOS.",
//         "Utilized custom painters with animation to create engaging user interfaces and enhanced user experience.",
//         "Skilled in utilizing animation and animated widgets to create dynamic and responsive interfaces, improving the app's overall aesthetic and usability",

//       ],
//     },
//     {
//       title: "Mobile Application Developer",
//       company: "RingerSoft Limited",
//       period: "March 2020 – Oct 2020",
//       location: "Chattogram, Bangladesh",
//       achievements: [
//         "Experienced in developing school management and E-commerce apps, ensuring efficient functionality and user experience.",
//         "Successfully developed an E-commerce app using Flutter and Provider state management, meeting a tight project schedule and delivering a high-quality product.",
//         "Proficient in Android Studio and Java, utilizing these tools to develop robust and efficient applications with optimized code.",
//         "Skilled in deploying apps on Play Store, ensuring proper app store guidelines are met and the app is easily accessible to users.",
//       ],
//     },
//   ]

//   const certifications: Certification[] = [
//     {
//       title: "Claude Code in Action",
//       issuer: "Anthropic",
//       date: "April 2026",
//       credentialId: "ANTHROPIC-CC-2026",
//       link: "",
//     },
//     {
//       title: "Introduction to Agent Skills",
//       issuer: "Anthropic",
//       date: "April 2026",
//       credentialId: "ANTHROPIC-AGENT-SKILLS-2026",
//       link: "",
//     },
//     {
//       title: "Claude 101",
//       issuer: "Anthropic",
//       date: "April 2026",
//       credentialId: "ANTHROPIC-CLAUDE101-2026",
//       link: "",
//     },
//     {
//       title: "Introduction to Claude Cowork",
//       issuer: "Anthropic",
//       date: "April 2026",
//       credentialId: "ANTHROPIC-COWORK-2026",
//       link: "",
//     },
//     {
//       title: "Introduction to Subagents",
//       issuer: "Anthropic",
//       date: "April 2026",
//       credentialId: "ANTHROPIC-SUBAGENTS-2026",
//       link: "",
//     },
//     {
//       title: "28th International Conference on Computer and Information Technology (ICCIT)",
//       issuer: "IEEE",
//       date: "December 2025",
//       credentialId: "PID 2085",
//       link: "",
//     },
//     {
//       title: "Unit 1: Foundations of Agents",
//       issuer: "Hugging Face",
//       date: "March 2025",
//       credentialId: "Sayed1699",
//       link: "https://huggingface.co/datasets/agents-course/certificates/resolve/main/certificates/Sayed1699/2025-03-06.png",
//     },
//     {
//       title: "Build Apps with Windsurf’s AI Coding Agents!",
//       issuer: "DeepLearning.AI",
//       date: "March 2025",
//       credentialId: "Windsurf-AI-Coding-Agents",
//       link: "https://learn.deeplearning.ai/accomplishments/dea26207-b5d7-4835-8604-6446843f6412",
//     },
//     {
//       title: "Introduction to iOS Mobile Application Development",
//       issuer: "Meta",
//       date: "March 2024",
//       credentialId: "META-iOS-2024",
//       link: "https://www.coursera.org/account/accomplishments/verify/RTQPXNUV7DTP?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
//     },
//     {
//       title: "Foundation of Cybersecurity",
//       issuer: "Google",
//       date: "November 2023",
//       credentialId: "GOOGLE-CYBER-2023",
//       link: "https://www.coursera.org/account/accomplishments/verify/U7E7L36XLJQM?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
//     },
//     {
//       title: "Introduction to Flutter Development Using Dart",
//       issuer: "The App Brewery",
//       date: "May 2020",
//       credentialId: "TAB-FLUTTER-2020",
//       link: "https://drive.google.com/file/d/1H8VSfyoGbaJ7KYdWHsLtpvbPuSienV96/view?pli=1",
//     },
//     {
//       title: "Complete Android App Development Masterclass In Bangla",
//       issuer: "MSB Academy",
//       date: "April 2020",
//       credentialId: "MSB-ANDROID-2020",
//       link: "",
//     },
//     {
//       title: "Neural Networks and Deep Learning",
//       issuer: "Coursera",
//       date: "December 2019",
//       credentialId: "R68FCJD7E2BR",
//       link: "https://www.coursera.org/account/accomplishments/verify/R68FCJD7E2BR",
//     },
//     {
//       title: "Sequence Models",
//       issuer: "Coursera",
//       date: "November 2019",
//       credentialId: "C67X3DNVUX8A",
//       link: "https://www.coursera.org/account/accomplishments/verify/C67X3DNVUX8A",
//     },
//     {
//       title: "Natural Language Processing in TensorFlow",
//       issuer: "Coursera",
//       date: "October 2019",
//       credentialId: "3YLC22XKMAA7",
//       link: "https://www.coursera.org/account/accomplishments/verify/3YLC22XKMAA7",
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header */}
//       <header
//         className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
//       >
//         <div className="flex h-16 items-center justify-between px-5">
//           <div className="flex items-center space-x-3">
//             <div className="relative">
//               <Image
//                 src="https://v0-portfolio-site-development-ebon.vercel.app/images/abu-sayed-profile.jpg"
//                 alt="Abu Sayed Chowdhury"
//                 width={32}
//                 height={32}
//                 className="rounded-full transition-transform duration-300 hover:scale-110"
//               />
//               <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse"></div>
//             </div>
//             <h1 className="text-xl font-bold text-primary">Abu Sayed</h1>
//           </div>

//           <div className="flex items-center gap-4">
//             <nav className="hidden md:flex items-center space-x-6">
//               {["about", "experience", "projects", "skills", "certifications", "contact"].map((section) => (
//                 <a
//                   key={section}
//                   href={`#${section}`}
//                   className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${activeSection === section ? "text-primary border-b-2 border-primary" : ""
//                     }`}
//                 >
//                   {section.charAt(0).toUpperCase() + section.slice(1)}
//                 </a>
//               ))}
//             </nav>

//             <div className="flex items-center gap-2">
//               <ThemeToggle />
//               <Button
//                 size="sm"
//                 className="flex hover:scale-105 transition-transform duration-200"
//                 onClick={handleResumeDownload}
//               >
//                 <Download className="mr-2 h-4 w-4" />
//                 Resume
//               </Button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="py-20 px-4">
//         <div className="container max-w-4xl mx-auto text-center">
//           <div
//             className={`mb-8 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
//           >
//             <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
//               <Image
//                 src="https://v0-portfolio-site-development-ebon.vercel.app/images/abu-sayed-profile.jpg"
//                 alt="Abu Sayed Chowdhury - Senior Flutter Developer"
//                 width={160}
//                 height={160}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 priority
//               />
//             </div>
//             <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance animate-fade-in-up">Abu Sayed Chowdhury</h1>
//             <p className="text-xl md:text-2xl text-muted-foreground mb-2 animate-fade-in-up animation-delay-200">
//               Senior Software Specialist
//             </p>
//             <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up animation-delay-400">
//               5+ years of Flutter expertise • 20+ successful mobile apps • Technical mentor
//             </p>
//             <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
//               {[
//                 { number: "20+", label: "Apps Delivered" },
//                 { number: "5+", label: "Years Experience" },
//                 { number: "200K+", label: "Users Served" },
//                 { number: "15+", label: "Team Members Mentored" },
//               ].map((stat, index) => (
//                 <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
//                   <CardContent className="p-6 text-center">
//                     <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
//                       {stat.number}
//                     </div>
//                     <div className="text-sm text-muted-foreground">{stat.label}</div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-16 px-4 bg-muted/30">
//         <div className="container max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">About Me</h2>
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div className="animate-fade-in-left">
//               <p className="text-lg leading-relaxed mb-6">
//                 Passionate Senior Software Specialist with 5+ years of expertise in Flutter development, mobile app
//                 architecture, and technical leadership. I've successfully delivered 20+ high-performance applications
//                 serving over 200,000 users across Android and iOS platforms.
//               </p>
//               <p className="text-lg leading-relaxed mb-6">
//                 My expertise spans scalable mobile architectures, CI/CD pipeline optimization, secure API integrations,
//                 and team mentorship. I'm particularly passionate about clean code, performance optimization, and
//                 building products that make a real impact on users' lives.
//               </p>
//               <div className="flex items-center gap-4 text-muted-foreground">
//                 <div className="flex items-center gap-2">
//                   <MapPin className="h-4 w-4" />
//                   <span>Dhaka, Bangladesh</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Calendar className="h-4 w-4" />
//                   <span>Available for opportunities</span>
//                 </div>
//               </div>
//             </div>
//             <div className="grid grid-cols-2 gap-4 animate-fade-in-right">
//               {[
//                 { number: "20+", label: "Apps Delivered" },
//                 { number: "5+", label: "Years Experience" },
//                 { number: "200K+", label: "Users Served" },
//                 { number: "15+", label: "Team Members Mentored" },
//               ].map((stat, index) => (
//                 <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
//                   <CardContent className="p-6 text-center">
//                     <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
//                       {stat.number}
//                     </div>
//                     <div className="text-sm text-muted-foreground">{stat.label}</div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section id="experience" className="py-16 px-4">
//         <div className="container max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Professional Experience</h2>
//           <div className="space-y-8">
//             {experiences.map((exp, index) => (
//               <Card
//                 key={index}
//                 className="relative hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
//                 style={{ animationDelay: `${index * 200}ms` }}
//               >
//                 <div className="absolute left-0 top-6 w-1 h-16 bg-primary rounded-full animate-pulse" />
//                 <CardHeader className="pl-8">
//                   <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
//                     <div>
//                       <CardTitle className="text-xl">{exp.title}</CardTitle>
//                       <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
//                     </div>
//                     <div className="text-sm text-muted-foreground">
//                       <div className="flex items-center gap-2">
//                         <Calendar className="h-4 w-4" />
//                         {exp.period}
//                       </div>
//                       <div className="flex items-center gap-2 mt-1">
//                         <MapPin className="h-4 w-4" />
//                         {exp.location}
//                       </div>
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="pl-8">
//                   <ul className="space-y-3">
//                     {exp.achievements.map((achievement, i) => (
//                       <li key={i} className="flex items-start gap-3">
//                         <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
//                         <span className="text-sm leading-relaxed">{achievement}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-16 px-4 bg-muted/30">
//         <div className="container max-w-6xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Featured Projects</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {projects.map((project, index) => (
//               <Card
//                 key={index}
//                 className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:rotate-1 group animate-fade-in-up"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <CardHeader>
//                   <div className="flex items-start justify-between gap-2 mb-2">
//                     <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors duration-300">
//                       {project.title}
//                     </CardTitle>
//                     <div className="flex flex-col items-end gap-1">
//                       <Badge
//                         variant="secondary"
//                         className="text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
//                       >
//                         {project.category}
//                       </Badge>
//                       <span className="text-xs text-muted-foreground">{project.year}</span>
//                     </div>
//                   </div>
//                   <CardDescription className="text-sm leading-relaxed mb-3">{project.description}</CardDescription>
//                   <div className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md inline-block group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
//                     {project.impact}
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex flex-wrap gap-1 mb-4">
//                     {project.tech.map((tech, i) => (
//                       <Badge
//                         key={i}
//                         variant="outline"
//                         className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
//                       >
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                   {project.link && (
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       className="w-full hover:!bg-primary hover:!text-white hover:!border-primary [&:hover>a]:!text-white [&:hover>a>svg]:!text-white transition-all duration-200"
//                       asChild
//                     >
//                       <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:!text-white">
//                         <ExternalLink className="mr-2 h-3 w-3 hover:!text-white" />
//                         View Project
//                       </a>
//                     </Button>
//                   )}
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="py-16 px-4">
//         <div className="container max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Technical Expertise</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {skills.map((skillGroup, index) => (
//               <Card
//                 key={index}
//                 className="hover:shadow-md transition-shadow animate-fade-in-up"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <CardHeader>
//                   <CardTitle className="text-lg flex items-center gap-2">
//                     <Code2 className="h-5 w-5 text-primary" />
//                     {skillGroup.category}
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex flex-wrap gap-2">
//                     {skillGroup.items.map((skill, i) => (
//                       <Badge
//                         key={i}
//                         variant="secondary"
//                         className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
//                       >
//                         {skill}
//                       </Badge>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="certifications" className="py-16 px-4 bg-muted/30">
//         <div className="container max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">Certifications & Education</h2>

//           {/* Education */}
//           <div className="mb-12 animate-fade-in-up animation-delay-200">
//             <h3 className="text-xl font-semibold mb-6">Education</h3>
//             <div className="grid md:grid-cols-2 gap-6">
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="text-lg">M.Sc. in Computer Science</CardTitle>
//                   <CardDescription>Jahangirnagar University, Bangladesh</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex justify-between items-center">
//                     <span className="text-sm text-muted-foreground">2020 – 2022</span>
//                     <Badge variant="outline">CGPA: 3.63/4.0</Badge>
//                   </div>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="text-lg">B.Sc. in Computer Science</CardTitle>
//                   <CardDescription>Bangladesh Army International University of Science and Technology</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex justify-between items-center">
//                     <span className="text-sm text-muted-foreground">2016 – 2020</span>
//                     <Badge variant="outline">CGPA: 3.87/4.0</Badge>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>

//           {/* Certifications */}
//           <div className="animate-fade-in-up animation-delay-400">
//             <h3 className="text-xl font-semibold mb-6">Professional Certifications</h3>
//             <div className="grid md:grid-cols-2 gap-4">
//               {certifications.map((cert, index) => (
//                 <Card key={index} className="hover:shadow-md transition-shadow">
//                   <CardHeader className="pb-3">
//                     <CardTitle className="text-base leading-tight">{cert.title}</CardTitle>
//                     <CardDescription className="text-sm">{cert.issuer}</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="flex justify-between items-center mb-3">
//                       <span className="text-sm text-muted-foreground">{cert.date}</span>
//                       <Badge variant="outline" className="text-xs">
//                         <Award className="h-3 w-3 mr-1" />
//                         Verified
//                       </Badge>
//                     </div>
//                     {cert.link && (
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         className="w-full hover:!bg-primary hover:!text-white hover:!border-primary transition-all duration-200"
//                         asChild
//                       >
//                         <a href={cert.link} target="_blank" rel="noopener noreferrer">
//                           <ExternalLink className="mr-2 h-3 w-3" />
//                           View Certificate
//                         </a>
//                       </Button>
//                     )}
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-16 px-4">
//         <div className="container max-w-2xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-8 animate-fade-in-up">Let's Build Something Amazing Together</h2>
//           <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up animation-delay-200">
//             Ready to bring your mobile app vision to life? I'm passionate about creating exceptional Flutter
//             applications that deliver real value to users. Let's discuss your project!
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up animation-delay-400">
//             <Button size="lg" className="text-lg px-8 hover:scale-105 transition-transform duration-200" asChild>
//               <a href="mailto:sayem227@gmail.com">
//                 <Mail className="mr-2 h-5 w-5" />
//                 sayem227@gmail.com
//               </a>
//             </Button>
//             <Button
//               variant="outline"
//               size="lg"
//               className="text-lg px-8 hover:!bg-primary hover:!text-white hover:!border-primary hover:scale-105 transition-all duration-200"
//               asChild
//             >
//               <a href="tel:+8801708194191">
//                 <Phone className="mr-2 h-5 w-5" />
//                 +8801708194191
//               </a>
//             </Button>
//           </div>
//           <div className="flex justify-center gap-4 animate-fade-in-up animation-delay-600">
//             {[
//               { href: "https://github.com/AscEmon", icon: Github },
//               {
//                 href: "https://www.linkedin.com/in/abu-sayed-chowdhury?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
//                 icon: Linkedin,
//               },
//               { href: "https://medium.com/@sayem227", icon: "medium" },
//             ].map((social, index) => (
//               <Button
//                 key={index}
//                 variant="outline"
//                 size="icon"
//                 className="hover:!bg-primary hover:!text-white hover:!border-primary hover:scale-110 hover:rotate-12 transition-all duration-300"
//                 asChild
//               >
//                 <a href={social.href} target="_blank" rel="noopener noreferrer">
//                   {social.icon === "medium" ? (
//                     <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
//                       <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
//                     </svg>
//                   ) : (
//                     <social.icon className="h-5 w-5" />
//                   )}
//                 </a>
//               </Button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 px-4 border-t bg-muted/30">
//         <div className="container max-w-4xl mx-auto text-center text-sm text-muted-foreground">
//           <p>&copy; 2025 Abu Sayed Chowdhury.</p>
//         </div>
//       </footer>
//     </div>
//   )
// }