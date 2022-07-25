/**
 * metadata of each web page
 */
export interface pageMetaDataInterface {
	title: string;
	desc: string;
}

export interface projectFrontmatterInterface {
	title: string;
	description: string;
	socialImage: string;
	slideshowImages: object;
	category: string;
	tags: object;
	links: object;
}

export interface projectInterface {
	slug: any;
	frontmatter: any;
}
