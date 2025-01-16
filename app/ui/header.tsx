"use client";
import { useRef, useState } from "react";
import { Container } from "./container";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Logo } from "./icons/logo";
import Link from "next/link";
import { Button } from "./button";

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
			<Container className="bg-transparent backdrop-blur-[12px] items-center rounded-[1.6rem] border-[#fff]/[.08] border flex px-5 h-header-height">
				<Link href={"/"} className="flex items-center">
					<Logo className="mr-3" /> Jolly
				</Link>
				<div className="ml-auto flex items-center space-x-5">
					<nav className="hidden md:block">
						<ul className="flex [&_li]:ml-3 [&_a]:text-sm [&_a]:text-[#999] [&_a:hover]:text-[#c9c9c9] [&_a]:transition-colors ease-in">
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
				</div>
			</Container>
		</motion.header>
	);
}
