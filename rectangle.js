exports.perimeter=(x,y)=>(2*(x+y));
exports.area=(x,y)=>(x*y);

module.exports=(x,y,callback)=>{
	if(x<=0||y<=0)
	{
		setTimeout(()=>
		callback(),2000);
		console.log("Rectangle dimenstions are negative");
	}
	else{
		
	}
}




