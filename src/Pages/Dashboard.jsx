import React, { useState, useEffect } from "react";
import { Box, Flex, Input, Button  } from "@chakra-ui/react";
import Card from "../Components/Card";
import styles from "../Styles/dashboard.module.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [cityData, setCityData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      axios
        .get("https://lucky-leotard-cod.cyclic.app/dashboard/cities", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res.data.cities);
          setCityData(res.data.cities);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [navigate, token]);

  const handleSort = () => {
    if (sortOrder === "asc") {
      setCityData([...cityData].sort((a, b) => a.cityName.localeCompare(b.cityName)).reverse());
      setSortOrder("desc");
    } else {
      setCityData([...cityData].sort((a, b) => a.cityName.localeCompare(b.cityName)));
      setSortOrder("asc");
    }
  };

  const filteredCities = cityData.filter(city => 
    city.cityName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {token && (
        <Box>
          <Flex
            direction="row"
            justify="center"
            align="center"
            mt={4}
            mb={4}
          >
            <Input
              variant="filled"
              placeholder="Search by city name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              w="40%"
              mr={2}
            />
            <Button colorScheme="teal" onClick={handleSort}>
              Sort {sortOrder === "asc" ? "A-Z" : "Z-A"}
            </Button>
          </Flex>
          <Box className={styles.cont}>
            {filteredCities.length > 0 ? (
              filteredCities.map((city) => {
                return (
                  <Link to={`/mapview/${city._id}`} key={city}  > 
                    <Card
                      city={city.cityName}
                      state={city.cityState}
                      population={city.population}
                      imageUrl={city.profileImgUrl}
                      latitude={city.latitude}
                      longitude={city.longitude}
                      key={city._id}
                      cityDescription={city.cityDescription}
                    />
                  </Link>
                );
              })
            ) : (
              <Box textAlign="center" fontWeight="semibold">
                No cities found
              </Box>
            )}
          </Box>
        </Box>
      )}
    </>
  );
};

export default Dashboard;
