import styled from "styled-components";
import React from "react";
import { Steps, Radio } from "antd";
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const { Step } = Steps;

export function AddHouse() {
  return (
    <AddHouseContainer>
      <AddHouseSteps />

      <StepContainer>
        <StepOne />
      </StepContainer>
    </AddHouseContainer>
  );
}

function AddHouseSteps() {
  return (
    <>
      <Steps style={{ width: 500 }}>
        <Step status="finish" title="Login" icon={<UserOutlined />} />
        <Step
          status="finish"
          title="Verification"
          icon={<SolutionOutlined />}
        />
        <Step status="process" title="Pay" icon={<LoadingOutlined />} />
        <Step status="wait" title="Done" icon={<SmileOutlined />} />
      </Steps>
    </>
  );
}

const optionsWithDisabled = [
  { label: "House", value: "house" },
  { label: "Appartment", value: "appartment" },
];

/**
 * house type: apartment or house
 * address
 * number of rooms
 * number of bathrooms
 * pictures
 * price
 * how many guests you can welcome
 * beds
 * rooms
 * list of icons where he can choose: Pool, BBQ grill, Wifi, TV, Kitchen, smoking machine, parking, beach
 * description with a place holder example
 */

// function FieldContainer() {
//   return(
//   );
// }

function StepOne() {
  const [value, setValue] = React.useState("house");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Radio.Group
        options={optionsWithDisabled}
        onChange={handleChange}
        value={value}
        optionType="button"
        buttonStyle="solid"
      />
    </>
  );
}

const AddHouseContainer = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

const StepContainer = styled.div`
  width: 600px;
  height: 800px;
  margin-top: 20px;
  border: solid 1px ${(props) => props.theme.primary};
  border-radius: 10px;
  padding: 50px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
