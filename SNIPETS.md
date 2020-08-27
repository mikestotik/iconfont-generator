```typescript
import * as process from 'process';

const args: Array<string> = process.argv.slice(2);

enum Params {
  TEMPLATE = '--tpl',
  TEMPLATE_WORD = '--tw',
  DIST = '--dist',
  CONFIG = '--conf',
  NAME = '--name'
}

let templatePath: string;
let distDirPath: string;
let distName: string;
let configPath: string;

const tplWords = new Map();

for (let i = 0; i < args.length; i++) {
  const value = args[i + 1];

  switch (args[i]) {
    case Params.TEMPLATE:
      templatePath = value;
      break;
    case Params.TEMPLATE_WORD:
      const list = value.split('=');
      tplWords.set(list[0], list[1]);
      break;
    case Params.DIST:
      distDirPath = value;
      break;
    case Params.CONFIG:
      configPath = value;
      break;
    case Params.NAME:
      distName = value;
      break;
    default:
      break;
  }
}
```
