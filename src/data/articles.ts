export type Article = {
	slug: string;
	title: string;
	date: string;
	body: string[];
};

export const articles: Article[] = [
	{
		slug: 'hello-world',
		title: 'Hello World',
		date: '2026-01-04T12:38:37+09:00',
		body: ['OK', 'This is my first article.', 'Welcome to my blog!'],
	},
];
