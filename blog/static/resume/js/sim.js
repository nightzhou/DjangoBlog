window.onload = function(){
	/*项目经验开始*/
	var oExp = document.getElementById('exp');
	var aExpUl = oExp.getElementsByTagName('ul')[0];
	var aExpLi = aExpUl.getElementsByTagName('li');

	/*遮罩层开始*/
	var oMask = document.getElementById('mask');
	var oCase = document.getElementById('case');
	var oCaseLi = oCase.getElementsByTagName('li');
	/*遮罩层结束*/

	for(var i=0;i<aExpLi.length;i++){
		oExpAuto(i);
	}

	function oExpAuto(a){
		var aExpXz = aExpLi[a].getElementsByTagName('div')[0];
		var aExpCir2 = aExpXz.getElementsByTagName('div')[0];
		aExpXz.onmouseover = function(){
			aExpCir2.style.width = '200px';
			aExpCir2.style.height = '200px';
			aExpCir2.style.margin = '0px auto 0px';
		}
		aExpXz.onmouseout = function(){
			aExpCir2.style.width = '176px';
			aExpCir2.style.height = '176px';
			aExpCir2.style.margin = '12px auto 0px';
		}
		/*遮罩层*/
		aExpLi[a].num = a;
		var aClose = oCaseLi[a].getElementsByTagName('div');
		aExpLi[a].onclick = function(){
			oMask.style.display = 'block';
			oCase.style.display = 'block';
			oCaseLi[this.num].style.display = 'block';
			
		}
		aClose[aClose.length-1].onclick = function(){
			oMask.style.display = 'none';
			oCase.style.display = 'none';
			for(var i=0;i<oCaseLi.length;i++){
				oCaseLi[i].style.display = 'none';
			}
		}
	}
	/*项目经验结束*/


}