forecast_url = "http://sf-pyw.mosyag.in/m04/api/forecasts"


$("#first_paragraph").click(function() {
	
	$.getJSON(forecast_url, function (data) {
		forecast = data["prophecies"]
	})
	set_secret_message(forecast)


}) 


function set_secret_message(msg) {
	p = $("#divs1")
	p.html(forecast[0]);
	p = $("#divs2")
	p.html(forecast[1]);
	p = $("#divs3")
	p.html(forecast[2]);
	p = $("#divs4")
	p.html(forecast[3]);
	p = $("#divs5")
	p.html(forecast[4]);
	p = $("#divs6")
	p.html(forecast[5]);
}