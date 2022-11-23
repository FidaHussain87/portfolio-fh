import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoFacebook } from "react-icons/io5";
import thumbYouTube from "../public/images/links/youtube.jpg";
import thumbInkdrop from "../public/images/works/webapp.png";
import Image from "next/image";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
      >
        Hello, I&apos;m Full Stack web developer based in Germany!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Fida Hussain
          </Heading>
          <p>Software Engineer ( AI Specialist / Developer / Freelancer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/fida.JPG"
              alt="Profile image"
              borderRadius="full"
              width={100}
              height={100}
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Fida is a freelancer and a full-stack developer based in Germany with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          outing with friends. Currently, he is living off of his own product
          called{" "}
          <NextLink href="/works/inkdrop" passHref scroll={false}>
            <Link>Meetup</Link>
          </NextLink>
          . He publishes content for marketing his products and his YouTube
          channel called &quot;
          <NextLink
            href="https://www.youtube.com/channel/UClTrK8H29gNkEMirRoGxYLg"
            passHref
          >
            <Link target="_blank">Fida Hussain</Link>
          </NextLink>
          &quot; has more than 1k subscribers.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Ranipur , Pakistan.
        </BioSection>
        <BioSection>
          <BioYear>January 05, 2021</BioYear>
          Completed the Bachelor&apos;s Program in the Software Engineering
          at merhan UET, Jamshoro, Pakistan
        </BioSection>
        <BioSection>
          <BioYear>Aug 23, 2021 - July 30, 2022</BioYear>
          Worked at Systems Limited! Pakistan (Associate Consultant)
        </BioSection>
        <BioSection>
          <BioYear>November 28, 2020 to present</BioYear>
          Working as a freelancer <span style={{color:"#00b22d"}}>(Fiverr.com)</span>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I <spa style={{color:"red"}}n>♥</spa>
        </Heading>
        <Paragraph>
          GYM, Music,{" "}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Dancing
          </Link>
          , Playing Games,{" "}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , coding Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/FidaHussain87" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @FidaHussain87
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/FidaHussainSW31" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @FidaHussainSW31
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook.com/FHS110114786" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoFacebook />}
              >
                @HS110114786
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/fidahussain_rk/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @fidahussain_rk
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/channel/UClTrK8H29gNkEMirRoGxYLg"
            title="Fida Hussain"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;1k subs)
          </GridItem>
          <GridItem
            href="https://next-js-meetup-app-beryl.vercel.app/"
            title="Meetup"
            thumbnail={thumbInkdrop}
          >
            A Meetup app
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
);

export default Home;
export { getServerSideProps } from "../components/chakra";
