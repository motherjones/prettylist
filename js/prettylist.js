var PrettyList = (function() {
  var List = function() { return {
    create: function() {
      var self = this;
      var options = {
        key: this.spreadsheetId,
        callback: function(data) {
          self.data = data;
          self.makeHTML()
        },
        simpleSheet: true,
      }
      if (this.proxy) {
        options.proxy = this.proxy;
      }
      Tabletop.init(options); 
    },
    makeHTML: function() {
      var ul = $('<ul class="pretty_list"></ul>');
      for (var i = 0; i < this.data.length; i++) {
        dust.render(this.template, this.data[i], function(err, out) {
          ul.append($(out));
        });
      }
      this.element.append(ul);
    },
  } };
  return function(spreadsheetId, elementSelector, template, proxy) {
    var list = new List;
    list.element = $(elementSelector);
    if (!list.element) {
      throw 'could not find your element';
    };
    console.log(list.element);

    list.spreadsheetId = spreadsheetId;

    var templateName = Math.floor(Math.random() * 1000000);
    var compiledTemplate = dust.compile(template, templateName);
    dust.loadSource(compiledTemplate);
    list.template = templateName;

    if (proxy) { list.proxy = proxy; }

    list.create();

    return list;
  };
})();
