<script lang="ts">
	// Components
	import UseCases from "$lib/components/layout/UseCases.svelte";
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import CenteredTextOnlyHero from "$lib/components/layout/hero-sections/CenteredTextOnlyHero.svelte";
</script>

<CenteredTextOnlyHero
  title="Compliant videos, shipped in hours—not weeks"
  subtitle="cQuenced transforms your existing video library into compliant, up-to-date content for CTV, social, and display channels. Achieve regulatory approval 50% faster and reduce production costs by up to 70%."
  imageSrc="https://images.unsplash.com/photo-1530982011887-3cc11cc85693?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
/>

<LogoScroller
  label="Trusted by industry leaders"
  logoUrls={[
    'https://cdn.brandfetch.io/pfizer.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7',
    'https://cdn.brandfetch.io/novartis.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7',
    'https://cdn.brandfetch.io/jnj.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7',
    'https://cdn.brandfetch.io/merck.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7',
    'https://cdn.brandfetch.io/sanofi.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7',
    'https://cdn.brandfetch.io/roche.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7',
    'https://cdn.brandfetch.io/gsk.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7',
    'https://cdn.brandfetch.io/astrazeneca.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7',
    'https://cdn.brandfetch.io/amgen.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7',
    'https://cdn.brandfetch.io/bms.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7'
  ]}
/>

<Summary
  title="What we do"
  text="cQuenced is an AI-powered platform that transforms existing video content into new, fully compliant, channel-ready assets—cutting approval times by 50 percent and production costs by up to 70 percent. Purpose-built for regulated industries, we help teams update, reuse, and release videos with full compliance and less manual work."
/>

<Testimonials
	testimonials={[
		{
			name: "Mira Langston",
			position: "Director of Brand Marketing",
			company: "Therabake Pharma",
			quote:
				"Before cQuenced, even minor edits triggered a two-week review cycle. Now we turn fully compliant campaign updates in two days. We’ve cut approval timelines in half—without adding headcount.",
			image: "/generated/image-a-female-pharmaceutical-executive-in-a-m.webp"
		},
		{
			name: "Reza Kim",
			position: "Head of Regulatory Affairs",
			company: "AlignMedical Health",
			quote:
				"All segments are compliance-tagged and audit-tracked from the start, so our MLR reviews move faster and fewer assets get kicked back. Risk went down, but our confidence went way up.",
			image: "/generated/image-a-male-fintech-compliance-manager-in-a-f.webp"
		},
		{
			name: "Bela Mendoza",
			position: "VP, Global Performance Marketing",
			company: "EquiaBank",
			quote:
				"We used to spend over $120K per campaign on net-new creative. Now we reuse and adapt what we already have—with matched channel specs and approvals baked in. Last quarter alone, we saved $65K.",
			image: "/generated/image-a-female-healthcare-marketing-director-i.webp"
		}
	]}
/>

<Features
  title="Purpose-built for compliance-first video transformation"
  subtitle="Everything enterprise teams need to reclaim content and reduce risk."
  features={[
    {
      title: "Modular AI video editing",
      description: "Turn long-form video into reusable, channel-ready clips with automatic segmentation for fast updates and strict trackability."
    },
    {
      title: "Full regulatory audit trails",
      description: "Every edit is tagged with compliance metadata for each segment—helping teams update, review, and approve assets with confidence."
    },
    {
      title: "Channel-ready output in two clicks",
      description: "Instantly generate compliant versions for CTV, social, and display, with synchronized claims and disclosures."
    },
    {
      title: "Integrations for how you work",
      description: "Connect with Veeva Vault, Adobe, Aprimo and CRMs to publish remixed videos automatically to your current review and asset systems."
    },
    {
      title: "Faster approvals, lower costs",
      description: "Cut review cycles by up to 50% and reduce production spend by up to 70% with every campaign."
    },
    {
      title: "Enterprise-grade security",
      description: "Meet every compliance, privacy, and audit requirement for pharma, healthcare, finance, and insurance workflows."
    }
  ]}
/>

<UseCases
  title="Use Cases"
  subtitle="Real-world applications for your business needs"
  useCases={[
    {
      title: "Campaign remixing",
      description: "Rebuild old campaigns with fresh messaging, regional disclosures, and new media briefs—without re-filming.",
      image: "/generated/image-a-diverse-group-of-professionals-in-a-mo.webp",
      link: {
        href: "/use-cases/campaign-remixing",
        label: "Learn more"
      }
    },
    {
      title: "Safety updates",
      description: "Roll out global clinical or risk language changes across hundreds of assets in just two clicks.",
      image: "/generated/image-an-attentive-compliance-officer-in-a-cor.webp",
      link: {
        href: "/use-cases/safety-updates",
        label: "Learn more"
      }
    },
    {
      title: "Segment search",
      description: "Find usable, compliant clips by storyline, claim, or imagery. Save hours in review.",
      image: "/generated/image-a-creative-team-in-a-vibrant-studio-spac.webp",
      link: {
        href: "/use-cases/segment-search",
        label: "Learn more"
      }
    }
  ]}
/>

<AboutTeaser />
<CallToAction
  title="Reimagine compliant video workflows"
  subtitle="Book a demo—see faster compliance in action"
  description="Turn your back-catalog of video into fully compliant, channel-ready content. Cut production costs by up to 70% and approval cycles by 50%. Purpose-built for pharmaceutical, healthcare, finance, and insurance teams."
  imageSrc="/generated/image-a-happy-professional-in-a-pharmaceutical.webp"
  callsToAction={[
    {
      href: "/contact",
      label: "Book a demo",
      variant: "primary"
    }
  ]}
/>
