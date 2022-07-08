<script lang="ts">
	import Footer from '$lib/components/Footer.svelte'
	import Header from '$lib/components/Header.svelte'

	export const prerender = true

	const skills = {
		languages: [
			'JavaScript (12yr)',
			'Typescript (3yr)',
			'Golang (3yr)',
			'HTML5 (15yr)',
			'CSS3/LESS/SASS (15yr)',
		],
		tools: [
			'React (7yr)',
			'React Native (2yr)',
			'Node.js (8yr)',
			'Svelte (2yr)',
			'Express.js',
			'Redux',
			'TailwindCSS',
		],
		other: [
			'Testing (Jest/Vitest/Cypress/Playwright)',
			'TDD/BDD',
			'CI/CD pipelines',
			'Databases (PostgresSQL/SQLite/MongoDB)',
			'Serverless/Edge/traditional computing (Cloudflare/AWS/Vercel/Heroku)',
			'git (12yr)',
			'Figma',
			'i18n',
			'a11y',
		],
	}
	const featured = [
		{
			role: 'Consultant',
			name: 'Zenni Optical',
			dates: ['June 2021', 'Feb* 2022'],
			url: 'https://www.zennioptical.com',
			description:
				"World's leading online prescription glass e-commerce store.",
			highlights: [
				'Led a homepage rewrite which improved key conversion metrics by 25% for their ~7mm monthly visitors.',
				'Increased their page speed by 17% on mobile, 32% on desktop. Scored 92% on accessibility.',
				'Identified key areas of performance impact across other pages, resulting in 50%+ page speed increases on some pages.',
				'Developed architecture within a legacy system enhancing developer speed, productivity and easing maintenance burdens.',
			],
			technologies: ['Svelte', 'JavaScript', 'a11y', 'Optimizely'],
		},
		{
			role: 'CTO',
			name: 'ChainList (formerly Bonsai)',
			dates: ['March 2020', 'March 2021'],
			url: 'https://www.chainlist.com',
			description:
				'A "smart checklist" SaaS product with checklist "templates", scheduling, version control, auto-assignment, and more.',
			highlights: [
				'Worked with CEO to define a product vision, roadmap and visual brand including a React and Figma UI library.',
				'Architected an elegant approach to complex event scheduling backed by robust unit testing (Jest).',
				'Created a lightweight embeddable widget (think Twitter Card) for sharing checklists including OEmbed API and Open Graph tags for link sharing.',
			],
			technologies: [
				'React',
				'Next.js',
				'Svelte',
				'MongoDB',
				'GraphQL',
				'TypeScript',
			],
		},
		{
			role: 'VP of Web and Mobile',
			name: 'remote.it',
			dates: ['June 2018', 'Feb 2020'],
			url: 'https://remote.it',
			description:
				'A SaaS product to enable secure remote connections to devices anywhere in the world without port-forwarding.',
			highlights: [
				'Increased the addressable market of customers and reduced user pain-points by creating a suite of cross-platform applications (React Native mobile app, React + Electron desktop app, Golang CLI)',
				'Defined product direction for a team of 4 senior developers, established best practices (CI/testing/code review), and built a UI toolkit (React + Storybook) to standardize our design across products.',
				'Built a CLI that managed device registations, service processes, and system services that worked consistently across operating systems.',
				'Managed 12 interns (yes, you read that right) and got them pushing meaningful code to production within their first week.',
			],
			technologies: [
				'React',
				'React Native',
				'Electron',
				'Golang',
				'TypeScript',
				'Node.js',
			],
		},
	]
	const sections = {
		additional: {
			label: 'Additional Experience',
			items: [
				{
					name: 'Consulting',
					description:
						'Managed my own consulting company for over 10 years including client development, administration, and managing remote contractors working with a variety of industries, product types and team dynamics.',
				},
				{
					name: 'MEX Assistant',
					description:
						"Built a Chrome browser extension (Svelte) and a web app (Sapper, Gumroad, Auth0) and backend that managed signups and subscriptions that gave crypto traders advanced tools. Developed a real-time sync between the exchange's UI (updates multiple times a second) and the extension, while making this process robust yet simple.",
					url: 'https://mex-assistant.com',
				},
				{
					name: 'Google',
					description:
						'Built a Ruby on Rails API service for a mobile app for the Think with Google event series including chat and calendar features.',
					url: 'https://www.thinkwithgoogle.com',
				},
				{
					name: 'Contactly',
					description:
						'Co-founder of a SaaS product (React Chrome Extension, Node + Express + MongoDB web app) that allowed customers to find leads via LinkedIn as well as an advanced system for generating and testing possible email addresses using telnet and other techniques.',
				},
				{
					name: 'Bonafide',
					description:
						'Developed a UI toolkit (React + utility CSS) to help their dev team migrate their 4mm+ LOC codebase and a plan for progressively migrating the UI without interfering with their existing business initiatives.',
					url: 'https://www.bonafide.com',
				},
				{
					name: 'SunEdison',
					description:
						'Lead a migration of a legacy codebase to React for their core product, a global solar dashboard system.',
				},
				{
					name: 'ExtendSketchUp',
					description:
						'Founded the first ever SketchUp plugin marketplace (Django) and companion Ruby plugin that made installing a one-click process compared to an incredibly clunky process. The plugin and web app allowed users to search and browse based on search query, category, rating and other factors.',
				},
				{
					name: 'Other notable work',
					description:
						'Realtime event management system and label printing system. Printshop managemnt system (React, Node, Postgres). Learning managment platform (React, Node, Neo4j). Shopify app for customizable products (React, Node).',
				},
			],
		},
		personal: {
			label: 'Personal Experience',
			items: [
				{
					name: 'CNC machining control system',
					description:
						'A tool for hobbyist makers (React + WebSockets + Arduino) including real-time syncing of machine location and state and a tool to send GCODE (manual or files) to the machine to run jobs.',
				},
				{
					name: 'RFID security access control system',
					description:
						'Synced with a membership database to allow entry using RFID cards (Golang + RaspberryPi + Arduino) to our makerspace, including a visual feedback UI (React).',
				},
			],
		},
		oss: {
			label: 'Open Source Experience',
			items: [
				{
					name: 'react-fontawesome',
					description:
						'Managed the most used FontAwesome library for React (~670 Github stars, 12mm total npm downloads), prior to FontAwesome releasing their own official React components.',
					url: 'https://github.com/danawoodman/react-fontawesome',
				},
				{
					description:
						'10+ yr involvement in Open Source with ~70 repos on my Github and a collection of packages published on npm.',
				},
			],
		},
		community: {
			label: 'Speaking, Writing & Community',
			items: [
				{
					name: 'Meetups',
					description:
						'Co-founded <a href="https://www.meetup.com/Hack-Sonoma-County" target="_blank">Hack Sonoma County</a> and <a href="https://www.meetup.com/Norcal-Javascript-Hackers" target="_blank">NorCal.js</a> meetup groups. Organized and presented at dozens of meetups as well as writing content on <a href="https://dev.to/danawoodman" target="_blank">Dev.to</a> and <a href="https://danawoodman.com" target="_blank">my blog</a>.',
				},
				{
					name: 'Chimera Makerspace',
					description:
						'Founded the first community makerspace north of San Francisco. Grew it to 250+ paying members and a team of volunteer staff in a 3k+ sq.ft. facility.',
					url: 'https://chimeraarts.org',
				},
				{
					name: 'Nation of Makers',
					description:
						"Invited to a national makerspace convention at President Obama's White House. Selected for a 7-person steering committee to form the organization and secure funding and board members of a new national organization serving makerspaces.",
					url: 'https://www.nationofmakers.us',
				},
			],
		},
		other: {
			label: 'Other Experience',
			items: [
				{
					name: 'SonomaFireInfo.org',
					description:
						'Co-founded a disaster response site that served the most up-to-date information during the 2017 Northern California wildfires to over 170k people with a team of 60+ volunteers.',
					url: 'https://sonomafireinfo.org',
				},
				{
					name: 'Meter Made Sculpture',
					description:
						'Created the first interactive light sculpture to be installed in downtown Santa Rosa, California. The solar powered sculpture featured hundreds of LEDs controlled by a cellular connected Arduino microcontroller.',
				},
			],
		},
	}
</script>

<Header />

<main>
	<header class="flex items-center mb-4">
		<div>
			<h1 class="text-2xl font-bold">
				<span class="enlarge">D</span>ANA <span class="enlarge">W</span>OODMAN
			</h1>
			<h2 class="text-lg text-gray-600">Senior full-stack software engineer</h2>
		</div>
		<nav class="ml-auto prose flex flex-col">
			<span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					width="16"
					class="mr-2 inline-block text-gray-400"
				>
					<path
						d="M207.8 20.73c-93.45 18.32-168.7 93.66-187 187.1c-27.64 140.9 68.65 266.2 199.1 285.1c19.01 2.888 36.17-12.26 36.17-31.49l.0001-.6631c0-15.74-11.44-28.88-26.84-31.24c-84.35-12.98-149.2-86.13-149.2-174.2c0-102.9 88.61-185.5 193.4-175.4c91.54 8.869 158.6 91.25 158.6 183.2l0 16.16c0 22.09-17.94 40.05-40 40.05s-40.01-17.96-40.01-40.05v-120.1c0-8.847-7.161-16.02-16.01-16.02l-31.98 .0036c-7.299 0-13.2 4.992-15.12 11.68c-24.85-12.15-54.24-16.38-86.06-5.106c-38.75 13.73-68.12 48.91-73.72 89.64c-9.483 69.01 43.81 128 110.9 128c26.44 0 50.43-9.544 69.59-24.88c24 31.3 65.23 48.69 109.4 37.49C465.2 369.3 496 324.1 495.1 277.2V256.3C495.1 107.1 361.2-9.332 207.8 20.73zM239.1 304.3c-26.47 0-48-21.56-48-48.05s21.53-48.05 48-48.05s48 21.56 48 48.05S266.5 304.3 239.1 304.3z"
						fill="currentColor"
					/>
				</svg>

				<a href="mailto:dana@danawoodman.com" target="_blank">
					dana@danawoodman.com
				</a>
			</span>
			<span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					width="16"
					class="mr-2 inline-block text-gray-400"
				>
					<path
						d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
						fill="currentColor"
					/>
				</svg>
				<a href="https://linkedin.com/in/danawoodman" target="_blank"
					>linkedin.com/in/danawoodman</a
				>
			</span>
			<span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 496 512"
					width="16"
					class="mr-2 inline-block text-gray-400"
				>
					<path
						d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
						fill="currentColor"
					/>
				</svg>
				<a href="https://github.com/danawoodman" target="_blank"
					>github.com/danawoodman</a
				>
			</span>
		</nav>
	</header>

	<section
		class="print:float-right lg:float-right print:pl-10 lg:pl-10 print:bg-white lg:bg-white mb-6"
	>
		<div
			class="print:max-w-sm lg:max-w-sm bg-gray-50 p-6 border-l-4 border-gray-200 text-sm"
		>
			<h1 class="text-lg font-bold uppercase">
				<span class="enlarge">S</span>kills
			</h1>
			{#each Object.keys(skills) as type}
				<h2 class="uppercase font-bold mt-4 mb-1">{type.toUpperCase()}</h2>
				<ul>
					{#each skills[type] as skill, i}
						{@const last = skills[type].length - 1}
						<li class="inline-block mr-2">
							{skill}{#if last !== i}, {/if}
						</li>
					{/each}
				</ul>
			{/each}
		</div>
	</section>

	<h2 class="section-title">
		<span class="enlarge">W</span>ork <span class="enlarge">E</span>xperience
	</h2>
	{#each featured as project}
		<article class="my-6">
			<header>
				{#if project.dates?.length}
					<small class="text-sm float-right font-normal text-gray-400">
						<timestamp>{project.dates[0]}</timestamp>
						{#if project.dates[1] && project.dates[0] !== project.dates[1]}
							<span class="mx-1">&#8594;</span>
							<timestamp>{project.dates[1]}</timestamp>
						{/if}
					</small>
				{/if}
				<h1 class="mb-1 text-lg font-bold prose">
					{project.role} @
					{#if project.url}
						<a href={project.url} target="_blank">{project.name}</a>
					{:else}
						{project.name}
					{/if}
				</h1>
				<p class="text-gray-700"><em>{project.description}</em></p>
			</header>
			<ul class="list">
				{#each project.highlights as highlight}
					<li>{highlight}</li>
				{/each}
			</ul>
		</article>
		{#if project.technologies?.length}
			<ul class="flex items-center">
				{#each project.technologies as technology}
					<li
						class="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full uppercase mr-2 text-xs whitespace-nowrap"
					>
						{technology}
					</li>
				{/each}
			</ul>
		{/if}
	{/each}
	<p class="mt-3 text-gray-500">
		<small
			><em
				>* Work gap for Feb-June 2022 explanation: Took a 4 month sabbatical to
				sail across the Pacific ocean from Panama to French Polynesia.</em
			></small
		>
	</p>

	{#each Object.entries(sections) as [key, section], i}
		<section>
			<h2 class="section-title">
				{section.label}
			</h2>
			<ul class="list" class:!mb-0={Object.keys(sections).length - 1 === i}>
				{#each section.items as project}
					<li>
						<strong class="prose">
							{#if project.url}
								<a href={project.url} target="_blank">{project.name}</a>:
							{:else if project.name}
								{project.name}:
							{/if}
						</strong>
						<span class="prose">{@html project.description}</span>
					</li>
				{/each}
			</ul>
		</section>
	{/each}
</main>
<Footer />

<style lang="postcss">
	.enlarge {
		font-size: 1.2em;
	}

	.section-title {
		@apply text-lg uppercase font-bold border-b border-gray-200 pb-1 mt-6 mb-4;
	}

	.list {
		@apply list-[square] ml-6 my-3 leading-snug;
	}
	.list li {
		@apply text-gray-700 leading-snug my-2;
	}
	.list::marker {
		@apply text-gray-300;
	}

	@media screen {
		:global(body) {
			@apply max-w-4xl mx-auto px-8;
		}
		main {
			@apply mt-12;
		}
	}

	@media print {
		:global(html),
		:global(body) {
			font-size: 12px;
		}
		:global(#page-header),
		:global(#page-footer) {
			@apply hidden;
		}
		:global(#article-title) {
			@apply mb-2 text-xl;
		}
		:global(#article-content) {
			@apply mx-0 max-w-none;
		}
		:global(.prose) {
			@apply max-w-none;
		}
	}
</style>
