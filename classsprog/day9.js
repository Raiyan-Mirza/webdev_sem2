    const task= document.getElementById("profile");
    task.style.backgroundColor= "tomato";
    task.style.padding="15px";
    task.style.textAlign="Center";

const task2 = document.getElementsByClassName("prof");
console.log(task2);
 for (let i =0;i<task2.length;i++) {
    task2[i].style.color="purple"
    task2[i].style.fontSize="40px";
 }
 console.log(task2.length)

 const content= document.getElementById("content");
 const task3=content.querySelectorAll("p");
 for (let i=0;i<task3.length;i++) {
    task3[i].style.backgroundColor="cyan"

 }


