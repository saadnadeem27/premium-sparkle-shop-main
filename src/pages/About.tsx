import { Award, Users, Globe, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            About Premium Store
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over two decades, we've been curating the world's finest luxury products, 
            bringing exceptional quality and unparalleled service to discerning clients worldwide.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2000 with a simple yet ambitious vision: to make luxury accessible 
                  to those who appreciate the finer things in life. What started as a small boutique 
                  has evolved into a global destination for premium products.
                </p>
                <p>
                  Our journey began when our founder, inspired by travels around the world, 
                  recognized the need for a curated platform that brings together the best 
                  craftsmanship from renowned artisans and luxury brands.
                </p>
                <p>
                  Today, we're proud to serve customers in over 50 countries, maintaining our 
                  commitment to authenticity, quality, and exceptional customer service that 
                  has defined us from the beginning.
                </p>
              </div>
            </div>
            <div className="gradient-subtle rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-semibold mb-2">Excellence Recognized</h3>
              <p className="text-muted-foreground">
                Winner of the Luxury Retail Excellence Award for three consecutive years
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "We never compromise on quality, sourcing only the finest products from trusted artisans and brands."
              },
              {
                icon: Users,
                title: "Customer First",
                description: "Every decision we make is centered around delivering an exceptional experience for our clients."
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Connecting luxury enthusiasts worldwide with authentic, premium products."
              },
              {
                icon: Heart,
                title: "Passion",
                description: "Our love for luxury and craftsmanship drives us to continuously exceed expectations."
              }
            ].map((value, index) => (
              <Card key={index} className="card-premium text-center">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-20 gradient-primary text-primary-foreground rounded-3xl p-12">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Our Mission</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              To democratize luxury by making exceptional products accessible to those who value 
              quality, craftsmanship, and authentic experiences. We believe everyone deserves to 
              own something truly special.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              The passionate individuals behind Premium Store
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alexandra Sterling",
                role: "Founder & CEO",
                bio: "Visionary leader with 25+ years in luxury retail"
              },
              {
                name: "Marcus Chen",
                role: "Head of Curation",
                bio: "Expert in identifying exceptional craftsmanship worldwide"
              },
              {
                name: "Isabella Rodriguez",
                role: "Customer Experience Director",
                bio: "Dedicated to creating unforgettable shopping experiences"
              }
            ].map((member, index) => (
              <Card key={index} className="card-premium text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-accent font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "20+", label: "Years of Excellence" },
              { number: "50+", label: "Countries Served" },
              { number: "10K+", label: "Happy Customers" },
              { number: "500+", label: "Premium Products" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;