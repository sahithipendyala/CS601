import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Services from "@/components/Services";
import Survey from "@/components/Survey";
import Script from 'next/script';

export default function Home() {
  return (
    <div className="container">
      <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
    </div>
    <main>
      <Hero />
      <Featured />
      <Services />
      <Menu />
      <Survey />
    </main>
  );
}
