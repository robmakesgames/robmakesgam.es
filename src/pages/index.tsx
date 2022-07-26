/**
 * index.tsx
 * Rob Barton
 *
 * Website homepage.
 */
import type { GetStaticProps, NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { pageMetaDataInterface } from '../common/types';
import Layout from '../components/layout';
import ProjectShowcase from '../components/project-showcase';
import Hero from '../components/hero';

/**
 * Gets all projects stored in /content/projects and returns them
 * as props
 * @returns {props} projects as props
 */
export const getStaticProps: GetStaticProps = async () => {
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
};

/**
 * metadata passed to the Layout component and used
 * in '@next/next-head'
 */
export const indexMetaData: pageMetaDataInterface = {
	title: 'index',
	desc: 'Personal website portfolio to showcase my game development work',
};

/**
 * Website homepage
 * @param projects all projects returned from getStaticProps()
 */
const Home = ({ projects }) => {
	return (
		<Layout pageMetaData={indexMetaData}>
			<main>
				<Hero />
				<ProjectShowcase projects={projects} />
			</main>
		</Layout>
	);
};

export default Home;
