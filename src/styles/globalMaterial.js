import React from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

export function ThemeProviderMaterial({ children }) {
    const theme = createTheme({
        palette: {
            type: 'light',
            background: {
                default: '#fff',
                paper: '#fff'
            }
        }
    })

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
