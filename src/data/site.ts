export const SITE = {
	name: "Chenxi Huang",
	brand: "Botanical Systems",
	roleZh: "AI 产品经理与设计师",
	roleEn: "AI PM & Designer",
	schoolZh: "南京大学",
	schoolEn: "Nanjing University",
	email: "hcx0579@qq.com",
	wechat: "niuyouguo778-",
	xUrl: "https://x.com/Aurora736951",
	xHandle: "@Aurora736951",
	githubUrl: "https://github.com/aurora1112-j",
	githubHandle: "aurora1112-j",
	portfolioPath: "/hire",
	publicResumePath: "/resume/chenxi-huang-ai-product-manager-2027-public.pdf",
	avatar: "/images/profile/chenxi-huang-github.jpg",
	siteUrl: "https://aurora1112-j.github.io",
} as const;

export const TOPIC_ZH: Record<string, string> = {
	"AI Agents": "AI 智能体",
	"Human–AI Collaboration": "人机协作",
	"Product Design": "产品设计",
	"Knowledge Management": "知识管理",
	"Digital Gardening": "数字花园",
	"Artificial Intelligence": "人工智能",
	Trust: "信任",
	Memory: "记忆",
	Research: "研究",
	"Context Engineering": "上下文工程",
	"Interaction Design": "交互设计",
	"Information Architecture": "信息架构",
	Photography: "摄影",
	Nanjing: "南京",
	"Visual Research": "视觉研究",
	"Open Source": "开源",
};

export const topicZh = (topic: string) => TOPIC_ZH[topic] || topic;
