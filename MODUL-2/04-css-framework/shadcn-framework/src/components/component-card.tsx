import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface IComponentCardProps {
  title: string;
  children: React.ReactNode;
}

const ComponentCard = (props: IComponentCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>

      <CardContent>{props.children}</CardContent>
    </Card>
  );
};

export default ComponentCard;
