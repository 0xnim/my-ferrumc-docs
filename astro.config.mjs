// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs',
			social: {
				github: 'https://github.com/ferrumc-rs/ferrumc',
			},
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Getting Started', slug: 'start/getting_started' },
						{ label: 'Installation', slug: 'start/installation' },
						{ label: 'Migrate', slug: 'start/migrate' },
					],
				},
				{
					label: 'About',
					items: [
						{label: 'Introduction', slug: 'about/introduction'},
						{label: 'FAQ', slug: 'about/faq'},
						{label: 'Comparison', slug: 'about/comparison'},
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
