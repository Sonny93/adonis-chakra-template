import { Button, Container, Html, Text } from '@react-email/components';

export function MyTemplate({ verifyToken }: { verifyToken: string }) {
  return (
    <Html lang="en">
      <Text>Verify your account now</Text>
      <Container>
        <Button href={`http://localhost:3333/auth/verify/${verifyToken}`}>
          Verify
        </Button>
      </Container>
    </Html>
  );
}

export default MyTemplate;
