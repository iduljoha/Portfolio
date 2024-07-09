$(document).ready(function(){
    $('#name,#sclass,#secondary')
});

/*========================Window Event  Listener for Submit Button Click*/ 
/**load()
 * unload()
 * resize()
 * scroll()
 */
$(document).ready(function () {
    $(window).scroll(function () {
        console.log("Scroll event occurred");
    })
      

});



    $(document).ready(function () {
        $('#slidetoggle').click(function () {
            $('#tbl1').slideToggle(2000);
        });

    $('#slidetoggle1').click(function () {
        $('#tbl2').slideToggle(2000);
    });

            $('#slidetoggle2').click(function () {
        $('#tbl3').slideToggle(2000);
    });
});
  