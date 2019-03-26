const Hashes = require('jshashes');
const Base58 = require('base-58');

function HashString(str) {
  const SHA256 = new Hashes.SHA256();
  return SHA256.hex(str + process.env.HASH_SALT);
}

function StringToBase58(str) {
  console.log(`StringToBase arg: ${str}`);
  if (typeof str == 'string' && str.length > 0) {
    var bytes = [];
    for (var i = 0; i < str.length; i++) {
      bytes.push(str[i].charCodeAt(0));
    }
    return Base58.encode(bytes);
  } else {
    throw new Error('StringToBase58 requires a non-empty string');
  }
}

// Returns a Base58 string of the SHA256 hash of the passed URL
function HashURL(url) {
  if (typeof url == 'string') {
    return StringToBase58(HashString(url));
  } else {
    throw new Error('HashURL must be passed a string');
  }
}

module.exports = HashURL;
