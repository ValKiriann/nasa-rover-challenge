# NASA Rover Challenge
![img](https://static1.squarespace.com/static/57fc6f7559cc68c8071a6762/5801ae61c534a54101b8231f/5801af35ff7c50cd0673c90b/1476505429185/_DSC0172.JPG?format=750w)
### Context
The purpose of this test is to enable you to demonstrate your proficiency in solving problems using software engineering tools and processes. Read the specification below and produce a solution. 

Your solution should be in the form of completed code. The problem specified below requires a solution that receives input, does some processing and then returns some output.

### Specification
A robotic rover is to be landed by NASA on a plateau on Mars. This plateau, which is curiously square, must be navigated by the rover so that its on board cameras can get a complete view of the surrounding terrain to send back to Earth.

A rover's position is represented by a combination of an x and y coordinates and a letter representing one of the four cardinal compass points. 

The plateau is divided up into a grid to simplify navigation. 

An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North. In order to control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 

'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot. 'M' means move forward one grid point, and maintain the same heading.

Assume that the square directly North from (x, y) is (x, y+1).

### Input:
The first parameter is the size of the square (the lower-left coordinates are assumed to be 0,0).

The rest of parameters is information pertaining to the rover that has been deployed. 

The second argument gives the rover's position, and the third is a series of instructions telling the rover how to explore the plateau. The position is made up of two integers and a letter, corresponding to the x and y coordinates and the rover's orientation.

### Output:
The output should be the final coordinates and heading.

**Example:**
function setup(5, “1 2 N”, [“L”, “M”, “L”, “M”, “L”, “M”, “L”, “M”, “M”])
Expected Output: “1 3 N”