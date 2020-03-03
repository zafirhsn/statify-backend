const LZ = require('lz-string');
const request = require("request");
let req = { 
  body: {
    "items": [
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb"
        },
        "followers": {
          "href": null,
          "total": 3372588
        },
        "genres": [
          "australian psych",
          "neo-psychedelic"
        ],
        "href": "https://api.spotify.com/v1/artists/5INjqkS1o8h1imAzPqGZBb",
        "id": "5INjqkS1o8h1imAzPqGZBb",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/a7cb9fc6df8b68fdb071156add87284c3c941a04",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/135442e5a19db953eb2f48ff39ff8c4c985dc7e1",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/edc87a3af030da0e1d671d20d734528c8d4e880e",
            "width": 160
          }
        ],
        "name": "Tame Impala",
        "popularity": 88,
        "type": "artist",
        "uri": "spotify:artist:5INjqkS1o8h1imAzPqGZBb"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5oOhM2DFWab8XhSdQiITry"
        },
        "followers": {
          "href": null,
          "total": 541313
        },
        "genres": [
          "chillwave",
          "downtempo",
          "indietronica",
          "intelligent dance music"
        ],
        "href": "https://api.spotify.com/v1/artists/5oOhM2DFWab8XhSdQiITry",
        "id": "5oOhM2DFWab8XhSdQiITry",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/460f8dd62e2cfb4df17e05bf97471a596a28eeda",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/80ba51f8c16442d839a0ed99d6c3e40730fe8c81",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/cc3f07038fe794f40523bc19fedd181ff48e2f78",
            "width": 160
          }
        ],
        "name": "Tycho",
        "popularity": 68,
        "type": "artist",
        "uri": "spotify:artist:5oOhM2DFWab8XhSdQiITry"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/56ZTgzPBDge0OvCGgMO3OY"
        },
        "followers": {
          "href": null,
          "total": 895404
        },
        "genres": [
          "art pop",
          "baltimore indie",
          "chamber pop",
          "chillwave",
          "dream pop",
          "experimental pop",
          "freak folk",
          "indie pop",
          "indie rock",
          "indietronica",
          "modern dream pop"
        ],
        "href": "https://api.spotify.com/v1/artists/56ZTgzPBDge0OvCGgMO3OY",
        "id": "56ZTgzPBDge0OvCGgMO3OY",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/b34aff7ff25bb5882346fee11f05a46f38fbfbd3",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/13fd407d5bd9a056e4f2cbdbbe27f2e44e0d0a4b",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/ae5990c725d013e72cef504be145116707f2e2db",
            "width": 160
          }
        ],
        "name": "Beach House",
        "popularity": 71,
        "type": "artist",
        "uri": "spotify:artist:56ZTgzPBDge0OvCGgMO3OY"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3Sz7ZnJQBIHsXLUSo0OQtM"
        },
        "followers": {
          "href": null,
          "total": 1334837
        },
        "genres": [
          "edmonton indie"
        ],
        "href": "https://api.spotify.com/v1/artists/3Sz7ZnJQBIHsXLUSo0OQtM",
        "id": "3Sz7ZnJQBIHsXLUSo0OQtM",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/e3d3e28c604a1c86e796e0d2aa7d4dc249f62e6f",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/2be26e2a2f49947fb61c31984f27bb1497319dad",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/7806af9f06526b3ca2e33ecae7cb02c8c6bcc221",
            "width": 160
          }
        ],
        "name": "Mac DeMarco",
        "popularity": 77,
        "type": "artist",
        "uri": "spotify:artist:3Sz7ZnJQBIHsXLUSo0OQtM"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3yY2gUcIsjMr8hjo51PoJ8"
        },
        "followers": {
          "href": null,
          "total": 2091044
        },
        "genres": [
          "dance rock",
          "madchester",
          "new wave",
          "permanent wave",
          "rock",
          "uk post-punk"
        ],
        "href": "https://api.spotify.com/v1/artists/3yY2gUcIsjMr8hjo51PoJ8",
        "id": "3yY2gUcIsjMr8hjo51PoJ8",
        "images": [
          {
            "height": 1516,
            "url": "https://i.scdn.co/image/481b980af463122013e4578c08fb8c5cbfaed1e9",
            "width": 1000
          },
          {
            "height": 970,
            "url": "https://i.scdn.co/image/4bf08a9e6eea088b20d4092d1322bbd3f39ff9af",
            "width": 640
          },
          {
            "height": 303,
            "url": "https://i.scdn.co/image/bd4c7f5ff2c5c4385604e60c71eac1dd498ddbd9",
            "width": 200
          },
          {
            "height": 97,
            "url": "https://i.scdn.co/image/d3a2542f2811b5b01ee3483ec7c193f72a882ea1",
            "width": 64
          }
        ],
        "name": "The Smiths",
        "popularity": 77,
        "type": "artist",
        "uri": "spotify:artist:3yY2gUcIsjMr8hjo51PoJ8"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
        },
        "followers": {
          "href": null,
          "total": 6023877
        },
        "genres": [
          "electro",
          "filter house"
        ],
        "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
        "id": "4tZwfgrHOc3mvqYlEYSvVi",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/b8aaf4b179bb0a52f29a810fdb0f9d5c16ec2c75",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/8e189c820ba32ffd332393eb60cb1def63bed070",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/70bedd072be9725a0b05e07e3338959e826e7dd7",
            "width": 160
          }
        ],
        "name": "Daft Punk",
        "popularity": 84,
        "type": "artist",
        "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/0epOFNiUfyON9EYx7Tpr6V"
        },
        "followers": {
          "href": null,
          "total": 3075536
        },
        "genres": [
          "alternative rock",
          "garage rock",
          "indie rock",
          "modern rock",
          "permanent wave",
          "rock"
        ],
        "href": "https://api.spotify.com/v1/artists/0epOFNiUfyON9EYx7Tpr6V",
        "id": "0epOFNiUfyON9EYx7Tpr6V",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/0dd6b94b32c9ec5400d5f8dd4d8be075a6627862",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/2132488612fb623fc935055a4e88781cb57f3c5b",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/fd30f379cdc1f962c04b1775fdabf1b2e0ea085f",
            "width": 160
          }
        ],
        "name": "The Strokes",
        "popularity": 81,
        "type": "artist",
        "uri": "spotify:artist:0epOFNiUfyON9EYx7Tpr6V"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6ft7JnxMyZhp7N52qzHymY"
        },
        "followers": {
          "href": null,
          "total": 58004
        },
        "genres": [
          "bedroom pop",
          "indie garage rock",
          "indie pop",
          "rochester mn indie"
        ],
        "href": "https://api.spotify.com/v1/artists/6ft7JnxMyZhp7N52qzHymY",
        "id": "6ft7JnxMyZhp7N52qzHymY",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/ac651dd85c5e6e1673dbdbdf03ff4d37f8e03dcb",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/b3307d12c3b80b879c2f3bc53cc7d0d3a04e61f0",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/81f5ac3b73f437052726cf5b413a6a8c98ed1b54",
            "width": 160
          }
        ],
        "name": "Vansire",
        "popularity": 60,
        "type": "artist",
        "uri": "spotify:artist:6ft7JnxMyZhp7N52qzHymY"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3HLApxqtvULlffnRnW88O8"
        },
        "followers": {
          "href": null,
          "total": 13711
        },
        "genres": [
          "soundtrack"
        ],
        "href": "https://api.spotify.com/v1/artists/3HLApxqtvULlffnRnW88O8",
        "id": "3HLApxqtvULlffnRnW88O8",
        "images": [
          {
            "height": 1000,
            "url": "https://i.scdn.co/image/cf51cb0490e094492e3e3b0733db77b3daf77513",
            "width": 1000
          },
          {
            "height": 640,
            "url": "https://i.scdn.co/image/c12d2f8c0252ef08b471a8fd9f65c5b23b2db125",
            "width": 640
          },
          {
            "height": 200,
            "url": "https://i.scdn.co/image/2293b11e7df4bc3f54128a62558c03b9d3f2102e",
            "width": 200
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/a0a4221d04b392a9f28062e0be680d72e5c125ae",
            "width": 64
          }
        ],
        "name": "Mac Quayle",
        "popularity": 54,
        "type": "artist",
        "uri": "spotify:artist:3HLApxqtvULlffnRnW88O8"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/2uYWxilOVlUdk4oV9DvwqK"
        },
        "followers": {
          "href": null,
          "total": 267793
        },
        "genres": [
          "art pop",
          "brooklyn indie",
          "chamber pop",
          "dance pop",
          "escape room",
          "indie pop",
          "indie rock"
        ],
        "href": "https://api.spotify.com/v1/artists/2uYWxilOVlUdk4oV9DvwqK",
        "id": "2uYWxilOVlUdk4oV9DvwqK",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/183bd8e712e54a40af3fcfe5033b59a16b0ef1aa",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/701c6af1ce5e7a96f745251e0ae0681652ad3ab9",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/e0f16945e89887f94a36b85b3a48f76aa442e8f0",
            "width": 160
          }
        ],
        "name": "Mitski",
        "popularity": 68,
        "type": "artist",
        "uri": "spotify:artist:2uYWxilOVlUdk4oV9DvwqK"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/7sgWBYtJpblXpJl2lU5WVs"
        },
        "followers": {
          "href": null,
          "total": 247680
        },
        "genres": [
          "alternative dance",
          "electropop",
          "indie pop",
          "indie poptimism",
          "indie rock",
          "indietronica",
          "la indie",
          "modern rock",
          "shimmer pop",
          "vapor soul"
        ],
        "href": "https://api.spotify.com/v1/artists/7sgWBYtJpblXpJl2lU5WVs",
        "id": "7sgWBYtJpblXpJl2lU5WVs",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/031af08abb50cc365ab48d03f3f4a2a4abe48b84",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/cf4cbcaa4cde888b603abae6ae0a6ed06a8744eb",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/a4d8aa68d8971c57ca7e44eb2ef9ce6414b4eebd",
            "width": 160
          }
        ],
        "name": "Electric Guest",
        "popularity": 65,
        "type": "artist",
        "uri": "spotify:artist:7sgWBYtJpblXpJl2lU5WVs"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3S4d3YRNGg2OhnNm3QvfhA"
        },
        "followers": {
          "href": null,
          "total": 86937
        },
        "genres": [
          "electropop",
          "indie poptimism",
          "indie soul",
          "indietronica",
          "modern rock",
          "vapor soul"
        ],
        "href": "https://api.spotify.com/v1/artists/3S4d3YRNGg2OhnNm3QvfhA",
        "id": "3S4d3YRNGg2OhnNm3QvfhA",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/37778a054a91742b46414359a1b5a9ad9aa53345",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/3da1af0171b5b583f100f25a60c868145b15ff4f",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/d4bff443357b1eae77370ac102ebc53f607d6a40",
            "width": 160
          }
        ],
        "name": "slenderbodies",
        "popularity": 62,
        "type": "artist",
        "uri": "spotify:artist:3S4d3YRNGg2OhnNm3QvfhA"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1g8HCTiMwBtFtpRR9JXAZR"
        },
        "followers": {
          "href": null,
          "total": 59144
        },
        "genres": [
          "classic j-rock",
          "j-rock",
          "japanese city pop",
          "shibuya-kei"
        ],
        "href": "https://api.spotify.com/v1/artists/1g8HCTiMwBtFtpRR9JXAZR",
        "id": "1g8HCTiMwBtFtpRR9JXAZR",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2735015ae782258977ea551406a",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e025015ae782258977ea551406a",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d000048515015ae782258977ea551406a",
            "width": 64
          }
        ],
        "name": "Fishmans",
        "popularity": 48,
        "type": "artist",
        "uri": "spotify:artist:1g8HCTiMwBtFtpRR9JXAZR"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3kzwYV3OCB010YfXMF0Avt"
        },
        "followers": {
          "href": null,
          "total": 268558
        },
        "genres": [
          "art pop",
          "indie pop",
          "indie rock",
          "shoegaze",
          "toronto indie"
        ],
        "href": "https://api.spotify.com/v1/artists/3kzwYV3OCB010YfXMF0Avt",
        "id": "3kzwYV3OCB010YfXMF0Avt",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/098b97354be95aa4e5f3cabfd66870f8252984fa",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/c332cd59147479df84b35808482fac04e69144d8",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/bb81e7df6a5dd0c93efa5d1703b861fa50194f3d",
            "width": 160
          }
        ],
        "name": "Alvvays",
        "popularity": 64,
        "type": "artist",
        "uri": "spotify:artist:3kzwYV3OCB010YfXMF0Avt"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/2mV8aJphiSHYJf43DxL7Gt"
        },
        "followers": {
          "href": null,
          "total": 298856
        },
        "genres": [
          "alternative dance",
          "dance-punk",
          "disco house",
          "electropop",
          "filter house",
          "indietronica",
          "new rave",
          "nu disco"
        ],
        "href": "https://api.spotify.com/v1/artists/2mV8aJphiSHYJf43DxL7Gt",
        "id": "2mV8aJphiSHYJf43DxL7Gt",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/d3845b0119f4cb5375847b0b7bf93b43d942077b",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/031dbbee9f11e77da1d1737b8e9d35566655e105",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/5479a8c44bae20aea13cf453c2a6014ee532bc0f",
            "width": 160
          }
        ],
        "name": "Chromeo",
        "popularity": 63,
        "type": "artist",
        "uri": "spotify:artist:2mV8aJphiSHYJf43DxL7Gt"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/2JgUCWMkArdLIENeaJcJ0Y"
        },
        "followers": {
          "href": null,
          "total": 9701
        },
        "genres": [
          "brooklyn indie"
        ],
        "href": "https://api.spotify.com/v1/artists/2JgUCWMkArdLIENeaJcJ0Y",
        "id": "2JgUCWMkArdLIENeaJcJ0Y",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/0ce820aacc6a637c4244fa29507f537f23a11d6d",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/d62d869c74918314a92fbeac036bbed6cf66ae41",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/a3dad940c66280fa3ddc00e8c985d3105123ac0b",
            "width": 160
          }
        ],
        "name": "Promises Ltd.",
        "popularity": 39,
        "type": "artist",
        "uri": "spotify:artist:2JgUCWMkArdLIENeaJcJ0Y"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4uFZsG1vXrPcvnZ4iSQyrx"
        },
        "followers": {
          "href": null,
          "total": 176760
        },
        "genres": [
          "minecraft"
        ],
        "href": "https://api.spotify.com/v1/artists/4uFZsG1vXrPcvnZ4iSQyrx",
        "id": "4uFZsG1vXrPcvnZ4iSQyrx",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/befae36cfc75f9ebed91cdd8dccb494a1168aa59",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/b2219e609cd69c5366225ef9eceb70fefa0b3232",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/455a85ab95fe5828d82f7719b3b1632f311be5c5",
            "width": 160
          }
        ],
        "name": "C418",
        "popularity": 71,
        "type": "artist",
        "uri": "spotify:artist:4uFZsG1vXrPcvnZ4iSQyrx"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
        },
        "followers": {
          "href": null,
          "total": 5228213
        },
        "genres": [
          "alternative hip hop",
          "art pop"
        ],
        "href": "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
        "id": "3AA28KZvwAUcZuOKwyblJQ",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/6db4b03387bbf74d61d8f3eedda973ab6c2ae331",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/fe485323610c043c5071309263b1c6f139741a2e",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/99f7508a2b0a8955f8c42175a456f5854c3446ca",
            "width": 160
          }
        ],
        "name": "Gorillaz",
        "popularity": 83,
        "type": "artist",
        "uri": "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/7aA592KWirLsnfb5ulGWvU"
        },
        "followers": {
          "href": null,
          "total": 501007
        },
        "genres": [
          "alternative hip hop",
          "detroit hip hop",
          "escape room",
          "hip hop",
          "rap",
          "underground hip hop"
        ],
        "href": "https://api.spotify.com/v1/artists/7aA592KWirLsnfb5ulGWvU",
        "id": "7aA592KWirLsnfb5ulGWvU",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/5a9b9840b9fd0b75d862a0b0a3c0af787901d4ab",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/729c8cddb5e36ae676e6d976bb3302372d3f8774",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/19cfbc0721b8c304df9e1cce693cc9af789621db",
            "width": 160
          }
        ],
        "name": "Danny Brown",
        "popularity": 67,
        "type": "artist",
        "uri": "spotify:artist:7aA592KWirLsnfb5ulGWvU"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1MUKCI5HmTVIucSwcaH6sV"
        },
        "followers": {
          "href": null,
          "total": 3812
        },
        "genres": [
          "bristol indie",
          "small room"
        ],
        "href": "https://api.spotify.com/v1/artists/1MUKCI5HmTVIucSwcaH6sV",
        "id": "1MUKCI5HmTVIucSwcaH6sV",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b273212efa3ba51f24facacd350a",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://i.scdn.co/image/ab67616d00001e02212efa3ba51f24facacd350a",
            "width": 300
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/ab67616d00004851212efa3ba51f24facacd350a",
            "width": 64
          }
        ],
        "name": "Trust Fund",
        "popularity": 27,
        "type": "artist",
        "uri": "spotify:artist:1MUKCI5HmTVIucSwcaH6sV"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
        },
        "followers": {
          "href": null,
          "total": 14075937
        },
        "genres": [
          "conscious hip hop",
          "hip hop",
          "rap",
          "west coast rap"
        ],
        "href": "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
        "id": "2YZyLoL8N0Wb9xBt1NhZWg",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/3a836196bfb341f736c7fe2704fb75de53f8dfbb",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/5259c0496329b3f608a1ae0edb799cd2f8451acc",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/b772a78d4cb192268d6f601a78f21044c17d6dda",
            "width": 160
          }
        ],
        "name": "Kendrick Lamar",
        "popularity": 91,
        "type": "artist",
        "uri": "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/0L8ExT028jH3ddEcZwqJJ5"
        },
        "followers": {
          "href": null,
          "total": 12766878
        },
        "genres": [
          "alternative rock",
          "funk metal",
          "funk rock",
          "permanent wave",
          "post-grunge",
          "rock"
        ],
        "href": "https://api.spotify.com/v1/artists/0L8ExT028jH3ddEcZwqJJ5",
        "id": "0L8ExT028jH3ddEcZwqJJ5",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/89bc3c14aa2b4f250033ffcf5f322b2a553d9331",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/7251ac7f3c0262cfcfad32e214deda639a2b4b46",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/8def8c4db6061deb04daca08e43bcde57181ec8b",
            "width": 160
          }
        ],
        "name": "Red Hot Chili Peppers",
        "popularity": 88,
        "type": "artist",
        "uri": "spotify:artist:0L8ExT028jH3ddEcZwqJJ5"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/26T3LtbuGT1Fu9m0eRq5X3"
        },
        "followers": {
          "href": null,
          "total": 1890737
        },
        "genres": [
          "garage rock",
          "indie pop",
          "indie rock",
          "modern rock",
          "punk blues",
          "rock"
        ],
        "href": "https://api.spotify.com/v1/artists/26T3LtbuGT1Fu9m0eRq5X3",
        "id": "26T3LtbuGT1Fu9m0eRq5X3",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/3f50bb245648f81ff86ac941e01b9912f5d9713d",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/7f5ffd590188b2801da10516b85853cd778eaef8",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/916f93764f7eb0844265843df1c7632d25df4c41",
            "width": 160
          }
        ],
        "name": "Cage The Elephant",
        "popularity": 79,
        "type": "artist",
        "uri": "spotify:artist:26T3LtbuGT1Fu9m0eRq5X3"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/3l0CmX0FuQjFxr8SK7Vqag"
        },
        "followers": {
          "href": null,
          "total": 951848
        },
        "genres": [
          "bedroom pop",
          "boston indie",
          "indie pop",
          "pop"
        ],
        "href": "https://api.spotify.com/v1/artists/3l0CmX0FuQjFxr8SK7Vqag",
        "id": "3l0CmX0FuQjFxr8SK7Vqag",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/5e487c0d81c577c1736772d2542a2676004e0d87",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/a65cba69511e03ad5c6989318232ef3257991206",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/cba535b649175d094d4f5c0ed5a9e82a8bad3403",
            "width": 160
          }
        ],
        "name": "Clairo",
        "popularity": 81,
        "type": "artist",
        "uri": "spotify:artist:3l0CmX0FuQjFxr8SK7Vqag"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/57MtJQ6Sc4tIxrXIhrqVJL"
        },
        "followers": {
          "href": null,
          "total": 115673
        },
        "genres": [
          "alternative dance",
          "chamber pop",
          "chillwave",
          "indie pop",
          "indie rock",
          "indietronica",
          "modern rock",
          "new orleans indie",
          "shimmer pop",
          "stomp and holler"
        ],
        "href": "https://api.spotify.com/v1/artists/57MtJQ6Sc4tIxrXIhrqVJL",
        "id": "57MtJQ6Sc4tIxrXIhrqVJL",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/93c5478b98b10080c1bb30f36df1ea3da9f30dd0",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/a8016949941ce184c274de15ce510ad0247e32cf",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/76c7daacdfb9868aedd7c5746505f4b337ec3753",
            "width": 160
          }
        ],
        "name": "Generationals",
        "popularity": 60,
        "type": "artist",
        "uri": "spotify:artist:57MtJQ6Sc4tIxrXIhrqVJL"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/246dkjvS1zLTtiykXe5h60"
        },
        "followers": {
          "href": null,
          "total": 22578440
        },
        "genres": [
          "dfw rap",
          "melodic rap",
          "rap"
        ],
        "href": "https://api.spotify.com/v1/artists/246dkjvS1zLTtiykXe5h60",
        "id": "246dkjvS1zLTtiykXe5h60",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/93fec27f9aac86526b9010e882037afbda4e3d5f",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/9040899d5660920fdf7efeb7aa2cc4e6d86f86f6",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/d15a5ffb3d22adabd09a749e09e846f527ab5a94",
            "width": 160
          }
        ],
        "name": "Post Malone",
        "popularity": 98,
        "type": "artist",
        "uri": "spotify:artist:246dkjvS1zLTtiykXe5h60"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1Mxqyy3pSjf8kZZL4QVxS0"
        },
        "followers": {
          "href": null,
          "total": 3630490
        },
        "genres": [
          "adult standards",
          "easy listening",
          "lounge"
        ],
        "href": "https://api.spotify.com/v1/artists/1Mxqyy3pSjf8kZZL4QVxS0",
        "id": "1Mxqyy3pSjf8kZZL4QVxS0",
        "images": [
          {
            "height": 650,
            "url": "https://i.scdn.co/image/fc4e0f474fb4c4cb83617aa884dc9fd9822d4411",
            "width": 999
          },
          {
            "height": 416,
            "url": "https://i.scdn.co/image/883de3e492364891543bc0313ffe516626778a16",
            "width": 640
          },
          {
            "height": 130,
            "url": "https://i.scdn.co/image/810f29651e05c9eae5a31f8151c2e05dc46390f9",
            "width": 200
          },
          {
            "height": 42,
            "url": "https://i.scdn.co/image/a283ecdc6252ae305c53d283846cae2e8b22e94c",
            "width": 64
          }
        ],
        "name": "Frank Sinatra",
        "popularity": 82,
        "type": "artist",
        "uri": "spotify:artist:1Mxqyy3pSjf8kZZL4QVxS0"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/2Tz1DTzVJ5Gyh8ZwVr6ekU"
        },
        "followers": {
          "href": null,
          "total": 283500
        },
        "genres": [
          "alternative dance",
          "chillwave",
          "indie pop",
          "indie rock",
          "indietronica",
          "modern rock",
          "shimmer pop"
        ],
        "href": "https://api.spotify.com/v1/artists/2Tz1DTzVJ5Gyh8ZwVr6ekU",
        "id": "2Tz1DTzVJ5Gyh8ZwVr6ekU",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/1962580d2c159bfc605a8b2c5fca8753d99cd16f",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/f6625e7bf49ba3464c58bc68ae9e2f0b80aad488",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/f030187c7a8d57563a340d1e54f06f1abd79def7",
            "width": 160
          }
        ],
        "name": "STRFKR",
        "popularity": 65,
        "type": "artist",
        "uri": "spotify:artist:2Tz1DTzVJ5Gyh8ZwVr6ekU"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/2aoFQUeHD1U7pL098lRsDU"
        },
        "followers": {
          "href": null,
          "total": 253620
        },
        "genres": [
          "alternative hip hop",
          "hip hop",
          "rap",
          "underground hip hop"
        ],
        "href": "https://api.spotify.com/v1/artists/2aoFQUeHD1U7pL098lRsDU",
        "id": "2aoFQUeHD1U7pL098lRsDU",
        "images": [
          {
            "height": 1000,
            "url": "https://i.scdn.co/image/bc99e9cb1976fcecb929d819b3dfc6f6fabca500",
            "width": 1000
          },
          {
            "height": 640,
            "url": "https://i.scdn.co/image/9d7ed68679a970b86faaea230d16334baba5ed4b",
            "width": 640
          },
          {
            "height": 200,
            "url": "https://i.scdn.co/image/3c14d3a5bf0dbc50595b6d5001633aae9d9e2b5f",
            "width": 200
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/ad65acde29d51f7f62a9307815d5b9029be3bb64",
            "width": 64
          }
        ],
        "name": "Madvillain",
        "popularity": 70,
        "type": "artist",
        "uri": "spotify:artist:2aoFQUeHD1U7pL098lRsDU"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6yJ6QQ3Y5l0s0tn7b0arrO"
        },
        "followers": {
          "href": null,
          "total": 191091
        },
        "genres": [
          "alternative hip hop",
          "escape room",
          "experimental hip hop",
          "hip hop",
          "industrial hip hop",
          "rap",
          "underground hip hop"
        ],
        "href": "https://api.spotify.com/v1/artists/6yJ6QQ3Y5l0s0tn7b0arrO",
        "id": "6yJ6QQ3Y5l0s0tn7b0arrO",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/603a36972edb587caf070934c6525f2a6c47719c",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/ab96d74e74ef64f37918bca8f004010509524417",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/c657b95cc4af6086fce8c81e5f531c62389f5773",
            "width": 160
          }
        ],
        "name": "JPEGMAFIA",
        "popularity": 67,
        "type": "artist",
        "uri": "spotify:artist:6yJ6QQ3Y5l0s0tn7b0arrO"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1ybAN3utgdoUL1MUCtH4QM"
        },
        "followers": {
          "href": null,
          "total": 172842
        },
        "genres": [
          "art pop",
          "chamber pop",
          "chillwave",
          "denver indie",
          "dream pop",
          "electropop",
          "experimental pop",
          "freak folk",
          "indie pop",
          "indie rock",
          "indie surf",
          "nu gaze",
          "shimmer pop"
        ],
        "href": "https://api.spotify.com/v1/artists/1ybAN3utgdoUL1MUCtH4QM",
        "id": "1ybAN3utgdoUL1MUCtH4QM",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/320d8c892b6eecd7f7eb619c3e899db0be7a32b0",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/1de57ac6dc243b7ae933a3311a8a07f7ecd29412",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/9ee1d54e0f6f61a0620f36bf9616ccd4088747a6",
            "width": 160
          }
        ],
        "name": "Tennis",
        "popularity": 64,
        "type": "artist",
        "uri": "spotify:artist:1ybAN3utgdoUL1MUCtH4QM"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/7yk35uHNQclPXFGFoTU44w"
        },
        "followers": {
          "href": null,
          "total": 353342
        },
        "genres": [
          "alternative hip hop",
          "hardcore hip hop",
          "hip hop",
          "jazz rap",
          "rap",
          "west coast rap"
        ],
        "href": "https://api.spotify.com/v1/artists/7yk35uHNQclPXFGFoTU44w",
        "id": "7yk35uHNQclPXFGFoTU44w",
        "images": [
          {
            "height": 1394,
            "url": "https://i.scdn.co/image/db124909dcc277881bf55ed159bd417d82e2ced1",
            "width": 1000
          },
          {
            "height": 892,
            "url": "https://i.scdn.co/image/01126acfcb317eaa068dfb1699006946abe51262",
            "width": 640
          },
          {
            "height": 279,
            "url": "https://i.scdn.co/image/379f08564c1550cf56734267857226bb1a0b7bee",
            "width": 200
          },
          {
            "height": 89,
            "url": "https://i.scdn.co/image/7959e017ada2921da27ba3d8e93222d70b121733",
            "width": 64
          }
        ],
        "name": "The Pharcyde",
        "popularity": 64,
        "type": "artist",
        "uri": "spotify:artist:7yk35uHNQclPXFGFoTU44w"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/0SwO7SWeDHJijQ3XNS7xEE"
        },
        "followers": {
          "href": null,
          "total": 1707585
        },
        "genres": [
          "alternative dance",
          "garage rock",
          "indie pop",
          "indie rock",
          "indietronica",
          "modern rock",
          "rock"
        ],
        "href": "https://api.spotify.com/v1/artists/0SwO7SWeDHJijQ3XNS7xEE",
        "id": "0SwO7SWeDHJijQ3XNS7xEE",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/0760c3acca24fe81e9d217dd922ab36081383897",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/28ff19618ece117a1897d8e9298e8840a645a2a1",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/1b5cca2e02cc6bbfa7d215dbfe168c21217ab9a1",
            "width": 160
          }
        ],
        "name": "MGMT",
        "popularity": 78,
        "type": "artist",
        "uri": "spotify:artist:0SwO7SWeDHJijQ3XNS7xEE"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR"
        },
        "followers": {
          "href": null,
          "total": 33062340
        },
        "genres": [
          "detroit hip hop",
          "g funk",
          "hip hop",
          "rap"
        ],
        "href": "https://api.spotify.com/v1/artists/7dGJo4pcD2V6oG8kP0tJRR",
        "id": "7dGJo4pcD2V6oG8kP0tJRR",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/56f4762485066b4ef867b96e16775f2b5b4db277",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/ad64a7fbc24b31cd84455a1aef34758b94246352",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/6432e1be8495593f136ad98de6135bb0640ff936",
            "width": 160
          }
        ],
        "name": "Eminem",
        "popularity": 99,
        "type": "artist",
        "uri": "spotify:artist:7dGJo4pcD2V6oG8kP0tJRR"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4Pt1HZtuJwrQB8l0ES5iTX"
        },
        "followers": {
          "href": null,
          "total": 35578
        },
        "genres": [
          "art rock",
          "dream pop"
        ],
        "href": "https://api.spotify.com/v1/artists/4Pt1HZtuJwrQB8l0ES5iTX",
        "id": "4Pt1HZtuJwrQB8l0ES5iTX",
        "images": [
          {
            "height": 1388,
            "url": "https://i.scdn.co/image/225e52730b148d91fbf3627b25353857a2144807",
            "width": 1000
          },
          {
            "height": 889,
            "url": "https://i.scdn.co/image/8286b19ae2b57a7000584b4847ea18559660fe27",
            "width": 640
          },
          {
            "height": 278,
            "url": "https://i.scdn.co/image/13ebe61657f40274988a921ee26500e09eac95c4",
            "width": 200
          },
          {
            "height": 89,
            "url": "https://i.scdn.co/image/bc97c94c0ee6dc28d9acf499c44f5cb3d411e0e5",
            "width": 64
          }
        ],
        "name": "Julee Cruise",
        "popularity": 48,
        "type": "artist",
        "uri": "spotify:artist:4Pt1HZtuJwrQB8l0ES5iTX"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/25fqWEebq6PoiGQIHIrdtv"
        },
        "followers": {
          "href": null,
          "total": 154027
        },
        "genres": [
          "bass trap",
          "electronic trap",
          "escape room",
          "vapor twitch"
        ],
        "href": "https://api.spotify.com/v1/artists/25fqWEebq6PoiGQIHIrdtv",
        "id": "25fqWEebq6PoiGQIHIrdtv",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/3bf884e4a01f0980c39eb67a12e6c3e28f42da16",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/444bb2caaf3f314642d606e3bddce1b49637c962",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/764b85a980e9576a94d9eb2ec2e0690c221e1412",
            "width": 160
          }
        ],
        "name": "Baauer",
        "popularity": 63,
        "type": "artist",
        "uri": "spotify:artist:25fqWEebq6PoiGQIHIrdtv"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4frXpPxQQZwbCu3eTGnZEw"
        },
        "followers": {
          "href": null,
          "total": 411367
        },
        "genres": [
          "afrofuturism",
          "hip hop",
          "indie soul"
        ],
        "href": "https://api.spotify.com/v1/artists/4frXpPxQQZwbCu3eTGnZEw",
        "id": "4frXpPxQQZwbCu3eTGnZEw",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/2de0565d544c3cbdd2517b724930bb0dcee6a1c8",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/871a3437240ff355903f11e577dd44ff16c005b8",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/6902f8964faf82a934d03c0cb6dfb113397780a1",
            "width": 160
          }
        ],
        "name": "Thundercat",
        "popularity": 69,
        "type": "artist",
        "uri": "spotify:artist:4frXpPxQQZwbCu3eTGnZEw"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/0qF1GTce1VECOsdtzasYnX"
        },
        "followers": {
          "href": null,
          "total": 953
        },
        "genres": [],
        "href": "https://api.spotify.com/v1/artists/0qF1GTce1VECOsdtzasYnX",
        "id": "0qF1GTce1VECOsdtzasYnX",
        "images": [],
        "name": "Jesse Novak",
        "popularity": 44,
        "type": "artist",
        "uri": "spotify:artist:0qF1GTce1VECOsdtzasYnX"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1xU878Z1QtBldR7ru9owdU"
        },
        "followers": {
          "href": null,
          "total": 1559523
        },
        "genres": [
          "alternative dance",
          "dance-punk",
          "indie pop",
          "indie rock",
          "indietronica",
          "modern rock",
          "new rave"
        ],
        "href": "https://api.spotify.com/v1/artists/1xU878Z1QtBldR7ru9owdU",
        "id": "1xU878Z1QtBldR7ru9owdU",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/4547d3204aad5959d55d8cc73ddcedfef4865671",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/d883bb45bbb9f810182f93992c1e0614634e13af",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/9bd8d1322345729e61e918ecfbddcd23eab3038c",
            "width": 160
          }
        ],
        "name": "Phoenix",
        "popularity": 70,
        "type": "artist",
        "uri": "spotify:artist:1xU878Z1QtBldR7ru9owdU"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x"
        },
        "followers": {
          "href": null,
          "total": 11223834
        },
        "genres": [
          "chicago rap",
          "rap"
        ],
        "href": "https://api.spotify.com/v1/artists/5K4W6rqBFWDnAN6FQUkS6x",
        "id": "5K4W6rqBFWDnAN6FQUkS6x",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/bd1c6fdf3705cf9b7d0c8ac8e7bbed98e31a1559",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/b1414e865a16bc0080085ee1901d0bfd19f83fcb",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/ac5cb571c194ca5a942b8096618217839b901a76",
            "width": 160
          }
        ],
        "name": "Kanye West",
        "popularity": 93,
        "type": "artist",
        "uri": "spotify:artist:5K4W6rqBFWDnAN6FQUkS6x"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/71Ur25Abq58vksqJINpGdx"
        },
        "followers": {
          "href": null,
          "total": 178710
        },
        "genres": [
          "bebop",
          "contemporary post-bop",
          "cool jazz",
          "hard bop",
          "jazz",
          "jazz fusion"
        ],
        "href": "https://api.spotify.com/v1/artists/71Ur25Abq58vksqJINpGdx",
        "id": "71Ur25Abq58vksqJINpGdx",
        "images": [
          {
            "height": 723,
            "url": "https://i.scdn.co/image/7e2b6815b5973d47cccbad1d834089231d9b737e",
            "width": 999
          },
          {
            "height": 463,
            "url": "https://i.scdn.co/image/399ee45e619648be6ce992228b79354f31b69999",
            "width": 640
          },
          {
            "height": 145,
            "url": "https://i.scdn.co/image/9c69550b77ce6f3d040f32122bff0325e0dddd3c",
            "width": 200
          },
          {
            "height": 46,
            "url": "https://i.scdn.co/image/5b89bd24901e2d12347296e753027b70e0bfeacd",
            "width": 64
          }
        ],
        "name": "Miles Davis Quintet",
        "popularity": 52,
        "type": "artist",
        "uri": "spotify:artist:71Ur25Abq58vksqJINpGdx"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/7Eu1txygG6nJttLHbZdQOh"
        },
        "followers": {
          "href": null,
          "total": 401637
        },
        "genres": [
          "alternative dance",
          "electronica",
          "folktronica",
          "indie soul",
          "indietronica",
          "intelligent dance music",
          "new rave"
        ],
        "href": "https://api.spotify.com/v1/artists/7Eu1txygG6nJttLHbZdQOh",
        "id": "7Eu1txygG6nJttLHbZdQOh",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/f96458025a0640bf1d3c8f764a42ec21d4db1eae",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/4547d5656309079fdfc73bef86a3c327cd59a3ea",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/e512f91d540d864906d36a850ecb9ad5d562d262",
            "width": 160
          }
        ],
        "name": "Four Tet",
        "popularity": 68,
        "type": "artist",
        "uri": "spotify:artist:7Eu1txygG6nJttLHbZdQOh"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/2JzhQYGos3RqV7MT5fWeek"
        },
        "followers": {
          "href": null,
          "total": 69670
        },
        "genres": [
          "art pop",
          "chillwave",
          "indie rock",
          "indietronica"
        ],
        "href": "https://api.spotify.com/v1/artists/2JzhQYGos3RqV7MT5fWeek",
        "id": "2JzhQYGos3RqV7MT5fWeek",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/5c063dac1c2d57b5a9785571ce4158c4c71adc67",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/8bff9b67daf165eacca05b81a573a30f1d5891f7",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/eb248e778b572cbfcef2dfd402d29f62abd4b1ff",
            "width": 160
          }
        ],
        "name": "Porches",
        "popularity": 56,
        "type": "artist",
        "uri": "spotify:artist:2JzhQYGos3RqV7MT5fWeek"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/68kEuyFKyqrdQQLLsmiatm"
        },
        "followers": {
          "href": null,
          "total": 1041357
        },
        "genres": [
          "conscious hip hop",
          "escape room",
          "hip hop",
          "rap",
          "underground hip hop"
        ],
        "href": "https://api.spotify.com/v1/artists/68kEuyFKyqrdQQLLsmiatm",
        "id": "68kEuyFKyqrdQQLLsmiatm",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/b5928a2fad6cc160bf4b37d8d393d401db61e6c2",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/260292cbd88229a892b119808421c386b7fbfa4e",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/d11088468e543ecedd1dde0e378ccbc66815cc8f",
            "width": 160
          }
        ],
        "name": "Vince Staples",
        "popularity": 76,
        "type": "artist",
        "uri": "spotify:artist:68kEuyFKyqrdQQLLsmiatm"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/04gDigrS5kc9YWfZHwBETP"
        },
        "followers": {
          "href": null,
          "total": 22532664
        },
        "genres": [
          "pop",
          "pop rock"
        ],
        "href": "https://api.spotify.com/v1/artists/04gDigrS5kc9YWfZHwBETP",
        "id": "04gDigrS5kc9YWfZHwBETP",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/608c7b23420c9556a7eabd9097f7e171a91d3871",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/57dba89591ae8a2a0f775e2168267c3a387a621c",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/35b1d8aadd0e89efe5ff11a6cd70367eb3bb669c",
            "width": 160
          }
        ],
        "name": "Maroon 5",
        "popularity": 93,
        "type": "artist",
        "uri": "spotify:artist:04gDigrS5kc9YWfZHwBETP"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4kwxTgCKMipBKhSnEstNKj"
        },
        "followers": {
          "href": null,
          "total": 365643
        },
        "genres": [
          "alternative dance",
          "alternative rock",
          "art pop",
          "baltimore indie",
          "chamber pop",
          "chillwave",
          "dance-punk",
          "dream pop",
          "experimental pop",
          "experimental rock",
          "freak folk",
          "indie pop",
          "indie rock",
          "indietronica",
          "lo-fi",
          "modern rock",
          "new rave",
          "noise pop",
          "noise rock",
          "nu gaze"
        ],
        "href": "https://api.spotify.com/v1/artists/4kwxTgCKMipBKhSnEstNKj",
        "id": "4kwxTgCKMipBKhSnEstNKj",
        "images": [
          {
            "height": 1000,
            "url": "https://i.scdn.co/image/94721d9349cc57b01968409bb5e5f86ade1abb91",
            "width": 1000
          },
          {
            "height": 640,
            "url": "https://i.scdn.co/image/db0a7f725199e834a41b8da0c9cfaa1c9f100e26",
            "width": 640
          },
          {
            "height": 200,
            "url": "https://i.scdn.co/image/a247249b340a18e4cf104ca73542c0ed8b2ca7f6",
            "width": 200
          },
          {
            "height": 64,
            "url": "https://i.scdn.co/image/3002faff13ba036e4c85753a49409e12df653bc2",
            "width": 64
          }
        ],
        "name": "Animal Collective",
        "popularity": 59,
        "type": "artist",
        "uri": "spotify:artist:4kwxTgCKMipBKhSnEstNKj"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/4MCBfE4596Uoi2O4DtmEMz"
        },
        "followers": {
          "href": null,
          "total": 8094670
        },
        "genres": [
          "chicago rap",
          "melodic rap"
        ],
        "href": "https://api.spotify.com/v1/artists/4MCBfE4596Uoi2O4DtmEMz",
        "id": "4MCBfE4596Uoi2O4DtmEMz",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/d8e62447a338a882b490460da20e90aac6d60ae7",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/f356b341ebf9094c19d8f67f8bcb2dfe3ae9cdcf",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/cdc83cb2d6bb6be1983aec3db35431a91248a220",
            "width": 160
          }
        ],
        "name": "Juice WRLD",
        "popularity": 98,
        "type": "artist",
        "uri": "spotify:artist:4MCBfE4596Uoi2O4DtmEMz"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6l3HvQ5sa6mXTsMTB19rO5"
        },
        "followers": {
          "href": null,
          "total": 10322491
        },
        "genres": [
          "conscious hip hop",
          "hip hop",
          "nc hip hop",
          "pop rap",
          "rap"
        ],
        "href": "https://api.spotify.com/v1/artists/6l3HvQ5sa6mXTsMTB19rO5",
        "id": "6l3HvQ5sa6mXTsMTB19rO5",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/1e9eeefb2c94579150fc37916e8319b975ec8a52",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/e021db512f24f1b9aafad580db7408863346e9cf",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/35c726dfde2a3d5545a8b6cbe9cfeaaea3666764",
            "width": 160
          }
        ],
        "name": "J. Cole",
        "popularity": 91,
        "type": "artist",
        "uri": "spotify:artist:6l3HvQ5sa6mXTsMTB19rO5"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/6y80I9YZi4DOpbaSUlL725"
        },
        "followers": {
          "href": null,
          "total": 196753
        },
        "genres": [
          "bass music",
          "chillwave",
          "downtempo",
          "electronica",
          "glitch",
          "indietronica",
          "vapor twitch",
          "wonky"
        ],
        "href": "https://api.spotify.com/v1/artists/6y80I9YZi4DOpbaSUlL725",
        "id": "6y80I9YZi4DOpbaSUlL725",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/dd18c6d5e5631e4179f5154b44bbb2aa80348302",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/18981afaeff633bb72e6178012f4d18be9a6a211",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/624890e4c2f69111d4604865a512017fb3c6a98b",
            "width": 160
          }
        ],
        "name": "Shlohmo",
        "popularity": 60,
        "type": "artist",
        "uri": "spotify:artist:6y80I9YZi4DOpbaSUlL725"
      },
      {
        "external_urls": {
          "spotify": "https://open.spotify.com/artist/1LeVJ5GPeYDOVUjxx1y7Rp"
        },
        "followers": {
          "href": null,
          "total": 514362
        },
        "genres": [
          "chillwave",
          "indie pop",
          "indie rock",
          "indie soul",
          "indietronica",
          "kiwi rock",
          "neo-psychedelic",
          "new rave",
          "portland hip hop"
        ],
        "href": "https://api.spotify.com/v1/artists/1LeVJ5GPeYDOVUjxx1y7Rp",
        "id": "1LeVJ5GPeYDOVUjxx1y7Rp",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/a8ca1855ebcd08dc6203d67560c76a37110c9fc3",
            "width": 640
          },
          {
            "height": 320,
            "url": "https://i.scdn.co/image/dfef9d7d6c4011685225e14a513ff626ca23ee36",
            "width": 320
          },
          {
            "height": 160,
            "url": "https://i.scdn.co/image/51ebc258be35492c85a756ef14e570a423f96b28",
            "width": 160
          }
        ],
        "name": "Unknown Mortal Orchestra",
        "popularity": 69,
        "type": "artist",
        "uri": "spotify:artist:1LeVJ5GPeYDOVUjxx1y7Rp"
      }
    ],
    "total": 50,
    "limit": 50,
    "offset": 0,
    "previous": null,
    "href": "https://api.spotify.com/v1/me/top/artists?limit=50&offset=0",
    "next": null
  }
}

/* 
  body: 
    items: Array, (keep)
    total: Number, (keep)
    limit: Number,
    offset: Number,
    previous: Boolean, 
    href: String, (maybe keep)
    next: Boolean

  items[i]: 
    external_urls: Object, 
    followers: Object, 
    genres: Array, (NEED)
    href: String, (Artists href in the API, could be useful)
    id: String, (NEED)
    images: Array, (need just 1, smallest maybe)
    name: String, (NEED)
    popularity: Number, (NEED)
    type: String, (artist or track),
    uri: String

*/

let req2 = {
  body: {
    "items": [
      {
        "album": {
          "album_type": "SINGLE",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/57vWImR43h4CaDao012Ofp"
              },
              "href": "https://api.spotify.com/v1/artists/57vWImR43h4CaDao012Ofp",
              "id": "57vWImR43h4CaDao012Ofp",
              "name": "Steve Lacy",
              "type": "artist",
              "uri": "spotify:artist:57vWImR43h4CaDao012Ofp"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5fvUFzgVEni3L7769OabqQ"
          },
          "href": "https://api.spotify.com/v1/albums/5fvUFzgVEni3L7769OabqQ",
          "id": "5fvUFzgVEni3L7769OabqQ",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273263886a4992c39704c601409",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02263886a4992c39704c601409",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851263886a4992c39704c601409",
              "width": 64
            }
          ],
          "name": "Dark Red",
          "release_date": "2017-02-20",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:5fvUFzgVEni3L7769OabqQ"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/57vWImR43h4CaDao012Ofp"
            },
            "href": "https://api.spotify.com/v1/artists/57vWImR43h4CaDao012Ofp",
            "id": "57vWImR43h4CaDao012Ofp",
            "name": "Steve Lacy",
            "type": "artist",
            "uri": "spotify:artist:57vWImR43h4CaDao012Ofp"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 173104,
        "explicit": false,
        "external_ids": {
          "isrc": "GBKPL1778015"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/37y7iDayfwm3WXn5BiAoRk"
        },
        "href": "https://api.spotify.com/v1/tracks/37y7iDayfwm3WXn5BiAoRk",
        "id": "37y7iDayfwm3WXn5BiAoRk",
        "is_local": false,
        "name": "Dark Red",
        "popularity": 69,
        "preview_url": "https://p.scdn.co/mp3-preview/8e9689ea710036af15eecca65f7ffe2720d2edab?cid=d4557495633b429a85292698a89e5978",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:37y7iDayfwm3WXn5BiAoRk"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3S4d3YRNGg2OhnNm3QvfhA"
              },
              "href": "https://api.spotify.com/v1/artists/3S4d3YRNGg2OhnNm3QvfhA",
              "id": "3S4d3YRNGg2OhnNm3QvfhA",
              "name": "slenderbodies",
              "type": "artist",
              "uri": "spotify:artist:3S4d3YRNGg2OhnNm3QvfhA"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6JZtYt3v32a9sTRxPlMZEn"
          },
          "href": "https://api.spotify.com/v1/albums/6JZtYt3v32a9sTRxPlMZEn",
          "id": "6JZtYt3v32a9sTRxPlMZEn",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2736fb36b767889fd227d6d7ffc",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e026fb36b767889fd227d6d7ffc",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048516fb36b767889fd227d6d7ffc",
              "width": 64
            }
          ],
          "name": "komorebi",
          "release_date": "2019-09-20",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:6JZtYt3v32a9sTRxPlMZEn"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3S4d3YRNGg2OhnNm3QvfhA"
            },
            "href": "https://api.spotify.com/v1/artists/3S4d3YRNGg2OhnNm3QvfhA",
            "id": "3S4d3YRNGg2OhnNm3QvfhA",
            "name": "slenderbodies",
            "type": "artist",
            "uri": "spotify:artist:3S4d3YRNGg2OhnNm3QvfhA"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 201933,
        "explicit": false,
        "external_ids": {
          "isrc": "USUM71907459"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/59TVQz3vHOWL03tcPVNJdq"
        },
        "href": "https://api.spotify.com/v1/tracks/59TVQz3vHOWL03tcPVNJdq",
        "id": "59TVQz3vHOWL03tcPVNJdq",
        "is_local": false,
        "name": "hearth",
        "popularity": 37,
        "preview_url": "https://p.scdn.co/mp3-preview/0cc8858beb791e9a0cd3be5ac2ffbcc9a0abe976?cid=d4557495633b429a85292698a89e5978",
        "track_number": 10,
        "type": "track",
        "uri": "spotify:track:59TVQz3vHOWL03tcPVNJdq"
      },
      {
        "album": {
          "album_type": "COMPILATION",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
              },
              "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
              "id": "0LyfQWJT6nXafLPZqxe9Of",
              "name": "Various Artists",
              "type": "artist",
              "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2Rj9XVOPxLhgKPeB9QUX13"
          },
          "href": "https://api.spotify.com/v1/albums/2Rj9XVOPxLhgKPeB9QUX13",
          "id": "2Rj9XVOPxLhgKPeB9QUX13",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273cb6a664f48be94d64145fcdd",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02cb6a664f48be94d64145fcdd",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851cb6a664f48be94d64145fcdd",
              "width": 64
            }
          ],
          "name": "Polyvinyl Plays Polyvinyl",
          "release_date": "2016-11-25",
          "release_date_precision": "day",
          "total_tracks": 20,
          "type": "album",
          "uri": "spotify:album:2Rj9XVOPxLhgKPeB9QUX13"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/57MtJQ6Sc4tIxrXIhrqVJL"
            },
            "href": "https://api.spotify.com/v1/artists/57MtJQ6Sc4tIxrXIhrqVJL",
            "id": "57MtJQ6Sc4tIxrXIhrqVJL",
            "name": "Generationals",
            "type": "artist",
            "uri": "spotify:artist:57MtJQ6Sc4tIxrXIhrqVJL"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/25zII6idJMEdpAPxFff9TD"
            },
            "href": "https://api.spotify.com/v1/artists/25zII6idJMEdpAPxFff9TD",
            "id": "25zII6idJMEdpAPxFff9TD",
            "name": "Sarah Quintana",
            "type": "artist",
            "uri": "spotify:artist:25zII6idJMEdpAPxFff9TD"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 173746,
        "explicit": false,
        "external_ids": {
          "isrc": "US3R41632501"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1PvsENmbP6vooYJEFjLNzE"
        },
        "href": "https://api.spotify.com/v1/tracks/1PvsENmbP6vooYJEFjLNzE",
        "id": "1PvsENmbP6vooYJEFjLNzE",
        "is_local": false,
        "name": "In Green (feat. Sarah Quintana)",
        "popularity": 46,
        "preview_url": "https://p.scdn.co/mp3-preview/0b72a1fce8c5eed48c412e40f2a0f266db886141?cid=d4557495633b429a85292698a89e5978",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1PvsENmbP6vooYJEFjLNzE"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/7aA592KWirLsnfb5ulGWvU"
              },
              "href": "https://api.spotify.com/v1/artists/7aA592KWirLsnfb5ulGWvU",
              "id": "7aA592KWirLsnfb5ulGWvU",
              "name": "Danny Brown",
              "type": "artist",
              "uri": "spotify:artist:7aA592KWirLsnfb5ulGWvU"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4G3BRVsGEpWzUdplFJ1VBl"
          },
          "href": "https://api.spotify.com/v1/albums/4G3BRVsGEpWzUdplFJ1VBl",
          "id": "4G3BRVsGEpWzUdplFJ1VBl",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273b9aced11ec7fe35da74ee9fc",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02b9aced11ec7fe35da74ee9fc",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851b9aced11ec7fe35da74ee9fc",
              "width": 64
            }
          ],
          "name": "uknowhatimsayin¿",
          "release_date": "2019-10-04",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:4G3BRVsGEpWzUdplFJ1VBl"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7aA592KWirLsnfb5ulGWvU"
            },
            "href": "https://api.spotify.com/v1/artists/7aA592KWirLsnfb5ulGWvU",
            "id": "7aA592KWirLsnfb5ulGWvU",
            "name": "Danny Brown",
            "type": "artist",
            "uri": "spotify:artist:7aA592KWirLsnfb5ulGWvU"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 208740,
        "explicit": true,
        "external_ids": {
          "isrc": "GBBPW1900156"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/08VqVNSBQNzYzRDNhEoOav"
        },
        "href": "https://api.spotify.com/v1/tracks/08VqVNSBQNzYzRDNhEoOav",
        "id": "08VqVNSBQNzYzRDNhEoOav",
        "is_local": false,
        "name": "Savage Nomad",
        "popularity": 48,
        "preview_url": "https://p.scdn.co/mp3-preview/197e7c70072fba7b73fe8ee8675f3e74f8b919b2?cid=d4557495633b429a85292698a89e5978",
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:08VqVNSBQNzYzRDNhEoOav"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/7JWTyY1F2DGO4WphbQo2yM"
              },
              "href": "https://api.spotify.com/v1/artists/7JWTyY1F2DGO4WphbQo2yM",
              "id": "7JWTyY1F2DGO4WphbQo2yM",
              "name": "Hector Gachan",
              "type": "artist",
              "uri": "spotify:artist:7JWTyY1F2DGO4WphbQo2yM"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/17YZ462PRpLKH87XkxSZGu"
          },
          "href": "https://api.spotify.com/v1/albums/17YZ462PRpLKH87XkxSZGu",
          "id": "17YZ462PRpLKH87XkxSZGu",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737a94e5e285f5d4dbc21dbc96",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027a94e5e285f5d4dbc21dbc96",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517a94e5e285f5d4dbc21dbc96",
              "width": 64
            }
          ],
          "name": "Untitled '91",
          "release_date": "2017-12-01",
          "release_date_precision": "day",
          "total_tracks": 13,
          "type": "album",
          "uri": "spotify:album:17YZ462PRpLKH87XkxSZGu"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7JWTyY1F2DGO4WphbQo2yM"
            },
            "href": "https://api.spotify.com/v1/artists/7JWTyY1F2DGO4WphbQo2yM",
            "id": "7JWTyY1F2DGO4WphbQo2yM",
            "name": "Hector Gachan",
            "type": "artist",
            "uri": "spotify:artist:7JWTyY1F2DGO4WphbQo2yM"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 219100,
        "explicit": false,
        "external_ids": {
          "isrc": "FR9Z61700027"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4IBL3uksmg3kUOf7iUzkpg"
        },
        "href": "https://api.spotify.com/v1/tracks/4IBL3uksmg3kUOf7iUzkpg",
        "id": "4IBL3uksmg3kUOf7iUzkpg",
        "is_local": false,
        "name": "Really Something",
        "popularity": 36,
        "preview_url": "https://p.scdn.co/mp3-preview/2ac79b6aa3248722c1d65b8f005648f7366f2817?cid=d4557495633b429a85292698a89e5978",
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:4IBL3uksmg3kUOf7iUzkpg"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5H0YoDsPDi9fObFmJtTjfN"
              },
              "href": "https://api.spotify.com/v1/artists/5H0YoDsPDi9fObFmJtTjfN",
              "id": "5H0YoDsPDi9fObFmJtTjfN",
              "name": "Ariel Pink",
              "type": "artist",
              "uri": "spotify:artist:5H0YoDsPDi9fObFmJtTjfN"
            }
          ],
          "available_markets": [
            "US"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/20QC9JeWIAgKxPdTqI0A0U"
          },
          "href": "https://api.spotify.com/v1/albums/20QC9JeWIAgKxPdTqI0A0U",
          "id": "20QC9JeWIAgKxPdTqI0A0U",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/c88e52ac754fbcae6bcf742689d77754cd2284bb",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/077a575997c90b35f4d429fe8e88870ed663cf33",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/34a0dd4978608fb70962cbbd684c833efc7c973f",
              "width": 64
            }
          ],
          "name": "Dedicated To Bobby Jameson",
          "release_date": "2017-09-15",
          "release_date_precision": "day",
          "total_tracks": 14,
          "type": "album",
          "uri": "spotify:album:20QC9JeWIAgKxPdTqI0A0U"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5H0YoDsPDi9fObFmJtTjfN"
            },
            "href": "https://api.spotify.com/v1/artists/5H0YoDsPDi9fObFmJtTjfN",
            "id": "5H0YoDsPDi9fObFmJtTjfN",
            "name": "Ariel Pink",
            "type": "artist",
            "uri": "spotify:artist:5H0YoDsPDi9fObFmJtTjfN"
          }
        ],
        "available_markets": [
          "US"
        ],
        "disc_number": 1,
        "duration_ms": 254520,
        "explicit": false,
        "external_ids": {
          "isrc": "QMV8L1724007"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2gPFK3pmM7zzws174NrjkG"
        },
        "href": "https://api.spotify.com/v1/tracks/2gPFK3pmM7zzws174NrjkG",
        "id": "2gPFK3pmM7zzws174NrjkG",
        "is_local": false,
        "name": "Another Weekend",
        "popularity": 55,
        "preview_url": "https://p.scdn.co/mp3-preview/5c1ce1d125c0d234364de9999b0aae94e4beb5b7?cid=d4557495633b429a85292698a89e5978",
        "track_number": 7,
        "type": "track",
        "uri": "spotify:track:2gPFK3pmM7zzws174NrjkG"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6e7QpHYqEiyJGiM98IysLa"
              },
              "href": "https://api.spotify.com/v1/artists/6e7QpHYqEiyJGiM98IysLa",
              "id": "6e7QpHYqEiyJGiM98IysLa",
              "name": "The Highwaymen",
              "type": "artist",
              "uri": "spotify:artist:6e7QpHYqEiyJGiM98IysLa"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6rFM5jHaGzwut3hGbG9pGU"
          },
          "href": "https://api.spotify.com/v1/albums/6rFM5jHaGzwut3hGbG9pGU",
          "id": "6rFM5jHaGzwut3hGbG9pGU",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2735b819ab33345f5e4c7092233",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e025b819ab33345f5e4c7092233",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048515b819ab33345f5e4c7092233",
              "width": 64
            }
          ],
          "name": "Highwayman",
          "release_date": "1985-05-01",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:6rFM5jHaGzwut3hGbG9pGU"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6e7QpHYqEiyJGiM98IysLa"
            },
            "href": "https://api.spotify.com/v1/artists/6e7QpHYqEiyJGiM98IysLa",
            "id": "6e7QpHYqEiyJGiM98IysLa",
            "name": "The Highwaymen",
            "type": "artist",
            "uri": "spotify:artist:6e7QpHYqEiyJGiM98IysLa"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5W5bDNCqJ1jbCgTxDD0Cb3"
            },
            "href": "https://api.spotify.com/v1/artists/5W5bDNCqJ1jbCgTxDD0Cb3",
            "id": "5W5bDNCqJ1jbCgTxDD0Cb3",
            "name": "Willie Nelson",
            "type": "artist",
            "uri": "spotify:artist:5W5bDNCqJ1jbCgTxDD0Cb3"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6kACVPfCOnqzgfEF5ryl0x"
            },
            "href": "https://api.spotify.com/v1/artists/6kACVPfCOnqzgfEF5ryl0x",
            "id": "6kACVPfCOnqzgfEF5ryl0x",
            "name": "Johnny Cash",
            "type": "artist",
            "uri": "spotify:artist:6kACVPfCOnqzgfEF5ryl0x"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7wCjDgV6nqBsHguQXPAaIM"
            },
            "href": "https://api.spotify.com/v1/artists/7wCjDgV6nqBsHguQXPAaIM",
            "id": "7wCjDgV6nqBsHguQXPAaIM",
            "name": "Waylon Jennings",
            "type": "artist",
            "uri": "spotify:artist:7wCjDgV6nqBsHguQXPAaIM"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0vYQRW5LIDeYQOccTviQNX"
            },
            "href": "https://api.spotify.com/v1/artists/0vYQRW5LIDeYQOccTviQNX",
            "id": "0vYQRW5LIDeYQOccTviQNX",
            "name": "Kris Kristofferson",
            "type": "artist",
            "uri": "spotify:artist:0vYQRW5LIDeYQOccTviQNX"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 182653,
        "explicit": false,
        "external_ids": {
          "isrc": "USSM19904362"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7jWbXvrgdbkajU8L28ahn5"
        },
        "href": "https://api.spotify.com/v1/tracks/7jWbXvrgdbkajU8L28ahn5",
        "id": "7jWbXvrgdbkajU8L28ahn5",
        "is_local": false,
        "name": "Highwayman",
        "popularity": 66,
        "preview_url": "https://p.scdn.co/mp3-preview/e076d5c991daae54cbd9bfdd2a317837aca0134e?cid=d4557495633b429a85292698a89e5978",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:7jWbXvrgdbkajU8L28ahn5"
      },
      {
        "album": {
          "album_type": "COMPILATION",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1Mxqyy3pSjf8kZZL4QVxS0"
              },
              "href": "https://api.spotify.com/v1/artists/1Mxqyy3pSjf8kZZL4QVxS0",
              "id": "1Mxqyy3pSjf8kZZL4QVxS0",
              "name": "Frank Sinatra",
              "type": "artist",
              "uri": "spotify:artist:1Mxqyy3pSjf8kZZL4QVxS0"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3i67sGIVw8EBlgfSRv3Lj2"
          },
          "href": "https://api.spotify.com/v1/albums/3i67sGIVw8EBlgfSRv3Lj2",
          "id": "3i67sGIVw8EBlgfSRv3Lj2",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/239d19ee4463e4d95e29fc1b448a7e1ee058ebd8",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/1af298298c0b6cfa8979c6bdcc30b6f7d9e9d98e",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/d94f69afa5f99f13b3c06d438d58f4dc1b3987d5",
              "width": 64
            }
          ],
          "name": "Nothing But The Best (Remastered)",
          "release_date": "2008-01-01",
          "release_date_precision": "day",
          "total_tracks": 22,
          "type": "album",
          "uri": "spotify:album:3i67sGIVw8EBlgfSRv3Lj2"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1Mxqyy3pSjf8kZZL4QVxS0"
            },
            "href": "https://api.spotify.com/v1/artists/1Mxqyy3pSjf8kZZL4QVxS0",
            "id": "1Mxqyy3pSjf8kZZL4QVxS0",
            "name": "Frank Sinatra",
            "type": "artist",
            "uri": "spotify:artist:1Mxqyy3pSjf8kZZL4QVxS0"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 187226,
        "explicit": false,
        "external_ids": {
          "isrc": "USRH10723036"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4dt6XKr0xKdPzjFhwB8dBm"
        },
        "href": "https://api.spotify.com/v1/tracks/4dt6XKr0xKdPzjFhwB8dBm",
        "id": "4dt6XKr0xKdPzjFhwB8dBm",
        "is_local": false,
        "name": "That's Life - Remastered 2008",
        "popularity": 56,
        "preview_url": "https://p.scdn.co/mp3-preview/ca969156bd4298006bafad34fdcea86862e97616?cid=d4557495633b429a85292698a89e5978",
        "track_number": 15,
        "type": "track",
        "uri": "spotify:track:4dt6XKr0xKdPzjFhwB8dBm"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6yJ6QQ3Y5l0s0tn7b0arrO"
              },
              "href": "https://api.spotify.com/v1/artists/6yJ6QQ3Y5l0s0tn7b0arrO",
              "id": "6yJ6QQ3Y5l0s0tn7b0arrO",
              "name": "JPEGMAFIA",
              "type": "artist",
              "uri": "spotify:artist:6yJ6QQ3Y5l0s0tn7b0arrO"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/51WLEfPEEkzAWurvuY6Gco"
          },
          "href": "https://api.spotify.com/v1/albums/51WLEfPEEkzAWurvuY6Gco",
          "id": "51WLEfPEEkzAWurvuY6Gco",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273f8aaeba5e6dee1745371e822",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02f8aaeba5e6dee1745371e822",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851f8aaeba5e6dee1745371e822",
              "width": 64
            }
          ],
          "name": "Veteran",
          "release_date": "2018-08-22",
          "release_date_precision": "day",
          "total_tracks": 19,
          "type": "album",
          "uri": "spotify:album:51WLEfPEEkzAWurvuY6Gco"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6yJ6QQ3Y5l0s0tn7b0arrO"
            },
            "href": "https://api.spotify.com/v1/artists/6yJ6QQ3Y5l0s0tn7b0arrO",
            "id": "6yJ6QQ3Y5l0s0tn7b0arrO",
            "name": "JPEGMAFIA",
            "type": "artist",
            "uri": "spotify:artist:6yJ6QQ3Y5l0s0tn7b0arrO"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 157258,
        "explicit": true,
        "external_ids": {
          "isrc": "QM24S1800042"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6XyxCBp6x3jvtxXvMN5sAA"
        },
        "href": "https://api.spotify.com/v1/tracks/6XyxCBp6x3jvtxXvMN5sAA",
        "id": "6XyxCBp6x3jvtxXvMN5sAA",
        "is_local": false,
        "name": "1539 N. Calvert",
        "popularity": 63,
        "preview_url": "https://p.scdn.co/mp3-preview/05ea57e12ceb2382c6edd8be977fd9977461c068?cid=d4557495633b429a85292698a89e5978",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:6XyxCBp6x3jvtxXvMN5sAA"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1MUKCI5HmTVIucSwcaH6sV"
              },
              "href": "https://api.spotify.com/v1/artists/1MUKCI5HmTVIucSwcaH6sV",
              "id": "1MUKCI5HmTVIucSwcaH6sV",
              "name": "Trust Fund",
              "type": "artist",
              "uri": "spotify:artist:1MUKCI5HmTVIucSwcaH6sV"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0Mmc57BfBevWJ3XRBUKg5r"
          },
          "href": "https://api.spotify.com/v1/albums/0Mmc57BfBevWJ3XRBUKg5r",
          "id": "0Mmc57BfBevWJ3XRBUKg5r",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737dc92476b7c69abad005cc44",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027dc92476b7c69abad005cc44",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517dc92476b7c69abad005cc44",
              "width": 64
            }
          ],
          "name": "No-One's Coming for Us",
          "release_date": "2014-02-09",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:0Mmc57BfBevWJ3XRBUKg5r"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1MUKCI5HmTVIucSwcaH6sV"
            },
            "href": "https://api.spotify.com/v1/artists/1MUKCI5HmTVIucSwcaH6sV",
            "id": "1MUKCI5HmTVIucSwcaH6sV",
            "name": "Trust Fund",
            "type": "artist",
            "uri": "spotify:artist:1MUKCI5HmTVIucSwcaH6sV"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 172493,
        "explicit": false,
        "external_ids": {
          "isrc": "GBYPZ1400184"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0U7QkDh6G0wogKllSkV8R8"
        },
        "href": "https://api.spotify.com/v1/tracks/0U7QkDh6G0wogKllSkV8R8",
        "id": "0U7QkDh6G0wogKllSkV8R8",
        "is_local": false,
        "name": "Cut Me Out",
        "popularity": 18,
        "preview_url": "https://p.scdn.co/mp3-preview/c0100a09cc642d14f1a70ac8c32c5cb8ded51be6?cid=d4557495633b429a85292698a89e5978",
        "track_number": 5,
        "type": "track",
        "uri": "spotify:track:0U7QkDh6G0wogKllSkV8R8"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/41SQP16hv1TioVYqdckmxT"
              },
              "href": "https://api.spotify.com/v1/artists/41SQP16hv1TioVYqdckmxT",
              "id": "41SQP16hv1TioVYqdckmxT",
              "name": "Real Estate",
              "type": "artist",
              "uri": "spotify:artist:41SQP16hv1TioVYqdckmxT"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5k7WCAZPSbJYzjW5SCQ5sn"
          },
          "href": "https://api.spotify.com/v1/albums/5k7WCAZPSbJYzjW5SCQ5sn",
          "id": "5k7WCAZPSbJYzjW5SCQ5sn",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273a7c2b23bc5c9e79300c67ed7",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02a7c2b23bc5c9e79300c67ed7",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851a7c2b23bc5c9e79300c67ed7",
              "width": 64
            }
          ],
          "name": "Atlas",
          "release_date": "2014-03-03",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:5k7WCAZPSbJYzjW5SCQ5sn"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/41SQP16hv1TioVYqdckmxT"
            },
            "href": "https://api.spotify.com/v1/artists/41SQP16hv1TioVYqdckmxT",
            "id": "41SQP16hv1TioVYqdckmxT",
            "name": "Real Estate",
            "type": "artist",
            "uri": "spotify:artist:41SQP16hv1TioVYqdckmxT"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 191160,
        "explicit": false,
        "external_ids": {
          "isrc": "GBCEL1300579"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/73pLTNPzh8FTZi5hODWXT3"
        },
        "href": "https://api.spotify.com/v1/tracks/73pLTNPzh8FTZi5hODWXT3",
        "id": "73pLTNPzh8FTZi5hODWXT3",
        "is_local": false,
        "name": "Horizon",
        "popularity": 39,
        "preview_url": "https://p.scdn.co/mp3-preview/aec8153769d9ae6a9223e4d6557a173683bb147a?cid=d4557495633b429a85292698a89e5978",
        "track_number": 9,
        "type": "track",
        "uri": "spotify:track:73pLTNPzh8FTZi5hODWXT3"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/04tBaW21jyUfeP5iqiKBVq"
              },
              "href": "https://api.spotify.com/v1/artists/04tBaW21jyUfeP5iqiKBVq",
              "id": "04tBaW21jyUfeP5iqiKBVq",
              "name": "Scott Walker",
              "type": "artist",
              "uri": "spotify:artist:04tBaW21jyUfeP5iqiKBVq"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7uU2qrFZQSdQacicLXMnaJ"
          },
          "href": "https://api.spotify.com/v1/albums/7uU2qrFZQSdQacicLXMnaJ",
          "id": "7uU2qrFZQSdQacicLXMnaJ",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/83da4e842f109072cb83d2067bb1581ab34766d0",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/40fe0cc0d12df726695928ae7516f2940513fb61",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/430d7729932fd97f0df26c121215f9f4d42abc20",
              "width": 64
            }
          ],
          "name": "Scott 4",
          "release_date": "1969-11-01",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:7uU2qrFZQSdQacicLXMnaJ"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/04tBaW21jyUfeP5iqiKBVq"
            },
            "href": "https://api.spotify.com/v1/artists/04tBaW21jyUfeP5iqiKBVq",
            "id": "04tBaW21jyUfeP5iqiKBVq",
            "name": "Scott Walker",
            "type": "artist",
            "uri": "spotify:artist:04tBaW21jyUfeP5iqiKBVq"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 220573,
        "explicit": false,
        "external_ids": {
          "isrc": "GBF086900056"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1RJkO4wNDYEuniXzg6WzA1"
        },
        "href": "https://api.spotify.com/v1/tracks/1RJkO4wNDYEuniXzg6WzA1",
        "id": "1RJkO4wNDYEuniXzg6WzA1",
        "is_local": false,
        "name": "The Old Man's Back Again (Dedicated To The Neo-Stalinist Regime)",
        "popularity": 52,
        "preview_url": "https://p.scdn.co/mp3-preview/00b09fb9b30620958ed42927c454de554b0c1e90?cid=d4557495633b429a85292698a89e5978",
        "track_number": 7,
        "type": "track",
        "uri": "spotify:track:1RJkO4wNDYEuniXzg6WzA1"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/2uYWxilOVlUdk4oV9DvwqK"
              },
              "href": "https://api.spotify.com/v1/artists/2uYWxilOVlUdk4oV9DvwqK",
              "id": "2uYWxilOVlUdk4oV9DvwqK",
              "name": "Mitski",
              "type": "artist",
              "uri": "spotify:artist:2uYWxilOVlUdk4oV9DvwqK"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/653wRjqO0GOZPQPcXpeAXD"
          },
          "href": "https://api.spotify.com/v1/albums/653wRjqO0GOZPQPcXpeAXD",
          "id": "653wRjqO0GOZPQPcXpeAXD",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273257f81958be25db29f328159",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02257f81958be25db29f328159",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851257f81958be25db29f328159",
              "width": 64
            }
          ],
          "name": "Be the Cowboy",
          "release_date": "2018-08-17",
          "release_date_precision": "day",
          "total_tracks": 14,
          "type": "album",
          "uri": "spotify:album:653wRjqO0GOZPQPcXpeAXD"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2uYWxilOVlUdk4oV9DvwqK"
            },
            "href": "https://api.spotify.com/v1/artists/2uYWxilOVlUdk4oV9DvwqK",
            "id": "2uYWxilOVlUdk4oV9DvwqK",
            "name": "Mitski",
            "type": "artist",
            "uri": "spotify:artist:2uYWxilOVlUdk4oV9DvwqK"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 193429,
        "explicit": false,
        "external_ids": {
          "isrc": "USJ5G1815009"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6bTn1ovliI0OkjUNkiMBJq"
        },
        "href": "https://api.spotify.com/v1/tracks/6bTn1ovliI0OkjUNkiMBJq",
        "id": "6bTn1ovliI0OkjUNkiMBJq",
        "is_local": false,
        "name": "Nobody",
        "popularity": 65,
        "preview_url": "https://p.scdn.co/mp3-preview/67ffd05d2e0c5dcf4cee6127782198bafa63b7b1?cid=d4557495633b429a85292698a89e5978",
        "track_number": 9,
        "type": "track",
        "uri": "spotify:track:6bTn1ovliI0OkjUNkiMBJq"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3yY2gUcIsjMr8hjo51PoJ8"
              },
              "href": "https://api.spotify.com/v1/artists/3yY2gUcIsjMr8hjo51PoJ8",
              "id": "3yY2gUcIsjMr8hjo51PoJ8",
              "name": "The Smiths",
              "type": "artist",
              "uri": "spotify:artist:3yY2gUcIsjMr8hjo51PoJ8"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6cI1XoZsOhkyrCwtuI70CN"
          },
          "href": "https://api.spotify.com/v1/albums/6cI1XoZsOhkyrCwtuI70CN",
          "id": "6cI1XoZsOhkyrCwtuI70CN",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273a09b231129ab1cb1a6efc57f",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02a09b231129ab1cb1a6efc57f",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851a09b231129ab1cb1a6efc57f",
              "width": 64
            }
          ],
          "name": "The Smiths",
          "release_date": "1984",
          "release_date_precision": "year",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:6cI1XoZsOhkyrCwtuI70CN"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3yY2gUcIsjMr8hjo51PoJ8"
            },
            "href": "https://api.spotify.com/v1/artists/3yY2gUcIsjMr8hjo51PoJ8",
            "id": "3yY2gUcIsjMr8hjo51PoJ8",
            "name": "The Smiths",
            "type": "artist",
            "uri": "spotify:artist:3yY2gUcIsjMr8hjo51PoJ8"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 201746,
        "explicit": false,
        "external_ids": {
          "isrc": "GBCRL1100032"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0uLI1jac8ZJSSRG4QJDo3J"
        },
        "href": "https://api.spotify.com/v1/tracks/0uLI1jac8ZJSSRG4QJDo3J",
        "id": "0uLI1jac8ZJSSRG4QJDo3J",
        "is_local": false,
        "name": "Still Ill - 2011 Remaster",
        "popularity": 53,
        "preview_url": "https://p.scdn.co/mp3-preview/bc20be797392424ae0c51824694b5d6f64259a65?cid=d4557495633b429a85292698a89e5978",
        "track_number": 7,
        "type": "track",
        "uri": "spotify:track:0uLI1jac8ZJSSRG4QJDo3J"
      },
      {
        "album": {
          "album_type": "SINGLE",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0epOFNiUfyON9EYx7Tpr6V"
              },
              "href": "https://api.spotify.com/v1/artists/0epOFNiUfyON9EYx7Tpr6V",
              "id": "0epOFNiUfyON9EYx7Tpr6V",
              "name": "The Strokes",
              "type": "artist",
              "uri": "spotify:artist:0epOFNiUfyON9EYx7Tpr6V"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2s38at0L4RuSQfDSjQ2Fwr"
          },
          "href": "https://api.spotify.com/v1/albums/2s38at0L4RuSQfDSjQ2Fwr",
          "id": "2s38at0L4RuSQfDSjQ2Fwr",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737383b6e3b68f30eb21814fc7",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027383b6e3b68f30eb21814fc7",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517383b6e3b68f30eb21814fc7",
              "width": 64
            }
          ],
          "name": "At The Door",
          "release_date": "2020-02-11",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:2s38at0L4RuSQfDSjQ2Fwr"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0epOFNiUfyON9EYx7Tpr6V"
            },
            "href": "https://api.spotify.com/v1/artists/0epOFNiUfyON9EYx7Tpr6V",
            "id": "0epOFNiUfyON9EYx7Tpr6V",
            "name": "The Strokes",
            "type": "artist",
            "uri": "spotify:artist:0epOFNiUfyON9EYx7Tpr6V"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 310373,
        "explicit": false,
        "external_ids": {
          "isrc": "USRC11902731"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7dz48pntblPzJ9mTPiUH81"
        },
        "href": "https://api.spotify.com/v1/tracks/7dz48pntblPzJ9mTPiUH81",
        "id": "7dz48pntblPzJ9mTPiUH81",
        "is_local": false,
        "name": "At The Door",
        "popularity": 72,
        "preview_url": "https://p.scdn.co/mp3-preview/c14b196464e1fa7dcee6546c5b59bf784fe907be?cid=d4557495633b429a85292698a89e5978",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:7dz48pntblPzJ9mTPiUH81"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/2uYWxilOVlUdk4oV9DvwqK"
              },
              "href": "https://api.spotify.com/v1/artists/2uYWxilOVlUdk4oV9DvwqK",
              "id": "2uYWxilOVlUdk4oV9DvwqK",
              "name": "Mitski",
              "type": "artist",
              "uri": "spotify:artist:2uYWxilOVlUdk4oV9DvwqK"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/472GvzwE3EZ0i2EEaly5mX"
          },
          "href": "https://api.spotify.com/v1/albums/472GvzwE3EZ0i2EEaly5mX",
          "id": "472GvzwE3EZ0i2EEaly5mX",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27350f8ace2690355fa20e58227",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0250f8ace2690355fa20e58227",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485150f8ace2690355fa20e58227",
              "width": 64
            }
          ],
          "name": "Bury Me At Makeout Creek",
          "release_date": "2014-11-11",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:472GvzwE3EZ0i2EEaly5mX"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2uYWxilOVlUdk4oV9DvwqK"
            },
            "href": "https://api.spotify.com/v1/artists/2uYWxilOVlUdk4oV9DvwqK",
            "id": "2uYWxilOVlUdk4oV9DvwqK",
            "name": "Mitski",
            "type": "artist",
            "uri": "spotify:artist:2uYWxilOVlUdk4oV9DvwqK"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 278640,
        "explicit": false,
        "external_ids": {
          "isrc": "USA2B1511604"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1Ac5BDsGUMQ3tsW2vnc52x"
        },
        "href": "https://api.spotify.com/v1/tracks/1Ac5BDsGUMQ3tsW2vnc52x",
        "id": "1Ac5BDsGUMQ3tsW2vnc52x",
        "is_local": false,
        "name": "First Love / Late Spring",
        "popularity": 58,
        "preview_url": "https://p.scdn.co/mp3-preview/fceead5d78cb547d2eca615da8596e63d35da418?cid=d4557495633b429a85292698a89e5978",
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:1Ac5BDsGUMQ3tsW2vnc52x"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/246dkjvS1zLTtiykXe5h60"
              },
              "href": "https://api.spotify.com/v1/artists/246dkjvS1zLTtiykXe5h60",
              "id": "246dkjvS1zLTtiykXe5h60",
              "name": "Post Malone",
              "type": "artist",
              "uri": "spotify:artist:246dkjvS1zLTtiykXe5h60"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4g1ZRSobMefqF6nelkgibi"
          },
          "href": "https://api.spotify.com/v1/albums/4g1ZRSobMefqF6nelkgibi",
          "id": "4g1ZRSobMefqF6nelkgibi",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/94105e271865c28853bfb7b44b38353a2fea45d6",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/e2e8a627df64b4824c9f2bb8e69e44f975200abb",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/a7f2cc3d9b653ac116a3666cc3aaf01880aab8bd",
              "width": 64
            }
          ],
          "name": "Hollywood's Bleeding",
          "release_date": "2019-09-06",
          "release_date_precision": "day",
          "total_tracks": 17,
          "type": "album",
          "uri": "spotify:album:4g1ZRSobMefqF6nelkgibi"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/246dkjvS1zLTtiykXe5h60"
            },
            "href": "https://api.spotify.com/v1/artists/246dkjvS1zLTtiykXe5h60",
            "id": "246dkjvS1zLTtiykXe5h60",
            "name": "Post Malone",
            "type": "artist",
            "uri": "spotify:artist:246dkjvS1zLTtiykXe5h60"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 215280,
        "explicit": false,
        "external_ids": {
          "isrc": "USUM71915699"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/21jGcNKet2qwijlDFuPiPb"
        },
        "href": "https://api.spotify.com/v1/tracks/21jGcNKet2qwijlDFuPiPb",
        "id": "21jGcNKet2qwijlDFuPiPb",
        "is_local": false,
        "name": "Circles",
        "popularity": 95,
        "preview_url": "https://p.scdn.co/mp3-preview/9cb3c8b7ccb399c2c5346ac424cc59be9fef3c98?cid=d4557495633b429a85292698a89e5978",
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:21jGcNKet2qwijlDFuPiPb"
      },
      {
        "album": {
          "album_type": "SINGLE",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6ft7JnxMyZhp7N52qzHymY"
              },
              "href": "https://api.spotify.com/v1/artists/6ft7JnxMyZhp7N52qzHymY",
              "id": "6ft7JnxMyZhp7N52qzHymY",
              "name": "Vansire",
              "type": "artist",
              "uri": "spotify:artist:6ft7JnxMyZhp7N52qzHymY"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5HkW3pBnVMbKRaWbizrIMN"
          },
          "href": "https://api.spotify.com/v1/albums/5HkW3pBnVMbKRaWbizrIMN",
          "id": "5HkW3pBnVMbKRaWbizrIMN",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27341a0570bfa2206315f4eca34",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0241a0570bfa2206315f4eca34",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485141a0570bfa2206315f4eca34",
              "width": 64
            }
          ],
          "name": "Metamodernity",
          "release_date": "2019-06-11",
          "release_date_precision": "day",
          "total_tracks": 2,
          "type": "album",
          "uri": "spotify:album:5HkW3pBnVMbKRaWbizrIMN"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6ft7JnxMyZhp7N52qzHymY"
            },
            "href": "https://api.spotify.com/v1/artists/6ft7JnxMyZhp7N52qzHymY",
            "id": "6ft7JnxMyZhp7N52qzHymY",
            "name": "Vansire",
            "type": "artist",
            "uri": "spotify:artist:6ft7JnxMyZhp7N52qzHymY"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 162663,
        "explicit": false,
        "external_ids": {
          "isrc": "QZFYX1977153"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/61GiMDN1kUiEQK6zHGMdnx"
        },
        "href": "https://api.spotify.com/v1/tracks/61GiMDN1kUiEQK6zHGMdnx",
        "id": "61GiMDN1kUiEQK6zHGMdnx",
        "is_local": false,
        "name": "Metamodernity",
        "popularity": 56,
        "preview_url": "https://p.scdn.co/mp3-preview/fd7c57da415caafd8d4a167e95bd8c0653f510c0?cid=d4557495633b429a85292698a89e5978",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:61GiMDN1kUiEQK6zHGMdnx"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/2yDodJUwXfdHzg4crwslUp"
              },
              "href": "https://api.spotify.com/v1/artists/2yDodJUwXfdHzg4crwslUp",
              "id": "2yDodJUwXfdHzg4crwslUp",
              "name": "Allah-Las",
              "type": "artist",
              "uri": "spotify:artist:2yDodJUwXfdHzg4crwslUp"
            }
          ],
          "available_markets": [
            "US"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5ZTVyawDnCv1mzf6FaIRvV"
          },
          "href": "https://api.spotify.com/v1/albums/5ZTVyawDnCv1mzf6FaIRvV",
          "id": "5ZTVyawDnCv1mzf6FaIRvV",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273a322c73d2f7168344067d3ee",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02a322c73d2f7168344067d3ee",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851a322c73d2f7168344067d3ee",
              "width": 64
            }
          ],
          "name": "Allah-Las",
          "release_date": "2012-09-18",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:5ZTVyawDnCv1mzf6FaIRvV"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2yDodJUwXfdHzg4crwslUp"
            },
            "href": "https://api.spotify.com/v1/artists/2yDodJUwXfdHzg4crwslUp",
            "id": "2yDodJUwXfdHzg4crwslUp",
            "name": "Allah-Las",
            "type": "artist",
            "uri": "spotify:artist:2yDodJUwXfdHzg4crwslUp"
          }
        ],
        "available_markets": [
          "US"
        ],
        "disc_number": 1,
        "duration_ms": 212986,
        "explicit": false,
        "external_ids": {
          "isrc": "USD8D2007001"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6RJ4x0nkKtUPNC5mOfiJYT"
        },
        "href": "https://api.spotify.com/v1/tracks/6RJ4x0nkKtUPNC5mOfiJYT",
        "id": "6RJ4x0nkKtUPNC5mOfiJYT",
        "is_local": false,
        "name": "Catamaran",
        "popularity": 50,
        "preview_url": "https://p.scdn.co/mp3-preview/ec038eb5b575cfbb68588523c4ec65f82c1dda67?cid=d4557495633b429a85292698a89e5978",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:6RJ4x0nkKtUPNC5mOfiJYT"
      },
      {
        "album": {
          "album_type": "SINGLE",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb"
              },
              "href": "https://api.spotify.com/v1/artists/5INjqkS1o8h1imAzPqGZBb",
              "id": "5INjqkS1o8h1imAzPqGZBb",
              "name": "Tame Impala",
              "type": "artist",
              "uri": "spotify:artist:5INjqkS1o8h1imAzPqGZBb"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2aoEKkx2CaybhYNiu4o2rQ"
          },
          "href": "https://api.spotify.com/v1/albums/2aoEKkx2CaybhYNiu4o2rQ",
          "id": "2aoEKkx2CaybhYNiu4o2rQ",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/a166d5c1c0d1141f7c0716af58ac4eee025e5b8f",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/d495a0adff66cfb3f28282251d14ce1093c8764d",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/49cf3f4413368c108deeed58bb7e075510840622",
              "width": 64
            }
          ],
          "name": "Tame Impala",
          "release_date": "2008-01-01",
          "release_date_precision": "day",
          "total_tracks": 5,
          "type": "album",
          "uri": "spotify:album:2aoEKkx2CaybhYNiu4o2rQ"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb"
            },
            "href": "https://api.spotify.com/v1/artists/5INjqkS1o8h1imAzPqGZBb",
            "id": "5INjqkS1o8h1imAzPqGZBb",
            "name": "Tame Impala",
            "type": "artist",
            "uri": "spotify:artist:5INjqkS1o8h1imAzPqGZBb"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 264800,
        "explicit": false,
        "external_ids": {
          "isrc": "AUUM70801192"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5VdLK7Kcqyf5RstFU0lhwh"
        },
        "href": "https://api.spotify.com/v1/tracks/5VdLK7Kcqyf5RstFU0lhwh",
        "id": "5VdLK7Kcqyf5RstFU0lhwh",
        "is_local": false,
        "name": "Skeleton Tiger",
        "popularity": 47,
        "preview_url": "https://p.scdn.co/mp3-preview/e363fa5ad1c9b8a46639c340b741e49ff3646972?cid=d4557495633b429a85292698a89e5978",
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:5VdLK7Kcqyf5RstFU0lhwh"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3S4d3YRNGg2OhnNm3QvfhA"
              },
              "href": "https://api.spotify.com/v1/artists/3S4d3YRNGg2OhnNm3QvfhA",
              "id": "3S4d3YRNGg2OhnNm3QvfhA",
              "name": "slenderbodies",
              "type": "artist",
              "uri": "spotify:artist:3S4d3YRNGg2OhnNm3QvfhA"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6JZtYt3v32a9sTRxPlMZEn"
          },
          "href": "https://api.spotify.com/v1/albums/6JZtYt3v32a9sTRxPlMZEn",
          "id": "6JZtYt3v32a9sTRxPlMZEn",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2736fb36b767889fd227d6d7ffc",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e026fb36b767889fd227d6d7ffc",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048516fb36b767889fd227d6d7ffc",
              "width": 64
            }
          ],
          "name": "komorebi",
          "release_date": "2019-09-20",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:6JZtYt3v32a9sTRxPlMZEn"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3S4d3YRNGg2OhnNm3QvfhA"
            },
            "href": "https://api.spotify.com/v1/artists/3S4d3YRNGg2OhnNm3QvfhA",
            "id": "3S4d3YRNGg2OhnNm3QvfhA",
            "name": "slenderbodies",
            "type": "artist",
            "uri": "spotify:artist:3S4d3YRNGg2OhnNm3QvfhA"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 173493,
        "explicit": false,
        "external_ids": {
          "isrc": "USUM71907460"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/33n1o7mzohXiCzS6Rr5q2E"
        },
        "href": "https://api.spotify.com/v1/tracks/33n1o7mzohXiCzS6Rr5q2E",
        "id": "33n1o7mzohXiCzS6Rr5q2E",
        "is_local": false,
        "name": "belong",
        "popularity": 56,
        "preview_url": "https://p.scdn.co/mp3-preview/0f4aa0c1fa17b7193c68878e14b2eeaa31654377?cid=d4557495633b429a85292698a89e5978",
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:33n1o7mzohXiCzS6Rr5q2E"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb"
              },
              "href": "https://api.spotify.com/v1/artists/5INjqkS1o8h1imAzPqGZBb",
              "id": "5INjqkS1o8h1imAzPqGZBb",
              "name": "Tame Impala",
              "type": "artist",
              "uri": "spotify:artist:5INjqkS1o8h1imAzPqGZBb"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/31qVWUdRrlb8thMvts0yYL"
          },
          "href": "https://api.spotify.com/v1/albums/31qVWUdRrlb8thMvts0yYL",
          "id": "31qVWUdRrlb8thMvts0yYL",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27358267bd34420a00d5cf83a49",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0258267bd34420a00d5cf83a49",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485158267bd34420a00d5cf83a49",
              "width": 64
            }
          ],
          "name": "The Slow Rush",
          "release_date": "2020-02-14",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:31qVWUdRrlb8thMvts0yYL"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb"
            },
            "href": "https://api.spotify.com/v1/artists/5INjqkS1o8h1imAzPqGZBb",
            "id": "5INjqkS1o8h1imAzPqGZBb",
            "name": "Tame Impala",
            "type": "artist",
            "uri": "spotify:artist:5INjqkS1o8h1imAzPqGZBb"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 239266,
        "explicit": false,
        "external_ids": {
          "isrc": "AUUM71900933"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6RZmhpvukfyeSURhf4kZ0d"
        },
        "href": "https://api.spotify.com/v1/tracks/6RZmhpvukfyeSURhf4kZ0d",
        "id": "6RZmhpvukfyeSURhf4kZ0d",
        "is_local": false,
        "name": "Is It True",
        "popularity": 74,
        "preview_url": "https://p.scdn.co/mp3-preview/972b2f6697d175064e993f748d436b1adb55ce6b?cid=d4557495633b429a85292698a89e5978",
        "track_number": 9,
        "type": "track",
        "uri": "spotify:track:6RZmhpvukfyeSURhf4kZ0d"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3UQ87SmqkLxIMdenYnsLld"
              },
              "href": "https://api.spotify.com/v1/artists/3UQ87SmqkLxIMdenYnsLld",
              "id": "3UQ87SmqkLxIMdenYnsLld",
              "name": "Efence",
              "type": "artist",
              "uri": "spotify:artist:3UQ87SmqkLxIMdenYnsLld"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6fsWcJePfjC3FGNj5qF34i"
          },
          "href": "https://api.spotify.com/v1/albums/6fsWcJePfjC3FGNj5qF34i",
          "id": "6fsWcJePfjC3FGNj5qF34i",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273cfa5fc78e2e1b5f42081054f",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02cfa5fc78e2e1b5f42081054f",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851cfa5fc78e2e1b5f42081054f",
              "width": 64
            }
          ],
          "name": "Lost Future",
          "release_date": "2017-09-22",
          "release_date_precision": "day",
          "total_tracks": 13,
          "type": "album",
          "uri": "spotify:album:6fsWcJePfjC3FGNj5qF34i"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3UQ87SmqkLxIMdenYnsLld"
            },
            "href": "https://api.spotify.com/v1/artists/3UQ87SmqkLxIMdenYnsLld",
            "id": "3UQ87SmqkLxIMdenYnsLld",
            "name": "Efence",
            "type": "artist",
            "uri": "spotify:artist:3UQ87SmqkLxIMdenYnsLld"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 184186,
        "explicit": false,
        "external_ids": {
          "isrc": "GB-SMU-41-07212"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7xRSeMdAWMoWqlYnoC3kPX"
        },
        "href": "https://api.spotify.com/v1/tracks/7xRSeMdAWMoWqlYnoC3kPX",
        "id": "7xRSeMdAWMoWqlYnoC3kPX",
        "is_local": false,
        "name": "Spaceflight",
        "popularity": 48,
        "preview_url": "https://p.scdn.co/mp3-preview/c6423665a87645a28df32d5da412d82382e4745e?cid=d4557495633b429a85292698a89e5978",
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:7xRSeMdAWMoWqlYnoC3kPX"
      },
      {
        "album": {
          "album_type": "SINGLE",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/587PA35pRGL1JwQr6idJbb"
              },
              "href": "https://api.spotify.com/v1/artists/587PA35pRGL1JwQr6idJbb",
              "id": "587PA35pRGL1JwQr6idJbb",
              "name": "NEIL FRANCES",
              "type": "artist",
              "uri": "spotify:artist:587PA35pRGL1JwQr6idJbb"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6SHpvcYKAzIKapLRcBrfLJ"
          },
          "href": "https://api.spotify.com/v1/albums/6SHpvcYKAzIKapLRcBrfLJ",
          "id": "6SHpvcYKAzIKapLRcBrfLJ",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27305cf4efc1792400015c25e7b",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0205cf4efc1792400015c25e7b",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485105cf4efc1792400015c25e7b",
              "width": 64
            }
          ],
          "name": "Ask Me Anything",
          "release_date": "2018-07-20",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:6SHpvcYKAzIKapLRcBrfLJ"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/587PA35pRGL1JwQr6idJbb"
            },
            "href": "https://api.spotify.com/v1/artists/587PA35pRGL1JwQr6idJbb",
            "id": "587PA35pRGL1JwQr6idJbb",
            "name": "NEIL FRANCES",
            "type": "artist",
            "uri": "spotify:artist:587PA35pRGL1JwQr6idJbb"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 207157,
        "explicit": false,
        "external_ids": {
          "isrc": "US3DF1814620"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0PgG1kcwpxVpLcpZxYAzk7"
        },
        "href": "https://api.spotify.com/v1/tracks/0PgG1kcwpxVpLcpZxYAzk7",
        "id": "0PgG1kcwpxVpLcpZxYAzk7",
        "is_local": false,
        "name": "Ask Me Anything",
        "popularity": 41,
        "preview_url": "https://p.scdn.co/mp3-preview/65a98a2a3cca8f59b8f4268e0e0987aacd7b6800?cid=d4557495633b429a85292698a89e5978",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:0PgG1kcwpxVpLcpZxYAzk7"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5oOhM2DFWab8XhSdQiITry"
              },
              "href": "https://api.spotify.com/v1/artists/5oOhM2DFWab8XhSdQiITry",
              "id": "5oOhM2DFWab8XhSdQiITry",
              "name": "Tycho",
              "type": "artist",
              "uri": "spotify:artist:5oOhM2DFWab8XhSdQiITry"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/66szrvYMqoPm7VkqaFCJ28"
          },
          "href": "https://api.spotify.com/v1/albums/66szrvYMqoPm7VkqaFCJ28",
          "id": "66szrvYMqoPm7VkqaFCJ28",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/833a1615078c4bff47bf74e91706e036b7535f23",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ea820284253329ec910169fa2f01ae9b94e5c5a7",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/9679833880a835474d91c1b6481efdf8157bc9a5",
              "width": 64
            }
          ],
          "name": "Dive (Deluxe Version)",
          "release_date": "2012-09-04",
          "release_date_precision": "day",
          "total_tracks": 15,
          "type": "album",
          "uri": "spotify:album:66szrvYMqoPm7VkqaFCJ28"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5oOhM2DFWab8XhSdQiITry"
            },
            "href": "https://api.spotify.com/v1/artists/5oOhM2DFWab8XhSdQiITry",
            "id": "5oOhM2DFWab8XhSdQiITry",
            "name": "Tycho",
            "type": "artist",
            "uri": "spotify:artist:5oOhM2DFWab8XhSdQiITry"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4nZBJZHavxcUzGeK2k6fL9"
            },
            "href": "https://api.spotify.com/v1/artists/4nZBJZHavxcUzGeK2k6fL9",
            "id": "4nZBJZHavxcUzGeK2k6fL9",
            "name": "Kolombo",
            "type": "artist",
            "uri": "spotify:artist:4nZBJZHavxcUzGeK2k6fL9"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 356929,
        "explicit": false,
        "external_ids": {
          "isrc": "US2J71204501"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1k7EU8gfzigHV6mCPeD5iW"
        },
        "href": "https://api.spotify.com/v1/tracks/1k7EU8gfzigHV6mCPeD5iW",
        "id": "1k7EU8gfzigHV6mCPeD5iW",
        "is_local": false,
        "name": "A Walk - Kolombo Remix",
        "popularity": 25,
        "preview_url": "https://p.scdn.co/mp3-preview/0a1d8f9d5eb54e9632304dbf7cad43cb9b35ce3c?cid=d4557495633b429a85292698a89e5978",
        "track_number": 14,
        "type": "track",
        "uri": "spotify:track:1k7EU8gfzigHV6mCPeD5iW"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/12qS7lypMdpvASeNnFXtmN"
              },
              "href": "https://api.spotify.com/v1/artists/12qS7lypMdpvASeNnFXtmN",
              "id": "12qS7lypMdpvASeNnFXtmN",
              "name": "Hoops",
              "type": "artist",
              "uri": "spotify:artist:12qS7lypMdpvASeNnFXtmN"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/1xOyUrDmQjLkYtWWv0iLf0"
          },
          "href": "https://api.spotify.com/v1/albums/1xOyUrDmQjLkYtWWv0iLf0",
          "id": "1xOyUrDmQjLkYtWWv0iLf0",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273736bf0bb598d16cdf9559347",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02736bf0bb598d16cdf9559347",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851736bf0bb598d16cdf9559347",
              "width": 64
            }
          ],
          "name": "Tapes #1-3",
          "release_date": "2017-11-10",
          "release_date_precision": "day",
          "total_tracks": 18,
          "type": "album",
          "uri": "spotify:album:1xOyUrDmQjLkYtWWv0iLf0"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/12qS7lypMdpvASeNnFXtmN"
            },
            "href": "https://api.spotify.com/v1/artists/12qS7lypMdpvASeNnFXtmN",
            "id": "12qS7lypMdpvASeNnFXtmN",
            "name": "Hoops",
            "type": "artist",
            "uri": "spotify:artist:12qS7lypMdpvASeNnFXtmN"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 2,
        "duration_ms": 101061,
        "explicit": false,
        "external_ids": {
          "isrc": "USFP71757001"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7JjphsHsdECj3Y3oPpvchf"
        },
        "href": "https://api.spotify.com/v1/tracks/7JjphsHsdECj3Y3oPpvchf",
        "id": "7JjphsHsdECj3Y3oPpvchf",
        "is_local": false,
        "name": "4 U",
        "popularity": 33,
        "preview_url": "https://p.scdn.co/mp3-preview/c1cd2774a010dd8176fa2b61b0add9cd9a891d26?cid=d4557495633b429a85292698a89e5978",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:7JjphsHsdECj3Y3oPpvchf"
      },
      {
        "album": {
          "album_type": "SINGLE",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/49tQo2QULno7gxHutgccqF"
              },
              "href": "https://api.spotify.com/v1/artists/49tQo2QULno7gxHutgccqF",
              "id": "49tQo2QULno7gxHutgccqF",
              "name": "LANY",
              "type": "artist",
              "uri": "spotify:artist:49tQo2QULno7gxHutgccqF"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/42jFcn7WDz3hkdkEUUQaM7"
          },
          "href": "https://api.spotify.com/v1/albums/42jFcn7WDz3hkdkEUUQaM7",
          "id": "42jFcn7WDz3hkdkEUUQaM7",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/5416d79901b7b0eb448ce4cbfc33d838ea0797e9",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/228ad65c9896c44dc5ccb0eca343c5fa727ba6d8",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/b01ebf613c5855f574c50245163e337abbfe443d",
              "width": 64
            }
          ],
          "name": "kinda",
          "release_date": "2016-06-24",
          "release_date_precision": "day",
          "total_tracks": 6,
          "type": "album",
          "uri": "spotify:album:42jFcn7WDz3hkdkEUUQaM7"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/49tQo2QULno7gxHutgccqF"
            },
            "href": "https://api.spotify.com/v1/artists/49tQo2QULno7gxHutgccqF",
            "id": "49tQo2QULno7gxHutgccqF",
            "name": "LANY",
            "type": "artist",
            "uri": "spotify:artist:49tQo2QULno7gxHutgccqF"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 217024,
        "explicit": false,
        "external_ids": {
          "isrc": "GBUM71601238"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1Ey2bSPiqNR4wDFpjInp9X"
        },
        "href": "https://api.spotify.com/v1/tracks/1Ey2bSPiqNR4wDFpjInp9X",
        "id": "1Ey2bSPiqNR4wDFpjInp9X",
        "is_local": false,
        "name": "WHERE THE HELL ARE MY FRIENDS",
        "popularity": 46,
        "preview_url": "https://p.scdn.co/mp3-preview/33f2ef729d6fff03140ba9d3dde7b9b59c3ebf6f?cid=d4557495633b429a85292698a89e5978",
        "track_number": 6,
        "type": "track",
        "uri": "spotify:track:1Ey2bSPiqNR4wDFpjInp9X"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnR"
              },
              "href": "https://api.spotify.com/v1/artists/66CXWjxzNUsdJxJ2JdwvnR",
              "id": "66CXWjxzNUsdJxJ2JdwvnR",
              "name": "Ariana Grande",
              "type": "artist",
              "uri": "spotify:artist:66CXWjxzNUsdJxJ2JdwvnR"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2fYhqwDWXjbpjaIJPEfKFw"
          },
          "href": "https://api.spotify.com/v1/albums/2fYhqwDWXjbpjaIJPEfKFw",
          "id": "2fYhqwDWXjbpjaIJPEfKFw",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/38205ab1bdc4b37b68b3ace40989afb6c2c1faa9",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/3c951cba1147f2e08a50dfb6b7e3644ea4cbba05",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/e1485e7ea6a9cb1d5bdd96e86e9246188670bbc7",
              "width": 64
            }
          ],
          "name": "thank u, next",
          "release_date": "2019-02-08",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:2fYhqwDWXjbpjaIJPEfKFw"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/66CXWjxzNUsdJxJ2JdwvnR"
            },
            "href": "https://api.spotify.com/v1/artists/66CXWjxzNUsdJxJ2JdwvnR",
            "id": "66CXWjxzNUsdJxJ2JdwvnR",
            "name": "Ariana Grande",
            "type": "artist",
            "uri": "spotify:artist:66CXWjxzNUsdJxJ2JdwvnR"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 178626,
        "explicit": true,
        "external_ids": {
          "isrc": "USUM71900110"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6ocbgoVGwYJhOv1GgI9NsF"
        },
        "href": "https://api.spotify.com/v1/tracks/6ocbgoVGwYJhOv1GgI9NsF",
        "id": "6ocbgoVGwYJhOv1GgI9NsF",
        "is_local": false,
        "name": "7 rings",
        "popularity": 88,
        "preview_url": "https://p.scdn.co/mp3-preview/6b6b87770df5e36c2a8f039ed9db12c9afded9d5?cid=d4557495633b429a85292698a89e5978",
        "track_number": 10,
        "type": "track",
        "uri": "spotify:track:6ocbgoVGwYJhOv1GgI9NsF"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
              },
              "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
              "id": "4tZwfgrHOc3mvqYlEYSvVi",
              "name": "Daft Punk",
              "type": "artist",
              "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4a0p1M12f7VaZWdoNSdEK4"
          },
          "href": "https://api.spotify.com/v1/albums/4a0p1M12f7VaZWdoNSdEK4",
          "id": "4a0p1M12f7VaZWdoNSdEK4",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737659e5268c008c136fc9c279",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027659e5268c008c136fc9c279",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517659e5268c008c136fc9c279",
              "width": 64
            }
          ],
          "name": "Musique, Vol. 1",
          "release_date": "2006-03-31",
          "release_date_precision": "day",
          "total_tracks": 15,
          "type": "album",
          "uri": "spotify:album:4a0p1M12f7VaZWdoNSdEK4"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
            },
            "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
            "id": "4tZwfgrHOc3mvqYlEYSvVi",
            "name": "Daft Punk",
            "type": "artist",
            "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 316253,
        "explicit": false,
        "external_ids": {
          "isrc": "GBDUW0600017"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0HadrlP2mwJidGF3pyBX4H"
        },
        "href": "https://api.spotify.com/v1/tracks/0HadrlP2mwJidGF3pyBX4H",
        "id": "0HadrlP2mwJidGF3pyBX4H",
        "is_local": false,
        "name": "Alive",
        "popularity": 34,
        "preview_url": "https://p.scdn.co/mp3-preview/ed2116d5ce6401c3f7a233fa935de248e8108159?cid=d4557495633b429a85292698a89e5978",
        "track_number": 5,
        "type": "track",
        "uri": "spotify:track:0HadrlP2mwJidGF3pyBX4H"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/2yDodJUwXfdHzg4crwslUp"
              },
              "href": "https://api.spotify.com/v1/artists/2yDodJUwXfdHzg4crwslUp",
              "id": "2yDodJUwXfdHzg4crwslUp",
              "name": "Allah-Las",
              "type": "artist",
              "uri": "spotify:artist:2yDodJUwXfdHzg4crwslUp"
            }
          ],
          "available_markets": [
            "AR",
            "AU",
            "BO",
            "BR",
            "CA",
            "CL",
            "CO",
            "CR",
            "DO",
            "EC",
            "GT",
            "HK",
            "HN",
            "ID",
            "JP",
            "MX",
            "MY",
            "NI",
            "NZ",
            "PA",
            "PE",
            "PH",
            "PY",
            "SG",
            "SV",
            "TH",
            "TW",
            "US",
            "UY",
            "VN"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5F8jJjrvgBLq1AQ0RbYU52"
          },
          "href": "https://api.spotify.com/v1/albums/5F8jJjrvgBLq1AQ0RbYU52",
          "id": "5F8jJjrvgBLq1AQ0RbYU52",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273fa41f613b3464b1b5ea62446",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02fa41f613b3464b1b5ea62446",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851fa41f613b3464b1b5ea62446",
              "width": 64
            }
          ],
          "name": "Worship the Sun",
          "release_date": "2014-09-16",
          "release_date_precision": "day",
          "total_tracks": 14,
          "type": "album",
          "uri": "spotify:album:5F8jJjrvgBLq1AQ0RbYU52"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2yDodJUwXfdHzg4crwslUp"
            },
            "href": "https://api.spotify.com/v1/artists/2yDodJUwXfdHzg4crwslUp",
            "id": "2yDodJUwXfdHzg4crwslUp",
            "name": "Allah-Las",
            "type": "artist",
            "uri": "spotify:artist:2yDodJUwXfdHzg4crwslUp"
          }
        ],
        "available_markets": [
          "AR",
          "AU",
          "BO",
          "BR",
          "CA",
          "CL",
          "CO",
          "CR",
          "DO",
          "EC",
          "GT",
          "HK",
          "HN",
          "ID",
          "JP",
          "MX",
          "MY",
          "NI",
          "NZ",
          "PA",
          "PE",
          "PH",
          "PY",
          "SG",
          "SV",
          "TH",
          "TW",
          "US",
          "UY",
          "VN"
        ],
        "disc_number": 1,
        "duration_ms": 215973,
        "explicit": false,
        "external_ids": {
          "isrc": "USD8D1418004"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0bRDf9ZjYOmIkFqymUfoPE"
        },
        "href": "https://api.spotify.com/v1/tracks/0bRDf9ZjYOmIkFqymUfoPE",
        "id": "0bRDf9ZjYOmIkFqymUfoPE",
        "is_local": false,
        "name": "Ferus Gallery",
        "popularity": 46,
        "preview_url": "https://p.scdn.co/mp3-preview/700a125a80789bd92954f3d31496a32e5ce97221?cid=d4557495633b429a85292698a89e5978",
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:0bRDf9ZjYOmIkFqymUfoPE"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6kXp61QMZFPcKMcRPqoiVj"
              },
              "href": "https://api.spotify.com/v1/artists/6kXp61QMZFPcKMcRPqoiVj",
              "id": "6kXp61QMZFPcKMcRPqoiVj",
              "name": "Gin Blossoms",
              "type": "artist",
              "uri": "spotify:artist:6kXp61QMZFPcKMcRPqoiVj"
            }
          ],
          "available_markets": [
            "CA",
            "MX",
            "US"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/484pzryEPqn6KSMLtP2c4f"
          },
          "href": "https://api.spotify.com/v1/albums/484pzryEPqn6KSMLtP2c4f",
          "id": "484pzryEPqn6KSMLtP2c4f",
          "images": [
            {
              "height": 637,
              "url": "https://i.scdn.co/image/7beb0fa800b8b29f203f3c4d8f08004c0d1771f0",
              "width": 640
            },
            {
              "height": 299,
              "url": "https://i.scdn.co/image/7a6ab98ecb382382e8e85ff5d3bb7b14de4bdad8",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/cc15c74eeb542eee89481da19619800e8c80bbae",
              "width": 64
            }
          ],
          "name": "New Miserable Experience",
          "release_date": "1992-01-01",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:484pzryEPqn6KSMLtP2c4f"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6kXp61QMZFPcKMcRPqoiVj"
            },
            "href": "https://api.spotify.com/v1/artists/6kXp61QMZFPcKMcRPqoiVj",
            "id": "6kXp61QMZFPcKMcRPqoiVj",
            "name": "Gin Blossoms",
            "type": "artist",
            "uri": "spotify:artist:6kXp61QMZFPcKMcRPqoiVj"
          }
        ],
        "available_markets": [
          "CA",
          "MX",
          "US"
        ],
        "disc_number": 1,
        "duration_ms": 233400,
        "explicit": false,
        "external_ids": {
          "isrc": "USAM19201252"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5WmDRnuGYo31xrWNDcYaps"
        },
        "href": "https://api.spotify.com/v1/tracks/5WmDRnuGYo31xrWNDcYaps",
        "id": "5WmDRnuGYo31xrWNDcYaps",
        "is_local": false,
        "name": "Found Out About You",
        "popularity": 53,
        "preview_url": "https://p.scdn.co/mp3-preview/0c5306ac8a2e76b0124b44c6de4326f2144d6ada?cid=d4557495633b429a85292698a89e5978",
        "track_number": 8,
        "type": "track",
        "uri": "spotify:track:5WmDRnuGYo31xrWNDcYaps"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4ZWvN9FEfdTea1SEHjpTNi"
              },
              "href": "https://api.spotify.com/v1/artists/4ZWvN9FEfdTea1SEHjpTNi",
              "id": "4ZWvN9FEfdTea1SEHjpTNi",
              "name": "Pinback",
              "type": "artist",
              "uri": "spotify:artist:4ZWvN9FEfdTea1SEHjpTNi"
            }
          ],
          "available_markets": [
            "AE",
            "AR",
            "AU",
            "BH",
            "BO",
            "BR",
            "CA",
            "CL",
            "CO",
            "CR",
            "DO",
            "DZ",
            "EC",
            "EG",
            "GT",
            "HK",
            "HN",
            "ID",
            "IL",
            "IN",
            "JO",
            "JP",
            "KW",
            "LB",
            "MA",
            "MX",
            "MY",
            "NI",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PS",
            "PY",
            "QA",
            "SA",
            "SG",
            "SV",
            "TH",
            "TN",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0q9dgKvfV3n7JE84cGHtSh"
          },
          "href": "https://api.spotify.com/v1/albums/0q9dgKvfV3n7JE84cGHtSh",
          "id": "0q9dgKvfV3n7JE84cGHtSh",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273da1937eed7d4f3e1342d7351",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02da1937eed7d4f3e1342d7351",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851da1937eed7d4f3e1342d7351",
              "width": 64
            }
          ],
          "name": "Pinback",
          "release_date": "1999",
          "release_date_precision": "year",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:0q9dgKvfV3n7JE84cGHtSh"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4ZWvN9FEfdTea1SEHjpTNi"
            },
            "href": "https://api.spotify.com/v1/artists/4ZWvN9FEfdTea1SEHjpTNi",
            "id": "4ZWvN9FEfdTea1SEHjpTNi",
            "name": "Pinback",
            "type": "artist",
            "uri": "spotify:artist:4ZWvN9FEfdTea1SEHjpTNi"
          }
        ],
        "available_markets": [
          "AE",
          "AR",
          "AU",
          "BH",
          "BO",
          "BR",
          "CA",
          "CL",
          "CO",
          "CR",
          "DO",
          "DZ",
          "EC",
          "EG",
          "GT",
          "HK",
          "HN",
          "ID",
          "IL",
          "IN",
          "JO",
          "JP",
          "KW",
          "LB",
          "MA",
          "MX",
          "MY",
          "NI",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PS",
          "PY",
          "QA",
          "SA",
          "SG",
          "SV",
          "TH",
          "TN",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 270866,
        "explicit": false,
        "external_ids": {
          "isrc": "US39Z0400701"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1f3DJ5UyYzNMlqUbqWhcpX"
        },
        "href": "https://api.spotify.com/v1/tracks/1f3DJ5UyYzNMlqUbqWhcpX",
        "id": "1f3DJ5UyYzNMlqUbqWhcpX",
        "is_local": false,
        "name": "Tripoli",
        "popularity": 41,
        "preview_url": "https://p.scdn.co/mp3-preview/c8f5998462e4992d8e63290bbcd92f850113136e?cid=d4557495633b429a85292698a89e5978",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:1f3DJ5UyYzNMlqUbqWhcpX"
      },
      {
        "album": {
          "album_type": "SINGLE",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/7dZHl3ZmH21XpCwvcMlnml"
              },
              "href": "https://api.spotify.com/v1/artists/7dZHl3ZmH21XpCwvcMlnml",
              "id": "7dZHl3ZmH21XpCwvcMlnml",
              "name": "Every Little Thing",
              "type": "artist",
              "uri": "spotify:artist:7dZHl3ZmH21XpCwvcMlnml"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4o2noMYDojlnt3GgCCdL6o"
          },
          "href": "https://api.spotify.com/v1/albums/4o2noMYDojlnt3GgCCdL6o",
          "id": "4o2noMYDojlnt3GgCCdL6o",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27367df884b22eef988cdafd247",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0267df884b22eef988cdafd247",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485167df884b22eef988cdafd247",
              "width": 64
            }
          ],
          "name": "まいにち。",
          "release_date": "2016-09-21",
          "release_date_precision": "day",
          "total_tracks": 4,
          "type": "album",
          "uri": "spotify:album:4o2noMYDojlnt3GgCCdL6o"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7dZHl3ZmH21XpCwvcMlnml"
            },
            "href": "https://api.spotify.com/v1/artists/7dZHl3ZmH21XpCwvcMlnml",
            "id": "7dZHl3ZmH21XpCwvcMlnml",
            "name": "Every Little Thing",
            "type": "artist",
            "uri": "spotify:artist:7dZHl3ZmH21XpCwvcMlnml"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 320840,
        "explicit": false,
        "external_ids": {
          "isrc": "JPB601601863"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0gNwgVOL0CLgvKtuzAJTwF"
        },
        "href": "https://api.spotify.com/v1/tracks/0gNwgVOL0CLgvKtuzAJTwF",
        "id": "0gNwgVOL0CLgvKtuzAJTwF",
        "is_local": false,
        "name": "まいにち。",
        "popularity": 31,
        "preview_url": "https://p.scdn.co/mp3-preview/a50b46e358493ccdd57ce97df9ed41394ba50592?cid=d4557495633b429a85292698a89e5978",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:0gNwgVOL0CLgvKtuzAJTwF"
      },
      {
        "album": {
          "album_type": "SINGLE",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4kwxTgCKMipBKhSnEstNKj"
              },
              "href": "https://api.spotify.com/v1/artists/4kwxTgCKMipBKhSnEstNKj",
              "id": "4kwxTgCKMipBKhSnEstNKj",
              "name": "Animal Collective",
              "type": "artist",
              "uri": "spotify:artist:4kwxTgCKMipBKhSnEstNKj"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3oswF3XxY3LKsoLhMGuJ7c"
          },
          "href": "https://api.spotify.com/v1/albums/3oswF3XxY3LKsoLhMGuJ7c",
          "id": "3oswF3XxY3LKsoLhMGuJ7c",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273baaecf85382f2c6795f92b96",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02baaecf85382f2c6795f92b96",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851baaecf85382f2c6795f92b96",
              "width": 64
            }
          ],
          "name": "Meeting Of The Waters",
          "release_date": "2017-05-05",
          "release_date_precision": "day",
          "total_tracks": 4,
          "type": "album",
          "uri": "spotify:album:3oswF3XxY3LKsoLhMGuJ7c"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4kwxTgCKMipBKhSnEstNKj"
            },
            "href": "https://api.spotify.com/v1/artists/4kwxTgCKMipBKhSnEstNKj",
            "id": "4kwxTgCKMipBKhSnEstNKj",
            "name": "Animal Collective",
            "type": "artist",
            "uri": "spotify:artist:4kwxTgCKMipBKhSnEstNKj"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 325155,
        "explicit": false,
        "external_ids": {
          "isrc": "GBCEL1600556"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1iJdIZU5Ffgixa92wrcZZC"
        },
        "href": "https://api.spotify.com/v1/tracks/1iJdIZU5Ffgixa92wrcZZC",
        "id": "1iJdIZU5Ffgixa92wrcZZC",
        "is_local": false,
        "name": "Man Of Oil",
        "popularity": 55,
        "preview_url": "https://p.scdn.co/mp3-preview/e83af9c8a0b5009cc4c7b182c66feabba457b665?cid=d4557495633b429a85292698a89e5978",
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:1iJdIZU5Ffgixa92wrcZZC"
      },
      {
        "album": {
          "album_type": "SINGLE",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb"
              },
              "href": "https://api.spotify.com/v1/artists/5INjqkS1o8h1imAzPqGZBb",
              "id": "5INjqkS1o8h1imAzPqGZBb",
              "name": "Tame Impala",
              "type": "artist",
              "uri": "spotify:artist:5INjqkS1o8h1imAzPqGZBb"
            }
          ],
          "available_markets": [],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0AA8MiQS9djcrznNT83ViG"
          },
          "href": "https://api.spotify.com/v1/albums/0AA8MiQS9djcrznNT83ViG",
          "id": "0AA8MiQS9djcrznNT83ViG",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/c1cf3c1d0cf12fc9a6f313b56b8aa6cb56a07088",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/c01b6fb9471686b9191b980d71cc1d5e8ad13138",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/25b580d078e4d9c62ce0b26b3eb6eac1878d1305",
              "width": 64
            }
          ],
          "name": "Posthumous Forgiveness",
          "release_date": "2019-12-03",
          "release_date_precision": "day",
          "total_tracks": 1,
          "type": "album",
          "uri": "spotify:album:0AA8MiQS9djcrznNT83ViG"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb"
            },
            "href": "https://api.spotify.com/v1/artists/5INjqkS1o8h1imAzPqGZBb",
            "id": "5INjqkS1o8h1imAzPqGZBb",
            "name": "Tame Impala",
            "type": "artist",
            "uri": "spotify:artist:5INjqkS1o8h1imAzPqGZBb"
          }
        ],
        "available_markets": [],
        "disc_number": 1,
        "duration_ms": 366066,
        "explicit": false,
        "external_ids": {
          "isrc": "AUUM71900928"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3rQ0ZaLrkLv8HhAAKSbAC0"
        },
        "href": "https://api.spotify.com/v1/tracks/3rQ0ZaLrkLv8HhAAKSbAC0",
        "id": "3rQ0ZaLrkLv8HhAAKSbAC0",
        "is_local": false,
        "name": "Posthumous Forgiveness",
        "popularity": 69,
        "preview_url": null,
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:3rQ0ZaLrkLv8HhAAKSbAC0"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
              },
              "href": "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
              "id": "2YZyLoL8N0Wb9xBt1NhZWg",
              "name": "Kendrick Lamar",
              "type": "artist",
              "uri": "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4eLPsYPBmXABThSJ821sqY"
          },
          "href": "https://api.spotify.com/v1/albums/4eLPsYPBmXABThSJ821sqY",
          "id": "4eLPsYPBmXABThSJ821sqY",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/4490d819e1436c1ea450ef9e125726c1959ff4ee",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/7feaed3c5c6c451326aafad31ea922fb3171f0df",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ae1f239b41e9604a66eb900834c6887cd2f62ff1",
              "width": 64
            }
          ],
          "name": "DAMN.",
          "release_date": "2017-04-14",
          "release_date_precision": "day",
          "total_tracks": 14,
          "type": "album",
          "uri": "spotify:album:4eLPsYPBmXABThSJ821sqY"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg"
            },
            "href": "https://api.spotify.com/v1/artists/2YZyLoL8N0Wb9xBt1NhZWg",
            "id": "2YZyLoL8N0Wb9xBt1NhZWg",
            "name": "Kendrick Lamar",
            "type": "artist",
            "uri": "spotify:artist:2YZyLoL8N0Wb9xBt1NhZWg"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 185946,
        "explicit": true,
        "external_ids": {
          "isrc": "USUM71703079"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6HZILIRieu8S0iqY8kIKhj"
        },
        "href": "https://api.spotify.com/v1/tracks/6HZILIRieu8S0iqY8kIKhj",
        "id": "6HZILIRieu8S0iqY8kIKhj",
        "is_local": false,
        "name": "DNA.",
        "popularity": 78,
        "preview_url": "https://p.scdn.co/mp3-preview/aec48a4071604915de3bf1556393279ef3435b52?cid=d4557495633b429a85292698a89e5978",
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:6HZILIRieu8S0iqY8kIKhj"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1MUKCI5HmTVIucSwcaH6sV"
              },
              "href": "https://api.spotify.com/v1/artists/1MUKCI5HmTVIucSwcaH6sV",
              "id": "1MUKCI5HmTVIucSwcaH6sV",
              "name": "Trust Fund",
              "type": "artist",
              "uri": "spotify:artist:1MUKCI5HmTVIucSwcaH6sV"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/7H29XuUW4SRbF1M8dhgpe1"
          },
          "href": "https://api.spotify.com/v1/albums/7H29XuUW4SRbF1M8dhgpe1",
          "id": "7H29XuUW4SRbF1M8dhgpe1",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273212efa3ba51f24facacd350a",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02212efa3ba51f24facacd350a",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851212efa3ba51f24facacd350a",
              "width": 64
            }
          ],
          "name": "Bringing the backline",
          "release_date": "2018-07-02",
          "release_date_precision": "day",
          "total_tracks": 10,
          "type": "album",
          "uri": "spotify:album:7H29XuUW4SRbF1M8dhgpe1"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1MUKCI5HmTVIucSwcaH6sV"
            },
            "href": "https://api.spotify.com/v1/artists/1MUKCI5HmTVIucSwcaH6sV",
            "id": "1MUKCI5HmTVIucSwcaH6sV",
            "name": "Trust Fund",
            "type": "artist",
            "uri": "spotify:artist:1MUKCI5HmTVIucSwcaH6sV"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 205648,
        "explicit": false,
        "external_ids": {
          "isrc": "SEYOK1836528"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7dgsqNzRVGBj2nXT0ApJBk"
        },
        "href": "https://api.spotify.com/v1/tracks/7dgsqNzRVGBj2nXT0ApJBk",
        "id": "7dgsqNzRVGBj2nXT0ApJBk",
        "is_local": false,
        "name": "a song",
        "popularity": 32,
        "preview_url": "https://p.scdn.co/mp3-preview/e7fc0e7e0c224a5d96d13effb3a02b930b1a1574?cid=d4557495633b429a85292698a89e5978",
        "track_number": 5,
        "type": "track",
        "uri": "spotify:track:7dgsqNzRVGBj2nXT0ApJBk"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/63MQldklfxkjYDoUE4Tppz"
              },
              "href": "https://api.spotify.com/v1/artists/63MQldklfxkjYDoUE4Tppz",
              "id": "63MQldklfxkjYDoUE4Tppz",
              "name": "M83",
              "type": "artist",
              "uri": "spotify:artist:63MQldklfxkjYDoUE4Tppz"
            }
          ],
          "available_markets": [
            "CA",
            "US"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/6R0ynY7RF20ofs9GJR5TXR"
          },
          "href": "https://api.spotify.com/v1/albums/6R0ynY7RF20ofs9GJR5TXR",
          "id": "6R0ynY7RF20ofs9GJR5TXR",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27389c5c957f376e8c87ed23dcc",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0289c5c957f376e8c87ed23dcc",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485189c5c957f376e8c87ed23dcc",
              "width": 64
            }
          ],
          "name": "Hurry Up, We're Dreaming",
          "release_date": "2011",
          "release_date_precision": "year",
          "total_tracks": 22,
          "type": "album",
          "uri": "spotify:album:6R0ynY7RF20ofs9GJR5TXR"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/63MQldklfxkjYDoUE4Tppz"
            },
            "href": "https://api.spotify.com/v1/artists/63MQldklfxkjYDoUE4Tppz",
            "id": "63MQldklfxkjYDoUE4Tppz",
            "name": "M83",
            "type": "artist",
            "uri": "spotify:artist:63MQldklfxkjYDoUE4Tppz"
          }
        ],
        "available_markets": [
          "CA",
          "US"
        ],
        "disc_number": 2,
        "duration_ms": 247026,
        "explicit": false,
        "external_ids": {
          "isrc": "GB55H1100022"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2QVmiA93GVhWNTWQctyY1K"
        },
        "href": "https://api.spotify.com/v1/tracks/2QVmiA93GVhWNTWQctyY1K",
        "id": "2QVmiA93GVhWNTWQctyY1K",
        "is_local": false,
        "name": "Outro",
        "popularity": 57,
        "preview_url": "https://p.scdn.co/mp3-preview/33d31646128bc087c64f64f57a348323db5d6a41?cid=d4557495633b429a85292698a89e5978",
        "track_number": 11,
        "type": "track",
        "uri": "spotify:track:2QVmiA93GVhWNTWQctyY1K"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6ft7JnxMyZhp7N52qzHymY"
              },
              "href": "https://api.spotify.com/v1/artists/6ft7JnxMyZhp7N52qzHymY",
              "id": "6ft7JnxMyZhp7N52qzHymY",
              "name": "Vansire",
              "type": "artist",
              "uri": "spotify:artist:6ft7JnxMyZhp7N52qzHymY"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3Zqe5icElI6gNEM9v3UpXN"
          },
          "href": "https://api.spotify.com/v1/albums/3Zqe5icElI6gNEM9v3UpXN",
          "id": "3Zqe5icElI6gNEM9v3UpXN",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273c556c8613499c8e465d3ba3c",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02c556c8613499c8e465d3ba3c",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851c556c8613499c8e465d3ba3c",
              "width": 64
            }
          ],
          "name": "Angel Youth",
          "release_date": "2018-04-26",
          "release_date_precision": "day",
          "total_tracks": 17,
          "type": "album",
          "uri": "spotify:album:3Zqe5icElI6gNEM9v3UpXN"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6ft7JnxMyZhp7N52qzHymY"
            },
            "href": "https://api.spotify.com/v1/artists/6ft7JnxMyZhp7N52qzHymY",
            "id": "6ft7JnxMyZhp7N52qzHymY",
            "name": "Vansire",
            "type": "artist",
            "uri": "spotify:artist:6ft7JnxMyZhp7N52qzHymY"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0oNT7doR0CV9mAXYDSk8Tx"
            },
            "href": "https://api.spotify.com/v1/artists/0oNT7doR0CV9mAXYDSk8Tx",
            "id": "0oNT7doR0CV9mAXYDSk8Tx",
            "name": "FLOOR CRY",
            "type": "artist",
            "uri": "spotify:artist:0oNT7doR0CV9mAXYDSk8Tx"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 181677,
        "explicit": false,
        "external_ids": {
          "isrc": "QZAPG1809214"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7nEZZ1mWK7h98x8ENbQuqJ"
        },
        "href": "https://api.spotify.com/v1/tracks/7nEZZ1mWK7h98x8ENbQuqJ",
        "id": "7nEZZ1mWK7h98x8ENbQuqJ",
        "is_local": false,
        "name": "Nice to See You",
        "popularity": 57,
        "preview_url": "https://p.scdn.co/mp3-preview/2c923679b08122fe91990bf621ed4fc941973483?cid=d4557495633b429a85292698a89e5978",
        "track_number": 9,
        "type": "track",
        "uri": "spotify:track:7nEZZ1mWK7h98x8ENbQuqJ"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
              },
              "href": "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
              "id": "3AA28KZvwAUcZuOKwyblJQ",
              "name": "Gorillaz",
              "type": "artist",
              "uri": "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0NvirtaDCaZU5PAW1O5FDE"
          },
          "href": "https://api.spotify.com/v1/albums/0NvirtaDCaZU5PAW1O5FDE",
          "id": "0NvirtaDCaZU5PAW1O5FDE",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273a5952c0e2e649f588603b743",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02a5952c0e2e649f588603b743",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851a5952c0e2e649f588603b743",
              "width": 64
            }
          ],
          "name": "Humanz (Deluxe)",
          "release_date": "2017-04-28",
          "release_date_precision": "day",
          "total_tracks": 26,
          "type": "album",
          "uri": "spotify:album:0NvirtaDCaZU5PAW1O5FDE"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ"
            },
            "href": "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
            "id": "3AA28KZvwAUcZuOKwyblJQ",
            "name": "Gorillaz",
            "type": "artist",
            "uri": "spotify:artist:3AA28KZvwAUcZuOKwyblJQ"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/62DmErcU7dqZbJaDqwsqzR"
            },
            "href": "https://api.spotify.com/v1/artists/62DmErcU7dqZbJaDqwsqzR",
            "id": "62DmErcU7dqZbJaDqwsqzR",
            "name": "Popcaan",
            "type": "artist",
            "uri": "spotify:artist:62DmErcU7dqZbJaDqwsqzR"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 181906,
        "explicit": false,
        "external_ids": {
          "isrc": "GBAYE1700163"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7l9CE3wmEGOUYw1j4ETjnL"
        },
        "href": "https://api.spotify.com/v1/tracks/7l9CE3wmEGOUYw1j4ETjnL",
        "id": "7l9CE3wmEGOUYw1j4ETjnL",
        "is_local": false,
        "name": "Saturnz Barz (feat. Popcaan)",
        "popularity": 65,
        "preview_url": "https://p.scdn.co/mp3-preview/458af51828c1550e4928d6bce492e35079e50fd8?cid=d4557495633b429a85292698a89e5978",
        "track_number": 4,
        "type": "track",
        "uri": "spotify:track:7l9CE3wmEGOUYw1j4ETjnL"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0L8ExT028jH3ddEcZwqJJ5"
              },
              "href": "https://api.spotify.com/v1/artists/0L8ExT028jH3ddEcZwqJJ5",
              "id": "0L8ExT028jH3ddEcZwqJJ5",
              "name": "Red Hot Chili Peppers",
              "type": "artist",
              "uri": "spotify:artist:0L8ExT028jH3ddEcZwqJJ5"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0fLhefnjlIV3pGNF9Wo8CD"
          },
          "href": "https://api.spotify.com/v1/albums/0fLhefnjlIV3pGNF9Wo8CD",
          "id": "0fLhefnjlIV3pGNF9Wo8CD",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273a9249ebb15ca7a5b75f16a90",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02a9249ebb15ca7a5b75f16a90",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851a9249ebb15ca7a5b75f16a90",
              "width": 64
            }
          ],
          "name": "Californication",
          "release_date": "1999-06-08",
          "release_date_precision": "day",
          "total_tracks": 15,
          "type": "album",
          "uri": "spotify:album:0fLhefnjlIV3pGNF9Wo8CD"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0L8ExT028jH3ddEcZwqJJ5"
            },
            "href": "https://api.spotify.com/v1/artists/0L8ExT028jH3ddEcZwqJJ5",
            "id": "0L8ExT028jH3ddEcZwqJJ5",
            "name": "Red Hot Chili Peppers",
            "type": "artist",
            "uri": "spotify:artist:0L8ExT028jH3ddEcZwqJJ5"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 204960,
        "explicit": false,
        "external_ids": {
          "isrc": "USWB19900700"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7Gpr3kKk4BMgItz6UbI73q"
        },
        "href": "https://api.spotify.com/v1/tracks/7Gpr3kKk4BMgItz6UbI73q",
        "id": "7Gpr3kKk4BMgItz6UbI73q",
        "is_local": false,
        "name": "Road Trippin'",
        "popularity": 64,
        "preview_url": "https://p.scdn.co/mp3-preview/044c9f913db571f0ee2a146cb8814de9f8da6896?cid=d4557495633b429a85292698a89e5978",
        "track_number": 15,
        "type": "track",
        "uri": "spotify:track:7Gpr3kKk4BMgItz6UbI73q"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4V8LLVI7PbaPR0K2TGSxFF"
              },
              "href": "https://api.spotify.com/v1/artists/4V8LLVI7PbaPR0K2TGSxFF",
              "id": "4V8LLVI7PbaPR0K2TGSxFF",
              "name": "Tyler, The Creator",
              "type": "artist",
              "uri": "spotify:artist:4V8LLVI7PbaPR0K2TGSxFF"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/5zi7WsKlIiUXv09tbGLKsE"
          },
          "href": "https://api.spotify.com/v1/albums/5zi7WsKlIiUXv09tbGLKsE",
          "id": "5zi7WsKlIiUXv09tbGLKsE",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b2737005885df706891a3c182a57",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e027005885df706891a3c182a57",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d000048517005885df706891a3c182a57",
              "width": 64
            }
          ],
          "name": "IGOR",
          "release_date": "2019-05-17",
          "release_date_precision": "day",
          "total_tracks": 12,
          "type": "album",
          "uri": "spotify:album:5zi7WsKlIiUXv09tbGLKsE"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4V8LLVI7PbaPR0K2TGSxFF"
            },
            "href": "https://api.spotify.com/v1/artists/4V8LLVI7PbaPR0K2TGSxFF",
            "id": "4V8LLVI7PbaPR0K2TGSxFF",
            "name": "Tyler, The Creator",
            "type": "artist",
            "uri": "spotify:artist:4V8LLVI7PbaPR0K2TGSxFF"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 212013,
        "explicit": true,
        "external_ids": {
          "isrc": "USQX91901112"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4f8Mh5wuWHOsfXtzjrJB3t"
        },
        "href": "https://api.spotify.com/v1/tracks/4f8Mh5wuWHOsfXtzjrJB3t",
        "id": "4f8Mh5wuWHOsfXtzjrJB3t",
        "is_local": false,
        "name": "I THINK",
        "popularity": 75,
        "preview_url": "https://p.scdn.co/mp3-preview/02728662c29717a7607f50a038dcf43fecbaa891?cid=d4557495633b429a85292698a89e5978",
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:4f8Mh5wuWHOsfXtzjrJB3t"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0av074qUwLn5eyzwqoq3xh"
              },
              "href": "https://api.spotify.com/v1/artists/0av074qUwLn5eyzwqoq3xh",
              "id": "0av074qUwLn5eyzwqoq3xh",
              "name": "People Under The Stairs",
              "type": "artist",
              "uri": "spotify:artist:0av074qUwLn5eyzwqoq3xh"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/2ood8bH4VbEAaxPpTFaSCy"
          },
          "href": "https://api.spotify.com/v1/albums/2ood8bH4VbEAaxPpTFaSCy",
          "id": "2ood8bH4VbEAaxPpTFaSCy",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27392a8979e54cf7ff02947a1c7",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0292a8979e54cf7ff02947a1c7",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485192a8979e54cf7ff02947a1c7",
              "width": 64
            }
          ],
          "name": "O.S.T.",
          "release_date": "2003-06-02",
          "release_date_precision": "day",
          "total_tracks": 20,
          "type": "album",
          "uri": "spotify:album:2ood8bH4VbEAaxPpTFaSCy"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0av074qUwLn5eyzwqoq3xh"
            },
            "href": "https://api.spotify.com/v1/artists/0av074qUwLn5eyzwqoq3xh",
            "id": "0av074qUwLn5eyzwqoq3xh",
            "name": "People Under The Stairs",
            "type": "artist",
            "uri": "spotify:artist:0av074qUwLn5eyzwqoq3xh"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 266973,
        "explicit": false,
        "external_ids": {
          "isrc": "USOM80310516"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/6Gkdq550XBZoACE78rYD6g"
        },
        "href": "https://api.spotify.com/v1/tracks/6Gkdq550XBZoACE78rYD6g",
        "id": "6Gkdq550XBZoACE78rYD6g",
        "is_local": false,
        "name": "The L.A. Song",
        "popularity": 44,
        "preview_url": "https://p.scdn.co/mp3-preview/e30ee51a3a72023d4d34046691e17a3b6a38c245?cid=d4557495633b429a85292698a89e5978",
        "track_number": 16,
        "type": "track",
        "uri": "spotify:track:6Gkdq550XBZoACE78rYD6g"
      },
      {
        "album": {
          "album_type": "SINGLE",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/5oOhM2DFWab8XhSdQiITry"
              },
              "href": "https://api.spotify.com/v1/artists/5oOhM2DFWab8XhSdQiITry",
              "id": "5oOhM2DFWab8XhSdQiITry",
              "name": "Tycho",
              "type": "artist",
              "uri": "spotify:artist:5oOhM2DFWab8XhSdQiITry"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0DoWlk1NzQp1VWVFtZOb8Y"
              },
              "href": "https://api.spotify.com/v1/artists/0DoWlk1NzQp1VWVFtZOb8Y",
              "id": "0DoWlk1NzQp1VWVFtZOb8Y",
              "name": "Saint Sinner",
              "type": "artist",
              "uri": "spotify:artist:0DoWlk1NzQp1VWVFtZOb8Y"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4AGwPDdh1y8hochNzHy5HC"
              },
              "href": "https://api.spotify.com/v1/artists/4AGwPDdh1y8hochNzHy5HC",
              "id": "4AGwPDdh1y8hochNzHy5HC",
              "name": "RAC",
              "type": "artist",
              "uri": "spotify:artist:4AGwPDdh1y8hochNzHy5HC"
            }
          ],
          "available_markets": [
            "US"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/3tH419WXHhI226Hwz7JB5e"
          },
          "href": "https://api.spotify.com/v1/albums/3tH419WXHhI226Hwz7JB5e",
          "id": "3tH419WXHhI226Hwz7JB5e",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b27381f41b46089dd0dcf540c066",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e0281f41b46089dd0dcf540c066",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d0000485181f41b46089dd0dcf540c066",
              "width": 64
            }
          ],
          "name": "Pink & Blue (RAC Mix)",
          "release_date": "2019-08-20",
          "release_date_precision": "day",
          "total_tracks": 3,
          "type": "album",
          "uri": "spotify:album:3tH419WXHhI226Hwz7JB5e"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5oOhM2DFWab8XhSdQiITry"
            },
            "href": "https://api.spotify.com/v1/artists/5oOhM2DFWab8XhSdQiITry",
            "id": "5oOhM2DFWab8XhSdQiITry",
            "name": "Tycho",
            "type": "artist",
            "uri": "spotify:artist:5oOhM2DFWab8XhSdQiITry"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0DoWlk1NzQp1VWVFtZOb8Y"
            },
            "href": "https://api.spotify.com/v1/artists/0DoWlk1NzQp1VWVFtZOb8Y",
            "id": "0DoWlk1NzQp1VWVFtZOb8Y",
            "name": "Saint Sinner",
            "type": "artist",
            "uri": "spotify:artist:0DoWlk1NzQp1VWVFtZOb8Y"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4AGwPDdh1y8hochNzHy5HC"
            },
            "href": "https://api.spotify.com/v1/artists/4AGwPDdh1y8hochNzHy5HC",
            "id": "4AGwPDdh1y8hochNzHy5HC",
            "name": "RAC",
            "type": "artist",
            "uri": "spotify:artist:4AGwPDdh1y8hochNzHy5HC"
          }
        ],
        "available_markets": [
          "US"
        ],
        "disc_number": 1,
        "duration_ms": 217271,
        "explicit": false,
        "external_ids": {
          "isrc": "GBCFB1900197"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/3rxYhGVE6GHQyAy4CdGfq1"
        },
        "href": "https://api.spotify.com/v1/tracks/3rxYhGVE6GHQyAy4CdGfq1",
        "id": "3rxYhGVE6GHQyAy4CdGfq1",
        "is_local": false,
        "name": "Pink & Blue (RAC Mix)",
        "popularity": 52,
        "preview_url": "https://p.scdn.co/mp3-preview/9c7475c35aee340eb0da537c8706cfd62bdf639e?cid=d4557495633b429a85292698a89e5978",
        "track_number": 1,
        "type": "track",
        "uri": "spotify:track:3rxYhGVE6GHQyAy4CdGfq1"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/7oPftvlwr6VrsViSDV7fJY"
              },
              "href": "https://api.spotify.com/v1/artists/7oPftvlwr6VrsViSDV7fJY",
              "id": "7oPftvlwr6VrsViSDV7fJY",
              "name": "Green Day",
              "type": "artist",
              "uri": "spotify:artist:7oPftvlwr6VrsViSDV7fJY"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4uG8q3GPuWHQlRbswMIRS6"
          },
          "href": "https://api.spotify.com/v1/albums/4uG8q3GPuWHQlRbswMIRS6",
          "id": "4uG8q3GPuWHQlRbswMIRS6",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273db89b08034de626ebee6823d",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02db89b08034de626ebee6823d",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851db89b08034de626ebee6823d",
              "width": 64
            }
          ],
          "name": "Dookie",
          "release_date": "1994-02-01",
          "release_date_precision": "day",
          "total_tracks": 15,
          "type": "album",
          "uri": "spotify:album:4uG8q3GPuWHQlRbswMIRS6"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7oPftvlwr6VrsViSDV7fJY"
            },
            "href": "https://api.spotify.com/v1/artists/7oPftvlwr6VrsViSDV7fJY",
            "id": "7oPftvlwr6VrsViSDV7fJY",
            "name": "Green Day",
            "type": "artist",
            "uri": "spotify:artist:7oPftvlwr6VrsViSDV7fJY"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 178000,
        "explicit": false,
        "external_ids": {
          "isrc": "USRE19900154"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/1Dr1fXbc2IxaK1Mu8P8Khz"
        },
        "href": "https://api.spotify.com/v1/tracks/1Dr1fXbc2IxaK1Mu8P8Khz",
        "id": "1Dr1fXbc2IxaK1Mu8P8Khz",
        "is_local": false,
        "name": "When I Come Around",
        "popularity": 74,
        "preview_url": "https://p.scdn.co/mp3-preview/d31a72f5f5a6fee7c92a32bed95ee4e13ce16dde?cid=d4557495633b429a85292698a89e5978",
        "track_number": 10,
        "type": "track",
        "uri": "spotify:track:1Dr1fXbc2IxaK1Mu8P8Khz"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3r80OHMkB3PxfE90ddHqiY"
              },
              "href": "https://api.spotify.com/v1/artists/3r80OHMkB3PxfE90ddHqiY",
              "id": "3r80OHMkB3PxfE90ddHqiY",
              "name": "Twilight",
              "type": "artist",
              "uri": "spotify:artist:3r80OHMkB3PxfE90ddHqiY"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4LW4pyiq19tH6pE7lnKPEX"
          },
          "href": "https://api.spotify.com/v1/albums/4LW4pyiq19tH6pE7lnKPEX",
          "id": "4LW4pyiq19tH6pE7lnKPEX",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273a1275377bec79bac4a961c48",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02a1275377bec79bac4a961c48",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851a1275377bec79bac4a961c48",
              "width": 64
            }
          ],
          "name": "Still Loving You",
          "release_date": "2010-05-11",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:4LW4pyiq19tH6pE7lnKPEX"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3r80OHMkB3PxfE90ddHqiY"
            },
            "href": "https://api.spotify.com/v1/artists/3r80OHMkB3PxfE90ddHqiY",
            "id": "3r80OHMkB3PxfE90ddHqiY",
            "name": "Twilight",
            "type": "artist",
            "uri": "spotify:artist:3r80OHMkB3PxfE90ddHqiY"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 174000,
        "explicit": false,
        "external_ids": {
          "isrc": "USLNH1005903"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/2MmzFvpyAXQSm9mqeUU3Hd"
        },
        "href": "https://api.spotify.com/v1/tracks/2MmzFvpyAXQSm9mqeUU3Hd",
        "id": "2MmzFvpyAXQSm9mqeUU3Hd",
        "is_local": false,
        "name": "Give Love a Try",
        "popularity": 33,
        "preview_url": "https://p.scdn.co/mp3-preview/16c6dd78f6e65b9331bb7821428cefb3d2ad3aaa?cid=d4557495633b429a85292698a89e5978",
        "track_number": 3,
        "type": "track",
        "uri": "spotify:track:2MmzFvpyAXQSm9mqeUU3Hd"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6y80I9YZi4DOpbaSUlL725"
              },
              "href": "https://api.spotify.com/v1/artists/6y80I9YZi4DOpbaSUlL725",
              "id": "6y80I9YZi4DOpbaSUlL725",
              "name": "Shlohmo",
              "type": "artist",
              "uri": "spotify:artist:6y80I9YZi4DOpbaSUlL725"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4vjDYT5nXgLn12luv3mGjZ"
          },
          "href": "https://api.spotify.com/v1/albums/4vjDYT5nXgLn12luv3mGjZ",
          "id": "4vjDYT5nXgLn12luv3mGjZ",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273118749ff2dab4a907cf93e9d",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02118749ff2dab4a907cf93e9d",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851118749ff2dab4a907cf93e9d",
              "width": 64
            }
          ],
          "name": "The End",
          "release_date": "2019-03-22",
          "release_date_precision": "day",
          "total_tracks": 13,
          "type": "album",
          "uri": "spotify:album:4vjDYT5nXgLn12luv3mGjZ"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6y80I9YZi4DOpbaSUlL725"
            },
            "href": "https://api.spotify.com/v1/artists/6y80I9YZi4DOpbaSUlL725",
            "id": "6y80I9YZi4DOpbaSUlL725",
            "name": "Shlohmo",
            "type": "artist",
            "uri": "spotify:artist:6y80I9YZi4DOpbaSUlL725"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 275644,
        "explicit": false,
        "external_ids": {
          "isrc": "QMR6U1800062"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4UTwiKGU3TDnoYvNWMzqhl"
        },
        "href": "https://api.spotify.com/v1/tracks/4UTwiKGU3TDnoYvNWMzqhl",
        "id": "4UTwiKGU3TDnoYvNWMzqhl",
        "is_local": false,
        "name": "The End",
        "popularity": 52,
        "preview_url": "https://p.scdn.co/mp3-preview/03a7c5f2dbae9e50e47e4e4c9677cbd826e8979f?cid=d4557495633b429a85292698a89e5978",
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:4UTwiKGU3TDnoYvNWMzqhl"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/56ZTgzPBDge0OvCGgMO3OY"
              },
              "href": "https://api.spotify.com/v1/artists/56ZTgzPBDge0OvCGgMO3OY",
              "id": "56ZTgzPBDge0OvCGgMO3OY",
              "name": "Beach House",
              "type": "artist",
              "uri": "spotify:artist:56ZTgzPBDge0OvCGgMO3OY"
            }
          ],
          "available_markets": [
            "AE",
            "AR",
            "BH",
            "BO",
            "BR",
            "CA",
            "CL",
            "CO",
            "CR",
            "DO",
            "DZ",
            "EC",
            "EG",
            "GT",
            "HK",
            "HN",
            "ID",
            "IL",
            "IN",
            "JO",
            "JP",
            "KW",
            "LB",
            "MA",
            "MX",
            "MY",
            "NI",
            "OM",
            "PA",
            "PE",
            "PH",
            "PS",
            "PY",
            "QA",
            "SA",
            "SG",
            "SV",
            "TH",
            "TN",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/4qftBBO7pnYlek3mRENIvM"
          },
          "href": "https://api.spotify.com/v1/albums/4qftBBO7pnYlek3mRENIvM",
          "id": "4qftBBO7pnYlek3mRENIvM",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273d08014840a66d6ea85a73115",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02d08014840a66d6ea85a73115",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851d08014840a66d6ea85a73115",
              "width": 64
            }
          ],
          "name": "7",
          "release_date": "2018-05-11",
          "release_date_precision": "day",
          "total_tracks": 11,
          "type": "album",
          "uri": "spotify:album:4qftBBO7pnYlek3mRENIvM"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/56ZTgzPBDge0OvCGgMO3OY"
            },
            "href": "https://api.spotify.com/v1/artists/56ZTgzPBDge0OvCGgMO3OY",
            "id": "56ZTgzPBDge0OvCGgMO3OY",
            "name": "Beach House",
            "type": "artist",
            "uri": "spotify:artist:56ZTgzPBDge0OvCGgMO3OY"
          }
        ],
        "available_markets": [
          "AE",
          "AR",
          "BH",
          "BO",
          "BR",
          "CA",
          "CL",
          "CO",
          "CR",
          "DO",
          "DZ",
          "EC",
          "EG",
          "GT",
          "HK",
          "HN",
          "ID",
          "IL",
          "IN",
          "JO",
          "JP",
          "KW",
          "LB",
          "MA",
          "MX",
          "MY",
          "NI",
          "OM",
          "PA",
          "PE",
          "PH",
          "PS",
          "PY",
          "QA",
          "SA",
          "SG",
          "SV",
          "TH",
          "TN",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 204466,
        "explicit": false,
        "external_ids": {
          "isrc": "USSUB1824002"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/0qmpEzs4SWVw6zqhMyrOvc"
        },
        "href": "https://api.spotify.com/v1/tracks/0qmpEzs4SWVw6zqhMyrOvc",
        "id": "0qmpEzs4SWVw6zqhMyrOvc",
        "is_local": false,
        "name": "Pay No Mind",
        "popularity": 44,
        "preview_url": "https://p.scdn.co/mp3-preview/5a9db187f27b79aa0cb46ccd3e2f1c39db932183?cid=d4557495633b429a85292698a89e5978",
        "track_number": 2,
        "type": "track",
        "uri": "spotify:track:0qmpEzs4SWVw6zqhMyrOvc"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0XTSrpKEUhzQ5aiYswppxh"
              },
              "href": "https://api.spotify.com/v1/artists/0XTSrpKEUhzQ5aiYswppxh",
              "id": "0XTSrpKEUhzQ5aiYswppxh",
              "name": "Hieroglyphics",
              "type": "artist",
              "uri": "spotify:artist:0XTSrpKEUhzQ5aiYswppxh"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/0NzbSqyQ70uJyPRep1Yg6L"
          },
          "href": "https://api.spotify.com/v1/albums/0NzbSqyQ70uJyPRep1Yg6L",
          "id": "0NzbSqyQ70uJyPRep1Yg6L",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273aa2fb750f636a934c22cdec3",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02aa2fb750f636a934c22cdec3",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851aa2fb750f636a934c22cdec3",
              "width": 64
            }
          ],
          "name": "3rd Eye Vision",
          "release_date": "1998-01-01",
          "release_date_precision": "day",
          "total_tracks": 22,
          "type": "album",
          "uri": "spotify:album:0NzbSqyQ70uJyPRep1Yg6L"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0XTSrpKEUhzQ5aiYswppxh"
            },
            "href": "https://api.spotify.com/v1/artists/0XTSrpKEUhzQ5aiYswppxh",
            "id": "0XTSrpKEUhzQ5aiYswppxh",
            "name": "Hieroglyphics",
            "type": "artist",
            "uri": "spotify:artist:0XTSrpKEUhzQ5aiYswppxh"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 271400,
        "explicit": true,
        "external_ids": {
          "isrc": "US28M0410231"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/7FXj7qI1rSovFpvVjleUrE"
        },
        "href": "https://api.spotify.com/v1/tracks/7FXj7qI1rSovFpvVjleUrE",
        "id": "7FXj7qI1rSovFpvVjleUrE",
        "is_local": false,
        "name": "Oakland Blackouts",
        "popularity": 45,
        "preview_url": "https://p.scdn.co/mp3-preview/dbb34ff8d8f2212fe507b390fcfcba5e58b867d7?cid=d4557495633b429a85292698a89e5978",
        "track_number": 11,
        "type": "track",
        "uri": "spotify:track:7FXj7qI1rSovFpvVjleUrE"
      },
      {
        "album": {
          "album_type": "ALBUM",
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3Mo1LckxhZk6jwf3pjamD0"
              },
              "href": "https://api.spotify.com/v1/artists/3Mo1LckxhZk6jwf3pjamD0",
              "id": "3Mo1LckxhZk6jwf3pjamD0",
              "name": "Psychemagik",
              "type": "artist",
              "uri": "spotify:artist:3Mo1LckxhZk6jwf3pjamD0"
            }
          ],
          "available_markets": [
            "AD",
            "AE",
            "AR",
            "AT",
            "AU",
            "BE",
            "BG",
            "BH",
            "BO",
            "BR",
            "CA",
            "CH",
            "CL",
            "CO",
            "CR",
            "CY",
            "CZ",
            "DE",
            "DK",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FR",
            "GB",
            "GR",
            "GT",
            "HK",
            "HN",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JO",
            "JP",
            "KW",
            "LB",
            "LI",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MT",
            "MX",
            "MY",
            "NI",
            "NL",
            "NO",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PH",
            "PL",
            "PS",
            "PT",
            "PY",
            "QA",
            "RO",
            "SA",
            "SE",
            "SG",
            "SK",
            "SV",
            "TH",
            "TN",
            "TR",
            "TW",
            "US",
            "UY",
            "VN",
            "ZA"
          ],
          "external_urls": {
            "spotify": "https://open.spotify.com/album/79SpX17JQa0BR3bOxo0gFI"
          },
          "href": "https://api.spotify.com/v1/albums/79SpX17JQa0BR3bOxo0gFI",
          "id": "79SpX17JQa0BR3bOxo0gFI",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab67616d0000b273257160c9c8b774094b2f9f02",
              "width": 640
            },
            {
              "height": 300,
              "url": "https://i.scdn.co/image/ab67616d00001e02257160c9c8b774094b2f9f02",
              "width": 300
            },
            {
              "height": 64,
              "url": "https://i.scdn.co/image/ab67616d00004851257160c9c8b774094b2f9f02",
              "width": 64
            }
          ],
          "name": "Ritual Chants",
          "release_date": "2017-07-03",
          "release_date_precision": "day",
          "total_tracks": 32,
          "type": "album",
          "uri": "spotify:album:79SpX17JQa0BR3bOxo0gFI"
        },
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3qccez9ByXrGuPDQaJiy6o"
            },
            "href": "https://api.spotify.com/v1/artists/3qccez9ByXrGuPDQaJiy6o",
            "id": "3qccez9ByXrGuPDQaJiy6o",
            "name": "Hitomi Tohyama",
            "type": "artist",
            "uri": "spotify:artist:3qccez9ByXrGuPDQaJiy6o"
          }
        ],
        "available_markets": [
          "AD",
          "AE",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BH",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JO",
          "JP",
          "KW",
          "LB",
          "LI",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PH",
          "PL",
          "PS",
          "PT",
          "PY",
          "QA",
          "RO",
          "SA",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TN",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        "disc_number": 1,
        "duration_ms": 270560,
        "explicit": false,
        "external_ids": {
          "isrc": "BEN581600434"
        },
        "external_urls": {
          "spotify": "https://open.spotify.com/track/5LXQeJX8ZGS7Q5ZZ3vtGF7"
        },
        "href": "https://api.spotify.com/v1/tracks/5LXQeJX8ZGS7Q5ZZ3vtGF7",
        "id": "5LXQeJX8ZGS7Q5ZZ3vtGF7",
        "is_local": false,
        "name": "Wanna Kiss",
        "popularity": 40,
        "preview_url": "https://p.scdn.co/mp3-preview/0d643921cebec00cb9237ac2c60d607af110ba33?cid=d4557495633b429a85292698a89e5978",
        "track_number": 19,
        "type": "track",
        "uri": "spotify:track:5LXQeJX8ZGS7Q5ZZ3vtGF7"
      }
    ],
    "total": 50,
    "limit": 50,
    "offset": 0,
    "previous": null,
    "href": "https://api.spotify.com/v1/me/top/tracks?limit=50&offset=0",
    "next": null
  }
}

/* 
  body: 
    items: Array, (keep)
    total: Number, (keep)
    limit: Number,
    offset: Number,
    previous: Boolean, 
    href: String, (maybe keep)
    next: Boolean

  items[i]: 
    album: Object, 
    artists: Array, 
    available_markets: Array,
    disc_number: Number,
    duration_ms: Number
    explicit: Boolean,
    external_ids: Object,
    external_urls: Object,
    href: String, 
    id: String, 
    is_local: Boolean,
    name: String, 
    popularity: Number, 
    preview_url: String,
    track_number: Number,
    type: String,
    uri: String

  album: Object
    images: Array of Objects
      url: String
  artists: Array of Objects
    name: String
    id: String
    href: String
  href: String (of song)
  id: String (of song)
  name: String (of song)
  popularity: Number (of song)
*/

function cleanTrackData(data) {
  let total = data.body.total;
  let href = data.body.href;
  let newData = {
    total, 
    href,
    items: []
  }
  for(item of data.body.items) {
    let imageurl = "";
    if(item.album.images.length) {
      imageurl = item.album.images[item.album.images.length - 1].url;
    }

    let itemObj = {
      images: imageurl,
      artists: {
        name: item.artists[0].name,
        id: item.artists[0].id,
        href: item.artists[0].href
      },
      href: item.href,
      id: item.id, 
      name: item.name, 
      popularity: item.popularity
    }
    newData.items.push(itemObj);
  }
  return newData;
}

function cleanArtistData(data) {
  let total = data.body.total;
  let href = data.body.href;
  let newData = {
    total,
    href,
    items: [],
    genres: []
  };
  for (const [index, item] of data.body.items.entries()) {
    newData.genres = newData.genres.concat(item.genres);
    if (index < 10) {
      let imageurl = "";
      if (item.images.length) {
        imageurl = item.images[item.images.length - 1].url;
      } 

      let itemObj = {
        href: item.href,
        id: item.id, 
        images: imageurl,
        name: item.name,
        popularity: item.popularity,
      }
      newData.items.push(itemObj);
    }
  }
  return newData;
}

function getBinarySize(string) {
  return Buffer.byteLength(string, 'utf8');
}

function sizeReduction(obj1, obj2) {
  let sizeObj1; 
  let sizeObj2;
  if (typeof obj1 === "string") {
    sizeObj1 = getBinarySize(obj1);
  }
  else {
    sizeObj1 = roughSizeOfObject(obj1);
  }
  if (typeof obj2 === "string") {
    sizeObj2 = getBinarySize(obj2);
  } else {
    sizeObj2 = roughSizeOfObject(obj2);
  }
  let percent = ((sizeObj1 - sizeObj2) / sizeObj1) * 100;
  percent = percent.toFixed(2);
  console.log(`There was a ${percent}% reduction in size      ${sizeObj1} ===> ${sizeObj2}`);

}

function roughSizeOfObject( object ) {

  var objectList = [];
  var stack = [ object ];
  var bytes = 0;

  while ( stack.length ) {
      var value = stack.pop();

      if ( typeof value === 'boolean' ) {
          bytes += 4;
      }
      else if ( typeof value === 'string' ) {
          bytes += value.length * 2;
      }
      else if ( typeof value === 'number' ) {
          bytes += 8;
      }
      else if
      (
          typeof value === 'object'
          && objectList.indexOf( value ) === -1
      )
      {
          objectList.push( value );

          for( var i in value ) {
              stack.push( value[ i ] );
          }
      }
  }
  return bytes;
}

let trackData = cleanTrackData(req2);
sizeReduction(req2.body, trackData);
// console.log(trackData);
let artistData = cleanArtistData(req);
sizeReduction(req.body, artistData);
console.log(artistData);

let LZreq = LZ.compressToEncodedURIComponent(JSON.stringify(req.body));


console.log("Size of obj in bytes: ", roughSizeOfObject(req.body));
console.log("Size of obj after JSON.stringify in bytes: ", getBinarySize(JSON.stringify(req.body)));
console.log("Size of obj after string and LZ compress: ", getBinarySize(LZreq));


console.log("=====");
let LZtrackData = LZ.compressToEncodedURIComponent(JSON.stringify(trackData));
sizeReduction(trackData, LZtrackData);
sizeReduction(req2.body, LZtrackData);
let trackData2 = JSON.parse(LZ.decompressFromEncodedURIComponent(LZtrackData));

let base64trackData = Buffer.from(JSON.stringify(trackData)).toString("base64");
console.log("Size of base64 encoded : ", getBinarySize(base64trackData));
let LZB64trackdata = LZ.compressToEncodedURIComponent(base64trackData);
console.log("B64 => LZ : ", getBinarySize(LZB64trackdata));

let d = "N4IgLg9mCGA2IC4BMAGANCAFgJwKYDNEswwAHAZwQHorpSBLAOnNKnvwE9GBjCAWyoA3AIxU+uKpFK1sYeuTDkA-LHp96YALwBWFADII+fOVxb9c8QH1s0AHYBzXJvKYIsy2FzY+IDBtx85IgA2qA4BESYJBTUtAzMrHKcPPxCotCy8opU2gCSAHIAVgCOANYAysIQAByYwmoAggBeAArFAOIAWgBCAEa+IPQAJkR5RWWVNXWNrR09-X580I5BCMRklDRM5NxDtilUassSuEPc1QDs0ADM0Pgo1yhD0Ci4wkMAbBfvqEMX1wAWbRIarnIYA3DVaqvAa2aDiIgAFXhuAABLk+KQ4NABqxSABXWAZDQcRBQgC+aDCeEIayiG1idG2iXYXF4AhEMjkCnIVABYE6AHd8PZsAAJADy3GufEExQAmrAAKLy8qCABq9AGwyI-KFIvFUplcsVKrVmu1SxWkWim0OzF2+14hytEguKF6pyGKAuSE9AE5fdoXr0UNpcD7cNdo9V-dp-ZCkB9cBchn9YSiiAARO5gVEtfG2Uq4iAEonYElkgGU6kROm2xnxFhsZLstJcrK84QcXoNfLXfFgexDCAAVQAMsIALKjgDCYDFAIAilPtSM1t3e-3B8Ox5OZ-PFyvLcdVusYlsHXsDkdHFQE28htoISh8B838IXh9UPhrh9evg-ofMIHzcLsAIoFCFwAlcHwZgiayIrgti2PIJZlsSYCkggHzVlSWA0jaDI0EyCQtmyqSchk3LZKm7QAFIQACpDcFmSDqh8EDtNUpQtCgYD0QASoJa5EHRjHMax7GcdxvH8UJImLKeREXvaOzXs6t4SLh1xIG8nrVACcbxtc+DCH+0BDP61RDLgwHXNovShrhr6AX+8G4EQSrqLYAToYSmHYf6-o1gRdbnnapHNkkFEcukmQ8lQSD4vKADqAAe9CwBK6qwKOQylACEDqv6WaCIKxQANKiWsyVpZl2W5flhXFaV5VVSe1r1sRamOjerpUBGZkfP6QKQtZlyAQCNz-tUjm3AC1T4BcHzQNAAIAnpS0oB5RBTho5ClFqGB4gFFZYYgHzVKF4S0hFjbMuRKRxR2iXXBw8pIPYo7cLk5CFFO2C1IUEDaMILQQPR1Q1SA72fd9v3-YDwOg+DkPQ0pXX3Ze6lOhALrHFQQy3Egz5IPgILCMIvSOSgwi4FGi3XLg3AXNwwj+qZvrQFCenQMIu2IZgaLlOoYCYEEJ2lmdlYIBcFw3YR3WqVFLKtpR8U0byAJTrO3T4EqQJAaOED0EgEoAlmYB8EqU5NDDOt6wbRsfCbZsW1bNt251uBnvSqnbH1mkDbs5zXNwvRIJ8Tn-m81m3Cz1xDL0DkAtcn7+sISCLdASCoILID0fi9DcGiqWCeOWb+eWsvWYr4X+5FTZq7F7bUZ2VAoJVwjFCgtgABpLtU8h-i0TQSpVDRTr0+SeX464gF3Pd94Pw-kKP4+T9Ps8+37DY40H+NaUluC9O6a3BUMb5nN8wL+r0-rZ7gSCpln-ovNT8aZzTBflKwEC2GroFS62h653Ubg9MiMVnptwStka49gkClFHEuD4C5xzjl6HwUo6oLiIgBO0FoYBxwwwQUglBaCxQYKwTgvBBCiEkMxr7FSdpA4aSPgNK4gZri9CGHpeyQF7ikwBNwAEvDvy9H5rHXQEYIy+gBAXAAYvQAB0BUQNFIKQWAc8QCnRrhdHC1wwEsMgdFVkMCqJwN5NcQQvRKpZnIOUco7pOj91KubbgtjOh8HKKQ2x9jHHOJQK49xUovE+N3iYg+7CCZ3jfBcX8TkE6n2gCzQCKcIS8zsvgZOvCQIvAeABEYGA4QIRAN0FmxYpYYXOthf45IAC6GBHC2DwKsYIIBoD4gUDYVQdhUQUA4NwTAsJcAQAALSDOGacXAqhuADFmSzMA2AIADHwFlTw2BUSuG6To6iAzSwDGGfCT0Wy8RHMwFlWAgpoCCB0bZWwdytn0FsEMeg9y8DwgOaQBZ2juDLNLIcjAuB0qkC8GoZCMBYDfLWZ80oqJ8AQFgFUwYrz3kwr8GitEKzuAopeW8tE5B8TYEICU-EqJ7DQCaDolwahxBnKBSAWyAKNDbPoKQbZjL7AIsLCiy5HLXA-IwDYIVnTZAYpAL0FZEBSiwA4LYVE+L3kXJOV4CVzxbClwlb7bgdBsUQH4NqLFEqlX6txQMDVWqcUoqWGcYWCgvCjMFKiG5dzcReCWL5WweZXU6OtQMfE8LWAKEmbyi5JdlgQFRCKgY4hYAQDedwaNdABhwE2XCOQdzUSWr2bAdN0BM1mpRV0hQpqLV2FLqGosAxKU2EcNGiA5rMUEpNca-1GA+AJq8Aq9tIBe37PORgY5fBTmtpbYOkAqhVDi3dd4OwkKXW3J0QwOwUbe14gbU2kA5AXmOGwOM8gAD7CCnOo6jAabu0FvoFm-t3r6DjMRcimtGRjibrxW2xtNqu3YB7Z+2dnqF2+oGL24do6J2molVOjQIyTr0FXW+9CCHz2wF6PiYo+IvDobRGW5D+bC1IZAKBtVE7a2vt7RBx977x2Mog72zttkf0EdYLIIkrzFVYuA3+jACh+AcrsEMTlsBtHYCNdR0VRJ2MEtTXmy9+He2kfreR414GP1bvo92gjvabm0ocJABVOHOkyZ-VerNObw1CaA829FKmW1KYJQC1CurY3ft-Vu2lfB6USrsHIB9SKUVEYZaKijfnRPWZo6plFEmDNQZnRgXoEAeOuao2F0Vvko1xvjYKRD-ajMZuvWiMzcWMgQCw9qv5AKbMpdC2iPEFh5A+Cs0W6rDmI3OYY0l3EcHbBrq49uy5HniOMp45iVE-HBPCek3h-LbKBWMp1XqhthrgWgvBeIb1cAZuctFfyrbonunLLg9CnbgrgMpowIWBjooIAXc2ydhp5IgA"

// let user = {
//   id: "1",
//   profile: {
//     display_name: "Razin Ahmed",
//     email: "fakeemail@nyu.edu",
//     id: "1",
//     images: [{
//       height: null,
//       url: "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1405518596429184&height=300&width=300&ext=1585757057&hash=AeSbHWRGW2zhw5zT",
//       width: null
//     }],
//     share: true
//   },
//   data: {
//     artists: [
//       LZ.compressToEncodedURIComponent(JSON.stringify(cleanArtistData(req)))
//     ],
//     tracks: [
//       LZ.compressToEncodedURIComponent(JSON.stringify(cleanTrackData(req2)))
//     ],
//   }
// }

// request.post({url: "http://localhost:3000/storeuser", json:true, body:user}, (err, res, body)=> { 
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res.statusCode);
//   }
// })

// let realData = JSON.parse(LZ.decompressFromEncodedURIComponent(d));
// console.log(realData);
// let obj = {
//   hi: "hello",
//   arr: [1,2,3,4,5,6,7],
//   keyObj: {
//     goodbye: "bye"
//   }
// }

// let obj1 = {
//   item: obj.arr,
//   key: obj.keyObj

// }

// obj.arr = [];
// obj.keyObj = {};
// console.log(obj1);