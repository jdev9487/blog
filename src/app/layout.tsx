import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "Mathemagix",
  description: "A collection of useful (and useless) maths explainers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = (
    <div>
      <div className="flex flex-row-reverse gap-8 my-2 ml-auto mr-8 max-w-4xl">
        <Link className="uppercase text-xs text-text-light" href="/">Contribute</Link>
        <Link className="uppercase text-xs text-text-light" href="/">Home</Link>
      </div>
      <header className="bg-background-secondary pt-8 pb-2">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-main">
            <p className="text-4xl">Mathemagix</p>
          </h1>
        </div>
      </header>
      <header>
        <div className="flex flex-row gap-8 my-2 mx-auto max-w-4xl">
          <Link className="uppercase text-xs text-text-light" href="/posts">
            <Typography>Animations</Typography>
          </Link>
          <Link className="uppercase text-xs text-text-light" href="/in-depth">
            <Typography>In-depth</Typography>
          </Link>
        </div>
      </header>
    </div>
  )
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@300;400;600;700;800&family=Taviraj:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background-primary">
        {header}
        <div className="mx-auto max-w-4xl">
          {children}
        </div>
      </body>
    </html>
  );
}
