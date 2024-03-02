import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>🦅&nbsp;</h1>

				<br />
				<h1 className={title()}>
					EAGLE E-SPORTS 
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Yakında... 
				</h2>
			</div>

		</section>
	);
}
