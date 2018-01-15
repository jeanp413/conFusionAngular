export class Leader {
    id: number;
    name: string;
    image: string;
    designation: string;
    abbr: string;
    featured: boolean;
    description: string
}

export const LEADERS: Leader[] = [
    {
        id: 0,
        name: 'Peter Pan',
        image: '/assets/images/alberto.png',
        designation: 'Chief Epicurious Officer',
        abbr: 'CEO',
        featured: false,
        description: "Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the ardous journey to the shores of America with the intention of giving their children the best future. His mother's wizardty in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural connections."
    },
    {
        id: 1,
        name: 'Dhanasekaran Witherspoon',
        image: '/assets/images/alberto.png',
        designation: 'Chief Food Officer',
        abbr: 'CFO',
        featured: false,
        description: "Our CEO, Danny, credits his hardworking East Asian immigrant parents who undertook the ardous journey to the shores of America with the intention of giving their children the best future. His mother's wizardty in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural connections."
    },
    {
        id: 2,
        name: 'Agumbe Tang',
        image: '/assets/images/alberto.png',
        designation: 'Chief Taste Officer',
        abbr: 'CTO',
        featured: false,
        description: "Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the ardous journey to the shores of America with the intention of giving their children the best future. His mother's wizardty in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural connections."
    },
    {
        id: 3,
        name: 'Alberto Somaya',
        image: '/assets/images/alberto.png',
        designation: 'Executive Chief',
        abbr: 'EC',
        featured: true,
        description: "Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the ardous journey to the shores of America with the intention of giving their children the best future. His mother's wizardty in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural connections."
    }
];