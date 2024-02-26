import { ThemeProviderState, initialState } from "@/constants/types";
import { createContext } from "react";

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);
export default ThemeProviderContext;
