import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, CheckCircle } from "lucide-react";

const DetailedContent = () => {
  const chapters = [
    {
      id: "ch1",
      title: "Chapter 1: Why Linear Algebra for Engineers?",
      content: {
        overview: "This foundational chapter introduces the power of matrix methods in engineering. Engineers prefer stacking all equations into a single matrix equation Ax = b instead of solving each equation separately because it scales efficiently as problems grow, enables the use of computational solvers, and provides a unified framework for analysis.",
        keyPoints: [
          "Linearity simplifies engineering analysis: doubling the load doubles the response",
          "A singular matrix (det = 0) indicates mechanical instability, redundancy, or zero-flow conditions",
          "Each row of A represents a local balance law; each column represents an element",
          "The stiffness matrix K encapsulates all spring connections and their interactions",
        ],
        applications: [
          "Spring-Mass Systems: Model interconnected masses with springs using Kx = F",
          "Truss Analysis: Determine internal member forces using equilibrium equations",
          "Fluid Networks: Calculate flow rates through connected pipelines",
          "Beam Analysis: Compute reactions and internal forces in structural beams",
        ],
        formulas: [
          "System equation: Kx = F where K is stiffness matrix, x is displacement, F is force",
          "Spring force: F = k(x₂ - x₁) for spring connecting masses at positions x₁ and x₂",
          "Global stiffness: K_global = Σ k_element contributions",
        ],
      },
    },
    {
      id: "ch2",
      title: "Chapter 2: Gauss Elimination & LU Decomposition",
      content: {
        overview: "This chapter covers systematic methods for solving systems of linear equations. Gauss elimination transforms the system to row echelon form, while LU decomposition factors A into lower and upper triangular matrices for efficient repeated solving.",
        keyPoints: [
          "Gauss elimination: Forward elimination + backward substitution",
          "LU decomposition: A = LU allows solving Ax = b as Ly = b, then Ux = y",
          "Computational efficiency: O(n³) operations for Gauss elimination",
          "Rank determination reveals the number of independent equations",
        ],
        applications: [
          "Multi-mass Spring Systems: Solve for displacements under applied forces",
          "Reservoir Analysis: Determine inflow, outflow, and evaporation rates",
          "Chemical Mixing: Calculate feed stream quantities for desired compositions",
          "Truss Forces: Find internal member forces from equilibrium conditions",
        ],
        formulas: [
          "Row operation: R_i → R_i - (a_ij/a_jj)R_j",
          "LU factorization: A = LU where L is lower triangular, U is upper triangular",
          "Forward substitution: y_i = (b_i - Σl_ij·y_j) / l_ii",
          "Backward substitution: x_i = (y_i - Σu_ij·x_j) / u_ii",
        ],
      },
    },
    {
      id: "ch3",
      title: "Chapter 3: Vector Spaces & Linear Transformations",
      content: {
        overview: "Vector spaces provide the abstract mathematical structure underlying linear algebra. This chapter explores how vectors can be added and scaled, the concepts of span and basis, and how linear transformations represent physical operations like rotations and reflections.",
        keyPoints: [
          "Vector space axioms: closure under addition and scalar multiplication",
          "Span: all possible linear combinations of a set of vectors",
          "Basis: minimal spanning set; linearly independent vectors that span the space",
          "Dimension: number of vectors in any basis",
        ],
        applications: [
          "Robot Motion: Displacement vectors from motor commands",
          "Computer Graphics: RGB color space representation",
          "Drone Navigation: 3D motion using thruster vectors",
          "Signal Processing: Frequency component decomposition",
        ],
        formulas: [
          "Linear combination: v = a₁v₁ + a₂v₂ + ... + aₙvₙ",
          "Linear independence: c₁v₁ + c₂v₂ + ... + cₙvₙ = 0 ⟹ all cᵢ = 0",
          "Linear transformation: T(av + bw) = aT(v) + bT(w)",
          "Transformation matrix: [T(e₁) | T(e₂) | ... | T(eₙ)]",
        ],
      },
    },
    {
      id: "ch4",
      title: "Chapter 4: Orthogonality & Least Squares",
      content: {
        overview: "Orthogonality provides powerful tools for projection and approximation. When exact solutions don't exist (overdetermined systems), least squares finds the best approximate solution by minimizing the sum of squared errors.",
        keyPoints: [
          "Orthogonal vectors: u · v = 0 indicates perpendicularity",
          "Projection formula: proj_u(v) = (v · u / u · u) × u",
          "Normal equations: AᵀAx = Aᵀb for least squares solution",
          "QR factorization: Numerically stable method for least squares",
        ],
        applications: [
          "Beam Deflection Fitting: Approximate measured data with linear models",
          "Sensor Calibration: Determine calibration curves from noisy measurements",
          "Robot Path Planning: Project desired motion onto achievable directions",
          "Signal Filtering: Separate meaningful signal from noise components",
        ],
        formulas: [
          "Dot product: u · v = |u||v|cos(θ) = Σuᵢvᵢ",
          "Projection: proj_L(b) = (b · a / a · a) × a",
          "Error vector: e = b - proj_L(b), orthogonal to L",
          "Least squares: x̂ = (AᵀA)⁻¹Aᵀb",
        ],
      },
    },
    {
      id: "ch5",
      title: "Chapter 5: Eigenvalues, Eigenvectors & Dynamics",
      content: {
        overview: "Eigenvalue analysis reveals the natural behavior of dynamic systems. Eigenvectors represent mode shapes (patterns of motion), while eigenvalues determine natural frequencies and stability characteristics.",
        keyPoints: [
          "Eigenvalue equation: Av = λv where λ is eigenvalue, v is eigenvector",
          "Characteristic equation: det(A - λI) = 0",
          "Mode shapes: Each eigenvector represents a natural pattern of deformation",
          "Diagonalization: A = PDP⁻¹ decouples coupled equations",
        ],
        applications: [
          "Spring-Mass Vibrations: Find natural frequencies and mode shapes",
          "Building Analysis: Determine sway modes of multi-story structures",
          "Robotic Arms: Analyze stiffness modes of flexible manipulators",
          "Stability Analysis: Predict system behavior from eigenvalue signs",
        ],
        formulas: [
          "Characteristic polynomial: det(A - λI) = 0",
          "Natural frequency: ω = √λ for vibration problems",
          "In-phase motion: Both masses move in same direction",
          "Out-of-phase motion: Masses move in opposite directions",
          "Diagonalization: D = P⁻¹AP where columns of P are eigenvectors",
        ],
      },
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Comprehensive Guide
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Detailed Chapter Content
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Expand each chapter below to explore key concepts, formulas, and engineering applications in depth.
          </p>
        </div>

        {/* Accordion content */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {chapters.map((chapter) => (
              <AccordionItem
                key={chapter.id}
                value={chapter.id}
                className="floating-card border-none"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <BookOpen className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-serif font-semibold text-lg">{chapter.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-6">
                    {/* Overview */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Overview</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {chapter.content.overview}
                      </p>
                    </div>

                    {/* Key Points */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Concepts</h4>
                      <ul className="space-y-2">
                        {chapter.content.keyPoints.map((point, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-math-green shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Applications */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Engineering Applications</h4>
                      <ul className="space-y-2">
                        {chapter.content.applications.map((app, index) => (
                          <li key={index} className="text-sm text-muted-foreground pl-4 border-l-2 border-accent">
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Formulas */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Formulas</h4>
                      <div className="space-y-2">
                        {chapter.content.formulas.map((formula, index) => (
                          <div key={index} className="math-formula">
                            {formula}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default DetailedContent;
