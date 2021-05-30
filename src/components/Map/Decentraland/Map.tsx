import { Atlas, Layer, Coord } from 'decentraland-ui';
import { Box, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import results from './heatmap-data.json';

export default function Map() {
  const [tiles, setTiles] = useState();

  // tile layout with districts and roads
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

  // heat layer
  useEffect(() => {
    try {
      const parcel = ['-117', '128'];
      const historicalData = results[0].series.find(
        (v) => v.tags.x == parcel[0] && v.tags.y == parcel[1],
      );
      if (historicalData) {
        console.log('historicalData:', historicalData.values);
      }
    } catch (error) {
      // console.error(error);
    }
  }, []);

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
        color: '#44ff00',
        scale: 1.5,
      };
    }
    return null;
  };

  const hoverFillLayer: Layer = (x, y) => {
    if (isHighlighted(x, y)) {
      return {
        color: '#99ff90',
        scale: 1.2,
      };
    }
    return null;
  };
  const [layers, setLayers] = useState([hoverStrokeLayer, hoverFillLayer]);

  useEffect(() => {
    setLayers([hoverStrokeLayer, hoverFillLayer, forSaleLayer]);
  }, []);

  return (
    <Box h="80vh">
      {layers ? (
        <Atlas
          tiles={tiles}
          layers={[hoverStrokeLayer, hoverFillLayer, forSaleLayer]}
          onHover={handleHover}
          onClick={handleClick}
        />
      ) : (
        <Spinner />
      )}
    </Box>
  );
}
