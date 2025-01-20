import NavBar from "@/components/NavBar";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: 1,
    name: "Fresh Organic Apples",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=800&q=80",
    description: "Sweet and crispy organic apples, perfect for snacking or baking.",
  },
  {
    id: 2,
    name: "Whole Grain Bread",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    description: "Freshly baked whole grain bread, rich in fiber and nutrients.",
  },
  {
    id: 3,
    name: "Farm Fresh Eggs",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=800&q=80",
    description: "Free-range eggs from local farms, packed with protein.",
  },
  {
    id: 4,
    name: "Organic Milk",
    price: 4.49,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&q=80",
    description: "Fresh organic milk from grass-fed cows, rich and creamy.",
  },
  {
    id: 5,
    name: "Fresh Vegetables Mix",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80",
    description: "Assorted fresh vegetables, locally sourced and organic.",
  },
  {
    id: 6,
    name: "Premium Coffee Beans",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80",
    description: "Freshly roasted premium coffee beans with rich aroma.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Fresh Groceries</h1>
          <p className="text-lg text-gray-600">Delivered right to your doorstep</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;