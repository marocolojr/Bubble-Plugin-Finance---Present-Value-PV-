function(properties, context) {
var Finance = require('financejs');
var finance = new Finance();
var result = finance.PV(properties.rate, properties.cashflow, properties.numberperiods);
    
return {
        returnresult: result
}

}