import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { RouteComponentProps } from "react-router-dom";
import ArrowRight from "@material-ui/icons/ArrowRight";
import { donateFr, donateEn } from "./donate-data";
import React from "react";
import "./styles.scss";

export interface IDonatePageProps extends RouteComponentProps {
  isFrench: boolean;
}

export const DonatePage = ({ isFrench }: IDonatePageProps) => {
  const lang = isFrench ? donateFr : donateEn;
  const {
    title,
    description,
    infoPoints,
    buttonText,
    title2,
    description2,
    infoPoints2,
    buttonText2,
  } = lang;
  const onDonateClick = () => {
    window.open(
      "https://secure2.convio.net/cadwf/site/Donation2?idb=255209158&df_id=2183&2183.donation=form1&mfc_pref=T",
      "_blank"
    );
  };
  const onFundClick = () => {
    window.open("https://www.buymeacoffee.com/icozamiz", "_blank");
  };
  return (
    <Box className="donate-page">
      <Box className="info-container">
        <h1>{title}</h1>
        <div className="info">
          <p className="info-description">{description}</p>
          {infoPoints.map((point) => (
            <div className="donate-point">
              <ArrowRight />
              <p dangerouslySetInnerHTML={{ __html: point }}></p>
            </div>
          ))}
        </div>
        <Button className="donate-button" onClick={() => onDonateClick()}>
          {buttonText}
        </Button>
      </Box>
      <Box className="info-container">
        <h1>{title2}</h1>
        <div className="info">
          <p className="info-description">{description2}</p>
          {infoPoints2.map((point) => (
            <div className="donate-point">
              <ArrowRight />
              <p dangerouslySetInnerHTML={{ __html: point }}></p>
            </div>
          ))}
        </div>
        <Button className="donate-button" onClick={() => onFundClick()}>
          {buttonText2}
        </Button>
      </Box>
    </Box>
  );
};
