import { Box, Text, Center, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Axios from "axios";

import { LIST_URL, ICONS } from "../utils/constant";

import CircleButton from "../components/CircleButton";

export default function Home() {
  const [playerCount, setPlayerCount] = useState(0);

  const requestTimeout = 1000;

  const setupIconEvents = () => {
    ICONS.map((icon) => {
      icon.events.onClick = (e, url) => {
        switch (icon.id) {
          case "play":
            e.preventDefault();
            const isCopied = copy("mc.chroma-gaming.xyz");
            if (isCopied) alert("Link telah berhasil dicopy");
            break;
          case "donate":
            e.preventDefault();
            setIsDonateShown(true);
            break;
          case "vote-reward":
            e.preventDefault();
            setIsRewardShown(true);
            break;
          default:
            break;
        }
      };
    });
  };

  setupIconEvents();

  useEffect(() => {
    const getPlayers = async () => {
      const {
        data: { players = {} },
      } = await Axios.get(LIST_URL.STATUS);
      const { online = 0 } = players;

      setPlayerCount(online);
    };

    getPlayers();

    const interval = setInterval(() => {
      getPlayers();
    }, requestTimeout);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box
        zIndex="1"
        h="100vh"
        bgImage="url('/img/bg.png')"
        bgSize="cover"
        bgPosition="center"
        position="relative"
      >
        <Flex
          zIndex="2"
          position="absolute"
          h="100vh"
          w="100vw"
          bgColor="gray.800"
          opacity="0.5"
        ></Flex>
        <Flex
          zIndex="3"
          position="absolute"
          h="100vh"
          w="100vw"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          px={{ base: 10, sm: 16 }}
          fontFamily="'Poppins', sans-serif"
        >
          <Text
            fontWeight="semibold"
            color="white"
            fontSize={{
              base: "2xl",
              sm: "3xl",
              md: "4xl",
              lg: "5xl",
              xl: "6xl",
            }}
            align="center"
          >
            Chroma Minecraft
          </Text>
          <Text
            fontWeight="medium"
            color="white"
            fontSize={{
              base: "lg",
              sm: "xl",
              md: "2xl",
              lg: "3xl",
              xl: "4xl",
            }}
            align="center"
          >
            Server minecraft survival yang mendukung berbagai platform (Java /
            Bedrock / Pocket Edition)
          </Text>
          <Text
            fontWeight="light"
            color="white"
            fontSize={{
              base: "md",
              sm: "lg",
              md: "xl",
              lg: "2xl",
              xl: "3xl",
            }}
            align="center"
          >
            Temukan keseruan sensasi berpetualang di dunia minecraft yang penuh
            dengan misteri, harta karun, village, dan lainnya.
          </Text>
          <Center as="Flex" flexDirection="column" mt="5">
            <Text fontWeight="light" color="white" align="center">
              <b>{playerCount} Pemain</b> sedang bermain.
            </Text>
            <Text fontWeight="light" color="white" align="center" mt="2">
              Gunakan tombol dibawah ini untuk memulai
            </Text>
          </Center>
          <Flex
            flexWrap="wrap"
            justifyContent="center"
            mt="12"
            px={{ md: "16" }}
          >
            {ICONS.map((icon, i) => (
              <CircleButton
                key={`circle-btn-${i}`}
                icon={icon}
                onClick={(e) => icon.events.onClick(e, icon.url)}
              />
            ))}
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
