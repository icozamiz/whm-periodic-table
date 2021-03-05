import { Box } from "@material-ui/core";
import { IElement } from "../../types";
import "./styles.scss";

export interface IElementInfoCardProps {
  element: IElement;
  isFrench: boolean;
  isMobile?: boolean;
  onClick?: (element: IElement) => void;
}

export const ElementInfoCard = ({
  element,
  isFrench,
  onClick,
  isMobile,
}: IElementInfoCardProps) => {
  const { number, category, id, name, dates } = element;
  return (
    <Box
      className={`element-info-card`}
      onClick={() => onClick && onClick(element)}
    >
      {!isMobile ? (
        <img
          className="element-image"
          src={`./assets/${element.imageUrl}`}
          alt={element.name}
        />
      ) : (
        <Box className={`element-box ${category}`}>
          <Box className="number">{number}</Box>
          <Box className="id">{id}</Box>
          <Box className="name">{name}</Box>
          <Box className="dates">{dates}</Box>
        </Box>
      )}
      {element.infoBlurb ? (
        <Box className="element-info">
          <Box className="title">{name}</Box>
          <Box className="info-blurb">
            {element.infoBlurb.slice(0, 250)}...{" "}
            <i>
              {isFrench
                ? "(Cliquez pour voir plus d'informations)"
                : "(Click to see more info)"}
            </i>
          </Box>
        </Box>
      ) : (
        <Box className="element-info">{name}</Box>
      )}
    </Box>
  );
};
