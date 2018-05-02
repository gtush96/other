var rect=require('./clback');
function solveRect(l,b){
	//console.log("Values"+l+" and "+b);
	rect(l,b,(err,clback)=>{
		if(err)
		{
			console.log("ERROR:",err.message);
		}
		else
		{
			console.log("Area of "+l+" And "+b+" is:"+clback.area(l,b));
			console.log("Perimeter of "+l+" And "+b+" is:"+clback.perimeter(l,b));
		}});}
console.log("After call to Rect");
solveRect(2,4);
solveRect(3,5);
solveRect(0,4);
solveRect(-3,5);