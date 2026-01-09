import { FileText, Code, User, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface LabCardProps {
  labNumber: number;
  title: string;
  studentName: string;
  srn: string;
  date: string;
  problems: string[];
  concepts: string[];
  images?: string[];
  isLabTest?: boolean;
}

const LabCard = ({
  labNumber,
  title,
  studentName,
  srn,
  date,
  problems,
  concepts,
  images = [],
  isLabTest = false,
}: LabCardProps) => {
  const [showImages, setShowImages] = useState(false);

  return (
    <div className="lab-card card-hover p-6 pl-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent-foreground rounded-full px-3 py-1 text-xs font-medium mb-2">
            <FileText className="w-3 h-3" />
            {isLabTest ? "Lab Test" : `Lab Assessment ${labNumber}`}
          </div>
          <h3 className="text-xl font-serif font-semibold text-foreground">
            {title}
          </h3>
        </div>
        <div className="text-right text-sm text-muted-foreground">
          <div className="flex items-center gap-1 justify-end">
            <Calendar className="w-3 h-3" />
            {date}
          </div>
        </div>
      </div>

      {/* Student info */}
      <div className="flex items-center gap-4 mb-4 pb-4 border-b border-border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <User className="w-4 h-4" />
          <span>{studentName}</span>
        </div>
        <div className="text-sm text-muted-foreground font-mono">
          {srn}
        </div>
      </div>

      {/* Problems */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
          <Code className="w-4 h-4 text-primary" />
          Problems
        </h4>
        <ul className="space-y-1">
          {problems.map((problem, index) => (
            <li key={index} className="text-sm text-muted-foreground pl-4 border-l-2 border-border">
              {problem}
            </li>
          ))}
        </ul>
      </div>

      {/* Concepts */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-foreground mb-2">
          Mathematical Concepts
        </h4>
        <div className="flex flex-wrap gap-2">
          {concepts.map((concept, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
            >
              {concept}
            </span>
          ))}
        </div>
      </div>

      {/* PDF Screenshots */}
      {images.length > 0 && (
        <div className="mt-4 pt-4 border-t border-border">
          <button
            onClick={() => setShowImages(!showImages)}
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            {showImages ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            {showImages ? "Hide" : "View"} PDF Pages ({images.length})
          </button>
          
          {showImages && (
            <div className="mt-4 grid gap-4">
              {images.map((img, index) => (
                <div key={index} className="rounded-lg overflow-hidden border border-border shadow-sm">
                  <img 
                    src={img} 
                    alt={`${isLabTest ? "Lab Test" : `Lab ${labNumber}`} - Page ${index + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LabCard;
