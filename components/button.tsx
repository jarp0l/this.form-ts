import { Button as ChakraButton } from '@chakra-ui/react';
import type { NextComponentType } from 'next';

// see how pass children props to the button component
const Button: NextComponentType = (props) => (
  <ChakraButton>
    {/* {children} */}
    Button {/*To be replaced*/}
  </ChakraButton>
);

export default Button;
