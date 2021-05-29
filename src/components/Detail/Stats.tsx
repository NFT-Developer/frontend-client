import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup
} from '@chakra-ui/react';

export default function Stats({
  plaza_score,
  plaza_distance,
  road_score,
  road_distance,
  district_score,
  district_distance
}) {
  return (
    <StatGroup>
    <Stat>
      <StatLabel>Plaza</StatLabel>
      <StatNumber>{plaza_score}%</StatNumber>
      <StatHelpText>
        <StatArrow type="decrease" />
        {plaza_distance} blocks
      </StatHelpText>
    </Stat>
    <Stat>
      <StatLabel>Road</StatLabel>
      <StatNumber>{road_score}%</StatNumber>
      <StatHelpText>
        <StatArrow type="increase" />
        {road_distance} blocks
      </StatHelpText>
    </Stat>
    <Stat>
      <StatLabel>District</StatLabel>
      <StatNumber>{district_score}%</StatNumber>
      <StatHelpText>
        {district_distance} blocks
      </StatHelpText>
    </Stat>
  </StatGroup>)
 }