export type Event = {
	slug: string;
	title: string;
	date: string;
	tags?: string[];
	tweet?: string;
};

export const events: Event[] = [
	{
		slug: '2026-01-18',
		title: '第9回シピルカくん集会',
		date: '2026-01-18T21:30:00+09:00',
		tweet: '2007825201376182374',
		tags: ['VRChat', 'シピルカくん集会'],
	},
	{
		slug: '2025-07-27',
		title: '第8回シピルカくん集会',
		date: '2025-07-27T21:30:00+09:00',
		tweet: '1947815239791325220',
		tags: ['VRChat', 'シピルカくん集会'],
	},
];
