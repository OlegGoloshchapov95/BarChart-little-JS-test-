var mas = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13];
barChartBuilder(mas, 30, 30);

function barChartBuilder(massife,height,width){
	var barChart = document.createElement('div');
	document.body.insertBefore(barChart, document.body.firstChild);
	//Пусть будет по 10 пикселов каждый столбик  
	var barChartRows = Math.max.apply(Math, massife);
	var barChartColls = massife.length;
	barChart.style.width = barChartColls*width+"px";
	barChart.style.height = barChartRows*height+"px";
	barChart.className = "bartChart";

	var number = document.createElement("span");
	number.style.fontSize = "10px";
	number.style.position = "absolute";
	number.style.left = "-12px";  
	for(var i = 0; i<=barChartRows; ++i){
		number.style.bottom = ((i*height)-5)+"px"; 
		number.innerHTML = i; 
		barChart.insertBefore(number.cloneNode(true), barChart.firstChild);
	} 
	number.style.bottom = "-12px";
	number.style.fontSize = "9px";

	for(i = 1; i<=barChartColls; ++i){
		number.style.left = ((i*width)-width)+"px"; 
		number.innerHTML = i+","; 
		barChart.insertBefore(number.cloneNode(true), barChart.firstChild);
	} 
	var column = document.createElement("div");
	column.style.width=width+"px";
	column.style.display="inline-block";
	column.style.fontSize="0px"; 
	for(i = 1; i<=barChartColls; ++i){ 
		column.style.height = (height*massife[i-1])+"px";
		var color = "red";
		if (massife[i-1]<=10){
			color = "yellow";
		}
		if (massife[i-1]<=5){
			color = "green";
		}
		column.style.backgroundColor=color;
		barChart.appendChild(column.cloneNode(true));
	} 
}

