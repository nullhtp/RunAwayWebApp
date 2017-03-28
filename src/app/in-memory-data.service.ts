import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let ways = [
            {
                id: 1,
                name: 'Mr. Nice',
                category: {
                    id: 1,
                    name: "Бег"
                },
                city: {
                    id: "1",
                    name: "Kenigsberg"
                },
            },
            {
                id: 2,
                name: 'Narco',
                category: {
                    id: 2,
                    name: "Прогулка"
                },
            },
            {
                id: 3,
                name: 'Bombasto',
                category: {
                    id: 3,
                    name: "Велосипед"
                },
            },
            {
                id: 4,
                name: 'Celeritas',
                category: {
                    id: 1,
                    name: "Бег"
                },
            },
            {
                id: 5,
                name: 'Magneta',
                category: {
                    id: 2,
                    name: "Прогулка"
                },
            },
            {
                id: 6,
                name: 'RubberMan',
                category: {
                    id: 3,
                    name: "Велосипед"
                },
            },
            {
                id: 7,
                name: 'Dynama',
                category: {
                    id: 1,
                    name: "Бег"
                },
            },
            {
                id: 8,
                name: 'Dr IQ',
                category: {
                    id: 2,
                    name: "Прогулка"
                },
            },
            {
                id: 9,
                name: 'Magma',
                category: {
                    id: 3,
                    name: "Велосипед"
                },
            },
            {
                id: 10,
                name: 'Tornado',
                category: {
                    id: 1,
                    name: "Бег"
                },
            }
        ];
        return { ways };
    }
}