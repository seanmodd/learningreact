import { Button } from '@chakra-ui/button';
import { VStack } from '@chakra-ui/layout';
import React from 'react';

export default () => {
  function clickHandler() {
    console.log('Button clicked');
  }
  return (
    <VStack w="100%" align="center" justify="center" spacing="100px">
      <Button colorScheme="whatsapp" onClick={clickHandler}>
        Click
      </Button>
    </VStack>
  );
};
