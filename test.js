var smartTaskSort = require('.');

describe('smart-task-sort', function () {
  var scenarios = [
    {
      should: 'sort by due date',
      input: [
        {name: 'a', due: '2015-04-25 00:00:00'},
        {name: 'b', due: '2015-04-25 00:00:01'},
      ],
      expected: ['a', 'b']
    }
  ];

  scenarios.forEach(function (data) {
    it('should ' + data.should, function () {
      var actual;
      actual = smartTaskSort(data.input.concat()).map(function (item) {return item.name});
      expect(actual).to.eql(data.expected);
      actual = smartTaskSort(data.input.concat().reverse()).map(function (item) {return item.name});
      expect(actual).to.eql(data.expected);
    });
  });
});
