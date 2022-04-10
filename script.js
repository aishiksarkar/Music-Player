console.log('Hello world');
//Initialize
let songIndex=1;
let audioElement=new Audio('random2.mp3');//audio Element for playing Songs..
// audioElement.play();
//Master play button initialise
let masterplay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");//Progress bar Initialising
let songs=[{songName:"Let Me Love You",filePath:"11.mp3",coverPath:"cover.jpg"},
{songName:"Feels Like Teen Spirit",filePath:"random.mp3",coverPath:"cover2.jpg"},
{songName:"Piku",filePath:"11.mp3",coverPath:"cover3.jpg"},
{songName:"Jawl phoring",filePath:"11.mp3",coverPath:"cover4.jpg"},
{songName:"Chak De India!",filePath:"11.mp3",coverPath:"cover5.jpg"},
{songName:"Brothers Anthem",filePath:"11.mp3",coverPath:"cover6.jpg"},
{songName:"Barisehein",filePath:"random.mp3",coverPath:"cover7.jpg"},
{songName:"Love me like u do",filePath:"random.mp3",coverPath:"cover8.jpg"},];//Array Initialiseing
let gifelement=document.getElementById('gif');//Gif at bottom taken
let songItems=Array.from(document.getElementsByClassName('songItem'));
songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
});//Seeting the playlist right usinh cover image and songName
// audionElement.play();
/////////////////////////////////////////////////////////////////////////////////
//Handle Play/Pause click
masterplay.addEventListener('click',()=>{
    console.log('hi');
    if(audioElement.paused||audioElement.currentTime<=0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gifelement.style.opacity=1;
        
    }
    else
    {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gifelement.style.opacity=0;
    }

});
//////////////////////////////////////////////////////////////////////////tiem Update and Progress bar change////////////////
//Listen to events from
audioElement.addEventListener('timeupdate',()=>{
console.log('time update');
progress=parseInt(audioElement.currentTime/audioElement.duration*100);
myProgressBar.value=progress;
});
//////////////////////////////////Progress bar seek response code////////////////////////////////////////
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
});
///////////////////Audio Icon changing Due to song playing and pausing//////////////////////


const makeallPlays=()=>{//making All Icon Play icon.
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })};
//Making Each Play Icon functional......
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallPlays();
        songIndex=parseInt(e.target.id);
        console.log(songIndex);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        audioElement.src=`random${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        let displayName=document.getElementById('dispalySongName');
        displayName.innerHTML=document.getElementById(`${songIndex}a`).innerHTML;
        
    })
});

//////Trying to make the next button functional...
let masternext=document.getElementById('next');
masternext.addEventListener('click',()=>{
    if(songIndex>9)
    {
        songIndex=0;
    }
    else
    {
        songIndex=songIndex+1;
    }
    audioElement.src=`random${songIndex}.mp3`;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
});
