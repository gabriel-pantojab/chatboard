import { NgOptimizedImage } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';

import { ChatMessageComponent } from '@secure/components/chat-message/chat-message.component';

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [NgOptimizedImage, ChatMessageComponent],
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

  public messages: { message: string; time: string; isMine: boolean }[];

  constructor() {
    this.messages = [
      { message: 'Hola!', time: '10:00', isMine: false },
      { message: 'Hola! Soy un mensaje de prueba', time: '10:01', isMine: true },
      { message: 'Hola! Soy un mensaje de prueba', time: '10:02', isMine: false },
      { message: 'Hola! Soy un mensaje de prueba', time: '10:03', isMine: true },
      { message: 'Hola! Soy un mensaje de prueba', time: '10:04', isMine: false },
      { message: 'Hola! Soy un mensaje de prueba', time: '10:05', isMine: true },
      { message: 'Hola! Soy un mensaje de prueba', time: '10:06', isMine: false },
      { message: 'Hola! Soy un mensaje de prueba', time: '10:07', isMine: true },
      { message: 'Hola! Soy un mensaje de prueba', time: '10:08', isMine: false },
      { message: 'Hola! Soy un mensaje de prueba', time: '10:09', isMine: true },
      { message: 'Hola! Soy un mensaje de prueba', time: '10:10', isMine: false },
      { message: 'Hola! Soy un mensaje de prueba', time: '10:11', isMine: true },
      { message: 'Hola! Soy un mensaje de prueba', time: '10:12', isMine: false },
      { message: 'Hola! Soy un mensaje de prueba', time: '10:13', isMine: true },
      { message: 'Hola! Soy un mensaje de prueba', time: '10:14', isMine: false },
      { message: 'Hola! Soy un mensaje de prueba', time: '10:15', isMine: true },
      { message: 'Hola! Soy un mensaje de prueba', time: '10:16', isMine: false },
      { message: 'Hola! Soy un mensaje de prueba', time: '10:17', isMine: true },
      { message: 'Hola! Soy un mensaje de prueba', time: '10:18', isMine: false },
      { message: 'Hola! Soy un mensaje de prueba', time: '10:19', isMine: true },
    ];
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
