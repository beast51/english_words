import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  card: {
    minWidth: "288px",
    width: "100vw",
    height: "288px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "column",
  },
  image: {
    alignSelf: "center",
    marginLeft: "-32px",
    height: "50%",
    borderRadius: "16px",
  },
  word: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "38px",
    marginLeft: "-32px",
    marginTop: "0",
    marginBottom: "0",
    padding: "25px",
    alignSelf: "center",
  },
  slider: {
    overflow: "hidden",
    width: "100%",
    position: "relative",
    borderRadius: "16px",
  },
  cardLine: {
    display: "flex",
    transition: "transform",
    transitionDuration: ".3s",
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
    "&:active": {
      backgroundImage: "linear-gradient(270deg, transparent 5%, #ffffff 200%)",
      opacity: "50%",
      transition: "background-color",
      transitionDuration: ".3s",
      transitionTimingFunction: "ease-in-out",
    },
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
    "&:active": {
      backgroundImage: "linear-gradient(90deg, transparent 5%, #ffffff 200%)",
      opacity: "50%",
      transition: "background-color",
      transitionDuration: ".3s",
      transitionTimingFunction: "ease-in-out",
    },
  },
});

export default useStyle;
