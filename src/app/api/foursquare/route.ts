
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { parameters } = await req.json();
 
        const queryString = new URLSearchParams(parameters).toString();

        const response = await fetch(`https://api.foursquare.com/v3/places/search?${queryString}`, {
            method: 'GET',
            headers:{
              accept: 'application/json',
              Authorization:  process.env.FOURSQUARE_API_KEY as string,
            }
        });

        if (!response.ok) {
            throw new Error('Failed to get response');  
        }

        const data = await response.json();
        return NextResponse.json(data || []);
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Failed to get response' }, { status: 500 });
    }
}

const sampleMockData  = [
    {
        "fsq_id": "string1",
        "categories": [
          {
            "id": 0,
            "name": "Pizza",
            "short_name": "string",
            "plural_name": "string",
            "icon": {
              "id": "string",
              "created_at": "2025-05-13T03:39:36.314Z",
              "prefix": "string",
              "suffix": "string",
              "width": 0,
              "height": 0,
              "classifications": [
                "string"
              ],
              "tip": {
                "id": "string",
                "created_at": "2025-05-13T03:39:36.314Z",
                "text": "string",
                "url": "string",
                "lang": "string",
                "agree_count": 0,
                "disagree_count": 0
              }
            }
          }
        ],
        "chains": [
          {
            "id": "string",
            "name": "string"
          }
        ],
        "closed_bucket": "string",
        "date_closed": "2025-05-13",
        "description": "Yummy homemade baked pizza",
        "distance": 0,
        "email": "string",
        "fax": "string",
        "features": {
          "payment": {
            "credit_cards": {
              "accepts_credit_cards": {},
              "amex": {},
              "discover": {},
              "visa": {},
              "diners_club": {},
              "master_card": {},
              "union_pay": {}
            },
            "digital_wallet": {
              "accepts_nfc": {}
            }
          },
          "food_and_drink": {
            "alcohol": {
              "bar_service": {},
              "beer": {},
              "byo": {},
              "cocktails": {},
              "full_bar": {},
              "wine": {}
            },
            "meals": {
              "bar_snacks": {},
              "breakfast": {},
              "brunch": {},
              "lunch": {},
              "happy_hour": {},
              "dessert": {},
              "dinner": {},
              "tasting_menu": {}
            }
          },
          "services": {
            "delivery": {},
            "takeout": {},
            "drive_through": {},
            "dine_in": {
              "reservations": {},
              "online_reservations": {},
              "groups_only_reservations": {},
              "essential_reservations": {}
            }
          },
          "amenities": {
            "restroom": {},
            "smoking": {},
            "jukebox": {},
            "music": {},
            "live_music": {},
            "private_room": {},
            "outdoor_seating": {},
            "tvs": {},
            "atm": {},
            "coat_check": {},
            "wheelchair_accessible": {},
            "parking": {
              "parking": {},
              "street_parking": {},
              "valet_parking": {},
              "public_lot": {},
              "private_lot": {}
            },
            "sit_down_dining": {},
            "wifi": "string"
          },
          "attributes": {
            "business_meeting": "string",
            "clean": "string",
            "crowded": "string",
            "dates_popular": "string",
            "dressy": "string",
            "families_popular": "string",
            "gluten_free_diet": "string",
            "good_for_dogs": "string",
            "groups_popular": "string",
            "healthy_diet": "string",
            "late_night": "string",
            "noisy": "string",
            "quick_bite": "string",
            "romantic": "string",
            "service_quality": "string",
            "singles_popular": "string",
            "special_occasion": "string",
            "trendy": "string",
            "value_for_money": "string",
            "vegan_diet": "string",
            "vegetarian_diet": "string"
          }
        },
        "geocodes": {
          "drop_off": {
            "latitude": 0,
            "longitude": 0
          },
          "front_door": {
            "latitude": 0,
            "longitude": 0
          },
          "main": {
            "latitude": 0,
            "longitude": 0
          },
          "road": {
            "latitude": 0,
            "longitude": 0
          },
          "roof": {
            "latitude": 0,
            "longitude": 0
          }
        },
        "hours": {
          "display": "string",
          "is_local_holiday": true,
          "open_now": true,
          "regular": [
            {
              "close": "string",
              "day": 0,
              "open": "string"
            }
          ]
        },
        "hours_popular": [
          {
            "close": "20:00",
            "day": 0,
            "open": "10:00"
          },
          {
            "close": "20:00",
            "day": 1,
            "open": "10:00"
          },
          {
            "close": "20:00",
            "day": 2,
            "open": "10:00"
          },
          {
            "close": "20:00",
            "day": 3,
            "open": "10:00"
          },
          {
            "close": "20:00",
            "day": 4,
            "open": "10:00"
          },
          {
            "close": "20:00",
            "day": 5,
            "open": "10:00"
          },
          {
            "close": "20:00",
            "day": 6,
            "open": "10:00"
          }
        ],
        "link": "string",
        "location": {
          "address": "Davao City Philippines",
          "address_extended": "string",
          "admin_region": "string",
          "census_block": "string",
          "country": "string",
          "cross_street": "string",
          "dma": "string",
          "formatted_address": "string",
          "locality": "string",
          "neighborhood": [
            "string"
          ],
          "po_box": "string",
          "post_town": "string",
          "postcode": "string",
          "region": "string"
        },
        "menu": "string",
        "name": "Jovan's Pizza",
        "photos": [
          {
            "id": "string",
            "created_at": "2025-05-13T03:39:36.314Z",
            "prefix": "string",
            "suffix": "string",
            "width": 0,
            "height": 0,
            "classifications": [
              "string"
            ],
            "tip": {
              "id": "string",
              "created_at": "2025-05-13T03:39:36.314Z",
              "text": "string",
              "url": "string",
              "lang": "string",
              "agree_count": 0,
              "disagree_count": 0
            }
          }
        ],
        "popularity": 0,
        "price": "7",
        "rating": 7.8,
        "related_places": {},
        "social_media": {
          "facebook_id": "string",
          "instagram": "string",
          "twitter": "string"
        },
        "stats": {
          "total_photos": 0,
          "total_ratings": 0,
          "total_tips": 0
        },
        "store_id": "string",
        "tastes": [
          "string"
        ],
        "tel": "string",
        "timezone": "string",
        "tips": [
          {
            "id": "string",
            "created_at": "2025-05-13T03:39:36.314Z",
            "text": "string",
            "url": "string",
            "lang": "string",
            "agree_count": 0,
            "disagree_count": 0
          }
        ],
        "venue_reality_bucket": "string",
        "verified": true,
        "website": "string"
      },

      {
        "fsq_id": "string2",
        "categories": [
          {
            "id": 0,
            "name": "Beer",
            "short_name": "string",
            "plural_name": "string",
            "icon": {
              "id": "string",
              "created_at": "2025-05-13T03:39:36.314Z",
              "prefix": "string",
              "suffix": "string",
              "width": 0,
              "height": 0,
              "classifications": [
                "string"
              ],
              "tip": {
                "id": "string",
                "created_at": "2025-05-13T03:39:36.314Z",
                "text": "string",
                "url": "string",
                "lang": "string",
                "agree_count": 0,
                "disagree_count": 0
              }
            }
          }
        ],
        "chains": [
          {
            "id": "string",
            "name": "string"
          }
        ],
        "closed_bucket": "string",
        "date_closed": "2025-05-13",
        "description": "Fresh brewed beer",
        "distance": 0,
        "email": "string",
        "fax": "string",
        "features": {
          "payment": {
            "credit_cards": {
              "accepts_credit_cards": {},
              "amex": {},
              "discover": {},
              "visa": {},
              "diners_club": {},
              "master_card": {},
              "union_pay": {}
            },
            "digital_wallet": {
              "accepts_nfc": {}
            }
          },
          "food_and_drink": {
            "alcohol": {
              "bar_service": {},
              "beer": {},
              "byo": {},
              "cocktails": {},
              "full_bar": {},
              "wine": {}
            },
            "meals": {
              "bar_snacks": {},
              "breakfast": {},
              "brunch": {},
              "lunch": {},
              "happy_hour": {},
              "dessert": {},
              "dinner": {},
              "tasting_menu": {}
            }
          },
          "services": {
            "delivery": {},
            "takeout": {},
            "drive_through": {},
            "dine_in": {
              "reservations": {},
              "online_reservations": {},
              "groups_only_reservations": {},
              "essential_reservations": {}
            }
          },
          "amenities": {
            "restroom": {},
            "smoking": {},
            "jukebox": {},
            "music": {},
            "live_music": {},
            "private_room": {},
            "outdoor_seating": {},
            "tvs": {},
            "atm": {},
            "coat_check": {},
            "wheelchair_accessible": {},
            "parking": {
              "parking": {},
              "street_parking": {},
              "valet_parking": {},
              "public_lot": {},
              "private_lot": {}
            },
            "sit_down_dining": {},
            "wifi": "string"
          },
          "attributes": {
            "business_meeting": "string",
            "clean": "string",
            "crowded": "string",
            "dates_popular": "string",
            "dressy": "string",
            "families_popular": "string",
            "gluten_free_diet": "string",
            "good_for_dogs": "string",
            "groups_popular": "string",
            "healthy_diet": "string",
            "late_night": "string",
            "noisy": "string",
            "quick_bite": "string",
            "romantic": "string",
            "service_quality": "string",
            "singles_popular": "string",
            "special_occasion": "string",
            "trendy": "string",
            "value_for_money": "string",
            "vegan_diet": "string",
            "vegetarian_diet": "string"
          }
        },
        "geocodes": {
          "drop_off": {
            "latitude": 0,
            "longitude": 0
          },
          "front_door": {
            "latitude": 0,
            "longitude": 0
          },
          "main": {
            "latitude": 0,
            "longitude": 0
          },
          "road": {
            "latitude": 0,
            "longitude": 0
          },
          "roof": {
            "latitude": 0,
            "longitude": 0
          }
        },
        "hours": {
          "display": "string",
          "is_local_holiday": true,
          "open_now": true,
          "regular": [
            {
              "close": "string",
              "day": 0,
              "open": "string"
            }
          ]
        },
        "hours_popular": [
          {
            "close": "20:00",
            "day": 0,
            "open": "10:00"
          },
          {
            "close": "20:00",
            "day": 1,
            "open": "10:00"
          },
          {
            "close": "20:00",
            "day": 2,
            "open": "10:00"
          },
          {
            "close": "20:00",
            "day": 3,
            "open": "10:00"
          },
          {
            "close": "20:00",
            "day": 4,
            "open": "10:00"
          },
          {
            "close": "20:00",
            "day": 5,
            "open": "10:00"
          },
          {
            "close": "20:00",
            "day": 6,
            "open": "10:00"
          }
        ],
        "link": "string",
        "location": {
          "address": "Anda Bohol Philippines",
          "address_extended": "string",
          "admin_region": "string",
          "census_block": "string",
          "country": "string",
          "cross_street": "string",
          "dma": "string",
          "formatted_address": "string",
          "locality": "string",
          "neighborhood": [
            "string"
          ],
          "po_box": "string",
          "post_town": "string",
          "postcode": "string",
          "region": "string"
        },
        "menu": "string",
        "name": "Jovan's Beer",
        "photos": [
          {
            "id": "string",
            "created_at": "2025-05-13T03:39:36.314Z",
            "prefix": "string",
            "suffix": "string",
            "width": 0,
            "height": 0,
            "classifications": [
              "string"
            ],
            "tip": {
              "id": "string",
              "created_at": "2025-05-13T03:39:36.314Z",
              "text": "string",
              "url": "string",
              "lang": "string",
              "agree_count": 0,
              "disagree_count": 0
            }
          }
        ],
        "popularity": 0,
        "price": "9",
        "rating": 8.5,
        "related_places": {},
        "social_media": {
          "facebook_id": "string",
          "instagram": "string",
          "twitter": "string"
        },
        "stats": {
          "total_photos": 0,
          "total_ratings": 0,
          "total_tips": 0
        },
        "store_id": "string",
        "tastes": [
          "string"
        ],
        "tel": "string",
        "timezone": "string",
        "tips": [
          {
            "id": "string",
            "created_at": "2025-05-13T03:39:36.314Z",
            "text": "string",
            "url": "string",
            "lang": "string",
            "agree_count": 0,
            "disagree_count": 0
          }
        ],
        "venue_reality_bucket": "string",
        "verified": true,
        "website": "string"
      },
]
