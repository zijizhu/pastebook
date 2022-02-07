import { extendTheme, ThemeConfig, Theme } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'system'
};

const fonts: Theme['fonts'] = {
  heading: 'Inter, sans-serif',
  body: 'Inter, sans-serif',
  mono: 'Inter, sans-serif'
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
    },
    text: {
      default: '#213547',
      _dark: '#ebeced'
    },
    menuHover: {
      default: 'gray.100',
      _dark: 'gray.700'
    },
    menuActive: {
      default: 'gray.200',
      _dark: 'gray.600'
    }
  }
};

const styles: Theme['styles'] = {
  global: {
    'html, body': {
      backgroundColor: 'bg',
      color: 'text'
    }
  }
};

export const myTheme = extendTheme({
  config,
  fonts,
  semanticTokens,
  styles
});
