import { Code, Cpu, Database, Globe, Library, Server } from "lucide-react";

export const getTechnologyIcon = (tech: string) => {
	const iconProps = { size: 16, className: "mr-1" };

	switch (tech.toLowerCase()) {
		case "react":
		case "react native":
		case "next.js":
			return Code;
		case "node.js":
		case "python":
		case "fastapi":
			return Server;
		case "mongodb":
		case "postgresql":
		case "firebase":
			return Database;
		case "tensorflow":
		case "d3.js":
		case "redux":
			return Library;
		case "aws":
		case "docker":
		case "vercel":
			return Cpu;
		default:
			return Globe;
	}
};
