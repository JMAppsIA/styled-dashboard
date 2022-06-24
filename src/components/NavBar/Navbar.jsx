import React from "react";
import {
  NavbarContainer,
  NavLeftSide,
  NavRightSide,
} from "../../styled-components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCloud } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../IconButton/IconButton";
import { IconNotificationBadge, IconContainer } from "../../styled-components/IconButton";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLeftSide>
        <h1>Your Logo</h1>
      </NavLeftSide>
      <NavRightSide>
        <IconButton
          noSize
          hasNotifications
          notifications={3}
          backgroundColor={`#EAECF2`}
        >
          <IconContainer>
          <FontAwesomeIcon
            icon={faBell}
            color={"#435971"}
            size={`2x`}
            style={{position: 'relative'}}
          >
          </FontAwesomeIcon>
          <IconNotificationBadge/>
          </IconContainer>
        </IconButton>
        <IconButton
          noSize
          hasNotifications
          notifications={3}
          backgroundColor={`#EAECF2`}
          style={{marginLeft: 16}}
        >
          <IconContainer>
            <FontAwesomeIcon
              icon={faCloud}
              color={"#435971"}
              size={`2x`}
              style={{position: 'relative'}}
            />
          </IconContainer>
        </IconButton>
      </NavRightSide>
    </NavbarContainer>
  );
};

export default Navbar;
