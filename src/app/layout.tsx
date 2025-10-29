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
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104891842', 'ym');

            ym(104891842, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
          `
        }} />
      </head>
      <body>
        <Suspense fallback={null}>
          <AnchorHandler />
        </Suspense>
        {children}
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/104891842" style={{position: 'absolute', left: '-9999px'}} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  );
}