import { Heading, Wrap } from "@chakra-ui/react";
import React from "react";
import Acheivemnts from "./Acheivemnts";

function Stats() {
  return (
    <>
      <Heading textAlign={"center"}>
        <span className="purpleText">S</span>TATISTICS
      </Heading>
      <Wrap
        margin={"50px auto"}
        spacing="30px"
        justify="center"
        width={{ base: "95%", sm: "90%", lg: "90%", xl: "90%" }}
      >
        <Acheivemnts />
      </Wrap>
    </>
  );
}

export default Stats;
