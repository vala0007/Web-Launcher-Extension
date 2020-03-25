// Future JavaScript will go here
//console.dir(document)
const url = document.URL; // for getting url of current page.
//console.log(document.title);


var count = 1;
// function created for make dynamicl link of current page.
function add(){

	//alert("hi")
	document.getElementById('dynamic').innerHTML = document.getElementById('dynamic').innerHTML
	+ "<div class='myDiv col-md-2 form-group'><a href='"+url+"' class='myText'  id='text"+count+"' target='_blank'></a></div>"

	
	 var anchor = document.getElementById('text'+count);
	  //console.log(anchor);
	 anchor.textContent = document.title // set name to the url.
	// anchor.setAttribute("href",url);
	count++;
}


