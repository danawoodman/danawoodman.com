<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";

	const technologies = [
		{
			image: "react",
			title: "React and React Native",
			href: "https://reactjs.org",
		},
		{ image: "svelte", title: "Svelte", href: "https://svelte.dev" },
		{ image: "node", title: "Node.js", href: "https://nodejs.org" },
		{
			image: "typescript",
			title: "TypeScript",
			href: "https://www.typescriptlang.org",
		},
		{
			image: "tailwind",
			title: "TailwindCSS",
			href: "https://tailwindcss.com",
		},
		{ image: "golang", title: "Golang", href: "https://go.dev" },
		{
			image: "html5",
			title: "HTML5",
			href: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
		},
		{
			image: "css3",
			title: "CSS3",
			href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
		},
		{
			image: "postgres",
			title: "PostgreSQL",
			href: "https://www.postgresql.org",
		},
		{ image: "mongo", title: "MongoDB", href: "https://www.mongodb.com" },
		{ image: "jest", title: "Jest", href: "https://jestjs.io" },
		{ image: "figma", title: "Figma", href: "https://www.figma.com" },
		{ image: "git", title: "git", href: "https://git-scm.com" },
	];
</script>

<main>
	<div class="px-8">
		<Header />
	</div>

	<section class="bg-slate-100 py-20 md:py-32 px-8">
		<div class="max-w-4xl mx-auto">
			<header class="mb-8">
				<!-- <h1 class="font-mono mb-2">Hi, I'm Dana and...</h1> -->
				<h1
					class="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-teal-500 hero-heading"
				>
					I build for the web.
				</h1>
			</header>

			<div class="max-w-prose text-slate-700">
				<!-- I think I can best be described as a builder. Over the past 15 years, I've worked on a huge array of projects, from dozens of web applications (SaaS, B2B/B2C, internal tools), mobile apps (React Native), desktop apps (Electron), CLI tools (Golang, Node.js), APIs (REST, GraphQL, WebSockets in a variety of languages) with various persistence layers (MongoDB, SQL, graph DBs) and even interactive art sculptures and a hardware RFID security system.  

I've built startups from scratch (as a founder and as a CTO-for-hire consultant) and I've worked with large enterprises and teams, working on products that see millions of unique users a month. I understand the variety of pieces that must come together to build a great software business. 

I care particularly about software craftsmanship including code quality, legibility, testability, building future-proof systems and processes, and clear communication and documentation. I know how to tread the fine line between business and development priorities and have lots of experience collaborating with teammates in all departments (UI, UX, devops, sales, biz dev, you name it). I feel psychological safety, using the best tools available, removing obstacles/bureaucracy and setting clear leadership direction are critical for success.

The current set of tools and technologies that excite me are Svelte/SvelteKit, React/Next.js, TypeScript, Node.js, TailwindCSS, and serverless/edge computing (in particular with CloudFlare, Vercel, and Netlify).

You can find me at @danawoodman on Twitter and Github or my website https://danawoodman.com. -->
				<p class="leading-relaxed mb-4 text-lg md:text-xl lg:text-2xl">
					I'm a senior full-stack software developer working with React, Svelte,
					TypeScript, Node and the web platform.
				</p>
				<p class="leading-relaxed mb-4 text-md md:text-lg">
					I've built a little bit of everything, from numerous web apps/APIs,
					mobile applications, embedded devices, and even interactive art
					sculptures.
				</p>
				<p class="leading-relaxed text-md md:text-lg">
					Outside of tech, I'm an avid travel, outdoorsman and community
					builder. I founded <a href="https://chimeraarts.org" class="link"
						>Chimera</a
					>, the first makerspace north of San Francisco, and two Meetup groups
					<a href="https://www.meetup.com/Hack-Sonoma-County/" class="link"
						>Hack Sonoma County</a
					>
					and
					<a
						href="https://www.meetup.com/norcal-javascript-hackers/"
						class="link">NorCal.js</a
					>
				</p>
				<p class="mt-8">
					<a href="/resume" target="_blank" class="btn">View my porfolio</a>
					<a href="#contact" class="link ml-8">Get in touch</a>
				</p>
			</div>
		</div>
	</section>

	<section class="py-16">
		<header class="text-center mb-6">
			<h1
				class="text-2xl uppercase font-heading tracking-widest text-slate-600 mb-4"
			>
				Technologies
			</h1>
			<p class="leading-relaxed text-slate-500">
				I've used a lot of technologies over the years. Below is a list of some
				of my favorite and most current skills.
			</p>
		</header>
		<ul class="flex items-center justify-center flex-wrap max-w-2xl mx-auto">
			{#each technologies as tech}
				<li class="p-6">
					<a href={tech.href} target="_blank">
						<img
							src={`/icons/${tech.image}.svg`}
							class="h-12 transition-transform scale-100 hover:scale-125"
							alt={tech.title}
							title={tech.title}
						/></a
					>
				</li>
			{/each}
		</ul>
	</section>

	<div class="px-8">
		<Footer />
	</div>
</main>

<style lang="postcss">
	.link {
		@apply text-emerald-600 hover:text-emerald-800 hover:underline inline-block transition-all scale-100 hover:scale-105;
	}
	.btn {
		@apply inline-block leading-none px-8 py-4 bg-emerald-500 text-white hover:bg-emerald-600 rounded-full transition-all scale-100 hover:scale-110;
	}

	.hero-heading {
		animation: raised-letters 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both,
			rainbow 30s steps(120) infinite;
	}

	@keyframes raised-letters {
		0% {
			transform: translateY(0);
			transform-origin: 50% 50%;
			text-shadow: none;
		}
		100% {
			transform: translateY(-10px);
			transform-origin: 50% 50%;
			text-shadow: 0 9px 0 white, 0 30px 10px rgba(0, 0, 0, 0.1);
		}
	}

	@keyframes rainbow {
		from {
			filter: hue-rotate(10deg);
		}
		to {
			filter: hue-rotate(360deg);
		}
	}
</style>
