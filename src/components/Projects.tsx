import Link from "next/link";
import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const projects = [
	{
		title: "YL-POS",
		description:
			"A POS system to manage sale and track inventory for coffee shop.",
		tech: "Django Framework",
		link: "",
	},
	{
		title: "A2A Odoo Upgrade",
		description: "Developing and maintaining an ERP system for a resort",
		tech: "Odoo ERP",
		link: "",
	},
	{
		title: "Domner",
		description: "An adventurous side-scrolling mobile game for Android.",
		tech: "Godot Engine",
		link: "",
	},
	{
		title: "Pollify",
		description:
			"A kind of social media app that allows people to create polls and votes within communities",
		tech: "React",
		link: "",
	},
];

const techColors = {
	TypeScript: "bg-blue-500",
	React: "bg-red-500",
	Python: "bg-yellow-900",
	Javascript: "bg-yellow-300",
	"Django Framework": "bg-green-700",
	"Odoo ERP": "bg-purple-500",
	"Godot Engine": "bg-cyan-500",
};

export const Projects = () => {
	return (
		<>
			<h2 className="text-xl font-bold mb-4">Featured Projects</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
				{projects.map((p, i) => (
					<Card key={i}>
						<CardContent className="pt-6 h-full">
							<div className="flex flex-col h-full">
								<Link
									href={p.link}
									className="font-semibold text-primary hover:underline"
								>
									{p.title}
								</Link>
								<p className="text-sm text-muted-foreground mt-1 mb-4">
									{p.description}
								</p>
								<div className="mt-auto flex items-center justify-between">
									<div className="flex items-center space-x-2">
										<div
											className={cn(
												"size-4 rounded-full",
												techColors[
													p.tech as keyof typeof techColors
												]
											)}
										/>
										<span className="text-xs font-medium text-muted-foreground">
											{p.tech}
										</span>
									</div>
									{/* <Link
										href={p.link}
										className="flex items-center gap-2 text-sm text-primary hover:underline"
									>
										View Project
										<ExternalLink className="inline-block size-3" />
									</Link> */}
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</>
	);
};
