<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import StakeholderGrid from "$lib/components/layout/StakeholderGrid.svelte";
	import Story from "./Story.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";

	// Constants
	const values = [
		{
			title: "Innovation",
			description: "Constantly challenging the status quo to create better solutions."
		},
		{
			title: "Integrity",
			description: "Building trust through transparent actions and honest communication."
		},
		{
			title: "Impact",
			description: "Measuring our success by the positive change we create for our clients."
		}
	];
</script>

<SecondaryHero
    title="Compliant video, at scale"
    subtitle="Turn existing content into regulator-ready assets—faster, at lower cost"
    imageSrc="/generated/image-a-diverse-group-of-professionals-collabo.webp"
/>


<!-- Story Section -->
<Story
	paragraphs={[
  "We founded cQuenced because critical information shouldn't be delayed by red tape. In industries that save lives, protect health, and manage wealth, every second counts—and every message matters.",
  "Our mission is simple but powerful: remove barriers, eliminate delays, and empower teams in regulated markets to deliver compliant content instantly. We believe compliance shouldn't slow innovation; it should fuel it.",
  "From day one, we've stood by one guiding principle: impactful messages should never be held back by process. Our technology isn't just about faster videos—it's about faster breakthroughs, quicker patient support, smarter financial choices, and safer communities.",
  "At cQuenced, we're driven by the urgency of real impact. Because when critical content reaches people faster, it doesn't just improve campaigns—it improves lives."
]}

/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- StakeholderGrid Section -->
<StakeholderGrid
  stakeholderType="team"
  title="Our founders."
  subtitle="Shaped by experience, driven by purpose."
  stakeholders={[
    {
      name: "Noah Workman",
      position: "Co-Founder & CEO",
      bio: "Noah brings deep experience leading enterprise video and creative for global brands like Pfizer, HBO, Microsoft and more. He steers cQuenced with strategic vision and a customer-first mindset.",
      image: "/generated/Noah-Workman.jpg"
    },
    {
      name: "Jordan Burke",
      position: "Co-Founder & CTO",
      bio: "Jordan is a seasoned engineering leader and architect, drawing on roles at Helio and Real Capital Analytics to power cQuenced's technology and build scalable, trusted solutions.",
      image: "/generated/image-a-professional-headshot-of-a-male-with-a.webp"
    }
  ]}
/>




<!-- CTA Section -->
<CallToAction
	title="Ready to collaborate?"
	subtitle="Let's create something amazing"
	description="Join the companies already leveraging our expertise to transform their digital presence and achieve their business goals."
/>
