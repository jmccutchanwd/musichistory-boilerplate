/*

-----------------------------------------------------------------------------
**1. Each student must add one song to the beginning and the end of the array.**
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

songs.push("Paint It Black > by The Rolling Stones on the album Aftermath > rock");
songs.unshift("November Rain > by Guns N' Roses on the album Use Your Illusion I > rock");

console.log("length " + songs.length)

removes = [">", "by", "on", "the", "album", "*", "(", "@", "!"];

for(var i = 0; i < songs.length; i++){ //loops to each string in array songs[i]
	console.log(songs[i]);
	for(var j = 0; j < removes.length; j++ ){ // loops through what to remove, removes[j]
		console.log(removes.length + " " + removes[j]);
		var junk = removes[j];
		for(var k = 0; k < 30; k++){ // cycle though the string ******* fix max counter **********
			console.log(removes[k]); // ******* undefined? ***********
			if (songs[i].indexOf(junk) !== -1) {
				console.log("found one! " + junk);
			}
		}
	}
	
}


// if (songs[i] != -1) {
// 		songs.splice(i, 1);
	
// 	}

/*
create array that holds what to remove

loop by array index = i **** calls a single string of the array
	loop through array to find what to remove = j *** sets var to hold what to remove/replace
	- >, by, on the album 
		loop by indexOf array line = k *** compares var above to whats at each position in the array string
		- find > replace with -
		- find by, on the album and delete



break apart into song, artist, album and genre? Object?

*/










