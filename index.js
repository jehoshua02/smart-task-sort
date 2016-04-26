module.exports = function (items) {
  items.sort(byDue);
  return items;
};

function byDue(a, b) {
  if (!b.due) {
    return -1;
  }

  if (!a.due) {
    return 1;
  }

  return new Date(a.due).getTime() - new Date(b.due).getTime();
}
