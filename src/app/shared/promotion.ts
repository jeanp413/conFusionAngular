export class Promotion {
    id: number;
    name: string;
    image: string;
    label: string;
    price: string;
    featured: boolean;
    description: string
}

export const PROMOTIONS: Promotion[] = [
    {
        id: 0,
        name: 'Weekend Grand Buffet',
        image: '/assets/images/buffet.png',
        label: 'New',
        price: '19.99',
        featured: true,
        description: 'Featuring mouth watering combinations with choice of five different salads, six enticing appetizers, six main entrees and five choicest dessets. Free flowing bubbly and soft drinks. All for just $19.99 per person.'
    }
];