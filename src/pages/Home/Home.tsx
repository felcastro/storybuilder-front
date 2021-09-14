import styled from "styled-components";
import { Button } from "../../components/Button";
import { LinkButton } from "../../components/LinkButton";
import { Spinner } from "../../components/Spinner";

const Wrapper = styled.div`
  padding: 1rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  Button,
  Button2,
  svg:not(:last-child) {
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
      <Row>
        <Button colorScheme="primary" size="sm">
          Solid
        </Button>
        <Button colorScheme="primary" size="md">
          Solid
        </Button>
        <Button colorScheme="primary" size="lg">
          Solid
        </Button>
      </Row>
      <Row>
        <LinkButton to="/" colorScheme="primary" variant="outline">
          Link
        </LinkButton>
        <LinkButton to="/">Link</LinkButton>
      </Row>
      <Row>
        <Spinner colorScheme="primary" />
        <Spinner />
      </Row>
    </Wrapper>
  );
};
