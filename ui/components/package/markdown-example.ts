export const markdownExample = `

# React Arduino Nano

[Site](https://lodash.com/) |
[Docs](https://lodash.com/docs) |
[Contributing](https://github.com/lodash/lodash/blob/master/.github/CONTRIBUTING.md) |
[Wiki](https://github.com/lodash/lodash/wiki "Changelog, Roadmap, etc.")

The [Arduino Nano](https://tscircuit.com.com/) library exported as a [UMD](https://github.com/umdjs/umd) module.

\`\`\`tsx
export default () => (
  <ArduinoNano
    x={0}
    y={0}
  />
)
\`\`\`

## Download

 * [Core build](https://raw.githubusercontent.com/lodash/lodash/4.17.10-npm/core.js) ([~4 kB gzipped](https://raw.githubusercontent.com/lodash/lodash/4.17.10-npm/core.min.js))
 * [Full build](https://raw.githubusercontent.com/lodash/lodash/4.17.10-npm/lodash.js) ([~24 kB gzipped](https://raw.githubusercontent.com/lodash/lodash/4.17.10-npm/lodash.min.js))

This Arduino Nano library is released under the [MIT license](https://raw.githubusercontent.com/lodash/lodash/4.17.10-npm/LICENSE) & supports modern environments.

## Installation

Using bun:
\`\`\`shell
$ bun i @seveibar/arduino-nano
\`\`\`

## Why 2 Layer?

A 2 layer Arduino nano is more economical and easily embeddable into projects
where PCB cost is an issue. If you'd like to contribute a 4 layer board, check
out the [\`4-layer\` branch](#)


`.trim()