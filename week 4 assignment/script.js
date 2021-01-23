var names=new Array();
names[0]="Karma";
names[1]="Jime";
names[2]="Jamba";
names[3]="jepa";
names[4]="kinzo";
names[5]="yarki";
names[6]="longringbu";
names[7]="dorma";
names[8]="pako";
names[9]="jambalazangmo";


for (var i = 0; i < names.length; i++) 
{
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j')
	{
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}