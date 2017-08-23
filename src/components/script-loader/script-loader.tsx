import { Component, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'db-script-loader'
})
export class ScriptLoader {

  @Prop() src: string;
  @Event() loaded: EventEmitter;

  componentWillLoad() {
    const scriptTag = document.createElement('script');
    scriptTag.setAttribute('src', this.src);
    scriptTag.onload = (event: UIEvent) => {
      this.loaded.emit(event);
    }
    console.log('appending!');
    document.head.appendChild(scriptTag);
  }

  render() {
    return (
    <slot></slot>
    );
  }
}