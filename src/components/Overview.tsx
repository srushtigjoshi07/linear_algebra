import { Target, Lightbulb, Wrench, GraduationCap } from "lucide-react";

const Overview = () => {
  const objectives = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Matrix Methods",
      description: "Master matrix algebra, Gaussian elimination, and LU decomposition for solving large systems of linear equations efficiently.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Vector Spaces",
      description: "Understand vector spaces, linear transformations, and their applications in robotics, graphics, and signal processing.",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Engineering Applications",
      description: "Apply linear algebra to real-world problems: truss analysis, spring-mass systems, fluid networks, and robotic kinematics.",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Eigenvalue Analysis",
      description: "Analyze dynamic systems using eigenvalues and eigenvectors to understand vibration modes and system stability.",
    },
  ];

  return (
    <section id="overview" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Course Overview
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Why Linear Algebra for Engineers?
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Linear algebra provides the mathematical foundation for understanding and solving complex engineering problems. From structural analysis to machine learning, these concepts are essential for modern engineering practice.
          </p>
        </div>

        {/* Objectives grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="floating-card card-hover flex gap-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                {objective.icon}
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {objective.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {objective.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Key formula showcase */}
        <div className="bg-secondary/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-serif font-semibold text-foreground mb-6 text-center">
            The Power of Ax = b
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="text-3xl font-mono font-bold text-primary mb-3">A</div>
              <div className="text-sm text-muted-foreground">
                System Matrix
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Stiffness, connectivity, or transformation matrix
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="text-3xl font-mono font-bold text-accent mb-3">x</div>
              <div className="text-sm text-muted-foreground">
                Unknown Vector
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Displacements, forces, or state variables
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border">
              <div className="text-3xl font-mono font-bold text-math-green mb-3">b</div>
              <div className="text-sm text-muted-foreground">
                Known Vector
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                External forces, loads, or boundary conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
