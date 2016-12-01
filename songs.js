/*

-----------------------------------------------------------------------------
1. Each student must add one song to the beginning and the end of the array.
-----------------------
2. Loop over the array and remove any words or characters that obviously don't belong.
-----------------------
3. Students must find and replace the > character in each item with a - character.
-----------------------
4. Must add each string to the DOM in index.html in the main content area.
-----------------------

{Song name} by {Artist} on the album {Album}

-----------------------------------------------------------------------------
Merging your branch

After you've got all of the requirements completed, follow these steps.

In your musichistory directory, enter the command git checkout master. This switches you back to 
the master branch.

git merge -X theirs version2

If you see a vim screen with a default message in it just :x to save and exit.
Your branch is now merged into the master branch and you can push the master branch up to Github 
with git push origin master.

*/


var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator > rock";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America > rock";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall > rock";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction > rock";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill > rock";

console.log(songs);

function addSongFront(string) {
	for(var i = 0; i < 6; i++){
		songs.push = string;
		console.log(i);
	}
	console.log("added front " + songs);
}

// function addSongBack(song, band, album, genre) {
// 	for(var i = 0; i < songs.length; i++){

// 	}
// 	console.log("added back " + songs);
// }



// addSongFront("Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill > rock");








