console.log ("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('/songs/A-Thousand-Years.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let songitem = Array.from( document.getElementsByClassName('songitem'));
let songs = [
    {songName : "A Thousand Years", filePath: "/songs/1.mp3", coverPath: "/cover/thousand years.jpg"},
    {songName : "Aawara Sham Hai", filePath: "/songs/2.mp3", coverPath: "/cover/awara_sham_hai.jpg"},
    {songName : "Faasle", filePath: "/songs/3.mp3", coverPath: "/cover/Faasle.jpg"},
    {songName : "Girls like You", filePath: "/songs/4.mp3", coverPath: "/cover/Girls_like_You_cover.png"},
    {songName : "Jugnu", filePath: "/songs/5.mp3", coverPath: "/cover/Jugnu.jpg"},
    {songName : "kesariya", filePath: "/songs/6.mp3", coverPath: "/cover/kesariya.jfif"},
    {songName : "love me like you do", filePath: "/songs/7.mp3", coverPath: "/cover/love me like you do.jfif"},
    {songName : "o'meri laila", filePath: "/songs/8.mp3", coverPath: "/cover/o meri laila.jpg"},
    {songName : "Pasoori", filePath: "/songs/9.mp3", coverPath: "/cover/pasoori.jpg"},
]

songitem.forEach((element , i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();
 
//handle play pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    progressbar.value = progress;
})

progressbar.addEventListener('change', ()=> {
    audioElement.currentTime = progressbar.value * audioElement.duration / 100;
})

const makeAllPlays = ()=>{
    Array.from( document.getElementsByClassName('songitemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from( document.getElementsByClassName('songitemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `/songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        element.classList.remove('fa-circle-play');
        element.classList.add('fa-circle-pause');
    })
})