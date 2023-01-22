import styled from "styled-components";

const Container = styled.div`
  heigt: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Announcement = () => {
  return (
    <Container>Super Deal Free Shipping on Orders Over KS2000000</Container>
  );
};

export default Announcement;
