import { Component, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'db-script-loader'
})
export class ScriptLoader {

  @Prop() source: string;
  @Event() dbScriptLoaded: EventEmitter;

  componentDidLoad() {
    const scriptTag = document.createElement('script');
    scriptTag.setAttribute('src', this.source);
    scriptTag.onload = (event: UIEvent) => {
      this.dbScriptLoaded.emit(event);
    }
    document.head.appendChild(scriptTag);
  }

  render() {
    return (
    <slot></slot>
    );
  }
}