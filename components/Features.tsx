import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, CheckSquare, FileText, Tags } from "lucide-react";

const features = [
  {
    title: "Collaborative Note-Taking",
    description: "Create, edit, and share notes in real-time.",
    icon: Users,
  },
  {
    title: "Task Management",
    description: "Assign due dates, set reminders, and track your tasks.",
    icon: CheckSquare,
  },
  {
    title: "Intelligent Summarization",
    description: "AI-powered summarization of lengthy notes and documents.",
    icon: FileText,
  },
  {
    title: "Smart Tagging",
    description: "AI-driven tagging for easy organization.",
    icon: Tags,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 mt-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="bg-secondary">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
