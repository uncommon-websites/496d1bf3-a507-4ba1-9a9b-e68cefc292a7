<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";

	let {
  paragraphs = [
    "Most regulated brands create far more video content than they can actually use. Every time a claim changes or a new channel is added, it triggers a long re-approval process—burning time, budget, and internal resources. Founders Noah Workman and Jordan Burke saw this problem up close while running enterprise creative programs at leading healthcare and pharma firms. They built cQuenced to solve a critical bottleneck—turning existing videos into updated, compliant assets without starting from scratch.",
    "cQuenced uses AI-powered video understanding to transform back-catalogs into ready-to-launch content. The platform automatically tags each part of a video for compliance, generates instant storyboards for legal review, and pushes global safety changes live in just two clicks. Everything is tracked, versioned, and synced across social, display, and CTV—making it easy to meet every regulatory requirement without manual effort.",
    "Today, leading enterprise teams—including one of the world’s top pharmaceutical companies—use cQuenced to move twice as fast and slash production costs by up to 70 percent. Backed by real results and a growing demand across healthcare, finance, and insurance, cQuenced is building the future of compliant video reuse—smarter, faster, and fully integrated into the modern enterprise stack."
  ]
}: {
  paragraphs: string[];
} = $props();
</script>

<div class="">
	<article class="section-py container mx-auto grid max-w-full">
		<Summary text={paragraphs.join("\n\n")} />
	</article>
</div>
