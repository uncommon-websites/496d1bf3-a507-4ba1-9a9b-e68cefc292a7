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
		"We started in 2018 with a simple goal: make helpful tech that people actually need. While many chase profits, we chose to do things differently.",
		"Beyond making good products, we care about doing the right thing, being kind to our planet, and making sure everyone can use what we build. That's our compass.",
		"From day one, we've asked ourselves: 'Does this actually help people?' This question gets us through tough calls and shapes who we are. We're playing the long game here.",
		"We think about how our work affects real people's lives. We build tech that brings people together, keeps your information safe, and treats everyone fairly. When we stick to these basics, good things happen."
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
