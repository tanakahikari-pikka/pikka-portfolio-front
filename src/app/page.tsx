"use client";
import { Experience } from "@/app/_components/Experience";
import { BlogPosts } from "@/app/_components/blogPosts";
import { Contact } from "@/app/_components/contact";
import { Skills } from "@/app/_components/skills";
import { Hero } from "@/app/_components/Hero/Hero";
import { Projects } from "@/app/_components/Project/projects";
import React from "react";

export default function Home() {
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
