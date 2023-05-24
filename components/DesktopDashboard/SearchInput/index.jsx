import React from 'react';
import styled from 'styled-components';
import { DesktopPoDashboardbody2Regular2 } from '../../../styledMixins';

function SearchInput(props) {
  const { tryMiamiBeachhouse } = props;

  return (
    <SearchInput1>
      <TryMiamiBeachhouse>{tryMiamiBeachhouse}</TryMiamiBeachhouse>
      <IconSearch src="/img/search-1@2x.png" alt="icon-search" />
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
  background-color: var(--outer-space);
  border-radius: 6px;
  overflow: hidden;
`;

const TryMiamiBeachhouse = styled.div`
  ${DesktopPoDashboardbody2Regular2}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 400;
  color: var(--cararra);
  line-height: 24px;
  white-space: nowrap;
`;

const IconSearch = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

export default SearchInput;
