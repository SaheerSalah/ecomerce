
interface ContainerProps {
  children: React.ReactNode;
  className?: string;       // لإضافة أي كلاس خارجي
  py?: string;              // padding عمودي
  px?: string;              // padding أفقي
  flex?: boolean;           // لو Container يكون flex
  grid?: boolean;           // لو Container يكون grid
  gap?: string;             // المسافة بين العناصر داخل الـ Container
}

export default function Container({
  children,
  className = "",
  py = "py-6",
  px = "px-4 md:px-6",
  flex = false,
  grid = false,
  gap = "",
}: ContainerProps) {
    
  const displayClass = flex
    ? "flex"
    : grid
    ? "grid"
    : ""; // flex أو grid أو لا شيء

  const gapClass = gap ? `gap-${gap}` : "";

  return (
    <div className={`mx-auto max-w-7xl ${px} ${py} ${displayClass} ${gapClass} ${className}`}>
      {children}
    </div>
  );
}
