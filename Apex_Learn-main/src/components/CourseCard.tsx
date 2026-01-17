import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string | null;
  category: string;
  resourceLink: string | null;
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "JEE":
      return "bg-primary/10 text-primary border-primary/20";
    case "NEET":
      return "bg-chart-3/20 text-chart-4 border-chart-3/30";
    case "BTECH":
      return "bg-secondary/20 text-secondary-foreground border-secondary/30";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

// Map specific courses to their Google Drive links
const getResourceLink = (title: string, category: string, dbLink: string | null): string | null => {
  const driveLinks: Record<string, string> = {
    // JEE subjects
    'Advanced Mathematics_JEE': 'https://drive.google.com/drive/folders/1Vi8kfOFDCJgeBWVoRyzvYpdt-aTvphx0',
    'Physics Fundamentals_JEE': 'https://drive.google.com/drive/folders/1cyTxIhaU0OD7cflVpE5xBNYkmGcKi__d',
    'Chemistry Essentials_JEE': 'https://drive.google.com/drive/folders/1WN97A1tJCR5lE7MvqJQqCugx9_Bj4xgg',
    // NEET subjects
    'Biology Complete Guide_NEET': 'https://drive.google.com/drive/folders/1xU-RBTR_CCn-p5kg9k_4HG6IrWp_jcKQ',
    'Physics for NEET_NEET': 'https://drive.google.com/drive/folders/1cyTxIhaU0OD7cflVpE5xBNYkmGcKi__d',
    'Chemistry for NEET_NEET': 'https://drive.google.com/drive/folders/1WN97A1tJCR5lE7MvqJQqCugx9_Bj4xgg',
  };

  const key = `${title}_${category}`;
  return driveLinks[key] || dbLink;
};

const CourseCard = ({ title, description, category, resourceLink }: CourseCardProps) => {
  // Get the actual resource link (Google Drive link if available, otherwise use database link)
  const actualLink = getResourceLink(title, category, resourceLink);

  return (
    <Card className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <Badge variant="outline" className={getCategoryColor(category)}>
            {category}
          </Badge>
        </div>
        <CardTitle className="mt-4 text-lg">{title}</CardTitle>
        <CardDescription className="line-clamp-2 text-muted-foreground">
          {description || "No description available"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {actualLink ? (
          <a href={actualLink} target="_blank" rel="noopener noreferrer">
            <Button className="w-full">
              <ExternalLink className="mr-2 h-4 w-4" />
              Access Resource
            </Button>
          </a>
        ) : (
          <Button className="w-full" disabled>
            Coming Soon
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default CourseCard;
