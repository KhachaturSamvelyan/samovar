import Head from "next/head";
import NextProgressBar from "nextjs-progressbar";
import React, { FC, ReactNode } from "react";

import { accentColor } from "../../config/constants";

interface LayoutProps {
  children: ReactNode;
}

const HeadProvider: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NextProgressBar
        color={accentColor}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <title>
          Чайная компания Samovartime — производитель и оптовый поставщик
          весового чая в Перми с доставкой по всей России | Samovartime
        </title>
        <meta name="theme-color" content={"#181B1E"} />
        <meta name="msapplication-navbutton-color" content={"#181B1E"} />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content={"#181B1E"}
        />
      </Head>
      {children}
    </>
  );
};

export default HeadProvider;
