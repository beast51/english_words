import { createUseStyles } from "react-jss";
import Slider from "./Components/Slider/Slider";

const useStyles = createUseStyles({
  "@global": {
    body: {
      margin: 0,
    },
  },
  slider: {
    overflow: "hidden",
  },
  cardLine: {
    display: "flex",
  },
  app: {
    padding: "16px",
  },
});

const data: Array<{ [key: string]: string }> = [
  { Apple: "Яблоко" },
  { Grape: "Виноград" },
];

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <div className={classes.slider}>
        <div className={classes.cardLine}>
          <Slider data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
