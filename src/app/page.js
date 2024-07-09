import Image from "next/image";
import gangsign from "@/public/bewicked.jpg";
import telegram from "@/public/Telegram_2019_Logo.svg-removebg-preview.png";
import twitter from "@/public/twitter.webp";
import dex from "@/public/dexx.png";
import gangster from "@/public/gangster-bg.jpg";
import Parallax from "../../components/Parallax";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="mb-[20vh] flex items-center justify-center pt-10">
        <span className="italic text-white font-[600] text-[2em]">No sleep for the wicked</span>
      </div>
      <Parallax />
      <div className="w-full main-content mt-[100vh]">
        <Image src={gangster} alt="" className="imgg" />
        <div className="definition h-[150vh]">
          <div className="intro">
            <div className="name-des">
              <span>`Wicked`</span>
              <span>
                Wicked literally means evil. In slang it means perfect or
                excellent.If you describe someone or something as wicked, you
                mean that they are rather naughty, but in a way that you find
                attractive or enjoyable.
              </span>
            </div>
            <div className="socials">
              <a href="" target="_blank">
                <Image alt="Telegram" src={telegram} />
              </a>
              <a href="" target="_blank">
                <Image alt="Twitter" src={twitter} />
              </a>
              <a href="" target="_blank">
                <Image alt="Dex" src={dex} />
              </a>
            </div>
          </div>
          <div className="ca">
            <span>CA: Coming soon!</span>
          </div>
          <div className="hand-sign">
            <span>Adopt the wicked mind</span>
            <Image src={gangsign} alt="" className="imggg" />
          </div>
        </div>
      </div>
    </div>
  );
}
