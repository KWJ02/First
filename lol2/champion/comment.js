var count;
var Doc;
$(document).ready(function(){
	$.ajax({
		url: 'champion.xml',
		type: 'get',
		timeout: 10000,
		dataType: 'xml',
		success: function(xmlDoc) {
			Doc = xmlDoc;
			count = $(xmlDoc).find('champion').size();
			champbutton();
			},
		error: function() {
			$('body').html('<div>Error!!</div>');
			}
	});
});
		function champbutton(){
			var champcomment='', championName='', championId='';
			if(count>0) {
				for(i=0 ; i<count ; i+=1) {
					$record = $(Doc).find('champion').eq(i);
					champcomment += '<div data-role="listview" data-inset="true"  id="boardComment">';
					champcomment += '<li data-role="listdivider" data-theme="b" style="text-align:center; font-size: 20px; font-weight: border;">'+$record.find('championName').text()+'</li>';
					champcomment += '<li><input type="text" id="'+$record.find('championId').text()+'comment" name="'+$record.find('championId').text()+'comment" value="" placeholder="'+$record.find('championName').text()+' 평가" data-mini="true"></li>';
					champcomment += '<button id="save'+$record.find('championId').text()+'" data-inline="true">저장</button></div>';
				}
			}
			$('#champcomment').html(champcomment);
		}
