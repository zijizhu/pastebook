import { extendTheme, ThemeConfig, Theme } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true
};

const fonts: Theme['fonts'] = {
  heading: 'Inter, sans-serif',
  body: 'IBM Plex Sans, sans-serif',
  mono: 'IBM Plex Sans, sans-serif'
};

const semanticTokens = {
  colors: {
    bg: {
      default: '#ffffff',
      _dark: '#0a1929'
    },
    border: {
      default: 'gray.200',
      _dark: 'gray.700'
    }
  }
};

const styles: Theme['styles'] = {
  global: {
    'html, body': {
      backgroundColor: 'bg'
    }
  }
};

export const myTheme = extendTheme({
  config,
  fonts,
  semanticTokens,
  styles
});
