import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/default";
import { GlobalStyle } from "./global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>Hello world</h1>
    </ThemeProvider>
  )
}
