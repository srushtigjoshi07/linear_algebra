const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* University info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center font-serif font-bold">
                LA
              </div>
              <div>
                <div className="font-serif font-semibold">Linear Algebra</div>
                <div className="text-sm text-primary-foreground/70">25EMAB202</div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              A comprehensive course covering matrix methods, vector spaces, and their applications in engineering systems.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#overview" className="hover:text-primary-foreground transition-colors">Course Overview</a></li>
              <li><a href="#chapters" className="hover:text-primary-foreground transition-colors">Chapters</a></li>
              <li><a href="#labs" className="hover:text-primary-foreground transition-colors">Lab Assessments</a></li>
            </ul>
          </div>

          {/* Institution */}
          <div>
            <h4 className="font-semibold mb-4">Institution</h4>
            <div className="text-sm text-primary-foreground/70 space-y-1">
              <p>KLE Technological University</p>
              <p>Department of Mathematics</p>
              <p className="italic">"Creating Value, Leveraging Knowledge"</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Linear Algebra Course Materials. Academic use only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
