import Application from 'component-anti-patterns/app';
import config from 'component-anti-patterns/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
