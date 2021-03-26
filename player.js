document.addEventListener("DOMContentLoaded", function() { startplayer(); }, false);
let player;

function startplayer()
{
    player = document.getElementById('video_player');
    player.controls = false;
}
function play_vid()
{
    player.play();
}
function pause_vid()
{
    player.pause();
}
function speed_1(){
    player.playbackRate = 1.5;
}
function speed_2(){
    player.playbackRate = 2;
}
function mute_vid(){
    player.mute;
}
function change_vol()
{
    player.volume=document.getElementById("change_vol").value;
}
function fullscreen()
{
    player.requestFullscreen();
}