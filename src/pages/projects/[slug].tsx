/**
 * [slug].tsx
 * Rob Barton
 *
 * Dynamically creates pages based on my projects
 */
import Image from 'next/image';
import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

import Layout from '../../components/layout';
import { pageMetaDataInterface } from '../../common/types';

/**
 * Pre render all project paths
 * @returns {path, fallback}
 */
export async function getStaticPaths() {
	const files = fs.readdirSync('./content/projects');
	const paths = files.map(fileName => ({
		params: {
			slug: fileName.replace('.md', ''),
		},
	}));
	return {
		paths,
		fallback: false,
	};
}

/**
 * Gets all projects stored in /content/projects and returns them
 * as props
 * @param slug project slug
 * @returns {props} project frontmatter and project content
 */
export async function getStaticProps({ params: { slug } }) {
	const fileName = fs.readFileSync(`./content/projects/${slug}.md`, 'utf-8');
	const { data: frontmatter, content } = matter(fileName);
	return {
		props: {
			frontmatter,
			content,
		},
	};
}

/**
 * Individual project page
 * @param frontmatter project frontmatter
 * @param content project content
 */
const ProjectPage = ({ frontmatter, content }) => {
	/**
	 * metadata passed to the Layout component and used
	 * in '@next/next-head'
	 */
	const projectPageMetaData: pageMetaDataInterface = {
		title: `${frontmatter.title}`,
		desc: `${frontmatter.description}`,
	};
	return (
		<Layout pageMetaData={projectPageMetaData}>
			<section className="flex flex-col items-center px-2 py-4 md:py-8 sm:px-4">
				{/* image section */}
				<div className="block w-full h-auto">
					<Image
						className="h-8"
						src={'/static/' + frontmatter.socialImage}
						alt="Picture of the author"
						layout={'responsive'}
						width={1500}
						height={800}
					/>
				</div>
				<div className="w-full prose xl:prose-lg prose-ul:p-0 xl:prose-ul:p-0 prose-li:p-0 xl:prose-li:p-0 prose-h3:m-0 xl:prose-h3:m-0 prose-p:m-0 xl:prose-p:m-0">
					{/* header section */}
					<div className="flex flex-col items-center pt-12 pb-4 text-center font-body">
						<h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">{frontmatter.title}</h3>
						<p>{frontmatter.description}</p>
					</div>
					{/* body section */}
					<div className="flex flex-col py-4 font-roboto">
						<p dangerouslySetInnerHTML={{ __html: md().render(content) }}></p>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default ProjectPage;
