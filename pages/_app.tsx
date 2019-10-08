import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: 'rebeccapurple'
  }
}

export default class AppInit extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}