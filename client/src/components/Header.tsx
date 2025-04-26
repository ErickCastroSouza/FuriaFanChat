import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Flame } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Time", href: "#" },
    { name: "Jogos", href: "#" },
    { name: "Notícias", href: "#" },
  ];

  return (
    <header className="bg-[hsl(var(--furia-dark))] py-3 px-4 border-b border-[hsl(var(--furia-light))] shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* FURIA Logo */}
        <div className="flex items-center">
          <Flame className="h-8 w-8 text-[hsl(var(--furia-blue))]" />
          <h1 className="ml-3 text-2xl font-bold tracking-wider">
            <span className="text-[hsl(var(--furia-blue))]">FURIA</span> <span className="font-light">CS</span>
          </h1>
        </div>
        
        {/* Desktop Navigation links */}
        <nav className="hidden md:flex items-center space-x-6">
        
          <form action="https://www.furia.gg/">
            <input type="submit" value="Loja"  className="bg-[hsl(var(--furia-blue))] px-4 py-2 text-white text-sm uppercase font-semibold cursor-pointer tracking-wide hover:bg-opacity-90 transition-colors" />
          </form>
        </nav>
        
        {/* Mobile menu button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden p-2">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[hsl(var(--furia-dark))] border-l border-[hsl(var(--furia-light))]">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center">
                  <Flame className="h-6 w-6 text-[hsl(var(--furia-blue))]" />
                  <h2 className="ml-2 text-xl font-bold">
                    <span className="text-[hsl(var(--furia-blue))]">FURIA</span> CS
                  </h2>
                </div>
                <Button variant="ghost" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href} 
                    className="text-[hsl(var(--text-light))] hover:text-[hsl(var(--furia-blue))] transition-colors py-2 text-lg uppercase font-semibold tracking-wide"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Button className="bg-[hsl(var(--furia-blue))] w-full py-2 mt-4 text-white text-lg uppercase font-semibold tracking-wide hover:bg-opacity-90 transition-colors">
                  Loja
                </Button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
