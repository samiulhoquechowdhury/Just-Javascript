// alert("Working..") // alert  is used to invoke a mini window. That shows a messege/alert message.
//prompt take input from user
//confirm

// alert("Enter the value of a :")
let a = prompt("Enter the value here ");
alert(`you entered ${a}`);
let write = confirm("Do you want to print it on the page?");
if(write){
    document.write(a)
}else {
    document.write("You don't want to print it on the page.");
    document.write("Visit again..")
}
