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
import ProjectLinks from '../../components/project-links';
import ImageSlideshow from '../../components/image-slideshow';
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
	const projectTags = Object.keys(frontmatter.tags).map(key => [frontmatter.tags[key]]);

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
						src={'/static/' + frontmatter.headerImage}
						alt="Picture of the author"
						layout={'responsive'}
						width={1500}
						height={800}
					/>
				</div>
				<div className="w-full prose">
					{/* header section */}
					<div className="flex flex-col items-center pt-4 text-center lg:pt-8 xl:prose-lg font-body">
						<h3 className="font-bold">{frontmatter.title}</h3>
						<p>{frontmatter.description}</p>
						<div>
							<ProjectLinks projectLinks={frontmatter.links} projectName={frontmatter.title} />
						</div>
					</div>
					{/* body section */}
					<div className="flex flex-col py-4 mx-auto font-roboto">
						<p className="mb-0" dangerouslySetInnerHTML={{ __html: md().render(content) }} />
						{/* <div>
							{
								<ul className="flex justify-center py-0 my-0">
									{projectTags.map((tag, index) => (
										<li
											className="flex items-center px-3 py-1 mx-4 text-sm font-bold border rounded-full leading-sm"
											key={index}>
											{tag}
										</li>
									))}
								</ul>
							}
						</div> */}
					</div>
					<div className="pb-8 mt-8 lg:mt-16 md:pb-12 lg:pb-16 xl:pb-24">
						<ImageSlideshow slideshowImageList={frontmatter.slideshowImages} />
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default ProjectPage;
