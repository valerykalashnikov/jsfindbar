#JS find bar

Search within a webpage using JavaScript

You can check working example out here: [valerykalashnikov.github.io/jsfindbar](valerykalashnikov.github.io/jsfindbar "JS find bar").

##How to use

~~~javascript
function init() {
  var seach = new Searh('content_id', 'counter_id');
  //content_id - id of the component of the page where to search
  //counter_id - counter of coincidene (optional parameter)
  search.init();
};
window.addEventListener('DOMContentLoaded', init, false);
~~~

Don't support IE below 10.   
Don't support script tag in content.
