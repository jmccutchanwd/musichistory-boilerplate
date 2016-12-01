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

for(var i = 0; i < songs.length; i++){
	console.log(songs[i]);
	if (songs[i] === " > ") {
		songs.splice(i, 1);
	
	}
}






/*
var cars = ["Buick", "Camaro", "Kia", "Infiniti"];
var removedCars = cars.splice(2,2);
//After the above call, cars will be ["Buick", "Camaro"]
//removedCars will contain "Kia" and "Infiniti"
*/

/*
if (!Array.prototype.remove) {
  Array.prototype.remove = function(val) {
    var i = this.indexOf(val);
         return i>-1 ? this.splice(i, 1) : [];
  };
}

var a = [1,2,3,2,4];
var removedItems = a.remove(2); //a = [1,3,2,4],   removedItems = [2];

var b = [1,2,3,2,4];
removedItems     = b.remove(8); //b = [1,2,3,2,4], removedItems = [];
*/

/*
Removing Multiple Elements

One thing lacking from Array.indexOf() is the ability to search for multiple items at once, so if we wanted to support that usage, we'd have to implement our own looping mechanism. That's where the second version of Array.remove() comes in. This one accepts a second boolean parameter to indicate that we want ALL occurrences of matching values. There are two very important points to notice in the following for loop:
It goes backward. Otherwise, the index will access the wrong element after removing an item.
There is no checking clause. A funny thing about JS is that the loop will exit once the iterator counts down to zero.
if (!Array.prototype.remove) {
  Array.prototype.remove = function(val, all) {
    var i, removedItems = [];
    if (all) {
      for(i = this.length; i--;){
        if (this[i] === val) removedItems.push(this.splice(i, 1));
      }
    }
    else {  //same as before...
      i = this.indexOf(val);
      if(i>-1) removedItems = this.splice(i, 1);
    }
    return removedItems;
  };
}

var a = [1,2,3,2,4];
var removedItems = a.remove(2);       //a = [1,3,2,4], removedItems = [2];
var b = [1,2,3,2,4];
removedItems     = b.remove(2, true); //b = [1,3,4],   removedItems = [2,2];
Matching Multiple Search Values

For our final implementation, we've upped the ante even more by allowing the user to search by more than one value. That means that a single value or an array may be supplied for the ultimate in flexibility. That might sound complicated, but thanks to the Array.isArray() function, we can easily distinguish between single and multiple search values. For the sake of consistency, single values are converted into an array of one element. That allows us to iterate over the search values whether there are one or fifty. That loop is accomplished using a conventional forward for loop. One other small change is the switch to removedItems.push() for storing single matches, again for consistency.
if (!Array.prototype.remove) {
  Array.prototype.remove = function(vals, all) {
    var i, removedItems = [];
    if (!Array.isArray(vals)) vals = [vals];
    for (var j=0;j<vals.length; j++) {
      if (all) {
        for(i = this.length; i--;){
          if (this[i] === vals[j]) removedItems.push(this.splice(i, 1));
        }
      }
      else {
        i = this.indexOf(vals[j]);
        if(i>-1) removedItems.push(this.splice(i, 1));
      }
    }
    return removedItems;
  };
}

var a = ['1','2','3','2','4'];                                                                 
var removedItems = a.remove('4', true);        //a = ['1','2','3','2'], removedItems = ['4'];

var b = ['1','2','3','2','4']; 
removedItems     = b.remove(['2','4'], true);  //b = ['1','3'],   removedItems = ['2','2','4'];



http://www.htmlgoodies.com/beyond/javascript/removing-elements-from-an-array-in-javascript.html
*/








