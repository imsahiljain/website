import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";
import Head from "next/head";

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: "dark",
  },
});

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/pfp.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          http-equiv="Content-Security-Policy"
          content="default-src 'self' vitals.vercel-insights.com"
        />
        <meta name="author" content="Sahil Jain" />
        <meta
          name="description"
          content="Hi, I'm Sahil, a developer, basketball player and an artist. I'm a 17 y/o high school senior at Montfort School in Delhi."
        />
        <meta name="keywords" content="Sahil, Sahil Jain, imsahil.co" />
        <link rel="apple-touch-icon" href="/pfp.jpg" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default App;
