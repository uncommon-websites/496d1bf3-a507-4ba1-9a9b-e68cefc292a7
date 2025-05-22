<script lang="ts">
	// Types
	import type { PageProps } from "./$types";

	// Components
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import Pricing from "$lib/components/layout/Pricing.svelte";

	// Props
	const { data }: PageProps = $props();
</script>

<Pricing />

<Testimonials
  testimonials={[
    {
      name: "Ellis Monroe",
      position: "Global Content Lead",
      company: "Mid-Cap Pharma",
      quote:
        "Getting 7 approved video variations in a single day—and each paired with traceable compliance metadata—was unthinkable before cQuenced. We've cut review cycles in half and can reuse content at a scale we never could before.",
      image:
        "/generated/image-a-professional-black-woman-in-a-pharmace.webp"
    },
    {
      name: "Nico Harden",
      position: "Director of Commercial Operations",
      company: "Fortune 100 Insurance",
      quote:
        "We used to start from scratch every time a claim changed. cQuenced made reuse not only doable, but faster than creating net new. Campaign ROI is proven—our first rollout saved over $60,000 and weeks of production time.",
      image:
        "/generated/image-a-latino-man-situated-in-an-insurance-in.webp"
    },
    {
      name: "Manisha Iqbal",
      position: "Head of MLR Ops",
      company: "Global Biotech",
      quote:
        "Having review-ready exports that slot directly into Veeva slashed our approval cycles—and let brand teams move way faster on urgent briefs. Onboarding was simple, and my compliance team is now more efficient than ever.",
      image:
        "/generated/image-a-south-asian-woman-working-in-a-biotech.webp"
    }
  ]}
/>

<CallToAction
  title="Fast-track compliant video. Without starting from scratch."
  subtitle="Put your video library to work—compliance included."
  description="cQuenced transforms your existing video library into asset-ready campaigns, fully aligned with FDA, HIPAA, SEC, and other regulatory requirements. Cut editing steps, slash review time, and deliver new content 50% faster, at up to 70% lower cost. Spend less time chasing edits—and more time putting smart, compliant video in front of customers."
  imageSrc="/generated/image-a-cheerful-business-professional-in-an-o.webp"
  callsToAction={[
    { href: '/demo', label: 'Request a demo', variant: 'primary' },
    { href: '/contact', label: 'Contact sales', variant: 'secondary' }
  ]}
/>
