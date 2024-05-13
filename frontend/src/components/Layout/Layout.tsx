import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
  title: string;
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale-1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Header />
      <main className="p-0 overflow-y-auto mx-8">{children}</main>
    </>
  );
}
