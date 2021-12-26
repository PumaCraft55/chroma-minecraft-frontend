import React from 'react';
import {
  Flex,
  Container,
  Box,
  SimpleGrid,
  Image,
  Text,
  Stack,
  Link,
  Button,
  useToast,
} from '@chakra-ui/react';
import { FaDiscord } from 'react-icons/fa';
import copy from 'copy-to-clipboard';

import { ChromaButton, typesList } from '../ChromaButton';

const Footer = () => {
  const toast = useToast();
  return (
    <>
      <Flex color='white' bg='#822440'>
        <Container maxW='container.lg'>
          <Box marginX='auto' paddingY={{ base: '40px', md: '80px' }}>
            <SimpleGrid
              templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr' }}
              spacing={8}
            >
              <Flex
                alignItems='flex-start'
                justifyContent='space-between'
                flexDirection='column'
              >
                <Box>
                  <Flex alignItems='center'>
                    <Image
                      src='/img/logo.svg'
                      width='56px'
                      height='56px'
                      marginLeft='-2'
                      marginRight='2'
                    />
                    <Box>
                      <Text fontSize={['lg']} fontWeight='light'>
                        <strong>Chroma</strong> Minecraft
                      </Text>
                    </Box>
                  </Flex>
                  <Text fontSize='sm' fontWeight='light' marginY='4'>
                    Berbeda perangkat dengan temanmu, bukan masalah! Temukan
                    banyak keseruan dengan plugin original kami, serta
                    event-event menarik untukmu dan temanmu. Bersama misteri,
                    harta karun, dan creeper tentunya.
                  </Text>
                </Box>
                <Button
                  as='a'
                  href='minecraft://mc.chroma-gaming.xyz'
                  colorScheme='white'
                  variant='link'
                  _focus={{ outline: 'none' }}
                  onClick={(e) => {
                    e.preventDefault();
                    copy('mc.chroma-gaming.xyz');
                    toast({
                      duration: 750,
                      position: 'top-right',
                      render: () => {
                        return (
                          <Box
                            bg='#F0375B'
                            color='white'
                            py={3}
                            px={5}
                            rounded='md'
                            width='fit-content'
                            marginLeft='auto'
                          >
                            <Text fontSize='md' fontWeight='medium'>
                              Link berhasil dicopy
                            </Text>
                            <Text fontSize='sm' fontWeight='light'>
                              Periksa clipboardmu
                            </Text>
                          </Box>
                        );
                      },
                    });
                  }}
                >
                  Mainkan Sekarang &#129122;
                </Button>
              </Flex>
              <Stack align={'flex-start'}>
                <Text fontWeight='bold' fontSize={'lg'}>
                  Navigasi
                </Text>
                <Link href={'/#nav-home'} fontSize='sm' fontWeight='light'>
                  Beranda
                </Link>
                <Link href={'/#nav-gamemode'} fontSize='sm' fontWeight='light'>
                  Mode Permainan
                </Link>
                <Link href={'/#nav-donate'} fontSize='sm' fontWeight='light'>
                  Donasi
                </Link>
                <Link href={'/#nav-help'} fontSize='sm' fontWeight='light'>
                  Bantuan
                </Link>
                <Link href={'/#nav-report'} fontSize='sm' fontWeight='light'>
                  Laporan
                </Link>
              </Stack>
              <Flex
                alignItems='flex-start'
                justifyContent='space-between'
                flexDirection='column'
              >
                <Text fontWeight='bold' fontSize={'lg'}>
                  Skuy lah mabar!
                </Text>
                <Text fontSize='sm' fontWeight='light' marginY='4'>
                  Berbeda perangkat dengan temanmu, bukan masalah! Temukan
                  banyak keseruan dengan plugin original kami, serta event-event
                  menarik untukmu dan temanmu. Bersama misteri, harta karun, dan
                  creeper tentunya.
                </Text>
                <ChromaButton
                  types={typesList.secondary}
                  as='a'
                  leftIcon={<FaDiscord />}
                  href='https://discord.chroma-gaming.xyz'
                  target='_blank'
                >
                  Join Discord
                </ChromaButton>
              </Flex>
            </SimpleGrid>
          </Box>
        </Container>
      </Flex>
      {/* Made with love */}
      <Flex color='white' bg='#561226'>
        <Container maxW='container.lg'>
          <Box paddingY='20px'>
            <Text fontSize={['sm', 'sm']} align='center' fontWeight='light'>
              Made with ❤️ by Chroma Developer Team
            </Text>
          </Box>
        </Container>
      </Flex>
    </>
  );
};

export default Footer;
