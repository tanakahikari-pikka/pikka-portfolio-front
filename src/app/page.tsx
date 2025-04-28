"use client";
import { Experience } from "@/app/_components/Experience";
import { Hero } from "@/app/_components/Hero/Hero";
import { Projects } from "@/app/_components/Project/projects";
import { BlogPosts } from "@/app/_components/blogPosts";
import { Contact } from "@/app/_components/contact";
import { Skills } from "@/app/_components/skills";
import React, { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		const hash = window.location.hash;
		if (hash) {
			setTimeout(() => {
				const element = document.querySelector(hash);
				if (element) {
					element.scrollIntoView({ behavior: "smooth" });
				}
			}, 100);
		}
	}, []);

	return (
		<div className="min-h-screen bg-gray-900">
			<main>
				<Hero />
				<Experience />
				<Projects />
				<Skills />
				<BlogPosts />
				<Contact />
			</main>
		</div>
	);
}
