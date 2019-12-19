// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const __karma__: any;
declare const require: any;

__karma__.loaded = function() {};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Then we find all the tests.
// const context = require.context('./app/templateDetails/compatibilityMatrix/', true, /\.spec\.ts/);
const context = require.context('./app/registration/', true, /\.spec\.ts/);

// And load the modules.
// context.keys().map(context);
context.keys().filter(item => item.endsWith("spec.ts") || item.endsWith("component.ts") || item.endsWith("service.ts") || item.endsWith("pipe.ts") || item.endsWith("directive.ts")).map(context);

__karma__.start();
