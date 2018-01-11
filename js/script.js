//Lesson 1


function myFunction(){
	var input = document.getElementById("inp").value;
	var arr = [];
	for(var i = 0; i < input; i++){
		var x = Math.floor(Math.random()*11);
		arr.push(x);
	}
	document.getElementById("p").style.fontSize = 55 + "px";
	var min = arr[0];
	var max = arr[0];
	for(var j = 0; j < input; j++){
		if(arr[j] < min){
			min = arr[j];
		};
		if(arr[j] > max){
			max = arr[j];
		}

	}
	document.getElementById("p").innerHTML = "[" + arr.join(" ") + "]" + " " +  "Min -" + min + " " + "Max - " + max;
};



//Lesson 2

/*function myFunction1(){
	var input1 = document.getElementById("inp1").value;
	var arr1 = [];
		for(var j = 0; j < input1; j++){
			var arr2 = []; 
			for(var i = 0; i < input1; i++){
			var y = Math.floor(Math.random()*15);
			arr2.push(y);
			}
			arr1[j]=arr2 ;
			document.getElementById("p1").innerHTML += arr2.join(" ") + "<br>";
			for (var k in arr2){
				var arrParz = [2, 3, 5, 7, 11, 13]
				for(var n in arrParz){
					if(arr2[k] == arrParz[n]){
						document.getElementById("red").innerHTML += arr2[k] + " ";
						document.getElementById("red").style.fontSize = 50 + "px";
						document.getElementById("red").style.color = "red"
					}
				}
			}
		}
			

		document.getElementById("p1").style.fontSize = 55 + "px";
}
*/

function myFunction1(){
	document.getElementById("red").style.fontSize = 50 + "px";
	document.getElementById("red").style.color = "red"
	document.getElementById("p1").style.fontSize = 55 + "px";
	var input1 = document.getElementById("inp1").value;
	var arr1 = [];
	var arrBig = [];
		for(var j = 0; j < input1; j++){
			var arr2 = []; 
			for(var i = 0; i < input1; i++){
			var y = Math.floor(Math.random()*45);
			arr2.push(y);
			}
			arr1[j]=arr2 ;
			arrBig.push(arr2);
			document.getElementById("p1").innerHTML += arr2.join(" ") + "<br>";

		}
		var arrParz = []
		myCycle:
		for (var n = 2; n <= 50; n++){
			//qani vor 1@ ev n@ bajanarar en   <=2i<=n-1
		for(var i = 2; i <= n-1; i++){
				if(n%i == 0){
					continue myCycle;
				};
			};
			arrParz.push(n);
		};
		var arrRed = [];
		for(var i in arrBig){
			for(var j in arrBig[i]){
				for(var k in arrParz){
					if(arrBig[i][j] == arrParz[k]){
						arrRed.push(arrBig[i][j]);
					}
				}
			}
		};
		document.getElementById("red").innerHTML += arrRed.join(" ") + " ";
		document.getElementById("red").style.fontSize = 50 + "px";
		document.getElementById("red").style.color = "red"

}

		
	







// Lesson 3


function myFunction2(){
	var input2 = Number(document.getElementById("inp2").value);
	var arr0 = [];
	var res = 1;
	if(input2 > 0){
		while(input2 > 0){
		res = input2%2;
		arr0.push(res);
		input2 = Math.floor(input2/2);
		}	
	}else{
		alert("Enter a natural number");
	}
	var arrReverse = arr0.reverse()
	document.getElementById("p2").innerHTML = arrReverse.join(" ") ;
	document.getElementById("p2").style.fontSize = 50 + "px";
	document.getElementById("p2").style.color = "cyan";
};
