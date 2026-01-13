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
		date: '2026-01-18T21:30:00+09:00',
		description: '',
		tags: ['VRChat', 'シピルカくん集会'],
		content: ['明けましておめでとうございます。今年もシピルカくん集会をよろしくお願いします☆', '1月18日（日） に「第9回シピルカくん集会」を開催いたします。集会の詳細および行動規範については、以下のツリーをご確認ください。皆様のご参加をお待ちしております！'],
	},
	{
		slug: '2025-07-27',
		title: '第8回シピルカくん集会',
		date: '2025-07-27T21:30:00+09:00',
		description: 'Xで告知した過去回のアーカイブです。',
		xPost: 'https://x.com/Shipilka_club/status/1947815239791325220',
		tags: ['VRChat', 'シピルカくん集会'],
		content: ['当日はスタッフの案内に従ってください。'],
	},
];
