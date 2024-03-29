import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}><img className="w-[100%] h-[100%]" src="/img/egl.png" alt="EAGLE E-SPORTS" ></img>&nbsp;</h1>
			
        <br />
        <h1 className={title()}>EAGLE E-SPORTS</h1>
        <h2 className={subtitle({ class: "mt-4" })}>Yakında...</h2>
      </div>
      <div className=" text-center justify-center rounded-2xl ">
        <iframe
		className=" text-center justify-center rounded-2xl  xs:w-[500px] xs:h-[300px]  md:w-[600px] md:h-[500px] lg:w-[1200px] lg:h-[900px]"
          src="https://www.youtube.com/embed/0m6-DYjVGPk"
          title="EAGLE E-SPORTS TAKIMIMIZ / QUSAY / PUBG MOBILE"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </section>
  );
}
