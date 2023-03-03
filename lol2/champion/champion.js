var count = 0;
var audio = new Array;   
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
                    champList();
                    runeterraList();
                    demaciaList();
                    noxsusList();
                    bandlecityList();
                    bilgewaterList();
                    shurimaList();
                    ioniaList();
                    zaunList();
                    targonList();
                    freljordList();
                    tankerList();
                    fighterList();
                    magicionList();
                    slayerList();
                    marksmanList();
                    controllerList();
                    topList();
                    jungleList();
                    midList();
                    bottomList();
                    supportList();
                    garenInfo();
                    nunuInfo();
                    dariusInfo();
                    dianaInfo();
                    ryzeInfo();
                    luxInfo();
                    leonaInfo();
                    masterYiInfo();
                    morganaInfo();
                    missFortuneInfo();
                    vayneInfo();
                    blitzcrankInfo();
                    sionInfo();
                    sorakaInfo();
                    ahriInfo();
                    alistarInfo();
                    annieInfo();
                    sivirInfo();
                    asheInfo();
                    warwickInfo();
                    jaxInfo();
                    zedInfo();
                    katarinaInfo();
                    kayleInfo();
                    talonInfo();
                    tristanaInfo();
                    tryndamereInfo();
                    twistedFateInfo();
                    teemoInfo();
                    fiddlesticksInfo();
                    },
                error: function() {
                    $('body').html('<div>Error!!</div>');
                    }
           });
      });
        
        function champList(){
            var i, champList='', championName='', championId='';
            if(count>0) {
                for(i=0 ; i<count ; i+=1) {
                      $record = $(Doc).find('champion').eq(i);
                    champList += '<div class="champion""><a id="item_a" href="#'+$record.find('championId').text()+'">';
                    champList += '<img id="championimg" src="'+$record.find('championFace').text() +'">';
                    champList += '<h4>'+$record.find('championName').text()+'</h4></a></div>';
                }
            }
            $('#champion_container').html(champList);
        }
        
        function runeterraList(){
            var i, champList='', championName='', championId='', area='';
            if(count>0) {
                for(i=0 ; i<count ; i+=1) {
                      $record = $(Doc).find('champion').eq(i);
                      area = $record.find('area').text();
                      if(area=="룬테라"){
                    champList += '<div class="champion""><a id="item_a" href="#'+$record.find('championId').text()+'">';
                    champList += '<img id="championimg" src="'+$record.find('championFace').text() +'">';
                    champList += '<h4>'+$record.find('championName').text()+'</h4></a></div>';
                    }
                }
            }
            $('#runeterrachampion_container').html(champList);
        }
        function demaciaList(){
            var i, champList='', championName='', championId='', area='';
            if(count>0) {
                for(i=0 ; i<count ; i+=1) {
                      $record = $(Doc).find('champion').eq(i);
                      area = $record.find('area').text();
                      if(area=="데마시아"){
                    champList += '<div class="champion""><a id="item_a" href="#'+$record.find('championId').text()+'">';
                    champList += '<img id="championimg" src="'+$record.find('championFace').text() +'">';
                    champList += '<h4>'+$record.find('championName').text()+'</h4></a></div>';
                    }
                }
            }
            $('#demaciachampion_container').html(champList);
        }
        function noxsusList(){
            var i, champList='', championName='', championId='', area='';
            if(count>0) {
                for(i=0 ; i<count ; i+=1) {
                      $record = $(Doc).find('champion').eq(i);
                      area = $record.find('area').text();
                      if(area=="녹서스"){
                    champList += '<div class="champion""><a id="item_a" href="#'+$record.find('championId').text()+'">';
                    champList += '<img id="championimg" src="'+$record.find('championFace').text() +'">';
                    champList += '<h4>'+$record.find('championName').text()+'</h4></a></div>';
                    }
                }
            }
            $('#noxsuschampion_container').html(champList);
        }
        function bandlecityList(){
            var i, champList='', championName='', championId='', area='';
            if(count>0) {
                for(i=0 ; i<count ; i+=1) {
                      $record = $(Doc).find('champion').eq(i);
                      area = $record.find('area').text();
                      if(area=="밴들시티"){
                    champList += '<div class="champion""><a id="item_a" href="#'+$record.find('championId').text()+'">';
                    champList += '<img id="championimg" src="'+$record.find('championFace').text() +'">';
                    champList += '<h4>'+$record.find('championName').text()+'</h4></a></div>';
                    }
                }
            }
            $('#bandlecitychampion_container').html(champList);
        }
        function bilgewaterList(){
            var i, champList='', championName='', championId='', area='';
            if(count>0) {
                for(i=0 ; i<count ; i+=1) {
                      $record = $(Doc).find('champion').eq(i);
                      area = $record.find('area').text();
                      if(area=="빌지워터"){
                    champList += '<div class="champion""><a id="item_a" href="#'+$record.find('championId').text()+'">';
                    champList += '<img id="championimg" src="'+$record.find('championFace').text() +'">';
                    champList += '<h4>'+$record.find('championName').text()+'</h4></a></div>';
                    }
                }
            }
            $('#bilgewaterchampion_container').html(champList);
        }
        function shurimaList(){
            var i, champList='', championName='', championId='', area='';
            if(count>0) {
                for(i=0 ; i<count ; i+=1) {
                      $record = $(Doc).find('champion').eq(i);
                      area = $record.find('area').text();
                      if(area=="슈리마"){
                    champList += '<div class="champion""><a id="item_a" href="#'+$record.find('championId').text()+'">';
                    champList += '<img id="championimg" src="'+$record.find('championFace').text() +'">';
                    champList += '<h4>'+$record.find('championName').text()+'</h4></a></div>';
                    }
                }
            }
            $('#shurimachampion_container').html(champList);
        }
        function ioniaList(){
            var i, champList='', championName='', championId='', area='';
            if(count>0) {
                for(i=0 ; i<count ; i+=1) {
                      $record = $(Doc).find('champion').eq(i);
                      area = $record.find('area').text();
                      if(area=="아이오니아"){
                    champList += '<div class="champion""><a id="item_a" href="#'+$record.find('championId').text()+'">';
                    champList += '<img id="championimg" src="'+$record.find('championFace').text() +'">';
                    champList += '<h4>'+$record.find('championName').text()+'</h4></a></div>';
                    }
                }
            }
            $('#ioniachampion_container').html(champList);
        }
        function zaunList(){
            var i, champList='', championName='', championId='', area='';
            if(count>0) {
                for(i=0 ; i<count ; i+=1) {
                      $record = $(Doc).find('champion').eq(i);
                      area = $record.find('area').text();
                      if(area=="자운"){
                    champList += '<div class="champion""><a id="item_a" href="#'+$record.find('championId').text()+'">';
                    champList += '<img id="championimg" src="'+$record.find('championFace').text() +'">';
                    champList += '<h4>'+$record.find('championName').text()+'</h4></a></div>';
                    }
                }
            }
            $('#zaunchampion_container').html(champList);
        }
        function targonList(){
            var i, champList='', championName='', championId='', area='';
            if(count>0) {
                for(i=0 ; i<count ; i+=1) {
                      $record = $(Doc).find('champion').eq(i);
                      area = $record.find('area').text();
                      if(area=="타곤"){
                    champList += '<div class="champion""><a id="item_a" href="#'+$record.find('championId').text()+'">';
                    champList += '<img id="championimg" src="'+$record.find('championFace').text() +'">';
                    champList += '<h4>'+$record.find('championName').text()+'</h4></a></div>';
                    }
                }
            }
            $('#targonchampion_container').html(champList);
        }
        function freljordList(){
            var i, champList='', championName='', championId='', area='';
            if(count>0) {
                for(i=0 ; i<count ; i+=1) {
                      $record = $(Doc).find('champion').eq(i);
                      area = $record.find('area').text();
                      if(area=="프렐요드"){
                    champList += '<div class="champion""><a id="item_a" href="#'+$record.find('championId').text()+'">';
                    champList += '<img id="championimg" src="'+$record.find('championFace').text() +'">';
                    champList += '<h4>'+$record.find('championName').text()+'</h4></a></div>';
                    }
                }
            }
            $('#freljordchampion_container').html(champList);
        }
        
        function tankerList(){
            var i, champList='', championName='', championId='', role='';
            if(count>0) {
                for(i=0 ; i<count ; i+=1) {
                      $record = $(Doc).find('champion').eq(i);
                      role = $record.find('roleGroup').text();
                      if(role=="탱커"){
                    champList += '<div class="champion""><a id="item_a" href="#'+$record.find('championId').text()+'">';
                    champList += '<img id="championimg" src="'+$record.find('championFace').text() +'">';
                    champList += '<h4>'+$record.find('championName').text()+'</h4></a></div>';
                    }
                }
            }
            $('#tankerchampion_container').html(champList);
        }
        function fighterList(){
            var i, champList='', championName='', championId='', role='';
            if(count>0) {
                for(i=0 ; i<count ; i+=1) {
                      $record = $(Doc).find('champion').eq(i);
                      role = $record.find('roleGroup').text();
                      if(role=="전사"){
                    champList += '<div class="champion""><a id="item_a" href="#'+$record.find('championId').text()+'">';
                    champList += '<img id="championimg" src="'+$record.find('championFace').text() +'">';
                    champList += '<h4>'+$record.find('championName').text()+'</h4></a></div>';
                    }
                }
            }
            $('#fighterchampion_container').html(champList);
        }
        function magicionList(){
            var i, champList='', championName='', championId='', role='';
            if(count>0) {
                for(i=0 ; i<count ; i+=1) {
                      $record = $(Doc).find('champion').eq(i);
                      role = $record.find('roleGroup').text();
                      if(role=="마법사"){
                    champList += '<div class="champion""><a id="item_a" href="#'+$record.find('championId').text()+'">';
                    champList += '<img id="championimg" src="'+$record.find('championFace').text() +'">';
                    champList += '<h4>'+$record.find('championName').text()+'</h4></a></div>';
                    }
                }
            }
            $('#magicionchampion_container').html(champList);
        }
        function slayerList(){
            var i, champList='', championName='', championId='', role='';
            if(count>0) {
                for(i=0 ; i<count ; i+=1) {
                      $record = $(Doc).find('champion').eq(i);
                      role = $record.find('roleGroup').text();
                      if(role=="암살자"){
                    champList += '<div class="champion""><a id="item_a" href="#'+$record.find('championId').text()+'">';
                    champList += '<img id="championimg" src="'+$record.find('championFace').text() +'">';
                    champList += '<h4>'+$record.find('championName').text()+'</h4></a></div>';
                    }
                }
            }
            $('#slayerchampion_container').html(champList);
        }
        function marksmanList(){
            var i, champList='', championName='', championId='', role='';
            if(count>0) {
                for(i=0 ; i<count ; i+=1) {
                      $record = $(Doc).find('champion').eq(i);
                      role = $record.find('roleGroup').text();
                      if(role=="원거리"){
                    champList += '<div class="champion""><a id="item_a" href="#'+$record.find('championId').text()+'">';
                    champList += '<img id="championimg" src="'+$record.find('championFace').text() +'">';
                    champList += '<h4>'+$record.find('championName').text()+'</h4></a></div>';
                    }
                }
            }
            $('#marksmanchampion_container').html(champList);
        }
        function controllerList(){
            var i, champList='', championName='', championId='', role='';
            if(count>0) {
                for(i=0 ; i<count ; i+=1) {
                      $record = $(Doc).find('champion').eq(i);
                      role = $record.find('roleGroup').text();
                      if(role=="서포터"){
                    champList += '<div class="champion""><a id="item_a" href="#'+$record.find('championId').text()+'">';
                    champList += '<img id="championimg" src="'+$record.find('championFace').text() +'">';
                    champList += '<h4>'+$record.find('championName').text()+'</h4></a></div>';
                    }
                }
            }
            $('#controllerchampion_container').html(champList);
        }
        
        function topList(){
            var i, champList='', championName='', championId='', line='';
            if(count>0) {
                for(i=0 ; i<count ; i+=1) {
                      $record = $(Doc).find('champion').eq(i);
                      line = $record.find('line').text();
                      if(line=="탑"){
                    champList += '<div class="champion""><a id="item_a" href="#'+$record.find('championId').text()+'">';
                    champList += '<img id="championimg" src="'+$record.find('championFace').text() +'">';
                    champList += '<h4>'+$record.find('championName').text()+'</h4></a></div>';
                    }
                }
            }
            $('#topchampion_container').html(champList);
        }
        function jungleList(){
            var i, champList='', championName='', championId='', line='';
            if(count>0) {
                for(i=0 ; i<count ; i+=1) {
                      $record = $(Doc).find('champion').eq(i);
                      line = $record.find('line').text();
                      if(line=="정글"){
                    champList += '<div class="champion""><a id="item_a" href="#'+$record.find('championId').text()+'">';
                    champList += '<img id="championimg" src="'+$record.find('championFace').text() +'">';
                    champList += '<h4>'+$record.find('championName').text()+'</h4></a></div>';
                    }
                }
            }
            $('#junglechampion_container').html(champList);
        }
        function midList(){
            var i, champList='', championName='', championId='', line='';
            if(count>0) {
                for(i=0 ; i<count ; i+=1) {
                      $record = $(Doc).find('champion').eq(i);
                      line = $record.find('line').text();
                      if(line=="미드"){
                    champList += '<div class="champion""><a id="item_a" href="#'+$record.find('championId').text()+'">';
                    champList += '<img id="championimg" src="'+$record.find('championFace').text() +'">';
                    champList += '<h4>'+$record.find('championName').text()+'</h4></a></div>';
                    }
                }
            }
            $('#midchampion_container').html(champList);
        }
        function bottomList(){
            var i, champList='', championName='', championId='', line='';
            if(count>0) {
                for(i=0 ; i<count ; i+=1) {
                      $record = $(Doc).find('champion').eq(i);
                      line = $record.find('line').text();
                      if(line=="바텀"){
                    champList += '<div class="champion""><a id="item_a" href="#'+$record.find('championId').text()+'">';
                    champList += '<img id="championimg" src="'+$record.find('championFace').text() +'">';
                    champList += '<h4>'+$record.find('championName').text()+'</h4></a></div>';
                    }
                }
            }
            $('#bottomchampion_container').html(champList);
        }
        function supportList(){
            var i, champList='', championName='', championId='', line='';
            if(count>0) {
                for(i=0 ; i<count ; i+=1) {
                      $record = $(Doc).find('champion').eq(i);
                      line = $record.find('line').text();
                      if(line=="서폿"){
                    champList += '<div class="champion""><a id="item_a" href="#'+$record.find('championId').text()+'">';
                    champList += '<img id="championimg" src="'+$record.find('championFace').text() +'">';
                    champList += '<h4>'+$record.find('championName').text()+'</h4></a></div>';
                    }
                }
            }
            $('#supportchampion_container').html(champList);
        }
        
        function garenInfo(){
            var champInfo='', championName='', skillInfo='', champvoice='';
            $record = $(Doc).find('champion').eq(0);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img id="garenFace" style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[0] = new Audio($record.find('dialogueSound').text());
            $('#gareninfo').html(champInfo);
        }
        function nunuInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(1);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[1] = new Audio($record.find('dialogueSound').text());
            $('#nunuinfo').html(champInfo);
        }
        function dariusInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(2);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[2] = new Audio($record.find('dialogueSound').text());
            $('#dariusinfo').html(champInfo);
        }
        function dianaInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(3);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[3] = new Audio($record.find('dialogueSound').text());
            $('#dianainfo').html(champInfo);
        }
        function ryzeInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(4);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[4] = new Audio($record.find('dialogueSound').text());
            $('#ryzeinfo').html(champInfo);
        }
        function luxInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(5);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[5] = new Audio($record.find('dialogueSound').text());
            $('#luxinfo').html(champInfo);
        }
        function leonaInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(6);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[6] = new Audio($record.find('dialogueSound').text());
            $('#leonainfo').html(champInfo);
        }
        function masterYiInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(7);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[7] = new Audio($record.find('dialogueSound').text());
            $('#masterYiinfo').html(champInfo);
        }
        function morganaInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(8);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[8] = new Audio($record.find('dialogueSound').text());
            $('#morganainfo').html(champInfo);
        }
        function missFortuneInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(9);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[9] = new Audio($record.find('dialogueSound').text());
            $('#missFortuneinfo').html(champInfo);
        }
        function vayneInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(10);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[10] = new Audio($record.find('dialogueSound').text());
            $('#vayneinfo').html(champInfo);
        }
        function blitzcrankInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(11);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[11] = new Audio($record.find('dialogueSound').text());
            $('#blitzcrankinfo').html(champInfo);
        }
        function sionInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(12);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[12] = new Audio($record.find('dialogueSound').text());
            $('#sioninfo').html(champInfo);
        }
        function sorakaInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(13);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[13] = new Audio($record.find('dialogueSound').text());
            $('#sorakainfo').html(champInfo);
        }
        function sivirInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(14);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[14] = new Audio($record.find('dialogueSound').text());
            $('#sivirinfo').html(champInfo);
        }
        function ahriInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(15);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[15] = new Audio($record.find('dialogueSound').text());
            $('#ahriinfo').html(champInfo);
        }
        function alistarInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(16);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[16] = new Audio($record.find('dialogueSound').text());
            $('#alistarinfo').html(champInfo);
        }
        function annieInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(17);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[17] = new Audio($record.find('dialogueSound').text());
            $('#annieinfo').html(champInfo);
        }
        function asheInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(18);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[18] = new Audio($record.find('dialogueSound').text());
            $('#asheinfo').html(champInfo);
        }
        function warwickInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(19);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[19] = new Audio($record.find('dialogueSound').text());
            $('#warwickinfo').html(champInfo);
        }
        function jaxInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(20);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[20] = new Audio($record.find('dialogueSound').text());
            $('#jaxinfo').html(champInfo);
        }
        function zedInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(21);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[21] = new Audio($record.find('dialogueSound').text());
            $('#zedinfo').html(champInfo);
        }
        function katarinaInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(22);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[22] = new Audio($record.find('dialogueSound').text());
            $('#katarinainfo').html(champInfo);
        }
        function kayleInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(23);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[23] = new Audio($record.find('dialogueSound').text());
            $('#kayleinfo').html(champInfo);
        }
        function talonInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(24);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[24] = new Audio($record.find('dialogueSound').text());
            $('#taloninfo').html(champInfo);
        }
        function tristanaInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(25);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[25] = new Audio($record.find('dialogueSound').text());
            $('#tristanainfo').html(champInfo);
        }
        function tryndamereInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(26);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[26] = new Audio($record.find('dialogueSound').text());
            $('#tryndamereinfo').html(champInfo);
        }
        function twistedFateInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(27);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[27] = new Audio($record.find('dialogueSound').text());
            $('#twistedFateinfo').html(champInfo);
        }
        function teemoInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(28);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[28] = new Audio($record.find('dialogueSound').text());
            $('#teemoinfo').html(champInfo);
        }
        function fiddlesticksInfo(){
            var champInfo='', championName='';
            $record = $(Doc).find('champion').eq(29);
            champInfo += '<div class="info"><div style="text-align:center;"><h2>'+$record.find('championName').text()+'</h2>';
            champInfo += '<button id="'+$record.find('championId').text()+'voice" style="transform: scale(0.8);">';
            champInfo += '<i>'+$record.find('dialogue').text()+'</i></button>';
            champInfo += '<img style="transform: scale(1.25);" src="'+$record.find('championFace').text()+'"></div></div>';
            audio[29] = new Audio($record.find('dialogueSound').text());
            $('#fiddlesticksinfo').html(champInfo);
        }
        