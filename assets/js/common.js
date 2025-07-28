// JavaScript Document
function MM_openBrWindow(theURL,winName,features) { //v2.0
    window.open(theURL,winName,features);
  }
  
  function MM_findObj(n, d) { //v4.01
    var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
      d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
    if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
    for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
    if(!x && d.getElementById) x=d.getElementById(n); return x;
  }
  
  function MM_showHideLayers() { //v6.0
    var i,p,v,obj,args=MM_showHideLayers.arguments;
    for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
      if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
      obj.visibility=v; }
  }
  
  var context = "/next";
  function goDel(frm, url){
      var chkFlag = false;
      try{
          if(isNaN(frm.idChk.length)){
              if(frm.idChk.checked) chkFlag = true;
          }else{
              for(i=0; i<frm.idChk.length; i++){	
                  if(frm.idChk[i].checked){
                      chkFlag = true;
                      break;			
                  }			
              }
          }
          
          if(!chkFlag){
              alert("삭제할 목록을 선택하세요.");
              return;
          }
          
          if(confirm("정말 삭제하겠습니까?")){
              frm.action=url;
              frm.method="post";
              frm.submit();
          }
      }catch(e){
          alert("삭제할 목록이 없습니다.");
          return;
      }
  }
  
  function checkList(frm){
      var chkFlag = false;
      try{
          if(isNaN(frm.idChk.length)){
              if(frm.idChk.checked) chkFlag = true;
          }else{
              for(i=0; i<frm.idChk.length; i++){	
                  if(frm.idChk[i].checked){
                      chkFlag = true;
                      break;			
                  }			
              }
          }
          
          if(!chkFlag){
              alert("목록을 선택하세요.");
              return false;
          }else{
              return true;
          }
      }catch(e){
          alert("목록이 없습니다.");
          return false;
      }
  }
  
  function checkList(obj, item, flag){
      var chkFlag = true;
      var msg = "선택된 기록물이 없습니다.";
      var chkCnt = 0;
      try{
          for ( var c = 0; c < $("input:checkbox[name='"+item+"']").size() ; c++ ) {
              if ($("input:checkbox[id='id"+c+"']").is(":checked")) {
                  chkCnt = 1;
                  strS = $("input:checkbox[id='id"+c+"']").val().split("-");
                  if ( flag == "1" && strS[3] == "3" ) {
                      $("input:checkbox[id='id"+c+"']").prop("checked", false);
                      msg = "선택된 비공개 기록물은 선택해제 됩니다.  \n공개/부분공개에 한하여 사본신청이 가능합니다.";chkFlag = false;
                  }
              }
          }
          if ( chkCnt != 0 ) {
              if(!chkFlag){
                  alert(msg);
                  return false;
              }else{
                  return true;
              }
          } else {
              alert(msg);
              return false;
          }
      }catch(e){
          alert(msg);
          return false;
      }
      
  }
  
  function goDelByView(frm, url){
      if(confirm("정말 삭제하겠습니까?")){
          frm.action=url;
          frm.method="post";
          frm.submit();
      }
      
  }
  
  function checkAll(frm){
      try{
          var flag = frm.allChk.checked;
          if(isNaN(frm.idChk.length)){
              frm.idChk.checked=flag;
          }else{
              for(i=0; i<frm.idChk.length; i++){
                  frm.idChk[i].checked=flag;
              }
          }
      }catch(e){
          return;
      }
  }
  
  function checkAll(obj, item, gubun){
      try{
          var flag = $(obj).is(":checked");
          if ( gubun == "M" ) {
              if ( flag ) {
                  for (var i=0; i < $("input:checkbox[name='"+item+"']").size(); i++ ) {
                      strS = $("input:checkbox[id='id"+i+"']").val().split("-");
                      if ( strS[3] == "1" || strS[3] == "2" ) {
                          $("input:checkbox[id='id"+i+"']").prop("checked", true);
                      } else {
                          $("input:checkbox[id='id"+i+"']").prop("checked", false);
                      }
                  }
              } else {
                  $("input:checkbox[name='"+item+"']").prop("checked", false);
              }
          } else {
              if ( flag ) {
                  $("input:checkbox[name='"+item+"']").prop("checked", true);
              } else {
                  $("input:checkbox[name='"+item+"']").prop("checked", false);
              }
          }
          
      }catch(e){
          return;
      }
  }
  
  function checkAll(obj, item){
      try{
          var flag = $(obj).is(":checked");
          if ( flag ) {
              $("input:checkbox[name='"+item+"']").prop("checked", true);
          } else {
              $("input:checkbox[name='"+item+"']").prop("checked", false);
          }
      }catch(e){
          return;
      }
  }
  function goListSize(frm){
      frm.submit();
  }
  
  function goReg(url){
      window.location=url;
  }
  
  function goList(frm, url){
      frm.action=url;
      frm.submit();
  }
  
  function goModify(frm, url){
      frm.action=url;;
      frm.submit();
  }
  
  function openWin(url, wname, wopt1) {
      var newopt = "", wHeight = 0, wWidth = 0;
      if (wopt1 != "") {
          var woptlist = wopt1.replace(/ /g, "").split(",");
          //for (var i in woptlist) {
            for(var i = 0; i < woptlist.length; i++){
              var wop = woptlist[i];
              if (wop.match(/^height=/i)) {
                  wHeight = parseInt(wop.substr(7), 10);
                  wHeight += 35;
                  if (!isNaN(wHeight)) newopt += "top=" + Math.floor((screen.availHeight - wHeight) / 2) + ",";
              }
              if (wop.match(/^width=/i)) {
                  wWidth = parseInt(wop.substr(6), 10);
                  wWidth += 10;
                  if (!isNaN(wWidth)) newopt += "left=" + Math.floor((screen.availWidth - wWidth) / 2) + ",";
              }
          }
      }
      window.open(url, wname, newopt + wopt1);
  }
  
  function popZipcode(frmNm, zipNm1, zipNm2, addrNm) {
      var url =  context + "/common/zipcode.do?frmName=" + frmNm+"&zipName1="+zipNm1+"&zipName2="+zipNm2+"&addrName="+addrNm;
      openWin(url, "zipcodeSearch", "width=455,height=450,resizable=no,scrollbars=no,status=no");
  }
  
  function popLocation(id) { 
      var url =  context + "/content/viewMap.do?subjectContentId=" + id;
      //openWin(url, "viewMap", "width=550,height=500,resizable=no,scrollbars=auto,status=no");
      document.all("viewMap").src = url;
      document.all["LayerViewMap"].style.display='';
  }
  
  function setFontSize(no){
      var fontSize = document.all.DESCRIPTION.style.fontSize;
      var fontNum = fontSize.substring(0,fontSize.indexOf("p"));
      document.all.DESCRIPTION.style.fontSize=(fontNum*1+(no*2));
  }
  
  function popPrint()
  {
      var url =  context + "/common/viewPrintFormat.do";
      openWin(url, "previewWin", "width=750,height=600,resizable=no,scrollbars=yes,status=no,resizable=yes,statusbar=yes");
  }
  
  
  function focusCurrency(objName)
  {
      var input = document.getElementById(objName);
  
      if ( input.value.length == 0 )
      {
          return;
      }
  
      input.value = Number(_CurrencyClear(input.value));
      input.select();
  }
  
  function _CurrencyClear(s)
  {
      var cntArray = new Array();
  
      for( var i = 0 ; i < s.length ; i++)
      {
          cntArray[i] = s.indexOf(",");
          s = s.replace(",","");
  
      }
  
      return s;
  }
  
  function setCurrency(objName)
  {	
      var input = document.getElementById(objName);
  
      if ( input.value.length == 0 )
      {
          return;
      }
  
      var amt = 0;
      if(input.value.length != 0 ) 
      {
          amt = fillZero(input.value, input.format);
      }
  
      input.value =	_Currency(amt);
      
      if(!formatCheck(input.value,input.format)){
          focusProcess(input);
      };
  }
  
  
  
  function formatCheck(val,format){
      var arr2 = format.split(".");
      var arr1 = val.split(".");
      
      if(arr1[0].length>arr2[0]){
          alert("정수부는 ["+arr2[0]+"]자리를 초과 할 수 없습니다");
          return false;
      }
      
      if(arr1.length>1){
          if(arr1[1].length>arr2[1]){
              alert("소수부는 ["+arr2[1]+"]자리를 초과 할 수 없습니다");
              return false;
          }
      }
      return true;
  }
  
  
  function fillZero(input, type)
  {
      if ( !type )
      {
          return input+"";
      }
  
      var format = type.split('.');
      var value = (input+"").split('.');
      
  
      if ( Number(format[1]) == 0 )
      {
          return input+"";
      }	
  
      if (!value[1])
      {	
          value[1] = "";
      }
      
      if (value[1].length > Number(format[1]))
      {
           return (Number(input).toFixed(Number(format[1])));
      }
  
      while ( value[1].length < Number(format[1]) )
      {
          value[1] += "0";
      }		
      
      return (Number(value[0]) + "." + value[1]);
  }
  
  
  function setCurrency(objName)
  {	
      var input = document.getElementById(objName);
  
      if ( input.value.length == 0 )
      {
          return;
      }
  
      var amt = 0;
      if(input.value.length != 0 ) 
      {
          amt = fillZero(input.value, input.format);
      }
  
      input.value =	_Currency(amt);
      
      return formatCheck(input.value,input.format);
  }
  
  
  function formatCheck(val,format){
      var arr2 = format.split(".");
      var arr1 = val.split(".");
      
      //정수부 체크 
      
      if(arr1[0].length>arr2[0]){
          alert("정수부는 ["+arr2[0]+"]자리를 초과 할 수 없습니다");
          return false;
      }
      
      if(arr1.length>1){
          if(arr1[1].length>arr2[1]){
              alert("소수부는 ["+arr2[1]+"]자리를 초과 할 수 없습니다");
              return false;
          }
      }
      return true;
  }
  
  /* SCRIPT 메소드 주석
   * <!--
   * 메소드명   	: NumberOnly2
   * 설명			: 실수 입력을 허용한다. 음수(소주점포함)
   * 메소드인수1	:
   * 메소드인수2	:
   * 메소드리턴	:
   * 예외처리1  	:
   * 예외처리2  	:
   * //-->        
   */             
  function NumberOnly2() 
  {
      var obj;
      var keyChar;
      if (event.keyCode ==13 && isEnterSearch() )
      {
          goEnter();
      } 
      else 		
      {
          obj=event.srcElement;
  
          var re = new RegExp(/[0-9\-.]/);
  
          keyChar=String.fromCharCode(event.keyCode);
  
          if (!re.test(keyChar))
          {
              event.keyCode = 0;
              return false;
          }
          
          if (keyChar == '.' && obj.value.indexOf(".") < 0)
          {
          }
          else if (keyChar == '.' && obj.value.indexOf(".") >= 0)
          {
              event.keyCode = 0;
              return false;
          }
          else if (keyChar == '-' && obj.value.indexOf("-") < 0)
          {
              obj.value = "-" + obj.value;
              event.keyCode = 0;
              return false;
          }
          else if (keyChar == '-' && obj.value.indexOf("-") >= 0){
              obj.value = obj.value.replace(/-/g,'');
              event.keyCode = 0;
              return false;
          }
  
      }
  }
  
  /* SCRIPT 메소드 주석
   * <!--
   * 메소드명    	: isEnterSearch            
   * 설명        	: enter를 눌렀을 경우 자동조회를 수행하는지 여부를 던져준다 
   * 메소드인수1 	: 
   * 메소드인수2 	: 
   * 메소드인수3 	: 
   * 메소드리턴값	: 
   * 예외처리1   	:                      
   * 예외처리2   	:
   * //-->
   */  
  function isEnterSearch() {
      var progNo = getProgNo();
      var frstProgNo = progNo.substr(0,1);
      var scndProgNo = progNo.substr(0,2);
      var src = event.srcElement;
      
      //Detail에서 Enter키를 눌렀을때 처리해야 할 사항
      var srcVal = src.id.substring(0,1);
      if ( srcVal == "d" ) return false ;
      ///////////////////////////////////////////////////////
  
      var findicon = document.getElementById('find');
      //alert("src.getAttribute('isNotSearch') = " + src.getAttribute("isNotSearch"));
  
      if ( ( src.getAttribute("isNotSearch") == null || src.getAttribute("isNotSearch")=='' ) 
          && findicon != null && findicon.disabled != true && (frstProgNo!='P' && scndProgNo == 'PF'))
      {
          return true;
      }
       else if ( ( src.getAttribute("isNotSearch") == 'Y' ) || (frstProgNo=='P' && scndProgNo != 'PF')
          || findicon==null || findicon.disabled==true  )
      {
          return false;
      }
      else
      {
          return true;
      }
  }
  
  /* SCRIPT 메소드 주석
   * <!--
   * 메소드명      : _Currency
   * 설명			    : 3째자리마다 소수점 넣는다,문자열을 reverse시켜서 소수점 넣고, 다시 원래대로 값 
  display
   * 메소드인수1  : 
   * 메소드인수2  :
   * 메소드리턴값 :
   * 예외처리1      :
   * 예외처리2      :
   * //-->
   */
  function _Currency(num)
  {	
      if(num == "" || num == 0)
      {
          return num;	
      }
  
      var dotPos = (num+"").split(".");
      var dotU = dotPos[0];
      var dotD = dotPos[1];
  
      if (Number(dotU) < 0) 
      { 
          dotU  = (Number(dotU) * -1) + ""; 
          var minus = true
      }
      else
      {
          var minus = false
      }
  
      var commaFlag = dotU.length%3
  
      if(commaFlag) 
      {
          var out = dotU.substring(0, commaFlag) 
          if (dotU.length > 3) 
          {
              out += ",";
          }
      }
      else
      {
          var out = "";
      }
  
      for (var i=commaFlag; i < dotU.length; i+=3) 
      {
          out += dotU.substring(i, i+3);
          
          if( i < dotU.length-3) 
          {
              out += ",";
          }
      }
      
      if(minus) 
      {
          out = "-" + out;
      }
      
      if(dotD) 
      {
          out +=  "." + dotD ;
      }
      
      return out;
  }
  
  
  /**
   * input box에 값이 없으면 메시지를 alert 시키고 포커스를 이동한다.
   * by seokyang 2006.11.26
  */
  function jsIsNull(obj, msg)
  {
    if ( obj.value == null || obj.value == "" )
    {
      alert(msg);
      obj.focus();
      return true;
    }
    return false;
  }
  
  /**
   * 각주에 해당하는 내용을 팝업을 띄어 보여준다
   * by boyeon.sohn 2008-09-24
  */
  function footnotePop(message_id, title_id, frm_obj)
  {	
      var footnoe_tlt = "";
      var footnote_window = null;
      
      if(title_id!=null && title_id!=undefined)
          footnoe_tlt = title_id;
      if(message_id!=null && message_id!=undefined && message_id!="" && frm_obj!=null && frm_obj!=undefined)
      {
          footnote_window = window.open("","FOOTNOTE","width=1, height=1, left=40, top=100,status=yes,toolbar=no,menubar=no,location=no");    
          
          frm_obj.content_id.value = message_id;
          frm_obj.title_id.value = title_id;
          
          frm_obj.method = "post";
          frm_obj.action = "/next/common/footNotePop.do";
          frm_obj.target = "FOOTNOTE";
          frm_obj.submit();
          
          //var win2k502=window.open("","win2k502","menubar=0,scrollbars=0,width=517,height=340"); f.submit();
      }
  }
  
  
  function winFullOpen(url, wname)
  {
      var opWidth=screen.availWidth;
      var opHeight=screen.availHeight;
      window.resizeTo(opWidth, opHeight);
      window.open(url, wname);
  }
  
  function winOpen(url, wname, w, h)
  {
      window.open(url, wname,'width='+w+', height='+h);
  }
  
  