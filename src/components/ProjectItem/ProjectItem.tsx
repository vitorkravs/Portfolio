//styles
import "./styles.scss";

//animação
import { motion } from "framer-motion";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

//next links
import Link from "next/dist/client/link";

interface ProjetoProps {
  title: any;
  description: string;
  imgURL: string;
  slug?: string;
  repository?: string;
  tecnologias: string;
}

const ProjectItem = ({
  title,
  description,
  imgURL,
  slug,
  repository,
  tecnologias,
}: ProjetoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      id="project-item-container"
      style={{
        backgroundImage: `url(${imgURL})`,
      }}
    >
      <div className="content">
        <div className="text">
          <h1>{title}</h1>
          <h2>{description}</h2>
        </div>
        <div id="button-project-container">
          <Link href={`${slug}`} target="_blank" rel="noopener noreferrer">
            Ver mais <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
          <Link
            href={`${repository}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repositório <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </div>

        <div id="tecnologias-container">
          <h3>Tecnologias:</h3>
          <p>{tecnologias}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
