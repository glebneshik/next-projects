
import "./globals.scss"
// import { Montserrat } from "next/font/google";

// const MontserratFont = Montserrat({
//   subsets: ['latin'],
// })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="apple-mobile-web-app-title" content="Квесты в реальности" />
      </head>
      <body>

        {children}

      </body>
    </html>
  );
}
