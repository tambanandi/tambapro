import { useContext } from "react";
import styled from "styled-components";
import { Zoom } from "react-reveal";
import { profileData, themeData } from "../../data/data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DarkModeToggle from "react-dark-mode-toggle";
import themeContext from "../../state/context/themeContext";
import "react-lazy-load-image-component/src/effects/blur.css";
import Livebutton from "../livebutton/Livebutton"

const Header = () => {
  const a = useContext(themeContext);
  const { userName, photoLink, desc } = profileData;

  return (
    <>
      <DarkMode onChange={a.setDarkMode} checked={a.darkMode} size={50} />
      <TwitchLogo>
        <Livebutton/>
      </TwitchLogo>
      <Zoom>
        <HeaderWrapper>
          <CustomImage effect="blur" src={photoLink} />
          <UserNameText props={a.darkMode ? themeData.light : themeData.dark}>
            @{userName}
          </UserNameText>
          <UserNameText props={a.darkMode ? themeData.light : themeData.dark}>
            {desc}
          </UserNameText>
          <SocialIcons>
            <a href="https://discord.gg/tyv3XudrYg"><img src="discord.png" width="50px" height="auto"></img></a>
            <a href="https://www.instagram.com/tambapro1/"><img src="instagram.png" width="50px" height="auto"></img></a>
            <a href="https://www.youtube.com/@tambapro9881"><img src="youtube.png" width="50px" height="auto"></img></a>
          </SocialIcons>
        </HeaderWrapper>
      </Zoom>
    </>
  );
};
export default Header;

const DarkMode = styled(DarkModeToggle)`
  margin: 15px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

const TwitchLogo = styled.div`
  margin-top: 15px;
  position: absolute;
  top: 0px;
  left: 15px;
  z-index: 1;
  :hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CustomImage = styled(LazyLoadImage)`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 5px;
`;

const UserNameText = styled.h6`
  color: ${(props) => props.props.headerFontColor};
  font-weight: bold;
  text-align: center;
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 3px;
  gap: 10px;
`;