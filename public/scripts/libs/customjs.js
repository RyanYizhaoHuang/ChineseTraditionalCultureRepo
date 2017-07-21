$(function () {
         $('#datetimepicker1').datetimepicker({ 
                 useCurrent: false,
                 defaultDate: $('#hiddenDate').text(),
                 format:"YYYY/MM/DD"
         });
        
        $('.btn-danger').click(function(event){
                if(!confirm("確定刪除資料？")){
                        event.preventDefault();
                }
        });
        // juqery datepicker
        //$("#datetimepicker11").datepicker();

        //alert($('#hiddenDate').text());

        // $('#uploadTime').val(()=>{
        //         var date = $('#hiddenDate').text();
        //         if (date){
        //              return  date.getFullYear();;
        //         }
        // });

        //diable myCarousel
        $('#myCarousel').hide();
        
        $('#treasureItemTabs li a').click(function (e) {
                e.preventDefault()
                $(this).tab('show')
        });

         //caches a jQuery object containing the header element
         var header = $("#fix-header");
         var headerGapFixer = $("#fix-header-gap");
         $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll <= 160) {
            header.removeClass('navbar-fixed-top');
            headerGapFixer.removeClass('navBottomGapFixer')
        } else {
            headerGapFixer.addClass('navBottomGapFixer')
            header.addClass('navbar-fixed-top');
        }
    });

});

