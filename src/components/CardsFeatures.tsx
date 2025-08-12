// Enhanced by AI on 2025-08-12T11:58:57.917Z
// Section: features
// Category: features

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  BarChart3, 
  Palette,
  Code2,
  Headphones,
  Lock
} from "lucide-react"
import Link from "next/link"

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Efficient Consulting",
      description: "Our team delivers fast and effective solutions to help your business thrive.",
      badge: "Performance"
    },
    {
      icon: Shield,
      title: "Secure Processes",
      description: "Strict data protection and compliance measures ensure your information is safe.",
      badge: "Security"
    },
    {
      icon: Smartphone,
      title: "Responsive Approach",
      description: "We tailor our services to your unique needs and adapt to your business requirements.",
      badge: "Design"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Our international network allows us to support clients worldwide.",
      badge: "Infrastructure"
    },
    {
      icon: BarChart3,
      title: "Insightful Analytics",
      description: "Detailed reporting and data-driven recommendations to maximize your success.",
      badge: "Analytics"
    },
    {
      icon: Palette,
      title: "Customized Solutions",
      description: "We work closely with you to create tailored strategies that fit your brand identity.",
      badge: "Customization"
    },
    {
      icon: Code2,
      title: "Collaborative Approach",
      description: "Our experts work seamlessly with your team to achieve your business goals.",
      badge: "Developer"
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Our support team is available 24/7 to assist you whenever you need help.",
      badge: "Support"
    },
    {
      icon: Lock,
      title: "Confidential Services",
      description: "We prioritize your privacy and never share your sensitive information.",
      badge: "Privacy"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Consulting Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Tailored Solutions to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Elevate Your Business
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our team of experienced consultants provides customized strategies and 
            cutting-edge tools to help your organization achieve its full potential.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your business?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Contact Us
            </Link>
            <Link href="/services" className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}