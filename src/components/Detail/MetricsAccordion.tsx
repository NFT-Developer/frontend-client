import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';
import Stats from './Stats';
import OfferTable from './OfferTable';
import LineChart from '../LineChart';
import Chart from './Chart';

export default function MetricsAccordion({
  closest_district,
  insight,
  plaza_score,
  plaza_distance,
  road_score,
  road_distance,
  district_score,
  district_distance,
  price_history,
  orderHistory,
}) {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h5>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontWeight="bold">
              Proximity Score
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h5>
        <AccordionPanel pb={4} display="flex">
          <Box w="50%">
            <Stats
              plaza_score={plaza_score}
              plaza_distance={plaza_distance}
              road_score={road_score}
              road_distance={road_distance}
              district_score={district_score}
              district_distance={district_distance}
            />
          </Box>
          <Box>
            <Heading fontSize="lg">
              Closest District: {closest_district}
            </Heading>
            <Text mt={4} fontSize="md">
              {insight}
            </Text>
          </Box>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h5>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontWeight="bold">
              Price History
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h5>
        <AccordionPanel pb={4}>
          <OfferTable orderHistory={orderHistory} />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h5>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontWeight="bold">
              Offers (time, price)
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h5>
        <AccordionPanel pb={4}>
          {/* <LineChart /> */}
          <Chart />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
