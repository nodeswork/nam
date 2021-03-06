#!/usr/bin/env node

import * as commander          from 'commander';

import { nam }                 from '../def';

import { createAppletManager } from './cli-command';
import * as env                from '../env';

commander
  .option('--applet-id [applet id]')
  .option('--applet-token [applet token]')
  .parse(process.argv)

const appletManager = createAppletManager();

(async () => {
  const targets: nam.AppletRunOptions[] = [];
  for (const target of commander.args) {
    const [packageName, version] = target.split('@');
    if (packageName == null || version == null) {
      console.error('invalid target', target);
      process.exit(1);
    }
    targets.push({
      naType:       env.DEFAULT_NA,
      naVersion:    env.DEFAULT_NA_VERSION,
      packageName,
      version,
      appletId:     commander.appletId || 'applet-id-placeholder',
      appletToken:  commander.appletToken || 'applet-token-placeholder'
    });
  }

  for (const target of targets) {
    await appletManager.run(target);
    console.log(
      `run applet ${target.packageName}@${target.version} sucessfully`
    );
  }
})();
