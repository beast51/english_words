import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  app: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "16px",
  },
  card: {
    width: "288px",
    height: "288px",
    backgroundColor: "lightcoral",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  word: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "38px",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <div className={classes.card}>
        <p className={classes.word}>Apple</p>
      </div>
    </div>
  );
}

export default App;
