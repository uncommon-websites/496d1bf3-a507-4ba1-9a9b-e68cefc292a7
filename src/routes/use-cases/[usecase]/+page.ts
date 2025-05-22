// Types
import type { PageLoad } from "./$types";

// Use cases can be considered industries depending on the company.
// Types
type UseCase = {
	meta: {
		title: string;
		description: string;
	};
	hero: {
		title: string;
		subtitle: string;
		imageSrc: string;
		callsToAction: Array<{
			href: string;
			label: string;
		}>;
	};
	summary: {
		title: string;
		text: string;
	};
	testimonials: Array<{
		quote: string;
		author: string;
		role: string;
		imageSrc: string;
	}>;
	features: {
		title: string;
		subtitle: string;
		items: Array<{
			title: string;
			description: string;
			icon: string;
		}>;
	};
};

// Constants
const campaignRemixingUseCase: UseCase = {
  meta: {
    title: "Campaign remixing",
    description: "Transform and reuse old campaigns into new, channel-ready content."
  },
  hero: {
    title: "Turn yesterday's videos into tomorrow's campaigns",
    subtitle:
      "Remix compliant, reusable segments—without restarting approvals.",
    imageSrc: "/generated/image-a-diverse-group-of-professionals-in-a-mo.webp",
    callsToAction: [
      { href: "/demo", label: "See how it works" }
    ]
  },
  summary: {
    title: "New campaigns. No new production. Fully compliant.",
    text:
      "cQuenced helps marketing, brand, and creative teams tap massive hidden value in existing assets. Instead of starting from scratch, you get fast remixing, regulatory-ready outputs, and built-in approval tracking—so your team can move at the speed of your market."
  },
  testimonials: [
    {
      quote:
        "We saved around $70K just on remixing alone—and brought five assets to market in the time it normally takes to clear one.",
      author: "Head of Content Strategy",
      role: "Top 5 global pharma",
      imageSrc: "/generated/image-a-marketing-team-celebrating-a-successfu.webp"
    },
    {
      quote: "It’s like having a content factory that already knows what legal needs. Seamless output, zero chasing.",
      author: "Global brand lead",
      role: "Health tech firm",
      imageSrc: "/generated/image-a-brand-leader-in-a-well-lit-office-smil.webp"
    }
  ],
  features: {
    title: "Faster campaigns—without new production",
    subtitle: "AI-powered remixing lets teams do more with legacy video.",
    items: [
      {
        title: "Instant multi-channel output",
        description: "Turn legacy videos into new assets for streaming, social, display, and in-app in under 24 hours.",
        icon: "rewind"
      },
      {
        title: "Regulatory tagging built in",
        description: "Automatically tag compliance claims and fair balance at segment level for review-ready reuse.",
        icon: "tag"
      },
      {
        title: "MLR-ready audit exports",
        description: "Export brand-safe cuts with synchronized audit metadata (MLR-ready).",
        icon: "clipboard-check"
      },
      {
        title: "Version control and recall",
        description: "Avoid duplicated legal reviews with recall tracking and version control for every edit.",
        icon: "refresh"
      }
    ]
  },
  cta: {
    title: "Turn your back-catalog into your next campaign",
    subtitle:
      "Explore how cQuenced reinvents high-value assets across every channel—faster and fully compliant.",
    imageSrc: "/generated/image-a-happy-professional-in-a-pharmaceutical.webp",
    description: "See remixing in action—no reshoots, no compliance headaches.",
    callsToAction: [
      { href: "/demo", label: "see how it works", variant: "primary" }
    ]
  }
};

const safetyUpdatesUseCase: UseCase = {
  meta: {
    title: "Safety updates",
    description: "Apply global label, risk or disclosure changes across all video instantly."
  },
  hero: {
    title: "Compliance made automatic. Approvals made easy.",
    subtitle:
      "We auto-tag compliance and builds instant audit trails—accelerating your MLR reviews.",
    imageSrc: "/generated/image-an-attentive-compliance-officer-in-a-cor.webp",
    callsToAction: [
      { href: "/demo", label: "Schedule a demo" }
    ]
  },
  summary: {
    title: "Built-in governance. Zero bottlenecks. Always audit-ready.",
    text:
      "Safety update requirements don’t wait for timelines. When claims, labels, or disclosure directives change, most teams scramble to find and fix every instance manually—racking up weeks of edits, reviews, and delays. With cQuenced, safety teams and brand owners can push urgent compliance updates across entire video libraries in minutes and route final cuts automatically to downstream MLR approval. All changes are tracked, time-stamped, and export-ready for review."
  },
  testimonials: [
    {
      quote:
        "Regulatory flagged a wording change globally—within an hour, everything live had been updated.",
      author: "Director of Risk Management",
      role: "top 20 pharma",
      imageSrc: "/generated/image-a-medical-risk-director-is-seated-at-a-d.webp"
    },
    {
      quote: "What used to be three weeks of global edits is now three clicks. Compliance has never moved this fast.",
      author: "VP Medical Affairs",
      role: "global medtech",
      imageSrc: "/generated/image-in-a-neutral-spacious-office-environment.webp"
    }
  ],
  features: {
    title: "A single change. Reflected everywhere.",
    subtitle: "Track, update and push global safety edits without touching your timeline or risking compliance violations.",
    items: [
      {
        title: "Segment-aware video mapping",
        description: "Map every instance of a product, claim, or risk phrase across all campaign content in seconds—right down to the asset, timestamp, and usage context.",
        icon: "map"
      },
      {
        title: "Automated compliance overlays",
        description: "Apply approved safety language, disclaimers, and fair balance visuals in real-time using template-driven insertion rules tied to your brand requirements.",
        icon: "layers"
      },
      {
        title: "One-click multi-market versioning",
        description: "Push localized and multilingual safety updates across variants and channels instantly—without duplicating effort for every downstream output.",
        icon: "globe"
      },
      {
        title: "Always audit-ready exports",
        description: "Generate traceable audit logs, storyboards and source comparisons for every update made—ready for compliant packaging into your MLR or regulatory toolset.",
        icon: "document"
      }
    ]
  },
  cta: {
    title: "Ready to move fast and stay safe?",
    subtitle:
      "See how cQuenced lets your compliance and brand teams update safety-critical video content instantly—at scale.",
    imageSrc: "/generated/image-an-attentive-compliance-officer-in-a-cor.webp",
    description: "Schedule a demo to see the fastest safety updates you’ve ever seen.",
    callsToAction: [
      { href: "/demo", label: "Schedule a demo", variant: "primary" }
    ]
  }
};

const segmentSearchUseCase: UseCase = {
  meta: {
    title: "Segment search",
    description: "Find usable, compliant video clips by claim, storyline or imagery instantly."
  },
  hero: {
    title: "Compliant campaigns, everywhere—instantly",
    subtitle: "We instantly create compliant variations for CTV, social, and display from a single approved asset.",
    imageSrc: "/generated/image-a-creative-team-in-a-vibrant-studio-spac.webp",
    callsToAction: [
      { href: "/demo", label: "Request a demo" }
    ]
  },
  summary: {
    title: "Multi-channel outputs, synced to your rules",
    text:
      "Manually scrubbing hours of video footage is a waste of time—and a fast path to risk. cQuenced makes your back-catalog searchable with segment-level precision and embedded regulatory context, putting years of approved footage right at your fingertips. Search by claim, keyword, region, safety reference, and more. Then remix or reuse—and send to MLR faster than ever."
  },
  testimonials: [
    {
      quote:
        "What used to take a full day now takes under 30 minutes. This changes how we reuse regulatory-approved assets across teams.",
      author: "Senior Director, Commercial Operations",
      role: "Top 10 pharma",
      imageSrc: "/generated/image-an-operations-director-seated-at-a-moder.webp"
    },
    {
      quote: "Being able to search by claim or brand name—and know the compliance info is baked in—saves days in review.",
      author: "VP of Marketing Compliance",
      role: "Global health service provider",
      imageSrc: "/generated/image-a-compliance-marketing-vp-in-a-neutral-c.webp"
    }
  ],
  features: {
    title: "Search smarter. Reuse faster.",
    subtitle: "Explore, extract, and reassemble high-impact stories with AI-guided confidence—without restarting your regulatory review.",
    items: [
      {
        title: "Segment-level search and tagging",
        description: "Use natural language to search your full video archive. Find exact scenes by product name, topic, region, or even spoken claim.",
        icon: "search"
      },
      {
        title: "Embedded compliance metadata",
        description: "Each segment comes with synced compliance markers—so you carry over approvals and disclosures every time you remix.",
        icon: "shield-check"
      },
      {
        title: "Auto-generated storyboards and audit trails",
        description: "Export what regulators want to see—side-by-side before/after visuals and transcripts with compliance annotations included.",
        icon: "clipboard-document"
      },
      {
        title: "Instant cross-channel remixing",
        description: "Need a social version? A new regional cut? Create in-context edits optimized for each channel and reviewer.",
        icon: "layers"
      }
    ]
  },
  cta: {
    title: "See how search turns into speed",
    subtitle:
      "Learn how your team can reclaim hours and reduce MLR load by making your video content truly searchable—with compliance clarity built in.",
    imageSrc: "/generated/image-a-creative-team-in-a-vibrant-studio-spac.webp",
    description: "Let’s make your video backlog an instant asset—request a walkthrough.",
    callsToAction: [
      { href: "/demo", label: "Request a demo", variant: "primary" }
    ]
  }
};

const technologyUseCase: UseCase = {
	meta: {
		title: "Technology",
		description: "Tech solutions for companies of all sizes"
	},
	hero: {
		title: "Technology Innovation Hub",
		subtitle: "Accelerate your digital transformation journey",
		imageSrc:
			"https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		callsToAction: [
			{ href: "/demo", label: "Get Started" },
			{ href: "#features", label: "Explore Features" }
		]
	},
	summary: {
		title: "Powering Tech Innovation",
		text: "Our platform helps technology companies streamline development workflows, improve collaboration, and deliver products faster with integrated DevOps tools and AI-powered insights."
	},
	testimonials: [
		{
			quote:
				"This solution has cut our development cycle by 35% and improved code quality significantly.",
			author: "Alex Rivera",
			role: "CTO, FutureTech",
			imageSrc: "/images/testimonials/alex-rivera.jpg"
		},
		{
			quote:
				"The automated testing and deployment features have revolutionized our release process.",
			author: "Priya Sharma",
			role: "VP of Engineering, CodeInnovate",
			imageSrc: "/images/testimonials/priya-sharma.jpg"
		}
	],
	features: {
		title: "Technology Solutions for Modern Teams",
		subtitle: "Tools designed for today's development challenges",
		items: [
			{
				title: "DevOps Integration",
				description: "Seamlessly connect your development and operations workflows",
				icon: "code-bracket"
			},
			{
				title: "AI-Assisted Development",
				description: "Leverage machine learning for code suggestions and bug detection",
				icon: "cpu-chip"
			},
			{
				title: "Collaboration Tools",
				description: "Foster teamwork with real-time communication and sharing features",
				icon: "user-group"
			},
			{
				title: "Performance Monitoring",
				description: "Track application performance and identify optimization opportunities",
				icon: "chart-bar-square"
			}
		]
	},

	cta: {
		title: "Elevate Your Tech Company",
		subtitle: "Join innovative technology companies using our platform",
		imageSrc:
			"https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		description: "See how our solutions can help you build better products faster.",
		callsToAction: [
			{ href: "/demo", label: "Schedule Demo", variant: "primary" },
			{ href: "/resources", label: "View Resources", variant: "secondary" }
		]
	}
};

const educationUseCase = {
	meta: {
		title: "Education",
		description: "Educational solutions for institutions of all levels"
	},
	hero: {
		title: "Education Transformation Platform",
		subtitle: "Empowering educators and students in the digital age",
		imageSrc:
			"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		callsToAction: [
			{ href: "/demo", label: "Get Started" },
			{ href: "#features", label: "Learn More" }
		]
	},
	summary: {
		title: "Reimagining Education",
		text: "Our platform helps educational institutions create engaging learning experiences, streamline administrative tasks, and leverage data analytics to improve student outcomes and educator effectiveness."
	},
	testimonials: [
		{
			quote:
				"This platform has transformed how we deliver curriculum and engage with our students.",
			author: "Dr. Emily Rodriguez",
			role: "Superintendent, Westview School District",
			imageSrc: "/images/testimonials/emily-rodriguez.jpg"
		},
		{
			quote:
				"The analytics capabilities have helped us identify at-risk students and intervene earlier.",
			author: "Professor Thomas Lee",
			role: "Dean of Students, Horizon University",
			imageSrc: "/images/testimonials/thomas-lee.jpg"
		}
	],
	features: {
		title: "Educational Tools for Modern Learning",
		subtitle: "Comprehensive solutions for today's educational challenges",
		items: [
			{
				title: "Interactive Learning",
				description: "Create engaging content that adapts to individual student needs",
				icon: "academic-cap"
			},
			{
				title: "Assessment Tools",
				description: "Measure learning outcomes with diverse evaluation methods",
				icon: "clipboard-document-check"
			},
			{
				title: "Student Analytics",
				description: "Track progress and identify opportunities for intervention",
				icon: "chart-pie"
			},
			{
				title: "Administrative Automation",
				description: "Streamline operations from enrollment to grade management",
				icon: "cog"
			}
		]
	},

	cta: {
		title: "Transform Your Educational Institution",
		subtitle: "Join leading schools and universities using our platform",
		imageSrc:
			"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		description:
			"Schedule a demo to see how we can help improve learning outcomes and institutional efficiency.",
		callsToAction: [
			{ href: "/demo", label: "Request Demo", variant: "primary" },
			{ href: "/case-studies", label: "View Case Studies", variant: "secondary" }
		]
	}
};

const useCases: Record<string, UseCase> = {
  "campaign-remixing": campaignRemixingUseCase,
  "safety-updates": safetyUpdatesUseCase,
  "segment-search": segmentSearchUseCase
};

export const load: PageLoad = async ({ params }) => {
	const { usecase } = params;

	if (!usecase || !(usecase in useCases)) {
		return {};
	}

	return useCases[usecase as keyof typeof useCases] ?? healthcare;
};
