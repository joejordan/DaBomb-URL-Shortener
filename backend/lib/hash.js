const Hashes = require('jshashes');
const Base58 = require('base-58');

function HashString(str) {
  const SHA256 = new Hashes.SHA256();
  return SHA256.hex(str + process.env.HASH_SALT);
}

function StringToBase58(str) {
  console.log(`StringToBase arg: ${str}`);
  if (typeof str == 'string' && str.length > 0) {
    const bytes = [];
    for (let i = 0; i < str.length; i++) {
      bytes.push(str[i].charCodeAt(0));
    }
    return Base58.encode(bytes);
  } else {
    throw new Error('StringToBase58 requires a non-empty string');
  }
}

function Base58ToString(base58str) {
  try {
    const bytes = Base58.decode(base58str);
    let str = '';
    for (let i = 0; i < bytes.length; i++) {
      str += String.fromCharCode(bytes[i]);
    }
    return str;
  } catch (error) {
    throw new Error(error);
  }
}

// Returns an object with the original SHA256 hash and the Base58-encoded hash
function HashURL(url) {
  if (typeof url == 'string') {
    const urlHash = HashString(url);
    return { hash: urlHash, shorturl: StringToBase58(urlHash) };
  } else {
    throw new Error('HashURL must be passed a string');
  }
}

module.exports = HashURL;
