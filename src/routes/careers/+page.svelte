<script lang="ts">
	// Types

	// Components
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Card from "$lib/components/ui/Card.svelte";
	import JobList, { type JobOpening } from "./JobList.svelte";

	// Icons
	import IconBriefcase from "~icons/lucide/briefcase";
	import IconUsers from "~icons/lucide/users";
	import IconHeart from "~icons/lucide/heart";
	import IconGlobe from "~icons/lucide/globe";

	// Constants
	const SECTION_BASE_CLASSES = "section-py section-px container mx-auto";
	const GRADIENT_BG_CLASSES =
		"bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800";
	const ICON_CONTAINER_CLASSES =
		"bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400 flex items-center justify-center rounded-full";

	const benefits = [
		{
			title: "Flexible Work",
			description: "Remote-first with flexible hours that respect work-life balance.",
			icon: IconBriefcase
		},
		{
			title: "Growth Opportunities",
			description: "Continuous learning with mentorship and education stipends.",
			icon: IconUsers
		},
		{
			title: "Comprehensive Benefits",
			description: "Health coverage, retirement plans, and generous paid time off.",
			icon: IconHeart
		}
	];

	const openings: JobOpening[] = [
		// Engineering
		{
			title: "Senior Frontend Developer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Backend Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Design Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Design
		{
			title: "UX/UI Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Product
		{
			title: "Product Manager",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Analyst",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Marketing
		{
			title: "Marketing Specialist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Content Strategist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Social Media Manager",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		}
	];

	const employeeTestimonials = [
  {
    name: "Eric Chen",
    position: "Software Engineer",
    company: "Engineering",
    quote:
      "I joined right out of college and felt guided from day one. My teammates are always willing to help and I get the chance to learn from real projects every week.",
    image: "/generated/image-a-young-east-asian-man-wearing-a-casual-.webp"
  },
  {
    name: "Anjali Patel",
    position: "Product Manager",
    company: "Product",
    quote:
      "At cQuenced, you really do get to own your work. My ideas are taken seriously here and I always know support is just a message away. Growth is real and so is the trust.",
    image: "/generated/image-a-south-asian-woman-dressed-in-smart-cas.webp"
  },
  {
    name: "David Thompson",
    position: "VP, Operations",
    company: "Leadership",
    quote:
      "This team is full of energy and ideas, but what stands out most is the respect everyone has for each other. We celebrate wins together and leave plenty of room to learn from mistakes.",
    image: "/generated/image-a-middle-aged-black-man-dressed-in-busin.webp"
  }
];

	const processSteps = [
  {
    step: 1,
    title: "Quick application",
    description:
      "Apply online with your resume or LinkedIn profile. No need for a cover letter."
  },
  {
    step: 2,
    title: "Intro call",
    description:
      "A short call to get to know you, share more about cQuenced, and explore mutual fit."
  },
  {
    step: 3,
    title: "Skills deep-dive",
    description:
      "A practical case, technical challenge, or creative walkthrough—tailored to the position."
  },
  {
    step: 4,
    title: "Final chat with founders",
    description:
      "Meet the founders to discuss team culture, working style, and long-term vision."
  },
  {
    step: 5,
    title: "Reference check & offer",
    description:
      "We run reference calls and send any offer promptly. Personalized communication every step."
  }
];

	const values = [
		{
			icon: IconHeart,
			title: "Passion",
			description: "We're driven by a shared passion for innovation and excellence."
		},
		{
			icon: IconUsers,
			title: "Collaboration",
			description: "We believe in teamwork and collaboration to achieve great things."
		},
		{
			icon: IconGlobe,
			title: "Global Impact",
			description: "We're committed to making a positive impact on the world."
		}
	];
</script>

<!-- Hero Section -->

<SecondaryHero
    title="Transform how regulated industries communicate"
    subtitle="Join a high-performing, supportive team building AI that helps healthcare, pharma, and finance create compliant content—faster, together"
    imageSrc="/generated/image-a-bright-modern-office-environment-with-.webp"
/>

<!-- Why Join Us Section -->
<section class={SECTION_BASE_CLASSES}>
	<SectionHeader title="Why join us?" subtitle="Work at the forefront of AI, compliance, and video transformation" />

<ul class="mt-16 grid gap-8 md:grid-cols-2 list-none">
  <li class="text-body">
    <strong>Be part of a real platform shift.</strong><br />
    We're solving one of the biggest hidden blockers in regulated go-to-market execution—content reuse at scale.
  </li>
  <li class="text-body">
    <strong>Build alongside pioneers.</strong><br />
    Work with a team that's already collaborating with leading brands like Pfizer and shaping the future of compliant media.
  </li>
  <li class="text-body">
    <strong>Make a tangible impact.</strong><br />
    Every solution you build saves teams months of delay, and unlocks creative work previously stuck in review queues.
  </li>
  <li class="text-body">
    <strong>Accelerate your growth.</strong><br />
    Early team members help shape product, culture, and outcomes—with strong ownership, real learning, and enterprise SaaS scale.
  </li>
  <li class="text-body">
    <strong>Competitive rewards.</strong><br />
    Comprehensive health benefits, flexible remote work, continuous learning stipends, and the upside of joining early.
  </li>
</ul>
</section>

<!-- Culture Section -->
<Culture {values} />

<Testimonials testimonials={employeeTestimonials} />

<!-- Application Process -->
<section class={SECTION_BASE_CLASSES}>
	<div class="mx-auto">
		<h2 class="text-title1 mb-16">Our application process</h2>

		<div class="grid gap-12 md:grid-cols-3">
			{#each processSteps as { step, title, description }, i}
				<div class="flex flex-col">
					<div class="{ICON_CONTAINER_CLASSES} mb-6 size-11">
						<span class="text-headline">{step}</span>
					</div>
					<h3 class="text-headline mb-3">{title}</h3>
					<p class="text-body text-emphasis-low">{description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
<!-- Current Openings Section -->
<section class={GRADIENT_BG_CLASSES}>
	<div class="section-px section-py container mx-auto grid w-full items-start lg:grid-cols-2">
		<SectionHeader title="Current openings" subtitle="Find your perfect role" />

		<JobList {openings} />
	</div>
</section>
