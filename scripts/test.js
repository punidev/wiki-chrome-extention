var translateTarget = document.getElementsByClassName('interlanguage-link-target'); 

function getLink(collection, lang)
{
		var out = null;
		var pattern;
		var srctitle;
		var ua = "https://cdn3.iconfinder.com/data/icons/finalflags/16/Ukraine-Flag.png";
		var en = "https://cdn2.iconfinder.com/data/icons/flags/flags/16/united-kingdom-great-britain.png";
		var ru = "https://cdn1.iconfinder.com/data/icons/famfamfam_flag_icons/ru.png";
		
		switch (lang) {
		  case "en":
			pattern = /en/i;
			srctitle = en;
			break;
		  case "ru":
			pattern = /ru/i;
			srctitle = ru;
			break;
		  case "ua":
			pattern = /uk/i;
			srctitle = ua;
			break;
		  default:
			pattern = /en/i;
			srctitle = en;
		}
		
		for(var i=0; i<collection.length;i++)
			if(pattern.test(collection[i]))
				out = " <a href=" + collection[i] + "><img src='" + srctitle + "'/>" + lang + "</a>";
        return out == null ? 
			(lang == "ua"
				? checkParrent(window.location.href, "ua", ua) 
				: lang == "en" 
					? checkParrent(window.location.href, "en", en)
					: checkParrent(window.location.href, "ru", ru)) 
			: out;
}

function selectPattern(lang)
{
		var pattern = null;
		switch (lang) {
		  case "en":
			pattern = /en/i;
			break;
		  case "ru":
			pattern = /ru/i;
			break;
		  case "ua":
			pattern = /uk/i;
			break;
		  default:
			pattern = /en/i;
		}
		return pattern;
}
function getDefault(srctitle, lang)
{
		var out = null;
		var collection = document.getElementsByClassName('interlanguage-link-target');
		for(var i=0; i<collection.length;i++)
			if(/ru/i.test(collection[i]))
				out = " <a href=" + collection[i] + "><img src='" + srctitle + "'/>" + lang + "</a>";
			
		
		return out;
}

function checkParrent(url, lang, img)
{
	var out = null;
	var collection = document.getElementsByClassName('interlanguage-link-target');
	if(selectPattern(lang).test(url))
		out = getDefault(img,"<-"); // return value
	return out;
}

var h = document.getElementById('firstHeading'); 
h.innerHTML +=  (getLink(translateTarget, "en") == null ? " " :        getLink(translateTarget, "en"));
h.innerHTML +=  (getLink(translateTarget, "ua") == null ? " " : ", " + getLink(translateTarget, "ua"));
h.innerHTML +=  (getLink(translateTarget, "ru") == null ? " " : ", " + getLink(translateTarget, "ru"));
