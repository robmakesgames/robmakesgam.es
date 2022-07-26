/**
 * project-links.tsx
 * Rob Barton
 *
 * Generates links based on the content supplied in the project
 * MD file.
 */

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
const ProjectLinks = ({ projectLinks, projectName }) => {
	let linkElements: any = [];
	projectLinks.forEach(function (item, index) {
		if (item.toLowerCase() == 'github') {
			linkElements.push(
				<Link href={buildGithubLink(projectName)}>
					<a>
						<FaGithub />
					</a>
				</Link>
			);
		} else if (item == 'demo') {
		}
	});

	return <div>{linkElements}</div>;
};

function buildGithubLink(projectName) {
	return `https://www.github.com/rob4everever/${projectName.split(' ').join('-')}`;
}

export default ProjectLinks;
