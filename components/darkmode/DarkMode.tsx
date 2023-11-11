"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="fixed right-4 bottom-4 transition ease-in-out delay-100"
      onClick={(e) => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme === "dark" ? (
        <FaMoon className="w-6 h-6" />
      ) : (
        <FaSun className="w-6 h-6" />
      )}
    </button>
  );
};

export default DarkModeButton;

// "use client";
// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";

// const ThemeSwitcher = () => {
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme } = useTheme();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   return (
//     <div>
//       The current theme is: {theme}
//       <br />
//       <button onClick={() => setTheme("light")}>Light Mode</button>
//       <br />
//       <button onClick={() => setTheme("dark")}>Dark Mode</button>
//     </div>
//   );
// };

// export default ThemeSwitcher;
