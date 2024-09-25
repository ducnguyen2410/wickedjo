import Image from "next/image";
import gangsign from "@/public/banner.jpg";
import telegram from "@/public/Telegram_2019_Logo.svg-removebg-preview.png"
import twitter from "@/public/twitter.webp";
import dex from "@/public/dexx.png";
import gangster from "@/public/gangster-bg.jpg";
import Parallax from "../../components/Parallax";

export default function Home() {
  return (
    <div className="flex flex-col gap-[100vh]">
      <Parallax />
      <div className="w-full main-content">
        <Image src={gangster} alt="" className="imgg" />
        <div className="definition h-[150vh]">
          <div className="intro">
            <div className="name-des">
              <span>`Pull Up`</span>
              <span>Pull up and cope hard
              </span>
            </div>
            <div className="socials">
              <a href="https://t.me/pullupmf" target="_blank">
                <Image alt="Telegram" src={telegram}/>
              </a>
              <a href="https://x.com/pullupmf" target="_blank">
                <Image alt="Twitter" src={twitter}/>
              </a>
              <a href="https://t.me/pullupmf" target="_blank">
                <Image alt="Dex" src={dex}/>
              </a>
            </div>
          </div>
          <div className="ca">
            <span>CA: Coming soon!</span>
          </div>
          <div className="hand-sign">
            <span>JOIN THE GANG</span>
            <Image src={gangsign} alt="" className="imggg"/>
          </div>
        </div>
      </div>
    </div>
  );
}
