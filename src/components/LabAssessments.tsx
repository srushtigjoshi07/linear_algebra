import LabCard from "./LabCard";

// Import lab images
import lab1Page1 from "@/assets/labs/lab1-page1.jpg";
import lab1Page2 from "@/assets/labs/lab1-page2.jpg";
import lab1Page3 from "@/assets/labs/lab1-page3.jpg";
import lab2Page1 from "@/assets/labs/lab2-page1.jpg";
import lab2Page2 from "@/assets/labs/lab2-page2.jpg";
import lab2Page3 from "@/assets/labs/lab2-page3.jpg";
import lab3Page1 from "@/assets/labs/lab3-page1.jpg";
import lab3Page2 from "@/assets/labs/lab3-page2.jpg";
import lab3Page3 from "@/assets/labs/lab3-page3.jpg";
import lab4Page1 from "@/assets/labs/lab4-page1.jpg";
import lab4Page2 from "@/assets/labs/lab4-page2.jpg";
import lab4Page3 from "@/assets/labs/lab4-page3.jpg";
import labTestPage1 from "@/assets/labs/labtest-page1.jpg";
import labTestPage2 from "@/assets/labs/labtest-page2.jpg";
import labTestPage3 from "@/assets/labs/labtest-page3.jpg";

const LabAssessments = () => {
  const labs = [
    {
      labNumber: 1,
      title: "Spring-Mass Systems",
      studentName: "Srushti G Joshi",
      srn: "01FE24BAR014",
      date: "October 2025",
      problems: [
        "Find displacements u₁, u₂, u₃, u₄ for a 4-mass spring system",
        "Construct the 4×4 stiffness matrix K",
        "Solve using matrix algebra with k₁=100, k₂=200, k₃=300, k₄=500, k₅=400, k₆=150 N/m",
      ],
      concepts: ["Stiffness Matrix", "Matrix Equation Kx=F", "NumPy linalg.solve", "Physical Interpretation"],
      images: [lab1Page1, lab1Page2, lab1Page3],
      pdfUrl: "/pdfs/lab1-spring-mass-systems.pdf",
    },
    {
      labNumber: 2,
      title: "Truss Analysis",
      studentName: "Srushti G Joshi",
      srn: "01FE24BAR014",
      date: "24 Oct 2025",
      problems: [
        "Determine member forces for triangular truss structure",
        "Apply static equilibrium conditions (ΣFx=0, ΣFy=0)",
        "Solve 8×8 system for internal forces with 400N horizontal and 500N vertical loads",
      ],
      concepts: ["Static Equilibrium", "Free Body Diagrams", "Matrix Algebra", "Tension/Compression"],
      images: [lab2Page1, lab2Page2, lab2Page3],
      pdfUrl: "/pdfs/lab2-truss-analysis.pdf",
    },
    {
      labNumber: 3,
      title: "Gauss Elimination & LU Decomposition",
      studentName: "Srushti G Joshi",
      srn: "01FE24BAR014",
      date: "13 Nov 2025",
      problems: [
        "Solve displacement fields for spring-block system using Gauss elimination",
        "Apply LU decomposition to system: x₁-3x₂+x₃=-5, 2x₁-2x₂+4x₃=0, 3x₁+2x₂+5x₃=7",
        "Implement forward and backward substitution in Python",
      ],
      concepts: ["Gauss Elimination", "LU Decomposition", "Row Operations", "Forward/Backward Substitution"],
      images: [lab3Page1, lab3Page2, lab3Page3],
      pdfUrl: "/pdfs/lab3-gauss-lu-decomposition.pdf",
    },
    {
      labNumber: 4,
      title: "Robot Kinematics",
      studentName: "Srushti G Joshi",
      srn: "01FE24BAR014",
      date: "4 Dec 2025",
      problems: [
        "Planar 2R robot with L₁=5m, L₂=3m at θ₁=45°, θ₂=30°: compute end effector position",
        "Planar 3R robot with L₁=5m, L₂=3m, L₃=2m: forward kinematics and workspace",
        "Plot workspace for joint limits using homogeneous transformation matrices",
      ],
      concepts: ["Homogeneous Transformation", "Forward Kinematics", "Workspace Analysis", "2R/3R Manipulators"],
      images: [lab4Page1, lab4Page2, lab4Page3],
      pdfUrl: "/pdfs/lab4-robot-kinematics.pdf",
    },
  ];

  const labTest = {
    labNumber: 0,
    title: "Static Equilibrium - 4-Mass Spring System",
    studentName: "Srushti G Joshi",
    srn: "01FE24BAR014",
    date: "7 Jan 2026",
    problems: [
      "Construct the 4×4 Stiffness Matrix K for a 4-mass spring system",
      "Calculate displacement of each mass from equilibrium position",
      "Solve with k₁=20, k₂=20, k₃=30, k₄=30 N/m and forces f₁=15N, f₂=0N, f₄=20N",
    ],
    concepts: ["Stiffness Matrix", "Static Equilibrium", "NumPy linalg.solve", "Spring-Mass Systems"],
    images: [labTestPage1, labTestPage2, labTestPage3],
    pdfUrl: "/pdfs/labtest-static-equilibrium.pdf",
    isLabTest: true,
  };

  return (
    <section id="labs" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Practical Applications
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Laboratory Assessments
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hands-on programming exercises implementing linear algebra concepts using Python, NumPy, and visualization tools.
          </p>
        </div>

        {/* Lab Test Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-serif font-semibold text-foreground mb-6 text-center">
            Lab Test
          </h3>
          <div className="max-w-2xl mx-auto animate-slide-up">
            <LabCard {...labTest} />
          </div>
        </div>

        {/* Lab Assessments */}
        <h3 className="text-2xl font-serif font-semibold text-foreground mb-6 text-center">
          Lab Assessments
        </h3>
        
        {/* Lab cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {labs.map((lab, index) => (
            <div
              key={lab.labNumber}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <LabCard {...lab} />
            </div>
          ))}
        </div>

        {/* Programming languages used */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Python", "NumPy", "Matplotlib", "SciPy", "GeoGebra"].map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabAssessments;
