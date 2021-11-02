$(document).ready(function(){
	var text1 = "Merhaba,";
	var text2 = "Ben Anılcan Boğa,";
	var text3 = "Yazılım Mühendisiyim.";
	var text4 = ".";
	var text5 = "";


	var text1div = document.getElementById('text1');
	sonuc1 = text1.split("");
	var time1 = 0;
	$(sonuc1).each(function(key, value) {
	    setTimeout(function() {
	        text1div.innerHTML += value;
	    }, time1);
	    time1 += 150;
	});
	

	var text1suresi = text1.length;

	var text2div = document.getElementById('text2');
	sonuc2 = text2.split("");
	var time2 = text1suresi * 150;
	$(sonuc2).each(function(key, value) {
	    setTimeout(function() {
	        text2div.innerHTML += value;
	    }, time2);
	    time2 += 150;
	});

	var text2suresi = text2.length;

	var text3div = document.getElementById('text3');
	sonuc3 = text3.split("");
	var time3 = (text1suresi * 150) + (text2suresi * 150);
	$(sonuc3).each(function(key, value) {
	    setTimeout(function() {
	        text3div.innerHTML += value;
	    }, time3);
	    time3 += 150;
	});

	var text3suresi = text3.length;

	var text4div = document.getElementById('text4');
	sonuc4 = text4.split("");
	var time4 = (text1suresi * 150) + (text2suresi * 150) + (text3suresi * 150);
	$(sonuc4).each(function(key, value) {
	    setTimeout(function() {
	        text4div.innerHTML += value;
	    }, time4);
	    time4 += 150;
	});

	var text4suresi = text4.length;

	var text5div = document.getElementById('text5');
	sonuc5 = text5.split("");
	var time5 = (text1suresi * 150) + (text2suresi * 150) + (text3suresi * 150) + (text4suresi * 150);
	$(sonuc5).each(function(key, value) {
	    setTimeout(function() {
	        text5div.innerHTML += value;
	    }, time5);
	    time5 += 150;
	});

});


$(".icon1").click(function(){
	window.close();
});

$(".icon2").click(function(){
	alert("");
});

$(".icon3").click(function(){
	alert("");
});

function boslink(){
	alert("");
}