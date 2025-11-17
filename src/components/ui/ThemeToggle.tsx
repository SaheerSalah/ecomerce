// "use client";
// import { useEffect, useState } from "react";
// import { SunIcon, MoonIcon } from "react-icons/hi";

// export default function ThemeToggle() {
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     if (
//       localStorage.theme === "dark" ||
//       (!("theme" in localStorage) &&
//         window.matchMedia("(prefers-color-scheme: dark)").matches)
//     ) {
//       document.documentElement.classList.add("dark");
//       setTheme("dark");
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (theme === "dark") {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       setTheme("light");
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       setTheme("dark");
//     }
//   };

//   return (
//     <button onClick={toggleTheme} className="p-2 rounded-full">
//       {theme === "dark" ? <SunIcon /> : <MoonIcon />}
//     </button>
//   );
// }
