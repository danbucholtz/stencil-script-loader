import { Component, Method, Listen } from '@stencil/core';

declare var _: any;

@Component({
  tag: 'db-lodash-component'
})
export class LodashComponent {

  loaded: boolean = false;
  resolve: Function;

  @Method()
  getLodash() {
    return new Promise((resolve) => {
      if (this.loaded) {
        resolve(_);
      } else {
        // it hasn't loaded yet, so store the promise resolve function and call it when it loads
        this.resolve = resolve;
      }
    });
  }

  @Listen('body:dbScriptLoaded')
  lodashLoaded() {
    this.loaded = true;
    if (this.resolve) {
      this.resolve(_);
      this.resolve = null;
    }
  }

  render() {
    return (
    <db-script-loader source="/scripts/lodash.js"></db-script-loader>
    );
  }
}