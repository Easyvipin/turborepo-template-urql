import HelloWorld from "@components/HelloWorld";
import React from "react";

interface ILandingPageProps {}

const LandingPage: React.FunctionComponent<ILandingPageProps> = (props) => {
  return (
    <div>
      <HelloWorld />
    </div>
  );
};

export default LandingPage;
