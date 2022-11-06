import { GlobalStyles } from "@bigcommerce/big-design";
/**
 * import { AppProps } from "next/app";
 * */
import type { AppProps } from 'next/app'

/**
 * const MyApp = ({Component, pageProps}: AppProps) => (
    <>
    <GlobalStyles></GlobalStyles>
    <Component {...pageProps}></Component>
    </>
);

export default MyApp;
*/

const MyApp = ({ Component, pageProps}: AppProps) => (
    <>
        <GlobalStyles />
        <Component {...pageProps} />
    </>
);

export default MyApp;