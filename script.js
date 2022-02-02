$(document).ready(function(){
	let status=["no","no","no","no","no","no","no"];
	for(let n=1; n<=7; n++)
	{
		$("#j"+n).click (function() {
			
			if(status[n]=="no")
	
			{	
				$("#u"+n).css("visibility", "visible");
			
			
		status[n]="yes";
			}
	
	else{
		$("#u"+n).css("visibility", "hidden");
		status[n]="no";
	}
			
		});
	}
	
	});

