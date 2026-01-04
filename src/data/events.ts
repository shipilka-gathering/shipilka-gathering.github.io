export type Event = {
	slug: string;
	title: string;
	date: string;
	description?: string;
	tags?: string[];
	xPost?: string;
	content?: string[];
};

export const events: Event[] = [
	{
		slug: '2026-01-18',
		title: '第9回シピルカくん集会',
		date: '2026-01-18T13:43:40+09:00',
		description: '詳細は近日公開予定です。基本ルールを確認してお待ちください。',
		tags: ['VRChat', '集会'],
		content: ['集会の参加ルールを以下に掲載しています。'],
	},
	{
		slug: '2025-07-27',
		title: '第8回シピルカくん集会',
		date: '2025-07-27T21:30:00+09:00',
		description: 'Xで告知した過去回のアーカイブです。',
		xPost: 'https://x.com/Shipilka_club/status/1947815239791325220',
		tags: ['VRChat', '集会'],
		content: ['当日はスタッフの案内に従ってください。'],
	},
];
