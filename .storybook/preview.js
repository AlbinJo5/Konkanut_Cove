import '../src/styles/globals.css';
import "tailwindcss/tailwind.css";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  layout: "fullscreen",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}