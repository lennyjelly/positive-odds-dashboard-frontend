import React from "react";
import styled from "styled-components";
import { InterNormalCapeCod16px } from "../../styledMixins";


function SearchInput(props) {
  const { tryMiamiBeachhouse, search } = props;

  return (
    <SearchInput1>
      <TryMiamiBeachhouse>{tryMiamiBeachhouse}</TryMiamiBeachhouse>
      <IconSearch src={search} alt="icon-search" />
    </SearchInput1>
  );
}

const SearchInput1 = styled.div`
  display: flex;
  width: 288px;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  position: relative;
  background-color: var(--white);
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid;
  border-color: #eaecee;
`;

const TryMiamiBeachhouse = styled.div`
  ${InterNormalCapeCod16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const IconSearch = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

export default SearchInput;
