import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Card,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { SideBar } from "../Components/SideBar";
import axios from "axios";
import dot from "../Images/dot.svg";
const People = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://vast-colt-shoulder-pads.cyclic.app/peopleData`).then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);

  return (
    <Flex>
      <SideBar />
      <Box w="620px" bg="rgb(248,247,243)" p="20px 24px 0">
        {/* Navbar div */}
        <Flex justifyContent="space-evenly" h="43px" color="rgb(136,136,136)">
          <Text>Feed</Text>
          <Text>People</Text>
          <Text>Poll</Text>
          <Text>Videos</Text>
          <Text>New</Text>
          <Text>Following</Text>
          <Text>Popular</Text>
        </Flex>

        {/* Heading for people */}
        <Box display="flex" margin="8.5px 0" justifyContent="space-between">
          <Text fontSize="18px" fontWeight="500">
            People you can follow
          </Text>
          <Image src="https://www.kooapp.com/_next/static/media/arrow_right.f549fb9e.svg" />
        </Box>

        {/* Card to display each user */}
        <Card
          h="986px"
          p="12px 9px"
          border="1px solid #E2E8F0"
          borderRadius="16px"
        >
          <CardBody p="0">
            <Stack divider={<StackDivider />} p="9px 4.5px">
              {data.map((ele, id) => {
                return (
                  <Box display="flex">
                    <Image
                      src={ele.img}
                      w="52px"
                      h="52px"
                      borderRadius="50px"
                    />
                    <Box ml="5px">
                      <Heading
                        size="xs"
                        display="flex"
                        color="#121212"
                        fontSize="16px"
                        fontWeight="500"
                      >
                        {ele.name}{" "}
                        <Image
                          ml="5px"
                          w="15px"
                          h="15px"
                          src="https://images.kooapp.com/VerifiedAccountSheild96x96.png"
                        />
                      </Heading>
                      <Box
                        display="flex"
                        color="#888"
                        fontSize="14px"
                        fontWeight="500"
                        overFlow="hidden"
                      >
                        <Text pt="2" fontSize="sm">
                          @{ele.username}
                        </Text>
                        <Image src={dot} mt="10px" />
                        <Text pt="2" fontSize="sm">
                          {ele.category}
                        </Text>
                      </Box>
                    </Box>
                    <Spacer />
                    <Box w="100px" b="56px" p="9px 9px 0 3.6px">
                      <Button
                        m="0"
                        borderRadius="20px"
                        w="78px"
                        cursor="pointer"
                        fontWeight="500"
                        h="26px"
                        fontSize="13px"
                        bg="#4b4b4b"
                        color="white"
                      >
                        + Follow
                      </Button>
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </CardBody>
        </Card>
      </Box>
    </Flex>
  );
};

export default People;
