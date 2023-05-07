import React, { useEffect, useState } from "react";
import axios from "axios";
import Map from "../Components/Map";
import {
  Box, 
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td 
} from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";

const MapView = () => {
  const [cityData, setCityData] = useState(null);
  const token = localStorage.getItem("token");
  const { cityId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/signin");
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://lucky-leotard-cod.cyclic.app/map/view-map",
          { cityId },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data.city);
        setCityData(response.data.city);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [cityId, token, navigate]);

  if (!cityData) {
    return <Box>Loading...</Box>;
  }

  const { cityName, cityState, population, cityDescription, latitude, longitude } = cityData;

  return (
    <Box>
      <Heading mt="4">{cityName}</Heading> 
      <Box mt="4">{cityDescription}</Box> 
      <Box mt="4">
        <Table variant="simple" style={{ width: "80%", margin: "0 auto"  }}>
          <Thead>
            <Tr>
              <Th>City Name</Th>
              <Th>State</Th>
              <Th>Population</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{cityName}</Td>
              <Td>{cityState}</Td>
              <Td>{population}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
      <Box mt="4">
        <Map latitude={latitude} longitude={longitude} />
      </Box>
    </Box>
  );
};

export default MapView;
