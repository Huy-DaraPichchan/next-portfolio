import Image from "next/image";

import { CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { JobImages } from "@/components/JobImages";

const jobs = [
	{
		role: "Software Engineer",
		company: "Kirirom Digital Japan",
		logo: "/kirirom.png",
		duration: "2024 - Present",
		description:
			"Developing an AI-powered web application that automatically generate and post news video about AI.",
		link: "",
		images: [],
	},
	{
		role: "Software Developer",
		company: "Salacyber",
		logo: "/salacyberlogo.png",
		duration: "2023 - 2024",
		description:
			"Handling requirement gathering and the development of web applications such as a POS system.",
		link: "",
		images: ["/ylpos-admin.png", "/ylpos-pos.png", "/ylpos-report.png"],
	},
	{
		role: "Software Developer",
		company: "Salacyber",
		logo: "/salacyberlogo.png",
		duration: "2023 - 2024",
		description:
			"Handling requirement gathering and the development of a landing page",
		link: "https://karpia.co",
		images: [
			"/karpia-1.png",
			"/karpia-2.png",
			"/karpia-3.png",
			"/karpia-5.png",
		],
	},
	{
		role: "Odoo Developer",
		company: "Kirirom Institute of Technology",
		logo: "/kitlogo.png",
		duration: "2021 - 2023",
		description:
			"Code and Led the development and maintenance of various modules especially Market List, Purchase Order & Request.",
		link: "",
		images: ["/odoo-13.png"],
	},
];

export const Experience = () => {
	return (
		<>
			<h2 className="text-xl font-bold mb-4 text-black dark:text-white">
				Work Experience
			</h2>
			<Card>
				<CardContent className="pt-6">
					<ul className="space-y-8">
						{jobs.map((j, i) => (
							<li
								key={i}
								className="border-b last:border-b-0 pb-8 last:pb-0"
							>
								{/* Job Details */}
								<div className="flex items-center space-x-4">
									<Image
										src={j.logo}
										alt={j.company}
										width={100}
										height={100}
										className="rounded-md border shadow-md object-cover"
									/>
									<div>
										<h3 className="font-semibold">
											{j.role}
										</h3>
										<p className="text-sm text-muted-foreground">
											{j.company}
										</p>
									</div>
								</div>
								<p className="text-xs text-muted-foreground mt-2 flex items-center">
									<CalendarDays className="size-3 mr-2" />
									{j.duration}
								</p>
								<p className="text-sm mt-2">{j.description}</p>
								{/* Job Images */}
								<JobImages
									role={j.role}
									link={j.link}
									images={j.images}
									duration={j.duration}
								/>
							</li>
						))}
					</ul>
				</CardContent>
			</Card>
		</>
	);
};
