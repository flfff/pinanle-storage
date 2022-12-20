var songs = require("./songs")
const fs = require('fs')
let start = 249;
let end = 300;
for(let i = start; i < end; i++) {
    let song = songs.songs[i];
    let file = fs.existsSync("./pieces/" + song.youtubeId + ".mp3");
    if (!file) {
        console.log("Missing Day " + i + ", youtubeID=" + song.youtubeId + " " + song.artist + " " +song.name);
    }
}