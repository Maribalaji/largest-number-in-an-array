var arr=parseInt(prompt("Enter a array length"));
var a=[];
var b=[];
var temp;
var n=parseInt(prompt("Enter to find largest number"));
for(let i=0;i<arr;i++){
	a[i]=parseInt(prompt("Enter a "+(i+1)+"value"));
}
document.write("a="+a+"<br>");
 
for(let i=0;i<arr;i++){
	for(let j=i+1;j<arr;j++){
		if(a[i]<a[j]){
			temp=a[i];
			a[i]=a[j];
			a[j]=temp;
	}
}
b.push(a[i]);
}
document.write("Largest Number:"+b[n-1]);
