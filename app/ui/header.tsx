"use client";
import { useRef, useState } from "react";
import { Container } from "./container";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Logo } from "./icons/logo";
import Link from "next/link";
import { Button } from "./button";
import { MenuIcon } from "./icons/menu";
import { CrossIcon } from "./icons/cross";

export function Header() {
	const [isHidden, setIsHidden] = useState(false);
	const { scrollY } = useScroll();
	const lastYRef = useRef(0);
	useMotionValueEvent(scrollY, "change", (y) => {
		const diff = y - lastYRef.current;
		if (Math.abs(diff) > 50) {
			setIsHidden(diff > 0);
			lastYRef.current = y;
		}
	});

	const [isOpen, setIsOpen] = useState(false);
	return (
		<motion.header
			className="pt-6 fixed top-0 w-full"
			animate={isHidden ? "hidden" : "visible"}
			onFocusCapture={() => setIsHidden(false)}
			whileHover={"visible"}
			variants={{
				hidden: {
					y: "-90%",
				},
				visible: {
					y: "0%",
				},
			}}
			transition={{ duration: 0.2 }}
		>
			<Container
				className={`md:bg-transparent items-start py-[1.1rem] backdrop-blur-[12px] md:items-center rounded-[1.6rem] border-[#fff]/[.08] border flex px-5 md:h-header-height relative transition-all delay-300 ${isOpen ? "h-[calc(100vh-var(--header-height))] bg-black" : "h-header-height items-start bg-transparent"}`}
			>
				<Link href={"/"} className="flex items-center">
					<Logo className="mr-3" /> Acme
				</Link>
				<div className="ml-auto flex items-center space-x-5">
					<nav
						className={`md:visible md:flex transition-[visibility] delay-300 ${isOpen ? "visible " : "invisible"}`}
					>
						<ul
							className={`flex flex-col left-0 top-[--header-height] px-6 md:px-0 w-full md:auto md:top-0 fixed md:relative md:opacity-100 md:flex-row md:[&_li]:ml-3 md:[&_a]:text-sm [&_a]:text-[#999] [&_a:hover]:text-[#c9c9c9] transition-opacity duration-500 [&_li]:h-header-height [&_li]:flex [&_li]:items-center  md:[&_li]:h-auto [&_a]:text-lg [&_a]:transition-colors ease-in ${isOpen ? "opacity-100" : "opacity-0"}`}
						>
							<li>
								<Link href={"#"}>Product</Link>
							</li>
							<li>
								<Link href={"#"}>Solutions</Link>
							</li>
							<li>
								<Link href={"#"}>Changelog</Link>
							</li>
							<li>
								<Link href={"#"}>Docs</Link>
							</li>
						</ul>
					</nav>
					<div className="flex space-x-3">
						<Button href="#" variant={"secondary"}>
							Log in
						</Button>
						<Button href="#">Sign up</Button>
					</div>
					<div className="h-full flex items-center">
						<button
							type="button"
							className="md:hidden"
							onClick={() => setIsOpen((prev) => !prev)}
						>
							{isOpen ? <CrossIcon /> : <MenuIcon />}
						</button>
					</div>
				</div>
			</Container>
		</motion.header>
	);
}
