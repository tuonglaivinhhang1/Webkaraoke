$(document).ready(function()
{
	$("#Moreinfo").click(function()
	{
		$(".more").fadeToggle("slow");
		$("button.Lessinfo").fadeToggle("slow");
	});
	$("button.Lessinfo").click(function(){
		$(".more").hide();
		$("button.Lessinfo").hide();

	});

	$(".firstsong").click(function()
	{
		event.preventDefault();
		var source=$(this).attr("href");
		
		
		$(".audioplayer").attr("src",source);
		$(".audioplayer")[0].play();


		$(".contentSong").text(function(i,origText)
		{
			var song=$(".R2 p:first").text();
			var singer=$(".R2 p:eq(1)").text();//không hỗ trợ p:second trong jquery
			//hàm :eq(index) lấy phần tử số mấy


			return song+" - "+singer;
		});


		$(".R2").css("background","#87D9F5");
		for(var i=2;i<=4;i++)
		{
			if(i==2) continue;
			else{
				let tagClass="."+"R"+i;
				$(tagClass).css("background","none");
			}
		}
		
	



	});

	$(".secondsong").click(function()
	{
		event.preventDefault();
		var source=$(this).attr("href");
		
		
		$(".audioplayer").attr("src",source);
		$(".audioplayer")[0].play();


		$(".contentSong").text(function(i,origText)
		{
			var song=$(".R3 p:first").text();
			var singer=$(".R3 p:eq(1)").text();//không hỗ trợ p:second trong jquery
			//hàm :eq(index) lấy phần tử số mấy


			return song+" - "+singer;
		});
		

		$(".R3").css("background","#87D9F5");
		for(var i=2;i<=4;i++)
		{
			if(i==3) continue;
			else{
				let tagClass="."+"R"+i;
				$(tagClass).css("background","none");
			}
		}

	});

	$(".thirdsong").click(function()
	{
		event.preventDefault();
		var source=$(this).attr("href");
		
		
		$(".audioplayer").attr("src",source);
		$(".audioplayer")[0].play();


		$(".contentSong").text(function(i,origText)
		{
			var song=$(".R4 p:first").text();
			var singer=$(".R4 p:eq(1)").text();//không hỗ trợ p:second trong jquery
			//hàm :eq(index) lấy phần tử số mấy


			return song+" - "+singer;
		});
		
		$(".R4").css("background","#87D9F5");
		for(var i=2;i<=4;i++)
		{
			if(i==4) continue;
			else{
				let tagClass="."+"R"+i;
				$(tagClass).css("background","none");
			}
		}
	});



});

	