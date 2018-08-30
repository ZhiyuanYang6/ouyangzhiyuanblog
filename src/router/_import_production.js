var router = function(file) {
  return import ('@/views/' + file + '.vue');
}
module.exports = router
