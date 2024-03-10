"use client"
import { Counter } from '@/components/mics/counter'
import { Button } from "@/components/ui/button"

export default function Home() {

  return (
    <main className="flex justify-center">
      <Counter /> 
      <Counter /> 
      <Counter /> 
    </main>
  );
}
