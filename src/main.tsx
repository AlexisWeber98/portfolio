import { ViteReactSSG } from "vite-react-ssg"
import { routes } from "./App"
import "@fontsource-variable/geist/index.css"
import "@fontsource-variable/geist-mono/index.css"
import "./globals.css"
import "./fonts.css"

export const createRoot = ViteReactSSG({ routes })
