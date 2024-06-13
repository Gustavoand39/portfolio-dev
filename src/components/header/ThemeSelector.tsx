import { LuSunMedium, LuMoon } from "react-icons/lu";

import useTheme from "@/hooks/useTheme";

const ThemeSelector = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    toggleTheme(e.target.checked ? "dark" : "light");

  return (
    <label className="swap swap-rotate p-2">
      <input
        type="checkbox"
        className="theme-controller"
        value="dim"
        checked={theme === "dark" ? true : false}
        onChange={handleThemeChange}
        aria-label="Cambiar tema"
      />
      <LuSunMedium size={30} className="swap-off" />
      <LuMoon size={30} className="swap-on" />
    </label>
  );
};

export default ThemeSelector;
