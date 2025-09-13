import { Link } from "react-router-dom";
import { Star, Shield, Truck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-image.jpg";
import { products } from "@/data/products";

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl heading-primary mb-8 animate-fade-in">
            Luxury <span className="text-gradient">Redefined</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-12 text-white/90 animate-slide-up font-light">
            Discover exceptional products crafted for the discerning individual
          </p>
          <div className="space-x-6 animate-scale-in">
            <Link to="/products">
              <Button size="lg" className="btn-accent text-lg px-12 py-6">
                Shop Collection
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" className="btn-ghost-premium border-white text-white hover:bg-white hover:text-primary text-lg px-12 py-6">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl heading-primary mb-6">
              Why Choose Premium Store
            </h2>
            <p className="text-xl text-professional max-w-2xl mx-auto">
              Experience luxury shopping with unparalleled service and quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Premium Quality",
                description: "Handpicked products from the world's finest craftsmen and artisans"
              },
              {
                icon: Shield,
                title: "Authenticity Guaranteed",
                description: "100% authentic products with certificates of authenticity included"
              },
              {
                icon: Truck,
                title: "Free Shipping",
                description: "Complimentary worldwide shipping with premium white-glove service"
              },
              {
                icon: Star,
                title: "Exceptional Service",
                description: "24/7 customer support from our dedicated luxury concierge team"
              }
            ].map((feature, index) => (
              <Card key={index} className="card-premium text-center hover-lift animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 gradient-accent rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-[var(--shadow-md)]">
                    <feature.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-professional">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Featured Collection
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most coveted pieces, carefully curated for excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">${product.price}</span>
                    <Link to={`/product/${product.id}`}>
                      <Button className="btn-premium">View Product</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/products">
              <Button size="lg" className="btn-premium text-lg px-12 py-6">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Premium Store
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Fashion Designer",
                content: "The quality is absolutely exceptional. Every piece I've purchased has exceeded my expectations.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Business Executive",
                content: "Premium Store offers the finest selection of luxury goods. Their service is impeccable.",
                rating: 5
              },
              {
                name: "Emma Wilson",
                role: "Art Director",
                content: "I've never experienced such attention to detail. Each product is a work of art.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm opacity-80">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;