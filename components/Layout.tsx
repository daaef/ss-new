"use client";
import { navigationAtom, pageAtom } from "@/store";
import { Image, Link } from "@nextui-org/react";
import { useAtom } from "jotai";
import { Potta_One, Rakkas, Sarina } from "next/font/google";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GoogleIcon } from "./svgs/icons";

interface LayoutProps {
	children: React.ReactNode;
}

const pottaOne = Potta_One({
	subsets: ["latin"],
	weight: ["400"],
});

const rakkas = Rakkas({
	subsets: ["latin"],
	weight: ["400"],
});

const sarina = Sarina({
	subsets: ["latin"],
	weight: ["400"],
});

const Layout = ({ children }: LayoutProps) => {
	const [navigation] = useAtom(navigationAtom);
	const [pageContent] = useAtom(pageAtom);
	const currentRoute = usePathname();
	const [content, setContent] = useState<null | {
		route: string;
		title: string;
		subTitle: string;
	}>(null);
	const getRouteData = () => {
		setContent(
			pageContent.find((cont) => {
				return cont.route === currentRoute;
			}) || null
		);
	};
	useEffect(getRouteData, [currentRoute, pageContent]);
	return (
		<>
			<div
				className={`${
					currentRoute.includes("register") ? "register" : ""
				} auth-container`}>
				<div className='flex flex-1 flex-col justify-center form-container lg:order-2 order-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
					<div className='form-main'>
						<div className='look-tabs'>
							{navigation.map((item, index) => (
								<Link
									href={item.href}
									className={`look-tab ${
										currentRoute == item.href ? "active" : ""
									}`}
									key={index}>
									<item.icon className='look-tab-icon' />
									<div className='look-tab-line' />
									<h3 className='look-tab-title'>{item.name}</h3>
								</Link>
							))}
						</div>
						<div className='flex logo-container justify-center'>
							<Image
								src='/Logo.png'
								alt='Logo'
								className='logo'
								width={100}
								height={24}
							/>
						</div>
						<div className='pt-10 w-full form-holder'>
							<div>{children}</div>
							<div
								className={`mt-8 ${
									currentRoute.includes("register") ? "hidden" : ""
								}`}>
								<div className='relative'>
									<div className='relative flex justify-center text-sm font-medium leading-6'>
										<span className='px-6 text-gray-900'>OR</span>
									</div>
								</div>
								<div className='mt-6'>
									<a href='#' className='btn-gradient outlined'>
										<div className='btn-container'>
											<GoogleIcon />
											<span className='text-sm font-semibold leading-6'>
												Log in with Google
											</span>
										</div>
									</a>
								</div>
								<div className='agreement italic mt-5 text-center'>
									<p className='text-sm'>
										By creating a look, you agree to the Terms of Service and
										Privacy Policy, including Cookie Use.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='relative h-screen hidden lg:order-1 order-2 lg:block'>
					<div className='section-header'>
						<h2 className={`page-title ${sarina.className}`}>
							{content?.title}
						</h2>
						<h3 className={`section-title ${rakkas.className}`}>
							{content?.subTitle}
						</h3>
					</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
