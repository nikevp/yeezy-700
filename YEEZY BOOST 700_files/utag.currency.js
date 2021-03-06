var tealiumiq_currency = {
    ts:"201803100100",
    rates:{"BZD":2.010067,"YER":250.3,"SLL":7663.676094,"ERN":14.996667,"NGN":360,"CRC":569.968642,"VEF":35235,"LAK":8300,"CLP":602.3,"DZD":113.75,"CUC":1,"BYN":1.957139,"SZL":11.815,"MOP":8.073386,"MUR":32.999,"WST":2.534638,"LRD":130.85,"MMK":1337.335206,"KGS":68.159552,"PYG":5458.278363,"IDR":13784.580333,"GTQ":7.382895,"CAD":1.281049,"AWG":1.784998,"TTD":6.730336,"PKR":110.7259,"UZS":8182.5,"XCD":2.70255,"VUV":104.854578,"XOF":532.973398,"STN":19.955,"KMF":399.6,"AZN":1.68825,"XPD":0.00100104,"MNT":2392.166667,"ANG":1.785057,"LBP":1513,"KES":101.1435,"GBP":0.72197,"BTN":65.11413,"CDF":1616,"CLF":0.0226,"SEK":8.24865,"AFN":69.32,"MRU":35.36,"KZT":320.92,"DKK":6.0487,"AMD":480.805377,"SCR":13.452991,"FJD":2.036497,"SHP":0.72197,"ALL":107.1,"TOP":2.219389,"ZMW":9.676,"UGX":3647.633069,"OMR":0.38499,"DJF":177.075,"BND":1.315451,"TND":2.396398,"SBD":7.765094,"GHS":4.44,"GNF":9005,"BOB":6.910011,"CVE":89.8,"IMP":0.72197,"ARS":20.2355,"GMD":47.24,"MWK":725.935,"BDT":83.295,"KWD":0.300212,"EUR":0.812513,"CHF":0.951205,"XAG":0.06023617,"SRD":7.468,"DOP":49.15,"PEN":3.259221,"KPW":900,"SVC":8.75134,"SGD":1.3166,"TWD":29.255,"USD":1,"BGN":1.58809,"MAD":9.195,"SSP":130.2634,"GGP":0.72197,"SAR":3.75045,"AUD":1.273723,"KYD":0.833412,"KRW":1065.85,"TRY":3.811111,"GIP":0.72197,"XAU":0.0007556,"NAD":11.81375,"CZK":20.694117,"JMD":128.18295,"BSD":1,"UYU":28.345388,"MXN":18.602921,"BTC":0.000108125322,"BWP":9.593136,"GYD":206.84023,"LYD":1.33,"THB":31.311,"EGP":17.613,"MKD":50.0335,"SDG":18,"AED":3.673027,"JOD":0.709001,"JPY":106.78059638,"ZAR":11.815455,"HRK":6.0424,"AOA":212.908,"RWF":856,"CUP":25.5,"BBD":2,"PGK":3.195,"LKR":155.575181,"RON":3.785302,"JEP":0.72197,"PLN":3.40875,"TJS":8.823895,"IQD":1183,"MDL":16.612772,"MYR":3.9125,"CNH":6.327806,"CNY":6.331312,"INR":64.9499,"FKP":0.72197,"NIO":31.15,"PHP":51.997,"HNL":23.61012,"HKD":7.836684,"NZD":1.373061,"BRL":3.257803,"RSD":95.82,"SOS":585,"MZN":62.008262,"NOK":7.7797,"GEL":2.44701,"ISK":100.03,"ILS":3.4436,"LSL":11.8625,"HUF":253.294,"UAH":26.109,"RUB":56.6577,"BMD":1,"IRR":37447.718798,"MGA":3085,"MVR":15.450233,"QAR":3.641481,"VND":22760.168807,"MRO":355,"NPR":104.195386,"ZWL":322.355011,"COP":2867,"TZS":2255.05,"BIF":1781,"XPT":0.00103575,"SYP":514.98999,"KHR":4000.5,"HTG":64.333745,"BHD":0.376984,"XDR":0.690152,"XAF":532.973398,"STD":19863.72667,"PAB":1,"BAM":1.5876,"TMT":3.499986,"ETB":27.56,"XPF":96.958557},
    convert:function(a,f,t){
		// Convert that value to an array
		var isString = typeof a == "string",
			converted = isString ? [a] : a;

		// Iterate over the values to convert each one
		for (var i=0; i<converted.length; i++) {
			converted[i] = parseFloat(converted[i]);
			f = f.toUpperCase();
			t = t.toUpperCase();
			if (converted[i] > 0 && this.rates[f] > 0 && this.rates[t] > 0){
				var v = converted[i] / this.rates[f] * this.rates[t];
				converted[i] = v.toFixed(2);
			}
		}

		// Return the value we accepted
		if (isString) return converted[0];
		else return converted;
    }
}