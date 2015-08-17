String.prototype.width = function(font) {
	var f = font || '12px arial';
	if(typeof $ !== "undefined"){
			o = $('<div>' + this + '</div>')
				.css({'position': 'absolute', 'float': 'left', 'white-space': 'nowrap', 'visibility': 'hidden', 'font': f})
				.appendTo($('body')),
			w = o.width();
		
		o.remove();
		
	}else{
		var o = document.createElement('div');
		// if(typeof body == "undefined"){
			// body = document.getElementsByTagName("body")[0];
		// }
		o.style.position = "absolute";
		o.style.float = "left";
		o.style.whiteSpace = "nowrap";
		o.style.visibility = "hidden";
		o.style.font = f;
		body.appendChild(o);
		w = o.width;
		body.removeChild(o);
	}
	return w;
}
String.prototype.isIn = function(arr) {
	if(arr == null)return false;
	if(arr == this)return true;
	for(i=0;i<arr.length;i++){
		if(this==arr[i])return true;
	}
  return false;
}
/* String.prototype.copy = function(str, def) {
	if(str == null){
		if(def == null){
			return false;
		}else{
			this = def;
		};
	}
	if(str == this)return false;
	this = str;
} */