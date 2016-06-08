// Decrypt the protected sourcecode with the retreived password. 
// After decryption the string will be evaluated and the callback

function decrypt (decryptionKey) { 
  
  // Decrypt code
  var key = aesjs.util.convertStringToBytes(decryptionKey);
  var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(__counter__));
  var encryptedCode = (encrypted.type === 'Buffer')?encrypted.data:encrypted;
  var decryptedBytes = aesCtr.decrypt(encryptedCode);
   
  // Convert our bytes back into text 
  var decryptedText = aesjs.util.convertBytesToString(decryptedBytes);
 
  // Evaluate decrypted script and callback
  return eval(decryptedText) && callback();
  
};
