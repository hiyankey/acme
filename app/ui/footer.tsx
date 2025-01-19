"use client";
import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./icons/logo";
import { Button } from "./button";
import { InputFocusBlur } from "./input-focus-blur";
import { handleJoinWaitlist } from "../lib/actions";

const footerLinks = [
	{
		title: "Sitemap",
		links: [
			{ name: "Product", href: "#" },
			{ name: "Solutions", href: "#" },
			{ name: "Changelog", href: "#" },
			{ name: "Docs", href: "#" },
		],
	},
	{
		title: "Legal",
		links: [
			{ name: "Terms", href: "#" },
			{ name: "Privacy", href: "#" },
		],
	},
];

export function Footer() {
	return (
		<footer>
			<Container className="border-t bg-page-main border-x border-dashed border-[#fff]/[.1] py-10 px-[2.4rem]  w-full grid grid-rows-[1fr_auto_1fr] md:grid-cols-[1fr_auto_1fr]">
				<div className="flex items-center w-full h-full">
					<Logo className="inline-flex mr-3" /> Acme
				</div>

				<div className="flex flex-wrap w-full">
					{footerLinks.map((column) => (
						<div
							key={column.title}
							className="min-w-[50%] mt-10  md:mt-0 lg:min-w-[18rem]"
						>
							<h4 className="mb-3 text-sm">{column.title}</h4>
							<ul className="[&_a]:text-[#999] [&_a:hover]:text-[#c9c9c9] [&_a]:text-sm [&_li]:mb-3 [&_a]:transition-colors ease-in">
								{column.links.map((link) => (
									<li key={link.name} className="[&_a]:last:mb-0">
										<Link href={link.href}>{link.name}</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<form
					className="max-w-[32rem]  mt-10  md:mt-0   flex flex-col space-y-4 items-center"
					action={handleJoinWaitlist}
				>
					<h3 className="text-center text-sm">
						Join newsletter to hear more about new features and updates.
					</h3>
					<div className="w-full h-fit p-1 bg-white/5 rounded-[8px] flex items-center shadow-[0px_0px_0px_1px_hsla(0,_100%,_100%,0.08)]">
						<InputFocusBlur placeholder="Email" name="email" />
						<Button className="shrink-1" type={"submit"}>
							Join waitlist
						</Button>
					</div>
					<p className="text-xs text-[#999]">No spam ever</p>
				</form>
			</Container>
		</footer>
	);
}
