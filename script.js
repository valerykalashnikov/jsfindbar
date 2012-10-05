
var Search = (function (window, document) {
  
  Search =  function () {
    var article = document.getElementsByTagName('article')[0],
        counter = document.getElementById('counter');
        articleHTMLText = article.innerHTML,__self = this;

    this.init = function() {
      var searchElement = document.getElementById('search');
      searchElement.addEventListener('keyup',this.onKeyUp, false);
      searchElement.addEventListener('search',this.onKeyUp, false);
    },

    this.onKeyUp = function(event) {
      article.innerHTML = articleHTMLText;
      debugger;
      counter.style.display = "";
      var result = __self.highlight(article.innerHTML,this.value);
      if (result) {
        article.innerHTML = result[0];
        counter.innerHTML = result[1];  
      }
      else {
        counter.style.display = 'none';
      }
      
    }
  }

  Search.prototype = {
    highlight : function (textForReplace, searchString) {
      if (textForReplace == "" || searchString == "" ) return; 
      var newText = "", i = -1, amount=0,
          lcSearchString = searchString.toLowerCase(),
          lcTextForReplace = textForReplace.toLowerCase(),
          highlightStartTag = "<span class='highlight'>";
          highlightEndTag = "</span>";
        
      while (textForReplace.length > 0) {
        i = lcTextForReplace.indexOf(lcSearchString, i+1);
        if (i < 0) {
          newText += textForReplace;
          textForReplace = "";
        } else {
          if (textForReplace.lastIndexOf(">", i) >= textForReplace.lastIndexOf("<", i)) {
            newText += textForReplace.substring(0, i) + highlightStartTag + textForReplace.substr(i, searchString.length) + highlightEndTag;
            textForReplace = textForReplace.substr(i + searchString.length);
            lcTextForReplace = textForReplace.toLowerCase();
            i = -1;
            amount+=1;
          }
        }
      }
      
      return [newText,amount];
    }
  }

  return Search;
  

})(window, document);

function init() {
  var search = new Search();
  search.init();
};


window.addEventListener('DOMContentLoaded', init, false);