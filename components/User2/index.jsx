import React from "react";
import styled from "styled-components";
import { ValignTextMiddle, InterMediumRockBlue18px } from "../../styledMixins";


function User2(props) {
  const { avatar, name, className } = props;

  return (
    <User21 className={`user-2 ${className || ""}`}>
      <Avatar className="avatar-1" style={{ backgroundImage: `url(${avatar})` }}></Avatar>
      <Name className="name-1">{name}</Name>
    </User21>
  );
}

const User21 = styled.div`
  position: relative;
  align-self: stretch;
  min-width: 277px;
  height: 40px;
`;

const Avatar = styled.div`
  position: absolute;
  width: 35px;
  height: 35px;
  top: 3px;
  left: 0;
  border-radius: 200px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Name = styled.div`
  ${ValignTextMiddle}
  ${InterMediumRockBlue18px}
            position: absolute;
  height: 22px;
  top: 8px;
  left: 50px;
  letter-spacing: 0;
  line-height: normal;
`;

export default User2;
