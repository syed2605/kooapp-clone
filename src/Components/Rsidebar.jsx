import { SearchIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import React, { useState, useEffect } from "react";
import UserComponent from "./SearchCard";
import axios from "axios";

import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import RsidebarCard from "./RsidebarCard";

const Rsidebar = () => {
  const initialFocusRef = React.useRef();
  let [searchQuery, setSearchQuery] = useState("");
  let [dataJSON, setData] = useState([]);
  let [queryData, setqueryData] = useState([]);

  useEffect(() => {
    const json_URL = `https://vast-colt-shoulder-pads.cyclic.app/peopleData`;

    const getInitialState = async () => {
      let res = await axios.get(json_URL);
      res = res.data;
      setData(res);
    };

    getInitialState();
  }, []);

  const hashData = [
    { hastag: "#amritpalsingh" },
    { hastag: "#manishkashyap" },
    { hastag: "#g20india" },
    { hastag: "#indvsaus" },
  ];

  const filterSearch = () => {
    let filtered = dataJSON.filter((val) => {
      if (searchQuery == "") {
        return val;
      } else if (val.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return val;
      }
    });

    setqueryData(filtered);
  };

  return (
    <Flex
      direction={"column"}
      m="auto"
      h="700px"
      position="sticky"
      top="0"
      pt="3%"
    >
      <Box>
        <Stack spacing={4} p="10px">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.500" />}
            />
            <Popover
              isLazy
              initialFocusRef={initialFocusRef}
              placement="left"
              closeOnBlur={false}
              trigger="hover"
            >
              <PopoverTrigger>
                <Input
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    filterSearch();
                  }}
                  value={searchQuery}
                  type="text"
                  placeholder="Search"
                  borderRadius={"20px"}
                  bg="#e6e6e3"
                  pl="50px"
                />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader pt={4} fontWeight="bold" border="0">
                  People to Follow
                </PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  {queryData.map((ele, idx) => {
                    return <UserComponent ele={ele} />;
                  })}
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </InputGroup>
        </Stack>
      </Box>
      <Box>
        <Flex justifyContent={"space-between"} padding="0 20px">
          <Heading size={"30px"} fontWeight={"500"}>
            {" "}
            Trending Hashtags
          </Heading>
          <ArrowForwardIcon boxSize={5} />
        </Flex>
      </Box>
      <Flex
        direction={"column"}
        gap="20px"
        mt={"30px"}
        className="allCardContainer"
      >
        {hashData.map((ele) => {
          return <RsidebarCard ele={ele} />;
        })}
      </Flex>
      <Box mt="1rem">
        <Flex
          justifyContent={"space-around"}
          fontSize="12px"
          m="auto"
          pt="1rem"
        >
          <Link href="http://www.google.com" color={"rgb(136,136,136)"}>
            About
          </Link>
          <Link to="http://www.google.com" color={"rgb(136,136,136)"}>
            Press
          </Link>
          <Link to="http://www.google.com" color={"rgb(136,136,136)"}>
            Contact
          </Link>
          <Link to="http://www.google.com" color={"rgb(136,136,136)"}>
            Resource Center
          </Link>
          <Link to="http://www.google.com" color={"rgb(136,136,136)"}>
            FAQs
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Rsidebar;
