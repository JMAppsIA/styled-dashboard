import React from "react";
import {
  NavbarContainer,
  NavLeftSide,
  NavRightSide,
} from "../../styled-components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCloud } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../IconButton/IconButton";
import { IconNotificationBadge } from "../../styled-components/IconButton";
import Avatar from "../Avatar/Avatar";
import avatarIcon from '../../assets/images/avatar.avif'

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLeftSide>
        <h1>Your Logo</h1>
      </NavLeftSide>
      <NavRightSide>
        <IconButton>
          <IconNotificationBadge>{3}</IconNotificationBadge>
          <FontAwesomeIcon
            icon={faBell}
            color={"#435971"}
            size={`xl`}
            style={{position: 'relative'}}
          >
          </FontAwesomeIcon>
        </IconButton>
        <IconButton
          isRight
        >
          <FontAwesomeIcon
            icon={faCloud}
            color={"#435971"}
            size={`xl`}
            style={{position: 'relative'}}
          >
          </FontAwesomeIcon>
        </IconButton>
        <Avatar source={avatarIcon} name={`Erza Miller`}/>
      </NavRightSide>
    </NavbarContainer>
  );
};

export default Navbar;
