import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';

import { ChatMessage } from '@core/models/chat-message';
import { messages } from '@core/mocks/messages.mock';

import { ChatMessageComponent } from '@secure/chats/components/chat-message/chat-message.component';
import { ChatHeaderComponent } from '@secure/chats/components/chat-header/chat-header.component';

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [ChatMessageComponent, ChatHeaderComponent],
  templateUrl: './chat-page.component.html',
  styles: `
    :host {
      height: calc(100% - 48px);
    }
  `,
})
export class ChatPageComponent implements AfterViewChecked {
  @ViewChild('messagesContainer')
  private messagesContainer!: ElementRef;

  public messages: ChatMessage[];

  constructor() {
    this.messages = messages;
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Error al hacer scroll:', err);
    }
  }
}
