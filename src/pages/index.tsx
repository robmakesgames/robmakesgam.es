/**
 * index.tsx
 * Rob Barton
 *
 * Website homepage.
 */
import type { NextPage } from 'next';
import { pageMetaDataInterface } from '../common/types';
import Layout from '../components/layout';
import ProjectGallery from '../components/project-gallery';

interface PageProps {
	projects: any;
}

/**
 * metadata passed to the Layout component and used
 * in '@next/next-head'
 */
const indexMetaData: pageMetaDataInterface = {
	title: 'index',
	desc: 'Personal website portfolio to showcase my game development work',
};

const Home: NextPage<PageProps> = () => {
	return (
		<Layout pageMetaData={indexMetaData}>
			<main>
				<ProjectGallery />
			</main>
		</Layout>
	);
};

export default Home;
