// components/layout/PageSection.tsx
type PageSectionProps = {
  children: React.ReactNode;
  variant?: "white" | "gray" | "dark" | "gradient";
  id?: string;
  className?: string;
  containerClassName?: string;
};

export function PageSection({
  children,
  variant = "white",
  id,
  className,
}: PageSectionProps) {
  const variants = {
    white: "bg-white",
    gray: "bg-slate-50",
    dark: "bg-slate-900 text-white",
    gradient: "bg-linear-to-b from-slate-50 to-white",
  };

  return (
    <section
      id={id}
      className={`relative overflow-hidden py-10 ${variants[variant]} ${className ?? ""}`}
    >
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}
