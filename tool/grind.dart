// Sungguk Lim(limasdf@gmail.com) all rights reserved.

import 'dart:io';

import 'package:grinder/grinder.dart';

final Directory BUILD_DIR = new Directory('build');
final Directory APP_DIR = new Directory('app');

void main([List<String> args]) {
  defineTask('deploy', taskFunction: deploy);

  startGrinder(args);
}

void deploy(GrinderContext context) {
  BUILD_DIR.createSync();

  for (FileSystemEntity file in APP_DIR.listSync()) {
    if (file is File) {
      file.copySync('./build');
    }
  }
}
