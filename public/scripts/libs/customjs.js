$(function () {
         $('#datetimepicker1').datetimepicker({ 
                 useCurrent: false,
                 defaultDate: $('#hiddenDate').text(),
                 format:"YYYY/MM/DD"
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
});

