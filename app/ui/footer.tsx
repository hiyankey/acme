"use client";
import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./icons/logo";
import { Button } from "./button";
import { InputFocusBlur } from "./input-focus-blur";
import { Toaster, toast } from "sonner";
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
			<Container className="border-t bg-page-main border-x border-dashed border-[#fff]/[.1] py-10 px-[2.4rem] flex md:flex-row flex-col justify-between items-start w-full">
				<div className="flex items-center">
					<Logo className="inline-flex mr-3" /> Acme
				</div>
				<div className="flex justify-between">
					{footerLinks.map((column) => (
						<div key={column.title} className="w-[18rem]">
							<h4 className="mb-3">{column.title}</h4>
							<ul className="[&_a]:text-[#999] [&_a:hover]:text-[#c9c9c9] [&_a]:text-sm [&_li]:mb-3 [&_a]:transition-colors ease-in">
								{column.links.map((link) => (
									<li key={link.name}>
										<Link href={link.href}>{link.name}</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<form className="max-w-[28rem] flex flex-col space-y-4 items-center">
					<h3 className="text-center">
						Join newsletter to hear more about new features and updates.
					</h3>
					<div className="w-full h-fit p-1 bg-white/5 rounded-[8px] flex items-center shadow-[0px_0px_0px_1px_hsla(0,_100%,_100%,0.08)]">
						<InputFocusBlur placeholder="Email" name="email" />
						<Button className="shrink-1" type={"submit"}>
							Join waitlist
						</Button>
						<Toaster />
					</div>
					<p className="text-sm text-[#999]">No spam ever</p>
				</form>
			</Container>
		</footer>
	);
}
