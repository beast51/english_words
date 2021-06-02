import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  card: {
    minWidth: "288px",
    width: "calc(100vw)",
    height: "288px",
    backgroundColor: "lightcoral",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  word: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "38px",
    marginLeft: "-32px",
  },
  slider: {
    overflow: "hidden",
    width: "100%",
    position: "relative",
  },
  cardLine: {
    display: "flex",
  },
  app: {
    padding: "16px",
  },
  btnLeft: {
    width: "20vw",
    minHeight: "288px",
    height: "100%",
    backgroundColor: "transparent",
    position: "absolute",
    zIndex: "1",
    top: "0",
    left: "0",
  },
  btnRight: {
    width: "20vw",
    minHeight: "288px",
    height: "100%",
    backgroundColor: "transparent",
    position: "absolute",
    zIndex: "1",
    top: "0",
    right: "0",
  },
});

export default useStyle;
