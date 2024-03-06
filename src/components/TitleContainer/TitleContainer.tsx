//styles
import "./styles.scss";

type titleContainerProps = {
  text: string;
};

const TitleContainer = ({ text }: titleContainerProps) => {
  return (
    <div id="title-container">
      <h2>{text}</h2>
      <span className="border-title"></span>
    </div>
  );
};

export default TitleContainer;
