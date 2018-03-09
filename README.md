### Description part 1
Kogan Full Stack Developer job application (Thu 8 Mar 2018)
Stage 1: Coding challenge
URLs: https://kogan-recruitment.herokuapp.com/challenge/a88a84e6bd943e19ab9c924bdefb4ba9/
api endpoint: http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com/api/products/1

### Description part 2
Submitted by: Clayton Wong
Programming language used: Javascript (Node.js)
Solution type: Command line application

### Setup instructions 
1) In github, click on the green "clone or download" button
2) Choose "download zip" in the dropdown menu under the button
3) Choose destination for download
4) Extract the zip file in the directory of your choice
5) Open up a command line or terminal window
6) In command line or terminal window, go to directory where you extracted the zip file
7) If you already have Node.js installed on your machine, you can find 
   the average cubic weight by typing in the following:
    
   node traversePages.js

If you don't have Node.js installed, go to the following URL:

https://nodejs.org/en/

This is the official Node.js site as of Fri 9 Mar 2018. It should have the instructions 
needed to download and install Node.js

### Brief description of solution
The program uses the recursion technique, (where one function calls itself) to
go from one page to the next. This was because the part after the base URL for
the next page is only available at the end of the current page, and recursion is
the simplest and best method I can think of at the time to solve the challenge.

### Which were the hardest parts of this challenge
* Figuring out how to access the data from next page without repeating myself
* Integrating recursion with .then and promises in Javascript
