/*!
 * jQuery-ajaxTransport-XDomainRequest - v1.0.1 - 2013-10-17
 * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
 * Copyright (c) 2013 Jason Moon (@JSONMOON)
 * Licensed MIT (/blob/master/LICENSE.txt)
 */
(function ($) {
  if (!$.support.cors && $.ajaxTransport && window.XDomainRequest) {
    var n = /^https?:\/\//i;
    var o = /^get|post$/i;
    var p = new RegExp('^' + location.protocol, 'i');
    var q = /text\/html/i;
    var r = /\/json/i;
    var s = /\/xml/i;
    $.ajaxTransport('* text html xml json', function (i, j, k) {
      if (i.crossDomain && i.async && o.test(i.type) && n.test(i.url) && p.test(i.url)) {
        var l = null;
        var m = (j.dataType || '').toLowerCase();
        return {
          send    : function (f, g) {
            l = new XDomainRequest();
            if (/^\d+$/.test(j.timeout)) {
              l.timeout = j.timeout
            }
            l.ontimeout  = function () {
              g(500, 'timeout')
            };
            l.onload     = function () {
              var a = 'Content-Length: ' + l.responseText.length + '\r\nContent-Type: ' + l.contentType;
              var b = {code: 200, message: 'success'};
              var c = {text: l.responseText};
              try {
                if (m === 'html' || q.test(l.contentType)) {
                  c.html = l.responseText
                } else if (m === 'json' || (m !== 'text' && r.test(l.contentType))) {
                  try {
                    c.json = $.parseJSON(l.responseText)
                  } catch (e) {
                    b.code    = 500;
                    b.message = 'parseerror'
                  }
                } else if (m === 'xml' || (m !== 'text' && s.test(l.contentType))) {
                  var d   = new ActiveXObject('Microsoft.XMLDOM');
                  d.async = false;
                  try {
                    d.loadXML(l.responseText)
                  } catch (e) {
                    d = undefined
                  }
                  if (!d || !d.documentElement || d.getElementsByTagName('parsererror').length) {
                    b.code    = 500;
                    b.message = 'parseerror';
                    throw'Invalid XML: ' + l.responseText;
                  }
                  c.xml = d
                }
              } catch (parseMessage) {
                throw parseMessage;
              } finally {
                g(b.code, b.message, c, a)
              }
            };
            l.onprogress = function () {
            };
            l.onerror    = function () {
              g(500, 'error', {text: l.responseText})
            };
            var h        = '';
            if (j.data) {
              h = ($.type(j.data) === 'string') ? j.data : $.param(j.data)
            }
            l.open(i.type, i.url);
            l.send(h)
          }, abort: function () {
            if (l) {
              l.abort()
            }
          }
        }
      }
    })
  }
})(jQuery);