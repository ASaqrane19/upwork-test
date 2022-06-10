import * as React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import ScrollToTop from "react-scroll-to-top";
import { ArrowCircleUpIcon } from '@heroicons/react/outline';

const Header = dynamic(() => import('@/components/layout/header'));

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <ScrollToTop smooth={true} component={<ArrowCircleUpIcon className='text-main'/>} style={{animation: 'bounce 1s infinite', background: 'transparent', boxShadow: 'none'}}/>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
                />
                <title>BLOCKCHAIN</title>
                <meta name="description" content="BLOCKCHAIN" />
                <link rel="icon" href="/favicon.png" type="image/gif" sizes="16x16" />
            </Head>
            <div className='bg-[#162A3A] min-h-screen'>
                <header className='header sticky top-0 z-10 dark:text-slate-200 backdrop-blur-sm'>
                    <Header />
                </header>
                <main className='main'>
                    <div className='section'>
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}