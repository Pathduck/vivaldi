window.onload=SetStyleSheet();
//window.onload=init();

function init(){
  SetStyleSheet();
  changeLinks();
}

// LeafTurner starts here. Modified from Eric Meyer's script function MaKo.

function GetElementsWithClassName(elementName,className) {
  var i;
  var allElements = document.getElementsByTagName(elementName);
  var elemColl = new Array();
  for (i = 0; i < allElements.length; i++) {
    if (allElements[i].className == className) {
      elemColl[elemColl.length] = allElements[i];
    }
  }
  return elemColl;
}

function initialLeaf() {
  var n;
  var imgColl = GetElementsWithClassName('img','turner');
  var olColl = GetElementsWithClassName('ol','leaf');
  var ulColl = GetElementsWithClassName('ul','leaf');
  var divColl = GetElementsWithClassName('div','leaf');
  for (n = 0; n < imgColl.length; n++) {
    imgColl[n].src = '../res/arrow-plus.gif';
  }
  for (n = 0; n < divColl.length; n++) {
    divColl[n].style.display = 'none';
  }
  for (n = 0; n < olColl.length; n++) {
    olColl[n].style.display = 'none';
  }
  for (n = 0; n < ulColl.length; n++) {
    ulColl[n].style.display = 'none';
  }
}

function leafTurn(leafName) {
  var myLeaf = document.getElementById(leafName);
  var myArrow = document.getElementById(leafName+'Turn');
  if (myLeaf.style.display == 'none') {
    myLeaf.style.display = 'block';
    myArrow.src = '../res/arrow-minus.gif';
  } else {
    myLeaf.style.display = 'none';
    myArrow.src = '../res/arrow-plus.gif';
  }
}



// if the browser supports sidebar.addPanel and is not Firefox, call the function changeLinks onload
// Firefox directly support rel=sidebar so it doesn't need the script

if((window.sidebar) && (window.sidebar.addPanel) && navigator.vendor != 'Firefox' ){
  window.onload=changeLinks;
}

// add event handlers to links with rel=sidebar

function changeLinks() {
  var links,i;
// grab all links, loop over them;
  links = document.getElementsByTagName('a');
  for(i=0; i < links.length; i++) {
// check which link has a rel attribute, with value 'sidebar' and send this one to addTab
//    if(links[i].getAttribute('rel')!='') {
    if(links[i].getAttribute('rel') && links[i].getAttribute('rel').match(/\bsidebar\b/)) {
// Note: the simple function below doesn't provide for handling relative URLs, and addPanel only works with absolute URLs...
//      links[i].onclick=function(){return(addTab(this.title,this.href,''));};
// Hence the hack below to make the URL absolute if it isn't already.
      links[i].onclick=function(){
        var abshref = this.href;
        if(!this.href.match(/^(https?|file):/)) {
          abshref = location.protocol + '\/\/' + location.pathname.replace(/\/[^\/]*$/,'\/') + abshref;
          }
        return(addTab(this.title,abshref,''));
      };
    }
  }
}


function addTab(tabName,tabURL,tabCURL) {
  if ((window.sidebar) && (window.sidebar.addPanel) && navigator.vendor != 'Firefox' ){
    try {
      window.sidebar.addPanel(tabName,tabURL,tabCURL);
      }
    catch (e) {
      alert('An error occurred when trying to add this tab to your '+
            'Sidebar. Maybe you have hit a known bug '+
            '(see Bugzilla #97016) in some Netscape6/Mozilla versions. '+
            'You should be able to click the add tab link again now '+
            'and it should work properly, else press F9 twice.');
      }
    return false;
  } else {
    return true;
  } 
}
