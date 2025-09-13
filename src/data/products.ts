import { Product } from "@/contexts/CartContext";
import watchImage from "@/assets/product-watch.jpg";
import handbagImage from "@/assets/product-handbag.jpg";
import headphonesImage from "@/assets/product-headphones.jpg";
import perfumeImage from "@/assets/product-perfume.jpg";
import sunglassesImage from "@/assets/product-sunglasses.jpg";
import walletImage from "@/assets/product-wallet.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Luxury Watch",
    price: 1299,
    image: watchImage,
    description: "Exquisite timepiece crafted with precision and elegance. Features Swiss movement and premium materials for the discerning individual.",
    category: "Accessories"
  },
  {
    id: "2",
    name: "Designer Leather Handbag",
    price: 899,
    image: handbagImage,
    description: "Handcrafted luxury handbag made from the finest Italian leather. Perfect blend of style and functionality for the modern professional.",
    category: "Fashion"
  },
  {
    id: "3",
    name: "Premium Wireless Headphones",
    price: 599,
    image: headphonesImage,
    description: "State-of-the-art wireless headphones with noise cancellation and premium sound quality. Experience audio like never before.",
    category: "Electronics"
  },
  {
    id: "4",
    name: "Luxury Fragrance Collection",
    price: 299,
    image: perfumeImage,
    description: "Exclusive fragrance blend with notes of bergamot, jasmine, and sandalwood. A signature scent for the sophisticated individual.",
    category: "Beauty"
  },
  {
    id: "5",
    name: "Elite Carbon Fiber Watch",
    price: 1899,
    image: watchImage,
    description: "Revolutionary timepiece featuring carbon fiber construction and advanced chronograph functions. Engineering meets luxury.",
    category: "Accessories"
  },
  {
    id: "6",
    name: "Artisan Leather Tote",
    price: 749,
    image: handbagImage,
    description: "Spacious and elegant tote bag crafted by master artisans. Perfect for work or travel with premium leather construction.",
    category: "Fashion"
  },
  {
    id: "7",
    name: "Designer Sunglasses",
    price: 449,
    image: sunglassesImage,
    description: "Premium designer sunglasses with polarized lenses and titanium frame. UV protection meets sophisticated style.",
    category: "Accessories"
  },
  {
    id: "8",
    name: "Luxury Leather Wallet",
    price: 199,
    image: walletImage,
    description: "Handcrafted wallet made from premium Italian leather. Features RFID protection and elegant minimalist design.",
    category: "Accessories"
  }
];