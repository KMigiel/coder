function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

function removeCharAt(string, index){
	return string.slice(0, index) + string.substr(index+1);
}

function code(){
	var decoded = document.getElementById("cleanText").value;
	var key = decoded.toLowerCase().charCodeAt(0)-96;
	
	var coded = "";
	var index = 0;
	
	while(decoded[index] != undefined){
		//console.log(decoded);
		
		coded += decoded[index];
		decoded = removeCharAt(decoded, index);
		index = (index + key)%decoded.length;
		//console.log(index);
	}
	
	document.getElementById("codedText").value = coded;
}

function decode(){
	var coded = document.getElementById("codedText").value;
	var key = coded.toLowerCase().charCodeAt(0)-96;
	
	var decoded = coded;
	
	var decoder = [];
	var coder = [];
	for(c in coded){
		decoder.push(parseInt(c));
	}
	var index = 0;
	
	while(decoder[index] != undefined){		
		coder.push(decoder[index]);
		decoder.splice(index, 1);
		index = (index + key)%decoder.length;
		//console.log(index);
	}
	
	console.log(coder);
	
	for(c in coded){
		decoded = setCharAt(decoded, coder[c], coded.charAt(c));
		//console.log(c);
	}
	
	document.getElementById("cleanText").value = decoded;
}

/*
d:[b]anana
c: b
d: an[a]na
c: ba
d: [a]nna
c: baa
d: nn[a]
c: baaa
d: n[n]
c: baaan
d: [n]
c: baaann



*/