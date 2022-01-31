import { Box, Text, VStack, ScrollView, Icon, Image, useColorModeValue } from 'native-base';
import { Feather } from '@expo/vector-icons';
import AnimatedColorBox from '../components/animated-color-box';
import Navbar from '../components/navbar';
import Masthead from '../components/masthead';
import LinkButton from '../components/link-button';

const AboutScreen = () => {
  return (
    <AnimatedColorBox flex={1} bg={useColorModeValue('warmGray.50', 'warmGray.900')} w='full'>
      <Masthead title='About this app' image={require('../assets/about-masthead.jpg')}>
        <Navbar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius='20px'
        borderTopRightRadius='20px'
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt='-20px'
        pt='30px'
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems='center'>
            <Image
              source={require('../assets/pandashark.png')}
              borderRadius={100}
              resizeMode='cover'
              w={120}
              h={120}
              alt='author'
            />
            <Text fontSize='md' w='full'>
              This is a React Native tutorial
            </Text>
          </Box>
          <LinkButton
            colorScheme='red'
            size='lg'
            borderRadius='full'
            href='https://wwww.youtube.com'
            leftIcon={<Icon as={Feather} name='youtube' size='sm' opacity={0.5} />}
          >
            Noop
          </LinkButton>
          <LinkButton
            colorScheme={useColorModeValue('blue', 'darkBlue')}
            size='lg'
            borderRadius='full'
            href='https://wwww.twitter.com/pandashark6'
            leftIcon={<Icon as={Feather} name='twitter' size='sm' opacity={0.5} />}
          >
            @pandashark6
          </LinkButton>
          <LinkButton
            colorScheme='purple'
            size='lg'
            borderRadius='full'
            href='https://next-portfolio-livid.vercel.app/'
            leftIcon={<Icon as={Feather} name='external-link' size='sm' opacity={0.5} />}
          >
            Portfolio
          </LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  );
};

export default AboutScreen;
