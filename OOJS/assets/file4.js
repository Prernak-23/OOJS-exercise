let invocation=0;
let instanciated=0;
function myfunction() 
{
	invocation++;
	alert("HI i am invocated .\n Total invocation :"+invocation);
}
function check(c)
{
	var val;
	if(c==1)
	val=new myfunction();
    else
    val=myfunction();
    if(val)
    {
    	alert("I am also instanciated :"+(++instanciated));
    }	
}