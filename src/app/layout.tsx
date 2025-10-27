import { Suspense } from 'react'
import { AnchorHandler } from "@/components/AnchorHandler";
import "./globals.scss"

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
        <Suspense fallback={null}>
          <AnchorHandler />
        </Suspense>
        {children}

      </body>
    </html>
  );
}
