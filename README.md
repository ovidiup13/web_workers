# Web workers

![It ain't much, but it's honest work.](_assets/aint_much.jpg)

Contains three demos that demonstrate how to get started, expose and use Web Worker API.

## Getting started

Clone the repository and run `npm i`.

Build the assets and set up a local HTTP server to demonstrate their use case using `npm run dev`.

## Demos

### Demo 1

You can find it in the [first demo example](/src/demo_1/).

It demonstrates how to create a web worker and send basic messages from the main thread and back.

### Demo 2

You can find it in the [second demo example](/src/demo_2/).

This is a bit more complex. The HTML for this demo contains a GIF and a basic form for calculating a fibonnaci number of your choice.

Depending on which button you press, the calculation will happen either on main thread or in a worker.

The point is to demonstrate how a long Javascript task blocks the critical rendering path of the browser.

**Note**: If you are using Chrome, this might not be clear. The GIF is rendered and painted in another thread as an optimisation. For best results, try Firefox or Safari.

### Demo 3

You can find it in the [third demo example](/src/demo_3/).

This is a simple demo that demonstrates the use of Typescript with the Web Workers API. Additionally, it uses a useful abstraction for managing the inter-thread communication in the use of [Comlink](https://github.com/GoogleChromeLabs/comlink).

## Resources

- [Web Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
- [Comlink](https://github.com/GoogleChromeLabs/comlink)
- [Worker Plugin](https://github.com/GoogleChromeLabs/worker-plugin)
