import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center gradient-subtle">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl font-bold text-accent mb-4">404</div>
        <h1 className="text-4xl font-serif font-bold text-primary mb-4">Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-4">
          <Link to="/">
            <Button size="lg" className="btn-premium w-full">
              Return to Home
            </Button>
          </Link>
          <Link to="/products">
            <Button size="lg" variant="outline" className="w-full">
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
