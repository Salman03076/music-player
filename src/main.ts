let audio = document.querySelector("#auiio") as HTMLAudioElement;
const play = document.querySelector("#play") as HTMLButtonElement;
const Next = document.querySelector("#Nextbutton") as HTMLButtonElement;
const Back = document.querySelector("#BackButton") as HTMLInputElement;
const stop = document.querySelector("#playbutton") as HTMLButtonElement;
const progres = document.querySelector("#progres") as HTMLInputElement;
let displayCurrentTime = document.querySelector("#displayCurrentTime") as HTMLDivElement;
let diplayDuraton = document.querySelector("#diplayDuraton") as HTMLDivElement;
const Soundbtn = document.querySelector("#audioSond") as HTMLButtonElement;
const soundprogress = document.querySelector("#soundprogress") as HTMLInputElement;
const cenorimg = document.querySelector("#cenorimg") as HTMLImageElement;
const Templete1 = document.querySelector("#Templete") as HTMLDivElement;
const firstcontrol = document.querySelector("#firstcontrol") as HTMLDivElement;
const Control = document.querySelector("#Control") as HTMLDivElement;
const listbackbutton = document.querySelector("#listbackbutton") as HTMLButtonElement;
const multipletaskArea = document.querySelector("#multipletaskArea") as HTMLDivElement;

// music list 
const mlist = document.querySelector("#mlist") as HTMLButtonElement;







//music thame line store
const templete: string[] = [
    "assets/sddefault (1).jpg",
    "assets/maxresdefault.jpg",
    "assets/maxresdefault (7).jpg",
    "assets/maxresdefault (1).jpg",
    "assets/maxresdefault (2).jpg",
    "assets/maxresdefault (3).jpg",
    "assets/maxresdefault (4).jpg",
    "assets/images.jpg",
    "assets/maxresdefault (5).jpg",
    "assets/maxresdefault (6).jpg",
    "assets/Bairi-Rajasthani-2026-20260204121225-500x500.jpg",
    "assets/hq720.jpg",
    "assets/Dooron-Dooron-Punjabi-2022-20220124231445-500x500.jpg",
    "assets/sddefault (2).jpg",
    "assets/artworks-L6qh13MiGYMTKk21-zXzmEQ-t1080x1080.jpg"


]

// Music store by array
const MusicList: string[] = [
    "Aadat.mp3",
    "Avvy Sra.mp3",
    "Kufar.mp3",
    "unconditionally.mp3",
    "Aakh Ye .mp3",
    "Black Ride.mp3",
    "Dhanda Nyoliwala .mp3",
    "GURU RANDHAWA - _AZUL_ .mp3",
    "Tum Ho Toh ｜ Saiyaar Song",
    "Diljit Dosanjh I Sanya Malhotra ",
    "Bairi-Rajasthani",
    "Deewane.mp3",
    "Dooron Dooron.mp3",
    "Full Video_ Raanjhan .mp3",
    "Shubh - Supreme.mp3"


]





// audio store
const audiodata: string[] = [
    "assets/Aadat.mp3",
    "assets/Avvy Sra.mp3",
    "assets/Kufar.mp3",
    "assets/unconditionally.mp3",
    "assets/Aakh Ye .mp3",
    "assets/Black Ride.mp3",
    "assets/Dhanda Nyoliwala .mp3",
    "assets/GURU RANDHAWA - _AZUL_ .mp3",
    "assets/Tum Ho Toh Song ｜ Saiyaara ｜.mp3",
    "assets/Diljit Dosanjh I Sanya Malhotra I.mp3",
    "assets/brairi.mp3",
    "assets/Deewane.mp3",
    "assets/Dooron Dooron.mp3",
    "assets/Full Video_ Raanjhan .mp3",
    "assets/Shubh - Supreme.mp3"

];


let current: number = 0;

cenorimg.src = templete[current] as string;


// first song load
audio.src = audiodata[current] as string;


//  Play Button
play.addEventListener("click", () => {
    audio.play();
    stop.style.display = "block";
    play.style.display = "none"

    let rotetedeg = 0;

    if (stop) {

        for (rotetedeg += 0; rotetedeg < 360;) {
            rotetedeg++

            cenorimg.style.transform = `rotate(${rotetedeg}deg)`;
        } // speed


    } else {
        rotetedeg = 0;

    }



});

// button
stop.addEventListener("click", () => {
    // rotetedeg += 0;

    audio.pause();
    stop.style.display = "none";
    play.style.display = "block"

});


//  Next Button

Next.addEventListener("click", () => {

    stop.style.display = "block";
    play.style.display = "none"

    current++;

    if (current >= audiodata.length) {
        current = 0;
    }
    cenorimg.src = templete[current] as string;
    audio.src = audiodata[current]!;
    audio.play();

});




//  Back Button
Back.addEventListener("click", () => {

    stop.style.display = "block";
    play.style.display = "none"

    current--;

    if (current < 0) {
        current = audiodata.length - 1;
    }
    cenorimg.src = templete[current] as string;
    audio.src = audiodata[current]!;
    audio.play();
});





// progress dlide controler
audio.addEventListener("timeupdate", () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progres.value = percent.toString();
});


progres.addEventListener("input", () => {
    const Time = (Number(progres.value) / 100) * audio.duration;
    audio.currentTime = Time;
    audio.play()
    stop.style.display = "block";
    play.style.display = "none"
});





// updata current time and duration
setInterval(() => {

    const duration = audio.duration;
    const currentduration = audio.currentTime;

    const minutes1 = Math.floor(currentduration / 60);
    const seconds1 = Math.floor(currentduration % 60);
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);

    diplayDuraton.innerText = minutes + ":" + seconds;
    displayCurrentTime.innerText = minutes1 + ":" + seconds1

}, 100);

//sound ProgresBar
Soundbtn.addEventListener("click", () => {
    soundprogress.style.display = "block";

    setTimeout(() => {
        soundprogress.style.display = "none";
    }, 3000);

    soundprogress.addEventListener("input", () => {
        audio.volume = Number(soundprogress.value) / 100;


    })


})






// table ducaretion
const table = document.createElement("table") as HTMLTableElement;
table.style.position = "relative";
table.style.top = "210px";
table.style.color = "wheat";
table.innerText = "MUSIC LIST"
table.style.display = "flex";
table.style.display = "none"
table.style.justifyContent = "center"
table.style.flexDirection = "column"
table.style.zIndex = "3";
table.style.textAlign = "center"


// show the list in table
for (let listnum = 0; listnum < MusicList.length; listnum++) {
    let row = document.createElement("tr") as HTMLTableRowElement;
    let data = document.createElement("td") as HTMLTableCellElement;
    table.style.backgroundColor = "#ffffff14";
    row.id = "listnum"
    row.style.zIndex + "-2"
    data.style.zIndex = "-2"
    row.style.textAlign = "start";
    row.style.width = "30px"
    data.style.width = "315px";
    data.style.border = "1px solid black"


    multipletaskArea.appendChild(table)
    table.appendChild(row)
    row.appendChild(data)

    data.innerText = MusicList[listnum] as string;



    row.addEventListener("mouseenter", () => {
        row.style.backgroundColor = "#2d2f2f55";


    });



    row.addEventListener("click", () => {
        cenorimg.src = templete[listnum] as string;
        // row.id = "current";
        audio.src = audiodata[listnum] as string;
        audio.play()
        stop.style.display = "block";
        play.style.display = "none"

        table.style.display = "none"
        listbackbutton.style.display = "none";
        Control.style.display = "flex"
        progres.style.display = "block"
        firstcontrol.style.display = "block"
        Templete1.style.display = "block"
        cenorimg.style.display = "block"
        displayCurrentTime.style.display = "block";
        diplayDuraton.style.display = "block";


    });
    row.addEventListener("mouseleave", () => {
        row.style.backgroundColor = "#982f6e13";
    });

    document.body.appendChild(table)


}




//  music list event 
mlist.addEventListener("click", () => {

    table.style.display = "block";
    listbackbutton.style.display = "block";
    Control.style.display = "none";
    progres.style.display = "none";
    firstcontrol.style.display = "none";
    Templete1.style.display = "none";
    cenorimg.style.display = "none";
    displayCurrentTime.style.display = "none";
    diplayDuraton.style.display = "none";


});






// list  back button
listbackbutton.addEventListener("click", () => {

    table.style.display = "none"
    listbackbutton.style.display = "none";
    Control.style.display = "flex"
    progres.style.display = "block"
    firstcontrol.style.display = "block"
    Templete1.style.display = "block"
    cenorimg.style.display = "block"
    displayCurrentTime.style.display = "block";
    diplayDuraton.style.display = "block";


});

function autoplayermusic(): void {
    if (audio.currentTime == audio.duration) {
        current++;
        audio.src = audiodata[current]!;
        audio.play();
    } else {
        console.error("something wrong");


    }
}

autoplayermusic()

// const btn = document.querySelector("#btn") as HTMLButtonElement;









