import Image from "next/image";
import gangsign from "@/public/bewicked.jpg";
import telegram from "@/public/Telegram_2019_Logo.svg-removebg-preview.png";
import twitter from "@/public/twitter.webp";
import dex from "@/public/dexx.png";
import gangster from "@/public/gangster-bg.jpg";
import Parallax from "../../components/Parallax";
import wicked1 from "@/public/wicked1.jpg"
import wicked2 from "@/public/wicked2.jpg"
import wicked3 from "@/public/wicked3.jpg"
import wicked4 from "@/public/wicked4.jpg"
import wicked5 from "@/public/wicked5.jpg"

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="mb-[20vh] flex items-center justify-center pt-10">
        <span className="italic text-white font-[600] text-[2em]">No sleep for the wicked</span>
      </div>
      <Parallax />
    </div>
  );
}
