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

const data: Array<{ [key: string]: string }> = [
  { Apple: "Яблоко" },
  { Grape: "Виноград" },
  { Application: "Приложение" },
  { Perhaps: "Возможно" },
  { Competitor: "Конкурент" },
  { Sweat: "Потеть" },
  { Gulp: "Глоток" },
  { Throw: "Бросать" },
];

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Slider data={data} />
    </div>
  );
}

export default App;
