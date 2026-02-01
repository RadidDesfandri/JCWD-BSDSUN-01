import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Navbar } from "./components/ui/navbar";

function App() {
  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />
      <div className="flex flex-col gap-4 p-10 bg-biru">
        <h1 className="font-bold text-4xl">Product Catalog</h1>
        <Card className="w-fit min-w-96">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
              laboriosam nulla deleniti unde cum ut.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
            <Input placeholder="Type something..." />
          </CardContent>
          <CardFooter>
            <Button className="w-full">Submit</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default App;
