var songs = require("./songs")
var YoutubeMp3Downloader = require("youtube-mp3-downloader");

//Configure YoutubeMp3Downloader with your settings
var YD = new YoutubeMp3Downloader({
    "ffmpegPath": "C:/Program Files (x86)/FFmpeg for Audacity/ffmpeg.exe",        // FFmpeg binary location
    "outputPath": "C:/Users/Ethan/Documents/pinanle-storage/pieces",    // Output file location (default: the home directory)
    "youtubeVideoQuality": "lowest",  // Desired video quality (default: highestaudio)
    "queueParallelism": 10,                  // Download parallelism (default: 1)
    "progressTimeout": 5000                 // Interval in ms for the progress reports (default: 1000)
});

YD.on("finished", function(err, data) {
    console.log(JSON.stringify(data));
});

YD.on("error", function(error) {
    console.log(error);
});

YD.on("progress", function(progress) {
    console.log(JSON.stringify(progress));
});

let startday = 150;
let endday = 160;

for (let i = startday; i < endday; i++) {
    let song = songs.songs[i];
    YD.download(song.youtubeId, song.youtubeId + ".mp3");
}