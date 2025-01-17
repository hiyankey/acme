import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./icons/logo";

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
			<Container className="border-t-[3px] bg-page-main border-x-[3px] border-dashed border-[#fff]/[.1] py-10 px-[2.4rem] flex border-spacing-[2px]">
				<div className="flex items-center">
					<Logo className="inline-flex mr-3" /> Acme
				</div>
				<div className="ml-auto flex">
					{footerLinks.map((column) => (
						<div key={column.title}>
							<h4>{column.title}</h4>
							<ul>
								{column.links.map((link) => (
									<li key={link.name}>
										<Link href={link.href}>{link.name}</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</Container>
		</footer>
	);
}
