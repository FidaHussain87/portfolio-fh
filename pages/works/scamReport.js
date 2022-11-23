import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="Scam report">
    <Container>
      <Title>
        Scam Report <Badge>2022-</Badge>
      </Title>
      <P>
        A Web Application, where a user can check url if it's scam or not. along
        with it, a user can post the scam report of any url he has faced
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github Repository</Meta>
          <Link href="https://github.com/FidaHussain87/ScamReport">
            https://github.com/FidaHussain87/ScamReport{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NestJs, React, Material UI, MongoDb</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/scamReport.jpeg" alt="Scam Report" />
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
