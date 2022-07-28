import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <title>Catdrout - professional web developer</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Catdrout - professional web developer" />
            <meta name="description"
                content="a very shiny personal website" />
            <meta name="author" content="Catdrout" />
            <meta name="keywords"
                content="linux, catdrout, python, web development" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            /* Schema.org for Google */
            <meta itemProp="name" content="Catdrout - professional web developer" />
            <meta itemProp="description"
                content="a very shiny personal website" />
            <meta itemProp="image" content="/images/favicon/favicon.ico" />
            /* Twitter */
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Catdrout - professional web developer" />
            <meta name="twitter:description"
                content="a very shiny personal website" />
            <meta name="twitter:site" content="catdrout" />
            <meta name="twitter:creator" content="catdrout" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="Catdrout - professional web developer" />
            <meta name="og:description"
                content="a very shiny personal website" />
            <meta name="og:url" content="https://catdrout.xyz/" />
            <meta name="og:site_name" content="Catdrout.xyz" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="/images/favicon/favicon.ico" />
            <link rel="apple-touch-icon" href="/images/logos/logo.jpg" />
        </Head>
    )
}
