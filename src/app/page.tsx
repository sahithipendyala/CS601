import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Services from "@/components/Services";
import Survey from "@/components/Survey";
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RLYCHQ2HBG"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-RLYCHQ2HBG');
        `}
      </Script>

      <main>
      <Hero />
      <Featured />
      <Services />
      <Menu />
      <Survey />       
    </main>
    </>
  );
}
