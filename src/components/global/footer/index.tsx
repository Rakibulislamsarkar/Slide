import { cn } from "@/lib/utils"
import { ArrowUpRight, Instagram, Linkedin, Github, MessageSquare } from 'lucide-react'
import Link from "next/link"

interface FooterLink {
  label: string
  href: string
  external?: boolean
}

interface FooterSection {
  title: string
  links: FooterLink[]
  subsections?: {
    title: string
    links: FooterLink[]
  }[]
}

const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Our research",
    links: [
      { label: "Overview", href: "#" },
      { label: "Index", href: "#" },
    ],
  },
  {
    title: "Slide",
    links: [
      { label: "For Everyone", href: "#" },
      { label: "For Teams", href: "#" },
      { label: "For Enterprises", href: "#" },
      { label: "SlideAI login", href: "#", external: true },
      { label: "Download", href: "#" },
    ],
    subsections: [
      {
        title: "Explore more",
        links: [
          { label: "SlideAI for business", href: "#" },
          { label: "Stories", href: "#" },
        ],
      },
    ],
  },
  {
    title: "Safety overview",
    links: [{ label: "Safety overview", href: "#" }],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "#" },
      { label: "News", href: "#" },
      { label: "Our Charter", href: "#" },
      { label: "Security", href: "#" },
      { label: "Residency", href: "#" },
    ],
  },
  {
    title: "Terms & policies",
    links: [
      { label: "Terms of use", href: "#" },
      { label: "Privacy policy", href: "#" },
      { label: "Brand guidelines", href: "#" },
      { label: "Other policies", href: "#" },
    ],
  },
]

const SOCIAL_LINKS = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: MessageSquare, href: "#", label: "Slack" },
]

function FooterLink({ href, label, external }: FooterLink) {
  return (
    <Link
      href={href}
      className="group flex items-center text-sm text-gray-400 hover:text-white transition-colors"
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {label}
      {external && (
        <ArrowUpRight
          className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </Link>
  )
}

function FooterSection({ section }: { section: FooterSection }) {
  return (
    <div className="space-y-4">
      <h2 className="font-medium text-white mb-6 text-sm">{section.title}</h2>
      <div className="space-y-4">
        {section.links.map((link) => (
          <FooterLink
            key={`${section.title}-${link.label}`}
            href={link.href}
            label={link.label}
            external={link.external}
          />
        ))}
      </div>
      {section.subsections?.map((subsection) => (
        <div key={subsection.title} className="pt-8">
          <h3 className="text-gray-400 mb-4 text-sm">{subsection.title}</h3>
          <div className="space-y-4">
            {subsection.links.map((link) => (
              <FooterLink
                key={`${subsection.title}-${link.label}`}
                href={link.href}
                label={link.label}
                external={link.external}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <footer
      className="bg-black text-white py-16"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {FOOTER_SECTIONS.map((section) => (
            <FooterSection key={section.title} section={section} />
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-800 mt-16 pt-8">
          <p className="text-sm text-gray-400 mb-4 sm:mb-0">SlideAI © 2024</p>
          <div className="flex space-x-6">
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

