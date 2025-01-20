import { useState } from "react";
import { ShoppingCart, User, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import CartModal from "./CartModal";
import ProfileModal from "./ProfileModal";

export default function NavBar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold text-primary">GroceryApp</h1>
            <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search products..."
                className="border-none bg-transparent focus:outline-none w-64"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsProfileOpen(true)}
            >
              <Avatar className="w-8 h-8">
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Button>
          </div>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                  <Search className="w-4 h-4 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="border-none bg-transparent focus:outline-none"
                  />
                </div>
                <Button
                  variant="ghost"
                  className="justify-start"
                  onClick={() => {
                    setIsCartOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Cart
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start"
                  onClick={() => {
                    setIsProfileOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <User className="w-5 h-5 mr-2" />
                  Profile
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <CartModal open={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <ProfileModal open={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </nav>
  );
}