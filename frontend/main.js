window.addEventListener('load', function () {
	vanillaCalendar.init({
		disablePastDays: true
	});
	
	let btnNext = document.querySelector("[data-calendar-toggle='next']");
	let btnPrevious = document.querySelector("[data-calendar-toggle='previous']");
	
	let url = "https://api.myjson.com/bins/1bwgfc";
	var request = new XMLHttpRequest();
	request.open('GET', url, true);

	request.onload = function() {
	if (request.status >= 200 && request.status < 400) {
	// Success!
		window.data = JSON.parse(request.responseText);
		pintarFechas("cumpleano");
		btnNext.onclick = () => pintarFechas("cumpleano");
		btnPrevious.onclick = () => pintarFechas("cumpleano");

	} else {
	// We reached our target server, but it returned an error

	}
	};

	request.onerror = function() {
	// There was a connection error of some sort
	};

	request.send();

	// PINTADO DE FECHAS A LA PRIMERA CARGA

	// data
	function pintarFechas(typeEvent) {
		let dataCurrent = document.getElementsByClassName("vcal-header__label")[0].innerText;
		let arraydataCurrent = dataCurrent.split(" ");
		let monthCurrent = arraydataCurrent[0].toLowerCase(); 
		let yearCurrent =  parseInt(arraydataCurrent[1]);

		let DaysCalendar = document.getElementsByClassName("vcal-date");


		if (DaysCalendar) {
			var r = data[yearCurrent];
			for (let i = 0; i < DaysCalendar.length; i++) {
				if (data[yearCurrent][monthCurrent]) {
					if(data[yearCurrent][monthCurrent][parseInt(DaysCalendar[i].innerText)]) {
						if(data[yearCurrent][monthCurrent][parseInt(DaysCalendar[i].innerText)][typeEvent]) {
							DaysCalendar[i].classList.add("dia-programada");
							DaysCalendar[i].onclick = demo;
						}
					}
				}
			}
		}
	}

	// CONSTRUCCIÓN DE LOS ELEMENTOS PARA LOS DÍAS ESPECÍFICOS
	function demo(e) {
		let dataCurrent = document.getElementsByClassName("vcal-header__label")[0].innerText;
		let arraydataCurrent = dataCurrent.split(" ");
		let monthCurrent = arraydataCurrent[0].toLowerCase(); 
		let yearCurrent = parseInt(arraydataCurrent[1]);
		let parentBlockElementAdd = document.getElementsByClassName("wrapperTypeEvent")[0]
		let typeEvent = parentBlockElementAdd.getAttribute("data-wrapper");
		let element = e.target;
		//console.log(element.nodeName,"click");
		if(element.nodeName === 'SPAN') {
			element = e.target.parentElement;
		}
		let indice = parseInt(element.innerText);
		console.log(typeEvent);
		if(data[yearCurrent][monthCurrent][indice][typeEvent]) {
			let blockType = setBlockTypeOne(data[yearCurrent][monthCurrent][indice][typeEvent]);
			parentBlockElementAdd.innerHTML = blockType;
		}
	}

	// CREANDO TEMPLATE
	function setBlockTypeOne(jsonEventOfDay) {
		let element = "";
		for(let i in jsonEventOfDay) {
			if (jsonEventOfDay.hasOwnProperty(i)) {
				element += '<div>'
				element += '<h2>' + i + '</h2>';
				element += '<p>' + jsonEventOfDay[i]["cargo"] + '</p>';
				element += '</div>'
			}
		}
		return element;
	}

})




