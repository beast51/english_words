import { useState } from "react";
import useStyle from "./Slider.styles";

type Props = any;

const Slider: React.FC<Props> = ({ data }): JSX.Element => {
  const classes = useStyle();
  const [isEnglish, setIsEnglish] = useState(true);
  const [moveAside, setMoveAside] = useState(0);

  let widthCardLine: string = `${data.length * 100}vw`;

  const handleClick = (): void => {
    setIsEnglish(!isEnglish);
  };

  const moveLeft = (): void => {
    if (moveAside < 0) {
      setMoveAside(moveAside + 100);
    }
  };

  const moveRight = (): void => {
    if (moveAside > -data.length * 100 + 100) {
      setMoveAside(moveAside - 100);
    }
  };

  const handleBtnClick = (e: any, side: string) =>
    side === "left" ? moveLeft : moveRight;

  return (
    <div className={classes.slider}>
      <div
        className={classes.btnLeft}
        onClick={(e) => handleBtnClick(e, "left")}
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
        onClick={(e) => handleBtnClick(e, "right")}
      ></div>
    </div>
  );
};

export default Slider;
