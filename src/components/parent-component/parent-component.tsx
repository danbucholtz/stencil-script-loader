import { Component } from '@stencil/core';

@Component({
  tag: 'db-parent-component'
})
export class ParentComponent {

  render() {
    return (
    <div>
      <h1>Yo</h1>
      <db-script-loader src="/scripts/lodash.js"></db-script-loader>
    </div>
    );
  }
}