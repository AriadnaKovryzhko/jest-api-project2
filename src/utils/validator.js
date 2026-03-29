
function isValidName(name) {
  if (typeof name !== 'string') return false;
  if (!name.trim()) return false;
  if (name.length > 50) return false;
  return true;
}
module.exports = isValidName;
