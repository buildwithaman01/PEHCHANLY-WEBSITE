const Button = ({ children, variant = "primary", className = "", onClick, icon: Icon }) => {
  const base = "relative px-8 py-4 rounded-lg font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-3 group overflow-hidden font-['Space_Grotesk']";
  const variants = {
    primary: "bg-[#00f0ff] text-[#050816] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]",
    secondary: "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-[#00f0ff]/50",
    gold: "bg-[#ffd700] text-[#050816] hover:shadow-[0_0_30px_rgba(255,215,0,0.4)]",
    outline: "border border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff] hover:text-[#050816]"
  };
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      <span className="relative z-10 flex items-center gap-2">{children} {Icon && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-1" />}</span>
      {variant === 'primary' && <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12 origin-bottom-left" />}
    </button>
  );
};

export default Button;
