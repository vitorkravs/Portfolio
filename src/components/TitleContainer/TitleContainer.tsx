//styles
import "./styles.scss";

type titleContainerProps = {
  text: string;
  description?: string;
};

const TitleContainer = ({ text, description }: titleContainerProps) => {
  return (
    <div id="title-container">
      <h2>{text}</h2>
      {description && <p>{description}</p>}
      <span className="border-title"></span>
    </div>
  );
};

export default TitleContainer;
