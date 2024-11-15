'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, Mail, Phone, MapPin, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { ServiceModal } from './service-modal'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<{ name: string; description: string } | null>(null)

  const services = [
    {
      name: "Bookkeeping",
      description: "Our comprehensive bookkeeping services ensure your financial records are accurate and up-to-date. We handle everything from transaction recording to reconciliation, giving you a clear picture of your financial health."
    },
    {
      name: "Financial Reporting",
      description: "We provide detailed, easy-to-understand financial reports that give you insights into your business performance. Our reports include balance sheets, income statements, cash flow statements, and customized reports tailored to your needs."
    },
    {
      name: "Tax Preparation",
      description: "Our tax experts stay current with the latest tax laws to maximize your deductions and ensure compliance. We handle personal and business tax returns, as well as planning strategies to minimize your tax liability."
    },
    {
      name: "Payroll Processing",
      description: "Let us take care of your payroll needs, from calculating wages and deductions to filing payroll taxes. Our service ensures your employees are paid accurately and on time, while keeping you compliant with labor laws."
    },
    {
      name: "Accounts Payable/Receivable",
      description: "We manage your AP/AR processes efficiently, ensuring timely payments to suppliers and prompt collection from customers. This service helps improve your cash flow and maintain good relationships with vendors and clients."
    },
    {
      name: "Financial Analysis",
      description: "Our financial analysis service provides deep insights into your business performance. We analyze trends, ratios, and key performance indicators to help you make informed decisions and strategize for growth."
    }
  ]

  const testimonials = [
    { name: "John Doe", company: "Tech Innovators Inc.", quote: "Back Office Solutions has transformed our financial processes. Their expertise is unmatched!" },
    { name: "Jane Smith", company: "Global Traders Ltd.", quote: "We've seen a 30% increase in efficiency since partnering with Back Office Solutions. Highly recommended!" },
    { name: "Mike Johnson", company: "Startup Ventures", quote: "As a growing startup, their scalable solutions have been invaluable to our success." }
  ]

  const teamMembers = [
    { name: "Sarah Thompson", role: "CEO", image: "/placeholder.svg?height=200&width=200" },
    { name: "David Chen", role: "Head of Accounting", image: "/placeholder.svg?height=200&width=200" },
    { name: "Emily Rodriguez", role: "Client Relations Manager", image: "/placeholder.svg?height=200&width=200" }
  ]

  const faqs = [
    { question: "How can outsourcing benefit my business?", answer: "Outsourcing can reduce costs, improve efficiency, and allow you to focus on core business activities." },
    { question: "Is my financial data secure?", answer: "We employ state-of-the-art security measures and adhere to strict confidentiality protocols to protect your data." },
    { question: "How do you ensure accuracy in financial reporting?", answer: "We use advanced software and have a multi-tier review process to ensure the highest level of accuracy." }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold">Back Office Solutions Services</div>
          <nav className="hidden md:flex space-x-4">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#why-us" className="hover:underline">Why Us</a>
            <a href="#testimonials" className="hover:underline">Testimonials</a>
            <a href="#team" className="hover:underline">Our Team</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <ChevronDown className={`h-6 w-6 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-primary-foreground text-primary p-4">
            <a href="#home" className="block py-2">Home</a>
            <a href="#services" className="block py-2">Services</a>
            <a href="#why-us" className="block py-2">Why Us</a>
            <a href="#testimonials" className="block py-2">Testimonials</a>
            <a href="#team" className="block py-2">Our Team</a>
            <a href="#contact" className="block py-2">Contact</a>
          </nav>
        )}
      </header>

      <main className="flex-grow">
        <section id="home" className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Expert Accounting Outsourcing Solutions</h1>
            <p className="text-xl mb-8">Focus on your core business while we handle your financial back office</p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto p-6 flex flex-col items-start text-left transition-transform hover:scale-105"
                  onClick={() => setSelectedService(service)}
                >
                  <CheckCircle className="h-6 w-6 text-primary mb-4" />
                  <span className="text-lg font-semibold">{service.name}</span>
                  <span className="text-sm text-muted-foreground mt-2">Click to learn more</span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Expertise</h3>
                <p>Our team of certified professionals brings years of experience in accounting and financial management.</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Customized Solutions</h3>
                <p>We tailor our services to meet the unique needs of your business, ensuring optimal results.</p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Cutting-edge Technology</h3>
                <p>We leverage the latest accounting software and tools to deliver accurate and efficient services.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                  <p className="mb-4 italic">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-background p-6 rounded-lg shadow-md text-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <form className="space-y-4">
                  <Input type="text" placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Input type="text" placeholder="Subject" />
                  <textarea
                    className="w-full p-3 border rounded-md"
                    rows={4}
                    placeholder="Your Message"
                  ></textarea>
                  <Button type="submit">Send Message</Button>
                </form>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Our Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 mr-4" />
                    <span>info@backofficesolutions.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 mr-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 mr-4" />
                    <span>123 Business St, Suite 100, City, State 12345</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Back Office Solutions Services. All rights reserved.</p>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4">
        <Button
          size="icon"
          className="bg-accent text-accent-foreground rounded-full w-12 h-12 shadow-lg hover:bg-accent/90"
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Open chat</span>
        </Button>
      </div>

      {isChatOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-background rounded-lg shadow-xl p-4">
          <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
          <div className="h-48 bg-muted rounded-md mb-2 p-2 overflow-y-auto">
            {/* Chat messages would go here */}
          </div>
          <form className="flex">
            <Input type="text" placeholder="Type your message..." className="flex-grow mr-2" />
            <Button type="submit" size="icon">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}

      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService || { name: '', description: '' }}
      />
    </div>
  )
}