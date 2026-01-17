import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Code2,
    GitBranch,
    Calendar,
    Map,
    BookOpen,
    ExternalLink
} from "lucide-react";

interface ResourceCard {
    title: string;
    description: string;
    icon: any;
    driveLink: string;
    gradient: string;
}

const BtechResources = () => {
    const navigate = useNavigate();

    const resources: ResourceCard[] = [
        {
            title: "CS Fundamentals",
            description: "Core computer science concepts, theory, and foundational knowledge for BTech students.",
            icon: BookOpen,
            driveLink: "https://drive.google.com/drive/folders/1U_yOJe9johLSB6oSVOT3vou-_5nHPFQr",
            gradient: "border-l-4 border-l-blue-500",
        },
        {
            title: "DSA (Data Structures & Algorithms)",
            description: "Comprehensive guide to data structures and algorithms with practice problems and solutions.",
            icon: Code2,
            driveLink: "https://drive.google.com/drive/folders/1DYDfCVyv4KBezR9Wbq-Kt00PC-8YN5PN",
            gradient: "border-l-4 border-l-green-500",
        },
        {
            title: "Roadmap with Resources",
            description: "Step-by-step roadmap for placement preparation, interview tips, and career guidance.",
            icon: Map,
            driveLink: "https://drive.google.com/drive/folders/1nW1eSVO7PAH1qw6zwLDY_zhSuIJRMPXe",
            gradient: "border-l-4 border-l-purple-500",
        },
        {
            title: "Internship Calendar",
            description: "Track internship opportunities, deadlines, and application timelines throughout the year.",
            icon: Calendar,
            driveLink: "https://drive.google.com/drive/folders/1ezM19ty92xgQKft0lrRy-VrSNRBdjC0I",
            gradient: "border-l-4 border-l-orange-500",
        },
        {
            title: "Git & GitHub Cheatsheet",
            description: "Quick reference guide for Git commands, GitHub workflows, and version control best practices.",
            icon: GitBranch,
            driveLink: "https://drive.google.com/drive/folders/1FQInIpZGCdGtV9SwSqFS2tm7rtR5PwO4",
            gradient: "border-l-4 border-l-red-500",
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-12 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <Code2 className="h-8 w-8 text-primary" />
                    </div>
                    <h1 className="text-3xl font-bold text-foreground md:text-4xl">
                        BTech Resources Hub
                    </h1>
                    <p className="mt-2 text-lg text-muted-foreground">
                        Everything you need for your BTech journey - from fundamentals to placements
                    </p>
                </div>

                {/* Resources Grid */}
                <section>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {resources.map((resource) => {
                            const Icon = resource.icon;
                            return (
                                <Card
                                    key={resource.title}
                                    className={`group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${resource.gradient}`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                                    <CardHeader className="relative">
                                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                                            <Icon className="h-7 w-7 text-primary" />
                                        </div>
                                        <CardTitle className="text-xl">{resource.title}</CardTitle>
                                        <CardDescription className="text-muted-foreground">
                                            {resource.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="relative">
                                        <a href={resource.driveLink} target="_blank" rel="noopener noreferrer">
                                            <Button className="w-full">
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                Access Resources
                                            </Button>
                                        </a>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </section>

                {/* Back to Dashboard */}
                <div className="mt-12 text-center">
                    <Button
                        variant="outline"
                        onClick={() => navigate('/dashboard')}
                        className="min-w-[200px]"
                    >
                        Back to Dashboard
                    </Button>
                </div>
            </main>
        </div>
    );
};

export default BtechResources;
