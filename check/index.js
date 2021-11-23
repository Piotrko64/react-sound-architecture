let array=["a","b"];
let arrayempty=[]
let arrayobject=[{
title:"first",
ar:["a","b","f"]
},
{
    title:"second",
    ar:["c","d"]
},
{
    title:"third",
    ar:["a","b","c","e"]
}];
let thisthis;
for(let i=0;i<=array.length-1 ;i++){
    thisthis=array[i]
    for(let t=0; t<=arrayobject.length-1; t++){
 if(arrayobject[t].ar.indexOf(thisthis)){
arrayobject.push(arrayobject[t])
 }

    }
    console.log(arrayempty)
}
