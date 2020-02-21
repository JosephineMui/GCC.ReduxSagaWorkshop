import React, { Component } from 'react';
import styled from 'styled-components';
import ColorSwatch from './ColorSwatch';

class ColorSwatchList extends Component {

  render() {
    const choiceIds = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
      <CompositeFacetedColorListContainer
        id="CompositeSwatchesList"
        swatchRowHeigh={'300px'}
        ref={CompositeSwatchesList =>
          (this.CompositeSwatchesList = CompositeSwatchesList)
        }
      >
        <CompositeSwatchesList>
          {choiceIds.map(id => (
            <CompositeSwatchesListItem key={id}>
              <ColorSwatch />
            </CompositeSwatchesListItem>
          ))}
        </CompositeSwatchesList>
      </CompositeFacetedColorListContainer>
    );
  }
}

const CompositeFacetedColorListContainer = styled.div`
  position: relative;

  &.hide-all-swatches {
    overflow: hidden;
    height: ${props => props.swatchRowHeigh};

    @media (min-width: 768px) {
      height: ${props => props.swatchRowHeigh};
    }
  }
`;

const CompositeSwatchesList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    grid-row-gap: 20px;
    grid-column-gap: 11px;
  }

  @media (min-width: 768px) {
    @supports (display: grid) {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  @media (min-width: 1024px) {
    @supports (display: grid) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 1440px) {
    @supports (display: grid) {
      grid-template-columns: repeat(6, 1fr);
    }
  }
`;

const CompositeSwatchesListItem = styled.li`
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

export default ColorSwatchList;
