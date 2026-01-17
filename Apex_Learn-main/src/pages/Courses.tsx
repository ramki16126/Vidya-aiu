import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Loader2, BookOpen } from "lucide-react";

interface Course {
  id: string;
  title: string;
  description: string | null;
  category: "JEE" | "NEET" | "BTECH";
  resource_link: string | null;
}

const Courses = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const activeCategory = searchParams.get("category") || "all";

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      let query = supabase.from("courses").select("*");

      if (activeCategory !== "all" && (activeCategory === "JEE" || activeCategory === "NEET" || activeCategory === "BTECH")) {
        query = query.eq("category", activeCategory);
      }

      const { data } = await query.order("created_at", { ascending: false });
      setCourses((data as Course[]) || []);
      setLoading(false);
    };

    fetchCourses();
  }, [activeCategory]);

  const handleCategoryChange = (category: string) => {
    if (category === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };

  const categories = [
    { label: "All Courses", value: "all" },
    { label: "JEE", value: "JEE" },
    { label: "NEET", value: "NEET" },
    { label: "BTech", value: "BTECH" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            Course Library
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Explore our curated collection of study resources
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <Button
              key={cat.value}
              variant={activeCategory === cat.value ? "default" : "outline"}
              onClick={() => handleCategoryChange(cat.value)}
              className="min-w-[100px]"
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Courses Grid */}
        {loading ? (
          <div className="flex min-h-[300px] items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : courses.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                description={course.description}
                category={course.category}
                resourceLink={course.resource_link}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
            <BookOpen className="mb-4 h-16 w-16 text-muted" />
            <h3 className="text-xl font-semibold text-foreground">
              No courses found
            </h3>
            <p className="mt-2 text-muted-foreground">
              {activeCategory !== "all"
                ? `No courses available for ${activeCategory} yet.`
                : "No courses available at the moment."}
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Courses;
