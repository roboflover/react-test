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
import { Minus, Plus, Asterisk, Eraser } from "lucide-react"

interface CounterProps {
    title: string;
    initialValue: number;
    operation: "increment" | "decrement" | "multiply";
}

export const Counter:React.FC<CounterProps> = ({title, initialValue, operation}) => {

    const [count, setCount] = useState(initialValue)
    
    const increment = () => {
      setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const multiply = () => {
        setCount(count * 2);
    }

    const reset = () => {
        if(operation === "multiply"){
            setCount(1);
        } else {
            setCount(0);
        }

    }
  
    let operationButton;
    if(operation == "increment") {
        operationButton = (<Button variant={"outline"} onClick={increment}>
            Жми <Plus className="stroke-green-500" />
        </Button>)
    } else if (operation == "decrement") {
        operationButton = (<Button variant={"outline"} onClick={decrement}>
            Жми <Minus  className="stroke-red-500" />
        </Button>)
    } else if (operation == "multiply") {
        operationButton = (<Button variant={"outline"} onClick={multiply}>
            Жми <Asterisk   className="stroke-blue-500" />
        </Button>)
    }

    return (
      <main className="flex min-h-screen flex-col items-center p-5 justify-center">
        <Card >
          <CardHeader className="items-center">
            <CardTitle>
              <p>Счетчик {title}</p>
            </CardTitle>
            <CardDescription>Всего {count} человек </CardDescription>
            <p>на Марсе</p>
          </CardHeader>
          <CardContent className="items-center justify-center">
            {operationButton}            
          </CardContent>
          <CardFooter className="justify-center">
          <Button variant={"outline"} onClick={reset}>
            Сбросить <Eraser />
        </Button>
          </CardFooter>
        </Card>
      </main>
    );
  }
  