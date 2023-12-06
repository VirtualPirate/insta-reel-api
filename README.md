# INSTAGRAM DOWNLOADER API

This is a Instagram Reel Video Downloader API, where you can fetch info regarding instagram reel
and their download links

## Note:

This application depends on the Opengraph-API:
https://github.com/VirtualPirate/OpenGraph-API

# API Docs

### `GET` `/`

| Parameter | Description                  |
| --------- | ---------------------------- |
| url       | The ur of the Instagram Reel |

```javascript
import axios from "axios";

const API_URL = "http://localhost:8080";
const video_url = "https://www.instagram.com/reel/C0djb2Yow4C/";

try {
  const response = await axios.get(API_URL, {
    params: { url: video_url },
  });

  console.log(response.data);
} catch (error) {
  console.error(error);
}
```

### Response:

```json
{
  "title": "Relatable Wala on Instagram: \"Sherni mummy layengi...🦁\n.\n.\n.\n\nTags-#quotesdaily #quote #quotestagram #quotesaboutlife #quoteoftheday #quotes #ａｅｓｔｈｅｔｉｃ #fypage #fypシ #explore #explorepage #relatabletextpost #relatablequotes #relatable #textpost #thoughtoftheday #thoughts #funnyquotes #funny #trending #bollywoodsongs #bollywood #thefeedfeedchocolate\"",
  "url": "https://www.instagram.com/reel/C0djb2Yow4C/",
  "description": "upwalabhakt on December 4, 2023: \"Sherni mummy layengi...🦁\n.\n.\n.\n\nTags-#quotesdaily #quote #quotestagram #quotesaboutlife #quote...\" ",
  "thumbnail": "https://scontent-sea1-1.cdninstagram.com/v/t51.29350-15/407683245_908674170866643_7434127037521702519_n.jpg?stp=c162.288.270.270a_dst-jpg_s640x640&_nc_cat=1&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=596jcKpfw80AX-59sGN&_nc_ht=scontent-sea1-1.cdninstagram.com&oh=00_AfBtItZZG2EmtMJZerX19MEtK6k-8O4M2JQbZUdiz_6nuQ&oe=6574B17E",
  "download_link": "https://scontent.cdninstagram.com/v/t66.30100-16/315818685_267500832611404_268790344534293423_n.mp4?_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=SbrMy3AnoqoAX9wgmSx&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfClT0UmMRa7wrk8vBrAHuL0Cj8vHl-OUpPwTc_C8qkaAg&oe=65728460&_nc_sid=10d13b"
}
```

You can use the `download_link` field to download the video
