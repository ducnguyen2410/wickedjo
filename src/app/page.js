import Image from "next/image";
import gangsign from "@/public/bewicked.jpg";
import telegram from "@/public/Telegram_2019_Logo.svg-removebg-preview.png";
import twitter from "@/public/twitter.webp";
import dex from "@/public/dexx.png";
import gangster from "@/public/gangster-bg.jpg";
import Parallax from "../../components/Parallax";
import wicked1 from "@/public/wicked1.jpg";
import banner from "@/public/banner.jpg";
import wicked2 from "@/public/wicked2.jpg";
import wicked3 from "@/public/wicked3.jpg";
import wicked4 from "@/public/wicked4.jpg";
import wicked5 from "@/public/wicked5.jpg";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="navbar sticky top-[0] z-[11111]">
        <div className="socials start">
          <a href="https://t.me/trustehprocess">Home</a>
          <a href="https://t.me/trustehprocess">Dex</a>
        </div>
        <span className="ticker">trust the process.</span>
        <div className="socials end">
          <a href="https://x.com/trustehprocess">X</a>
          <a href="https://t.me/trustehprocess">Tg</a>
        </div>
      </div>
      <Parallax />
      <div className="intro">
        <div className="quote">
          <span>Everything needs consistency,</span>
          <span>Even the universe.</span>
        </div>
        <video width="320" height="240" controls>
          <source src="/B5JUhzCoTEHoPYpo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="ca">
          <span>CA: Coming soon!</span>
        </div>
        <span className="join">
          Join the <span className="special">$TRUST</span> community
        </span>
        <div className="ifr">
          <iframe
            src="https://cameraofdavid.netlify.app"
            width={"90vw"}
            allowFullScreen
          ></iframe>
          <Image src={banner} className="banner"/>
        </div>
      </div>
    </div>
  );
}
