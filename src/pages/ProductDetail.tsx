import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Share2, ShoppingCart, Star, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
          <Link to="/products">
            <Button className="btn-premium">Browse Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-3">
                {product.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-muted-foreground">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="text-4xl font-bold text-accent">
              ${product.price}
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-muted-foreground">(128 reviews)</span>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="btn-premium flex-1"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={isWishlisted ? "border-accent text-accent" : ""}
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? "fill-accent" : ""}`} />
              </Button>
              <Button size="lg" variant="outline">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="space-y-4 pt-6 border-t">
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-accent" />
                <span>Authenticity Guaranteed</span>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="h-5 w-5 text-accent" />
                <span>Free Worldwide Shipping</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="h-5 w-5 text-accent" />
                <span>Premium Quality Assured</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <Card className="card-premium">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Product Details</h3>
              <div className="prose prose-gray max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  This exceptional {product.name.toLowerCase()} represents the pinnacle of craftsmanship and design. 
                  Every detail has been meticulously crafted to ensure not only aesthetic appeal but also 
                  uncompromising quality and durability.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Made with premium materials and finished to perfection, this piece embodies luxury and 
                  sophistication. Whether for personal use or as a statement piece, it delivers an experience 
                  that exceeds expectations.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h3 className="text-3xl font-serif font-bold text-primary mb-8">
              Related Products
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="product-card group">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold mb-2">{relatedProduct.name}</h4>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{relatedProduct.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-accent">${relatedProduct.price}</span>
                      <Link to={`/product/${relatedProduct.id}`}>
                        <Button className="btn-premium">View</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;