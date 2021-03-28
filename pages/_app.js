import '../styles/global.css'

/**
 * This App component is the top-level component which will be common across all the different 
 * pages. You can use this App component to keep state when navigating between pages, for example.
 */

export default function App({ Component, pageProps }) {
    /** The Component prop is the active page, so whenever you navigate between routes, 
     *  Component will change to the new page. Therefore, any props you send to Component 
     *  will be received by the page.
     **/
    return <Component {...pageProps} />
}