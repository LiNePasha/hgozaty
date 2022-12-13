interface Image {
    _key: string;
    _type:"image";
    asset: {
        url: string;
    };
}

interface Category {
    _id: string;
    _createdAt: string;
    _updateAt: string;
    _rev: string;
    _type: "category";
    slug: {
        _type: "slug";
        current: string;
    };
    title: string;
    images: Image[];
}

interface Product {
    _id: string;
    _createdAt: string;
    _updateAt: string;
    _rev: string;
    _type: "category";
    slug: {
        _type: "slug";
        current: string;
    };
    title: string;
    price: number;
    categoryTitle: string;
    rooms: number;
    bathrooms: number;
    description: string;
    unitsSpace: string;
    typesUnits: string;
    payment: string;
    pro: any[];
    category: {
        _type: "reference";
        _ref: string;
    };
    images: Image[];
}