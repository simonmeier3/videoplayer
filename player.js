document.addEventListener("DOMContentLoaded", function() { startplayer(); }, false);
let player;

function startplayer()
{
    player = document.getElementById('video_player');
    player.controls = false;
}
function play_video()
{
    player.play();
}
function pause_video()
{
    player.pause();
}
function speed_1(){
    player.playbackRate = 1.5;
}
function speed_2(){
    player.playbackRate = 2;
}
function mute_video(){
    player.mute;
}
function change_volume()
{
    player.volume=document.getElementById("change_vol").value;
}
function fullscreen()
{
    player.requestFullscreen();
}