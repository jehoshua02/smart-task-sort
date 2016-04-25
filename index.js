module.exports = function (items) {
  items.sort(byDue);
  return items;
};

function byDue(a, b) {
  return new Date(a.due).getTime() - new Date(b.due).getTime();
}
