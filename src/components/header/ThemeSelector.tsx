// import SunIcon from "../../../icons/SunIcon";
// import MoonIcon from "../../../icons/MoonIcon";
import useTheme from "@/hooks/useTheme";

const ThemeSelector = () => {
  const { theme, toggleTheme } = useTheme();

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
      {/* <SunIcon />
      <MoonIcon /> */}
    </label>
  );
};

export default ThemeSelector;
