import { createUseStyles } from "react-jss";
import Slider from "./Components/Slider/Slider";

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
    </div>
  );
}

export default App;
