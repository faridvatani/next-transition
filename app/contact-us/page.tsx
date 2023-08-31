import { FC } from "react";
import { Container } from "../../components/container";
import { Wrapper } from "../../components/wrapper";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <Wrapper>
      <Container>
        <h2>Contact Us Page</h2>
      </Container>
    </Wrapper>
  );
};

export default page;
