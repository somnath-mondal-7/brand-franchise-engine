const PhilosophyBlock = () => {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            Our Philosophy
          </span>
          <p className="text-2xl sm:text-3xl md:text-4xl font-light text-foreground leading-snug tracking-tight">
            We take on a{" "}
            <span className="font-semibold italic text-primary">handful</span>{" "}
            of franchise brands each quarter.
            <span className="block mt-3 text-muted-foreground">
              That's the only way the work stays sharp.
            </span>
          </p>
          <div className="mt-8 inline-flex items-center gap-3">
            <div className="h-px w-12 bg-border" />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              By invitation & fit
            </span>
            <div className="h-px w-12 bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophyBlock;
