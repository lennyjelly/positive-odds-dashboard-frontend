import React from 'react';
import styled from 'styled-components';
import {
  ValignTextMiddle,
  InterMediumSnowDrift18px,
} from '../../../styledMixins';

function User2(props) {
  const { avatar, name, className } = props;

  return (
    <User21 className={`user-2 ${className || ''}`}>
      <Avatar
        className="avatar-1"
        style={{ backgroundImage: `url(${avatar})` }}
      ></Avatar>
      <Name className="name-1">{name}</Name>
    </User21>
  );
}

const User21 = styled.div`
  position: relative;
  display: flex;
  gap: 15px;
  align-self: stretch;
  min-width: 277px;
  height: 40px;
`;

const Avatar = styled.div`
  margin-top: 3px;
  width: 35px;
  height: 35px;
  border-radius: 200px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Name = styled.div`
  ${ValignTextMiddle}
  ${InterMediumSnowDrift18px}
            margin-top: 9px;
  width: 97px;
  height: 22px;
  letter-spacing: 0;
  line-height: normal;
`;

const Name1 = styled.div`
  ${ValignTextMiddle}
  ${InterMediumSnowDrift18px}
            
            
           .user-2.user-3  & {
    width: 122px;
  }
`;

const Name2 = styled.div`
  ${ValignTextMiddle}
  ${InterMediumSnowDrift18px}
            
            
           .user-2.user-1  & {
    width: 126px;
  }
`;

const Name3 = styled.div`
  ${ValignTextMiddle}
  ${InterMediumSnowDrift18px}
            
            
           .user-2.user-5  & {
    width: 207px;
  }
`;

export default User2;
