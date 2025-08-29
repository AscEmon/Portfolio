"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
    link.href = "/Portfolio/resume/Resume_of_Mobile_Developer_5_JU_Sayed.pdf"
    link.download = "Abu_Sayed_Chowdhury_Resume.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const projects = [
    {
      title: "Othership Workplace Scheduler",
      description:
        "Enterprise-grade booking and scheduling platform for meeting rooms, desks, and workspaces with real-time availability.",
      tech: ["Flutter", "Bloc", "REST API", "Firebase"],
      category: "Enterprise",
      impact: "Improved workspace utilization by 40%",
      year: "2023",
      link: "https://apps.apple.com/us/app/othership-workplace-scheduler/id6449196566",
    },
    {
      title: "Othership Room Display",
      description: "KIOSK application developed with Bloc for managing meeting room schedules and display systems.",
      tech: ["Flutter", "Bloc", "KIOSK", "Real-time"],
      category: "Enterprise",
      impact: "Streamlined room management",
      year: "2024",
      link: "https://apps.apple.com/us/app/othership-room-display/id6479629590",
    },
    {
      title: "Othership Visitor Management",
      description: "KIOSK application developed with Bloc for managing visitor schedules and display systems.",
      tech: ["Flutter", "Bloc", "KIOSK", "Real-time"],
      category: "Enterprise",
      impact: "Streamlined visitor management",
      year: "2025",
      link: "https://apps.apple.com/us/app/othership-room-display/id6479629590",
    },
    {
      title: "myBKB app",
      description: "myBKB app is a mobile application developed using Flutter that provides a secure mobile banking application with biometric authentication, transaction history, and seamless API integration.",
      tech: ["Flutter", "Firebase", "API Integration"],
      category: "FinTech",
      impact: "Processed $2M+ in transactions",
      year: "2025",
      link: "https://apps.apple.com/us/app/mybkb-app/id6739765439",
    },
    {
      title: "Magpie Banking",
      description:
        "Secure mobile banking application with biometric authentication, transaction history, and seamless API integration.",
      tech: ["Flutter", "Security", "REST API", "Biometrics"],
      category: "FinTech",
      impact: "Processed $1M+ in transactions",
      year: "2023",
      link: "https://apps.apple.com/us/app/magpie-app/id6449897818",
    },
    {
      title: "BDTax",
      description:
        "Government tax filing application simplifying compliance for taxpayers in Bangladesh with automated calculations.",
      tech: ["Flutter", "Government API", "PDF Generation"],
      category: "Government",
      impact: "Served 50K+ taxpayers",
      year: "2023",
      link: "https://apps.apple.com/us/app/bdtax-tax-return-online-bd/id6444408079",
    },
    {
      title: "Flutter_sslcommerz",
      description:
        "Open-source Flutter payment gateway package published on pub.dev, enabling secure payment processing.",
      tech: ["Flutter", "Payment Gateway", "Dart Package"],
      category: "Open Source",
      impact: "500+ pub.dev downloads", // Updated download count
      year: "2022",
      link: "https://pub.dev/packages/flutter_sslcommerz",
    },
    {
      title: "Desco Utility App",
      description: "Utility service application for electricity bill payments, account management, and usage tracking.",
      tech: ["Flutter", "Payment Integration", "Charts"],
      category: "Utility",
      impact: "20K+ downloads", // Updated download count
      year: "2023",
      link: "https://apps.apple.com/us/app/desco/id1196216622",
    },
    {
      title: "SSL_CLI",
      description:
        "Command-line tool for automating Flutter project setup, module generation, and APK delivery via Telegram bot.",
      tech: ["Dart", "CLI", "Automation", "Telegram Bot"],
      category: "DevTools",
      impact: "Reduced setup time by 70%",
      year: "2022",
      link: "https://pub.dev/packages/ssl_cli",
    },
    {
      title: "Akij Cement CRM",
      description: "CRM application with polished UI, enhancing client interactions and productivity for Akij Cement.",
      tech: ["Flutter", "CRM", "Analytics", "UI/UX"],
      category: "Enterprise",
      impact: "Enhanced client productivity",
      year: "2023",
      link: "https://apps.apple.com/us/app/akij-cement-crm/id6446422360",
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
      tech: ["Flutter", "Team Management", "Collaboration"],
      category: "Enterprise",
      impact: "Enhanced team collaboration",
      year: "2021",
      link: "https://apps.apple.com/us/app/employee-buddy/id1517212760",
    },
    {
      title: "Disaster Alert for BD",
      description: "Disaster Alert for BD is a SwiftUI app that provides real-time updates on natural disasters in Bangladesh. The app uses Core Data to store user preferences and disaster alerts, and integrates with a REST API to fetch the latest disaster information.",
      tech: ["SwiftUI", "CoreData", "API Integration"],
      category: "Utility",
      impact: "Enhanced team collaboration",
      year: "2024",
      link: "https://apps.apple.com/us/app/disaster-alert-for-bd/id6743391177",
    },
    {
      title: "BDHonda+",
      description: "Develop using Flutter to enhance user experience for Honda bikers.",
      tech: ["Flutter", "Firebase", "API Integration"],
      category: "Utility",
      impact: "Enhanced user experience",
      year: "2024",
      link: "https://play.google.com/store/apps/details?id=com.sslwireless.bdhondaPlus&hl=en",
    },
    {
      title: "Pay By Link (PBL)",
      description: "Develop using Flutter to provide a seamless payment experience for users.",
      tech: ["Flutter", "Firebase", "API Integration"],
      category: "FinTech",
      impact: "Enhanced user experience",
      year: "2022",
      link: "https://play.google.com/store/apps/details?id=com.sslwireless.paybylink&hl=en_GB",
    },
    {
      title: "BOnline for Merchants",
      description: "Develop using Flutter to provide a merchant of GMS can manage their live transactions, orders, and customers.",
      tech: ["Flutter", "Firebase", "API Integration"],
      category: "FinTech",
      impact: "Enhanced user experience",
      year: "2022",
      link: "https://apps.apple.com/us/app/bonline-for-merchants/id6444676928",
    }

  ]

  const skills = [
    { category: "Mobile Frameworks", items: ["Flutter", "SwiftUI", "React Native"] },
    { category: "Programming Languages", items: ["Dart", "Swift", "Kotlin", "Java", "TypeScript"] },
    { category: "State Management", items: ["Riverpod", "Bloc", "GetX", "Provider"] },
    { category: "Databases", items: ["SQLite", "Hive", "Firebase", "ObjectBox", "PostgreSQL"] },
    { category: "CI/CD & DevOps", items: ["GitHub Actions", "Bitbucket Pipelines", "Jenkins", "Docker"] },
    { category: "Design & Tools", items: ["Figma", "Adobe XD", "Jira", "Trello", "Postman"] },
  ]

  const experiences = [
    {
      title: "Senior Software Specialist",
      company: "SSL Wireless",
      period: "March 2021 – Present",
      location: "Dhaka, Bangladesh",
      achievements: [
        "Led development of 15+ Flutter applications with 100% on-time delivery and zero critical bugs in production",
        "Architected scalable mobile solutions serving 500K+ users across Android and iOS platforms",
        "Improved API response times by 30% through optimized REST and GraphQL integration patterns",
        "Mentored and upskilled a team of 15 developers on advanced state management and clean architecture",
        "Established CI/CD pipelines reducing deployment time from 2 hours to 15 minutes",
        "Led technical interviews and contributed to hiring 8 new developers",
      ],
    },
    {
      title: "Software Engineer",
      company: "Appbd",
      period: "Nov 2020 – March 2021",
      location: "Dhaka, Bangladesh",
      achievements: [
        "Designed and implemented scalable Flutter applications using GetX state management architecture",
        "Enhanced user engagement by 20% through custom animations and micro-interactions using CustomPainter",
        "Strengthened app stability by 30% through comprehensive Firebase integration and crash analytics",
        "Collaborated with UI/UX designers to implement pixel-perfect responsive designs",
      ],
    },
    {
      title: "Mobile Application Developer",
      company: "RingerSoft Limited",
      period: "March 2020 – Oct 2020",
      location: "Chattogram, Bangladesh",
      achievements: [
        "Built and published a full-featured e-commerce application with payment gateway integration",
        "Delivered school management systems for 15+ educational institutions with real-time data synchronization",
        "Implemented offline-first architecture ensuring 99.9% app availability",
        "Reduced app loading time by 40% through performance optimization techniques",
      ],
    },
  ]

  const certifications = [
    {
      title: "Unit 1: Foundations of Agents",
      issuer: "Hugging Face",
      date: "March 2025",
      credentialId: "Hugging-Face-Agents-Course",
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
      issuer: "Meta via Coursera",
      date: "March 2024",
      credentialId: "META-iOS-2024",
      link: "https://www.coursera.org/account/accomplishments/verify/RTQPXNUV7DTP?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    },
    {
      title: "Google Cybersecurity Certificate",
      issuer: "Google via Coursera",
      date: "November 2023",
      credentialId: "GOOGLE-CYBER-2023",
      link: "https://www.coursera.org/account/accomplishments/verify/U7E7L36XLJQM?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
    },
    {
      title: "Introduction to Flutter Development using Dart",
      issuer: "The App Brewery",
      date: "March 2020",
      credentialId: "TAB-FLUTTER-2020",
      link: "https://drive.google.com/file/d/1H8VSfyoGbaJ7KYdWHsLtpvbPuSienV96/view?pli=1",
    },
    {
      title: "Neural Networks and Deep Learning",
      issuer: "deeplearning.ai via Coursera",
      date: "December 2019",
      credentialId: "DL-NN-2019",
      link: "https://www.coursera.org/account/accomplishments/verify/R68FCJD7E2BR",
    },
    {
      title: "Natural Language Processing in TensorFlow",
      issuer: "deeplearning.ai via Coursera",
      date: "October 2019",
      credentialId: "DL-NLP-2019",
      link: "https://www.coursera.org/account/accomplishments/verify/3YLC22XKMAA7",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="container flex h-16 items-center justify-between">
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
          <Button
            size="sm"
            className="hidden md:flex hover:scale-105 transition-transform duration-200"
            onClick={handleResumeDownload}
          >
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>
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
                alt="Abu Sayed Chowdhury - Senior Flutter Developer"
                width={160}
                height={160}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance animate-fade-in-up">Abu Sayed Chowdhury</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2 animate-fade-in-up animation-delay-200">
              Senior Software Specialist
            </p>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up animation-delay-400">
              5+ years of Flutter expertise • 20+ successful mobile apps • Technical mentor & team lead
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
              {[
                { icon: Users, text: "500K+ Users Served" },
                { icon: Code2, text: "15+ Apps in Production" },
                { icon: Award, text: "Team of 15 Mentored" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 animate-fade-in-up`}
                  style={{ animationDelay: `${600 + index * 200}ms` }}
                >
                  <item.icon className="h-4 w-4 text-primary" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Button size="lg" className="text-lg px-8 hover:scale-105 transition-transform duration-200" asChild>
              <a href="mailto:sayem227@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent hover:scale-105 transition-transform duration-200"
              asChild
            >
              <a href="#projects">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Projects
              </a>
            </Button>
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
                Passionate Senior Software Specialist with 5+ years of expertise in Flutter development, mobile app
                architecture, and technical leadership. I've successfully delivered 20+ high-performance applications
                serving over 500,000 users across Android and iOS platforms.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                My expertise spans scalable mobile architectures, CI/CD pipeline optimization, secure API integrations,
                and team mentorship. I'm particularly passionate about clean code, performance optimization, and
                building products that make a real impact on users' lives.
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
                { number: "5+", label: "Years Experience" },
                { number: "500K+", label: "Users Served" },
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
                      className="w-full bg-transparent hover:scale-105 transition-transform duration-200"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
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
                      <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
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
              className="text-lg px-8 bg-transparent hover:scale-105 transition-transform duration-200"
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
                className="hover:scale-110 hover:rotate-12 transition-all duration-300 bg-transparent"
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
          <p>&copy; 2024 Abu Sayed Chowdhury. All rights reserved. Built with Next.js and deployed on Vercel.</p>
        </div>
      </footer>
    </div>
  )
}
