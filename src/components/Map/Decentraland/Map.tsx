import { Atlas, Layer, Coord } from 'decentraland-ui';
import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Map() {
  const [tiles, setTiles] = useState();
  // if (window) Atlas.fetchTiles().then((_tiles) => (tiles = _tiles));

  useEffect(() => {
    (async () => {
      if (window) {
        const resp = await window.fetch(
          'https://api.decentraland.org/v1/tiles',
        );
        const data = await resp.json();
        console.log('data:', data);

        setTiles(data.data);
      }
    })();
  }, []);

  const forSaleLayer: Layer = (x, y) => {
    const key = x + ',' + y;
    //@ts-ignore
    if (tiles && tiles[key] && 'price' in tiles[key]) {
      return { color: '#00d3ff' };
    }
    return null;
  };

  let selected: Coord[] = [];

  function isSelected(x: number, y: number) {
    return selected.some((coord) => coord.x === x && coord.y === y);
  }

  const handleClick = (x: number, y: number) => {
    console.log(x, y);
    if (isSelected(x, y)) {
      selected = selected.filter((coord) => coord.x !== x || coord.y !== y);
    } else {
      selected.push({ x, y });
    }
  };

  let hover;

  // const isValid = () => {
  //   if (!hover) return false;
  //   // only valid if it fits in central plaza
  //   return hover.x >= -5 && hover.x <= 6 && hover.y >= -5 && hover.y <= 5;
  // };

  const isHighlighted = (x: number, y: number) => {
    if (!hover) return false;
    // only highlight a 10x10 area centered around hover coords
    const radius = 1;
    return (
      x > hover.x - radius &&
      x < hover.x + radius &&
      y > hover.y - radius &&
      y < hover.y + radius
    );
  };

  const handleHover = (x: number, y: number) => {
    hover = { x, y };
  };

  const hoverStrokeLayer: Layer = (x, y) => {
    if (isHighlighted(x, y)) {
      return {
        // color: isValid() ? '#44ff00' : '#ff0044',
        color: '#44ff00',
        scale: 1.5,
      };
    }
    return null;
  };

  const hoverFillLayer: Layer = (x, y) => {
    if (isHighlighted(x, y)) {
      return {
        // color: isValid() ? '#99ff90' : '#ff9990',
        color: '#99ff90',
        scale: 1.2,
      };
    }
    return null;
  };
  return (
    <Box h="80vh">
      <Atlas
        tiles={tiles}
        layers={[forSaleLayer, hoverStrokeLayer, hoverFillLayer]}
        onHover={handleHover}
        onClick={handleClick}
      />
    </Box>
  );
}
