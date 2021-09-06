import styled from "styled-components";
import { Button } from "../../components/Button";

const Wrapper = styled.div`
  padding: 1rem;
`;

const Row = styled.div`
  margin-bottom: 1rem;

  *:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export const Home = () => {
  return (
    <Wrapper>
      <Row>
        <Button colorScheme="primary" isLoading>
          Test
        </Button>
        <Button colorScheme="primary" isDisabled>
          Disabled
        </Button>
        <Button colorScheme="primary" isLoading isDisabled>
          Disabled and Loading
        </Button>
      </Row>
      <Row>
        <Button colorScheme="primary" variant="outline" isLoading>
          Test
        </Button>
        <Button colorScheme="primary" variant="outline" isDisabled>
          Disabled
        </Button>
        <Button colorScheme="primary" variant="outline" isLoading isDisabled>
          Disabled and Loading
        </Button>
      </Row>
      <Row>
        <Button colorScheme="primary" variant="ghost" isLoading>
          Test
        </Button>
        <Button colorScheme="primary" variant="ghost" isDisabled>
          Disabled
        </Button>
        <Button colorScheme="primary" variant="ghost" isLoading isDisabled>
          Disabled and Loading
        </Button>
      </Row>
      <Row>
        <Button colorScheme="primary" variant="link" isLoading>
          Test
        </Button>
        <Button colorScheme="primary" variant="link" isDisabled>
          Disabled
        </Button>
        <Button colorScheme="primary" variant="link" isLoading isDisabled>
          Disabled and Loading
        </Button>
      </Row>
      <Row>
        <Button colorScheme="primary">Solid</Button>
        <Button colorScheme="primary" variant="outline">
          Outline
        </Button>
        <Button colorScheme="primary" variant="ghost">
          Ghost
        </Button>
        <Button colorScheme="primary" variant="link">
          Link
        </Button>
      </Row>
      <Row>
        <Button>Solid</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </Row>
    </Wrapper>
  );
};
