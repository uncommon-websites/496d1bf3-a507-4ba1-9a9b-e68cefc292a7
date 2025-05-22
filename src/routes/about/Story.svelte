<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";

	let {
  paragraphs = [
    "cQuenced was born from a frustrating pattern: regulated enterprises spending millions on video content, yet struggling to find, update, or reuse it. Every small edit kicked off weeks of review, delaying launches and draining resources.",
    "With segment-level compliance tagging, two-click global updates, and built-in audit trails, cQuenced helps content, legal, and brand teams move faster—without increasing risk. Unlike generic video tools, cQuenced is purpose-built for regulatory workflows in pharma, healthcare, banking, and insurance.",
    "One global pharmaceutical customer cut approval time by 50% and lowered campaign production costs by over $70K—and that’s just from reusing content they already owned."
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
