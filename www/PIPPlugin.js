var exec = require('cordova/exec');

exports.enter = function (width, height, success, error) {
    exec(success, error, "PIPPlugin", "enter", [width, height]);
};

exports.isPip = function (success, error) {
    exec(success, error, "PIPPlugin", "isPip", []);
};

exports.onPipModeChanged = function (success, error) {
    exec(success, error, "PIPPlugin", "onPipModeChanged", []);
};

exports.isPipModeSupported = function (success, error) {
    exec(success, error, "PIPPlugin", "isPipModeSupported", []);
};
