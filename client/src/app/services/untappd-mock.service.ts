import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Beer } from '../models/beer.model';
import { SearchResult } from './untappd.service';

@Injectable({
  providedIn: 'root'
})
export class UntappdMockService {

  constructor() { }

  getBeerInfo(beerId: number): Promise<Beer> {
    return of({
        "meta": {
            "code": 200,
            "response_time": {
                "time": 0.204,
                "measure": "seconds"
            },
            "init_time": {
                "time": 0,
                "measure": "seconds"
            }
        },
        "notifications": [],
        "response": {
            "beer": {
                "bid": 3839,
                "beer_name": "Belgian White",
                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg",
                "beer_label_hd": "https://untappd.akamaized.net/site/beer_logos_hd/beer-3839_ca8da_hd.jpeg",
                "beer_abv": 5.4,
                "beer_ibu": 9,
                "beer_description": "Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.",
                "beer_style": "Witbier",
                "is_in_production": 1,
                "beer_slug": "blue-moon-brewing-company-belgian-white",
                "is_homebrew": 0,
                "created_at": "Sat, 21 Aug 2010 14:26:35 +0000",
                "rating_count": 439088,
                "rating_score": 3.49227,
                "stats": {
                    "total_count": 1121692,
                    "monthly_count": 7414,
                    "total_user_count": 508191,
                    "user_count": 0
                },
                "brewery": {
                    "brewery_id": 127804,
                    "brewery_name": "Blue Moon Brewing Company",
                    "brewery_slug": "blue-moon-brewing-company",
                    "brewery_type": "Macro Brewery",
                    "brewery_page_url": "/BlueMoonBrewingCompany",
                    "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-127804_1a670.jpeg",
                    "country_name": "United States",
                    "contact": {
                        "twitter": "BlueMoonBrewCo",
                        "facebook": "https://www.facebook.com/bluemoon",
                        "url": "http://www.bluemoonbrewingcompany.com/"
                    },
                    "location": {
                        "brewery_city": "Denver",
                        "brewery_state": "CO",
                        "lat": 39.7561,
                        "lng": -104.992
                    }
                },
                "auth_rating": 0,
                "wish_list": false,
                "media": {
                    "count": 10,
                    "items": [
                        {
                            "photo_id": 247106494,
                            "photo": {
                                "photo_img_sm": "https://untappd.akamaized.net/photos/2019_08_10/31d7816ce0dca2ae18c2c13853432844_200x200.jpg",
                                "photo_img_md": "https://untappd.akamaized.net/photos/2019_08_10/31d7816ce0dca2ae18c2c13853432844_640x640.jpg",
                                "photo_img_lg": "https://untappd.akamaized.net/photos/2019_08_10/31d7816ce0dca2ae18c2c13853432844_1280x1280.jpg",
                                "photo_img_og": "https://untappd.akamaized.net/photos/2019_08_10/31d7816ce0dca2ae18c2c13853432844_raw.jpg"
                            },
                            "created_at": "Sat, 10 Aug 2019 16:08:22 +0000",
                            "checkin_id": 789628532,
                            "beer": {
                                "bid": 3839,
                                "beer_name": "Belgian White",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg",
                                "beer_abv": 5.4,
                                "beer_ibu": 9,
                                "beer_slug": "blue-moon-brewing-company-belgian-white",
                                "beer_description": "Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.",
                                "is_in_production": 1,
                                "beer_style_id": 83,
                                "beer_style": "Witbier",
                                "rating_score": 3.492,
                                "rating_count": 439088,
                                "count": 439088,
                                "beer_active": 1,
                                "on_list": false,
                                "has_had": false,
                                "auth_rating": 0,
                                "wish_list": false
                            },
                            "brewery": {
                                "brewery_id": 127804,
                                "brewery_name": "Blue Moon Brewing Company",
                                "brewery_slug": "blue-moon-brewing-company",
                                "brewery_page_url": "/BlueMoonBrewingCompany",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-127804_1a670.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "BlueMoonBrewCo",
                                    "facebook": "https://www.facebook.com/bluemoon",
                                    "url": "http://www.bluemoonbrewingcompany.com/"
                                },
                                "location": {
                                    "brewery_city": "Denver",
                                    "brewery_state": "CO",
                                    "lat": 39.7561,
                                    "lng": -104.992
                                },
                                "brewery_active": 1
                            },
                            "user": {
                                "uid": 3707251,
                                "user_name": "Patu1971",
                                "first_name": "Patrick",
                                "last_name": "A",
                                "user_avatar": "https://gravatar.com/avatar/760a8bb692aa4bf0c38a6d1267160b81?size=100&d=https%3A%2F%2Funtappd.akamaized.net%2Fsite%2Fassets%2Fimages%2Fdefault_avatar_v3_gravatar.jpg%3Fv%3D2",
                                "is_private": 0
                            },
                            "venue": [
                                []
                            ]
                        },
                        {
                            "photo_id": 247105970,
                            "photo": {
                                "photo_img_sm": "https://untappd.akamaized.net/photos/2019_08_10/c33663af967b7bbc3be79294a753075e_200x200.jpg",
                                "photo_img_md": "https://untappd.akamaized.net/photos/2019_08_10/c33663af967b7bbc3be79294a753075e_640x640.jpg",
                                "photo_img_lg": "https://untappd.akamaized.net/photos/2019_08_10/c33663af967b7bbc3be79294a753075e_1280x1280.jpg",
                                "photo_img_og": "https://untappd.akamaized.net/photos/2019_08_10/c33663af967b7bbc3be79294a753075e_raw.jpg"
                            },
                            "created_at": "Sat, 10 Aug 2019 16:07:07 +0000",
                            "checkin_id": 789627481,
                            "beer": {
                                "bid": 3839,
                                "beer_name": "Belgian White",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg",
                                "beer_abv": 5.4,
                                "beer_ibu": 9,
                                "beer_slug": "blue-moon-brewing-company-belgian-white",
                                "beer_description": "Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.",
                                "is_in_production": 1,
                                "beer_style_id": 83,
                                "beer_style": "Witbier",
                                "rating_score": 3.492,
                                "rating_count": 439088,
                                "count": 439088,
                                "beer_active": 1,
                                "on_list": false,
                                "has_had": false,
                                "auth_rating": 0,
                                "wish_list": false
                            },
                            "brewery": {
                                "brewery_id": 127804,
                                "brewery_name": "Blue Moon Brewing Company",
                                "brewery_slug": "blue-moon-brewing-company",
                                "brewery_page_url": "/BlueMoonBrewingCompany",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-127804_1a670.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "BlueMoonBrewCo",
                                    "facebook": "https://www.facebook.com/bluemoon",
                                    "url": "http://www.bluemoonbrewingcompany.com/"
                                },
                                "location": {
                                    "brewery_city": "Denver",
                                    "brewery_state": "CO",
                                    "lat": 39.7561,
                                    "lng": -104.992
                                },
                                "brewery_active": 1
                            },
                            "user": {
                                "uid": 6820093,
                                "user_name": "AntonDaba",
                                "first_name": "Anton",
                                "last_name": "V",
                                "user_avatar": "https://untappd.akamaized.net/profile/a40d1896725f4daa6b8ba1baac163285_100x100.jpg",
                                "is_private": 0
                            },
                            "venue": [
                                {
                                    "venue_id": 1909369,
                                    "venue_name": "Beermarket (Бирмаркет)",
                                    "venue_slug": "beermarket-birmarket",
                                    "primary_category": "Vida Noturna",
                                    "parent_category_id": "4d4b7105d754a06376d81259",
                                    "categories": {
                                        "count": 1,
                                        "items": [
                                            {
                                                "category_key": "beer_bar",
                                                "category_name": "Bar de Cerveja",
                                                "category_id": "56aa371ce4b08b9a8d57356c",
                                                "is_primary": true
                                            }
                                        ]
                                    },
                                    "location": {
                                        "venue_address": "Страстной бул., 4, стр. 3",
                                        "venue_city": "Москва",
                                        "venue_state": "Москва",
                                        "lat": 55.7651,
                                        "lng": 37.6085
                                    },
                                    "contact": {
                                        "twitter": "",
                                        "venue_url": ""
                                    },
                                    "foursquare": {
                                        "foursquare_id": "53d7c844498e55b92a3dd36a",
                                        "foursquare_url": "http://4sq.com/1AuvWyJ"
                                    },
                                    "venue_icon": {
                                        "sm": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png",
                                        "md": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png",
                                        "lg": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png"
                                    },
                                    "is_verified": 0
                                }
                            ]
                        },
                        {
                            "photo_id": 247105704,
                            "photo": {
                                "photo_img_sm": "https://untappd.akamaized.net/photos/2019_08_10/5c3484033ac97fbafc1c8ebdb27ef070_200x200.jpg",
                                "photo_img_md": "https://untappd.akamaized.net/photos/2019_08_10/5c3484033ac97fbafc1c8ebdb27ef070_640x640.jpg",
                                "photo_img_lg": "https://untappd.akamaized.net/photos/2019_08_10/5c3484033ac97fbafc1c8ebdb27ef070_1280x1280.jpg",
                                "photo_img_og": "https://untappd.akamaized.net/photos/2019_08_10/5c3484033ac97fbafc1c8ebdb27ef070_raw.jpg"
                            },
                            "created_at": "Sat, 10 Aug 2019 16:06:14 +0000",
                            "checkin_id": 789626974,
                            "beer": {
                                "bid": 3839,
                                "beer_name": "Belgian White",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg",
                                "beer_abv": 5.4,
                                "beer_ibu": 9,
                                "beer_slug": "blue-moon-brewing-company-belgian-white",
                                "beer_description": "Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.",
                                "is_in_production": 1,
                                "beer_style_id": 83,
                                "beer_style": "Witbier",
                                "rating_score": 3.492,
                                "rating_count": 439088,
                                "count": 439088,
                                "beer_active": 1,
                                "on_list": false,
                                "has_had": false,
                                "auth_rating": 0,
                                "wish_list": false
                            },
                            "brewery": {
                                "brewery_id": 127804,
                                "brewery_name": "Blue Moon Brewing Company",
                                "brewery_slug": "blue-moon-brewing-company",
                                "brewery_page_url": "/BlueMoonBrewingCompany",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-127804_1a670.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "BlueMoonBrewCo",
                                    "facebook": "https://www.facebook.com/bluemoon",
                                    "url": "http://www.bluemoonbrewingcompany.com/"
                                },
                                "location": {
                                    "brewery_city": "Denver",
                                    "brewery_state": "CO",
                                    "lat": 39.7561,
                                    "lng": -104.992
                                },
                                "brewery_active": 1
                            },
                            "user": {
                                "uid": 1918398,
                                "user_name": "Codise",
                                "first_name": "Max",
                                "last_name": "V",
                                "user_avatar": "https://untappd.akamaized.net/profile/6a49442f86fe0e903a0b5580fc33bc7f_100x100.jpg",
                                "is_private": 0
                            },
                            "venue": [
                                {
                                    "venue_id": 7733599,
                                    "venue_name": "Pinehill Terrace",
                                    "venue_slug": "pinehill-terrace",
                                    "primary_category": "Vida Noturna",
                                    "parent_category_id": "4d4b7105d754a06376d81259",
                                    "categories": {
                                        "count": 1,
                                        "items": [
                                            {
                                                "category_key": "beach_bar",
                                                "category_name": "Bar de Praia",
                                                "category_id": "52e81612bcbc57f1066b7a0d",
                                                "is_primary": true
                                            }
                                        ]
                                    },
                                    "location": {
                                        "venue_address": "Mäntymäentie",
                                        "venue_city": "Helsinki",
                                        "venue_state": "Uusimaa",
                                        "lat": 60.1836,
                                        "lng": 24.9289
                                    },
                                    "contact": {
                                        "twitter": "",
                                        "venue_url": ""
                                    },
                                    "foursquare": {
                                        "foursquare_id": "5b0014d8bfc6d0002c06b5d9",
                                        "foursquare_url": "https://4sq.com/2ItYEg6"
                                    },
                                    "venue_icon": {
                                        "sm": "https://ss3.4sqi.net/img/categories_v2/nightlife/default_bg_64.png",
                                        "md": "https://ss3.4sqi.net/img/categories_v2/nightlife/default_bg_88.png",
                                        "lg": "https://ss3.4sqi.net/img/categories_v2/nightlife/default_bg_512.png"
                                    },
                                    "is_verified": 0
                                }
                            ]
                        },
                        {
                            "photo_id": 247101838,
                            "photo": {
                                "photo_img_sm": "https://untappd.akamaized.net/photos/2019_08_10/6e725e401f767ebf7c11c307ef680039_200x200.jpg",
                                "photo_img_md": "https://untappd.akamaized.net/photos/2019_08_10/6e725e401f767ebf7c11c307ef680039_640x640.jpg",
                                "photo_img_lg": "https://untappd.akamaized.net/photos/2019_08_10/6e725e401f767ebf7c11c307ef680039_1280x1280.jpg",
                                "photo_img_og": "https://untappd.akamaized.net/photos/2019_08_10/6e725e401f767ebf7c11c307ef680039_raw.jpg"
                            },
                            "created_at": "Sat, 10 Aug 2019 15:52:40 +0000",
                            "checkin_id": 789619138,
                            "beer": {
                                "bid": 3839,
                                "beer_name": "Belgian White",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg",
                                "beer_abv": 5.4,
                                "beer_ibu": 9,
                                "beer_slug": "blue-moon-brewing-company-belgian-white",
                                "beer_description": "Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.",
                                "is_in_production": 1,
                                "beer_style_id": 83,
                                "beer_style": "Witbier",
                                "rating_score": 3.492,
                                "rating_count": 439088,
                                "count": 439088,
                                "beer_active": 1,
                                "on_list": false,
                                "has_had": false,
                                "auth_rating": 0,
                                "wish_list": false
                            },
                            "brewery": {
                                "brewery_id": 127804,
                                "brewery_name": "Blue Moon Brewing Company",
                                "brewery_slug": "blue-moon-brewing-company",
                                "brewery_page_url": "/BlueMoonBrewingCompany",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-127804_1a670.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "BlueMoonBrewCo",
                                    "facebook": "https://www.facebook.com/bluemoon",
                                    "url": "http://www.bluemoonbrewingcompany.com/"
                                },
                                "location": {
                                    "brewery_city": "Denver",
                                    "brewery_state": "CO",
                                    "lat": 39.7561,
                                    "lng": -104.992
                                },
                                "brewery_active": 1
                            },
                            "user": {
                                "uid": 5731073,
                                "user_name": "Mattias1pint",
                                "first_name": "Mattias",
                                "last_name": "U",
                                "user_avatar": "https://gravatar.com/avatar/aba7f842d26f543eed221b3c152323cd?size=100&d=https%3A%2F%2Funtappd.akamaized.net%2Fsite%2Fassets%2Fimages%2Fdefault_avatar_v3_gravatar.jpg%3Fv%3D2",
                                "is_private": 0
                            },
                            "venue": [
                                {
                                    "venue_id": 5842382,
                                    "venue_name": "S.A.K.",
                                    "venue_slug": "s-a-k",
                                    "primary_category": "Food",
                                    "parent_category_id": "4d4b7105d754a06374d81259",
                                    "categories": {
                                        "count": 1,
                                        "items": [
                                            {
                                                "category_key": "american_restaurant",
                                                "category_name": "American Restaurant",
                                                "category_id": "4bf58dd8d48988d14e941735",
                                                "is_primary": true
                                            }
                                        ]
                                    },
                                    "location": {
                                        "venue_address": "Kungsportsplatsen 1",
                                        "venue_city": "Göteborg",
                                        "venue_state": "Västra Götalands län",
                                        "lat": 57.7036,
                                        "lng": 11.9698
                                    },
                                    "contact": {
                                        "twitter": "",
                                        "venue_url": "http://www.sakrestaurang.se"
                                    },
                                    "foursquare": {
                                        "foursquare_id": "58839d5c03cf2556a1eb79a3",
                                        "foursquare_url": "http://4sq.com/2jM2unL"
                                    },
                                    "venue_icon": {
                                        "sm": "https://ss3.4sqi.net/img/categories_v2/food/default_bg_64.png",
                                        "md": "https://ss3.4sqi.net/img/categories_v2/food/default_bg_88.png",
                                        "lg": "https://ss3.4sqi.net/img/categories_v2/food/default_bg_512.png"
                                    },
                                    "is_verified": 0
                                }
                            ]
                        },
                        {
                            "photo_id": 247098416,
                            "photo": {
                                "photo_img_sm": "https://untappd.akamaized.net/photos/2019_08_10/3dbabdb3c1636dd6730a361958f61bd8_200x200.jpg",
                                "photo_img_md": "https://untappd.akamaized.net/photos/2019_08_10/3dbabdb3c1636dd6730a361958f61bd8_640x640.jpg",
                                "photo_img_lg": "https://untappd.akamaized.net/photos/2019_08_10/3dbabdb3c1636dd6730a361958f61bd8_1280x1280.jpg",
                                "photo_img_og": "https://untappd.akamaized.net/photos/2019_08_10/3dbabdb3c1636dd6730a361958f61bd8_raw.jpg"
                            },
                            "created_at": "Sat, 10 Aug 2019 15:40:22 +0000",
                            "checkin_id": 789612250,
                            "beer": {
                                "bid": 3839,
                                "beer_name": "Belgian White",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg",
                                "beer_abv": 5.4,
                                "beer_ibu": 9,
                                "beer_slug": "blue-moon-brewing-company-belgian-white",
                                "beer_description": "Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.",
                                "is_in_production": 1,
                                "beer_style_id": 83,
                                "beer_style": "Witbier",
                                "rating_score": 3.492,
                                "rating_count": 439088,
                                "count": 439088,
                                "beer_active": 1,
                                "on_list": false,
                                "has_had": false,
                                "auth_rating": 0,
                                "wish_list": false
                            },
                            "brewery": {
                                "brewery_id": 127804,
                                "brewery_name": "Blue Moon Brewing Company",
                                "brewery_slug": "blue-moon-brewing-company",
                                "brewery_page_url": "/BlueMoonBrewingCompany",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-127804_1a670.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "BlueMoonBrewCo",
                                    "facebook": "https://www.facebook.com/bluemoon",
                                    "url": "http://www.bluemoonbrewingcompany.com/"
                                },
                                "location": {
                                    "brewery_city": "Denver",
                                    "brewery_state": "CO",
                                    "lat": 39.7561,
                                    "lng": -104.992
                                },
                                "brewery_active": 1
                            },
                            "user": {
                                "uid": 196831,
                                "user_name": "sirchutney",
                                "first_name": "Rob",
                                "last_name": "T",
                                "user_avatar": "https://untappd.akamaized.net/profile/7175fc9bc0d01470db2e615a3e2f8ab2_100x100.jpg",
                                "is_private": 0
                            },
                            "venue": [
                                {
                                    "venue_id": 8200022,
                                    "venue_name": "Pizza Punks",
                                    "venue_slug": "pizza-punks",
                                    "primary_category": "Food",
                                    "parent_category_id": "4d4b7105d754a06374d81259",
                                    "categories": {
                                        "count": 1,
                                        "items": [
                                            {
                                                "category_key": "pizza_place",
                                                "category_name": "Pizza Place",
                                                "category_id": "4bf58dd8d48988d1ca941735",
                                                "is_primary": true
                                            }
                                        ]
                                    },
                                    "location": {
                                        "venue_address": "34-40 Grey Street",
                                        "venue_city": "Newcastle upon Tyne",
                                        "venue_state": "Newcastle upon Tyne",
                                        "lat": 54.9715,
                                        "lng": -1.61109
                                    },
                                    "contact": {
                                        "twitter": "",
                                        "venue_url": ""
                                    },
                                    "foursquare": {
                                        "foursquare_id": "5b8fc32035d3fc002cc9961c",
                                        "foursquare_url": "https://4sq.com/2PzXzT4"
                                    },
                                    "venue_icon": {
                                        "sm": "https://ss3.4sqi.net/img/categories_v2/food/pizza_bg_64.png",
                                        "md": "https://ss3.4sqi.net/img/categories_v2/food/pizza_bg_88.png",
                                        "lg": "https://ss3.4sqi.net/img/categories_v2/food/pizza_bg_512.png"
                                    },
                                    "is_verified": 0
                                }
                            ]
                        },
                        {
                            "photo_id": 247098285,
                            "photo": {
                                "photo_img_sm": "https://untappd.akamaized.net/photos/2019_08_10/620f32e1e3d8db695ae9b91b6d3981cb_200x200.jpg",
                                "photo_img_md": "https://untappd.akamaized.net/photos/2019_08_10/620f32e1e3d8db695ae9b91b6d3981cb_640x640.jpg",
                                "photo_img_lg": "https://untappd.akamaized.net/photos/2019_08_10/620f32e1e3d8db695ae9b91b6d3981cb_1280x1280.jpg",
                                "photo_img_og": "https://untappd.akamaized.net/photos/2019_08_10/620f32e1e3d8db695ae9b91b6d3981cb_raw.jpg"
                            },
                            "created_at": "Sat, 10 Aug 2019 15:40:06 +0000",
                            "checkin_id": 789611978,
                            "beer": {
                                "bid": 3839,
                                "beer_name": "Belgian White",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg",
                                "beer_abv": 5.4,
                                "beer_ibu": 9,
                                "beer_slug": "blue-moon-brewing-company-belgian-white",
                                "beer_description": "Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.",
                                "is_in_production": 1,
                                "beer_style_id": 83,
                                "beer_style": "Witbier",
                                "rating_score": 3.492,
                                "rating_count": 439088,
                                "count": 439088,
                                "beer_active": 1,
                                "on_list": false,
                                "has_had": false,
                                "auth_rating": 0,
                                "wish_list": false
                            },
                            "brewery": {
                                "brewery_id": 127804,
                                "brewery_name": "Blue Moon Brewing Company",
                                "brewery_slug": "blue-moon-brewing-company",
                                "brewery_page_url": "/BlueMoonBrewingCompany",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-127804_1a670.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "BlueMoonBrewCo",
                                    "facebook": "https://www.facebook.com/bluemoon",
                                    "url": "http://www.bluemoonbrewingcompany.com/"
                                },
                                "location": {
                                    "brewery_city": "Denver",
                                    "brewery_state": "CO",
                                    "lat": 39.7561,
                                    "lng": -104.992
                                },
                                "brewery_active": 1
                            },
                            "user": {
                                "uid": 4292049,
                                "user_name": "jarkkeri",
                                "first_name": "Juho",
                                "last_name": "I",
                                "user_avatar": "https://untappd.akamaized.net/profile/86b0d12e9c29018baf0eba80667597e1_100x100.jpg",
                                "is_private": 0
                            },
                            "venue": [
                                {
                                    "venue_id": 2581148,
                                    "venue_name": "Asikkala",
                                    "venue_slug": "asikkala",
                                    "primary_category": "Outdoors & Recreation",
                                    "parent_category_id": "4d4b7105d754a06377d81259",
                                    "categories": {
                                        "count": 1,
                                        "items": [
                                            {
                                                "category_key": "village",
                                                "category_name": "Village",
                                                "category_id": "530e33ccbcbc57f1066bbff9",
                                                "is_primary": true
                                            }
                                        ]
                                    },
                                    "location": {
                                        "venue_address": "",
                                        "venue_city": "Asikkala",
                                        "venue_state": "Southern Finland",
                                        "lat": 61.2081,
                                        "lng": 25.7899
                                    },
                                    "contact": {
                                        "twitter": "",
                                        "venue_url": ""
                                    },
                                    "foursquare": {
                                        "foursquare_id": "53406020498e4109514c8871",
                                        "foursquare_url": "http://4sq.com/1ifLI4n"
                                    },
                                    "venue_icon": {
                                        "sm": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/neighborhood_bg_64.png",
                                        "md": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/neighborhood_bg_88.png",
                                        "lg": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/neighborhood_bg_512.png"
                                    },
                                    "is_verified": 0
                                }
                            ]
                        },
                        {
                            "photo_id": 247098243,
                            "photo": {
                                "photo_img_sm": "https://untappd.akamaized.net/photos/2019_08_10/5bf82ecb6b55b05a4c01c02ab2a48741_200x200.jpg",
                                "photo_img_md": "https://untappd.akamaized.net/photos/2019_08_10/5bf82ecb6b55b05a4c01c02ab2a48741_640x640.jpg",
                                "photo_img_lg": "https://untappd.akamaized.net/photos/2019_08_10/5bf82ecb6b55b05a4c01c02ab2a48741_1280x1280.jpg",
                                "photo_img_og": "https://untappd.akamaized.net/photos/2019_08_10/5bf82ecb6b55b05a4c01c02ab2a48741_raw.jpg"
                            },
                            "created_at": "Sat, 10 Aug 2019 15:40:06 +0000",
                            "checkin_id": 789611851,
                            "beer": {
                                "bid": 3839,
                                "beer_name": "Belgian White",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg",
                                "beer_abv": 5.4,
                                "beer_ibu": 9,
                                "beer_slug": "blue-moon-brewing-company-belgian-white",
                                "beer_description": "Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.",
                                "is_in_production": 1,
                                "beer_style_id": 83,
                                "beer_style": "Witbier",
                                "rating_score": 3.492,
                                "rating_count": 439088,
                                "count": 439088,
                                "beer_active": 1,
                                "on_list": false,
                                "has_had": false,
                                "auth_rating": 0,
                                "wish_list": false
                            },
                            "brewery": {
                                "brewery_id": 127804,
                                "brewery_name": "Blue Moon Brewing Company",
                                "brewery_slug": "blue-moon-brewing-company",
                                "brewery_page_url": "/BlueMoonBrewingCompany",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-127804_1a670.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "BlueMoonBrewCo",
                                    "facebook": "https://www.facebook.com/bluemoon",
                                    "url": "http://www.bluemoonbrewingcompany.com/"
                                },
                                "location": {
                                    "brewery_city": "Denver",
                                    "brewery_state": "CO",
                                    "lat": 39.7561,
                                    "lng": -104.992
                                },
                                "brewery_active": 1
                            },
                            "user": {
                                "uid": 2208356,
                                "user_name": "Thiagolisi",
                                "first_name": "Thiago",
                                "last_name": "L",
                                "user_avatar": "https://untappd.akamaized.net/profile/744878d0ce8f9fb0f2e5809970f53c06_100x100.jpg",
                                "is_private": 0
                            },
                            "venue": [
                                {
                                    "venue_id": 2585539,
                                    "venue_name": "Torres do Bonfim",
                                    "venue_slug": "torres-do-bonfim",
                                    "primary_category": "Residence",
                                    "parent_category_id": "4e67e38e036454776db1fb3a",
                                    "categories": {
                                        "count": 1,
                                        "items": [
                                            {
                                                "category_key": "residential_building_apartment_condo",
                                                "category_name": "Residential Building (Apartment / Condo)",
                                                "category_id": "4d954b06a243a5684965b473",
                                                "is_primary": true
                                            }
                                        ]
                                    },
                                    "location": {
                                        "venue_address": "Av. Governador Pedro de Toledo, 596",
                                        "venue_city": "Campinas",
                                        "venue_state": "SP",
                                        "lat": -22.9013,
                                        "lng": -47.0765
                                    },
                                    "contact": {
                                        "twitter": "",
                                        "venue_url": ""
                                    },
                                    "foursquare": {
                                        "foursquare_id": "50489f1ce4b0fd6dcf046fbb",
                                        "foursquare_url": "http://4sq.com/QeaovY"
                                    },
                                    "venue_icon": {
                                        "sm": "https://ss3.4sqi.net/img/categories_v2/building/apartment_bg_64.png",
                                        "md": "https://ss3.4sqi.net/img/categories_v2/building/apartment_bg_88.png",
                                        "lg": "https://ss3.4sqi.net/img/categories_v2/building/apartment_bg_512.png"
                                    },
                                    "is_verified": 0
                                }
                            ]
                        },
                        {
                            "photo_id": 247097150,
                            "photo": {
                                "photo_img_sm": "https://untappd.akamaized.net/photos/2019_08_10/f4a8ac62bed4b4dccdc659a1520ce28d_200x200.jpg",
                                "photo_img_md": "https://untappd.akamaized.net/photos/2019_08_10/f4a8ac62bed4b4dccdc659a1520ce28d_640x640.jpg",
                                "photo_img_lg": "https://untappd.akamaized.net/photos/2019_08_10/f4a8ac62bed4b4dccdc659a1520ce28d_1280x1280.jpg",
                                "photo_img_og": "https://untappd.akamaized.net/photos/2019_08_10/f4a8ac62bed4b4dccdc659a1520ce28d_raw.jpg"
                            },
                            "created_at": "Sat, 10 Aug 2019 15:36:09 +0000",
                            "checkin_id": 789609701,
                            "beer": {
                                "bid": 3839,
                                "beer_name": "Belgian White",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg",
                                "beer_abv": 5.4,
                                "beer_ibu": 9,
                                "beer_slug": "blue-moon-brewing-company-belgian-white",
                                "beer_description": "Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.",
                                "is_in_production": 1,
                                "beer_style_id": 83,
                                "beer_style": "Witbier",
                                "rating_score": 3.492,
                                "rating_count": 439088,
                                "count": 439088,
                                "beer_active": 1,
                                "on_list": false,
                                "has_had": false,
                                "auth_rating": 0,
                                "wish_list": false
                            },
                            "brewery": {
                                "brewery_id": 127804,
                                "brewery_name": "Blue Moon Brewing Company",
                                "brewery_slug": "blue-moon-brewing-company",
                                "brewery_page_url": "/BlueMoonBrewingCompany",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-127804_1a670.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "BlueMoonBrewCo",
                                    "facebook": "https://www.facebook.com/bluemoon",
                                    "url": "http://www.bluemoonbrewingcompany.com/"
                                },
                                "location": {
                                    "brewery_city": "Denver",
                                    "brewery_state": "CO",
                                    "lat": 39.7561,
                                    "lng": -104.992
                                },
                                "brewery_active": 1
                            },
                            "user": {
                                "uid": 6866217,
                                "user_name": "Keido",
                                "first_name": "Roope",
                                "last_name": "K",
                                "user_avatar": "https://untappd.akamaized.net/profile/565be1f2dc88eaa540a0a1e42a2d9a8c_100x100.jpg",
                                "is_private": 0
                            },
                            "venue": [
                                {
                                    "venue_id": 7565652,
                                    "venue_name": "As. oy Peltokullervo",
                                    "venue_slug": "as-oy-peltokullervo",
                                    "primary_category": "Residence",
                                    "parent_category_id": "4e67e38e036454776db1fb3a",
                                    "categories": {
                                        "count": 1,
                                        "items": [
                                            {
                                                "category_key": "residential_building_apartment_condo",
                                                "category_name": "Residential Building (Apartment / Condo)",
                                                "category_id": "4d954b06a243a5684965b473",
                                                "is_primary": true
                                            }
                                        ]
                                    },
                                    "location": {
                                        "venue_address": "Kullervontie 1-3",
                                        "venue_city": "Tampere",
                                        "venue_state": "Pirkanmaa",
                                        "lat": 61.5034,
                                        "lng": 23.776
                                    },
                                    "contact": {
                                        "twitter": "",
                                        "venue_url": ""
                                    },
                                    "foursquare": {
                                        "foursquare_id": "5023f237e4b0862bdc565b6d",
                                        "foursquare_url": "http://4sq.com/P7UbNq"
                                    },
                                    "venue_icon": {
                                        "sm": "https://ss3.4sqi.net/img/categories_v2/building/apartment_bg_64.png",
                                        "md": "https://ss3.4sqi.net/img/categories_v2/building/apartment_bg_88.png",
                                        "lg": "https://ss3.4sqi.net/img/categories_v2/building/apartment_bg_512.png"
                                    },
                                    "is_verified": 0
                                }
                            ]
                        },
                        {
                            "photo_id": 247096301,
                            "photo": {
                                "photo_img_sm": "https://untappd.akamaized.net/photos/2019_08_10/7e7ffa955fc82499a78b7d26fe7dfba3_200x200.jpg",
                                "photo_img_md": "https://untappd.akamaized.net/photos/2019_08_10/7e7ffa955fc82499a78b7d26fe7dfba3_640x640.jpg",
                                "photo_img_lg": "https://untappd.akamaized.net/photos/2019_08_10/7e7ffa955fc82499a78b7d26fe7dfba3_1280x1280.jpg",
                                "photo_img_og": "https://untappd.akamaized.net/photos/2019_08_10/7e7ffa955fc82499a78b7d26fe7dfba3_raw.jpg"
                            },
                            "created_at": "Sat, 10 Aug 2019 15:32:56 +0000",
                            "checkin_id": 789607381,
                            "beer": {
                                "bid": 3839,
                                "beer_name": "Belgian White",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg",
                                "beer_abv": 5.4,
                                "beer_ibu": 9,
                                "beer_slug": "blue-moon-brewing-company-belgian-white",
                                "beer_description": "Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.",
                                "is_in_production": 1,
                                "beer_style_id": 83,
                                "beer_style": "Witbier",
                                "rating_score": 3.492,
                                "rating_count": 439088,
                                "count": 439088,
                                "beer_active": 1,
                                "on_list": false,
                                "has_had": false,
                                "auth_rating": 0,
                                "wish_list": false
                            },
                            "brewery": {
                                "brewery_id": 127804,
                                "brewery_name": "Blue Moon Brewing Company",
                                "brewery_slug": "blue-moon-brewing-company",
                                "brewery_page_url": "/BlueMoonBrewingCompany",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-127804_1a670.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "BlueMoonBrewCo",
                                    "facebook": "https://www.facebook.com/bluemoon",
                                    "url": "http://www.bluemoonbrewingcompany.com/"
                                },
                                "location": {
                                    "brewery_city": "Denver",
                                    "brewery_state": "CO",
                                    "lat": 39.7561,
                                    "lng": -104.992
                                },
                                "brewery_active": 1
                            },
                            "user": {
                                "uid": 2149243,
                                "user_name": "Liquenda",
                                "first_name": "Kim",
                                "last_name": "H",
                                "user_avatar": "https://untappd.akamaized.net/profile/191d38a577f16f7edb46cb3ea28dfe83_100x100.jpg",
                                "is_private": 0
                            },
                            "venue": [
                                {
                                    "venue_id": 1868205,
                                    "venue_name": "Auto Camp Vranjica Belvedere",
                                    "venue_slug": "auto-camp-vranjica-belvedere",
                                    "primary_category": "Travel & Transport",
                                    "parent_category_id": "4d4b7105d754a06379d81259",
                                    "categories": {
                                        "count": 1,
                                        "items": [
                                            {
                                                "category_key": "hotel",
                                                "category_name": "Hotel",
                                                "category_id": "4bf58dd8d48988d1fa931735",
                                                "is_primary": true
                                            }
                                        ]
                                    },
                                    "location": {
                                        "venue_address": "",
                                        "venue_city": "Trogir",
                                        "venue_state": "Splitsko-Dalmatinska Županija",
                                        "lat": 43.5092,
                                        "lng": 16.193
                                    },
                                    "contact": {
                                        "twitter": "",
                                        "venue_url": ""
                                    },
                                    "foursquare": {
                                        "foursquare_id": "4e47eaa0ae60fa723306f0e5",
                                        "foursquare_url": "http://4sq.com/oPsm4Y"
                                    },
                                    "venue_icon": {
                                        "sm": "https://ss3.4sqi.net/img/categories_v2/travel/hotel_bg_64.png",
                                        "md": "https://ss3.4sqi.net/img/categories_v2/travel/hotel_bg_88.png",
                                        "lg": "https://ss3.4sqi.net/img/categories_v2/travel/hotel_bg_512.png"
                                    },
                                    "is_verified": 0
                                }
                            ]
                        },
                        {
                            "photo_id": 247093366,
                            "photo": {
                                "photo_img_sm": "https://untappd.akamaized.net/photos/2019_08_10/dd531a8ead2513481c19fc2d61cba987_200x200.jpg",
                                "photo_img_md": "https://untappd.akamaized.net/photos/2019_08_10/dd531a8ead2513481c19fc2d61cba987_640x640.jpg",
                                "photo_img_lg": "https://untappd.akamaized.net/photos/2019_08_10/dd531a8ead2513481c19fc2d61cba987_1280x1280.jpg",
                                "photo_img_og": "https://untappd.akamaized.net/photos/2019_08_10/dd531a8ead2513481c19fc2d61cba987_raw.jpg"
                            },
                            "created_at": "Sat, 10 Aug 2019 15:21:56 +0000",
                            "checkin_id": 789602397,
                            "beer": {
                                "bid": 3839,
                                "beer_name": "Belgian White",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg",
                                "beer_abv": 5.4,
                                "beer_ibu": 9,
                                "beer_slug": "blue-moon-brewing-company-belgian-white",
                                "beer_description": "Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.",
                                "is_in_production": 1,
                                "beer_style_id": 83,
                                "beer_style": "Witbier",
                                "rating_score": 3.492,
                                "rating_count": 439088,
                                "count": 439088,
                                "beer_active": 1,
                                "on_list": false,
                                "has_had": false,
                                "auth_rating": 0,
                                "wish_list": false
                            },
                            "brewery": {
                                "brewery_id": 127804,
                                "brewery_name": "Blue Moon Brewing Company",
                                "brewery_slug": "blue-moon-brewing-company",
                                "brewery_page_url": "/BlueMoonBrewingCompany",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-127804_1a670.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "BlueMoonBrewCo",
                                    "facebook": "https://www.facebook.com/bluemoon",
                                    "url": "http://www.bluemoonbrewingcompany.com/"
                                },
                                "location": {
                                    "brewery_city": "Denver",
                                    "brewery_state": "CO",
                                    "lat": 39.7561,
                                    "lng": -104.992
                                },
                                "brewery_active": 1
                            },
                            "user": {
                                "uid": 1604200,
                                "user_name": "trotsmossa",
                                "first_name": "Tessan",
                                "last_name": "L",
                                "user_avatar": "https://gravatar.com/avatar/4dc42b18c6ae71ca32afa6e8252817f5?size=100&d=https%3A%2F%2Funtappd.akamaized.net%2Fsite%2Fassets%2Fimages%2Fdefault_avatar_v3_gravatar.jpg%3Fv%3D2",
                                "is_private": 0
                            },
                            "venue": [
                                {
                                    "venue_id": 7443840,
                                    "venue_name": "Bron",
                                    "venue_slug": "bron",
                                    "primary_category": "Food",
                                    "parent_category_id": "4d4b7105d754a06374d81259",
                                    "categories": {
                                        "count": 2,
                                        "items": [
                                            {
                                                "category_key": "restaurant",
                                                "category_name": "Restaurant",
                                                "category_id": "4bf58dd8d48988d1c4941735",
                                                "is_primary": true
                                            },
                                            {
                                                "category_key": "pub",
                                                "category_name": "Pub",
                                                "category_id": "4bf58dd8d48988d11b941735",
                                                "is_primary": false
                                            }
                                        ]
                                    },
                                    "location": {
                                        "venue_address": "Sankt Eriksgatan 64",
                                        "venue_city": "Stockholm",
                                        "venue_state": "Storstockholm",
                                        "lat": 59.3379,
                                        "lng": 18.0356
                                    },
                                    "contact": {
                                        "twitter": "",
                                        "venue_url": "http://restaurangbron.com"
                                    },
                                    "foursquare": {
                                        "foursquare_id": "5aa3cf8afd16bb3e1c157bd1",
                                        "foursquare_url": "http://4sq.com/2Ge9G4H"
                                    },
                                    "venue_icon": {
                                        "sm": "https://ss3.4sqi.net/img/categories_v2/food/default_bg_64.png",
                                        "md": "https://ss3.4sqi.net/img/categories_v2/food/default_bg_88.png",
                                        "lg": "https://ss3.4sqi.net/img/categories_v2/food/default_bg_512.png"
                                    },
                                    "is_verified": 0
                                }
                            ]
                        }
                    ]
                },
                "checkins": {
                    "count": 15,
                    "items": [
                        {
                            "checkin_id": 789633383,
                            "created_at": "Sat, 10 Aug 2019 16:14:54 +0000",
                            "checkin_comment": "",
                            "rating_score": 4.25,
                            "user": {
                                "uid": 6654094,
                                "user_name": "Cmcguigan",
                                "first_name": "Colin",
                                "last_name": "M.",
                                "location": "",
                                "url": "",
                                "is_supporter": 0,
                                "bio": "",
                                "relationship": null,
                                "user_avatar": "https://gravatar.com/avatar/5484ff0633cfdf237b160a586b5b0fe7?size=100&d=https%3A%2F%2Funtappd.akamaized.net%2Fsite%2Fassets%2Fimages%2Fdefault_avatar_v3_gravatar.jpg%3Fv%3D2",
                                "is_private": 0
                            },
                            "beer": {
                                "bid": 3839,
                                "beer_name": "Belgian White",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg",
                                "beer_abv": 5.4,
                                "beer_ibu": 9,
                                "beer_slug": "blue-moon-brewing-company-belgian-white",
                                "beer_description": "Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.",
                                "beer_style": "Witbier",
                                "has_had": false,
                                "beer_active": 1
                            },
                            "brewery": {
                                "brewery_id": 127804,
                                "brewery_name": "Blue Moon Brewing Company",
                                "brewery_slug": "blue-moon-brewing-company",
                                "brewery_page_url": "/BlueMoonBrewingCompany",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-127804_1a670.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "BlueMoonBrewCo",
                                    "facebook": "https://www.facebook.com/bluemoon",
                                    "url": "http://www.bluemoonbrewingcompany.com/"
                                },
                                "location": {
                                    "brewery_city": "Denver",
                                    "brewery_state": "CO",
                                    "lat": 39.7561,
                                    "lng": -104.992
                                },
                                "brewery_active": 1
                            },
                            "venue": [],
                            "comments": {
                                "total_count": 0,
                                "count": 0,
                                "items": []
                            },
                            "toasts": {
                                "total_count": 0,
                                "count": 0,
                                "auth_toast": false,
                                "items": []
                            },
                            "media": {
                                "count": 0,
                                "items": []
                            },
                            "source": {
                                "app_name": "Untappd for iPhone - (V2)",
                                "app_website": "http://untpd.it/iphoneapp"
                            },
                            "badges": {
                                "count": 0,
                                "items": []
                            }
                        },
                        {
                            "checkin_id": 789632436,
                            "created_at": "Sat, 10 Aug 2019 16:13:39 +0000",
                            "checkin_comment": "",
                            "rating_score": 4.25,
                            "user": {
                                "uid": 4255598,
                                "user_name": "sandrovergueiro",
                                "first_name": "Sandro",
                                "last_name": "G.",
                                "location": "Sao Paulo",
                                "url": "",
                                "is_supporter": 0,
                                "bio": "",
                                "relationship": null,
                                "user_avatar": "https://untappd.akamaized.net/profile/cf40d0fdb2bbdb0f5daed81e67abc9a9_100x100.jpg",
                                "is_private": 0
                            },
                            "beer": {
                                "bid": 3839,
                                "beer_name": "Belgian White",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg",
                                "beer_abv": 5.4,
                                "beer_ibu": 9,
                                "beer_slug": "blue-moon-brewing-company-belgian-white",
                                "beer_description": "Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.",
                                "beer_style": "Witbier",
                                "has_had": false,
                                "beer_active": 1
                            },
                            "brewery": {
                                "brewery_id": 127804,
                                "brewery_name": "Blue Moon Brewing Company",
                                "brewery_slug": "blue-moon-brewing-company",
                                "brewery_page_url": "/BlueMoonBrewingCompany",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-127804_1a670.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "BlueMoonBrewCo",
                                    "facebook": "https://www.facebook.com/bluemoon",
                                    "url": "http://www.bluemoonbrewingcompany.com/"
                                },
                                "location": {
                                    "brewery_city": "Denver",
                                    "brewery_state": "CO",
                                    "lat": 39.7561,
                                    "lng": -104.992
                                },
                                "brewery_active": 1
                            },
                            "venue": [],
                            "comments": {
                                "total_count": 0,
                                "count": 0,
                                "items": []
                            },
                            "toasts": {
                                "total_count": 0,
                                "count": 0,
                                "auth_toast": false,
                                "items": []
                            },
                            "media": {
                                "count": 1,
                                "items": [
                                    {
                                        "photo_id": 247108486,
                                        "photo": {
                                            "photo_img_sm": "https://untappd.akamaized.net/photos/2019_08_10/7ade0e1ca4ab643877501f65666e8e33_200x200.jpg",
                                            "photo_img_md": "https://untappd.akamaized.net/photos/2019_08_10/7ade0e1ca4ab643877501f65666e8e33_640x640.jpg",
                                            "photo_img_lg": "https://untappd.akamaized.net/photos/2019_08_10/7ade0e1ca4ab643877501f65666e8e33_1280x1280.jpg",
                                            "photo_img_og": "https://untappd.akamaized.net/photos/2019_08_10/7ade0e1ca4ab643877501f65666e8e33_raw.jpg"
                                        }
                                    }
                                ]
                            },
                            "source": {
                                "app_name": "Untappd for iPhone - (V2)",
                                "app_website": "http://untpd.it/iphoneapp"
                            },
                            "badges": {
                                "count": 0,
                                "items": []
                            }
                        },
                        {
                            "checkin_id": 789628532,
                            "created_at": "Sat, 10 Aug 2019 16:08:17 +0000",
                            "checkin_comment": "Correct sans plus",
                            "rating_score": 2.75,
                            "user": {
                                "uid": 3707251,
                                "user_name": "Patu1971",
                                "first_name": "Patrick",
                                "last_name": "A.",
                                "location": "Montreal",
                                "url": "",
                                "is_supporter": 0,
                                "bio": "",
                                "relationship": null,
                                "user_avatar": "https://gravatar.com/avatar/760a8bb692aa4bf0c38a6d1267160b81?size=100&d=https%3A%2F%2Funtappd.akamaized.net%2Fsite%2Fassets%2Fimages%2Fdefault_avatar_v3_gravatar.jpg%3Fv%3D2",
                                "is_private": 0
                            },
                            "beer": {
                                "bid": 3839,
                                "beer_name": "Belgian White",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg",
                                "beer_abv": 5.4,
                                "beer_ibu": 9,
                                "beer_slug": "blue-moon-brewing-company-belgian-white",
                                "beer_description": "Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.",
                                "beer_style": "Witbier",
                                "has_had": false,
                                "beer_active": 1
                            },
                            "brewery": {
                                "brewery_id": 127804,
                                "brewery_name": "Blue Moon Brewing Company",
                                "brewery_slug": "blue-moon-brewing-company",
                                "brewery_page_url": "/BlueMoonBrewingCompany",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-127804_1a670.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "BlueMoonBrewCo",
                                    "facebook": "https://www.facebook.com/bluemoon",
                                    "url": "http://www.bluemoonbrewingcompany.com/"
                                },
                                "location": {
                                    "brewery_city": "Denver",
                                    "brewery_state": "CO",
                                    "lat": 39.7561,
                                    "lng": -104.992
                                },
                                "brewery_active": 1
                            },
                            "venue": [],
                            "comments": {
                                "total_count": 0,
                                "count": 0,
                                "items": []
                            },
                            "toasts": {
                                "total_count": 0,
                                "count": 0,
                                "auth_toast": false,
                                "items": []
                            },
                            "media": {
                                "count": 1,
                                "items": [
                                    {
                                        "photo_id": 247106494,
                                        "photo": {
                                            "photo_img_sm": "https://untappd.akamaized.net/photos/2019_08_10/31d7816ce0dca2ae18c2c13853432844_200x200.jpg",
                                            "photo_img_md": "https://untappd.akamaized.net/photos/2019_08_10/31d7816ce0dca2ae18c2c13853432844_640x640.jpg",
                                            "photo_img_lg": "https://untappd.akamaized.net/photos/2019_08_10/31d7816ce0dca2ae18c2c13853432844_1280x1280.jpg",
                                            "photo_img_og": "https://untappd.akamaized.net/photos/2019_08_10/31d7816ce0dca2ae18c2c13853432844_raw.jpg"
                                        }
                                    }
                                ]
                            },
                            "source": {
                                "app_name": "Untappd for iPhone - (V2)",
                                "app_website": "http://untpd.it/iphoneapp"
                            },
                            "badges": {
                                "retro_status": false,
                                "count": 2,
                                "items": [
                                    {
                                        "badge_id": 243498,
                                        "user_badge_id": 549183889,
                                        "badge_name": "Brewery Pioneer (Level 3)",
                                        "badge_description": "There's beer in them thar hills! You're setting off on your journey through the world of beer, but be sure to take a little time to get to know each brewery as you go. That's a beer from 15 different breweries. Try 5 more for Level 4!",
                                        "created_at": "Sat, 10 Aug 2019 16:08:18 +0000",
                                        "badge_image": {
                                            "sm": "https://untappd.akamaized.net/badges/bdg_brewery_prioneer_sm.jpg",
                                            "md": "https://untappd.akamaized.net/badges/bdg_brewery_prioneer_sm.jpg",
                                            "lg": "https://untappd.akamaized.net/badges/bdg_brewery_prioneer_sm.jpg"
                                        }
                                    },
                                    {
                                        "badge_id": 406,
                                        "user_badge_id": 549183890,
                                        "badge_name": "Land of the Free",
                                        "badge_description": "You’ve pledged allegiance, and now it’s time to enjoy some beer! Now remember, not all American beer is fizzy and yellow. That’s 5 different beers from a brewery in the United States. Try 5 more for Level 2.",
                                        "created_at": "Sat, 10 Aug 2019 16:08:18 +0000",
                                        "badge_image": {
                                            "sm": "https://untappd.akamaized.net/badges/bdg_america_sm.jpg",
                                            "md": "https://untappd.akamaized.net/badges/bdg_america_md.jpg",
                                            "lg": "https://untappd.akamaized.net/badges/bdg_america_lg.jpg"
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "checkin_id": 789627939,
                            "created_at": "Sat, 10 Aug 2019 16:07:23 +0000",
                            "checkin_comment": "Alltid bra!",
                            "rating_score": 4,
                            "user": {
                                "uid": 5848132,
                                "user_name": "bettskij",
                                "first_name": "Elisabeth",
                                "last_name": "A.",
                                "location": "",
                                "url": "",
                                "is_supporter": 0,
                                "bio": "",
                                "relationship": null,
                                "user_avatar": "https://gravatar.com/avatar/135ba5e4323a64ff25808b836119c2ba?size=100&d=https%3A%2F%2Funtappd.akamaized.net%2Fsite%2Fassets%2Fimages%2Fdefault_avatar_v3_gravatar.jpg%3Fv%3D2",
                                "is_private": 0
                            },
                            "beer": {
                                "bid": 3839,
                                "beer_name": "Belgian White",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg",
                                "beer_abv": 5.4,
                                "beer_ibu": 9,
                                "beer_slug": "blue-moon-brewing-company-belgian-white",
                                "beer_description": "Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.",
                                "beer_style": "Witbier",
                                "has_had": false,
                                "beer_active": 1
                            },
                            "brewery": {
                                "brewery_id": 127804,
                                "brewery_name": "Blue Moon Brewing Company",
                                "brewery_slug": "blue-moon-brewing-company",
                                "brewery_page_url": "/BlueMoonBrewingCompany",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-127804_1a670.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "BlueMoonBrewCo",
                                    "facebook": "https://www.facebook.com/bluemoon",
                                    "url": "http://www.bluemoonbrewingcompany.com/"
                                },
                                "location": {
                                    "brewery_city": "Denver",
                                    "brewery_state": "CO",
                                    "lat": 39.7561,
                                    "lng": -104.992
                                },
                                "brewery_active": 1
                            },
                            "venue": {
                                "venue_id": 9270703,
                                "venue_name": "Way Out West 2019",
                                "venue_slug": "way-out-west-2019",
                                "primary_category_key": "Event",
                                "primary_category": "Event",
                                "parent_category_id": "4d4b7105d754a06373d81259",
                                "categories": {
                                    "count": 2,
                                    "items": [
                                        {
                                            "category_key": "music_festival",
                                            "category_name": "Music Festival",
                                            "category_id": "5267e4d9e4b0ec79466e48d1",
                                            "is_primary": true
                                        },
                                        {
                                            "category_key": "park",
                                            "category_name": "Park",
                                            "category_id": "4bf58dd8d48988d163941735",
                                            "is_primary": false
                                        }
                                    ]
                                },
                                "location": {
                                    "venue_address": "Slottskogen",
                                    "venue_city": "Göteborg",
                                    "venue_state": "Västra Götalands län",
                                    "venue_country": "Sverige",
                                    "lat": 57.6861,
                                    "lng": 11.9473
                                },
                                "contact": {
                                    "twitter": "",
                                    "venue_url": ""
                                },
                                "foursquare": {
                                    "foursquare_id": "5d46bcaff874d1000860ed98",
                                    "foursquare_url": "https://4sq.com/2KocCiU"
                                },
                                "venue_icon": {
                                    "sm": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/musicvenue_rockclub_bg_64.png",
                                    "md": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/musicvenue_rockclub_bg_88.png",
                                    "lg": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/musicvenue_rockclub_bg_512.png"
                                },
                                "is_verified": false
                            },
                            "comments": {
                                "total_count": 0,
                                "count": 0,
                                "items": []
                            },
                            "toasts": {
                                "total_count": 0,
                                "count": 0,
                                "auth_toast": false,
                                "items": []
                            },
                            "media": {
                                "count": 0,
                                "items": []
                            },
                            "source": {
                                "app_name": "Untappd for Android - (V2)",
                                "app_website": "http://untpd.it/androidapp"
                            },
                            "badges": {
                                "count": 0,
                                "items": []
                            }
                        },
                        {
                            "checkin_id": 789627481,
                            "created_at": "Sat, 10 Aug 2019 16:06:44 +0000",
                            "checkin_comment": "Всегда любил",
                            "rating_score": 4,
                            "user": {
                                "uid": 6820093,
                                "user_name": "AntonDaba",
                                "first_name": "Anton",
                                "last_name": "V.",
                                "location": "",
                                "url": "",
                                "is_supporter": 0,
                                "bio": "",
                                "relationship": null,
                                "user_avatar": "https://untappd.akamaized.net/profile/a40d1896725f4daa6b8ba1baac163285_100x100.jpg",
                                "is_private": 0
                            },
                            "beer": {
                                "bid": 3839,
                                "beer_name": "Belgian White",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg",
                                "beer_abv": 5.4,
                                "beer_ibu": 9,
                                "beer_slug": "blue-moon-brewing-company-belgian-white",
                                "beer_description": "Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.",
                                "beer_style": "Witbier",
                                "has_had": false,
                                "beer_active": 1
                            },
                            "brewery": {
                                "brewery_id": 127804,
                                "brewery_name": "Blue Moon Brewing Company",
                                "brewery_slug": "blue-moon-brewing-company",
                                "brewery_page_url": "/BlueMoonBrewingCompany",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-127804_1a670.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "BlueMoonBrewCo",
                                    "facebook": "https://www.facebook.com/bluemoon",
                                    "url": "http://www.bluemoonbrewingcompany.com/"
                                },
                                "location": {
                                    "brewery_city": "Denver",
                                    "brewery_state": "CO",
                                    "lat": 39.7561,
                                    "lng": -104.992
                                },
                                "brewery_active": 1
                            },
                            "venue": {
                                "venue_id": 1909369,
                                "venue_name": "Beermarket (Бирмаркет)",
                                "venue_slug": "beermarket-birmarket",
                                "primary_category_key": "Nightlife Spot",
                                "primary_category": "Nightlife Spot",
                                "parent_category_id": "4d4b7105d754a06376d81259",
                                "categories": {
                                    "count": 1,
                                    "items": [
                                        {
                                            "category_key": "beer_bar",
                                            "category_name": "Beer Bar",
                                            "category_id": "56aa371ce4b08b9a8d57356c",
                                            "is_primary": true
                                        }
                                    ]
                                },
                                "location": {
                                    "venue_address": "Страстной бул., 4, стр. 3",
                                    "venue_city": "Москва",
                                    "venue_state": "Москва",
                                    "venue_country": "Россия",
                                    "lat": 55.7651,
                                    "lng": 37.6085
                                },
                                "contact": {
                                    "twitter": "",
                                    "venue_url": ""
                                },
                                "foursquare": {
                                    "foursquare_id": "53d7c844498e55b92a3dd36a",
                                    "foursquare_url": "http://4sq.com/1AuvWyJ"
                                },
                                "venue_icon": {
                                    "sm": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png",
                                    "md": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png",
                                    "lg": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png"
                                },
                                "is_verified": false
                            },
                            "comments": {
                                "total_count": 0,
                                "count": 0,
                                "items": []
                            },
                            "toasts": {
                                "total_count": 1,
                                "count": 1,
                                "auth_toast": null,
                                "items": [
                                    {
                                        "uid": 4372125,
                                        "user": {
                                            "uid": 4372125,
                                            "user_name": "FairyAshes",
                                            "first_name": "Helen",
                                            "last_name": "R.",
                                            "bio": "Manager at RusBeer Shop",
                                            "location": "Moskow",
                                            "relationship": "none",
                                            "user_avatar": "https://untappd.akamaized.net/profile/bf78b63ec81cfb54d834a252c3d8f8ff_100x100.jpg",
                                            "account_type": "user",
                                            "venue_details": [],
                                            "brewery_details": []
                                        },
                                        "like_id": 701276873,
                                        "like_owner": false,
                                        "created_at": "Sat, 10 Aug 2019 16:08:50 +0000"
                                    }
                                ]
                            },
                            "media": {
                                "count": 1,
                                "items": [
                                    {
                                        "photo_id": 247105970,
                                        "photo": {
                                            "photo_img_sm": "https://untappd.akamaized.net/photos/2019_08_10/c33663af967b7bbc3be79294a753075e_200x200.jpg",
                                            "photo_img_md": "https://untappd.akamaized.net/photos/2019_08_10/c33663af967b7bbc3be79294a753075e_640x640.jpg",
                                            "photo_img_lg": "https://untappd.akamaized.net/photos/2019_08_10/c33663af967b7bbc3be79294a753075e_1280x1280.jpg",
                                            "photo_img_og": "https://untappd.akamaized.net/photos/2019_08_10/c33663af967b7bbc3be79294a753075e_raw.jpg"
                                        }
                                    }
                                ]
                            },
                            "source": {
                                "app_name": "Untappd for iPhone - (V2)",
                                "app_website": "http://untpd.it/iphoneapp"
                            },
                            "badges": {
                                "retro_status": false,
                                "count": 3,
                                "items": [
                                    {
                                        "badge_id": 34721,
                                        "user_badge_id": 549182763,
                                        "badge_name": "Middle of the Road (Level 17)",
                                        "badge_description": "Looking for more kick than a session beer, but want to be able to stay for a few rounds? You have to keep it in the middle. That's 85 beers with an ABV greater than 5% and less than 10%. Try 5 more for Level 18!",
                                        "created_at": "Sat, 10 Aug 2019 16:06:45 +0000",
                                        "badge_image": {
                                            "sm": "https://untappd.akamaized.net/badges/bdg_middle-of-the-road_sm.jpg",
                                            "md": "https://untappd.akamaized.net/badges/bdg_middle-of-the-road_md.jpg",
                                            "lg": "https://untappd.akamaized.net/badges/bdg_middle-of-the-road_lg.jpg"
                                        }
                                    },
                                    {
                                        "badge_id": 243511,
                                        "user_badge_id": 549182764,
                                        "badge_name": "Brewery Pioneer (Level 16)",
                                        "badge_description": "There's beer in them thar hills! You're setting off on your journey through the world of beer, but be sure to take a little time to get to know each brewery as you go. That's a beer from 80 different breweries. Try 5 more for Level 17!",
                                        "created_at": "Sat, 10 Aug 2019 16:06:45 +0000",
                                        "badge_image": {
                                            "sm": "https://untappd.akamaized.net/badges/bdg_brewery_prioneer_sm.jpg",
                                            "md": "https://untappd.akamaized.net/badges/bdg_brewery_prioneer_sm.jpg",
                                            "lg": "https://untappd.akamaized.net/badges/bdg_brewery_prioneer_sm.jpg"
                                        }
                                    },
                                    {
                                        "badge_id": 406,
                                        "user_badge_id": 549182765,
                                        "badge_name": "Land of the Free",
                                        "badge_description": "You’ve pledged allegiance, and now it’s time to enjoy some beer! Now remember, not all American beer is fizzy and yellow. That’s 5 different beers from a brewery in the United States. Try 5 more for Level 2.",
                                        "created_at": "Sat, 10 Aug 2019 16:06:45 +0000",
                                        "badge_image": {
                                            "sm": "https://untappd.akamaized.net/badges/bdg_america_sm.jpg",
                                            "md": "https://untappd.akamaized.net/badges/bdg_america_md.jpg",
                                            "lg": "https://untappd.akamaized.net/badges/bdg_america_lg.jpg"
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "checkin_id": 789626974,
                            "created_at": "Sat, 10 Aug 2019 16:05:55 +0000",
                            "checkin_comment": "Enjoyed with slice of orange",
                            "rating_score": 3.5,
                            "user": {
                                "uid": 1918398,
                                "user_name": "Codise",
                                "first_name": "Max",
                                "last_name": "V.",
                                "location": "",
                                "url": "",
                                "is_supporter": 0,
                                "bio": "",
                                "relationship": null,
                                "user_avatar": "https://untappd.akamaized.net/profile/6a49442f86fe0e903a0b5580fc33bc7f_100x100.jpg",
                                "is_private": 0
                            },
                            "beer": {
                                "bid": 3839,
                                "beer_name": "Belgian White",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg",
                                "beer_abv": 5.4,
                                "beer_ibu": 9,
                                "beer_slug": "blue-moon-brewing-company-belgian-white",
                                "beer_description": "Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.",
                                "beer_style": "Witbier",
                                "has_had": false,
                                "beer_active": 1
                            },
                            "brewery": {
                                "brewery_id": 127804,
                                "brewery_name": "Blue Moon Brewing Company",
                                "brewery_slug": "blue-moon-brewing-company",
                                "brewery_page_url": "/BlueMoonBrewingCompany",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-127804_1a670.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "BlueMoonBrewCo",
                                    "facebook": "https://www.facebook.com/bluemoon",
                                    "url": "http://www.bluemoonbrewingcompany.com/"
                                },
                                "location": {
                                    "brewery_city": "Denver",
                                    "brewery_state": "CO",
                                    "lat": 39.7561,
                                    "lng": -104.992
                                },
                                "brewery_active": 1
                            },
                            "venue": {
                                "venue_id": 7733599,
                                "venue_name": "Pinehill Terrace",
                                "venue_slug": "pinehill-terrace",
                                "primary_category_key": "Nightlife Spot",
                                "primary_category": "Nightlife Spot",
                                "parent_category_id": "4d4b7105d754a06376d81259",
                                "categories": {
                                    "count": 1,
                                    "items": [
                                        {
                                            "category_key": "beach_bar",
                                            "category_name": "Beach Bar",
                                            "category_id": "52e81612bcbc57f1066b7a0d",
                                            "is_primary": true
                                        }
                                    ]
                                },
                                "location": {
                                    "venue_address": "Mäntymäentie",
                                    "venue_city": "Helsinki",
                                    "venue_state": "Uusimaa",
                                    "venue_country": "Suomi",
                                    "lat": 60.1836,
                                    "lng": 24.9289
                                },
                                "contact": {
                                    "twitter": "",
                                    "venue_url": ""
                                },
                                "foursquare": {
                                    "foursquare_id": "5b0014d8bfc6d0002c06b5d9",
                                    "foursquare_url": "https://4sq.com/2ItYEg6"
                                },
                                "venue_icon": {
                                    "sm": "https://ss3.4sqi.net/img/categories_v2/nightlife/default_bg_64.png",
                                    "md": "https://ss3.4sqi.net/img/categories_v2/nightlife/default_bg_88.png",
                                    "lg": "https://ss3.4sqi.net/img/categories_v2/nightlife/default_bg_512.png"
                                },
                                "is_verified": false
                            },
                            "comments": {
                                "total_count": 0,
                                "count": 0,
                                "items": []
                            },
                            "toasts": {
                                "total_count": 0,
                                "count": 0,
                                "auth_toast": false,
                                "items": []
                            },
                            "media": {
                                "count": 1,
                                "items": [
                                    {
                                        "photo_id": 247105704,
                                        "photo": {
                                            "photo_img_sm": "https://untappd.akamaized.net/photos/2019_08_10/5c3484033ac97fbafc1c8ebdb27ef070_200x200.jpg",
                                            "photo_img_md": "https://untappd.akamaized.net/photos/2019_08_10/5c3484033ac97fbafc1c8ebdb27ef070_640x640.jpg",
                                            "photo_img_lg": "https://untappd.akamaized.net/photos/2019_08_10/5c3484033ac97fbafc1c8ebdb27ef070_1280x1280.jpg",
                                            "photo_img_og": "https://untappd.akamaized.net/photos/2019_08_10/5c3484033ac97fbafc1c8ebdb27ef070_raw.jpg"
                                        }
                                    }
                                ]
                            },
                            "source": {
                                "app_name": "Untappd for iPhone - (V2)",
                                "app_website": "http://untpd.it/iphoneapp"
                            },
                            "badges": {
                                "retro_status": false,
                                "count": 2,
                                "items": [
                                    {
                                        "badge_id": 133156,
                                        "user_badge_id": 549182156,
                                        "badge_name": "99 Bottles (Level 3)",
                                        "badge_description": "99 bottles of beer on the wall, 99 bottles of beer. Take one down, pass it around.... That's 15 checkins with the serving style of Bottle. Try 5 more for Level 4!",
                                        "created_at": "Sat, 10 Aug 2019 16:05:56 +0000",
                                        "badge_image": {
                                            "sm": "https://untappd.akamaized.net/badges/bdg_99Bottles_sm.jpg",
                                            "md": "https://untappd.akamaized.net/badges/bdg_99Bottles_md.jpg",
                                            "lg": "https://untappd.akamaized.net/badges/bdg_99Bottles_lg.jpg"
                                        }
                                    },
                                    {
                                        "badge_id": 5634,
                                        "user_badge_id": 549182157,
                                        "badge_name": "Wheel of Styles (Level 5)",
                                        "badge_description": "Round and round the wheel goes! Which style you’ll be drinking, nobody knows! Your desire to explore different styles is inspiring. Keep it up! That's a check-in to at least 25 different styles. Try 5 more for Level 6!",
                                        "created_at": "Sat, 10 Aug 2019 16:05:56 +0000",
                                        "badge_image": {
                                            "sm": "https://untappd.akamaized.net/badges/bdg_WheelofStyles_sm.jpg",
                                            "md": "https://untappd.akamaized.net/badges/bdg_WheelofStyles_md.jpg",
                                            "lg": "https://untappd.akamaized.net/badges/bdg_WheelofStyles_lg.jpg"
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "checkin_id": 789626661,
                            "created_at": "Sat, 10 Aug 2019 16:05:24 +0000",
                            "checkin_comment": "",
                            "rating_score": 0,
                            "user": {
                                "uid": 84568,
                                "user_name": "Eleni97",
                                "first_name": "Eleni",
                                "last_name": "H.",
                                "location": "Ostrander",
                                "url": "",
                                "is_supporter": 0,
                                "bio": "",
                                "relationship": null,
                                "user_avatar": "https://untappd.akamaized.net/profile/d12a4db512d81604093d12f139f0972a_100x100.jpg",
                                "is_private": 0
                            },
                            "beer": {
                                "bid": 3839,
                                "beer_name": "Belgian White",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg",
                                "beer_abv": 5.4,
                                "beer_ibu": 9,
                                "beer_slug": "blue-moon-brewing-company-belgian-white",
                                "beer_description": "Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.",
                                "beer_style": "Witbier",
                                "has_had": false,
                                "beer_active": 1
                            },
                            "brewery": {
                                "brewery_id": 127804,
                                "brewery_name": "Blue Moon Brewing Company",
                                "brewery_slug": "blue-moon-brewing-company",
                                "brewery_page_url": "/BlueMoonBrewingCompany",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-127804_1a670.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "BlueMoonBrewCo",
                                    "facebook": "https://www.facebook.com/bluemoon",
                                    "url": "http://www.bluemoonbrewingcompany.com/"
                                },
                                "location": {
                                    "brewery_city": "Denver",
                                    "brewery_state": "CO",
                                    "lat": 39.7561,
                                    "lng": -104.992
                                },
                                "brewery_active": 1
                            },
                            "venue": {
                                "venue_id": 236664,
                                "venue_name": "Bummz Beach Cafe",
                                "venue_slug": "bummz-beach-cafe",
                                "primary_category_key": "Nightlife Spot",
                                "primary_category": "Nightlife Spot",
                                "parent_category_id": "4d4b7105d754a06376d81259",
                                "categories": {
                                    "count": 3,
                                    "items": [
                                        {
                                            "category_key": "bar",
                                            "category_name": "Bar",
                                            "category_id": "4bf58dd8d48988d116941735",
                                            "is_primary": true
                                        },
                                        {
                                            "category_key": "cafe",
                                            "category_name": "Café",
                                            "category_id": "4bf58dd8d48988d16d941735",
                                            "is_primary": false
                                        },
                                        {
                                            "category_key": "american_restaurant",
                                            "category_name": "American Restaurant",
                                            "category_id": "4bf58dd8d48988d14e941735",
                                            "is_primary": false
                                        }
                                    ]
                                },
                                "location": {
                                    "venue_address": "2002 N Ocean Blvd",
                                    "venue_city": "Myrtle Beach",
                                    "venue_state": "SC",
                                    "venue_country": "United States",
                                    "lat": 33.6999,
                                    "lng": -78.8708
                                },
                                "contact": {
                                    "twitter": "",
                                    "venue_url": "http://www.bummz.com"
                                },
                                "foursquare": {
                                    "foursquare_id": "4bb662a42f70c9b644558530",
                                    "foursquare_url": "http://4sq.com/9YsR1S"
                                },
                                "venue_icon": {
                                    "sm": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png",
                                    "md": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png",
                                    "lg": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png"
                                },
                                "is_verified": false
                            },
                            "comments": {
                                "total_count": 0,
                                "count": 0,
                                "items": []
                            },
                            "toasts": {
                                "total_count": 0,
                                "count": 0,
                                "auth_toast": false,
                                "items": []
                            },
                            "media": {
                                "count": 0,
                                "items": []
                            },
                            "source": {
                                "app_name": "Untappd for Android - (V2)",
                                "app_website": "http://untpd.it/androidapp"
                            },
                            "badges": {
                                "count": 0,
                                "items": []
                            }
                        },
                        {
                            "checkin_id": 789626207,
                            "created_at": "Sat, 10 Aug 2019 16:04:42 +0000",
                            "checkin_comment": "",
                            "rating_score": 2.75,
                            "user": {
                                "uid": 6760695,
                                "user_name": "Jasonsbeerdrinking",
                                "first_name": "Jason",
                                "last_name": "H.",
                                "location": "",
                                "url": "",
                                "is_supporter": 0,
                                "bio": "",
                                "relationship": null,
                                "user_avatar": "https://untappd.akamaized.net/profile/39afad3d51867a4fc9586e234a1ab602-fb_100x100.jpg",
                                "is_private": 0
                            },
                            "beer": {
                                "bid": 3839,
                                "beer_name": "Belgian White",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg",
                                "beer_abv": 5.4,
                                "beer_ibu": 9,
                                "beer_slug": "blue-moon-brewing-company-belgian-white",
                                "beer_description": "Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.",
                                "beer_style": "Witbier",
                                "has_had": false,
                                "beer_active": 1
                            },
                            "brewery": {
                                "brewery_id": 127804,
                                "brewery_name": "Blue Moon Brewing Company",
                                "brewery_slug": "blue-moon-brewing-company",
                                "brewery_page_url": "/BlueMoonBrewingCompany",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-127804_1a670.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "BlueMoonBrewCo",
                                    "facebook": "https://www.facebook.com/bluemoon",
                                    "url": "http://www.bluemoonbrewingcompany.com/"
                                },
                                "location": {
                                    "brewery_city": "Denver",
                                    "brewery_state": "CO",
                                    "lat": 39.7561,
                                    "lng": -104.992
                                },
                                "brewery_active": 1
                            },
                            "venue": {
                                "venue_id": 8767922,
                                "venue_name": "The Dog House",
                                "venue_slug": "the-dog-house",
                                "primary_category_key": "Nightlife Spot",
                                "primary_category": "Nightlife Spot",
                                "parent_category_id": "4d4b7105d754a06376d81259",
                                "categories": {
                                    "count": 2,
                                    "items": [
                                        {
                                            "category_key": "pub",
                                            "category_name": "Pub",
                                            "category_id": "4bf58dd8d48988d11b941735",
                                            "is_primary": true
                                        },
                                        {
                                            "category_key": "hot_dog_joint",
                                            "category_name": "Hot Dog Joint",
                                            "category_id": "4bf58dd8d48988d16f941735",
                                            "is_primary": false
                                        }
                                    ]
                                },
                                "location": {
                                    "venue_address": "5 Martin Street",
                                    "venue_city": "Stafford",
                                    "venue_state": "Staffordshire",
                                    "venue_country": "United Kingdom",
                                    "lat": 52.8067,
                                    "lng": -2.11659
                                },
                                "contact": {
                                    "twitter": "",
                                    "venue_url": ""
                                },
                                "foursquare": {
                                    "foursquare_id": "5c8e695d4b78c500397883ed",
                                    "foursquare_url": "https://4sq.com/2u9qswL"
                                },
                                "venue_icon": {
                                    "sm": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png",
                                    "md": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png",
                                    "lg": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png"
                                },
                                "is_verified": false
                            },
                            "comments": {
                                "total_count": 0,
                                "count": 0,
                                "items": []
                            },
                            "toasts": {
                                "total_count": 0,
                                "count": 0,
                                "auth_toast": false,
                                "items": []
                            },
                            "media": {
                                "count": 0,
                                "items": []
                            },
                            "source": {
                                "app_name": "Untappd for Android - (V2)",
                                "app_website": "http://untpd.it/androidapp"
                            },
                            "badges": {
                                "retro_status": false,
                                "count": 3,
                                "items": [
                                    {
                                        "badge_id": 243507,
                                        "user_badge_id": 549181356,
                                        "badge_name": "Brewery Pioneer (Level 12)",
                                        "badge_description": "There's beer in them thar hills! You're setting off on your journey through the world of beer, but be sure to take a little time to get to know each brewery as you go. That's a beer from 60 different breweries. Try 5 more for Level 13!",
                                        "created_at": "Sat, 10 Aug 2019 16:04:44 +0000",
                                        "badge_image": {
                                            "sm": "https://untappd.akamaized.net/badges/bdg_brewery_prioneer_sm.jpg",
                                            "md": "https://untappd.akamaized.net/badges/bdg_brewery_prioneer_sm.jpg",
                                            "lg": "https://untappd.akamaized.net/badges/bdg_brewery_prioneer_sm.jpg"
                                        }
                                    },
                                    {
                                        "badge_id": 133259,
                                        "user_badge_id": 549181357,
                                        "badge_name": "Draft City (Level 6)",
                                        "badge_description": "Fresh from the tap is one of the best ways to enjoy a beer. Just try to use a glass and not drink directly from the tap, as tempting as it may be. That's 30 checkins with the serving style of Draft. Try 5 more for Level 7!",
                                        "created_at": "Sat, 10 Aug 2019 16:04:44 +0000",
                                        "badge_image": {
                                            "sm": "https://untappd.akamaized.net/badges/bdg_DraftCity_sm.jpg",
                                            "md": "https://untappd.akamaized.net/badges/bdg_DraftCity_md.jpg",
                                            "lg": "https://untappd.akamaized.net/badges/bdg_DraftCity_lg.jpg"
                                        }
                                    },
                                    {
                                        "badge_id": 538,
                                        "user_badge_id": 549181358,
                                        "badge_name": "Land of the Free (Level 2)",
                                        "badge_description": "You’ve pledged allegiance, and now it’s time to enjoy some beer! Now remember, not all American beer is fizzy and yellow. That’s 10 different beers from a brewery in the United States. Try 5 more for Level 3.",
                                        "created_at": "Sat, 10 Aug 2019 16:04:44 +0000",
                                        "badge_image": {
                                            "sm": "https://untappd.akamaized.net/badges/bdg_america_sm.jpg",
                                            "md": "https://untappd.akamaized.net/badges/bdg_america_md.jpg",
                                            "lg": "https://untappd.akamaized.net/badges/bdg_america_lg.jpg"
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "checkin_id": 789624385,
                            "created_at": "Sat, 10 Aug 2019 16:01:44 +0000",
                            "checkin_comment": "",
                            "rating_score": 4,
                            "user": {
                                "uid": 1473297,
                                "user_name": "Xargash",
                                "first_name": "Sami",
                                "last_name": "V.",
                                "location": "Jyväskylä",
                                "url": "",
                                "is_supporter": 0,
                                "bio": "",
                                "relationship": null,
                                "user_avatar": "https://untappd.akamaized.net/profile/b9a4961a879751da4b58ed1fec970f70_100x100.jpg",
                                "is_private": 0
                            },
                            "beer": {
                                "bid": 3839,
                                "beer_name": "Belgian White",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg",
                                "beer_abv": 5.4,
                                "beer_ibu": 9,
                                "beer_slug": "blue-moon-brewing-company-belgian-white",
                                "beer_description": "Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.",
                                "beer_style": "Witbier",
                                "has_had": false,
                                "beer_active": 1
                            },
                            "brewery": {
                                "brewery_id": 127804,
                                "brewery_name": "Blue Moon Brewing Company",
                                "brewery_slug": "blue-moon-brewing-company",
                                "brewery_page_url": "/BlueMoonBrewingCompany",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-127804_1a670.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "BlueMoonBrewCo",
                                    "facebook": "https://www.facebook.com/bluemoon",
                                    "url": "http://www.bluemoonbrewingcompany.com/"
                                },
                                "location": {
                                    "brewery_city": "Denver",
                                    "brewery_state": "CO",
                                    "lat": 39.7561,
                                    "lng": -104.992
                                },
                                "brewery_active": 1
                            },
                            "venue": {
                                "venue_id": 4164551,
                                "venue_name": "Kinkovuori",
                                "venue_slug": "kinkovuori",
                                "primary_category_key": "Outdoors & Recreation",
                                "primary_category": "Outdoors & Recreation",
                                "parent_category_id": "4d4b7105d754a06377d81259",
                                "categories": {
                                    "count": 1,
                                    "items": [
                                        {
                                            "category_key": "neighborhood",
                                            "category_name": "Neighborhood",
                                            "category_id": "4f2a25ac4b909258e854f55f",
                                            "is_primary": true
                                        }
                                    ]
                                },
                                "location": {
                                    "venue_address": "",
                                    "venue_city": "",
                                    "venue_state": "",
                                    "venue_country": "Suomi",
                                    "lat": 62.1385,
                                    "lng": 25.7349
                                },
                                "contact": {
                                    "twitter": "",
                                    "venue_url": ""
                                },
                                "foursquare": {
                                    "foursquare_id": "4f5793bce4b0720e06bf0c4f",
                                    "foursquare_url": "http://4sq.com/y5S5jE"
                                },
                                "venue_icon": {
                                    "sm": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/neighborhood_bg_64.png",
                                    "md": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/neighborhood_bg_88.png",
                                    "lg": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/neighborhood_bg_512.png"
                                },
                                "is_verified": false
                            },
                            "comments": {
                                "total_count": 0,
                                "count": 0,
                                "items": []
                            },
                            "toasts": {
                                "total_count": 1,
                                "count": 0,
                                "auth_toast": null,
                                "items": []
                            },
                            "media": {
                                "count": 0,
                                "items": []
                            },
                            "source": {
                                "app_name": "Untappd for Android - (V2)",
                                "app_website": "http://untpd.it/androidapp"
                            },
                            "badges": {
                                "retro_status": false,
                                "count": 1,
                                "items": [
                                    {
                                        "badge_id": 133221,
                                        "user_badge_id": 549179419,
                                        "badge_name": "99 Bottles (Level 68)",
                                        "badge_description": "99 bottles of beer on the wall, 99 bottles of beer. Take one down, pass it around.... That's 340 checkins with the serving style of Bottle. Try 5 more for Level 69!",
                                        "created_at": "Sat, 10 Aug 2019 16:01:45 +0000",
                                        "badge_image": {
                                            "sm": "https://untappd.akamaized.net/badges/bdg_99Bottles_sm.jpg",
                                            "md": "https://untappd.akamaized.net/badges/bdg_99Bottles_md.jpg",
                                            "lg": "https://untappd.akamaized.net/badges/bdg_99Bottles_lg.jpg"
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "checkin_id": 789623014,
                            "created_at": "Sat, 10 Aug 2019 15:59:23 +0000",
                            "checkin_comment": "",
                            "rating_score": 4.5,
                            "user": {
                                "uid": 3282737,
                                "user_name": "purduemeister",
                                "first_name": "Doug",
                                "last_name": "H.",
                                "location": "",
                                "url": "",
                                "is_supporter": 0,
                                "bio": "",
                                "relationship": null,
                                "user_avatar": "https://gravatar.com/avatar/26c28c0ae9b3b46490c6b7db31f98a1e?size=100&d=https%3A%2F%2Funtappd.akamaized.net%2Fsite%2Fassets%2Fimages%2Fdefault_avatar_v3_gravatar.jpg%3Fv%3D2",
                                "is_private": 0
                            },
                            "beer": {
                                "bid": 3839,
                                "beer_name": "Belgian White",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg",
                                "beer_abv": 5.4,
                                "beer_ibu": 9,
                                "beer_slug": "blue-moon-brewing-company-belgian-white",
                                "beer_description": "Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.",
                                "beer_style": "Witbier",
                                "has_had": false,
                                "beer_active": 1
                            },
                            "brewery": {
                                "brewery_id": 127804,
                                "brewery_name": "Blue Moon Brewing Company",
                                "brewery_slug": "blue-moon-brewing-company",
                                "brewery_page_url": "/BlueMoonBrewingCompany",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-127804_1a670.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "BlueMoonBrewCo",
                                    "facebook": "https://www.facebook.com/bluemoon",
                                    "url": "http://www.bluemoonbrewingcompany.com/"
                                },
                                "location": {
                                    "brewery_city": "Denver",
                                    "brewery_state": "CO",
                                    "lat": 39.7561,
                                    "lng": -104.992
                                },
                                "brewery_active": 1
                            },
                            "venue": {
                                "venue_id": 357537,
                                "venue_name": "Susan Knapp Stage",
                                "venue_slug": "susan-knapp-stage",
                                "primary_category_key": "Arts & Entertainment",
                                "primary_category": "Arts & Entertainment",
                                "parent_category_id": "4d4b7104d754a06370d81259",
                                "categories": {
                                    "count": 2,
                                    "items": [
                                        {
                                            "category_key": "amphitheater",
                                            "category_name": "Amphitheater",
                                            "category_id": "56aa371be4b08b9a8d5734db",
                                            "is_primary": true
                                        },
                                        {
                                            "category_key": "fair",
                                            "category_name": "Fair",
                                            "category_id": "4eb1daf44b900d56c88a4600",
                                            "is_primary": false
                                        }
                                    ]
                                },
                                "location": {
                                    "venue_address": "34th & Grand",
                                    "venue_city": "Des Moines",
                                    "venue_state": "IA",
                                    "venue_country": "United States",
                                    "lat": 41.5965,
                                    "lng": -93.5492
                                },
                                "contact": {
                                    "twitter": "",
                                    "venue_url": ""
                                },
                                "foursquare": {
                                    "foursquare_id": "4c64a915f67ec9288cba5527",
                                    "foursquare_url": "http://4sq.com/aNQDlm"
                                },
                                "venue_icon": {
                                    "sm": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/default_bg_64.png",
                                    "md": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/default_bg_88.png",
                                    "lg": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/default_bg_512.png"
                                },
                                "is_verified": false
                            },
                            "comments": {
                                "total_count": 0,
                                "count": 0,
                                "items": []
                            },
                            "toasts": {
                                "total_count": 0,
                                "count": 0,
                                "auth_toast": false,
                                "items": []
                            },
                            "media": {
                                "count": 0,
                                "items": []
                            },
                            "source": {
                                "app_name": "Untappd for iPhone - (V2)",
                                "app_website": "http://untpd.it/iphoneapp"
                            },
                            "badges": {
                                "retro_status": false,
                                "count": 1,
                                "items": [
                                    {
                                        "badge_id": 773,
                                        "user_badge_id": 549178031,
                                        "badge_name": "Visit The Beer Garden (Level 3)",
                                        "badge_description": "It can get pretty hot standing in the sun, but you’re obviously the smart one in the crowd because you’ve tracked down the beer garden! That's a beer at 15 different places categorized as a Conference or Festival. Try 5 more places for Level 4!",
                                        "created_at": "Sat, 10 Aug 2019 15:59:23 +0000",
                                        "badge_image": {
                                            "sm": "https://untappd.akamaized.net/badges/bdg_BeerGarden_sm.jpg",
                                            "md": "https://untappd.akamaized.net/badges/bdg_BeerGarden_md.jpg",
                                            "lg": "https://untappd.akamaized.net/badges/bdg_BeerGarden_lg.jpg"
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "checkin_id": 789622737,
                            "created_at": "Sat, 10 Aug 2019 15:58:53 +0000",
                            "checkin_comment": "",
                            "rating_score": 5,
                            "user": {
                                "uid": 6991984,
                                "user_name": "MRL513",
                                "first_name": "Michael",
                                "last_name": "L.",
                                "location": "",
                                "url": "",
                                "is_supporter": 0,
                                "bio": "",
                                "relationship": null,
                                "user_avatar": "https://gravatar.com/avatar/e5e99814bdcf3cdc4d1fba7b2441d07e?size=100&d=https%3A%2F%2Funtappd.akamaized.net%2Fsite%2Fassets%2Fimages%2Fdefault_avatar_v3_gravatar.jpg%3Fv%3D2",
                                "is_private": 0
                            },
                            "beer": {
                                "bid": 3839,
                                "beer_name": "Belgian White",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg",
                                "beer_abv": 5.4,
                                "beer_ibu": 9,
                                "beer_slug": "blue-moon-brewing-company-belgian-white",
                                "beer_description": "Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.",
                                "beer_style": "Witbier",
                                "has_had": false,
                                "beer_active": 1
                            },
                            "brewery": {
                                "brewery_id": 127804,
                                "brewery_name": "Blue Moon Brewing Company",
                                "brewery_slug": "blue-moon-brewing-company",
                                "brewery_page_url": "/BlueMoonBrewingCompany",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-127804_1a670.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "BlueMoonBrewCo",
                                    "facebook": "https://www.facebook.com/bluemoon",
                                    "url": "http://www.bluemoonbrewingcompany.com/"
                                },
                                "location": {
                                    "brewery_city": "Denver",
                                    "brewery_state": "CO",
                                    "lat": 39.7561,
                                    "lng": -104.992
                                },
                                "brewery_active": 1
                            },
                            "venue": [],
                            "comments": {
                                "total_count": 0,
                                "count": 0,
                                "items": []
                            },
                            "toasts": {
                                "total_count": 0,
                                "count": 0,
                                "auth_toast": false,
                                "items": []
                            },
                            "media": {
                                "count": 0,
                                "items": []
                            },
                            "source": {
                                "app_name": "Untappd for iPhone - (V2)",
                                "app_website": "http://untpd.it/iphoneapp"
                            },
                            "badges": {
                                "retro_status": false,
                                "count": 2,
                                "items": [
                                    {
                                        "badge_id": 34705,
                                        "user_badge_id": 549177705,
                                        "badge_name": "Middle of the Road",
                                        "badge_description": "Looking for more kick than a session beer, but want to be able to stay for a few rounds? You have to keep it in the middle. That's 5 beers with an ABV greater than 5% and less than 10%. Try 5 more for Level 2!",
                                        "created_at": "Sat, 10 Aug 2019 15:58:54 +0000",
                                        "badge_image": {
                                            "sm": "https://untappd.akamaized.net/badges/bdg_middle-of-the-road_sm.jpg",
                                            "md": "https://untappd.akamaized.net/badges/bdg_middle-of-the-road_md.jpg",
                                            "lg": "https://untappd.akamaized.net/badges/bdg_middle-of-the-road_lg.jpg"
                                        }
                                    },
                                    {
                                        "badge_id": 34606,
                                        "user_badge_id": 549177706,
                                        "badge_name": "Hopped Down (Level 2)",
                                        "badge_description": "One cannot live on dank hops alone. Tone down the bitterness and enjoy some smooth flavor. That's 10 different beers with an IBU of 20 or below. Try 5 more for Level 3!",
                                        "created_at": "Sat, 10 Aug 2019 15:58:54 +0000",
                                        "badge_image": {
                                            "sm": "https://untappd.akamaized.net/badges/bdg_HoppedDown_sm.jpg",
                                            "md": "https://untappd.akamaized.net/badges/bdg_HoppedDown_md.jpg",
                                            "lg": "https://untappd.akamaized.net/badges/bdg_HoppedDown_lg.jpg"
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "checkin_id": 789622702,
                            "created_at": "Sat, 10 Aug 2019 15:58:50 +0000",
                            "checkin_comment": "",
                            "rating_score": 3.25,
                            "user": {
                                "uid": 7018737,
                                "user_name": "Ribbie88",
                                "first_name": "Casper",
                                "last_name": "R.",
                                "location": "",
                                "url": "",
                                "is_supporter": 0,
                                "bio": "",
                                "relationship": null,
                                "user_avatar": "https://untappd.akamaized.net/profile/9c713659324dab306684d4fae6b19feb_100x100.jpg",
                                "is_private": 0
                            },
                            "beer": {
                                "bid": 3839,
                                "beer_name": "Belgian White",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg",
                                "beer_abv": 5.4,
                                "beer_ibu": 9,
                                "beer_slug": "blue-moon-brewing-company-belgian-white",
                                "beer_description": "Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.",
                                "beer_style": "Witbier",
                                "has_had": false,
                                "beer_active": 1
                            },
                            "brewery": {
                                "brewery_id": 127804,
                                "brewery_name": "Blue Moon Brewing Company",
                                "brewery_slug": "blue-moon-brewing-company",
                                "brewery_page_url": "/BlueMoonBrewingCompany",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-127804_1a670.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "BlueMoonBrewCo",
                                    "facebook": "https://www.facebook.com/bluemoon",
                                    "url": "http://www.bluemoonbrewingcompany.com/"
                                },
                                "location": {
                                    "brewery_city": "Denver",
                                    "brewery_state": "CO",
                                    "lat": 39.7561,
                                    "lng": -104.992
                                },
                                "brewery_active": 1
                            },
                            "venue": [],
                            "comments": {
                                "total_count": 0,
                                "count": 0,
                                "items": []
                            },
                            "toasts": {
                                "total_count": 0,
                                "count": 0,
                                "auth_toast": false,
                                "items": []
                            },
                            "media": {
                                "count": 0,
                                "items": []
                            },
                            "source": {
                                "app_name": "Untappd for iPhone - (V2)",
                                "app_website": "http://untpd.it/iphoneapp"
                            },
                            "badges": {
                                "retro_status": false,
                                "count": 2,
                                "items": [
                                    {
                                        "badge_id": 40,
                                        "user_badge_id": 549177667,
                                        "badge_name": "Taste Crazy",
                                        "badge_description": "Are you crazy? Five different types of beer in one day? Hope you were just sampling.",
                                        "created_at": "Sat, 10 Aug 2019 15:58:51 +0000",
                                        "badge_image": {
                                            "sm": "https://untappd.akamaized.net/badges/bdg_tasteCrazy_sm.jpg",
                                            "md": "https://untappd.akamaized.net/badges/bdg_tasteCrazy_md.jpg",
                                            "lg": "https://untappd.akamaized.net/badges/bdg_tasteCrazy_lg.jpg"
                                        }
                                    },
                                    {
                                        "badge_id": 5115,
                                        "user_badge_id": 549177668,
                                        "badge_name": "Wheel of Styles",
                                        "badge_description": "Round and round the wheel goes! Which style you’ll be drinking, nobody knows! Your desire to explore different styles is inspiring. Keep it up! That's a check-in to at least 5 different styles. Try 5 more for Level 2!",
                                        "created_at": "Sat, 10 Aug 2019 15:58:51 +0000",
                                        "badge_image": {
                                            "sm": "https://untappd.akamaized.net/badges/bdg_WheelofStyles_sm.jpg",
                                            "md": "https://untappd.akamaized.net/badges/bdg_WheelofStyles_md.jpg",
                                            "lg": "https://untappd.akamaized.net/badges/bdg_WheelofStyles_lg.jpg"
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "checkin_id": 789619138,
                            "created_at": "Sat, 10 Aug 2019 15:52:29 +0000",
                            "checkin_comment": "",
                            "rating_score": 3.75,
                            "user": {
                                "uid": 5731073,
                                "user_name": "Mattias1pint",
                                "first_name": "Mattias",
                                "last_name": "U.",
                                "location": "",
                                "url": "",
                                "is_supporter": 0,
                                "bio": "",
                                "relationship": null,
                                "user_avatar": "https://gravatar.com/avatar/aba7f842d26f543eed221b3c152323cd?size=100&d=https%3A%2F%2Funtappd.akamaized.net%2Fsite%2Fassets%2Fimages%2Fdefault_avatar_v3_gravatar.jpg%3Fv%3D2",
                                "is_private": 0
                            },
                            "beer": {
                                "bid": 3839,
                                "beer_name": "Belgian White",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg",
                                "beer_abv": 5.4,
                                "beer_ibu": 9,
                                "beer_slug": "blue-moon-brewing-company-belgian-white",
                                "beer_description": "Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.",
                                "beer_style": "Witbier",
                                "has_had": false,
                                "beer_active": 1
                            },
                            "brewery": {
                                "brewery_id": 127804,
                                "brewery_name": "Blue Moon Brewing Company",
                                "brewery_slug": "blue-moon-brewing-company",
                                "brewery_page_url": "/BlueMoonBrewingCompany",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-127804_1a670.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "BlueMoonBrewCo",
                                    "facebook": "https://www.facebook.com/bluemoon",
                                    "url": "http://www.bluemoonbrewingcompany.com/"
                                },
                                "location": {
                                    "brewery_city": "Denver",
                                    "brewery_state": "CO",
                                    "lat": 39.7561,
                                    "lng": -104.992
                                },
                                "brewery_active": 1
                            },
                            "venue": {
                                "venue_id": 5842382,
                                "venue_name": "S.A.K.",
                                "venue_slug": "s-a-k",
                                "primary_category_key": "Food",
                                "primary_category": "Food",
                                "parent_category_id": "4d4b7105d754a06374d81259",
                                "categories": {
                                    "count": 1,
                                    "items": [
                                        {
                                            "category_key": "american_restaurant",
                                            "category_name": "American Restaurant",
                                            "category_id": "4bf58dd8d48988d14e941735",
                                            "is_primary": true
                                        }
                                    ]
                                },
                                "location": {
                                    "venue_address": "Kungsportsplatsen 1",
                                    "venue_city": "Göteborg",
                                    "venue_state": "Västra Götalands län",
                                    "venue_country": "Sverige",
                                    "lat": 57.7036,
                                    "lng": 11.9698
                                },
                                "contact": {
                                    "twitter": "",
                                    "venue_url": "http://www.sakrestaurang.se"
                                },
                                "foursquare": {
                                    "foursquare_id": "58839d5c03cf2556a1eb79a3",
                                    "foursquare_url": "http://4sq.com/2jM2unL"
                                },
                                "venue_icon": {
                                    "sm": "https://ss3.4sqi.net/img/categories_v2/food/default_bg_64.png",
                                    "md": "https://ss3.4sqi.net/img/categories_v2/food/default_bg_88.png",
                                    "lg": "https://ss3.4sqi.net/img/categories_v2/food/default_bg_512.png"
                                },
                                "is_verified": false
                            },
                            "comments": {
                                "total_count": 0,
                                "count": 0,
                                "items": []
                            },
                            "toasts": {
                                "total_count": 0,
                                "count": 0,
                                "auth_toast": false,
                                "items": []
                            },
                            "media": {
                                "count": 1,
                                "items": [
                                    {
                                        "photo_id": 247101838,
                                        "photo": {
                                            "photo_img_sm": "https://untappd.akamaized.net/photos/2019_08_10/6e725e401f767ebf7c11c307ef680039_200x200.jpg",
                                            "photo_img_md": "https://untappd.akamaized.net/photos/2019_08_10/6e725e401f767ebf7c11c307ef680039_640x640.jpg",
                                            "photo_img_lg": "https://untappd.akamaized.net/photos/2019_08_10/6e725e401f767ebf7c11c307ef680039_1280x1280.jpg",
                                            "photo_img_og": "https://untappd.akamaized.net/photos/2019_08_10/6e725e401f767ebf7c11c307ef680039_raw.jpg"
                                        }
                                    }
                                ]
                            },
                            "source": {
                                "app_name": "Untappd for iPhone - (V2)",
                                "app_website": "http://untpd.it/iphoneapp"
                            },
                            "badges": {
                                "retro_status": false,
                                "count": 1,
                                "items": [
                                    {
                                        "badge_id": 1816,
                                        "user_badge_id": 549173834,
                                        "badge_name": "Photogenic Brew  (Level 30)",
                                        "badge_description": "It takes the perfect amount of light, the right framing and a touch of creative love to get the perfect picture of your brew. Now it’s time to drink it! That’s 150 check-ins with a photo. ",
                                        "created_at": "Sat, 10 Aug 2019 15:52:29 +0000",
                                        "badge_image": {
                                            "sm": "https://untappd.akamaized.net/badges/bdg_beertography_sm.jpg",
                                            "md": "https://untappd.akamaized.net/badges/bdg_beertography_md.jpg",
                                            "lg": "https://untappd.akamaized.net/badges/bdg_beertography_lg.jpg"
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "checkin_id": 789616675,
                            "created_at": "Sat, 10 Aug 2019 15:48:08 +0000",
                            "checkin_comment": "",
                            "rating_score": 3.5,
                            "user": {
                                "uid": 4066812,
                                "user_name": "natet43",
                                "first_name": "Nathan",
                                "last_name": "",
                                "location": "",
                                "url": "",
                                "is_supporter": 0,
                                "bio": "",
                                "relationship": null,
                                "user_avatar": "https://untappd.akamaized.net/profile/10e54659fc8c8190f78c3f9856cf914f_100x100.jpg",
                                "is_private": 0
                            },
                            "beer": {
                                "bid": 3839,
                                "beer_name": "Belgian White",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg",
                                "beer_abv": 5.4,
                                "beer_ibu": 9,
                                "beer_slug": "blue-moon-brewing-company-belgian-white",
                                "beer_description": "Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.",
                                "beer_style": "Witbier",
                                "has_had": false,
                                "beer_active": 1
                            },
                            "brewery": {
                                "brewery_id": 127804,
                                "brewery_name": "Blue Moon Brewing Company",
                                "brewery_slug": "blue-moon-brewing-company",
                                "brewery_page_url": "/BlueMoonBrewingCompany",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-127804_1a670.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "BlueMoonBrewCo",
                                    "facebook": "https://www.facebook.com/bluemoon",
                                    "url": "http://www.bluemoonbrewingcompany.com/"
                                },
                                "location": {
                                    "brewery_city": "Denver",
                                    "brewery_state": "CO",
                                    "lat": 39.7561,
                                    "lng": -104.992
                                },
                                "brewery_active": 1
                            },
                            "venue": [],
                            "comments": {
                                "total_count": 0,
                                "count": 0,
                                "items": []
                            },
                            "toasts": {
                                "total_count": 0,
                                "count": 0,
                                "auth_toast": false,
                                "items": []
                            },
                            "media": {
                                "count": 0,
                                "items": []
                            },
                            "source": {
                                "app_name": "Untappd for iPhone - (V2)",
                                "app_website": "http://untpd.it/iphoneapp"
                            },
                            "badges": {
                                "count": 0,
                                "items": []
                            }
                        },
                        {
                            "checkin_id": 789614849,
                            "created_at": "Sat, 10 Aug 2019 15:44:56 +0000",
                            "checkin_comment": "",
                            "rating_score": 3.5,
                            "user": {
                                "uid": 6857516,
                                "user_name": "Marandaclan",
                                "first_name": "Sean",
                                "last_name": "M.",
                                "location": "",
                                "url": "",
                                "is_supporter": 0,
                                "bio": "",
                                "relationship": null,
                                "user_avatar": "https://untappd.akamaized.net/profile/8c77ac2d430101426b4996b6fc943daa-fb_100x100.jpg",
                                "is_private": 0
                            },
                            "beer": {
                                "bid": 3839,
                                "beer_name": "Belgian White",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3839_207a3_sm.jpeg",
                                "beer_abv": 5.4,
                                "beer_ibu": 9,
                                "beer_slug": "blue-moon-brewing-company-belgian-white",
                                "beer_description": "Blue Moon Belgian White, Belgian-style wheat ale, is a refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.",
                                "beer_style": "Witbier",
                                "has_had": false,
                                "beer_active": 1
                            },
                            "brewery": {
                                "brewery_id": 127804,
                                "brewery_name": "Blue Moon Brewing Company",
                                "brewery_slug": "blue-moon-brewing-company",
                                "brewery_page_url": "/BlueMoonBrewingCompany",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-127804_1a670.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "BlueMoonBrewCo",
                                    "facebook": "https://www.facebook.com/bluemoon",
                                    "url": "http://www.bluemoonbrewingcompany.com/"
                                },
                                "location": {
                                    "brewery_city": "Denver",
                                    "brewery_state": "CO",
                                    "lat": 39.7561,
                                    "lng": -104.992
                                },
                                "brewery_active": 1
                            },
                            "venue": {
                                "venue_id": 221757,
                                "venue_name": "84th St. Pub & Grill",
                                "venue_slug": "84th-st-pub-grill",
                                "primary_category_key": "Food",
                                "primary_category": "Food",
                                "parent_category_id": "4d4b7105d754a06374d81259",
                                "categories": {
                                    "count": 3,
                                    "items": [
                                        {
                                            "category_key": "restaurant",
                                            "category_name": "Restaurant",
                                            "category_id": "4bf58dd8d48988d1c4941735",
                                            "is_primary": true
                                        },
                                        {
                                            "category_key": "bar",
                                            "category_name": "Bar",
                                            "category_id": "4bf58dd8d48988d116941735",
                                            "is_primary": false
                                        },
                                        {
                                            "category_key": "pub",
                                            "category_name": "Pub",
                                            "category_id": "4bf58dd8d48988d11b941735",
                                            "is_primary": false
                                        }
                                    ]
                                },
                                "location": {
                                    "venue_address": "8282 Pfeiffer Farms Dr SW",
                                    "venue_city": "Byron Center",
                                    "venue_state": "MI",
                                    "venue_country": "United States",
                                    "lat": 42.8136,
                                    "lng": -85.6701
                                },
                                "contact": {
                                    "twitter": "",
                                    "venue_url": "http://84thstpub.com"
                                },
                                "foursquare": {
                                    "foursquare_id": "4c7285c69e706dcbc4f84a62",
                                    "foursquare_url": "http://4sq.com/dqVXCK"
                                },
                                "venue_icon": {
                                    "sm": "https://untappd.akamaized.net/venuelogos/venue_221757_fc53ec67_bg_64.png",
                                    "md": "https://untappd.akamaized.net/venuelogos/venue_221757_fc53ec67_bg_88.png",
                                    "lg": "https://untappd.akamaized.net/venuelogos/venue_221757_fc53ec67_bg_176.png?v=1"
                                },
                                "is_verified": true
                            },
                            "comments": {
                                "total_count": 0,
                                "count": 0,
                                "items": []
                            },
                            "toasts": {
                                "total_count": 0,
                                "count": 0,
                                "auth_toast": false,
                                "items": []
                            },
                            "media": {
                                "count": 0,
                                "items": []
                            },
                            "source": {
                                "app_name": "Untappd for iPhone - (V2)",
                                "app_website": "http://untpd.it/iphoneapp"
                            },
                            "badges": {
                                "retro_status": false,
                                "count": 2,
                                "items": [
                                    {
                                        "badge_id": 5583,
                                        "user_badge_id": 549169156,
                                        "badge_name": "Verified Adventure (Level 3)",
                                        "badge_description": "While spontaneity can be fun, sometimes you want to make sure your adventure will rock. Checkout the menu at an Untappd Verified Venue before visiting and know exactly what’s on tap! That's 15 check-ins at venue that is verified. Try 5 more for Level 4!",
                                        "created_at": "Sat, 10 Aug 2019 15:44:57 +0000",
                                        "badge_image": {
                                            "sm": "https://untappd.akamaized.net/badges/bdg_VerifiedVenue_sm.jpg",
                                            "md": "https://untappd.akamaized.net/badges/bdg_VerifiedVenue_md.jpg",
                                            "lg": "https://untappd.akamaized.net/badges/bdg_VerifiedVenue_lg.jpg"
                                        }
                                    },
                                    {
                                        "badge_id": 133258,
                                        "user_badge_id": 549169157,
                                        "badge_name": "Draft City (Level 5)",
                                        "badge_description": "Fresh from the tap is one of the best ways to enjoy a beer. Just try to use a glass and not drink directly from the tap, as tempting as it may be. That's 25 checkins with the serving style of Draft. Try 5 more for Level 6!",
                                        "created_at": "Sat, 10 Aug 2019 15:44:57 +0000",
                                        "badge_image": {
                                            "sm": "https://untappd.akamaized.net/badges/bdg_DraftCity_sm.jpg",
                                            "md": "https://untappd.akamaized.net/badges/bdg_DraftCity_md.jpg",
                                            "lg": "https://untappd.akamaized.net/badges/bdg_DraftCity_lg.jpg"
                                        }
                                    }
                                ]
                            }
                        }
                    ],
                    "pagination": {
                        "since_url": "https://api.untappd.com/v4/beer/checkins/3839?max_id=789614849",
                        "next_url": "https://api.untappd.com/v4/beer/checkins/3839?max_id=789614849",
                        "max_id": 789614849
                    }
                },
                "similar": {
                    "method": "es",
                    "count": 5,
                    "items": [
                        {
                            "rating_score": 3.29729,
                            "beer": {
                                "bid": 3977,
                                "beer_name": "Belgian White",
                                "beer_abv": 5.2,
                                "beer_ibu": 10,
                                "beer_slug": "shock-top-brewing-co-belgian-white",
                                "beer_style": "Witbier",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3977_a0cff_sm.jpeg",
                                "has_had": false
                            },
                            "brewery": {
                                "brewery_id": 148017,
                                "brewery_name": "Shock Top Brewing Co.",
                                "brewery_slug": "shock-top-brewing-co",
                                "brewery_page_url": "/ShockTopBrewingCo",
                                "brewery_type": "Macro Brewery",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-148017_d4ea6.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "ShockTop",
                                    "facebook": "https://www.facebook.com/ShockTop",
                                    "instagram": "shocktop",
                                    "url": "http://www.shocktopbeer.com"
                                },
                                "location": {
                                    "brewery_city": "St Louis",
                                    "brewery_state": "MO",
                                    "lat": 38.5999,
                                    "lng": -90.2091
                                },
                                "brewery_active": 1
                            },
                            "friends": {
                                "items": [],
                                "count": 0
                            }
                        },
                        {
                            "rating_score": 3.49148,
                            "beer": {
                                "bid": 5999,
                                "beer_name": "1664 Blanc",
                                "beer_abv": 5,
                                "beer_ibu": 7,
                                "beer_slug": "kronenbourg-brewery-1664-blanc",
                                "beer_style": "Witbier",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-5999_4b862_sm.jpeg",
                                "has_had": false
                            },
                            "brewery": {
                                "brewery_id": 203,
                                "brewery_name": "Kronenbourg Brewery",
                                "brewery_slug": "kronenbourg-brewery",
                                "brewery_page_url": "/CarlsbergBeer",
                                "brewery_type": "Macro Brewery",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-203_273a9.jpeg",
                                "country_name": "France",
                                "contact": {
                                    "twitter": "kronenbourg1664",
                                    "facebook": "https://www.facebook.com/K1664USA/",
                                    "instagram": "kronenbourgsg",
                                    "url": "https://kronenbourg.com"
                                },
                                "location": {
                                    "brewery_city": "Strasbourg",
                                    "brewery_state": "Grand-Est",
                                    "lat": 48.5935,
                                    "lng": 7.71395
                                },
                                "brewery_active": 1
                            },
                            "friends": {
                                "items": [],
                                "count": 0
                            }
                        },
                        {
                            "rating_score": 3.76105,
                            "beer": {
                                "bid": 5862,
                                "beer_name": "White",
                                "beer_abv": 5.2,
                                "beer_ibu": 13,
                                "beer_slug": "allagash-brewing-company-white",
                                "beer_style": "Witbier",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-5862_2189b_sm.jpeg",
                                "has_had": false
                            },
                            "brewery": {
                                "brewery_id": 24,
                                "brewery_name": "Allagash Brewing Company",
                                "brewery_slug": "allagash-brewing-company",
                                "brewery_page_url": "/AllagashBrewingCompany",
                                "brewery_type": "Regional Brewery",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-24_9c24f.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "allagashbrewing",
                                    "facebook": "https://www.facebook.com/pages/Allagash-Brewing-Company/111357972232101?ref=ts&fref=ts",
                                    "instagram": "allagashbrewing",
                                    "url": "http://allagash.com"
                                },
                                "location": {
                                    "brewery_city": "Portland",
                                    "brewery_state": "ME",
                                    "lat": 43.7028,
                                    "lng": -70.3182
                                },
                                "brewery_active": 1
                            },
                            "friends": {
                                "items": [],
                                "count": 0
                            }
                        },
                        {
                            "rating_score": 3.88609,
                            "beer": {
                                "bid": 3770,
                                "beer_name": "Spotted Cow",
                                "beer_abv": 4.8,
                                "beer_ibu": 18,
                                "beer_slug": "new-glarus-brewing-company-spotted-cow",
                                "beer_style": "Farmhouse Ale - Saison",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-SpottedCow_3770.jpeg",
                                "has_had": false
                            },
                            "brewery": {
                                "brewery_id": 907,
                                "brewery_name": "New Glarus Brewing Company",
                                "brewery_slug": "new-glarus-brewing-company",
                                "brewery_page_url": "/NewGlarusBrewingCompany",
                                "brewery_type": "Regional Brewery",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-NewGlarusBrewingCompany_907.jpeg",
                                "country_name": "United States",
                                "contact": {
                                    "twitter": "newglarusbeer",
                                    "facebook": "http://www.facebook.com/newglarusbrewing",
                                    "instagram": "",
                                    "url": "http://www.newglarusbrewing.com/"
                                },
                                "location": {
                                    "brewery_city": "New Glarus",
                                    "brewery_state": "WI",
                                    "lat": 42.8171,
                                    "lng": -89.6306
                                },
                                "brewery_active": 1
                            },
                            "friends": {
                                "items": [],
                                "count": 0
                            }
                        },
                        {
                            "rating_score": 3.57169,
                            "beer": {
                                "bid": 6422,
                                "beer_name": "Hoegaarden Wit / Blanche",
                                "beer_abv": 4.9,
                                "beer_ibu": 15,
                                "beer_slug": "brouwerij-hoegaarden-hoegaarden-wit-blanche",
                                "beer_style": "Witbier",
                                "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-6422_60e97_sm.jpeg",
                                "has_had": false
                            },
                            "brewery": {
                                "brewery_id": 302,
                                "brewery_name": "Brouwerij Hoegaarden",
                                "brewery_slug": "brouwerij-hoegaarden",
                                "brewery_page_url": "/w/brouwerij-hoegaarden/302",
                                "brewery_type": "Macro Brewery",
                                "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-302_36d54.jpeg",
                                "country_name": "Belgium",
                                "contact": {
                                    "twitter": "hoegaarden",
                                    "facebook": "https://www.facebook.com/Hoegaarden/",
                                    "instagram": "hoegaardenofficial",
                                    "url": "http://www.hoegaarden.com"
                                },
                                "location": {
                                    "brewery_city": "Hoegaarden",
                                    "brewery_state": "Vlaams Brabant",
                                    "lat": 50.7777,
                                    "lng": 4.88662
                                },
                                "brewery_active": 1
                            },
                            "friends": {
                                "items": [],
                                "count": 0
                            }
                        }
                    ]
                },
                "friends": {
                    "items": [],
                    "count": 0
                },
                "weighted_rating_score": 3.49237,
                "beer_active": 1,
                "vintages": {
                    "count": 0,
                    "items": []
                },
                "brewed_by": {
                    "count": 0,
                    "items": []
                }
            }
        }
    }).pipe(map(beerInfo => {
        const beer: Beer = {
            bid: beerInfo.response.beer.bid,
            beer_name: beerInfo.response.beer.beer_name,
            beer_abv: beerInfo.response.beer.beer_abv + '%',
            rating_score: beerInfo.response.beer.rating_score,
            rating_count: beerInfo.response.beer.rating_count,
            brewery: beerInfo.response.beer.brewery,
            beer_description: beerInfo.response.beer.beer_description,
            beer_style: beerInfo.response.beer.beer_style,
            beer_ibu: beerInfo.response.beer.beer_ibu,
            beer_label: beerInfo.response.beer.beer_label
          };
          return beer;
    })).toPromise();

  }

  getSearchResults(text: string): Promise<SearchResult> {
      return of({
        "meta": {
            "code": 200,
            "response_time": {
                "time": 0.145,
                "measure": "seconds"
            },
            "init_time": {
                "time": 0,
                "measure": "seconds"
            }
        },
        "notifications": [],
        "response": {
            "message": "",
            "time_taken": 0.022,
            "brewery_id": 0,
            "search_type": "",
            "type_id": 0,
            "search_version": 4,
            "found": 164,
            "offset": 0,
            "limit": 25,
            "term": "offshoot",
            "parsed_term": "offshoot",
            "beers": {
                "count": 25,
                "items": [
                    {
                        "checkin_count": 42227,
                        "have_had": false,
                        "your_count": 0,
                        "beer": {
                            "bid": 2494337,
                            "beer_name": "Relax [it's just a hazy IPA]",
                            "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-2494337_cab19_sm.jpeg",
                            "beer_abv": 6.8,
                            "beer_slug": "offshoot-beer-co-relax-its-just-a-hazy-ipa",
                            "beer_ibu": 0,
                            "beer_description": "Relax [it’s just a hazy IPA] embraces the new way to enjoy IPA - unfiltered, fresh and full of hop flavor and aromatics... without the bitterness to stand in the way of kicking back with a juicy beer. It features a combination of Citra, Centennial, Simcoe and Amarillo hops, imparting fruity, tropical and citrusy notes to complement the round, soft mouthfeel of a hazy IPA.",
                            "created_at": "Wed, 31 Jan 2018 23:45:00 +0000",
                            "beer_style": "IPA - New England",
                            "in_production": 1,
                            "auth_rating": 0,
                            "wish_list": false
                        },
                        "brewery": {
                            "brewery_id": 332940,
                            "brewery_name": "Offshoot Beer Co.",
                            "brewery_slug": "offshoot-beer-co",
                            "brewery_page_url": "/OffshootBeerCo",
                            "brewery_type": "Micro Brewery",
                            "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-332940_487d5.jpeg",
                            "country_name": "United States",
                            "contact": {
                                "twitter": "offshootbeerco",
                                "facebook": "https://www.facebook.com/offshootbeerco",
                                "instagram": "offshootbeerco",
                                "url": "https://www.offshootbeer.com/"
                            },
                            "location": {
                                "brewery_city": "Placentia",
                                "brewery_state": "CA",
                                "lat": 33.8621,
                                "lng": -117.88
                            },
                            "brewery_active": 1
                        }
                    },
                    {
                        "checkin_count": 4838,
                        "have_had": false,
                        "your_count": 0,
                        "beer": {
                            "bid": 3135761,
                            "beer_name": "Retreat [This Is A Hazy Double IPA]",
                            "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3135761_383fb_sm.jpeg",
                            "beer_abv": 8.6,
                            "beer_slug": "offshoot-beer-co-retreat-this-is-a-hazy-double-ipa",
                            "beer_ibu": 0,
                            "beer_description": "This hazy DIPA is brewed with a simple malt bill and hopped heavily with fruit-forward Mosaic, Cashmere\r\nand El Dorado. Laced with delicate and aromatic tropical notes along with a bright berry medley and a crisp mouthfeel, it’s like diving into the Pacific on a 90 degree day. Seriously, nothin’ beats the heat, like Retreat.",
                            "created_at": "Wed, 20 Mar 2019 17:47:08 +0000",
                            "beer_style": "IPA - Imperial / Double New England",
                            "in_production": 1,
                            "auth_rating": 0,
                            "wish_list": false
                        },
                        "brewery": {
                            "brewery_id": 332940,
                            "brewery_name": "Offshoot Beer Co.",
                            "brewery_slug": "offshoot-beer-co",
                            "brewery_page_url": "/OffshootBeerCo",
                            "brewery_type": "Micro Brewery",
                            "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-332940_487d5.jpeg",
                            "country_name": "United States",
                            "contact": {
                                "twitter": "offshootbeerco",
                                "facebook": "https://www.facebook.com/offshootbeerco",
                                "instagram": "offshootbeerco",
                                "url": "https://www.offshootbeer.com/"
                            },
                            "location": {
                                "brewery_city": "Placentia",
                                "brewery_state": "CA",
                                "lat": 33.8621,
                                "lng": -117.88
                            },
                            "brewery_active": 1
                        }
                    },
                    {
                        "checkin_count": 2818,
                        "have_had": false,
                        "your_count": 0,
                        "beer": {
                            "bid": 2379625,
                            "beer_name": "Friendsgiving",
                            "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-2379625_cfa57_sm.jpeg",
                            "beer_abv": 8.1,
                            "beer_slug": "offshoot-beer-co-friendsgiving",
                            "beer_ibu": 0,
                            "beer_description": "Hoppy, hazy DIPA gathering of Galaxy, Mosaic, Motueka and Cashmere hops. Brewed with CMC Superior Pilsen and 2 Row malt, Unmalted Wheat and Oats. Released with thanks (and Hop Luck) on November 13, 2017.",
                            "created_at": "Fri, 10 Nov 2017 04:43:49 +0000",
                            "beer_style": "IPA - Imperial / Double",
                            "in_production": 1,
                            "auth_rating": 0,
                            "wish_list": false
                        },
                        "brewery": {
                            "brewery_id": 332940,
                            "brewery_name": "Offshoot Beer Co.",
                            "brewery_slug": "offshoot-beer-co",
                            "brewery_page_url": "/OffshootBeerCo",
                            "brewery_type": "Micro Brewery",
                            "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-332940_487d5.jpeg",
                            "country_name": "United States",
                            "contact": {
                                "twitter": "offshootbeerco",
                                "facebook": "https://www.facebook.com/offshootbeerco",
                                "instagram": "offshootbeerco",
                                "url": "https://www.offshootbeer.com/"
                            },
                            "location": {
                                "brewery_city": "Placentia",
                                "brewery_state": "CA",
                                "lat": 33.8621,
                                "lng": -117.88
                            },
                            "brewery_active": 1
                        }
                    },
                    {
                        "checkin_count": 2712,
                        "have_had": false,
                        "your_count": 0,
                        "beer": {
                            "bid": 2606920,
                            "beer_name": "1",
                            "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-2606920_1a17e_sm.jpeg",
                            "beer_abv": 8.5,
                            "beer_slug": "offshoot-beer-co-1",
                            "beer_ibu": 0,
                            "beer_description": "1 celebrates the one-year anniversary of Offshoot Beer Co. A double dry-hopped 100% Citra double IPA brewed with Golden Promise, Flaked Wheat, Rolled Oats, 2 Row, and London III yeast.",
                            "created_at": "Wed, 18 Apr 2018 00:19:54 +0000",
                            "beer_style": "IPA - Imperial / Double",
                            "in_production": 1,
                            "auth_rating": 0,
                            "wish_list": false
                        },
                        "brewery": {
                            "brewery_id": 332940,
                            "brewery_name": "Offshoot Beer Co.",
                            "brewery_slug": "offshoot-beer-co",
                            "brewery_page_url": "/OffshootBeerCo",
                            "brewery_type": "Micro Brewery",
                            "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-332940_487d5.jpeg",
                            "country_name": "United States",
                            "contact": {
                                "twitter": "offshootbeerco",
                                "facebook": "https://www.facebook.com/offshootbeerco",
                                "instagram": "offshootbeerco",
                                "url": "https://www.offshootbeer.com/"
                            },
                            "location": {
                                "brewery_city": "Placentia",
                                "brewery_state": "CA",
                                "lat": 33.8621,
                                "lng": -117.88
                            },
                            "brewery_active": 1
                        }
                    },
                    {
                        "checkin_count": 2445,
                        "have_had": false,
                        "your_count": 0,
                        "beer": {
                            "bid": 2475499,
                            "beer_name": "I Know You Are",
                            "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-2475499_979c8_sm.jpeg",
                            "beer_abv": 6.7,
                            "beer_slug": "offshoot-beer-co-i-know-you-are",
                            "beer_ibu": 0,
                            "beer_description": "Hazy IPA featuring Mosaic, Amarillo and El Dorado hops. Brewed with 2 Row malt, Pils malt and Flaked Wheat. Fermented with London III yeast. Released with “But What Am I?” in January 2018.",
                            "created_at": "Wed, 17 Jan 2018 06:09:44 +0000",
                            "beer_style": "IPA - New England",
                            "in_production": 1,
                            "auth_rating": 0,
                            "wish_list": false
                        },
                        "brewery": {
                            "brewery_id": 332940,
                            "brewery_name": "Offshoot Beer Co.",
                            "brewery_slug": "offshoot-beer-co",
                            "brewery_page_url": "/OffshootBeerCo",
                            "brewery_type": "Micro Brewery",
                            "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-332940_487d5.jpeg",
                            "country_name": "United States",
                            "contact": {
                                "twitter": "offshootbeerco",
                                "facebook": "https://www.facebook.com/offshootbeerco",
                                "instagram": "offshootbeerco",
                                "url": "https://www.offshootbeer.com/"
                            },
                            "location": {
                                "brewery_city": "Placentia",
                                "brewery_state": "CA",
                                "lat": 33.8621,
                                "lng": -117.88
                            },
                            "brewery_active": 1
                        }
                    },
                    {
                        "checkin_count": 1985,
                        "have_had": false,
                        "your_count": 0,
                        "beer": {
                            "bid": 2642465,
                            "beer_name": "So Good",
                            "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-2642465_0ad71_sm.jpeg",
                            "beer_abv": 8,
                            "beer_slug": "offshoot-beer-co-so-good",
                            "beer_ibu": 0,
                            "beer_description": "This fresh collaborative brew with Burgeon Beer Co. is a triple dry-hopped hazy double IPA, brewed with 2 Row, Golden Promise, Rolled Oats and Unmalted Wheat. It's fermented with two of our favorite yeast strains for hazy, hoppy juice bombs (London III and German Ale), and it features our breweries’ favorite hops as well - Cashmere, Citra, Mosaic and Vics Secret.",
                            "created_at": "Thu, 10 May 2018 21:30:49 +0000",
                            "beer_style": "IPA - Imperial / Double",
                            "in_production": 1,
                            "auth_rating": 0,
                            "wish_list": false
                        },
                        "brewery": {
                            "brewery_id": 332940,
                            "brewery_name": "Offshoot Beer Co.",
                            "brewery_slug": "offshoot-beer-co",
                            "brewery_page_url": "/OffshootBeerCo",
                            "brewery_type": "Micro Brewery",
                            "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-332940_487d5.jpeg",
                            "country_name": "United States",
                            "contact": {
                                "twitter": "offshootbeerco",
                                "facebook": "https://www.facebook.com/offshootbeerco",
                                "instagram": "offshootbeerco",
                                "url": "https://www.offshootbeer.com/"
                            },
                            "location": {
                                "brewery_city": "Placentia",
                                "brewery_state": "CA",
                                "lat": 33.8621,
                                "lng": -117.88
                            },
                            "brewery_active": 1
                        }
                    },
                    {
                        "checkin_count": 1891,
                        "have_had": false,
                        "your_count": 0,
                        "beer": {
                            "bid": 2379629,
                            "beer_name": "Hop Luck",
                            "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-2379629_ec6e7_sm.jpeg",
                            "beer_abv": 7.4,
                            "beer_slug": "offshoot-beer-co-hop-luck",
                            "beer_ibu": 0,
                            "beer_description": "Homemade SoCal IPA, featuring Simcoe, Mosaic, Amarillo and Centennial hops. Brewed with 2 Row, Vienna and Wheat malts. Fermented with California ale yeast. Released with thanks (and Friendsgiving) on November 13, 2017.",
                            "created_at": "Fri, 10 Nov 2017 04:46:10 +0000",
                            "beer_style": "IPA - American",
                            "in_production": 1,
                            "auth_rating": 0,
                            "wish_list": false
                        },
                        "brewery": {
                            "brewery_id": 332940,
                            "brewery_name": "Offshoot Beer Co.",
                            "brewery_slug": "offshoot-beer-co",
                            "brewery_page_url": "/OffshootBeerCo",
                            "brewery_type": "Micro Brewery",
                            "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-332940_487d5.jpeg",
                            "country_name": "United States",
                            "contact": {
                                "twitter": "offshootbeerco",
                                "facebook": "https://www.facebook.com/offshootbeerco",
                                "instagram": "offshootbeerco",
                                "url": "https://www.offshootbeer.com/"
                            },
                            "location": {
                                "brewery_city": "Placentia",
                                "brewery_state": "CA",
                                "lat": 33.8621,
                                "lng": -117.88
                            },
                            "brewery_active": 1
                        }
                    },
                    {
                        "checkin_count": 1851,
                        "have_had": false,
                        "your_count": 0,
                        "beer": {
                            "bid": 2346006,
                            "beer_name": "Shaken",
                            "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-2346006_44a73_sm.jpeg",
                            "beer_abv": 6.3,
                            "beer_slug": "offshoot-beer-co-shaken",
                            "beer_ibu": 0,
                            "beer_description": "Some call them \"Milkshake IPAs\". Our cream IPA is called Shaken (not Stirred), featuring peaches, vanilla and lactose with Citra, Amarillo and Huell Melon hops. Brewed with Pils, 2 Row, Oats and Carapils malt. Fermented with Barbarian yeast. Whipped up for first release on October 19, 2017.",
                            "created_at": "Thu, 19 Oct 2017 00:21:42 +0000",
                            "beer_style": "IPA - New England",
                            "in_production": 1,
                            "auth_rating": 0,
                            "wish_list": false
                        },
                        "brewery": {
                            "brewery_id": 332940,
                            "brewery_name": "Offshoot Beer Co.",
                            "brewery_slug": "offshoot-beer-co",
                            "brewery_page_url": "/OffshootBeerCo",
                            "brewery_type": "Micro Brewery",
                            "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-332940_487d5.jpeg",
                            "country_name": "United States",
                            "contact": {
                                "twitter": "offshootbeerco",
                                "facebook": "https://www.facebook.com/offshootbeerco",
                                "instagram": "offshootbeerco",
                                "url": "https://www.offshootbeer.com/"
                            },
                            "location": {
                                "brewery_city": "Placentia",
                                "brewery_state": "CA",
                                "lat": 33.8621,
                                "lng": -117.88
                            },
                            "brewery_active": 1
                        }
                    },
                    {
                        "checkin_count": 1825,
                        "have_had": false,
                        "your_count": 0,
                        "beer": {
                            "bid": 2744503,
                            "beer_name": "Raspberry Lemonade Milkshake",
                            "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-2744503_340a6_sm.jpeg",
                            "beer_abv": 6.5,
                            "beer_slug": "weldwerks-brewing-co-raspberry-lemonade-milkshake",
                            "beer_ibu": 0,
                            "beer_description": "Collaboration beer with 22 different breweries! This New England-style Milkshake IPA was brewed with lactose, Citra & Lemondrop hops, over 1,000 lbs of raspberries, nearly 150 lbs of lemons (zested and juiced by hand), vanilla, and 21 of our closest friends ;).",
                            "created_at": "Thu, 12 Jul 2018 20:08:01 +0000",
                            "beer_style": "IPA - Milkshake",
                            "in_production": 1,
                            "auth_rating": 0,
                            "wish_list": false
                        },
                        "brewery": {
                            "brewery_id": 185196,
                            "brewery_name": "WeldWerks Brewing Co.",
                            "brewery_slug": "weldwerks-brewing-co",
                            "brewery_page_url": "/WeldWerks",
                            "brewery_type": "Micro Brewery",
                            "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-185196_bdb12.jpeg",
                            "country_name": "United States",
                            "contact": {
                                "twitter": "weldwerksbrewco",
                                "facebook": "https://www.facebook.com/pages/WeldWerks-Brewing-Company/447933885339603?ref=br_tf",
                                "instagram": "weldwerksbrewco",
                                "url": "http://www.weldwerksbrewing.com"
                            },
                            "location": {
                                "brewery_city": "Greeley",
                                "brewery_state": "CO",
                                "lat": 40.4278,
                                "lng": -104.69
                            },
                            "brewery_active": 1
                        }
                    },
                    {
                        "checkin_count": 1738,
                        "have_had": false,
                        "your_count": 0,
                        "beer": {
                            "bid": 2552545,
                            "beer_name": "Taste That Taste",
                            "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-2552545_f402e_sm.jpeg",
                            "beer_abv": 8.5,
                            "beer_slug": "offshoot-beer-co-taste-that-taste",
                            "beer_ibu": 0,
                            "beer_description": "A hazy DIPA with Mosaic, Citra and African Queen hops. Brewed with 2 Row, Oats and Wheat malt, and fermented with London III yeast.",
                            "created_at": "Tue, 13 Mar 2018 22:51:54 +0000",
                            "beer_style": "IPA - Imperial / Double",
                            "in_production": 1,
                            "auth_rating": 0,
                            "wish_list": false
                        },
                        "brewery": {
                            "brewery_id": 332940,
                            "brewery_name": "Offshoot Beer Co.",
                            "brewery_slug": "offshoot-beer-co",
                            "brewery_page_url": "/OffshootBeerCo",
                            "brewery_type": "Micro Brewery",
                            "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-332940_487d5.jpeg",
                            "country_name": "United States",
                            "contact": {
                                "twitter": "offshootbeerco",
                                "facebook": "https://www.facebook.com/offshootbeerco",
                                "instagram": "offshootbeerco",
                                "url": "https://www.offshootbeer.com/"
                            },
                            "location": {
                                "brewery_city": "Placentia",
                                "brewery_state": "CA",
                                "lat": 33.8621,
                                "lng": -117.88
                            },
                            "brewery_active": 1
                        }
                    },
                    {
                        "checkin_count": 1731,
                        "have_had": false,
                        "your_count": 0,
                        "beer": {
                            "bid": 2427423,
                            "beer_name": "Watch This",
                            "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-2427423_6ee6e_sm.jpeg",
                            "beer_abv": 11.2,
                            "beer_slug": "offshoot-beer-co-watch-this",
                            "beer_ibu": 0,
                            "beer_description": "Hazy triple IPA featuring Citra, Galaxy and Cashmere hops. Brewed with 2 Row malt, Wheat malt and dextrose. Fermented with Barbarian yeast. Released on December 15, 2017, seconds after Hold My Beer.",
                            "created_at": "Wed, 13 Dec 2017 02:23:14 +0000",
                            "beer_style": "IPA - Triple",
                            "in_production": 1,
                            "auth_rating": 0,
                            "wish_list": false
                        },
                        "brewery": {
                            "brewery_id": 332940,
                            "brewery_name": "Offshoot Beer Co.",
                            "brewery_slug": "offshoot-beer-co",
                            "brewery_page_url": "/OffshootBeerCo",
                            "brewery_type": "Micro Brewery",
                            "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-332940_487d5.jpeg",
                            "country_name": "United States",
                            "contact": {
                                "twitter": "offshootbeerco",
                                "facebook": "https://www.facebook.com/offshootbeerco",
                                "instagram": "offshootbeerco",
                                "url": "https://www.offshootbeer.com/"
                            },
                            "location": {
                                "brewery_city": "Placentia",
                                "brewery_state": "CA",
                                "lat": 33.8621,
                                "lng": -117.88
                            },
                            "brewery_active": 1
                        }
                    },
                    {
                        "checkin_count": 1681,
                        "have_had": false,
                        "your_count": 0,
                        "beer": {
                            "bid": 2062197,
                            "beer_name": "Better Late Than Never",
                            "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-2062197_685bf_sm.jpeg",
                            "beer_abv": 8.5,
                            "beer_slug": "offshoot-beer-co-better-late-than-never",
                            "beer_ibu": 0,
                            "beer_description": "Juicy, hazy, double dry-hopped Vermont-style Double IPA gracing us with its presence and Mosaic, Vic Secret and Citra hops. Brewed with Golden Promise and Wheat malts, fermented with BSI-Barbarian, unfiltered and canned (April 25, 2017).",
                            "created_at": "Wed, 26 Apr 2017 21:53:59 +0000",
                            "beer_style": "IPA - Imperial / Double",
                            "in_production": 1,
                            "auth_rating": 0,
                            "wish_list": false
                        },
                        "brewery": {
                            "brewery_id": 332940,
                            "brewery_name": "Offshoot Beer Co.",
                            "brewery_slug": "offshoot-beer-co",
                            "brewery_page_url": "/OffshootBeerCo",
                            "brewery_type": "Micro Brewery",
                            "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-332940_487d5.jpeg",
                            "country_name": "United States",
                            "contact": {
                                "twitter": "offshootbeerco",
                                "facebook": "https://www.facebook.com/offshootbeerco",
                                "instagram": "offshootbeerco",
                                "url": "https://www.offshootbeer.com/"
                            },
                            "location": {
                                "brewery_city": "Placentia",
                                "brewery_state": "CA",
                                "lat": 33.8621,
                                "lng": -117.88
                            },
                            "brewery_active": 1
                        }
                    },
                    {
                        "checkin_count": 1656,
                        "have_had": false,
                        "your_count": 0,
                        "beer": {
                            "bid": 2513010,
                            "beer_name": "Cross My Heart",
                            "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-2513010_819be_sm.jpeg",
                            "beer_abv": 6.5,
                            "beer_slug": "offshoot-beer-co-cross-my-heart",
                            "beer_ibu": 0,
                            "beer_description": "Hazy IPA with tropical and citrusy notes from Mosaic, Simcoe, Vic's Secret and Crystal hops. Brewed with Pearl Malt, Carafoam and 2 Row malt and fermented with London III.",
                            "created_at": "Wed, 14 Feb 2018 22:01:29 +0000",
                            "beer_style": "IPA - New England",
                            "in_production": 1,
                            "auth_rating": 0,
                            "wish_list": false
                        },
                        "brewery": {
                            "brewery_id": 332940,
                            "brewery_name": "Offshoot Beer Co.",
                            "brewery_slug": "offshoot-beer-co",
                            "brewery_page_url": "/OffshootBeerCo",
                            "brewery_type": "Micro Brewery",
                            "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-332940_487d5.jpeg",
                            "country_name": "United States",
                            "contact": {
                                "twitter": "offshootbeerco",
                                "facebook": "https://www.facebook.com/offshootbeerco",
                                "instagram": "offshootbeerco",
                                "url": "https://www.offshootbeer.com/"
                            },
                            "location": {
                                "brewery_city": "Placentia",
                                "brewery_state": "CA",
                                "lat": 33.8621,
                                "lng": -117.88
                            },
                            "brewery_active": 1
                        }
                    },
                    {
                        "checkin_count": 1643,
                        "have_had": false,
                        "your_count": 0,
                        "beer": {
                            "bid": 2300223,
                            "beer_name": "10 Years",
                            "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-2300223_ec8b1_sm.jpeg",
                            "beer_abv": 8.2,
                            "beer_slug": "offshoot-beer-co-10-years",
                            "beer_ibu": 0,
                            "beer_description": "Hazy Citra DIPA collaboration with Highland Park Brewery named in honor of the first meeting of our founders/brewers and the birth of Citra hops (as HBC 394) 10 years ago. This ode to Citra features 100% Citra hops from over 10 different farms. Brewed with Pearl malt, Extra Pale Pils malt, Rolled Oats, Oat Malt and Carafoam. Fermented with London III yeast. Released on September 21, 2017.",
                            "created_at": "Wed, 20 Sep 2017 19:38:46 +0000",
                            "beer_style": "IPA - New England",
                            "in_production": 1,
                            "auth_rating": 0,
                            "wish_list": false
                        },
                        "brewery": {
                            "brewery_id": 332940,
                            "brewery_name": "Offshoot Beer Co.",
                            "brewery_slug": "offshoot-beer-co",
                            "brewery_page_url": "/OffshootBeerCo",
                            "brewery_type": "Micro Brewery",
                            "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-332940_487d5.jpeg",
                            "country_name": "United States",
                            "contact": {
                                "twitter": "offshootbeerco",
                                "facebook": "https://www.facebook.com/offshootbeerco",
                                "instagram": "offshootbeerco",
                                "url": "https://www.offshootbeer.com/"
                            },
                            "location": {
                                "brewery_city": "Placentia",
                                "brewery_state": "CA",
                                "lat": 33.8621,
                                "lng": -117.88
                            },
                            "brewery_active": 1
                        }
                    },
                    {
                        "checkin_count": 1586,
                        "have_had": false,
                        "your_count": 0,
                        "beer": {
                            "bid": 2062184,
                            "beer_name": "Fashionably Late",
                            "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-2062184_5ebec_sm.jpeg",
                            "beer_abv": 6.5,
                            "beer_slug": "offshoot-beer-co-fashionably-late",
                            "beer_ibu": 0,
                            "beer_description": "Juicy, hazy, double dry-hopped East Coast-style IPA showing up at just the right time to the party with Citra, El Dorado and Mandarina Bavaria hops. Brewed with Two-Row, Pale Wheat and rolled oats, fermented with S-04, unfiltered and canned (April 25, 2017).",
                            "created_at": "Wed, 26 Apr 2017 21:44:45 +0000",
                            "beer_style": "IPA - American",
                            "in_production": 1,
                            "auth_rating": 0,
                            "wish_list": false
                        },
                        "brewery": {
                            "brewery_id": 332940,
                            "brewery_name": "Offshoot Beer Co.",
                            "brewery_slug": "offshoot-beer-co",
                            "brewery_page_url": "/OffshootBeerCo",
                            "brewery_type": "Micro Brewery",
                            "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-332940_487d5.jpeg",
                            "country_name": "United States",
                            "contact": {
                                "twitter": "offshootbeerco",
                                "facebook": "https://www.facebook.com/offshootbeerco",
                                "instagram": "offshootbeerco",
                                "url": "https://www.offshootbeer.com/"
                            },
                            "location": {
                                "brewery_city": "Placentia",
                                "brewery_state": "CA",
                                "lat": 33.8621,
                                "lng": -117.88
                            },
                            "brewery_active": 1
                        }
                    },
                    {
                        "checkin_count": 1576,
                        "have_had": false,
                        "your_count": 0,
                        "beer": {
                            "bid": 2688492,
                            "beer_name": "Bravo",
                            "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-2688492_e57d4_sm.jpeg",
                            "beer_abv": 8.2,
                            "beer_slug": "offshoot-beer-co-bravo",
                            "beer_ibu": 0,
                            "beer_description": "Our second installment of our Black & White experimental limited release series. A hazy double IPA featuring 100% Nelson hops. Brewed with Golden Promise, 2 Row, Wheat, Oats, and fermented with London III.",
                            "created_at": "Thu, 07 Jun 2018 21:49:55 +0000",
                            "beer_style": "IPA - Imperial / Double",
                            "in_production": 1,
                            "auth_rating": 0,
                            "wish_list": false
                        },
                        "brewery": {
                            "brewery_id": 332940,
                            "brewery_name": "Offshoot Beer Co.",
                            "brewery_slug": "offshoot-beer-co",
                            "brewery_page_url": "/OffshootBeerCo",
                            "brewery_type": "Micro Brewery",
                            "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-332940_487d5.jpeg",
                            "country_name": "United States",
                            "contact": {
                                "twitter": "offshootbeerco",
                                "facebook": "https://www.facebook.com/offshootbeerco",
                                "instagram": "offshootbeerco",
                                "url": "https://www.offshootbeer.com/"
                            },
                            "location": {
                                "brewery_city": "Placentia",
                                "brewery_state": "CA",
                                "lat": 33.8621,
                                "lng": -117.88
                            },
                            "brewery_active": 1
                        }
                    },
                    {
                        "checkin_count": 1531,
                        "have_had": false,
                        "your_count": 0,
                        "beer": {
                            "bid": 2475502,
                            "beer_name": "But What Am I?",
                            "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-2475502_7cc5b_sm.jpeg",
                            "beer_abv": 8.3,
                            "beer_slug": "offshoot-beer-co-but-what-am-i",
                            "beer_ibu": 0,
                            "beer_description": "Hazy DIPA featuring Citra and Mosaic hops. Brewed with 2 Row malt, Pearl malt and Oats. Fermented with London III yeast. Released with “I Know You Are” in January 2018. ",
                            "created_at": "Wed, 17 Jan 2018 06:10:41 +0000",
                            "beer_style": "IPA - Imperial / Double",
                            "in_production": 1,
                            "auth_rating": 0,
                            "wish_list": false
                        },
                        "brewery": {
                            "brewery_id": 332940,
                            "brewery_name": "Offshoot Beer Co.",
                            "brewery_slug": "offshoot-beer-co",
                            "brewery_page_url": "/OffshootBeerCo",
                            "brewery_type": "Micro Brewery",
                            "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-332940_487d5.jpeg",
                            "country_name": "United States",
                            "contact": {
                                "twitter": "offshootbeerco",
                                "facebook": "https://www.facebook.com/offshootbeerco",
                                "instagram": "offshootbeerco",
                                "url": "https://www.offshootbeer.com/"
                            },
                            "location": {
                                "brewery_city": "Placentia",
                                "brewery_state": "CA",
                                "lat": 33.8621,
                                "lng": -117.88
                            },
                            "brewery_active": 1
                        }
                    },
                    {
                        "checkin_count": 1529,
                        "have_had": false,
                        "your_count": 0,
                        "beer": {
                            "bid": 2258573,
                            "beer_name": "Conditions",
                            "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-2258573_ab9f8_sm.jpeg",
                            "beer_abv": 8.3,
                            "beer_slug": "offshoot-beer-co-conditions",
                            "beer_ibu": 0,
                            "beer_description": "Unfiltered Double IPA with Citra, Simcoe, Cascade and Centennial hops. Brewed with 2 Row, Wheat Malt and Oat Malt. Fermented with London III yeast.",
                            "created_at": "Thu, 24 Aug 2017 19:55:22 +0000",
                            "beer_style": "IPA - New England",
                            "in_production": 1,
                            "auth_rating": 0,
                            "wish_list": false
                        },
                        "brewery": {
                            "brewery_id": 332940,
                            "brewery_name": "Offshoot Beer Co.",
                            "brewery_slug": "offshoot-beer-co",
                            "brewery_page_url": "/OffshootBeerCo",
                            "brewery_type": "Micro Brewery",
                            "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-332940_487d5.jpeg",
                            "country_name": "United States",
                            "contact": {
                                "twitter": "offshootbeerco",
                                "facebook": "https://www.facebook.com/offshootbeerco",
                                "instagram": "offshootbeerco",
                                "url": "https://www.offshootbeer.com/"
                            },
                            "location": {
                                "brewery_city": "Placentia",
                                "brewery_state": "CA",
                                "lat": 33.8621,
                                "lng": -117.88
                            },
                            "brewery_active": 1
                        }
                    },
                    {
                        "checkin_count": 1455,
                        "have_had": false,
                        "your_count": 0,
                        "beer": {
                            "bid": 2513011,
                            "beer_name": "Kiss My Elbow",
                            "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-2513011_ba31a_sm.jpeg",
                            "beer_abv": 10.5,
                            "beer_slug": "offshoot-beer-co-kiss-my-elbow",
                            "beer_ibu": 0,
                            "beer_description": "Fruity, massive, hazy TIPA featuring Citra, Nelson and Mandarina Bavaria hops. Brewed with 2 Row, Pils, Vienna malt and dextrose, and fermented with Barbarian yeast.",
                            "created_at": "Wed, 14 Feb 2018 22:02:48 +0000",
                            "beer_style": "IPA - Triple",
                            "in_production": 1,
                            "auth_rating": 0,
                            "wish_list": false
                        },
                        "brewery": {
                            "brewery_id": 332940,
                            "brewery_name": "Offshoot Beer Co.",
                            "brewery_slug": "offshoot-beer-co",
                            "brewery_page_url": "/OffshootBeerCo",
                            "brewery_type": "Micro Brewery",
                            "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-332940_487d5.jpeg",
                            "country_name": "United States",
                            "contact": {
                                "twitter": "offshootbeerco",
                                "facebook": "https://www.facebook.com/offshootbeerco",
                                "instagram": "offshootbeerco",
                                "url": "https://www.offshootbeer.com/"
                            },
                            "location": {
                                "brewery_city": "Placentia",
                                "brewery_state": "CA",
                                "lat": 33.8621,
                                "lng": -117.88
                            },
                            "brewery_active": 1
                        }
                    },
                    {
                        "checkin_count": 1353,
                        "have_had": false,
                        "your_count": 0,
                        "beer": {
                            "bid": 2346018,
                            "beer_name": "Stirred",
                            "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-2346018_5f0a2_sm.jpeg",
                            "beer_abv": 8.1,
                            "beer_slug": "offshoot-beer-co-stirred",
                            "beer_ibu": 0,
                            "beer_description": "How do you like your IPAs? Stirred? This hazy, 100% Mosaic DIPA was brewed with Golden Promise, 2-Row and Flaked Wheat and fermented with London III yeast. Canned and released on October 19, 2017 for ease of transport.",
                            "created_at": "Thu, 19 Oct 2017 00:27:24 +0000",
                            "beer_style": "IPA - Imperial / Double",
                            "in_production": 1,
                            "auth_rating": 0,
                            "wish_list": false
                        },
                        "brewery": {
                            "brewery_id": 332940,
                            "brewery_name": "Offshoot Beer Co.",
                            "brewery_slug": "offshoot-beer-co",
                            "brewery_page_url": "/OffshootBeerCo",
                            "brewery_type": "Micro Brewery",
                            "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-332940_487d5.jpeg",
                            "country_name": "United States",
                            "contact": {
                                "twitter": "offshootbeerco",
                                "facebook": "https://www.facebook.com/offshootbeerco",
                                "instagram": "offshootbeerco",
                                "url": "https://www.offshootbeer.com/"
                            },
                            "location": {
                                "brewery_city": "Placentia",
                                "brewery_state": "CA",
                                "lat": 33.8621,
                                "lng": -117.88
                            },
                            "brewery_active": 1
                        }
                    },
                    {
                        "checkin_count": 1351,
                        "have_had": false,
                        "your_count": 0,
                        "beer": {
                            "bid": 2097041,
                            "beer_name": "Horse",
                            "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-2097041_16a9c_sm.jpeg",
                            "beer_abv": 8.2,
                            "beer_slug": "offshoot-beer-co-horse",
                            "beer_ibu": 0,
                            "beer_description": "Juicy, hazy Vermont-style Double IPA with Citra, Huell Melon and Simcoe hops. Brewed with Two-Row, Pilsner and Rolled Oats, fermented with Barbarian yeast, unfiltered and canned just after (or before?) Cart on May 23, 2017.",
                            "created_at": "Wed, 17 May 2017 03:24:14 +0000",
                            "beer_style": "IPA - Imperial / Double",
                            "in_production": 1,
                            "auth_rating": 0,
                            "wish_list": false
                        },
                        "brewery": {
                            "brewery_id": 332940,
                            "brewery_name": "Offshoot Beer Co.",
                            "brewery_slug": "offshoot-beer-co",
                            "brewery_page_url": "/OffshootBeerCo",
                            "brewery_type": "Micro Brewery",
                            "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-332940_487d5.jpeg",
                            "country_name": "United States",
                            "contact": {
                                "twitter": "offshootbeerco",
                                "facebook": "https://www.facebook.com/offshootbeerco",
                                "instagram": "offshootbeerco",
                                "url": "https://www.offshootbeer.com/"
                            },
                            "location": {
                                "brewery_city": "Placentia",
                                "brewery_state": "CA",
                                "lat": 33.8621,
                                "lng": -117.88
                            },
                            "brewery_active": 1
                        }
                    },
                    {
                        "checkin_count": 1310,
                        "have_had": false,
                        "your_count": 0,
                        "beer": {
                            "bid": 2552541,
                            "beer_name": "Smell That Smell",
                            "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-2552541_0826e_sm.jpeg",
                            "beer_abv": 6.2,
                            "beer_slug": "offshoot-beer-co-smell-that-smell",
                            "beer_ibu": 0,
                            "beer_description": "Hazy IPA collaboration with Garage Project featuring, Nelson, Cashmere and Citra hops. Brewed with 2 Row, Oats and Golden Naked Oats malt, and fermented with London III yeast.",
                            "created_at": "Tue, 13 Mar 2018 22:46:00 +0000",
                            "beer_style": "IPA - New England",
                            "in_production": 1,
                            "auth_rating": 0,
                            "wish_list": false
                        },
                        "brewery": {
                            "brewery_id": 332940,
                            "brewery_name": "Offshoot Beer Co.",
                            "brewery_slug": "offshoot-beer-co",
                            "brewery_page_url": "/OffshootBeerCo",
                            "brewery_type": "Micro Brewery",
                            "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-332940_487d5.jpeg",
                            "country_name": "United States",
                            "contact": {
                                "twitter": "offshootbeerco",
                                "facebook": "https://www.facebook.com/offshootbeerco",
                                "instagram": "offshootbeerco",
                                "url": "https://www.offshootbeer.com/"
                            },
                            "location": {
                                "brewery_city": "Placentia",
                                "brewery_state": "CA",
                                "lat": 33.8621,
                                "lng": -117.88
                            },
                            "brewery_active": 1
                        }
                    },
                    {
                        "checkin_count": 1307,
                        "have_had": false,
                        "your_count": 0,
                        "beer": {
                            "bid": 3170527,
                            "beer_name": "2",
                            "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-3170527_d3069_sm.jpeg",
                            "beer_abv": 8.5,
                            "beer_slug": "offshoot-beer-co-2",
                            "beer_ibu": 0,
                            "beer_description": "2 celebrates the two-year anniversary of Offshoot Beer Co. with a double dry-hopped hazy double IPA brewed with Galaxy and Mosaic hops. ",
                            "created_at": "Thu, 11 Apr 2019 06:10:05 +0000",
                            "beer_style": "IPA - Imperial / Double New England",
                            "in_production": 1,
                            "auth_rating": 0,
                            "wish_list": false
                        },
                        "brewery": {
                            "brewery_id": 332940,
                            "brewery_name": "Offshoot Beer Co.",
                            "brewery_slug": "offshoot-beer-co",
                            "brewery_page_url": "/OffshootBeerCo",
                            "brewery_type": "Micro Brewery",
                            "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-332940_487d5.jpeg",
                            "country_name": "United States",
                            "contact": {
                                "twitter": "offshootbeerco",
                                "facebook": "https://www.facebook.com/offshootbeerco",
                                "instagram": "offshootbeerco",
                                "url": "https://www.offshootbeer.com/"
                            },
                            "location": {
                                "brewery_city": "Placentia",
                                "brewery_state": "CA",
                                "lat": 33.8621,
                                "lng": -117.88
                            },
                            "brewery_active": 1
                        }
                    },
                    {
                        "checkin_count": 1291,
                        "have_had": false,
                        "your_count": 0,
                        "beer": {
                            "bid": 2212891,
                            "beer_name": "Hops & Rec",
                            "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-2212891_23ab0_sm.jpeg",
                            "beer_abv": 8.1,
                            "beer_slug": "offshoot-beer-co-hops-and-rec",
                            "beer_ibu": 0,
                            "beer_description": "Unfiltered Double IPA with Simcoe, Mosaic and Cashmere hops. Brewed with Fawcett Pearl malt and oats. Fermented with Barbarian yeast. Canned for you to take on your next adventure on July 25, 2017.",
                            "created_at": "Thu, 27 Jul 2017 02:56:55 +0000",
                            "beer_style": "IPA - Imperial / Double",
                            "in_production": 1,
                            "auth_rating": 0,
                            "wish_list": false
                        },
                        "brewery": {
                            "brewery_id": 332940,
                            "brewery_name": "Offshoot Beer Co.",
                            "brewery_slug": "offshoot-beer-co",
                            "brewery_page_url": "/OffshootBeerCo",
                            "brewery_type": "Micro Brewery",
                            "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-332940_487d5.jpeg",
                            "country_name": "United States",
                            "contact": {
                                "twitter": "offshootbeerco",
                                "facebook": "https://www.facebook.com/offshootbeerco",
                                "instagram": "offshootbeerco",
                                "url": "https://www.offshootbeer.com/"
                            },
                            "location": {
                                "brewery_city": "Placentia",
                                "brewery_state": "CA",
                                "lat": 33.8621,
                                "lng": -117.88
                            },
                            "brewery_active": 1
                        }
                    },
                    {
                        "checkin_count": 1282,
                        "have_had": false,
                        "your_count": 0,
                        "beer": {
                            "bid": 2258577,
                            "beer_name": "Terms",
                            "beer_label": "https://untappd.akamaized.net/site/beer_logos/beer-2258577_74be3_sm.jpeg",
                            "beer_abv": 4.5,
                            "beer_slug": "offshoot-beer-co-terms",
                            "beer_ibu": 79,
                            "beer_description": "Super hoppy hazy session IPA with Mosaic, Citra and Ekuanot hops. Brewed with 2 Row, Pils, Rolled Oats and Golden Naked Oats. Fermented with Barbarian yeast.",
                            "created_at": "Thu, 24 Aug 2017 19:56:07 +0000",
                            "beer_style": "IPA - Session / India Session Ale",
                            "in_production": 1,
                            "auth_rating": 0,
                            "wish_list": false
                        },
                        "brewery": {
                            "brewery_id": 332940,
                            "brewery_name": "Offshoot Beer Co.",
                            "brewery_slug": "offshoot-beer-co",
                            "brewery_page_url": "/OffshootBeerCo",
                            "brewery_type": "Micro Brewery",
                            "brewery_label": "https://untappd.akamaized.net/site/brewery_logos/brewery-332940_487d5.jpeg",
                            "country_name": "United States",
                            "contact": {
                                "twitter": "offshootbeerco",
                                "facebook": "https://www.facebook.com/offshootbeerco",
                                "instagram": "offshootbeerco",
                                "url": "https://www.offshootbeer.com/"
                            },
                            "location": {
                                "brewery_city": "Placentia",
                                "brewery_state": "CA",
                                "lat": 33.8621,
                                "lng": -117.88
                            },
                            "brewery_active": 1
                        }
                    }
                ]
            },
            "homebrew": {
                "count": 0,
                "items": []
            },
            "breweries": {
                "items": [],
                "count": 0
            }
        }
    }).pipe(map((search: any) => {
        let beers: Beer[] = [];
        search.response.beers.items.forEach((beerInfo) => {
          const beer: Beer = {
            bid: beerInfo.beer.bid,
            beer_name: beerInfo.beer.beer_name,
            beer_abv: beerInfo.beer.beer_abv + '%',
            rating_score: beerInfo.beer.rating_score,
            rating_count: beerInfo.beer.rating_count,
            brewery: beerInfo.beer.brewery,
            beer_description: beerInfo.beer.beer_description,
            beer_style: beerInfo.beer.beer_style,
            beer_ibu: beerInfo.beer.beer_ibu,
            beer_label: beerInfo.beer.beer_label
          };
          beers.push(beer);
        })
        return {searchTerm: text, searchResult: beers};
      })).toPromise();
  }
}
