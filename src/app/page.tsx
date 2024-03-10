"use client"
import { Counter } from '@/components/mics/counter'
import { Button } from "@/components/ui/button"

const Home: React.FC = () => {

  return (
    <main className="flex justify-center">
      <Counter title="Сложение" initialValue={0} operation="increment" />
      <Counter title="Вычитание" initialValue={0} operation="decrement"  /> 
      <Counter title="Умножение" initialValue={1} operation="multiply"  /> 
    </main>
  );
}

export default Home