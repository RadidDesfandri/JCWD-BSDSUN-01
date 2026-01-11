import ComponentCard from "./components/component-card";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

function App() {
  return (
    <div className="grid grid-cols-6 max-w-6xl mx-auto gap-4 p-5">
      <Card>
        <CardHeader>
          <CardTitle>Button Shadcn</CardTitle>
        </CardHeader>

        <CardContent>
          <Button variant="destructive">Click me</Button>
        </CardContent>
      </Card>

      <ComponentCard title="Tes title">
        <Button variant="destructive">Click me</Button>
      </ComponentCard>
    </div>
  );
}

export default App;
