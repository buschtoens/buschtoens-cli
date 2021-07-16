import { Box, Text, Spacer, Newline } from 'ink';
import Divider from 'ink-divider';
import Gradient from 'ink-gradient';
import Link from 'ink-link';
import useStdoutDimensions from 'ink-use-stdout-dimensions';
import React, { FC } from 'react';

import { readString } from './assets/index.js';
import { Links } from './ui/links.js';

const astronaut = readString('astronaut');

export const App: FC<{}> = () => {
  const [columns, rows] = useStdoutDimensions();

  return (
    <Box
      width={columns - 4}
      height={rows - 2}
      paddingX={2}
      paddingY={1}
      justifyContent="center"
    >
      <Box flexShrink={1} flexGrow={0} flexBasis={100} minWidth={80}>
        <Box
          marginRight={2}
          flexShrink={0}
          flexGrow={0}
          display={columns < 84 ? 'none' : 'flex'}
        >
          <Gradient name="rainbow">
            <Text>{astronaut}</Text>
          </Gradient>
        </Box>

        <Spacer />

        <Box
          flexDirection="column"
          alignItems="stretch"
          flexGrow={0}
          flexShrink={0}
        >
          <Box flexDirection="column">
            <Box
              paddingX={2}
              paddingY={1}
              borderStyle="round"
              borderColor="magenta"
            >
              <Text>
                {/*
                `&#8203;` (zero-width space) fixes the incorrect Emoji sizing.
                https://github.com/vadimdemedes/ink/pull/444
              */}
                👋 Hey there!&#8203;
                <Newline count={2} />
                {'   '}My name is{' '}
                <Text bold>
                  <Gradient name="instagram">Jan Buschtöns</Gradient>
                </Text>{' '}
                <Link url="https://twitter.com/buschtoens" fallback={false}>
                  <Text bold dimColor>
                    (@buschtoens)
                  </Text>
                </Link>
                .
                <Newline count={2} />
                📍 I live in: &#8203;
                <Link
                  url="https://goo.gl/maps/kHawmTqhVR5HhMs26"
                  fallback={false}
                >
                  Frankfurt am Main, Germany
                </Link>
              </Text>
            </Box>
          </Box>

          <Spacer />

          <Box flexDirection="column">
            <Divider title="Find me online" />
            <Links />
          </Box>
        </Box>

        <Spacer />
      </Box>
    </Box>
  );
};
