jQuery(function($){

	/* gnb 기본*/
	$("#menu > li").on("mouseenter", function(){
		$("#menu > li").each(function(index){
			$(this).find(".subopen").css("display", "none");
		});
		$(this).find(".subopen").css("display", "block");
	}).on("mouseleave", function(){
		$("div.subopen ol.onedepth > li").each(function(index){
			$(this).find(".twodepth").css("display", "none");
			$(this).removeClass("select");
		});
		$("#menu > li").each(function(index){
			$(this).find(".subopen").css("display", "none");
		});
	});

	/* gnb 2depth */
	$("div.subopen ol.onedepth > li > a").click(function(event){
		event.preventDefault();
		$("div.subopen ol.onedepth > li").each(function(index){
			$(this).find(".twodepth").css("display", "none");
			$(this).removeClass("select");
		});
		$(this).parent().find(".twodepth").css("display", "block");
		$(this).parent().addClass("select");	
	});
	
	/* gnb 탭키이동*/
	$("#menu > li > a").focusin(function(){
		$("#menu > li").each(function(index){
			$(this).find(".subopen").css("display", "none");
		});
		$(this).parent().find(".subopen").css("display", "block");
	});
	$("#menu > li:last-child div.subopen ul li:last-child a").focusout(function(){//tab키이동시 맨끝 메뉴
		$("div.subopen ol.onedepth > li").each(function(index){
			$(this).removeClass("select");
		});
		$("#menu > li").each(function(index){
			$(this).find(".subopen").css("display", "none");
		});
	});

	/* 좌측메뉴중 검색결과제한 토글 */
	if ( $("div.limit").length > 0 ){
		$("div.limit > div > a").click(function(event){
			event.preventDefault();
			$($(this).attr("href")).toggle();
			if ( $(this).parent().attr("class") == "on" ){
				$(this).parent().removeClass("on");
				$(this).attr("title",$(this).attr("title").replace("닫힘", "펼침"));
			}else{
				$(this).parent().addClass("on");
				$(this).attr("title",$(this).attr("title").replace("펼침", "닫힘"));
			};
		});
		
	};

	/* 좌측메뉴중 발행기관별 뎁스조정 토글 */
	if ( $("div.organ").length > 0 ){
		$("div.organ ol.depth1 > li > a").click(function(event){
			event.preventDefault();
			if ( $(this).parent().attr("class") == "on" ){
				$(this).parent().removeClass("on");
				$(this).parent().addClass("off");
			}else{
				$("div.organ ol.depth1 > li").each(function(index){
					if ( $(this).attr("class") == "on" ){
						$(this).removeClass("on");
						$(this).addClass("off");
					};			
				});
				$(this).parent().removeClass("off");
				$(this).parent().addClass("on");
			};
		});
	};

	/* 기록물 목록 내 상세정보와 목차정보 toggle */
	$("#recordlist .list > li ul.infotab li > a:first-child").click(function(event){
		event.preventDefault();
		if ( $(this).parent().attr("class") == "on" ){
			$(this).parent().parent().find("li").each(function(index){
				$(this).removeClass("on");
				$(this).addClass("off");		
			});
		}else{
			$(this).parent().parent().find("li").each(function(index){
				$(this).removeClass("on");
				$(this).addClass("off");		
			});
			$(this).parent().removeClass("off");
			$(this).parent().addClass("on");
		};		
	});

	/* 기록물 목록 하단bar  fix위치 조절 _ 스크롤바닥에 오면 fix값 변경*/
	if ( $("div#subwrap").length > 0 ){
		$(window).scroll(function(){
			if ( $(window).scrollTop() >=  $(document).height() - $(window).height() - 80){
				$("div#recordlist #downfix").css("bottom","100px");
			}else{
				$("div#recordlist #downfix").css("bottom","0");
			};
		});
	};//end if

	/* 상세검색 레이어 팝업 */
	$("#menu > li:first-child + li > a").click(function(event){
		event.preventDefault();
		$("#detailsearch_mask").fadeTo(400, 0.7);
		$($(this).attr("href")).css("display","block");		
	});
	$("#mainbanner > div:first-child p > a").click(function(event){
		event.preventDefault();
		$("#detailsearch_mask").fadeTo(400, 0.7);
		$($(this).attr("href")).css("display","block");		
	});
	$("#detailsearch a.close").click(function(event){
		event.preventDefault();
		$("#detailsearch_mask").hide();
		$($(this).attr("href")).css("display","none");		
	});
	
//	$("div.loading_mask").css('display', 'none');
	
});//jQuery end


/*window open */
function win_pop (a, wsize, hsize){
	window.open(""+a+"","","status=yes,menubar=no,width="+wsize+",height="+hsize+",left=0,top=0,scrollbars=yes,resize=yes");	
}


/**
 * 2015 add 선택한 자료만 엑셀다운로드
 * @param frm
 * @param obj
 */
function excelDown(frmNm, item, type) {
	var rtn = checkList(frmNm, item, "");
	if ( rtn ) {
		$("form[name="+frmNm+"]").attr("action", "/next/publishment/listDown.do");
		$("#flag").val("E");
		$("form[name="+frmNm+"]").submit();
		$("#flag").val("");
		
		var url = "listSearchResult.do";
		if ( type == "style" ) {
			url = "styleSearch.do";
		}  else if ( type == "organ" ) {
			url = "organSearch.do";
		} else {
			url = "listSearchResult.do";
		}
		$("form[name="+frmNm+"]").attr("action", "/next/publishment/"+url);
	}
}

/**
 * 2015 add 선택한 자료만 화면인쇄
 * @param frm
 * @param obj
 */
function printCheck(frmNm, item, type) {
	var rtn = checkList(frmNm, item, "");
	if ( rtn ) {
		winPrint = window.open("about:blank","winPrint","status=yes,menubar=no,width=720,height=470,left=0,top=0,scrollbars=yes,resize=yes");	
		$("form[name="+frmNm+"]").attr("action", "/next/publishment/listPrint.do");
		$("form[name="+frmNm+"]").attr("target", "winPrint");
		$("form[name="+frmNm+"]").submit();
		
		var url = "listSearchResult.do";
		if ( type == "style" ) {
			url = "styleSearch.do";
		}  else if ( type == "organ" ) {
			url = "organSearch.do";
		} else {
			url = "listSearchResult.do";
		}
		$("form[name="+frmNm+"]").attr("target", "_self");
		$("form[name="+frmNm+"]").attr("action", "/next/publishment/"+url);
	}
}

/**
 * 2015 Add 
 * @param param
 * @param paramVal
 */
function detailList(param, paramVal) {
	$("#page").val(1);
	if ( param == "O" ) {
		$("input[name=searchLimitAVal]").val("");
		$("input[name=searchLimitOVal]").val(paramVal);
	}
	if ( param == "D" ) {
		$("input[name=searchLimitAVal]").val("");
		$("input[name=searchLimitDVal]").val(paramVal);
	}
	if ( param == "P" ) {
		$("input[name=searchLimitAVal]").val("");
		$("input[name=searchLimitPVal]").val(paramVal);
	}
	if ( param == "K" ) {
		$("input[name=searchLimitAVal]").val("");
		$("input[name=searchLimitKVal]").val(paramVal);
	}
	if ( param == "C" ) {
		$("input[name=searchLimitAVal]").val("");
		$("input[name=searchLimitOVal]").val("");
		$("input[name=searchLimitDVal]").val("");
		$("input[name=searchLimitPVal]").val("");
		$("input[name=searchLimitKVal]").val("");
		$("input[name=searchLimitVal]").val(paramVal);
	}
	if ( param == "KO" ) {
		$("input[name=searchLimitVal]").val(paramVal);
	}
	if ( param == "S" ) {
		$("input[name=searchLimitAVal]").val("");
		$("input[name=styleCdArr]").val(paramVal);
	}
	if ( param == "A" ) {
		$("input[name=searchLimitOVal]").val(paramVal);
		$("input[name=searchLimitDVal]").val(paramVal);
		$("input[name=searchLimitPVal]").val(paramVal);
		$("input[name=searchLimitKVal]").val(paramVal);
		$("input[name=searchLimitAVal]").val(param);
	}
	$("form[name=searchForm]").submit();
}

/**
 * 2015 Add 
 * @param param
 * @param paramVal
 */
function detailStyleList(param, paramVal) {
	$("#page").val(1);
	if ( param == "K") {
		$("input[name=searchLimitAVal]").val("");
		$("input[name=searchLimitKVal]").val(paramVal);
	}
	if ( param == "S" ) {
		$("input[name=searchLimitAVal]").val("");
		$("input[name=searchLimitOVal]").val("");
		$("input[name=searchLimitDVal]").val("");
		$("input[name=searchLimitPVal]").val("");
		$("input[name=searchLimitKVal]").val("");
		$("input[name=searchStyle]").val(paramVal);
	}
	$("form[name=searchForm]").submit();
}

/**
 * 2015 add
 */
function styleKikwanMore() {
	var param = $("form[name=searchForm]").serialize();
    $.ajax({
           url         	: "/next/publishment/kikwanMore.do",
           type		: "post", 
           data		: param,
           dataType    : "json",
           success     : function(data, textStatus, jqXHR){
        	   var list = data["rtnKikwan"];
        	   var contents = "<li><a onclick=\"detailStyleList('S','')\">전체</a></li>";
               for (var i = 0; i < list.length; i++ ) {
            	   contents += "<li><a onclick=\"detailStyleList('K','" + list[i].cod_id + "')\">" + list[i].cod_nm + "<span>(" + list[i].cnt + ")</span></a></li>";
               }
               $("#sorting_organ").html(contents);
               $("#sorting_organ").show();
           },
           error : function(textStatus, jqXHR){
               alert(jqXHR.message);
           }
       }); 
}

function kikwanMore() {
	var param = $("form[name=searchForm]").serialize();
    $.ajax({
           url         	: "/next/publishment/kikwanMore.do",
           type		: "post", 
           data		: param,
           dataType    : "json",
           success     : function(data, textStatus, jqXHR){
        	   var list = data["rtnKikwan"];
        	   var contents = "";
               for (var i = 0; i < list.length; i++ ) {
            	   contents += "<li><a onclick=\"detailList('K','" + list[i].cod_id + "')\">" + list[i].cod_nm + "<span>(" + list[i].cnt + ")</span></a></li>";
               }
               $("#sorting_organ").html(contents);
               $("#sorting_organ").show();
           },
           error : function(textStatus, jqXHR){
               alert(jqXHR.message);
           }
       }); 
}

/**
 * 2015 add
 * @param item
 */
function hideItem(item) {
	$("#kikwanDataTitle").html("<a href=\"#kikwanData\" title=\"발행기관별 펼침\" onclick=\"kikwanMore()\">발행기관별</a>");
	$("#"+item).hide();
}


/**
 * 2015 add
 * @param cur
 */
function styleAllCheck(cur) {
	if ( cur ) {
		$("input:checkbox[name='styleCdArr']").attr("checked", true);
	} else {
		$("input:checkbox[name='styleCdArr']").attr("checked", false);
	}
}

function styleCheck(cur) {
	if ( cur ) {
		$("input:checkbox[name='styleCdArrAll']").attr("checked", false);
	} else {
		$("input:checkbox[name='styleCdArrAll']").attr("checked", true);
	}
}

/**
 * 2015 add
 * @param code
 * @param bsid
 * @param dsid
 * @param no
 * @param gubun
 */
function detailInfo(code, bsid, dsid, no, gubun) {
	var param = "code=" + code + "&bsid=" + bsid + "&dsid="+ dsid + "&gubun="+gubun;
    $.ajax({
           url         	: "/next/publishment/detailInfo.do",
           type		: "post", 
           data		: param,
           dataType    : "html",
           success     : function(data, textStatus, jqXHR){
        	   if ( gubun == "D" ) {
            	   $("#detailInfo"+no).html(data);
        	   } else {
            	   $("#listInfo"+no).html(data);
        	   }
           },
           error : function(textStatus, jqXHR){
               alert(jqXHR.message);
           }
       }); 

}

/**
 * 2015 add
 * @param movePage
 */
function pageHolderURL(movePage) {
	$("#page").val(movePage);
	$("form[name=searchForm]").submit();
}

function reSearch() {
	$("#page").val(1);
	if (  $.trim($("input[name=keyword]").val()) == "" ) {
		alert("검색어를 입력하세요.");return false;
	}else if (  $("input[name=schReText]").val().indexOf("\"") > -1 ) {
		alert("\"는 사용할 수 없습니다.");return false;
	} else {
		$("input[name=searchReText]").val($("input[name=schReText]").val());
		$("form[name=searchForm]").submit();
	}
}

function keyChk(itm) {
	$("#"+itm).val("");
}

function hSearch() {
	if (  $.trim($("input[name=keyword]").val()) == "" ) {
		alert("검색어를 입력하세요.");return false;
	} else if (  $("input[name=keyword]").val().indexOf("\"") > -1 ) {
		alert("\"는 사용할 수 없습니다.");return false;
	} else {
		$("input[name=keyword]").val($.trim($("input[name=keyword]").val()));
		$("form[name=hSearchForm]").submit();
	}
}

function showHideDepth(th) {
//	alert(th.style.display);
}

function psubmitChk(itm, frm) {
	var sv = $("#psdate").val();
	var ev = $("#pedate").val();
	if ( itm == "") {
		if ( sv != "" && ev != "") {
			if($.isNumeric(sv) && $.isNumeric(ev)) {
				$("form[name="+frm+"]").submit();
				return true;
			} else {alert("숫자만 사용할 수 있습니다.");return false;}
		} else if ( sv != "") {
			if($.isNumeric(sv)) {
				$("form[name="+frm+"]").submit();
				return true;
			} else {alert("숫자만 사용할 수 있습니다.");return false;}
		} else if ( ev != "") {
			if($.isNumeric(ev)) {
				$("form[name="+frm+"]").submit();
				return true;
			} else {alert("숫자만 사용할 수 있습니다.");return false;}
		}
	}  else {
		if ( sv != "") {
			if($.isNumeric(sv)) {
				if(event.keyCode==13){
					$("form[name="+frm+"]").submit();
					return true;
				}
			} else {alert("숫자만 사용할 수 있습니다.");return false;}
		}
		if ( ev != "") {
			if($.isNumeric(ev)) {
				if(event.keyCode==13){
					$("form[name="+frm+"]").submit();
					return true;
				}
			} else {alert("숫자만 사용할 수 있습니다.");return false;}
		}
	}
}


function submitChk(itm, frm) {
	var sv = $("#sdate").val();
	var ev = $("#edate").val();
	if ( itm == "") {
		if ( sv != "" && ev != "") {
			if($.isNumeric(sv) && $.isNumeric(ev)) {
				$("form[name="+frm+"]").submit();
				return true;
			} else {alert("숫자만 사용할 수 있습니다.");return false;}
		} else if ( sv != "") {
			if($.isNumeric(sv)) {
				$("form[name="+frm+"]").submit();
				return true;
			} else {alert("숫자만 사용할 수 있습니다.");return false;}
		} else if ( ev != "") {
			if($.isNumeric(ev)) {
				$("form[name="+frm+"]").submit();
				return true;
			} else {alert("숫자만 사용할 수 있습니다.");return false;}
		}
	}
}

function numericChk(val) {
	if(!$.isNumeric(val) ) {
		alert("숫자만 사용할 수 있습니다.");return false;
	}
}

/**
 * 2015 add
 * @param 정렬
 */
function clickSort(sort) {
	$("#page").val(1);
	$("input[name=searchSort]").val(sort);
	$("form[name=searchForm]").submit();
}

function formSearch() {
	$("#formsearch").show();
}

/**
 * Head Style Click
 * @param sId
 */
function sSearch(sId) {
	$("input[name=orgId]").val(sId);
	$("form[name=hiddenForm]").attr("action", "/next/publishment/styleSearch.do");
	$("form[name=hiddenForm]").submit();
}

/**
 * Head Organ Click
 * @param oId
 */
function oSearch(oId) {
	$("input[name=orgId]").val(oId);
	$("#page").val(1);
	$("form[name=hiddenForm]").attr("action", "/next/publishment/organSearch.do");
	$("form[name=hiddenForm]").submit();
}

/**
 * Organ Menu Click
 * @param oId
 */
function oSearchMenu(oId) {
	if ( oId == "XXXXXX") {
		oSearch(oId);
	} else {
		$("input[name=orgId]").val(oId);
		$("#page").val(1);
		$("form[name=hiddenForm]").attr("action", "/next/publishment/organMenu.do");
		$("form[name=hiddenForm]").submit();
	}
}

/**
 * 
 * @param oId
 */
function oSearchKikwan(oId, kikwanId) {
	$("input[name=orgId]").val(oId);
	$("input[name=searchLimitKVal]").val(kikwanId);
	$("#page").val(1);
	$("form[name=searchForm]").attr("action", "/next/publishment/organSearch.do");
	$("form[name=searchForm]").submit();
}

function loadChk() {
	$("div.loading_mask").css('display', 'none');
}

// 접근성 개선 JavaScript
$(document).ready(function() {
    
    // 스킵 네비게이션 포커스 처리
    $('#skip-navigation a').on('focus', function() {
        $(this).parent().css('top', '0');
    }).on('blur', function() {
        $(this).parent().css('top', '-40px');
    });
    
    // 검색 폼 접근성 개선
    $('#search-form').on('submit', function(e) {
        e.preventDefault();
        const searchInput = $('#search-input');
        const query = searchInput.val().trim();
        
        if (query === '') {
            searchInput.focus();
            // 스크린리더를 위한 알림
            announceToScreenReader('검색어를 입력해주세요.');
            return false;
        }
        
        // 검색 실행 (실제 구현에서는 서버로 요청)
        console.log('검색 실행:', query);
        announceToScreenReader('검색을 실행합니다.');
    });
    
    // 키보드 네비게이션 개선
    $('nav a, nav button').on('keydown', function(e) {
        const $current = $(this);
        const $items = $('nav a, nav button');
        const currentIndex = $items.index($current);
        
        switch(e.keyCode) {
            case 37: // 왼쪽 화살표
                e.preventDefault();
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : $items.length - 1;
                $items.eq(prevIndex).focus();
                break;
            case 39: // 오른쪽 화살표
                e.preventDefault();
                const nextIndex = currentIndex < $items.length - 1 ? currentIndex + 1 : 0;
                $items.eq(nextIndex).focus();
                break;
            case 13: // 엔터
            case 32: // 스페이스
                e.preventDefault();
                $current.click();
                break;
        }
    });
    
    // 상세검색 버튼 접근성
    $('.search_box button[type="button"]').on('click', function() {
        // 상세검색 팝업 열기
        openDetailSearch();
    });
    
    // 관련기관 링크 접근성
    $('.main_link a').on('click', function(e) {
        const target = $(this).attr('href');
        const label = $(this).find('.sr-only').text() || $(this).attr('aria-label');
        
        // 새창 열기 전 사용자에게 알림
        announceToScreenReader(label + ' 사이트가 새창으로 열립니다.');
    });
    
    // 위로가기 버튼 접근성
    $('.gotop').on('click', function(e) {
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        
        // 스크린리더 알림
        announceToScreenReader('페이지 상단으로 이동했습니다.');
        
        // 포커스를 헤더로 이동
        $('header h1 a').focus();
    });
    
    // 모달 다이얼로그 접근성 (상세검색용)
    function openDetailSearch() {
        // 모달 생성
        const modal = $('<div>', {
            'class': 'modal-overlay',
            'role': 'dialog',
            'aria-labelledby': 'modal-title',
            'aria-describedby': 'modal-description'
        }).appendTo('body');
        
        const modalContent = $('<div>', {
            'class': 'modal-content'
        }).appendTo(modal);
        
        modalContent.html(`
            <div class="modal-header">
                <h2 id="modal-title">상세검색</h2>
                <button type="button" class="modal-close" aria-label="상세검색 닫기">×</button>
            </div>
            <div id="modal-description" class="modal-body">
                <p>상세검색 기능이 준비 중입니다.</p>
            </div>
        `);
        
        // 모달 포커스 관리
        modal.find('.modal-close').focus();
        
        // ESC 키로 모달 닫기
        $(document).on('keydown.modal', function(e) {
            if (e.keyCode === 27) { // ESC
                closeModal();
            }
        });
        
        // 모달 닫기 버튼
        modal.find('.modal-close').on('click', closeModal);
        
        // 모달 외부 클릭으로 닫기
        modal.on('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
        
        function closeModal() {
            modal.remove();
            $(document).off('keydown.modal');
            announceToScreenReader('상세검색이 닫혔습니다.');
        }
        
        // 스크린리더 알림
        announceToScreenReader('상세검색이 열렸습니다.');
    }
    
    // 스크린리더 알림 함수
    function announceToScreenReader(message) {
        const announcement = $('<div>', {
            'class': 'sr-announcement',
            'aria-live': 'polite',
            'aria-atomic': 'true'
        }).text(message).appendTo('body');
        
        // 잠시 후 제거
        setTimeout(function() {
            announcement.remove();
        }, 1000);
    }
    
    // 페이지 로드 완료 알림
    announceToScreenReader('정부간행물 검색 페이지가 로드되었습니다.');
    
    // 폼 유효성 검사 접근성
    $('input[required]').on('invalid', function(e) {
        e.preventDefault();
        const field = $(this);
        const fieldName = field.attr('aria-label') || field.attr('placeholder') || '입력 필드';
        
        announceToScreenReader(fieldName + '는 필수 입력 항목입니다.');
        field.focus();
    });
    
    // 이미지 로딩 실패 시 대체 텍스트
    $('img').on('error', function() {
        const $img = $(this);
        const alt = $img.attr('alt');
        
        if (alt) {
            $img.replaceWith('<span class="img-placeholder">' + alt + '</span>');
        }
    });
    
    // 동적 콘텐츠 변경 시 ARIA 상태 업데이트
    function updateAriaStates() {
        // 현재 활성 메뉴 항목 표시
        $('nav a').each(function() {
            const $link = $(this);
            const href = $link.attr('href');
            
            if (href === window.location.pathname || href === window.location.href) {
                $link.attr('aria-current', 'page');
            } else {
                $link.removeAttr('aria-current');
            }
        });
    }
    
    // 페이지 로드 시 ARIA 상태 업데이트
    updateAriaStates();
    
    // 스크린리더 전용 스타일 추가
    $('<style>')
        .text(`
            .sr-announcement {
                position: absolute;
                left: -10000px;
                width: 1px;
                height: 1px;
                overflow: hidden;
            }
            
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .modal-content {
                background: white;
                padding: 20px;
                border-radius: 8px;
                max-width: 500px;
                width: 90%;
            }
            
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
            }
            
            .modal-close {
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                padding: 5px;
            }
            
            .img-placeholder {
                display: inline-block;
                padding: 10px;
                background: #f0f0f0;
                border: 1px solid #ccc;
                color: #666;
                font-style: italic;
            }
        `)
        .appendTo('head');
});