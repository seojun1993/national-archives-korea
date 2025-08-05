
    $(window).scroll(function(){
        if ( $(window).scrollTop() >=  $(document).height() - $(window).height() - 70){
            $("#downfix").css("bottom","140px");
        }else{
            $("#downfix").css("bottom","0");
        };
    });

    // "전체선택" 체크박스 클릭 시, 하단 item들의 체크박스 전체 선택/해제 로직
    $(document).on('change', '#allCheck', function() {
        var isChecked = $(this).is(':checked');
        // .search_result_body_content 내의 모든 item 체크박스에 적용
        $('.search_result_body_content .item_checkbox input[type="checkbox"]').prop('checked', isChecked);
    });

    // 개별 체크박스 상태에 따라 "전체선택" 체크박스 상태 동기화
    $(document).on('change', '.search_result_body_content .item_checkbox input[type="checkbox"]', function() {
        var total = $('.search_result_body_content .item_checkbox input[type="checkbox"]').length;
        var checked = $('.search_result_body_content .item_checkbox input[type="checkbox"]:checked').length;
        $('#allCheck').prop('checked', total === checked);
    });