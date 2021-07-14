import "./App.css";
import { Router } from "./Router";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  palette: { primary: {main: "#7ccfaf"}, secondary: {main: "#4c5264"} },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
