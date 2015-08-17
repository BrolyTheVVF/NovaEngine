var timer = {
	debug: true
	,list : []
	,add : function(func,time,type){
		if(!func || typeof func != "function"){
			this.warn("There is no functions.");
			return false;
		}
		if(!time || typeof time != "number" || time < 1){
			this.warn("There is no functions.");
			return false;
		}
		if(!type){
			type = "timeout";
		}
		if(type == "timeout"){
			var interId = setTimeout(func,time);
			var updateId = setTimeout(function(){this.update(interId,"active",false)},time);
		}else{
			var interId = setInterval(func,time);
			var updateId = setInterval(function(){this.update(interId,"beginTime")},time);
		}
		var now = new Date().getTime();
		this.list[interId] = {"execTime": time, "id": interId, "beginTime": now, "type": type, "active": true, "updateId": updateId, "baseFunction": func, "baseTime": time}
		return interId;
	}
	,get : function(id, fld){
		if(this.list && this.list[id]){
			if(!fld){
				return this.list[id];
			}else{
				if(this.list[id][fld]){
					return this.list[id][fld];
				}
			}
		}
		return false;
	}
	,remove : function(id){
		if(this.list && this.list[id]){
			var type = this.list.type;
			this.list.splice(id,1);
			if(type == "timeout"){
				return clearTimeout(id);
			}else{
				return clearInterval(id);
			}
		}
		return false;
	}
	,update : function(id, fld, val){
		if(this.list && id && this.list[id]){
			if(fld){
				if(val){
					if(this.list[id][fld]){
						if(typeof this.list[id][fld] != typeof val){
							this.warn("Timer : Update field "+fld+" of "+id+" without same type.");
						}
						this.list[id][fld] = val;
						return true;
					}
				}else if(fld == "beginTime" && this.list[id].baseTime){
					this.list[id][fld] += this.list[id].baseTime;
					return true;
				}
			}
		}
		return false;
	}
	,log : function(str){
		if(this.debug && str){
			if(console && console.log){
				console.log(str);
				return true;
			}
		}
		return false;
	}
	,warn : function(str){
		if(this.debug && str){
			if(console && console.warn){
				console.warn(str);
				return true;
			}
		}
		return false;
	}
	,error : function(str){
		if(this.debug && str){
			if(console && console.error){
				console.error(str);
				return true;
			}
		}
		return false;
	}
	
};