import { type MotionProps, motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { getTechnologyIcon } from "./extract";
import type { projectsData } from "./projectData";

export const ProjectCard = ({
	project,
	variants,
}: {
	project: (typeof projectsData)[0];
	variants: MotionProps["variants"];
}) => {
	return (
		<motion.div
			variants={variants}
			className="group relative bg-gradient-to-br from-indigo-950/50 to-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-indigo-500/10 shadow-xl shadow-purple-500/5 hover:shadow-purple-500/10 hover:border-indigo-500/30 transition-all duration-300"
		>
			<div className="relative h-48 overflow-hidden">
				<img
					src={project.image}
					alt={project.title}
					className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
				/>

				{project.featured && (
					<div className="absolute top-3 right-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
						注目プロジェクト
					</div>
				)}

				<div className="absolute inset-0 bg-gradient-to-t from-indigo-950 to-transparent opacity-80" />

				<div className="absolute bottom-3 left-3">
					<span className="bg-black/50 backdrop-blur-sm text-indigo-300 text-xs px-2 py-1 rounded-full border border-indigo-500/20">
						{project.category}
					</span>
				</div>
			</div>

			<div className="p-5">
				<h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors">
					{project.title}
				</h3>

				<p className="text-indigo-200 text-sm mb-4 line-clamp-3">
					{project.description}
				</p>

				<div className="flex flex-wrap gap-2 mb-4">
					{project.technologies.slice(0, 4).map((tech) => (
						<span
							key={tech}
							className="inline-flex items-center bg-black/30 text-blue-300 text-xs px-2 py-1 rounded-full"
						>
							{/* {getTechnologyIcon(tech) && (
								<span className="mr-1">
									{getTechnologyIcon(tech) as unknown as React.ReactNode}
								</span>
							)}{" "} */}
							{tech}
						</span>
					))}
					{project.technologies.length > 4 && (
						<span className="inline-flex items-center bg-black/30 text-blue-300 text-xs px-2 py-1 rounded-full">
							+{project.technologies.length - 4}
						</span>
					)}
				</div>

				<div className="flex gap-3">
					{project.github && (
						<a
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
						>
							<Github size={16} />
							コード
						</a>
					)}

					{project.demo && (
						<a
							href={project.demo}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
						>
							<ExternalLink size={16} />
							デモを見る
						</a>
					)}
				</div>
			</div>

			<div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
		</motion.div>
	);
};
