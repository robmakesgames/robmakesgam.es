/**
 * index.tsx
 * Rob Barton
 *
 * Website homepage.
 */
import type { NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { projectInterface } from '../common/types';

import { pageMetaDataInterface } from '../common/types';
import Layout from '../components/layout';
import ProjectShowcase from '../components/project-gallery';

/**
 *
 * @returns
 */
export async function getStaticProps() {
	const files = fs.readdirSync(path.join('content/projects'));
	const projects = files.map(filename => {
		const slug = filename.replace('.md', '');
		const markdownWithMeta = fs.readFileSync(path.join('content/projects', filename), 'utf-8');
		const { data: frontmatter } = matter(markdownWithMeta);
		return {
			slug,
			frontmatter,
		};
	});

	return {
		props: {
			projects: projects,
		},
	};
}

/**
 * metadata passed to the Layout component and used
 * in '@next/next-head'
 */
const indexMetaData: pageMetaDataInterface = {
	title: 'index',
	desc: 'Personal website portfolio to showcase my game development work',
};

export default function Home({ projects }: any) {
	return (
		<Layout pageMetaData={indexMetaData}>
			<main>
				<ProjectShowcase projects={projects} />
			</main>
		</Layout>
	);
}
