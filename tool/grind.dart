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
  if (context != null) {
    context.log("Copy App directory to BUILD directory");
  }
  BUILD_DIR.deleteSync(recursive: true);
  BUILD_DIR.createSync();
  copyDirectory(APP_DIR, BUILD_DIR);
}
