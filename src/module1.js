const list = [
  'A',
  'B',
  'C'
];

module.exports = {
  list,
  // webpack can also handle this
  emptyBody: function() {
    document.querySelector('body').style.display = 'none';
  }
};