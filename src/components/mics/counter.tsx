import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Counter() {

    const [count, setCount] = useState(0)
    
    const increment = () => {
      setCount(count + 1);
    }
  
    return (
      <main className="flex min-h-screen flex-col items-center p-5 justify-center">
        <Card >
          <CardHeader className="items-center">
            <CardTitle>
              <p>Счетчик</p>
            </CardTitle>
            <CardDescription>Всего {count} человек </CardDescription>
            <p>на Марсе</p>
          </CardHeader>
          <CardContent>
          <Button variant="outline" onClick={increment}>Жми друг</Button>
          </CardContent>
          <CardFooter className="justify-center">
          <p>***</p>
          </CardFooter>
        </Card>
      </main>
    );
  }
  