import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup
} from '@chakra-ui/react';

export default function Stats() {
  return (
    <StatGroup>
    <Stat>
      <StatLabel>Plaza</StatLabel>
      <StatNumber>46%</StatNumber>
      <StatHelpText>
        <StatArrow type="decrease" />
        18 blocks
      </StatHelpText>
    </Stat>
    <Stat>
      <StatLabel>Road</StatLabel>
      <StatNumber>82%</StatNumber>
      <StatHelpText>
        <StatArrow type="increase" />
        3 blocks
      </StatHelpText>
    </Stat>
    <Stat>
      <StatLabel>District</StatLabel>
      <StatNumber>51%</StatNumber>
      <StatHelpText>
        6 blocks
      </StatHelpText>
    </Stat>
  </StatGroup>)
 }