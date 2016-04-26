var smartTaskSort = require('.');

describe('smart-task-sort', function () {
  var scenarios = [
    {
      name: 'two tasks with dates',
      input: [
        {name: 'a', due: '2015-04-25 00:00:00'},
        {name: 'b', due: '2015-04-25 00:00:01'},
      ],
      expected: ['a', 'b']
    },
    {
      name: 'two tasks, one with, and one without date',
      input: [
        {name: 'a', due: '2015-04-25 00:00:00'},
        {name: 'b'},
      ],
      expected: ['a', 'b']
    },
  ];

  scenarios.forEach(function (data) {
    it('should sort ' + data.name, function () {
      var actual;
      actual = smartTaskSort(data.input.concat()).map(function (item) {return item.name});
      expect(actual).to.eql(data.expected);
      actual = smartTaskSort(data.input.concat().reverse()).map(function (item) {return item.name});
      expect(actual).to.eql(data.expected);
    });
  });
});
