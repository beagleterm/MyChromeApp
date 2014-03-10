'use strict';

var ConnectDialog = function() {};

ConnectDialog.show = function(onComplete) {
  lib.ensureRuntimeDependencies();
  $('a[rel*=leanModal]').leanModal({closeButton: '#connect'});

  var $portPicker = $('#port-picker');
  var $bitratePicker = $('#bitrate-picker');

  this.loadBitrate();

  // Build port picker
  chrome.runtime.getBackgroundPage(function(bgPage) {
    // Notice : chrome.serial.getPorts will not be available from M33.
    //          Until M33 is landed, let the old code be.
    /*
      chrome.serial.getDevices(function(ports) {
        var eligiblePorts = ports.filter(function(port) {
          return !port.path.match(/[Bb]luetooth/);
        });

        if (eligiblePorts.length > 0) {
          eligiblePorts.forEach(function(port) {
            var portName = port.path;
            var $option = $('<option>' + portName + '</option>').attr('value', portName);
            $portPicker.append($option);
          });

          // Show setup dialog
          $('#connect-dialog-trigger').click();

        } else {
          // Show error dialog
          MessageDialog.show('Could not find serial device. Please check your serial connection and try again.');
        }
      });
      */
      var portName = 'com4';
            var $option = $('<option>' + 1234 + '</option>').attr('value', 1234);
            $portPicker.append($option);
    $('#connect-dialog-trigger').click();
  });

  $('#connect').click(function() {
    if (onComplete) {
      ConnectDialog.saveBitrate($bitratePicker.val());
      onComplete({
        port: $portPicker.val(),
        bitrate: $bitratePicker.val()
      });
    }
  });
};

ConnectDialog.saveBitrate = function(bitrate) {
  var BITRATE_KEY = 'bit_rate'; //when you change this value, you also must check loadBitrate();
  var obj = {};
  obj[BITRATE_KEY] = bitrate;
//  chrome.storage.local.set(obj);
};

ConnectDialog.loadBitrate = function() {
  $('#bitrate-picker').val("115200");
  /*
  var BITRATE_KEY = 'bit_rate'; //when you change this value, you also must check saveBitrate();
  chrome.storage.local.get(BITRATE_KEY,function(result){
    if (result.bit_rate !== undefined) {
      $('#bitrate-picker').val(result[BITRATE_KEY]);
    } else {
      $('#bitrate-picker').val("115200");
    }
  });
  */
};
