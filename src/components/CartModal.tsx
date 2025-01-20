import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingBag } from "lucide-react";

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CartModal({ open, onClose }: CartModalProps) {
  const cartItems = []; // We'll implement cart state management later

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Your Cart
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingBag className="w-12 h-12 mx-auto text-gray-400" />
              <p className="mt-2 text-gray-600">Your cart is empty</p>
              <Button className="mt-4" onClick={onClose}>
                Start Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Cart items will go here */}
              <div className="flex justify-between items-center pt-4 border-t">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">$0.00</span>
              </div>
              <Button className="w-full">Proceed to Checkout</Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}