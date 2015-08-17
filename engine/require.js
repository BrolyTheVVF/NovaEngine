// var _NOVAE = new Object();
/* Deux canvas : un static et un dynamique */
function include (p) {
	var xhr;
	if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
	else if (window.ActiveXObject) xhr = new ActiveXObject("Microsoft.XMLHTTP");
	if (xhr == null) throw new Error("XMLHttpRequest non supporté");
	xhr.open("GET", p, true);
	xhr.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
	setTimeout(this.responseText, 0);
	}};xhr.send(null);
}
window.onresize = function(){_NOVAE.ui.update("all")};
if(typeof body === 'undefined'){
	body = document.getElementsByTagName("body")[0];
	body.style.margin = "0px";
	body.style.padding = "0px";
	body.style.textAlign = "center";
	body.style.backgroundColor = "black";
}
if(typeof string === 'undefined'){var string = "string";}
if(typeof String === 'undefined'){var String = "string";}
if(typeof STRING === 'undefined'){var STRING = "string";}
if(typeof str === 'undefined'){var str = "string";}
if(typeof Str === 'undefined'){var Str = "string";}
if(typeof STR === 'undefined'){var STR = "string";}
if(typeof object === 'undefined'){var object = "object";}
if(typeof Object === 'undefined'){var Object = "object";}
if(typeof OBJECT === 'undefined'){var OBJECT = "object";}
var _NOVAE = {
	 ver: "0.2"
	,debug: true
	,fullscreen: true
	,fsRatio: true
	,multiFrame: true
	,nbFrame: 3
	,frameSize: {"width": 1024,"height": 2048}
	,fps: 0
	,frameRate: 0
	,rps: 50
	,soundVolume: 0.2
	,rndEventId: 0
	,rndCnvName: "NOVAE_render"
	,dynCnvName: "NOVAE_dynamic"
	,statCnvName: "NOVAE_static"
	,dynArr: [{"type": "txt","content": "NovaEngine V0.2", "x":50, "y": 50,"scale": 1,"frame":0/*scale isn't sed yet for txt*/}]
	,statArr: []
	,playList: []
	,playListIndex: 0
	,log: function(t){if(this.debug){console.log(t);}}
	,warn: function(t){if(this.debug){console.warn(t);}}
	,error: function(t){if(this.debug){console.error(t);}}
	,camera: {
		 width: 512
		,height: 512
		,x: 1
		,y: 1
		,focus: 0
	}
	,source: {
		 img: {}
		,snd: {}
	}
	,isDataLoaded: false
	,nbDataToLoad: 0
	,extendsJs: [
		 "engine/extend/locationParser.js"
		,"engine/extend/sha256.js"
		,"engine/extend/String.js"
		,"engine/extend/events/keyEvents.js"
		/* ,"engine/extend/events/timerEvents.js" */
		,"http://code.jquery.com/jquery-1.11.3.min.js"
	]
	,rType: function(x){
		return Object.prototype.toString.call( x );
	}
	,loadData: function(arr, nb){
		this.nbDataToLoad = nb;
		if(arr == null){
			return false;
		}
		if( this.rType(arr) == "[object Array]" ){
			
		}else if( this.rType(arr) == "[object Object]" ){
			if(arr.name != null && arr.src != null && arr.type != null){
				if(arr.type != "img" && arr.type != "image" && arr.type != "snd" && arr.type != "sound"){
					return false;
				}
				if(arr.type == "img" || arr.type != "image"){
					var o = new Image;
				}else{
					var o = new Audio();
				}
				o.onload = function(){_NOVAE.onDataLoaded();};
				o.src = arr.src;
				if(arr.type == "img" || arr.type != "image"){
					this.source.img[arr.name] = {"item": o};
				}else{
					this.source.snd[arr.name] = {"item": o};
				}
			}else{
				this.log("Loading full set of data");
				if(arr.img == null){
					return false;
				}if(arr.snd == null){
					return false;
				}
				for(var nI in arr.img){
					var i = arr.img[nI];
					// this.log("Loading one more image file ");
					if( i.name != null && i.src != null ){
						this.log("Loading : "+i.name+" image");
						var o = new Image;
						o.onload = function(){
							_NOVAE.nbDataToLoad--;
							console.log(_NOVAE.nbDataToLoad+" last Data to load.");
							if(_NOVAE.nbDataToLoad <= 0){
								_NOVAE.onDataLoaded();
							}
						};
						o.src = i.src;
						this.source.img[i.name] = {"item": o};
						if(i.position != null){
							this.source.img[i.name].position = i.position;
						}
					}
				}
				
				for(var nS in arr.snd){
					var s = arr.snd[nS];
					// this.log("Loading one more Sound file ");
					if( s.name != null && s.src != null ){
						this.log("Loading : "+s.name+" sound");
						var o = new Audio;
						// _NOVAE.source.snd[_NOVAE.playList[_NOVAE.playListIndex]].item.stop = function(){return this.pause();this.currentTime = 0;}
						// _NOVAE.source.snd[_NOVAE.playList[_NOVAE.playListIndex]].item.end = function(){return this.pause();this.currentTime = this.duration;}
						o.stop = function(){
							this.pause();
							this.currentTime = 0;
						};
						o.end = function(){
							this.currentTime = this.duration;
						};
						/* o.onload = function(){
							_NOVAE.nbDataToLoad--;
							console.log(_NOVAE.nbDataToLoad+" last Data to load.");
							if(_NOVAE.nbDataToLoad <= 0){
								_NOVAE.onDataLoaded();
							}
						}; */
						o.src = s.src;
						this.source.snd[s.name] = {"item": o};
					}
				}
			}
		}
	}
	,onDataLoaded: function(){
		this.isDataLoaded = true;
	}
	,render: function(arr, camera){
		if(this.statArr != null && arr == null){
			arr = this.statArr;
		}else{
			this.statArr = arr;
		}
		if(!document){
			console.error("DOCUMENT is not defined yet.");
			return false;
		}
		/*******/
		var o = document.createElement('canvas');
		var rndCnvName = this.rndCnvName;
		var dynCnvName = this.dynCnvName;
		var statCnvName = this.statCnvName;
		var i = document.getElementById(rndCnvName);
		if(i == null || i.length < 1){
			o.id = rndCnvName;
			body.appendChild(o);
		}else{
			this.log(rndCnvName+" already exists.");
		}
		o = document.getElementById(rndCnvName);
		/*******/
		var s = document.createElement('canvas');
		i = document.getElementById(statCnvName);
		if(i == null || i.length < 1){
			s.id = statCnvName;
			s.style.display = "none";
			body.appendChild(s);
		}else{
			this.log(statCnvName+" already exists.");
		}
		/*******/
		if(this.multiFrame === true){
			for(nbCnv = 1; nbCnv <= this.nbFrame; nbCnv ++){
				var d = document.createElement('canvas');
				i = document.getElementById(dynCnvName+"frame"+nbCnv);
				if(i == null || i.length < 1){
					d.id = dynCnvName+"frame"+nbCnv;
					d.style.display = "none";
					body.appendChild(d);
				}else{
					this.log(dynCnvName+" already exists.");
				}
				if(this.canvas_dynamic == null){
					this.canvas_dynamic = new Array();
				}if(this.ctx_dynamic == null){
					this.ctx_dynamic = new Array();
				}
				/* d.height = window.innerHeight;
				d.width = window.innerWidth; */
				d.height = this.frameSize.height;
				d.width = this.frameSize.width;
				this.canvas_dynamic[nbCnv] = document.getElementById(dynCnvName+"frame"+nbCnv);
				this.ctx_dynamic[nbCnv] = this.canvas_dynamic[nbCnv].getContext('2d');
			}
		}else{
			var d = document.createElement('canvas');
			i = document.getElementById(dynCnvName);
			if(i == null || i.length < 1){
				d.id = dynCnvName;
				d.style.display = "none";
				body.appendChild(d);
			}else{
				this.log(dynCnvName+" already exists.");
			}
			/* d.height = window.innerHeight;
			d.width = window.innerWidth; */
			d.height = this.frameSize.height;
			d.width = this.frameSize.width;
			this.canvas_dynamic = document.getElementById(dynCnvName);
			this.ctx_dynamic = this.canvas_dynamic.getContext('2d');
		}
		if(camera == null){
			camera = this.camera;
		}else{
			this.camera = camera;
		}
		o.height = camera.height;
		o.width = camera.width;
		o.style.display = "inline";
		o.style.zIndex = "-999";
		/* s.height = window.innerHeight;
		s.width = window.innerWidth; */
		s.height = this.frameSize.height;
		s.width = this.frameSize.width;
		this.canvas_render = document.getElementById(rndCnvName);
		this.canvas_static = document.getElementById(statCnvName);
		this.ctx_render = this.canvas_render.getContext('2d');
		this.ctx_static = this.canvas_static.getContext('2d');
		/********/
		this.ctx_static.rect(0,0,this.canvas_static.width,this.canvas_static.height);
		this.ctx_static.fillStyle="grey";
		this.ctx_static.fill();
		// this.ctx_static.fillStyle = "#FF0000";
		// this.ctx_static.font="12px Georgia";
		if(arr != null && (typeof arr === "object" || typeof arr === "array")/* only one thing to "draw" or multiple objects... */){
			for( j = 0; j < arr.length; j++ ){
				var ar = arr[j];
				this.log("LIGNE - "+j+" - "+JSON.stringify(ar));
				if(ar.type != null && ar.content != null){
					if(ar.type == "txt"){
						if(!ar.x || ar.x < 1){
							ar.x = 1;
						}if(!ar.y || ar.y < 1){
							ar.y = 1;
						}
						this.ctx_static.fillText( ar.content, ar.x, ar.y );
					}else if(ar.type == "img"){
						if(!ar.x || ar.x < 1){
							ar.x = 1;
						}if(!ar.y || ar.y < 1){
							ar.y = 1;
						}if(!ar.width){
							ar.width = 32;
						}if(!ar.height){
							ar.height = 32;
						}
						if(typeof ar.content == "string" && this.source.img[ar.content] != null){
							var dOb = this.source.img[ar.content].item;
							if(ar.position){
								if(this.source.img[ar.content].position[ar.position] != null){
									if(!ar.posMultipX){
										ar.posMultipX = 0;
									}if(!ar.posMultipY){
										ar.posMultipY = 0;
									}
									var subPos = this.source.img[ar.content].position[ar.position];
									ar.sx = subPos.sx + (subPos.swidth * ar.posMultipX);
									ar.sy = subPos.sy + (subPos.sheight * ar.posMultipY);
									ar.swidth = subPos.swidth;
									ar.sheight = subPos.sheight;
								}
							}
						}else{
							var dOb = ar.content;
						}
						if(ar.sx != null && ar.sy != null && ar.swidth != null && ar.sheight != null){
							this.ctx_static.drawImage(
											dOb
											,ar.sx
											,ar.sy
											,ar.swidth
											,ar.sheight
											,ar.x
											,ar.y
											,ar.width
											,ar.height
										);
						}else{
							this.ctx_static.drawImage(
											dOb
											,ar.x
											,ar.y
											,ar.width//x size
											,ar.height//y size
										);
						}
					}else{
						this.warn("undefined type.");
					}
				}else if(ar.content != null && (typeof ar.content == "string" || typeof ar.content == "number")){
					this.ctx_static.fillText( ar.content, 1, 1 );
				}else if(ar != null && (typeof ar == "string" || typeof ar == "number")){
					this.ctx_static.fillText( ar, 1, 1 );
				}else{
					this.warn("undefined type or content.");
				}
			}
		}
		
		
		/********/
		this.keyManager();
		this.renderDyn();
		this.getFps();
		/********/
	}
	,renderDyn: function(){
		this.ctx_render.clearRect(0, 0, this.canvas_render.width, this.canvas_render.height);
		this.fps++;
		if(this.multiFrame === true){
			for(i = 1; i <= this.nbFrame; i++){
				this.ctx_dynamic[i].clearRect(0, 0, this.canvas_dynamic[i].width, this.canvas_dynamic[i].height);
			}
			this.camera.onScreen = [];
			for(var v in this.dynArr){
				var ar = this.dynArr[v];
				if(ar.frame == null || ar.frame < 1 || ar.frame > this.nbFrame){
					ar.frame = 1;
				}
				if(ar.x >= this.camera.x
					&& ar.y >= this.camera.y
					&& (ar.x + ar.width) <= (this.camera.x + this.camera.width)
					&& (ar.y + ar.height) <= (this.camera.y + this.camera.height)
					&& ar.hitbox === true
				){
					_NOVAE.camera.onScreen.push(v);
				}
				if(ar.type != null && ar.content != null){
					if(ar.type == "txt"){
						if(!ar.x || ar.x < 1){
							ar.x = 1;
						}if(!ar.y || ar.y < 1){
							ar.y = 1;
						}
						this.ctx_dynamic[ar.frame].fillText( ar.content, ar.x, ar.y );
					}else if(ar.type == "img"){
						if(!ar.x || ar.x < 1){
							ar.x = 1;
						}if(!ar.y || ar.y < 1){
							ar.y = 1;
						}if(!ar.width){
							ar.width = 32;
						}if(!ar.height){
							ar.height = 32;
						}
						if(typeof ar.content == "string" && this.source.img[ar.content] != null){
							var dOb = this.source.img[ar.content].item;
							if(ar.position){
								if(this.source.img[ar.content].position[ar.position] != null){
									if(!ar.posMultipX){
										ar.posMultipX = 0;
									}if(!ar.posMultipY){
										ar.posMultipY = 0;
									}
									var subPos = this.source.img[ar.content].position[ar.position];
									ar.sx = subPos.sx + (subPos.swidth * ar.posMultipX);
									ar.sy = subPos.sy + (subPos.sheight * ar.posMultipY);
									ar.swidth = subPos.swidth;
									ar.sheight = subPos.sheight;
								}
							}
						}else{
							var dOb = ar.content;
						}
						if(ar.sx != null && ar.sy != null && ar.swidth != null && ar.sheight != null){
							this.ctx_dynamic[ar.frame].drawImage(
											dOb
											,ar.sx
											,ar.sy
											,ar.swidth
											,ar.sheight
											,ar.x
											,ar.y
											,ar.width
											,ar.height
										);
						}else{
							this.ctx_dynamic[ar.frame].drawImage(
											dOb
											,ar.x
											,ar.y
											,ar.width//x size
											,ar.height//y size
										);
						}
					}else{
						this.warn("undefined type.");
					}
				}else if(ar.content != null && (typeof ar.content == "string" || typeof ar.content == "number")){
					this.ctx_dynamic[ar.frame].fillText( ar.content, 12, 12 );
				}else if(ar != null && (typeof ar == "string" || typeof ar == "number")){
					this.ctx_dynamic[ar.frame].fillText( ar, 12, 12 );
				}else{
					this.warn("undefined type or content.");
				}
			}
		}else{
			this.ctx_dynamic.clearRect(0, 0, this.canvas_dynamic.width, this.canvas_dynamic.height);
			for(var v in this.dynArr){
				var ar = this.dynArr[v];
				if(ar.type != null && ar.content != null){
					if(ar.type == "txt"){
						if(!ar.x || ar.x < 1){
							ar.x = 1;
						}if(!ar.y || ar.y < 1){
							ar.y = 1;
						}
						this.ctx_dynamic.fillText( ar.content, ar.x, ar.y );
					}else if(ar.type == "img"){
						if(!ar.x || ar.x < 1){
							ar.x = 1;
						}if(!ar.y || ar.y < 1){
							ar.y = 1;
						}if(!ar.width){
							ar.width = 32;
						}if(!ar.height){
							ar.height = 32;
						}
						if(typeof ar.content == "string" && this.source.img[ar.content] != null){
							var dOb = this.source.img[ar.content].item;
							if(ar.position){
								if(this.source.img[ar.content].position[ar.position] != null){
									if(!ar.posMultipX){
										ar.posMultipX = 0;
									}if(!ar.posMultipY){
										ar.posMultipY = 0;
									}
									var subPos = this.source.img[ar.content].position[ar.position];
									ar.sx = subPos.sx + (subPos.swidth * ar.posMultipX);
									ar.sy = subPos.sy + (subPos.sheight * ar.posMultipY);
									ar.swidth = subPos.swidth;
									ar.sheight = subPos.sheight;
								}
							}
						}else{
							var dOb = ar.content;
						}
						if(ar.sx != null && ar.sy != null && ar.swidth != null && ar.sheight != null){
							this.ctx_dynamic.drawImage(
											dOb
											,ar.sx
											,ar.sy
											,ar.swidth
											,ar.sheight
											,ar.x
											,ar.y
											,ar.width
											,ar.height
										);
						}else{
							this.ctx_dynamic.drawImage(
											dOb
											,ar.x
											,ar.y
											,ar.width//x size
											,ar.height//y size
										);
						}
					}else{
						this.warn("undefined type.");
					}
				}else if(ar.content != null && (typeof ar.content == "string" || typeof ar.content == "number")){
					this.ctx_dynamic.fillText( ar.content, 1, 1 );
				}else if(ar != null && (typeof ar == "string" || typeof ar == "number")){
					this.ctx_dynamic.fillText( ar, 1, 1 );
				}else{
					this.warn("undefined type or content.");
				}
			}
		}
		var focEnt = this.dynArr[this.camera.focus];
		this.camera.x = focEnt.x - (this.camera.width / 2) + (focEnt.width / 2);
		if(this.camera.x < 1)this.camera.x = 1;
		// if(this.camera.x > ( this.canvas_static.width - this.canvas_render.width))this.camera.x = ( this.canvas_static.width - this.canvas_render.width);
		this.camera.y = focEnt.y - (this.camera.height / 2) + (focEnt.height / 2);
		if(this.camera.y < 1)this.camera.y = 1;
		// if(this.camera.y > ( this.canvas_static.height - this.canvas_render.height))this.camera.y = ( this.canvas_static.height - this.canvas_render.height);
		/*******/
		if(this.fullscreen){
			this.canvas_render.height = window.innerHeight;
			if(this.fsRatio){
				this.canvas_render.width = (this.camera.width * this.canvas_render.height) / this.camera.height;
			}else{
				this.canvas_render.width = window.innerWidth;
			}
		}
		this.ctx_render.drawImage( 
			this.ctx_static.canvas
			,this.camera.x
			,this.camera.y
			,this.camera.width
			,this.camera.height
			,0
			,0
			,this.canvas_render.width
			,this.canvas_render.height
		);
		if(this.multiFrame === true){
			for(i = 1; i <= this.nbFrame; i++){
				this.ctx_render.drawImage(
					this.ctx_dynamic[i].canvas
					,this.camera.x
					,this.camera.y
					,this.camera.width
					,this.camera.height
					,0
					,0
					, this.canvas_render.width
					, this.canvas_render.height
				);
			}
		}else{
			this.ctx_render.drawImage( this.ctx_dynamic.canvas
				,this.camera.x
				,this.camera.y
				,this.camera.width
				,this.camera.height
				,0
				,0
				, this.canvas_render.width
				, this.canvas_render.height
			);
		}
		/*******/
		if(this.debug === true){
			this.ctx_render.fillText( "FPS : "+this.frameRate, 20, 20 );
			if(this.camera.focus > 0 && this.dynArr[this.camera.focus] != null 
				&& this.dynArr[this.camera.focus].x != null && this.dynArr[this.camera.focus].y != null){
				var posTxt = "POS : "+this.dynArr[this.camera.focus].x+"-"+this.dynArr[this.camera.focus].y;
				this.ctx_render.fillText( posTxt, this.canvas_render.width - posTxt.width() - 10, 20 );
				// this.log(this.canvas_render.width +"-"+ posTxt.width() +"-"+ 10);
			}
		}
		this.rndEventId = setTimeout(function(){_NOVAE.renderDyn()},1000/_NOVAE.rps);
	}
	,getFps: function(){
		this.frameRate = this.fps;
		this.fps = 0;
		/* this.getFps = */
		setTimeout(function(){_NOVAE.getFps()},1000);
	}
	,loadExtendsJs: function(){
		if(this.extendsJsLoaded == null || this.extendsJsLoaded == false){
			// this.nbExtendsJs = this.extendsJs.length;
			for(var x in this.extendsJs){
				var o = this.extendsJs[x];
				include(o);
			}
			this.extendsJsLoaded = true;
		}
	}
	,keyManager: function(){
		if(typeof keyDown == "function"){
			keyDown = this.keyDownEvts;
		}else{
			setTimeout(this.keyManager, 1000);/* Will it work??? */
			this.log("Try to load key event manager...");
		}
	}
	,keyDownEvts: function(e){
		if(isDown(KEYBOARD.CTRL)){
			// console.log("KeyDown : CTRL+"+e.which);
			e.preventDefault();
			var k = e.which;
			if(k == KEYBOARD.SUBTRACT){
				_NOVAE.soundVolume -= 0.1;
				if(_NOVAE.soundVolume < 0){_NOVAE.soundVolume = 0;}
				_NOVAE.source.snd[_NOVAE.playList[_NOVAE.playListIndex]].item.volume = _NOVAE.soundVolume;
				console.log("New sound lvl : "+_NOVAE.soundVolume);
			}else if(k == KEYBOARD.ADD){
				_NOVAE.soundVolume += 0.1;
				if(_NOVAE.soundVolume > 1){_NOVAE.soundVolume = 1;}
				_NOVAE.source.snd[_NOVAE.playList[_NOVAE.playListIndex]].item.volume = _NOVAE.soundVolume;
				console.log("New sound lvl : "+_NOVAE.soundVolume);
			}
		}
		else{
			// console.log("KeyDown : "+e.which);
			// var focEnt = _NOVAE.dynArr[_NOVAE.camera.focus];
			// focEnt.x++;
			var k = KEYBOARD_REVERSE[e.which];
			if(k == moveKeys.up){
				move("up");
			}else if(k == moveKeys.left){
				move("left");
			}else if(k == moveKeys.down){
				move("down");
			}else if(k == moveKeys.right){
				move("right");
			}
		}
	}
	,launchPlaylist: function(){
		// this.source.snd[this.playList[this.playListIndex]].item;
		this.source.snd[this.playList[this.playListIndex]].item.onended = function(){_NOVAE.playListIndex++;if(_NOVAE.playListIndex >= _NOVAE.playList.length){_NOVAE.playListIndex = 0;}_NOVAE.launchPlaylist();};
		this.source.snd[this.playList[this.playListIndex]].item.volume = this.soundVolume;
		this.source.snd[this.playList[this.playListIndex]].item.play();
	}
	,nextSongPlaylist: function(){
		this.source.snd[this.playList[this.playListIndex]].end();
	}
	,ui: {
		 list: []
		,add: function(obj){
			if(typeof obj === "string"){
				var oid = "UI_"+this.list.length+"_AUTOID";
				var o = document.createElement('div');
				o.innerHTML = obj;
				o.id = oid;
				body.appendChild(o);
				this.list.push( {"html":document.getElementById(oid),"a":obj} );
			}else{
				if(obj.content != null){
					var cnt = obj.content;
				}else{
					var cnt = "";
				}
				if(obj.id != null){
					var oid = obj.id;
				}else{
					var oid = "UI_"+this.list.length+"_AUTOID";
				}
				if(obj.x != null){
					var px = obj.x;
				}else{
					var px = 0;
				}
				if(obj.id != null){
					var py = obj.y;
				}else{
					var py = 0;
				}
				var o = document.createElement('div');
				o.style.position = "fixed";
				o.style.zIndex = this.list.length + 1;
				o.style.top = (_NOVAE.canvas_render.getBoundingClientRect().top + py) + 'px';
				o.style.left = (_NOVAE.canvas_render.getBoundingClientRect().left + px) + 'px';
				o.innerHTML = cnt;
				o.id = oid;
				body.appendChild(o);
				this.list.push( {"html":document.getElementById(oid),"a":obj} );
			}
		}
		,update(who){
			if(who == "all"){
				for(var i in this.list){
					var o = this.list[i];
					var obj = o.a;
					if(obj.x != null){
						var px = obj.x;
					}else{
						var px = 0;
					}
					if(obj.id != null){
						var py = obj.y;
					}else{
						var py = 0;
					}
					o.html.style.top = (_NOVAE.canvas_render.getBoundingClientRect().top + py) + 'px';
					o.html.style.left = (_NOVAE.canvas_render.getBoundingClientRect().left + px) + 'px';
				}
			}else{
				var o = this.list[who];
				var obj = o.a;
				if(obj.x != null){
					var px = obj.x;
				}else{
					var px = 0;
				}
				if(obj.id != null){
					var py = obj.y;
				}else{
					var py = 0;
				}
				o.html.style.top = (_NOVAE.canvas_render.getBoundingClientRect().top + py) + 'px';
				o.html.style.left = (_NOVAE.canvas_render.getBoundingClientRect().left + px) + 'px';
			}
		}
	}
};
