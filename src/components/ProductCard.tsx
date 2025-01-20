import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div
        className="glass-card rounded-xl overflow-hidden hover-scale cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-primary font-medium">${product.price.toFixed(2)}</p>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-56 object-cover rounded-lg"
          />
          <div className="mt-4">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-semibold text-primary">
                ${product.price.toFixed(2)}
              </span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    setQuantity(Math.max(1, quantity - 1));
                  }}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-8 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    setQuantity(quantity + 1);
                  }}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <Button className="w-full mt-4">Add to Cart</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}