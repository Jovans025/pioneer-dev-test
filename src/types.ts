type PlaceQuery = {
    action: string;
    parameters: {
        near: string;
        query: string;
        price: string;
        open_now: boolean;   
    };
}
type Place = {
    fsq_id: string;
    name: string;
    description: string;
    location: {
        address: string;
    },
    categories: Array<{name: string}>,
    rating: number,
    price: string,
    hours_popular: Array<{day: number, open: string, close: string}>;
}