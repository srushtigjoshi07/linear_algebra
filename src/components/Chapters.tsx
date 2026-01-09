import ChapterCard from "./ChapterCard";
import { Layers, Binary, Box, Target, Waves } from "lucide-react";

const Chapters = () => {
  const chapters = [
    {
      number: 1,
      title: "Why Linear Algebra for Engineers?",
      description: "Introduction to matrix methods and their importance in engineering analysis. Learn why engineers prefer matrix equations over solving equations separately.",
      hours: 5,
      topics: [
        "Stacking equations into matrix form",
        "Spring-mass systems and stiffness matrices",
        "Truss analysis with Ax = b",
        "Fluid network problems",
        "Physical interpretation of singular matrices",
      ],
      icon: <Layers className="w-6 h-6 text-white" />,
      colorClass: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      number: 2,
      title: "Gauss Elimination & LU Decomposition",
      description: "Master systematic methods for solving systems of linear equations. Essential techniques for computational efficiency in engineering applications.",
      hours: 7,
      topics: [
        "Gauss elimination method",
        "Row echelon form",
        "LU decomposition",
        "Forward and backward substitution",
        "Applications to spring-mass and truss systems",
      ],
      icon: <Binary className="w-6 h-6 text-white" />,
      colorClass: "bg-gradient-to-br from-teal-500 to-teal-600",
    },
    {
      number: 3,
      title: "Vector Spaces & Linear Transformations",
      description: "Explore the abstract foundations of linear algebra. Understand vector spaces, basis vectors, and how linear transformations represent physical operations.",
      hours: 7,
      topics: [
        "Vector space axioms and properties",
        "Linear independence and span",
        "Basis vectors and dimension",
        "Linear transformations in robotics",
        "Color spaces in computer graphics",
      ],
      icon: <Box className="w-6 h-6 text-white" />,
      colorClass: "bg-gradient-to-br from-violet-500 to-violet-600",
    },
    {
      number: 4,
      title: "Orthogonality & Least Squares",
      description: "Learn projection methods and their applications in data fitting, signal processing, and error minimization in engineering measurements.",
      hours: 6,
      topics: [
        "Dot product and orthogonality",
        "Projection onto vectors and subspaces",
        "Least squares approximation",
        "QR factorization method",
        "Sensor calibration applications",
      ],
      icon: <Target className="w-6 h-6 text-white" />,
      colorClass: "bg-gradient-to-br from-amber-500 to-amber-600",
    },
    {
      number: 5,
      title: "Eigenvalues, Eigenvectors & Dynamics",
      description: "Analyze vibrating systems, stability, and natural frequencies using eigenvalue analysis. Essential for structural and mechanical engineering.",
      hours: 7,
      topics: [
        "Eigenvalue/eigenvector computation",
        "Mode shapes and natural frequencies",
        "In-phase and out-of-phase motion",
        "Diagonalization of matrices",
        "Multi-story building vibration analysis",
      ],
      icon: <Waves className="w-6 h-6 text-white" />,
      colorClass: "bg-gradient-to-br from-rose-500 to-rose-600",
    },
  ];

  return (
    <section id="chapters" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Course Content
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Chapter Overview
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Five comprehensive chapters covering fundamental concepts through advanced applications, with emphasis on engineering problem-solving.
          </p>
        </div>

        {/* Chapter cards */}
        <div className="space-y-6">
          {chapters.map((chapter, index) => (
            <div
              key={chapter.number}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ChapterCard {...chapter} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chapters;
