export type Article = {
	slug: string;
	title: string;
	date: string;
	body: string[];
};

export const articles: Article[] = [
	{
		slug: 'hello',
		title: 'シピルカくん集会のサイトを開設',
		date: '2026-01-04T12:38:37+09:00',
		body: ['シピルカくん集会のサイトを作成しました。', 'よろしくお願いします！'],
	},
];
