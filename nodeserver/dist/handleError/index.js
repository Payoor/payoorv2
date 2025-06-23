"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// Assuming 'errorDetails' is the string you provided

function handleError(errorDetails, errMessageVal) {
  if (errorDetails.includes('E11000 duplicate key error')) {
    var matchIndex = errorDetails.match(/index: (\w+)_1/);
    var matchDupKey = errorDetails.match(/dup key: \{ (\w+): "([^"]+)" \}/);
    var offendingField = 'an item'; // Default if not found
    var offendingValue = 'the provided value'; // Default

    if (matchIndex && matchIndex[1]) {
      offendingField = matchIndex[1]; // e.g., 'phoneNumber'
    }
    if (matchDupKey && matchDupKey[2]) {
      offendingValue = matchDupKey[2]; // e.g., '08145199690'
    }
    var userMessage = '';
    if (offendingField === 'phoneNumber') {
      userMessage = "The phone number '".concat(offendingValue, "' is already in use by another account. Please use a different number or log in with the existing account.");
    } else if (offendingField === 'email') {
      userMessage = "The email address '".concat(offendingValue, "' is already registered. Please use a different email or log in with your existing account.");
    } else {
      userMessage = "A record with '".concat(offendingField, "' value '").concat(offendingValue, "' already exists. Please provide a unique value.");
    }
    return {
      type: 'DuplicateKeyError',
      field: offendingField,
      value: offendingValue,
      userMessage: userMessage,
      statusCode: 409 // Conflict
    };
  } else if (errorDetails.includes('SomeOtherKnownError')) {
    // To do
  } else {
    return {
      type: 'GenericError',
      userMessage: errMessageVal,
      statusCode: 500 // Internal Server Error
    };
  }
}
var _default = exports["default"] = handleError;
/*const errorResult = handleError(errorString)
console.log(errorResult.userMessage)*/