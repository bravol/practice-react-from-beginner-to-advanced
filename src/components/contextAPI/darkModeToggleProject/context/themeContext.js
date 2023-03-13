import { createContext, useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";

//1. create the context in a separate file
//2. Provide the context to the components
//3. Use the context

const ThemeContext = createContext();

//creating a custom theme context.provider
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [switchBtn, setSwitchBtn] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setSwitchBtn(!switchBtn);
  };

  useEffect(() => {
    if (theme === "dark") {
      setSwitchBtn(true);
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, switchBtn }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
