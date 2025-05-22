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
		title = "Enterprise pricing for regulated industries",
		subtitle = "Transparent plans for compliant video transformation",
		tierNames = ["Starter", "Professional", "Enterprise"],
		features = [
	{
		name: "Remixed video campaigns",
		tiers: {
			Starter: "Up to 10",
			Professional: "Up to 25",
			Enterprise: "Unlimited"
		}
	},
	{
		name: "Export channels (display, CTV, social, etc.)",
		tiers: {
			Starter: "3",
			Professional: "6",
			Enterprise: "Unlimited"
		}
	},
	{
		name: "Users included",
		tiers: {
			Starter: "Shared access",
			Professional: "Named users",
			Enterprise: "Unlimited"
		}
	},
	{
		name: "Segment-level compliance tagging",
		tiers: {
			Starter: true,
			Professional: true,
			Enterprise: true
		}
	},
	{
		name: "Global safety update automation",
		tiers: {
			Starter: false,
			Professional: true,
			Enterprise: true
		}
	},
	{
		name: "Integration with Veeva, Aprimo, Adobe",
		tiers: {
			Starter: false,
			Professional: false,
			Enterprise: true
		}
	},
	{
		name: "Audit trails and storyboard export",
		tiers: {
			Starter: "Basic",
			Professional: "Automated",
			Enterprise: "Automated with custom workflows"
		}
	},
	{
		name: "Support response time",
		tiers: {
			Starter: "Business hours email",
			Professional: "Priority email + chat",
			Enterprise: "Dedicated SLA, 24/5"
		}
	},
	{
		name: "Onboarding & training",
		tiers: {
			Starter: "Standard setup guide",
			Professional: "Assisted onboarding",
			Enterprise: "White-glove onboarding, staff training"
		}
	},

			{
				name: "Projects",
				tiers: {
					Starter: "5",
					Pro: "Unlimited",
					Enterprise: "Unlimited"
				}
			},
			{
				name: "Team members",
				tiers: {
					Starter: "1",
					Pro: "10",
					Enterprise: "Unlimited"
				}
			},
			{
				name: "Storage",
				tiers: {
					Starter: "1GB",
					Pro: "10GB",
					Enterprise: "Unlimited"
				}
			},
			{
				name: "API access",
				tiers: {
					Starter: false,
					Pro: true,
					Enterprise: true
				}
			},
			{
				name: "Custom domains",
				tiers: {
					Starter: false,
					Pro: true,
					Enterprise: true
				}
			},
			{
				name: "Analytics",
				tiers: {
					Starter: "Basic",
					Pro: "Advanced",
					Enterprise: "Advanced"
				}
			},
			{
				name: "Support response time",
				tiers: {
					Starter: "24 hours",
					Pro: "4 hours",
					Enterprise: "1 hour"
				}
			},
			{
				name: "Dedicated account manager",
				tiers: {
					Starter: false,
					Pro: false,
					Enterprise: true
				}
			},
			{
				name: "SLA",
				tiers: {
					Starter: false,
					Pro: false,
					Enterprise: "99.9%"
				}
			}
		],
		tiers = [
	{
		name: "Starter",
		monthlyPrice: null,
		yearlyPrice: 40000,
		description: "For teams ready to pilot content transformation with compliance built in.",
		features: [
			"Up to 10 remixed video campaigns",
			"3 export channels included",
			"Shared user access",
			"Export-ready MLR overview decks",
			"Basic transcript tagging and manual compliance assist",
			"Email support during business hours"
		],
		cta: {
			label: "Get started",
			href: "/contact?plan=starter"
		}
	},
	{
		name: "Professional",
		monthlyPrice: null,
		yearlyPrice: 95000,
		description: "For customer-facing teams managing frequent updates across brands or geographies.",
		features: [
			"Up to 25 remixed campaigns, 6 export channels",
			"Advanced safety update rules across videos",
			"Priority asset search and segment recognition",
			"Named user access and saved content profiles",
			"Audit trail automation and MLR storyboard generation",
			"Priority email + chat support"
		],
		cta: {
			label: "Request demo",
			href: "/contact?plan=professional"
		},
		highlight: true
	},
	{
		name: "Enterprise",
		monthlyPrice: null,
		yearlyPrice: 180000,
		description: "For global or regional brands with high-volume reuse and advanced regulatory needs.",
		features: [
			"Unlimited campaigns, users, and export destinations",
			"Full integration with Veeva Vault, Aprimo, Adobe Creative Cloud",
			"Smart versioning: auto-tracked changes and global compliance settings",
			"White-glove onboarding, staff training, and sandbox setup",
			"Dedicated customer success + 24/5 SLA support",
			"Custom workflows for regulatory and legal teams"
		],
		cta: {
			label: "Contact sales",
			href: "/contact?plan=enterprise"
		}
	},

			
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
