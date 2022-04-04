import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { web_autor, web_title } from '../constants';

const WebHeader = () => {
    return (
        <>
            <Head>
                <title>{web_title}</title>
                <meta name="title" content="Space Pet" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="author" content={web_autor} />
            </Head>
        </>
    )
}

export default WebHeader;