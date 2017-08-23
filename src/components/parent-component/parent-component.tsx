import { Component, Element } from '@stencil/core';

@Component({
  tag: 'db-parent-component'
})
export class ParentComponent {

  @Element() element: HTMLElement;

  componentDidLoad() {
    const lodashElement = this.element.querySelector('db-lodash-component') as any;
    lodashElement.getLodash().then((lodashInstance: any) => {
      console.log(`lodash is loaded: `, lodashInstance);
    });
  }

  render() {
    return (
    <div>
      <h1>Example showing lazy loading lodash</h1>
      <db-lodash-component></db-lodash-component>
    </div>
    );
  }
}