"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-red-100 to-red-200">
      <div className="text-center space-y-8 p-8 max-w-2xl">
        {/* Main heading with red gradient text */}
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent animate-pulse">
          Hello World
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-red-700 font-medium leading-relaxed">
          Welcome to your beautiful red-themed Next.js application
        </p>
        
        {/* Description */}
        <p className="text-lg text-red-600 leading-relaxed max-w-lg mx-auto">
          This is a simple Hello World page built with Next.js, Tailwind CSS, and shadcn/ui components, 
          featuring a stunning red color palette.
        </p>
        
        {/* Interactive button */}
        <div className="pt-6">
          <Button 
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => alert("Hello from the red-themed world! 🔴")}
          >
            Click Me!
          </Button>
        </div>
        
        {/* Decorative elements */}
        <div className="flex justify-center space-x-4 pt-8">
          <div className="w-4 h-4 bg-red-400 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </main>
  );
}