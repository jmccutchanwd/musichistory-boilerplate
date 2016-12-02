/*------ John McCutchan
-----------------------------------------------------------------------------
**1. Each student must add one song to the beginning and the end of the array.**
-----------------------
**2. Loop over the array and remove any words or characters that obviously don't belong.
-----------------------
**3. Students must find and replace the > character in each item with a - character.
-----------------------
**4. Must add each string to the DOM in index.html in the main content area.
-----------------------
{Song name} by {Artist} on the album {Album}
*/
//-----------------------------------Global Vars and Arrays
var songs = [];
var signs = [];
var revisedSongs = [];
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Iro÷ni!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs.push("Paint It Black > by The Rolling Stones on the album Aftermath");
songs.unshift("November Rain > by Guns N' Roses on the album Use Your Illusion I");
//---------------------------------------
for(var i = 0; i < songs.length; i++){
  signs.push(songs[i].replace(/>/g , "-"));
	revisedSongs.push(signs[i].replace(/\*|\@|\!|\(|by|album|on the|÷|/g, ""));
}
document.getElementById("listNew").innerHTML = "<li>" + revisedSongs + "</li>";
//---------------------------------------
