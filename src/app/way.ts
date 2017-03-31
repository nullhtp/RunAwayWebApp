export class Way {
    id: number;
    name: string;
    category: Category;
    city: City;
    points: Point[];
    likes: number;
    description: string;
    distance: number;


    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.category = new Category;
    };
}

export class Point {

    latitude: string;
    longitude: string;
    description: string; 
}

export class Category {
    id: number;
    name: string;
    icon: string;
}

export class City {
    id: string;
    name: string;
    regionName: string;
}