import React, { FC } from "react";
import { Text } from "react-native";

import ScreenContainer from "../components/screen-container";

const ContentScreen: FC = () => {
  return (
    <ScreenContainer>
      <Text>Lorem ipsum dolor sit amet.</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
        provident, aliquam expedita minima praesentium tempore dolor fuga
        corrupti. Modi, praesentium!
      </Text>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
        praesentium accusamus cupiditate, fugit odio eveniet deserunt aspernatur
        fugiat, quae perspiciatis sequi quo fuga beatae! Architecto debitis
        quasi repellat quibusdam molestiae?
      </Text>
    </ScreenContainer>
  );
};

export default ContentScreen;
