import { Container } from "./ui/container";
import { Caption, Headline, Hero } from "./ui/hero";
import { Button } from "./ui/button";
import { ArrowRight } from "./ui/icons/arrow-right";
import { Header } from "./ui/header";
import { Footer } from "./ui/footer";
import appJson from "../package.json";
import { SocialProof } from "./ui/social-proof";
import { Whop } from "./ui/icons/whop";
import { Raycast } from "./ui/icons/raycast";
import { Linear } from "./ui/icons/linear";
import { Vercel } from "./ui/icons/vercel";

export default function Home() {
	return (
		<div className="grid grid-rows-[auto_1fr_auto]  w-full ">
			<Header />
			<main>
				<Container className="bg-page-main pt-[calc(var(--header-height)+24px)] border-x border-dashed border-[#fff]/[.1]">
					<Hero>
						<div className="flex flex-col items-center max-w-[80rem] mx-auto">
							<Button
								href="#"
								variant={"secondary"}
								size={"sm"}
								className="group translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] mb-3"
							>
								Acme v{Number.parseInt(appJson.version) + 1} soon
								<ArrowRight className="ml-3 h-3 group-hover:translate-x-1 w-3 transition-transform ease" />
							</Button>
							<Headline className="mb-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
								Headline wraps a minimum of 2 lines
							</Headline>
							<Caption className="mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
								sed do eiusmod tempor incididunt ut labore et dolore magna
								aliqua.
							</Caption>
							<Button
								href={"#"}
								size={"lg"}
								className="animate-fade-in  opacity-0 [--animation-delay:600ms]"
							>
								Get started
							</Button>
						</div>
					</Hero>
					<SocialProof className="w-full text-[#999] px-6 py-3 overflow-clip mask-gradient-to-r">
						<div className="animate-moveLeft w-[max-content] flex gap-[6.4rem] pl-[6.4rem]">
							<Whop />
							<Raycast />
							<Linear />
							<Vercel />
							<span className="text-xl font-semibold">You?</span>
							<Whop />
							<Raycast />
							<Linear />
							<Vercel />
							<span className="text-xl font-semibold">You?</span>
						</div>
					</SocialProof>
				</Container>
			</main>
			<Footer />
		</div>
	);
}
