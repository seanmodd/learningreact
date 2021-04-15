import { Button } from '@chakra-ui/button';
import { Heading, Text, VStack } from '@chakra-ui/layout';
import React, { Component } from 'react';

export class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { clickedTimes: 0 };
  }

  handleClick() {
    this.setState({ clickedTimes: this.state.clickedTimes + 1 });
  }

  render() {
    if (this.state.clickedTimes === 10) {
      return (
        <VStack w="100vw" h="100%" justify="center" align="center">
          <Heading textAlign="center">
            You clicked this 10 times, no more clicking for you.
          </Heading>
        </VStack>
      );
    }

    return (
      <VStack w="100vw" h="100%" justify="center" align="center">
        <Button onClick={() => this.handleClick()}>
          Clicked {this.state.clickedTimes} times
        </Button>
        <Text>Clicked {this.state.clickedTimes} times</Text>
      </VStack>
      /* e('div', {className: 'wrapper'},
                e('button', { onClick: () => this.setState({ clickedTimes: this.state.clickedTimes + 1  }) }, 'Clicked ' + this.state.clickedTimes + ' times'),
                e('p', {}, 'Clicked ' + this.state.clickedTimes + ' times')
        ) */
    );
  }
}

export default MyComponent;
