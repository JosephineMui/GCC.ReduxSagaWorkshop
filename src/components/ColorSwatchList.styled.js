import styled from 'styled-components';

export const ColorListContainer = styled.div`
  position: relative;
  &.hide-all-swatches {
    overflow: hidden;
    height: ${props => props.swatchRowHeigh};

    @media (min-width: 768px) {
      height: ${props => props.swatchRowHeigh};
    }
  }
`;

export const SwatchList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    grid-row-gap: 10px;
    grid-column-gap: 8px;
  }

  @media (min-width: 768px) {
    @supports (display: grid) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 1024px) {
    @supports (display: grid) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 1440px) {
    @supports (display: grid) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export const SwatchListItem = styled.li`
  flex: 0 1 25%;
  margin: 0 10px 10px;
  @supports (display: grid) {
    margin: 0;
  }

  @media (min-width: 1024px) {
    flex: 0 1 21%;
  }
  @media (min-width: 1440px) {
    flex: 0 1 15%;
  }
`;