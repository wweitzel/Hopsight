export interface Location {
    brewery_city?: string;
    brewery_state?: string;
}

export interface Brewery {
    brewery_id: number;
    brewery_name: string;
    location?: Location;
}