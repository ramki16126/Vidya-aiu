import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  gradient: string;
}

const CategoryCard = ({ title, description, icon: Icon, category, gradient }: CategoryCardProps) => {
  // BTech category goes to dedicated resources page, others go to courses
  const linkPath = category === "BTECH" ? "/btech-resources" : `/courses?category=${category}`;

  return (
    <Card className={`group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${gradient}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <CardHeader className="relative">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="relative">
        <Link to={linkPath}>
          <Button className="w-full">
            Explore Courses
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
