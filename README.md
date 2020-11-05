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
    <PlotHeading
      title="Electrical characterization"
      subtitle="current vs voltage"
      titleStyle={}
      substitleStyle={}
      titleClass=""
      substitleClass=""
      position="top"
    />
    <PlotLineSeries
      data={{ x: [0, 1, 2, 3, 4, 5], y: [0, 1, 2, 3, 3, 3] }}
      lineStyle={{ stroke: 'blue', strokeWidth: 2 }}
      curve={d3.curveCardinal(0.5)}
      label="Vg = 7V"
    />
    <PlotLineSeries
      data={{ x: [0, 1, 2, 3, 4, 5], y: [0, 2, 4, 6, 6, 6] }}
      lineStyle={{ stroke: 'blue', strokeWidth: 2 }}
      markerStyle={}
      displayMarker={true}
      label="Vg = 3V"
    />
    <PlotXAxis label="Drain voltage [V]" showGrid={true} />
    <PlotYAxis label="Drain current [mA]" showGrid={true} />
    <PlotLegend position="right" direction="down" />
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
