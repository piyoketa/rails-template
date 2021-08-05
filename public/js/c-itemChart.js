
$(function(){
    if (!$('#c-itemChart_remove2').length) {
        $('#c-itemChart_remove1').on('click',function(){
            $('#c-itemChart_product1').hide();
            $('#c-itemChart_table').hide();
            $('#c-itemChart_product_none').show();
            if (!$('#confirmation').length) {
                $('#confirmation').hide();
            }
        });
    }
    else {
        $('#c-itemChart_remove1').on('click',function(){
            $('#c-itemChart_product1').hide();
    
            if ($('#c-itemChart_product1').css("display") == "none" && $('#c-itemChart_product2').css("display") == "none") {
                $('#c-itemChart_table').hide();
                $('#c-itemChart_product_none').show();
                if (!$('#confirmation').length) {
                    $('#confirmation').hide();
                }
            }
        });
        $('#c-itemChart_remove2').on('click',function(){
            $('#c-itemChart_product2').hide();
    
            if ($('#c-itemChart_product1').css("display") == "none" && $('#c-itemChart_product2').css("display") == "none") {
                $('#c-itemChart_table').hide();
                $('#c-itemChart_product_none').show();
                if (!$('confirmation').length) {
                    $('#confirmation').hide();
                }
            }
        });
    }
});
