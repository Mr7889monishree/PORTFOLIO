import { Code2, Database, Wrench } from 'lucide-react';
import { Skill } from '../types';

export const skills: Skill[] = [
  {
    category: "Frontend",
    icon: <Code2 className="w-8 h-8 mb-4 text-indigo-500" />,
    items: ["HTML,CSS,Javascript", "React","Bootstrap", "Tailwind CSS"],
    bgColor: "bg-indigo-50"
  },
  {
    category: "Backend",
    icon: <Database className="w-8 h-8 mb-4 text-emerald-500" />,
    items: ["Node.js", "Express", "MongoDB","Python"],
    bgColor: "bg-emerald-50"
  },
  {
    category: "Tools",
    icon: <Wrench className="w-8 h-8 mb-4 text-amber-500" />,
    items: ["Git", "VS Code", "Docker"],
    bgColor: "bg-amber-50"
  }
];