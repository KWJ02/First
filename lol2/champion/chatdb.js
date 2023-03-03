var db = null;
 
function openDB(){
	db=window.openDatabase("boardDB","1.0","게시판DB",1024*1024);
	console.log('1_DB생성...');

} 

function createTable() {
	db.transaction(function(tr){
		var createSQL = 'create table if not exists board(type text, name text)';
		tr.executeSql(createSQL, [], function(){
			console.log('2_1_테이블생성_sql실행 성공...');
		}, function(){
			console.log('2_1_테이블생성_sql실행 실패');
		});
		}, function(){
			console.log('2_2_테이블생성 트랜잭션 실패...롤백은 자동');
		}, function(){
			console.log('2_2_테이블 생성 트랜잭션 성공...');
	});
 } 
 
 function save(){ 
 	db.transaction(function(tr){
 		var name = $('#comment').val();
 		var insertSQL = 'insert into board(name) values(?)';
 		tr.executeSql(insertSQL,[name],function(tr,rs){
 			alert('게시글이 입력되었습니다');
 			$('#comment').val('');
 		}, function(tr,err){
 			alert('DB오류' + err.message + err.code);
 		}
 		);
 	});
 }

var count;
var boardList;
function listBoard(){
  db.transaction(function(tr){
 	var selectSQL = 'select * from board';    
  	tr.executeSql(selectSQL, [], function(tr, rs){    
       console.log(' 게시글 조회... ' + rs.rows.length + '건.');
       alert('지금까지 올린 게시글은 ' + rs.rows.length + '건 입니다.');
       count = rs.rows.length + 1;
       
       for(var i = 0; i < count; i++){
       console.log(' 게시글 내용 :' + rs.rows.item(i).name);
       $('#recent' + (i+1)).val(rs.rows.item(i).name);
       }
       
 		});   
  });           
}