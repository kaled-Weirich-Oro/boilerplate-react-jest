import { ThemeProviderMaterial } from '../src/styles/globalMaterial'

export const decorators = [
    (Story) => (
        <ThemeProviderMaterial>
            <Story />
        </ThemeProviderMaterial>
    )
]
