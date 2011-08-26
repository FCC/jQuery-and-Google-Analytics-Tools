// Conditionally load jQuery
// Inspired by: http://erikvold.com/blog/index.cfm/2010/6/14/using-jquery-with-a-user-script
var checkJQuery = function (callback, version) {
  if (typeof version === 'undefined') version = '1';
  if (typeof callback !== 'function') callback = function() {};
  if (typeof jQuery === 'undefined') {
    var jQ = document.createElement('script');
    jQ.setAttribute('src', '//ajax.googleapis.com/ajax/libs/jquery/'+version+'/jquery.min.js');
    document.body.appendChild(jQ);
    callback();
    return;
  }
  callback();
};

