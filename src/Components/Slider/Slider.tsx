import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import useStyle from "./Slider.styles";
import { partOfSpeechType } from "../../types/slider";

type Props = any;

const Slider: React.FC<Props> = (): JSX.Element => {
  const { changeLanguage, moveSliderRight, moveSliderLeft } = useActions();
  const { data, isEnglish, moveAside } = useTypedSelector(
    (state) => state.slider
  );
  const classes = useStyle();

  const backgroundColor = (partOfSpeech: string) => {
    switch (partOfSpeech) {
      case "verb":
        return "#6E6702";
      case "noun":
        return "#F1DCC9";
      case "adverb":
        return "#9F4636";
      case "pronoun":
        return "#C05805";
      case "numerals":
        return "#CE5A57";
      case "adverb":
        return "#444C5C";
    }
  };

  let widthCardLine: string = `${data.length * 100}vw`;

  const handleClick = (): void => {
    changeLanguage();
  };

  const moveLeft = (): void => {
    if (moveAside < 0) {
      moveSliderLeft();
    }
  };

  const moveRight = (): void => {
    if (moveAside > -data.length * 100 + 100) {
      moveSliderRight();
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
        {data.map((words: { [key: string]: string }, i: number) => {
          console.log(words.en);
          return (
            <div
              className={classes.card}
              style={{ backgroundColor: backgroundColor(words.partOfSpeech) }}
              key={i.toString()}
            >
              {words.img && (
                <img
                  onClick={handleClick}
                  className={classes.image}
                  src={words.img}
                  alt={words.en}
                />
              )}
              <p
                className={classes.word}
                style={{
                  color:
                    words.partOfSpeech === "verb" ||
                    words.partOfSpeech === "adverb"
                      ? "white"
                      : "black",
                }}
                onClick={handleClick}
              >
                {isEnglish ? words.en : words.ru}
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
