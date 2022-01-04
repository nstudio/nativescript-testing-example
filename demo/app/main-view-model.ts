import { Observable } from '@nativescript/core'
import { CustomPlugin } from 'nativescript-internal-plugin';

export class HelloWorldModel extends Observable {
  private _counter: number
  private _message: string
  plugin: CustomPlugin;

  constructor() {
    super()

    this.plugin = new CustomPlugin();
    console.log('plugin:', this.plugin);

    // Initialize default values.
    this._counter = 42
    this.updateMessage()
  }

  get message(): string {
    return this._message
  }

  set message(value: string) {
    if (this._message !== value) {
      this._message = value
      this.notifyPropertyChange('message', value)
    }
  }

  onTap() {
    this.plugin.tapButton();
    this._counter--
    this.updateMessage()
  }

  private updateMessage() {
    if (this._counter <= 0) {
      this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!'
    } else {
      this.message = `${this._counter} taps left`
    }
  }
}
