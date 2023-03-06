var songs = require("./songs")
const fs = require('fs')
var YoutubeMp3Downloader = require("youtube-mp3-downloader");

//Configure YoutubeMp3Downloader with your settings
var YD = new YoutubeMp3Downloader({
    "ffmpegPath": "C:/Program Files (x86)/FFmpeg for Audacity/ffmpeg.exe", // FFmpeg binary location
    "outputPath": "C:/Users/Ethan/Documents/pinanle-storage/pieces", // Output file location (default: the home directory)
    "youtubeVideoQuality": "lowest", // Desired video quality (default: highestaudio)
    "queueParallelism": 1, // Download parallelism (default: 1)
    "progressTimeout": 5000 // Interval in ms for the progress reports (default: 1000)
});

YD.on("finished", function (err, data) {
    console.log(JSON.stringify(data));
});

YD.on("error", function (error) {
    console.log(error);
});

YD.on("progress", function (progress) {
    console.log(JSON.stringify(progress));
});

const flag = true;

if (flag) {
    let days = [280, 283, 290];
    for (let day in days) {
        let song = songs.songs[days[day]];
        let file = fs.existsSync("./pieces/" + song.youtubeId + ".mp3");
        if (file) {
            console.log("File exists, skipping " + song.youtubeId);
        } else {
            YD.download(song.youtubeId, song.youtubeId + ".mp3");
        }
    }
} else {
    let startday = 260;
    let endday = 300;

    for (let i = startday - 1; i < endday; i++) {
        let song = songs.songs[i];
        let file = fs.existsSync("./pieces/" + song.youtubeId + ".mp3");
        if (file) {
            console.log("File exists, skipping " + song.youtubeId);
        } else {
            YD.download(song.youtubeId, song.youtubeId + ".mp3");
        }
    }
}