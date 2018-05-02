var cube=require('./cube');
var sphere=require('./sphere');
function calCube(a)
{
	if(a<=0)
		{
			console.log("side  can't be zero or negative");
		}
		else
		{
			console.log("area cube: "+cube.area(a));
			console.log("volume cube: "+cube.volume(a));
		}
}
function calSphere(r)
{
	if(r<=0)
		{
			console.log("radius  can't be zero or negative");
		}
		else
		{
			console.log("area sphere: "+sphere.area(r));
			console.log("volume sphere: "+sphere.volume(r));
		}
}
calCube(2);
calSphere(5);