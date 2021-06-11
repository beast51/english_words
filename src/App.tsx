import { createUseStyles } from "react-jss";
import Slider from "./Components/Slider/Slider";
import LanguageSwitcher from "./Components/LanguageSwitcher/LanguageSwitcher";

const useStyles = createUseStyles({
  "@global": {
    body: {
      margin: 0,
    },
  },
  app: {
    padding: "16px",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Slider />
      <LanguageSwitcher />
    </div>
  );
}

export default App;
