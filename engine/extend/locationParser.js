function lp(){
	if(document){if(document.location){if(document.location.href){
		var o = document.location.href.toLocaleString();
		if(o != null){
			var u = o.split("?");
			if(u != null && u.length > 1){
				for(i=1; i<u.length; i++){
					var k = u[i].split("&");
					for(j=0; j<k.length; j++){
						var l = k[j].split("=");;
						if(l!=null && l.length > 1){
							console.log(l[0]+":=:"+l[1]);
							if(l[0].indexOf(".") > -1){
								var m = l[0].split(".");
								if(m != null && m.length > 0){
									var u = document;
									for(n=0; n<m.length; n++){
										var mn = m[n];
										if(n==0 && mn.toLowerCase() == "document"){
											
										}else{
											// console.warn(u);
											// console.log(mn);
											if(u.hasOwnProperty(mn) == false){
												if(n == m.length-1){
													u[mn] = "";
												}else{
													u[mn] = new Object();
												}
												// console.log(u[mn]);
											}else{
												// console.log("u[mn] already exist.");
												// console.log(u[mn]);
											}
											if(n == m.length-1){
												u[mn] = l[1];
											}else{
												u = u[mn];
											}
										}
									}
								}
							}else{
								document[l[0]] = l[1];
							}
						}
					}
				}
			}
		}
	}}}
	return false;
}
// document.onload = function(){lp();};
document.addEventListener("DOMContentLoaded", function(event) {
    lp();
  });