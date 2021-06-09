import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import useStyle from "./Slider.styles";

type Props = any;

const Slider: React.FC<Props> = (): JSX.Element => {
  const { data, isEnglish, moveAside } = useTypedSelector(
    (state) => state.slider
  );
  const { changeLanguage, moveSliderRight, moveSliderLeft } = useActions();
  console.log(data);
  const classes = useStyle();

  let widthCardLine: string = `${data.length * 100}vw`;

  const handleClick = (): void => {
    changeLanguage();
  };

  const moveLeft = (): void => {
    console.log(moveAside);
    if (moveAside < 0) {
      console.log("left");
      moveSliderLeft();
    }
  };

  const moveRight = (): void => {
    console.log(moveAside);
    if (moveAside > -data.length * 100 + 100) {
      console.log("right", moveAside);
      moveSliderRight();
      console.log("right", moveAside);
    }
  };

  const handleBtnClick = (side: string) =>
    side === "left" ? moveLeft() : moveRight();

  return (
    <div className={classes.slider}>
      <div
        className={classes.btnLeft}
        onClick={() => handleBtnClick("left")}
      ></div>
      <div
        className={classes.cardLine}
        style={{
          width: widthCardLine,
          transform: `translateX(${moveAside}vw)`,
        }}
      >
        {data.map((word: {}, i: number) => {
          return (
            <div className={classes.card} key={i.toString()}>
              <p className={classes.word} onClick={handleClick}>
                {isEnglish ? Object.keys(word) : Object.values(word)}
              </p>
            </div>
          );
        })}
      </div>
      <div
        className={classes.btnRight}
        onClick={() => handleBtnClick("right")}
      ></div>
    </div>
  );
};

export default Slider;
