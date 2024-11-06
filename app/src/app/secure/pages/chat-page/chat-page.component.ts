import { NgOptimizedImage } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ChatMessage } from '@core/models/chat-message';
import { messages } from '@core/mocks/messages.mock';

import { ChatMessageComponent } from '@secure/components/chat-message/chat-message.component';

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [NgOptimizedImage, ChatMessageComponent, RouterLink],
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
