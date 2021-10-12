var student1;
var student2;

function setup() {
  createCanvas(400,400);
  student1 = new Student("Pratyush", 14, "A")
  student1 = new Student("Raj", 17, "B")

}

function draw() 
{
  background(30);
  student1.show();
  student2.show();
}