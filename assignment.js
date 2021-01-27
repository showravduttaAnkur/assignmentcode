//first problem
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        console.log("inavild input");
    }
    else {
        var meter = kilometer * 1000.00;
        return (meter);

    }
}
//2nd problem

function budgetCalculator(watch, mobile, labtop) {

    if (watch < 0 || mobile < 0 || labtop < 0) {
        console.log("inavild input");
    }
    else if (watch == null || mobile == null || labtop == null) {
        console.log("Input missing");
    }
    else {
        var watchPrice = watch * 50;
        var mobilePrice = mobile * 100;
        var labtopPrice = labtop * 500;
        var total = watchPrice + mobilePrice + labtopPrice;
        return (total);
    }

}

//3rd problem
function hotelCost(days) {
    if (days > 0 && days <= 10) {
        var pernight = days * 100;
        return (pernight);
    }
    else if (days >= 11 && days <= 20) {
        var pernight1 = (100 * 10) + (days - 10) * 80;
        return (pernight1);
    }
    else if (days >= 21) {
        var pernight2 = (100 * 10) + (10 * 80) + (days - 20) * 50;
        return (pernight2);
    }
    else {
        console.log("invalid input");
    }
}
//4th problem
function megaFriend(arr) {
    var wordName = "";
    for ( i = 0; i < arr.length; i++) {
      if (wordName.length < arr[i].length) {
        wordName = arr[i];
      }
    }
    return wordName;
  }
 