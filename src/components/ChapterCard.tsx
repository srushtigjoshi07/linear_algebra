import { ReactNode } from "react";
import { ChevronRight, Clock } from "lucide-react";

interface ChapterCardProps {
  number: number;
  title: string;
  description: string;
  hours: number;
  topics: string[];
  icon: ReactNode;
  colorClass: string;
}

const ChapterCard = ({
  number,
  title,
  description,
  hours,
  topics,
  icon,
  colorClass,
}: ChapterCardProps) => {
  return (
    <div className="floating-card card-hover group">
      <div className="flex items-start gap-4">
        {/* Chapter number badge */}
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${colorClass}`}
        >
          {icon}
        </div>

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Chapter {number}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              {hours} hrs
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {description}
          </p>

          {/* Topics */}
          <div className="space-y-1">
            {topics.slice(0, 4).map((topic, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <ChevronRight className="w-4 h-4 text-accent" />
                <span>{topic}</span>
              </div>
            ))}
            {topics.length > 4 && (
              <span className="text-xs text-muted-foreground pl-6">
                +{topics.length - 4} more topics
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterCard;
