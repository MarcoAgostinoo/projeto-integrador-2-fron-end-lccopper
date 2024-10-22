import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Script from 'next/script';
import Head from 'next/head'; // Importando Head

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta
          name="keywords"
          content="metalurgia, reposição de solda, usinagem, indústria automotiva, LC Copper Metalúrgica, materiais ferrosos, materiais não ferrosos, soldagem a ponto, projeto de solda, Ferraz de Vasconcelos, São Paulo"
        />
        <meta
          name="description"
          content="A LC Copper Metalúrgica Eireli é referência em reposição de solda e usinagem de materiais ferrosos e não ferrosos, atendendo principalmente a indústria automotiva. Com quase 25 anos de experiência, garantimos qualidade e precisão em nossos serviços."
        />
        <title>LC Copper Metalúrgica Eireli - Soluções em Metalurgia</title>
        <link rel="canonical" href="http://www.lccopper.com/" />
        <meta name="robots" content="index, follow" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        />
      </Head>

      <Component {...pageProps} />

      {/* Carregamento dos scripts do Bootstrap (sem a necessidade de jQuery ou Popper separadamente) */}
      <Script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
        strategy="afterInteractive"
      />
    </ChakraProvider>
  );
}

export default MyApp;
