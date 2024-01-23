import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CustomBtn = styled(Button)`
  color: yellow;
  background-color: rgba(25, 118, 210, 0.04);
`;

export default function ButtonUsage() {
  return <CustomBtn>Hello world</CustomBtn>;
}
