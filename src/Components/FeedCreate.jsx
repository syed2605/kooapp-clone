import React,{useEffect} from "react";
import {
  Text,
  Avatar,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Flex,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import acc_Img from "../Images/acct.svg";

function FeedCreate() {
    // let { Image } = useSelector((state) => state.LoggedReducer);
    let  loggedUser  = useSelector((state) => state.loggedReducer.loggedUser);
    let isAuth = useSelector((state) => {
      return state.loginReducer.isAuth;
    });
    let Image=isAuth? loggedUser.picture: "";
    useEffect(()=>{

    })
  return (
    <div style={{ pointer: "cursor" }}>
      <Link to="/create">
        <Stack padding="10px" spacing={4}>
          <InputGroup pointer="cursor" style={{ backgroundColor: "#ffffff" }}>
            <InputLeftElement
              children={
                <div>
                  <Avatar src={Image} size="xs" ml={4} mr={2} />
                </div>
              }
            />
            <Input
              type="text"
              placeholder="What's on your mind?"
              color={"#CCCCCC"}
              fontSize="14px"
              pointer="cursor"
            />
            <InputRightElement
              children={
                <AiFillPlusCircle size={19} style={{ fill: "#474747" }} />
              }
            />
          </InputGroup>
        </Stack>
      </Link>
    </div>
  );
}

export default FeedCreate;
