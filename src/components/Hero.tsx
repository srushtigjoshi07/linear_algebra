import { BookOpen, Calculator, Cpu, GitBranch } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 hero-gradient opacity-95" />
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        {/* University badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-white/90 text-sm font-medium">
            KLE Technological University • Department of Mathematics
          </span>
        </div>

        {/* Main title */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Linear Algebra
        </h1>
        <p className="text-xl md:text-2xl text-white/80 font-light mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Course Code: 25EMAB202
        </p>
        <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          A comprehensive exploration of matrix methods, vector spaces, and their applications in engineering systems
        </p>

        {/* Stats cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-colors">
            <BookOpen className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">5</div>
            <div className="text-sm text-white/60">Chapters</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-colors">
            <Calculator className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">32</div>
            <div className="text-sm text-white/60">Hours</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-colors">
            <Cpu className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">4</div>
            <div className="text-sm text-white/60">Lab Assessments</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-colors">
            <GitBranch className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">∞</div>
            <div className="text-sm text-white/60">Applications</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
