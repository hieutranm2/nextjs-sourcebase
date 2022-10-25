/** @type {import('@storybook/addons').Config} */
/** @type {import('@storybook/theming').ThemeVars} */
import { addons } from '@storybook/addons'
import { create as createTheme } from '@storybook/theming'

const theme = createTheme({
  base: 'light',
  brandTitle: 'FIKA',
})

addons.setConfig({
  theme,
})
