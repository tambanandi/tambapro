import styled from "styled-components";
import { socialLinks } from "../../data/data";
const Footer = () => {
  const SocialIconStyle = {
    width: "650px",
    height: "164px",
    borderRadius: "1%",
    backgroundColor: "transparent",
  };

  return (
    <>
      <div className="bottom">
        <hr />
        <FooterContainer>
          {socialLinks.map((link, index) => {
            return (
              <FooterContent key={index}>
                <img
                  className="shadow"
                  style={SocialIconStyle}
                  src={link}
                  alt="gambleaware"
                />
              </FooterContent>
            );
          })}
        </FooterContainer>
      </div>
    </>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100vw;
  display: block;
  margin-bottom: 1px;
  align-items: center;
  justify-content: center;
`;

const FooterContent = styled.div`
  margin: 5px;
`;
