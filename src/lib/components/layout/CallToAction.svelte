<!--
    @component
    A call-to-action component that attracts attention and encourages user engagement.

    Usage:
    ```html
    <CallToAction
      title="Get started today"
      subtitle="Join now"
      description="Ready to experience the difference? Join our community of satisfied customers and see how our solution can transform your workflow."
      image="/path/to/image.jpg"
      callsToAction={[
        {
          href: "/get-started",
          label: "Get Started",
          variant: "primary"
        },
        {
          href: "/contact",
          label: "Talk to Sales",
          variant: "secondary"
        }
      ]}
    />
    ```

    Props:
    - `title`: The main heading text (string)
    - `subtitle`: Secondary heading text (string)
    - `description`: Detailed information about the offer (string)
    - `callsToAction`: Array of CTA objects with href, label, and optional variant properties (CTA[])
    - `imageSrc`: portrait of the company's customer smiling at the camera.
-->

<script lang="ts">
	// Types
	import type { ComponentProps } from "svelte";

	// Components
	import Button from "../ui/Button.svelte";
	import AnimateText from "../animation/AnimateText.svelte";
	import { cta } from "$lib/navigation";

	// Types
	type CTA = {
		href: string;
		label: string;
		variant?: ComponentProps<typeof Button>["variant"];
	};

	// Props
	const {
		title = "What’s next?", 
		subtitle = "See compliant video in action, partner with us, or join the team.",
		description = "If you’re facing MLR review bottlenecks or struggling to keep video content compliant across channels, cQuenced can help. Our AI-powered platform transforms your existing video library into fully compliant, repurposed assets—cutting approval time in half and slashing production costs by up to 70 percent.\n\nFor enterprise buyers: See how cQuenced speeds up MLR review, simplifies compliance tracking, and helps you get more value from every video campaign. For partners: We’re collaborating with agency, creative, and tech teams to build smarter workflows for regulated industries. For future team members: Join us to help solve one of the most overlooked problems in compliant content production—and shape the future of video reuse in regulated markets.", 
		imageSrc = "/generated/image-a-happy-professional-in-a-pharmaceutical.webp",
		callsToAction = [
  { href: '/demo', label: 'See compliance in action', variant: 'primary' },
],
		...rest
	}: {
		title?: string;
		subtitle?: string;
		description?: string;
		imageSrc?: string;
		callsToAction?: CTA[];
	} = $props();
</script>

<div class="" {...rest}>
	<section class="section-px section-py container mx-auto">
		<div
			class="bg-card border-border grid content-start items-center justify-between gap-(--gap) rounded-(--radius) border p-(--gap) text-balance [--gap:--spacing(8)] [--inner-radius:calc(var(--radius)-var(--gap))] [--radius:var(--radius-xl)] lg:grid-cols-[2fr_1fr]"
		>
			<div class="items-between grid h-full content-between gap-16">
				<h2 class="text-title1 mb-3 flex flex-col">
					<span><AnimateText text={title} /></span>
					<span class="text-emphasis-low"><AnimateText text={subtitle} /></span>
				</h2>
				<div class="flex flex-col items-start justify-start gap-7">
					<p class="text-headline text-emphasis-low">
						{description}
					</p>
					<div class="flex flex-wrap gap-2">
						{#each callsToAction as cta}
							<Button class="w-full md:w-auto" href={cta.href} variant={cta.variant || "primary"}
								>{cta.label}</Button
							>
						{/each}
					</div>
				</div>
			</div>
			<img
				src={imageSrc}
				alt="Visual comparison showing product benefits"
				class="hidden aspect-[4/5] size-full max-h-full w-full rounded-[calc(max(var(--inner-radius),.25rem))] object-cover lg:block"
			/>
		</div>
	</section>
</div>
