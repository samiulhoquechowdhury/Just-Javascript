function fun(){
    console.log('fun'); //maximum call stack size executed.
    fun() //maximum call stack size executed.
}
fun();