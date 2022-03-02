import React from 'react';

import {
  Grommet as GrommetIcon,
  Instagram,
  Twitter,
} from 'grommet-icons';

import { Anchor, Box, Footer, Main, Text } from 'grommet';

const Media = () => (
  <Box direction="row" gap="xxsmall" justify="center">
    <Anchor
      a11yTitle="Share feedback on Github"
      href="https://www.instagram.com/covidtrackingproject/"
      icon={<Instagram color="brand" />}
    />
    <Anchor
      a11yTitle="Follow us on Twitter"
      href="https://twitter.com/COVID19Tracking"
      icon={<Twitter color="brand" />}
    />
  </Box>
);

export const Footers = () => (
  // Uncomment <Grommet> lines when using outside of storybook
  // <Grommet theme={...}>
  <Box>
    <Footer background="none" pad="small">
      <Box align="center" direction="row" gap="xsmall">
        <GrommetIcon color="brand" size="medium" />
        <Text alignSelf="center" color="brand" size="small">
          Covid-Stats by Inside
        </Text>
      </Box>
      <Media />
    </Footer>
  </Box>
  // </Grommet>
);

export default Footers