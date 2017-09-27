
 function decrypt() {
   var algorithm = $('#decalgorithm').find('option:selected').text();
   var encrypted = $('#textbox').val();
   var secret = $('#secret').val();

   var mode = $('#decoption').find('option:selected').text();
   var pad = $('#decpadoption').find('option:selected').text();

   var key = CryptoJS.enc.Base64.parse('fly12345678alltheplanetfivetimes');
   var iv = CryptoJS.enc.Base64.parse('doesnotmeanindividualvaluebutgardens7890102345blueworld');

   var decMode;
   var decPadding;

   if (mode == "CBC") {
        decMode = "mode: CryptoJS.mode.CBC";
   } else if (mode == "CFB") {
        decMode = "mode: CryptoJS.mode.CFB";
   } else if (mode == "CTR") {
        decMode = "mode: CryptoJS.mode.CTR";
   } else if (mode == "ECB") {
        decMode = "mode: CryptoJS.mode.ECB";
   } else if (mode == "OFB") {
        decMode = "mode: CryptoJS.mode.OFB";
   }

   if (pad == "Pkcs7") {
        decPadding = "padding: CryptoJS.pad.Pkcs7";
   } else if (pad == "AnsiX923") {
        decPadding = "padding: CryptoJS.pad.AnsiX923";
   } else if (pad == "Iso97971") {
        decPadding = "padding: CryptoJS.pad.Iso97971";
   } else if (pad == "Iso10126") {
        decPadding = "padding: CryptoJS.pad.Iso10126";
   } else if (pad == "NoPadding") {
        decPadding = "padding: CryptoJS.pad.NoPadding";
   } else if (pad == "ZeroPadding") {
        decPadding = "padding: CryptoJS.pad.ZeroPadding";
   }


   if (algorithm == "AES") {
       var decrypted = CryptoJS.AES.decrypt(encrypted, secret, key, {iv: iv, decMode, decPadding});
   } else if (algorithm == "3DES") {
       var decrypted = CryptoJS.TripleDES.decrypt(encrypted, secret, key, {iv: iv, decMode, decPadding});
   } else if (algorithm == "DES") {
       var decrypted = CryptoJS.DES.decrypt(encrypted, secret, key, {iv: iv, decMode, decPadding});
   }  else if (algorithm == "RABBIT") {
       var decrypted = CryptoJS.Rabbit.decrypt(encrypted, secret, key, {iv: iv, decMode, decPadding});
   }  else if (algorithm == "RC4") {
       var decrypted = CryptoJS.RC4.decrypt(encrypted, secret, key, {iv: iv, decMode, decPadding});
   }


   $("#output").prepend("<br><br> Original: " + encrypted );
   $("#output").prepend("<br><br>Decrypted: " + decrypted.toString(CryptoJS.enc.Utf8));

   return false;
  };

