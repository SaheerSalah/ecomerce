import Image from "next/image";
// import Link from "next/link";
interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}
export default function Logo({ width = 200, height = 200, className }: LogoProps) {
  return (
    <div className={className}>
      <Image
        width={width}
        height={height}
        src="/images/logo.jpg"
        alt="classyshop Logo"
        className="cursor-pointer"
      />
    </div>
  );
}
