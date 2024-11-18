var cvalue=0;
function inc()
{
    cvalue=cvalue+1
    var data=document.getElementById("num");

    data.innerHTML=cvalue;
}
function dec()
{
    if(cvalue<=0)
    {
        alert("negetive values are not allowed");
    }
    else
    {
        cvalue=cvalue-1
        var data=document.getElementById("num");
        data.innerHTML=cvalue;  
    }
}
function reset()
{
    cvalue=0
    var data=document.getElementById('num');
    data.innerHTML=cvalue;
}


