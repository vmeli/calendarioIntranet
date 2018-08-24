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
	              "23":{
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

// CONSTRUCCIÓN DE LOS ELEMENTOS PARA LOS DÍAS ESPECÍFICOS
function demo(e) {
	let dataCurrent = document.getElementsByClassName("vcal-header__label")[0].innerText;
	let arraydataCurrent = dataCurrent.split(" ");
	let monthCurrent = arraydataCurrent[0].toLowerCase(); 
	let yearCurrent =  parseInt(arraydataCurrent[1]);
	console.log(data[yearCurrent]);
	let element = e.target;
	if(element.nodeName === 'SPAN') {
		
		element = e.target.parentElement; 
	}
}


// PINTADO DE FECHAS A LA PRIMERA CARGA

// data
function pintarFechas() {
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
					DaysCalendar[i].classList.add("dia-programada");
					DaysCalendar[i].onclick = demo;
				}
			}
		}
	}
}

// PINTADO DE FECHAS CON EL EVENTO ONCLICK
var btnNext = document.querySelector("[data-calendar-toggle='next']");
var btnPrevious = document.querySelector("[data-calendar-toggle='previous']");

pintarFechas();

btnNext.onclick = pintarFechas;
btnPrevious.onclick = pintarFechas;

//console.log(DaysCalendar[4].innerText)
//console.log(data[yearCurrent][monthCurrent][parseInt(DaysCalendar[4].innerText)]);

})




