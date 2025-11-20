const SectionHeader = ({ title, subtitle, align = "center" }) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 text-[#00f0ff] text-xs font-bold tracking-widest uppercase mb-4 ${align === "center" ? "mx-auto" : ""}`}>
      <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse"></span>
      {subtitle}
    </div>
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Space_Grotesk'] tracking-tight">
      {title.split(" ").map((word, i) => (
        <span key={i} className={["Growth", "Digital", "Scale", "Results", "High-Speed"].includes(word) ? "text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#ffd700]" : ""}>
          {word}{" "}
        </span>
      ))}
    </h2>
  </div>
);

export default SectionHeader;
