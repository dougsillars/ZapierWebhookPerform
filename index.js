
require('dotenv').config();
//import express from 'express';
const express = require('express');
//express for the website and pug to create the pages
const app = express();
bodyParser = require('body-parser');
app.use(express.json());


app.get('/livestart', (req, res) => {

    var dateinMs = Date.now();
    date = new Date(dateinMs)
    date = date.toISOString();
    var response = [{ "type": "live-stream.broadcast.started",
                    "emittedAt": date,
                    "liveStreamId":"li2DAIhNB6eM0U5OAOzMeiHY"
                    }]


    res.send(response);  
});


app.get('/livestop', (req, res) => {
    var dateinMs = Date.now();
    date = new Date(dateinMs)
    date = date.toISOString();
    var response = [{ "type": "live-stream.broadcast.ended",
                    "emittedAt": date,
                    "liveStreamId":"li2DAIhNB6eM0U5OAOzMeiHY"
                    }]


    res.send(response);  
});

app.get('/liveall', (req, res) => {
    var dateinMs = Date.now();
    date = new Date(dateinMs)
    date = date.toISOString();
    var response = [{ "type": "live-stream.broadcast.started",
                    "emittedAt": date,
                    "liveStreamId":"li2DAIhNB6eM0U5OAOzMeiHY"
                    },
                    { "type": "live-stream.broadcast.ended",
                    "emittedAt": date,
                    "liveStreamId":"li2DAIhNB6eM0U5OAOzMeiHY"
                    },
                    { "type": "video.source.recorded",
                    "emittedAt": date,
                    "liveStreamId":"li2DAIhNB6eM0U5OAOzMeiHY",
                    "videoId": "vi5uZLbBk51sIP2NGYQsLMM9"
                    }
                ]




    res.send(response);  
});

app.get('/encoded', (req, res) => {
    var dateinMs = Date.now();
    date = new Date(dateinMs);
    date = date.toISOString();
    var response = [{ "type": "video.encoding.quality.completed",
                    "emittedAt": date,
                    "videoId": "vi5uZLbBk51sIP2NGYQsLMM9",
                    "encoding":"hls",
                    "quality": "240p"
                    },
                    { "type": "video.encoding.quality.completed",
                    "emittedAt": date,
                    "videoId": "vi5uZLbBk51sIP2NGYQsLMM9",
                    "encoding":"hls",
                    "quality": "360p"
                    },
                    { "type": "video.encoding.quality.completed",
                    "emittedAt": date,
                    "videoId": "vi5uZLbBk51sIP2NGYQsLMM9",
                    "encoding":"hls",
                    "quality": "480p"
                    },
                    { "type": "video.encoding.quality.completed",
                    "emittedAt": date,
                    "videoId": "vi5uZLbBk51sIP2NGYQsLMM9",
                    "encoding":"hls",
                    "quality": "720p"
                    },
                    { "type": "video.encoding.quality.completed",
                    "emittedAt": date,
                    "videoId": "vi5uZLbBk51sIP2NGYQsLMM9",
                    "encoding":"hls",
                    "quality": "1080p"
                    },{ "type": "video.encoding.quality.completed",
                    "emittedAt": date,
                    "videoId": "vi5uZLbBk51sIP2NGYQsLMM9",
                    "encoding":"hls",
                    "quality": "2160p"
                    },]


    res.send(response);  
});

app.listen(process.env.PORT || 3029, () =>
  console.log('Example app listening on port 3029!'),
);
process.on('uncaughtException', function(err) {
    // handle the error safely
    console.log(err)
    // Note: after client disconnect, the subprocess will cause an Error EPIPE, which can only be caught this way.
});