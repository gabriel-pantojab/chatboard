import { NgClass } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [NgClass],
  templateUrl: './chat-message.component.html',
  styles: `
    :host {
      min-width: 100px;
      width: max-content;
      max-width: 70%;
    }

    :host(.me) {
      align-self: flex-end;
    }

    :host(.me) .message {
      background-color: rgba(0, 0, 255, 0.1);
    }
  `,
})
export class ChatMessageComponent {
  @Input()
  public isMine: boolean;
  @Input()
  public message: string;
  @Input()
  public time: string;
  @Input()
  public hasBeenRead: boolean;

  constructor() {
    this.isMine = false;
    this.message = '';
    this.time = '';
    this.hasBeenRead = false;
  }

  @HostBinding('class.me')
  public get isMe(): boolean {
    return this.isMine;
  }
}
