# Objective
- The objective is to write code with CSS, HTML, and JavaScript to look as much like https://www.hardees.com/full-menu as possible.

## Challenges
- I was unable to find some of the icons found on the original site
- Not able to find font-family: Arpona-Black-Italic so I had to use Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
- I had a challenge getting the images to load correctly.  I had the .png file in all caps.  I'm not sure if that caused the issue, but when I changed the name it worked correctly.
- I wanted to have a separate js file for my items, but for some reason I was unable to link the js file to my index.html. So I ended up moving the objects into index.js in order to use JavaScript to add the menu instead of writing all items in html.

## Steps
- Create HTML, CSS, and JavaScript files and linked them together
- Created a double header.  Both headers are in flex boxes
- icons are from https://fontawesome.com/ and I was able to get the Hardee's log and images off of Google
- I gave the second header a position: sticky top: 0 just because I thought it looks great
- H1 is in a flexbox by itself
- For the horizontal navigation menu I used greater/less than icons found on fontawesome, used anchors for my text, and used a background color of #ffc72c with a border-radius of 10px
- I made one of the menu items in index.html and made it look perfect before removing it and using it as a template in JavaScript returning a string containing the HTML markup for each item found in the array variable shopItemsData
- I put the menu items in a grid with because I felt like it looked better than flex box when I use media queries to adjust the grid-template-columns at max-width: 1188px and max-width: 606px.
- I copied how the double footer looks on the site, but I'm not sure if it's best to use a flexbox or use a media query to for when I'm looking at the page from my cell phone.