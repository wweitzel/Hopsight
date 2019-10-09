import { Brewery } from './brewery.model';

export interface Beer {
    bid?: number;
    beer_name?: string;
    beer_abv?: string;
    rating_count?: number;
    rating_score?: number;
    beer_ibu?: number;
    brewery?: Brewery;
    beer_description?: string;
    beer_style?: string;
}