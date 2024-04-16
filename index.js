/**
 * Challenge part 2: Display the image's author
 * 
 * With the data you've already fetched, display the name of the 
 * image author on the page. They show up as the "user" in the data
 * returned from the API.
 * 
 * Don't worry about positioning the author in the lower-left yet.
 */

async function getBackgroundImage() {
    console.log('get background image')
    const res = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=technology")
    const data = await res.json()
    document.body.style.backgroundImage = `url(${data.links.download})`
    const creditText = document.createElement("p")
    creditText.textContent = "Image By:" + data.user.name
    document.getElementById("author").appendChild(creditText)
    console.log('data', data)
}

getBackgroundImage()

/*
{
    "id": "2UH8t9FpIz4",
    "slug": "red-yellow-and-green-lights-2UH8t9FpIz4",
    "alternative_slugs": {
        "en": "red-yellow-and-green-lights-2UH8t9FpIz4",
        "es": "luces-rojas-amarillas-y-verdes-2UH8t9FpIz4",
        "ja": "赤黄緑のライト-2UH8t9FpIz4",
        "fr": "feux-rouges-jaunes-et-verts-2UH8t9FpIz4",
        "it": "luci-rosse-gialle-e-verdi-2UH8t9FpIz4",
        "ko": "빨간색-노란색-및-녹색-표시등-2UH8t9FpIz4",
        "de": "rote-gelbe-und-grune-lichter-2UH8t9FpIz4",
        "pt": "luzes-vermelhas-amarelas-e-verdes-2UH8t9FpIz4"
    },
    "created_at": "2021-06-15T18:20:39Z",
    "updated_at": "2024-04-16T09:55:37Z",
    "promoted_at": null,
    "width": 5183,
    "height": 2734,
    "color": "#0c260c",
    "blur_hash": "LA7-1LIqM}s.Nxnit5WD1NwKn%X7",
    "description": null,
    "alt_description": "red yellow and green lights",
    "breadcrumbs": [],
    "urls": {
        "raw": "https://images.unsplash.com/photo-1623780883690-1de08f271add?ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTMyNjE5NDF8&ixlib=rb-4.0.3",
        "full": "https://images.unsplash.com/photo-1623780883690-1de08f271add?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTMyNjE5NDF8&ixlib=rb-4.0.3&q=85",
        "regular": "https://images.unsplash.com/photo-1623780883690-1de08f271add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTMyNjE5NDF8&ixlib=rb-4.0.3&q=80&w=1080",
        "small": "https://images.unsplash.com/photo-1623780883690-1de08f271add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTMyNjE5NDF8&ixlib=rb-4.0.3&q=80&w=400",
        "thumb": "https://images.unsplash.com/photo-1623780883690-1de08f271add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTMyNjE5NDF8&ixlib=rb-4.0.3&q=80&w=200",
        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1623780883690-1de08f271add"
    },
    "links": {
        "self": "https://api.unsplash.com/photos/red-yellow-and-green-lights-2UH8t9FpIz4",
        "html": "https://unsplash.com/photos/red-yellow-and-green-lights-2UH8t9FpIz4",
        "download": "https://unsplash.com/photos/2UH8t9FpIz4/download?ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTMyNjE5NDF8",
        "download_location": "https://api.unsplash.com/photos/2UH8t9FpIz4/download?ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTMyNjE5NDF8"
    },
    "likes": 33,
    "liked_by_user": false,
    "current_user_collections": [],
    "sponsorship": null,
    "topic_submissions": {
        "textures-patterns": {
            "status": "rejected"
        },
        "experimental": {
            "status": "rejected"
        },
        "wallpapers": {
            "status": "rejected"
        },
        "technology": {
            "status": "rejected"
        },
        "double-exposures": {
            "status": "rejected"
        }
    },
    "asset_type": "photo",
    "user": {
        "id": "gJT9v0ULiY4",
        "updated_at": "2024-04-10T01:22:08Z",
        "username": "juvnsky",
        "name": "Anton Maksimov 5642.su",
        "first_name": "Anton Maksimov",
        "last_name": "5642.su",
        "twitter_username": null,
        "portfolio_url": "https://5642.su",
        "bio": "Anton Maksimov.\r\nWeb-developer. Founder of web studio \"5642.su\".",
        "location": "Pyatigorsk, Russia",
        "links": {
            "self": "https://api.unsplash.com/users/juvnsky",
            "html": "https://unsplash.com/@juvnsky",
            "photos": "https://api.unsplash.com/users/juvnsky/photos",
            "likes": "https://api.unsplash.com/users/juvnsky/likes",
            "portfolio": "https://api.unsplash.com/users/juvnsky/portfolio",
            "following": "https://api.unsplash.com/users/juvnsky/following",
            "followers": "https://api.unsplash.com/users/juvnsky/followers"
        },
        "profile_image": {
            "small": "https://images.unsplash.com/profile-1597872291436-b5474b047720image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
            "medium": "https://images.unsplash.com/profile-1597872291436-b5474b047720image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
            "large": "https://images.unsplash.com/profile-1597872291436-b5474b047720image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
        },
        "instagram_username": "juvnsky",
        "total_collections": 63,
        "total_likes": 893,
        "total_photos": 2144,
        "total_promoted_photos": 0,
        "total_illustrations": 0,
        "total_promoted_illustrations": 0,
        "accepted_tos": true,
        "for_hire": true,
        "social": {
            "instagram_username": "juvnsky",
            "portfolio_url": "https://5642.su",
            "twitter_username": null,
            "paypal_email": null
        }
    },
    "exif": {
        "make": null,
        "model": null,
        "name": null,
        "exposure_time": null,
        "aperture": null,
        "focal_length": null,
        "iso": null
    },
    "location": {
        "name": "Пятигорск, Россия",
        "city": null,
        "country": null,
        "position": {
            "latitude": null,
            "longitude": null
        }
    },
    "meta": {
        "index": true
    },
    "public_domain": false,
    "tags": [
        {
            "type": "search",
            "title": "россия"
        },
        {
            "type": "search",
            "title": "пятигорск"
        },
        {
            "type": "search",
            "title": "road"
        },
        {
            "type": "search",
            "title": "freeway"
        },
        {
            "type": "search",
            "title": "highway"
        },
        {
            "type": "search",
            "title": "overpass"
        },
        {
            "type": "search",
            "title": "intersection"
        },
        {
            "type": "search",
            "title": "building"
        },
        {
            "type": "search",
            "title": "bridge"
        }
    ],
    "tags_preview": [
        {
            "type": "search",
            "title": "россия"
        },
        {
            "type": "search",
            "title": "пятигорск"
        },
        {
            "type": "search",
            "title": "road"
        }
    ],
    "views": 652652,
    "downloads": 9412,
    "topics": []
}
*/