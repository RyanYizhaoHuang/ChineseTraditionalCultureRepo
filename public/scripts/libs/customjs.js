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
});

