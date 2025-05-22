<!--
@component Pricing

Please update features according to the company's product offering. Do not remove this comment.
-->
<script lang="ts">
	// Types
	type PricingTier = {
		name: string;
		monthlyPrice?: number | null;
		yearlyPrice?: number | null;
		description: string;
		features: string[];
		cta: {
			label: string;
			href: string;
		};
		highlight?: boolean;
	};

	type PricingFeature = {
		name: string;
		tiers: {
			[key: string]: boolean | string;
		};
	};

	// Components
	import Button from "$lib/components/ui/Button.svelte";
	import SectionHeader from "./SectionHeader.svelte";
	import IconCheck from "~icons/lucide/check";
	import IconX from "~icons/lucide/x";
	import NumberFlow from "@number-flow/svelte";
	import LogoScroller from "./LogoScroller.svelte";

	// Props
	const {
		title = "Pricing for regulated enterprise video",
		subtitle = "Find the plan that accelerates compliant content for your team",
		tierNames = ["Starter", "Mid-Tier", "Enterprise"],
		features = [
			{
				name: "Video campaigns/year",
				tiers: {
					Starter: "Up to 10",
					"Mid-Tier": "Up to 30",
					Enterprise: "Unlimited"
				}
			},
			{
				name: "User licenses",
				tiers: {
					Starter: "3",
					"Mid-Tier": "10",
					Enterprise: "Unlimited"
				}
			},
			{
				name: "Cross-channel outputs",
				tiers: {
					Starter: "5/month",
					"Mid-Tier": "Unlimited",
					Enterprise: "Unlimited"
				}
			},
			{
				name: "MLR-ready storyboards",
				tiers: {
					Starter: true,
					"Mid-Tier": true,
					Enterprise: true
				}
			},
			{
				name: "Compliance & audit tagging",
				tiers: {
					Starter: "Standard",
					"Mid-Tier": "Advanced",
					Enterprise: "Advanced + Regulatory-Locked"
				}
			},
			{
				name: "Automated transcripts & reference metadata",
				tiers: {
					Starter: true,
					"Mid-Tier": true,
					Enterprise: true
				}
			},
			{
				name: "Archive retention",
				tiers: {
					Starter: "120-day",
					"Mid-Tier": "365-day",
					Enterprise: "Regulatory-locked & versioned (custom)"
				}
			},
			{
				name: "Integrations",
				tiers: {
					Starter: "Veeva, Aprimo (push/pull)",
					"Mid-Tier": "Adobe, CRM (Salesforce), Veeva/Aprimo advanced",
					Enterprise: "Custom, API, all supported systems"
				}
			},
			{
				name: "Remix automation",
				tiers: {
					Starter: false,
					"Mid-Tier": "Bulk/templated",
					Enterprise: "Full/custom"
				}
			},
			{
				name: "Analytics & dashboards",
				tiers: {
					Starter: false,
					"Mid-Tier": "Usage/basic performance",
					Enterprise: "Full/asset, channel, regulatory insights"
				}
			},
			{
				name: "Support SLA",
				tiers: {
					Starter: "48h email",
					"Mid-Tier": "12h priority email",
					Enterprise: "1h email/chat/phone"
				}
			},
			{
				name: "Dedicated account manager",
				tiers: {
					Starter: false,
					"Mid-Tier": false,
					Enterprise: true
				}
			},
			{
				name: "Onboarding/training",
				tiers: {
					Starter: "Guided self-serve",
					"Mid-Tier": "Onboarding session",
					Enterprise: "White-glove program"
				}
			}
		],
		tiers = [
			{
				name: "Starter",
				monthlyPrice: null,
				yearlyPrice: 40000,
				description: "For focused brand or content teams building a foundation for faster, safer remixing.",
				features: [
					"Up to 10 campaigns/year",
					"3 user licenses",
					"5 cross-channel outputs/month",
					"MLR-ready storyboards & export kits",
					"Standard compliance tagging & transcripts",
					"120-day asset archive",
					"Veeva, Aprimo (push/pull)",
					"Email support, 48h SLA",
					"Guided self-serve onboarding"
				],
				cta: {
					label: "Request demo",
					href: "/contact?plan=starter"
				}
			},
			{
				name: "Mid-Tier",
				monthlyPrice: null,
				yearlyPrice: 95000,
				description: "For regional or cross-functional teams managing moderate campaign flow under strict legal or regulatory oversight.",
				features: [
					"Up to 30 campaigns/year",
					"10 user licenses, team-role workflows",
					"Unlimited cross-channel outputs",
					"Advanced compliance and metadata exports",
					"Bulk remix, templates, and dashboards",
					"Adobe & CRM integrations",
					"Priority email support, 12h SLA",
					"Onboarding session"
				],
				cta: {
					label: "Request demo",
					href: "/contact?plan=mid-tier"
				},
				highlight: true
			},
			{
				name: "Enterprise",
				monthlyPrice: null,
				yearlyPrice: 180000,
				description: "For enterprise teams handling large archives, multiple brands, and global regulatory layers.",
				features: [
					"Unlimited campaigns and users",
					"Regulatory-locked archives",
					"Full-cycle logs, audit dashboards",
					"Custom integrations and automations",
					"Advanced access control & SSO",
					"White-glove onboarding program",
					"Dedicated account manager",
					"Live chat/phone/email support, 1h SLA"
				],
				cta: {
					label: "Contact sales",
					href: "/contact?plan=enterprise"
				}
			}
		]
	}: {
		title?: string;
		subtitle?: string;
		tiers?: PricingTier[];
		features?: PricingFeature[];
		tierNames?: string[];
		caption?: string;
	} = $props();

	// State
	let annual = $state(true);
</script>

<section class="section-py section-px container mx-auto">
	<div class="flex flex-col items-baseline justify-between lg:flex-row">
		<SectionHeader {title} {subtitle} />

		<div class="mb-8 flex justify-center">
			<div class="inline-flex items-center rounded-full bg-gray-100 p-0.5 dark:bg-gray-800">
				<Button
					variant="ghost"
					size="sm"
					class=" {!annual ? 'bg-white shadow-sm dark:bg-gray-700' : ''}"
					onclick={() => (annual = false)}
				>
					Monthly
				</Button>
				<Button
					variant="ghost"
					size="sm"
					rounded
					class={annual ? "bg-white shadow-sm dark:bg-gray-700" : ""}
					onclick={() => (annual = true)}
				>
					Annual <span class="text-primary-600 dark:text-primary-400 text-footnote">Save 20%</span>
				</Button>
			</div>
		</div>
	</div>

	<div class="bb grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each tiers as tier}
			<div
				class="flex flex-col rounded-xl bg-white p-6 ring ring-gray-200 transition-all duration-300 dark:bg-gray-800 dark:ring-gray-700"
				class:ring-2={tier.highlight}
				class:ring-primary={tier.highlight}
				class:dark:ring-primary-700={tier.highlight}
				class:translate-y-[-4px]={tier.highlight}
			>
				<div class="mb-8">
					<h3 class="text-title3 mb-4 dark:text-white">{tier.name}</h3>
					<div class="mt-2 flex items-baseline">
						{#if tier.monthlyPrice === null && tier.yearlyPrice === null}
							<span class="text-title2 dark:text-white">Custom</span>
						{:else}
							<NumberFlow
								class="text-title2 [&::part\(suffix\)]:text-caption dark:text-white"
								format={{
									style: "currency",
									currency: "USD",
									trailingZeroDisplay: "stripIfInteger"
								}}
								value={annual ? tier.yearlyPrice : tier.monthlyPrice}
								suffix="/month"
							/>
						{/if}
					</div>
					<p class="text-callout text-emphasis-medium mt-3 dark:text-gray-300">
						{tier.description}
					</p>
				</div>

				<div class="mb-8 flex-grow">
					<ul class="space-y-3">
						{#each tier.features as feature}
							<li class="flex items-center gap-2">
								<IconCheck class="text-primary-600 dark:text-primary-400 size-5 flex-shrink-0" />
								<span class="text-body text-emphasis-medium dark:text-gray-300">{feature}</span>
							</li>
						{/each}
					</ul>
				</div>

				<div class="mt-auto">
					<Button
						href={tier.cta.href}
						variant={tier.highlight ? "primary" : "secondary"}
						class="w-full"
					>
						{tier.cta.label}
					</Button>
				</div>
			</div>
		{/each}
	</div>
	<div class="mt-32">
		<!-- Responsive table wrapper with horizontal scroll on mobile -->
		<!-- <div class=" hidden overflow-x-auto px-4 sm:mx-0 sm:block sm:px-0">
			<table
				class="w-full min-w-full border-separate border-spacing-0 border-gray-200 text-left dark:border-gray-700"
			>
				<thead>
					<tr>
						<th
							class="sticky left-0 min-w-[120px] border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
						>
							<span class="sr-only">Feature</span>
						</th>
						{#each tierNames as tierName}
							<th
								class="text-headline min-w-[100px] border-b border-gray-200 p-4 text-start font-normal dark:border-gray-700"
							>
								{tierName}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each features as feature}
						<tr>
							<td class="text-caption">
								{feature.name}
							</td>
							{#each tierNames as tierName}
								<td
									class="min-w-[100px] border-b border-gray-200 p-4 text-start text-gray-600 dark:border-gray-700 dark:text-gray-300"
								>
									{#if typeof feature.tiers[tierName] === "boolean"}
										{#if feature.tiers[tierName]}
											<IconCheck
												class="text-primary-600 dark:text-primary-400 mx-auto size-5 sm:mx-0"
											/>
										{:else}
											<IconX class="mx-auto size-5 text-gray-400 sm:mx-0" />
										{/if}
									{:else}
										{feature.tiers[tierName]}
									{/if}
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div> -->

		<!-- Mobile feature comparison (alternative view for very small screens) -->
		<div>
			<!-- Universal pricing comparison for mobile -->
			<div class="overflow-x-auto">
				<table class="w-full border-collapse">
					<!-- Sticky header with tier names -->
					<thead class="border-border sticky top-0 z-10 border-b">
						<tr>
							<th class="min-w-[120px] py-3 text-left">
								<span class="sr-only">Feature</span>
							</th>
							{#each tierNames as tierName, i}
								<th class="text-caption min-w-[100px] py-3 text-left dark:text-white">
									{tierName}
								</th>
							{/each}
						</tr>
					</thead>
					<tbody class="divide-border divide-y">
						{#each features as feature}
							<tr>
								<td class="text-body py-3 pr-8 font-medium lg:pr-0 dark:text-white">
									{feature.name}
								</td>
								{#each tierNames as tierName, i}
									<td class="py-3">
										{#if typeof feature.tiers[tierName] === "boolean"}
											{#if feature.tiers[tierName]}
												<IconCheck class="text-primary-900 dark:text-primary-400 size-5" />
											{:else}
												<IconX class="size-5 text-gray-400" />
											{/if}
										{:else}
											<span class="text-callout font-medium text-gray-700 dark:text-gray-300">
												{feature.tiers[tierName]}
											</span>
										{/if}
									</td>
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<LogoScroller />
</section>

<style lang="postcss">
	@reference '../../../app.css';

	:global(number-flow-svelte)::part(suffix) {
		@apply text-sm text-gray-400 dark:text-gray-500;
	}
</style>
