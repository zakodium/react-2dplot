# react-plot

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

Render 2dplot partition in react.

## [Storybook](https://zakodium.github.io/react-plot/)

```tsx
const Example = () => (
  <Plot
    width={500}
    height={500}
    colorScheme={d3.schemePaired}
    margin={{ right: 200 }}
  >
    <Plot.Heading
      title="Electrical characterization"
      subtitle="current vs voltage"
      titleStyle={}
      substitleStyle={}
      titleClass=""
      substitleClass=""
      position="top"
    />
    <Plot.LineSeries
      data={[
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 2 },
        { x: 3, y: 3 },
        { x: 4, y: 3 },
        { x: 5, y: 3 },
      ]}
      lineStyle={{ stroke: 'blue', strokeWidth: 2 }}
      curve={d3.curveCardinal(0.5)}
      label="Vg = 7V"
    />
    <Plot.LineSeries
      data={[
        { x: 0, y: 0 },
        { x: 1, y: 2 },
        { x: 2, y: 4 },
        { x: 3, y: 6 },
        { x: 4, y: 6 },
        { x: 5, y: 6 },
      ]}
      lineStyle={{ stroke: 'blue', strokeWidth: 2 }}
      markerStyle={}
      displayMarker={true}
      label="Vg = 3V"
    />
    <Plot.XAxis label="Drain voltage [V]" showTicks={true} tickStep={1} />
    <Plot.YAxis label="Drain current [mA]" showTicks={true} tickStep={1} />
    <Plot.Legend position="right" direction="down" />
  </Plot>
);
```

## Installation

`$ npm install --save react-plot`

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/react-plot.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-plot
[download-image]: https://img.shields.io/npm/dm/react-plot.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/react-plot