//let urlApi = "http://vickydev.local/dataJson/data.json";
//function getHttpRequest(url){
//	console.log("entro al getHttpRequest");
//	var xhr = new XMLHttpRequest();
//	console.log(xhr);
//	xhr.open('GET', url, true);

//	xhr.onreadystatechange = function() {
//		console.log("entre onreadystatechange");
//		console.log(xhr.readyState);
//		if (xhr.readyState === 0) {
//			if (xhr.status >= 200 && xhr.status < 400) {
				//Success!
//				var data = JSON.parse(xhr.responseText);
				
//			} else  {
//				console.log("algún error");
//			}
//		}
//	};

//	xhr.send();
//	xhr = null;
//}


window.addEventListener('load', function () {
	vanillaCalendar.init({
		disablePastDays: true
	});
	const data = {
	    "2018":{
	        "enero":{
	              "5":{
	                  "cumpleano":{
	                                "Ruben":{ 
	                                          "cargo":"Supervisor"
	                                  },
	                                  "Ricardo": {
	                                              "cargo":"Asesor"}
	                                  },
	                  "evento":{
	                              "dato":"1"
	                            },
	                  "comunicado":{
	                            "dato":"1"
	                          }
	                    },
	              "16":{
	                  "cumpleano":{
	                                "Ruben":{ 
	                                          "cargo":"Supervisor"
	                                  },
	                                  "Ricardo": {
	                                              "cargo":"Asesor"}
	                                  },
	                  "evento":{
	                              "dato":"1"
	                            },
	                  "comunicado":{
	                            "dato":"1"
	                          }
	                    }
	        },    
	        "agosto":{
	              "5":{
	                  "cumpleano":{
	                                "Ruben":{ 
	                                          "cargo":"Supervisor"
	                                  },
	                                  "Ricardo": {
	                                              "cargo":"Asesor"}
	                                  },
	                  "evento":{
	                              "dato":"1"
	                            },
	                  "comunicado":{
	                            "dato":"1"
	                          }
	                    },
	              "15":{
	                  "evento":{
	                              "dato":"1"
	                            },
	                  "comunicado":{
	                            "dato":"1"
	                          }
	                    },
	              "23":{
	                  "cumpleano":{
	                                "Sandor":{ 
	                                          "cargo":"Supervisor"
	                                  },
	                                  "Nikky": {
	                                              "cargo":"Asesor"}
	                                  },
	                  "evento":{
	                              "dato":"1"
	                            },
	                  "comunicado":{
	                            "dato":"1"
	                          }
	                    },
	              "30":{
	                  "cumpleano":{
	                                "Helena":{ 
	                                          "cargo":"Supervisor"
	                                  },
	                                 "Yesenia": {
	                                              "cargo":"Asesora"}
	                                  },
	                  "evento":{
	                              "dato":"1"
	                            },
	                  "comunicado":{
	                            "dato":"1"
	                          }
	                    }
	        },
	        "setiembre":{
	              "22":{
	                  "cumpleano":{
	                                "Ruben":{ 
	                                          "cargo":"Supervisor"
	                                  },
	                                  "Ricardo": {
	                                              "cargo":"Asesor"}
	                                  },
	                  "evento":{
	                              "dato":"1"
	                            },
	                  "comunicado":{
	                            "dato":"1"
	                          }
	                    },
	              "27":{
	                  "cumpleano":{
	                                "Ruben":{ 
	                                          "cargo":"Supervisor"
	                                  },
	                                  "Ricardo": {
	                                              "cargo":"Asesor"}
	                                  },
	                  "evento":{
	                              "dato":"1"
	                            },
	                  "comunicado":{
	                            "dato":"1"
	                          }
	                    },
	              "30":{
	                  "cumpleano":{
	                                "Ruben":{ 
	                                          "cargo":"Supervisor"
	                                  },
	                                  "Ricardo": {
	                                              "cargo":"Asesor"}
	                                  },
	                  "evento":{
	                              "dato":"1"
	                            },
	                  "comunicado":{
	                            "dato":"1"
	                          }
	                    }
	        },
	        "diciembre":{
	              "5":{
	                  "cumpleano":{
	                                "Ruben":{ 
	                                          "cargo":"Supervisor"
	                                  },
	                                  "Ricardo": {
	                                              "cargo":"Asesor"}
	                                  },
	                  "evento":{
	                              "dato":"1"
	                            },
	                  "comunicado":{
	                            "dato":"1"
	                          }
	                    },
	              "16":{
	                  "cumpleano":{
	                                "Ruben":{ 
	                                          "cargo":"Supervisor"
	                                  },
	                                  "Ricardo": {
	                                              "cargo":"Asesor"}
	                                  },
	                  "evento":{
	                              "dato":"1"
	                            },
	                  "comunicado":{
	                            "dato":"1"
	                          }
	                    }
	        }
	      },
	    "2019": {
	        "enero":{
	              "5":{
	                  "cumpleano":{
	                                "Ruben":{ 
	                                          "cargo":"Supervisor"
	                                  },
	                                  "Ricardo": {
	                                              "cargo":"Asesor"}
	                                  },
	                  "evento":{
	                              "dato":"1"
	                            },
	                  "comunicado":{
	                            "dato":"1"
	                          }
	                    },
	              "16":{
	                  "cumpleano":{
	                                "Ruben":{ 
	                                          "cargo":"Supervisor"
	                                  },
	                                  "Ricardo": {
	                                              "cargo":"Asesor"}
	                                  },
	                  "evento":{
	                              "dato":"1"
	                            },
	                  "comunicado":{
	                            "dato":"1"
	                          }
	                    }
	        },    
	        "agosto":{
	              "5":{
	                  "cumpleano":{
	                                "Ruben":{ 
	                                          "cargo":"Supervisor"
	                                  },
	                                  "Ricardo": {
	                                              "cargo":"Asesor"}
	                                  },
	                  "evento":{
	                              "dato":"1"
	                            },
	                  "comunicado":{
	                            "dato":"1"
	                          }
	                    },
	              "16":{
	                  "cumpleano":{
	                                "Ruben":{ 
	                                          "cargo":"Supervisor"
	                                  },
	                                  "Ricardo": {
	                                              "cargo":"Asesor"}
	                                  },
	                  "evento":{
	                              "dato":"1"
	                            },
	                  "comunicado":{
	                            "dato":"1"
	                          }
	                    }
	        }      
	    }  
	};
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

// PINTADO DE FECHAS CON EL EVENTO ONCLICK
var btnNext = document.querySelector("[data-calendar-toggle='next']");
var btnPrevious = document.querySelector("[data-calendar-toggle='previous']");

pintarFechas("cumpleano");

btnNext.onclick = () => pintarFechas("cumpleano");
btnPrevious.onclick = () => pintarFechas("cumpleano");

})




