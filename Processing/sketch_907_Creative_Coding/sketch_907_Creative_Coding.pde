line(10, 20, 70, 40);
background(12,230,247);
size(350, 500);

fill (255, 120, 120);
rect (10, 20, 50, 30);
triangle(10, 20, 8, 30, 12, 30);

int xPosition= 400;
line(10, xPosition, 90, 300);
println("hello world");
println(xPosition);

fill (255, 120, 120);
noStroke();
ellipse (300,200, 100, 700);

stroke(255,255,255);
strokeWeight(5);

beginShape();
vertex(50, 100);
vertex(70, 300);
vertex(40, 80);
vertex(90, 50);
endShape(CLOSE);