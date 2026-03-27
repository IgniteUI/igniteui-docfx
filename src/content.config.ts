import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { pathToFileURL } from 'node:url';

const docsDir = process.env.DOCS_SOURCE_PATH || './src/content/en';

export const collections = {
	docs: defineCollection({
		loader: glob({
			base: pathToFileURL(docsDir.endsWith('/') ? docsDir : docsDir + '/'),
			pattern: '**/*.{md,mdx}',
		}),
		schema: docsSchema(),
	}),
};
