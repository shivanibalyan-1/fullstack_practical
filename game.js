score = 0;
cross = true;

audio=new Audio('music.mp3');
audiogo=new Audio('gameover.mp3');


setTimeout(() =>{
    audio.play();
},1000);

document.onkeydown = function (Event) {

    console.log("key code is:", Event.keyCode)

    if (Event.keyCode == 38) {
        motu = document.querySelector('.motu');
        motu.classList.add('animateMotu');
        setTimeout(() => {
            motu.classList.remove("animateMotu")
        }, 700);
    }

    if (Event.keyCode == 39) {
        motu = document.querySelector('.motu');
        motux = parseInt(window.getComputedStyle(motu, null).getPropertyValue('left'));
        motu.style.left = motux + 112 + 'px';
    }
    if (Event.keyCode == 37) {
        motu = document.querySelector('.motu');
        motux = parseInt(window.getComputedStyle(motu, null).getPropertyValue('left'));
        motu.style.left = (motux - 112) + 'px';
    }
}
setInterval(() => {
    motu = document.querySelector('.motu');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(motu, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(motu, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetx = Math.abs(dx - ox);
    offsety = Math.abs(dy - oy);
    console.log(offsetx, offsety)
    if (offsetx < 73 && offsety < 52) {
        gameover.innerHTML = 'Game Over- Reload to play Again';
        obstacle.classList.remove('obstacleAni')

        audiogo.play();
        setTimeout(()=>{
            audiogo.pause();
            audio.pause();
        },1000);
    }
    else if (offsetx < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration',newDur)
        },500 );

    }
}, 10);
function updateScore(score) {
    scoreCount.innerHTML = 'Your Score : ' + score;
}