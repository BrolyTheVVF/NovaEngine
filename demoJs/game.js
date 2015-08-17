/*
 *Debug
 */



 /*
 *Debug
 */
var tpsRnd = new Array();
var srcLst = {
	img: [
		 {"name": "player1", "src": "demoJs/img/p1.png", "position":{
				down1: {sx:0,sy:0,swidth:32,sheight:32}, down2: {sx:32,sy:0,swidth:32,sheight:32}, down3 :{sx:64,sy:0,swidth:32,sheight:32}, down4: {sx:32,sy:32,swidth:32,sheight:32}
				,left1: {sx:0,sy:32,swidth:32,sheight:32}, left2: {sx:32,sy:32,swidth:32,sheight:32}, left3: {sx:64,sy:32,swidth:32,sheight:32}, left4: {sx:32,sy:32,swidth:32,sheight:32}
				,right1: {sx:0,sy:64,swidth:32,sheight:32}, right2: {sx:32,sy:64,swidth:32,sheight:32}, right3: {sx:64,sy:64,swidth:32,sheight:32}, right4: {sx:32,sy:64,swidth:32,sheight:32}
				,up1: {sx:0,sy:128,swidth:32,sheight:32}, up2: {sx:32,sy:128,swidth:32,sheight:32}, up3: {sx:64,sy:128,swidth:32,sheight:32}, up4: {sx:32,sy:128,swidth:32,sheight:32}
			}
		}
		,{"name": "player2", "src": "demoJs/img/p2.png", "position":{
				down1: {sx:0,sy:0,swidth:32,sheight:32}, down2: {sx:32,sy:0,swidth:32,sheight:32}, down3 :{sx:64,sy:0,swidth:32,sheight:32}, down4: {sx:32,sy:32,swidth:32,sheight:32}
				,left1: {sx:0,sy:32,swidth:32,sheight:32}, left2: {sx:32,sy:32,swidth:32,sheight:32}, left3: {sx:64,sy:32,swidth:32,sheight:32}, left4: {sx:32,sy:32,swidth:32,sheight:32}
				,right1: {sx:0,sy:64,swidth:32,sheight:32}, right2: {sx:32,sy:64,swidth:32,sheight:32}, right3: {sx:64,sy:64,swidth:32,sheight:32}, right4: {sx:32,sy:64,swidth:32,sheight:32}
				,up1: {sx:0,sy:128,swidth:32,sheight:32}, up2: {sx:32,sy:128,swidth:32,sheight:32}, up3: {sx:64,sy:128,swidth:32,sheight:32}, up4: {sx:32,sy:128,swidth:32,sheight:32}
			}
		}
		,{"name": "playerSet1", "src": "demoJs/img/pSet1.png", "position":{
				down1: {sx:0,sy:0,swidth:32,sheight:32}, down2: {sx:32,sy:0,swidth:32,sheight:32}, down3 :{sx:64,sy:0,swidth:32,sheight:32}, down4: {sx:32,sy:32,swidth:32,sheight:32}
				,left1: {sx:0,sy:32,swidth:32,sheight:32}, left2: {sx:32,sy:32,swidth:32,sheight:32}, left3: {sx:64,sy:32,swidth:32,sheight:32}, left4: {sx:32,sy:32,swidth:32,sheight:32}
				,right1: {sx:0,sy:64,swidth:32,sheight:32}, right2: {sx:32,sy:64,swidth:32,sheight:32}, right3: {sx:64,sy:64,swidth:32,sheight:32}, right4: {sx:32,sy:64,swidth:32,sheight:32}
				,up1: {sx:0,sy:128,swidth:32,sheight:32}, up2: {sx:32,sy:128,swidth:32,sheight:32}, up3: {sx:64,sy:128,swidth:32,sheight:32}, up4: {sx:32,sy:128,swidth:32,sheight:32}
			}
		}
		,{"name": "arc1", "src": "demoJs/img/arc1.png"}
		,{"name": "arc2", "src": "demoJs/img/arc2.png"}
		/*5*/
		,{"name": "arc3", "src": "demoJs/img/arc3.png"}
		,{"name": "arc4", "src": "demoJs/img/arc4.png"}
		/** mapping **/
		,{"name": "mapping1", "src": "demoJs/img/mapping/1.png"}
		,{"name": "mapping2", "src": "demoJs/img/mapping/2.png"}
		,{"name": "mapping3", "src": "demoJs/img/mapping/3.png"}
		/*10*/
		,{"name": "mapping4", "src": "demoJs/img/mapping/4.png"}
		,{"name": "mapping5", "src": "demoJs/img/mapping/5.png"}
		,{"name": "mapping6", "src": "demoJs/img/mapping/6.png"}
		,{"name": "mapping7", "src": "demoJs/img/mapping/7.png"}
		,{"name": "mapping8", "src": "demoJs/img/mapping/8.png"}
		/*15*/
		,{"name": "mapping9", "src": "demoJs/img/mapping/9.png"}
		,{"name": "mapping10", "src": "demoJs/img/mapping/10.png"}
		,{"name": "mapping11", "src": "demoJs/img/mapping/11.png"}
		,{"name": "mapping12", "src": "demoJs/img/mapping/12.png"}
		,{"name": "mapping13", "src": "demoJs/img/mapping/13.png"}
		/*20*/
		,{"name": "mapping14", "src": "demoJs/img/mapping/14.png"}
		,{"name": "mapping15", "src": "demoJs/img/mapping/15.png"}
		/** end of "mapping" **/
	]
	,snd: [
		 {"name": "home", "src": "demoJs/snd/Home.ogg"}
		,{"name": "723", "src": "demoJs/snd/723.mp3"}
		,{"name": "725", "src": "demoJs/snd/725.mp3"}
		,{"name": "983_1246628473", "src": "demoJs/snd/983_1246628473.mp3"}
		,{"name": "KnifeSlice", "src": "demoJs/snd/Knife-Slice.mp3"}
		,{"name": "pageforward_01", "src": "demoJs/snd/pageforward_01.mp3"}
		,{"name": "song23", "src": "demoJs/snd/song23.mp3"}
		,{"name": "sword", "src": "demoJs/snd/sword.wav"}
		,{"name": "SwordDraw", "src": "demoJs/snd/Sword-Draw.mp3"}
		,{"name": "tm2_swing006", "src": "demoJs/snd/tm2_swing006.wav"}
		,{"name": "Epic_Game_of_Thrones", "src": "demoJs/snd/ambiance/Game of Thrones.mp3"}
		,{"name": "Main_Title_Test", "src": "demoJs/snd/ambiance/Main_Title_Test.mp3"}
		,{"name": "Pegboard_Nerds_Hero", "src": "demoJs/snd/ambiance/Pegboard Nerds - Hero.mp3"}
	]
};
_NOVAE.dynArr = [
	 {type: "txt",content: "NovaEngine V0.2", x:50, y: 50,scale: 1,frame:1,hitbox:false}
	,{type:"img",content: "arc2",x:400,y:400,width:32,height:32,hitbox:false}
	,{type:"img",content: "playerSet1",x:150,y:200,width:32,height:32,position: "down2",posMultipX:3,posMultipY:0,hitbox: true, frame: 2}
	,{type:"img",content: "playerSet1",x:250,y:200,width:32,height:32,position: "down2",posMultipX:6,posMultipY:0,hitbox: true, frame: 2}
	,{type:"img",content: "playerSet1",x:200,y:150,width:32,height:32,position: "down2",posMultipX:3,posMultipY:4,hitbox: true, frame: 2}
	,{type:"img",content: "playerSet1",x:200,y:250,width:32,height:32,position: "down2",posMultipX:6,posMultipY:4,hitbox: true, frame: 2}
	,{type:"img",content: "player1",x:20,y:20,width:32,height:32,position: "down1",hitbox: true, frame: 2}
]
_NOVAE.playList = ["Epic_Game_of_Thrones", "Main_Title_Test", "song23", "Pegboard_Nerds_Hero"];
_NOVAE.loadExtendsJs();
_NOVAE.loadData(srcLst, 22);
_NOVAE.onDataLoaded = function(){
	this.isDataLoaded = true;
	tpsRnd = [
			// {type:"txt",content: "TEST_TEST",x:125,y:75}
			// {type:"img",content: "player1",x:200,y:200,width:32,height:32,position: "down1",hitbox: true}
			// ,{type:"img",content: "player2",x:600,y:300,width:32,height:32,sx:32,sy:64,swidth:32,sheight:32,hitbox: true}
			// ,
			{"type":"img","content":"mapping1","x":1,"y":1,"width":32,"height":32},{"type":"img","content":"mapping1","x":1,"y":32,"width":32,"height":32},{"type":"img","content":"mapping1","x":1,"y":64,"width":32,"height":32},{"type":"img","content":"mapping1","x":1,"y":96,"width":32,"height":32},{"type":"img","content":"mapping1","x":1,"y":128,"width":32,"height":32},{"type":"img","content":"mapping1","x":1,"y":160,"width":32,"height":32},{"type":"img","content":"mapping1","x":1,"y":192,"width":32,"height":32},{"type":"img","content":"mapping1","x":1,"y":224,"width":32,"height":32},{"type":"img","content":"mapping1","x":1,"y":256,"width":32,"height":32},{"type":"img","content":"mapping1","x":1,"y":288,"width":32,"height":32},{"type":"img","content":"mapping1","x":1,"y":320,"width":32,"height":32},{"type":"img","content":"mapping1","x":1,"y":352,"width":32,"height":32},{"type":"img","content":"mapping1","x":1,"y":384,"width":32,"height":32},{"type":"img","content":"mapping1","x":1,"y":416,"width":32,"height":32},{"type":"img","content":"mapping1","x":1,"y":448,"width":32,"height":32},{"type":"img","content":"mapping1","x":32,"y":1,"width":32,"height":32},{"type":"img","content":"mapping1","x":32,"y":32,"width":32,"height":32},{"type":"img","content":"mapping1","x":32,"y":64,"width":32,"height":32},{"type":"img","content":"mapping1","x":32,"y":96,"width":32,"height":32},{"type":"img","content":"mapping1","x":32,"y":128,"width":32,"height":32},{"type":"img","content":"mapping1","x":32,"y":160,"width":32,"height":32},{"type":"img","content":"mapping1","x":32,"y":192,"width":32,"height":32},{"type":"img","content":"mapping1","x":32,"y":224,"width":32,"height":32},{"type":"img","content":"mapping1","x":32,"y":256,"width":32,"height":32},{"type":"img","content":"mapping1","x":32,"y":288,"width":32,"height":32},{"type":"img","content":"mapping1","x":32,"y":320,"width":32,"height":32},{"type":"img","content":"mapping1","x":32,"y":352,"width":32,"height":32},{"type":"img","content":"mapping1","x":32,"y":384,"width":32,"height":32},{"type":"img","content":"mapping1","x":32,"y":416,"width":32,"height":32},{"type":"img","content":"mapping1","x":32,"y":448,"width":32,"height":32},{"type":"img","content":"mapping1","x":64,"y":1,"width":32,"height":32},{"type":"img","content":"mapping1","x":64,"y":32,"width":32,"height":32},{"type":"img","content":"mapping1","x":64,"y":64,"width":32,"height":32},{"type":"img","content":"mapping1","x":64,"y":96,"width":32,"height":32},{"type":"img","content":"mapping1","x":64,"y":128,"width":32,"height":32},{"type":"img","content":"mapping1","x":64,"y":160,"width":32,"height":32},{"type":"img","content":"mapping1","x":64,"y":192,"width":32,"height":32},{"type":"img","content":"mapping1","x":64,"y":224,"width":32,"height":32},{"type":"img","content":"mapping1","x":64,"y":256,"width":32,"height":32},{"type":"img","content":"mapping1","x":64,"y":288,"width":32,"height":32},{"type":"img","content":"mapping1","x":64,"y":320,"width":32,"height":32},{"type":"img","content":"mapping1","x":64,"y":352,"width":32,"height":32},{"type":"img","content":"mapping1","x":64,"y":384,"width":32,"height":32},{"type":"img","content":"mapping1","x":64,"y":416,"width":32,"height":32},{"type":"img","content":"mapping1","x":64,"y":448,"width":32,"height":32},{"type":"img","content":"mapping1","x":96,"y":1,"width":32,"height":32},{"type":"img","content":"mapping1","x":96,"y":32,"width":32,"height":32},{"type":"img","content":"mapping1","x":96,"y":64,"width":32,"height":32},{"type":"img","content":"mapping1","x":96,"y":96,"width":32,"height":32},{"type":"img","content":"mapping1","x":96,"y":128,"width":32,"height":32},{"type":"img","content":"mapping1","x":96,"y":160,"width":32,"height":32},{"type":"img","content":"mapping1","x":96,"y":192,"width":32,"height":32},{"type":"img","content":"mapping1","x":96,"y":224,"width":32,"height":32},{"type":"img","content":"mapping1","x":96,"y":256,"width":32,"height":32},{"type":"img","content":"mapping1","x":96,"y":288,"width":32,"height":32},{"type":"img","content":"mapping1","x":96,"y":320,"width":32,"height":32},{"type":"img","content":"mapping1","x":96,"y":352,"width":32,"height":32},{"type":"img","content":"mapping1","x":96,"y":384,"width":32,"height":32},{"type":"img","content":"mapping1","x":96,"y":416,"width":32,"height":32},{"type":"img","content":"mapping1","x":96,"y":448,"width":32,"height":32},{"type":"img","content":"mapping1","x":128,"y":1,"width":32,"height":32},{"type":"img","content":"mapping1","x":128,"y":32,"width":32,"height":32},{"type":"img","content":"mapping1","x":128,"y":64,"width":32,"height":32},{"type":"img","content":"mapping1","x":128,"y":96,"width":32,"height":32},{"type":"img","content":"mapping1","x":128,"y":128,"width":32,"height":32},{"type":"img","content":"mapping1","x":128,"y":160,"width":32,"height":32},{"type":"img","content":"mapping1","x":128,"y":192,"width":32,"height":32},{"type":"img","content":"mapping1","x":128,"y":224,"width":32,"height":32},{"type":"img","content":"mapping1","x":128,"y":256,"width":32,"height":32},{"type":"img","content":"mapping1","x":128,"y":288,"width":32,"height":32},{"type":"img","content":"mapping1","x":128,"y":320,"width":32,"height":32},{"type":"img","content":"mapping1","x":128,"y":352,"width":32,"height":32},{"type":"img","content":"mapping1","x":128,"y":384,"width":32,"height":32},{"type":"img","content":"mapping1","x":128,"y":416,"width":32,"height":32},{"type":"img","content":"mapping1","x":128,"y":448,"width":32,"height":32},{"type":"img","content":"mapping1","x":160,"y":1,"width":32,"height":32},{"type":"img","content":"mapping1","x":160,"y":32,"width":32,"height":32},{"type":"img","content":"mapping1","x":160,"y":64,"width":32,"height":32},{"type":"img","content":"mapping1","x":160,"y":96,"width":32,"height":32},{"type":"img","content":"mapping1","x":160,"y":128,"width":32,"height":32},{"type":"img","content":"mapping1","x":160,"y":160,"width":32,"height":32},{"type":"img","content":"mapping1","x":160,"y":192,"width":32,"height":32},{"type":"img","content":"mapping1","x":160,"y":224,"width":32,"height":32},{"type":"img","content":"mapping1","x":160,"y":256,"width":32,"height":32},{"type":"img","content":"mapping1","x":160,"y":288,"width":32,"height":32},{"type":"img","content":"mapping1","x":160,"y":320,"width":32,"height":32},{"type":"img","content":"mapping1","x":160,"y":352,"width":32,"height":32},{"type":"img","content":"mapping1","x":160,"y":384,"width":32,"height":32},{"type":"img","content":"mapping1","x":160,"y":416,"width":32,"height":32},{"type":"img","content":"mapping1","x":160,"y":448,"width":32,"height":32},{"type":"img","content":"mapping1","x":192,"y":1,"width":32,"height":32},{"type":"img","content":"mapping1","x":192,"y":32,"width":32,"height":32},{"type":"img","content":"mapping1","x":192,"y":64,"width":32,"height":32},{"type":"img","content":"mapping1","x":192,"y":96,"width":32,"height":32},{"type":"img","content":"mapping1","x":192,"y":128,"width":32,"height":32},{"type":"img","content":"mapping1","x":192,"y":160,"width":32,"height":32},{"type":"img","content":"mapping1","x":192,"y":192,"width":32,"height":32},{"type":"img","content":"mapping1","x":192,"y":224,"width":32,"height":32},{"type":"img","content":"mapping1","x":192,"y":256,"width":32,"height":32},{"type":"img","content":"mapping1","x":192,"y":288,"width":32,"height":32},{"type":"img","content":"mapping1","x":192,"y":320,"width":32,"height":32},{"type":"img","content":"mapping1","x":192,"y":352,"width":32,"height":32},{"type":"img","content":"mapping1","x":192,"y":384,"width":32,"height":32},{"type":"img","content":"mapping1","x":192,"y":416,"width":32,"height":32},{"type":"img","content":"mapping1","x":192,"y":448,"width":32,"height":32},{"type":"img","content":"mapping1","x":224,"y":1,"width":32,"height":32},{"type":"img","content":"mapping1","x":224,"y":32,"width":32,"height":32},{"type":"img","content":"mapping1","x":224,"y":64,"width":32,"height":32},{"type":"img","content":"mapping1","x":224,"y":96,"width":32,"height":32},{"type":"img","content":"mapping1","x":224,"y":128,"width":32,"height":32},{"type":"img","content":"mapping1","x":224,"y":160,"width":32,"height":32},{"type":"img","content":"mapping1","x":224,"y":192,"width":32,"height":32},{"type":"img","content":"mapping1","x":224,"y":224,"width":32,"height":32},{"type":"img","content":"mapping1","x":224,"y":256,"width":32,"height":32},{"type":"img","content":"mapping1","x":224,"y":288,"width":32,"height":32},{"type":"img","content":"mapping1","x":224,"y":320,"width":32,"height":32},{"type":"img","content":"mapping1","x":224,"y":352,"width":32,"height":32},{"type":"img","content":"mapping1","x":224,"y":384,"width":32,"height":32},{"type":"img","content":"mapping1","x":224,"y":416,"width":32,"height":32},{"type":"img","content":"mapping1","x":224,"y":448,"width":32,"height":32},{"type":"img","content":"mapping1","x":256,"y":1,"width":32,"height":32},{"type":"img","content":"mapping1","x":256,"y":32,"width":32,"height":32},{"type":"img","content":"mapping1","x":256,"y":64,"width":32,"height":32},{"type":"img","content":"mapping1","x":256,"y":96,"width":32,"height":32},{"type":"img","content":"mapping1","x":256,"y":128,"width":32,"height":32},{"type":"img","content":"mapping1","x":256,"y":160,"width":32,"height":32},{"type":"img","content":"mapping1","x":256,"y":192,"width":32,"height":32},{"type":"img","content":"mapping1","x":256,"y":224,"width":32,"height":32},{"type":"img","content":"mapping1","x":256,"y":256,"width":32,"height":32},{"type":"img","content":"mapping1","x":256,"y":288,"width":32,"height":32},{"type":"img","content":"mapping1","x":256,"y":320,"width":32,"height":32},{"type":"img","content":"mapping1","x":256,"y":352,"width":32,"height":32},{"type":"img","content":"mapping1","x":256,"y":384,"width":32,"height":32},{"type":"img","content":"mapping1","x":256,"y":416,"width":32,"height":32},{"type":"img","content":"mapping1","x":256,"y":448,"width":32,"height":32},{"type":"img","content":"mapping1","x":288,"y":1,"width":32,"height":32},{"type":"img","content":"mapping1","x":288,"y":32,"width":32,"height":32},{"type":"img","content":"mapping1","x":288,"y":64,"width":32,"height":32},{"type":"img","content":"mapping1","x":288,"y":96,"width":32,"height":32},{"type":"img","content":"mapping1","x":288,"y":128,"width":32,"height":32},{"type":"img","content":"mapping1","x":288,"y":160,"width":32,"height":32},{"type":"img","content":"mapping1","x":288,"y":192,"width":32,"height":32},{"type":"img","content":"mapping1","x":288,"y":224,"width":32,"height":32},{"type":"img","content":"mapping1","x":288,"y":256,"width":32,"height":32},{"type":"img","content":"mapping1","x":288,"y":288,"width":32,"height":32},{"type":"img","content":"mapping1","x":288,"y":320,"width":32,"height":32},{"type":"img","content":"mapping1","x":288,"y":352,"width":32,"height":32},{"type":"img","content":"mapping1","x":288,"y":384,"width":32,"height":32},{"type":"img","content":"mapping1","x":288,"y":416,"width":32,"height":32},{"type":"img","content":"mapping1","x":288,"y":448,"width":32,"height":32},{"type":"img","content":"mapping1","x":320,"y":1,"width":32,"height":32},{"type":"img","content":"mapping1","x":320,"y":32,"width":32,"height":32},{"type":"img","content":"mapping1","x":320,"y":64,"width":32,"height":32},{"type":"img","content":"mapping1","x":320,"y":96,"width":32,"height":32},{"type":"img","content":"mapping1","x":320,"y":128,"width":32,"height":32},{"type":"img","content":"mapping1","x":320,"y":160,"width":32,"height":32},{"type":"img","content":"mapping1","x":320,"y":192,"width":32,"height":32},{"type":"img","content":"mapping1","x":320,"y":224,"width":32,"height":32},{"type":"img","content":"mapping1","x":320,"y":256,"width":32,"height":32},{"type":"img","content":"mapping1","x":320,"y":288,"width":32,"height":32},{"type":"img","content":"mapping1","x":320,"y":320,"width":32,"height":32},{"type":"img","content":"mapping1","x":320,"y":352,"width":32,"height":32},{"type":"img","content":"mapping1","x":320,"y":384,"width":32,"height":32},{"type":"img","content":"mapping1","x":320,"y":416,"width":32,"height":32},{"type":"img","content":"mapping1","x":320,"y":448,"width":32,"height":32},{"type":"img","content":"mapping1","x":352,"y":1,"width":32,"height":32},{"type":"img","content":"mapping1","x":352,"y":32,"width":32,"height":32},{"type":"img","content":"mapping1","x":352,"y":64,"width":32,"height":32},{"type":"img","content":"mapping1","x":352,"y":96,"width":32,"height":32},{"type":"img","content":"mapping1","x":352,"y":128,"width":32,"height":32},{"type":"img","content":"mapping1","x":352,"y":160,"width":32,"height":32},{"type":"img","content":"mapping1","x":352,"y":192,"width":32,"height":32},{"type":"img","content":"mapping1","x":352,"y":224,"width":32,"height":32},{"type":"img","content":"mapping1","x":352,"y":256,"width":32,"height":32},{"type":"img","content":"mapping1","x":352,"y":288,"width":32,"height":32},{"type":"img","content":"mapping1","x":352,"y":320,"width":32,"height":32},{"type":"img","content":"mapping1","x":352,"y":352,"width":32,"height":32},{"type":"img","content":"mapping1","x":352,"y":384,"width":32,"height":32},{"type":"img","content":"mapping1","x":352,"y":416,"width":32,"height":32},{"type":"img","content":"mapping1","x":352,"y":448,"width":32,"height":32},{"type":"img","content":"mapping1","x":384,"y":1,"width":32,"height":32},{"type":"img","content":"mapping1","x":384,"y":32,"width":32,"height":32},{"type":"img","content":"mapping1","x":384,"y":64,"width":32,"height":32},{"type":"img","content":"mapping1","x":384,"y":96,"width":32,"height":32},{"type":"img","content":"mapping1","x":384,"y":128,"width":32,"height":32},{"type":"img","content":"mapping1","x":384,"y":160,"width":32,"height":32},{"type":"img","content":"mapping1","x":384,"y":192,"width":32,"height":32},{"type":"img","content":"mapping1","x":384,"y":224,"width":32,"height":32},{"type":"img","content":"mapping1","x":384,"y":256,"width":32,"height":32},{"type":"img","content":"mapping1","x":384,"y":288,"width":32,"height":32},{"type":"img","content":"mapping1","x":384,"y":320,"width":32,"height":32},{"type":"img","content":"mapping1","x":384,"y":352,"width":32,"height":32},{"type":"img","content":"mapping1","x":384,"y":384,"width":32,"height":32},{"type":"img","content":"mapping1","x":384,"y":416,"width":32,"height":32},{"type":"img","content":"mapping1","x":384,"y":448,"width":32,"height":32},{"type":"img","content":"mapping1","x":416,"y":1,"width":32,"height":32},{"type":"img","content":"mapping1","x":416,"y":32,"width":32,"height":32},{"type":"img","content":"mapping1","x":416,"y":64,"width":32,"height":32},{"type":"img","content":"mapping1","x":416,"y":96,"width":32,"height":32},{"type":"img","content":"mapping1","x":416,"y":128,"width":32,"height":32},{"type":"img","content":"mapping1","x":416,"y":160,"width":32,"height":32},{"type":"img","content":"mapping1","x":416,"y":192,"width":32,"height":32},{"type":"img","content":"mapping1","x":416,"y":224,"width":32,"height":32},{"type":"img","content":"mapping1","x":416,"y":256,"width":32,"height":32},{"type":"img","content":"mapping1","x":416,"y":288,"width":32,"height":32},{"type":"img","content":"mapping1","x":416,"y":320,"width":32,"height":32},{"type":"img","content":"mapping1","x":416,"y":352,"width":32,"height":32},{"type":"img","content":"mapping1","x":416,"y":384,"width":32,"height":32},{"type":"img","content":"mapping1","x":416,"y":416,"width":32,"height":32},{"type":"img","content":"mapping1","x":416,"y":448,"width":32,"height":32},{"type":"img","content":"mapping1","x":448,"y":1,"width":32,"height":32},{"type":"img","content":"mapping1","x":448,"y":32,"width":32,"height":32},{"type":"img","content":"mapping1","x":448,"y":64,"width":32,"height":32},{"type":"img","content":"mapping1","x":448,"y":96,"width":32,"height":32},{"type":"img","content":"mapping1","x":448,"y":128,"width":32,"height":32},{"type":"img","content":"mapping1","x":448,"y":160,"width":32,"height":32},{"type":"img","content":"mapping1","x":448,"y":192,"width":32,"height":32},{"type":"img","content":"mapping1","x":448,"y":224,"width":32,"height":32},{"type":"img","content":"mapping1","x":448,"y":256,"width":32,"height":32},{"type":"img","content":"mapping1","x":448,"y":288,"width":32,"height":32},{"type":"img","content":"mapping1","x":448,"y":320,"width":32,"height":32},{"type":"img","content":"mapping1","x":448,"y":352,"width":32,"height":32},{"type":"img","content":"mapping1","x":448,"y":384,"width":32,"height":32},{"type":"img","content":"mapping1","x":448,"y":416,"width":32,"height":32},{"type":"img","content":"mapping1","x":448,"y":448,"width":32,"height":32}
		];
	_NOVAE.render(tpsRnd, {width: 256,height: 256,x: 0,y: 0,focus: 6});
	console.clear();
	_NOVAE.launchPlaylist()
}

var moveRate = 25;
function move(d){
	var focEnt = _NOVAE.dynArr[_NOVAE.camera.focus];
	if(isDown(KEYBOARD.SHIFT)){
		var mvR = Math.round(moveRate / 1.5);
	}else{
		var mvR = moveRate;
	}
	var noHitBox = true;
	for(var x in _NOVAE.camera.onScreen){
		var entId = _NOVAE.camera.onScreen[x];
		if(entId != _NOVAE.camera.focus){
			var ent = _NOVAE.dynArr[x];
			if(ent.hitbox === true){
				if(d == "up"){
					var entPntMaxX = ent.x + ent.width;
					var entPntMaxY = ent.y + ent.height;
					var entPntMinX = ent.x;
					var entPntMinY = ent.y;
					var focPntMinX = focEnt.x;
					var focPntMinY = focEnt.y - 1;
					var focPntMaxX = focEnt.x + focEnt.width;
					var focPntMaxY = focEnt.y + focEnt.height - 1;
				}else if(d == "left"){
					var entPntMaxX = ent.x + ent.width;
					var entPntMaxY = ent.y + ent.height;
					var entPntMinX = ent.x;
					var entPntMinY = ent.y;
					var focPntMinX = focEnt.x - 1;
					var focPntMinY = focEnt.y;
					var focPntMaxX = focEnt.x + focEnt.width - 1;
					var focPntMaxY = focEnt.y + focEnt.height;
				}else if(d == "down"){
					var entPntMaxX = ent.x + ent.width;
					var entPntMaxY = ent.y + ent.height;
					var entPntMinX = ent.x;
					var entPntMinY = ent.y;
					var focPntMinX = focEnt.x;
					var focPntMinY = focEnt.y + 1;
					var focPntMaxX = focEnt.x + focEnt.width;
					var focPntMaxY = focEnt.y + focEnt.height + 1;
				}else if(d == "right"){
					var entPntMaxX = ent.x + ent.width;
					var entPntMaxY = ent.y + ent.height;
					var entPntMinX = ent.x;
					var entPntMinY = ent.y;
					var focPntMinX = focEnt.x + 1;
					var focPntMinY = focEnt.y;
					var focPntMaxX = focEnt.x + focEnt.width + 1;
					var focPntMaxY = focEnt.y + focEnt.height;
				}else{
					var entPntMaxX = ent.x + ent.width;
					var entPntMaxY = ent.y + ent.height;
					var entPntMinX = ent.x;
					var entPntMinY = ent.y;
					var focPntMinX = focEnt.x;
					var focPntMinY = focEnt.y;
					var focPntMaxX = focEnt.x + focEnt.width;
					var focPntMaxY = focEnt.y + focEnt.height;
				}
				if(
					   entPntMaxX >= focPntMinX
					&& entPntMaxX <= focPntMaxX
					&& entPntMaxY >= focPntMinY
					&& entPntMaxY <= focPntMaxY
				){
					noHitBox = false;
					break;
				}else if(
					   entPntMinX >= focPntMinX
					&& entPntMinX <= focPntMaxX
					&& entPntMinY >= focPntMinY
					&& entPntMinY <= focPntMaxY
				){
					noHitBox = false;
					break;
				}else if(
					   entPntMaxX >= focPntMinX
					&& entPntMaxX <= focPntMaxX
					&& entPntMinY >= focPntMinY
					&& entPntMinY <= focPntMaxY
				){
					noHitBox = false;
					break;
				}else if(
					   entPntMinX >= focPntMinX
					&& entPntMinX <= focPntMaxX
					&& entPntMaxY >= focPntMinY
					&& entPntMaxY <= focPntMaxY
				){
					noHitBox = false;
					break;
				}
			}
		}
	}
	if(d == "up"){
		if(noHitBox){
			focEnt.y--;
		}
		setTimeout(function(){if(isDown(KEYBOARD[moveKeys.up])){move("up");}},mvR);
	}else if(d == "left"){
		if(noHitBox){
			focEnt.x--;
		}
		setTimeout(function(){if(isDown(KEYBOARD[moveKeys.left])){move("left");}},mvR);
	}else if(d == "down"){
		if(noHitBox){
			focEnt.y++;
		}
		setTimeout(function(){if(isDown(KEYBOARD[moveKeys.down])){move("down");}},mvR);
	}else if(d == "right"){
		if(noHitBox){
			focEnt.x++;
		}
		setTimeout(function(){if(isDown(KEYBOARD[moveKeys.right])){move("right");}},mvR);
	}
}