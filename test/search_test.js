
var search = require('../lib/search');

describe('search()', function() {
  it('should throw if not passed an array', function() {
    var notAnArray = {};
    expect(function() {
      search(notAnArray);
    }).toThrow('Function search must be passed an array.');
  });
  it('should return an array with the correct number of failed elements', function() {
    var elementsToTest = [
      {attributes: [{nodeName: 'ng-ap'}, {nodeName: 'ng-hef'}], nodeName: 'DIV'},
      {attributes: [{nodeName: 'ng-src'}], nodeName: 'DIV'},
      {attributes: [{nodeName: 'ng-clic'}], nodeName: 'DIV'}
    ];
    var results = search(elementsToTest);
    expect(results.length).toBe(3);
  });
  it('should return an array of objects that have match and error properties', function(){
    var elementsToTest = [
      {attributes: [{nodeName: 'ng-clic'}], nodeName: 'DIV'}
    ];
    var result = search(elementsToTest);
    expect(result[0]).toBe('There was an AngularJS error in DIV element. Found '+
      'incorrect attribute "ng-clic" try "ng-click".');
  });
});
