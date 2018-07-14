$(function (){


//Function: calculate sum of an array
  function add (a,b){
    return a + b;
  }

// ASSET
  var assetArray = [];
  var assetValue;
//Function: calculate sum of Asset Array
  function sumAsset () {
    assetValue = assetArray.reduce(add, 0);
    $('#total-asset').html("$" + assetValue);
  }


//Asset: Onclick Function
  var assetName = $('.asset-name').val();
  var assetAmount = $('.asset-amount').val();

  $(".add-asset").on('click', function(event){
    if (  $('.asset-name').val() == "" || $('.asset-amount').val() == "" ) {
      alert ('Please enter your ASSET NAME and AMOUNT!');
      return false;
    } else {
      var assetName = $('.asset-name').val();
      var assetAmount = $('.asset-amount').val();
      var assetHtml = "<li><span class='asset-text'>" + assetName +': $' + "</span>" + "<span class='asset-number'>" + assetAmount + "</span><span class='asset-remove'></span></li>";

      $('.asset-list').append(assetHtml);
      $('.asset-name').val('');
      $('.asset-amount').val('');

      var assetNumber = parseFloat(assetAmount);
      assetArray.push(assetNumber);
      sumAsset(assetArray);
      event.preventDefault();

    }

  })

  //Remove Asset Function
  var selectedAsset;
  var selectedAssetNumber;

   $('.asset-list').on('click', '.asset-remove', function (event) {
    selectedAsset = $(event.currentTarget).parent();

    var selectedHtmlAsset = selectedAsset.find($(".asset-number")).text();
    selectedAssetNumber = parseFloat (selectedHtmlAsset);

    if (selectedAsset.remove()) {
      for (var i=0; i< assetArray.length; i++) {
        if (selectedAssetNumber === assetArray[i]) {
          assetArray.splice(i, 1);
          sumAsset();
          return assetArray;
        }
      }

    }

  })

// LIABILITY
  var liabilityArray = [];

 //Function: calculate sum of Liability Array
 var liabilityValue;
 function sumLiability () {
    liabilityValue = liabilityArray.reduce(add, 0);
   $('#total-lia').html("$" + liabilityValue);
 }

 //Liability: Onclick Function
 var liabilityName;
 var liabilityAmount;
  $(".add-liability").on('click', function(event){
    if ( $('.liability-name').val() == "" || $('.liability-amount').val() == "" ) {
      alert ('Please enter your LIABILITY NAME and AMOUNT!');
      return false;
    } else {
      liabilityName = $('.liability-name').val();
      liabilityAmount = $('.liability-amount').val();
      var assetHtml = "<li><span class='liability-text'>" + liabilityName +': $'+ "</span>" + "<span class='liability-number'>" + liabilityAmount + "</span><span class='liability-remove'></span></li>";
      $('.liability-list').append(assetHtml);

      $('.liability-name').val('');
      $('.liability-amount').val('');

      var liabilityNumber = parseFloat(liabilityAmount);
      liabilityArray.push(liabilityNumber);
      sumLiability(liabilityArray);
      event.preventDefault();
    }
  });

  //Remove Liability Function
  var selectedLiability;
  var selectedLiabilityNumber;
  $('.liability-list').on('click', '.liability-remove', function(event){
    selectedLiability = $(event.currentTarget).parent();
    var selectedHtmlLiability = selectedLiability.find($(".liability-number")).text();
    selectedLiabilityNumber = parseFloat (selectedHtmlLiability);

    if (selectedLiability.remove()) {
      for (var i=0; i< liabilityArray.length; i++) {
        if (selectedLiabilityNumber === liabilityArray[i]) {
          liabilityArray.splice(i, 1);
          sumLiability();
          return liabilityArray;
        }
      }
    }
  })

  // CASHFLOW FUNCTION
 $('.calculate').on('click', function (event) {
    var totalCashFlow = assetValue - liabilityValue;

    var cashHtml = $('#cash-flow-amount').html("$" + totalCashFlow);
    if(totalCashFlow < 0){
      $('#cash-flow-amount').css("color", "red");
    } else {
      $('#cash-flow-amount').css("color", "green");
    }
  })

})
