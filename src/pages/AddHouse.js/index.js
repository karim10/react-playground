import styled from "styled-components";
import { Steps } from "antd";

const { Step } = Steps;

export function AddHouse() {
  return (
    <AddHouseContainer>
      <AddHouseSteps />
    </AddHouseContainer>
  );
}

function AddHouseSteps() {
  return (
    <Steps current={0} style={{ width: 600 }} >
      <Step title="Finished" description="This is a description." />
      <Step
        title="In Progress"
        subTitle="Left 00:00:08"
        description="This is a description."
      />
      <Step title="Waiting" description="This is a description." />
    </Steps>
  );
}

const AddHouseContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
