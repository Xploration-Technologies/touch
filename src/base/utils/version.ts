import chalk from 'chalk';
import { readFileSync } from 'fs';
import { join } from 'path';

const json = readFileSync(join(__dirname, '..', 'package.json'), 'utf8');
const pkg = JSON.parse(json);

/**
 * Returns the name and version of the package.
 */
export function version(): void {
  console.log(chalk`
  {cyan ${pkg.name}} {magenta v${pkg.version}}
  Copyright (C) Xploration Technologies. All rights reserved.
  `);
}
console.log(json);