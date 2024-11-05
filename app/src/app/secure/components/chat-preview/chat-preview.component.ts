import { NgClass, NgOptimizedImage, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chat-preview',
  standalone: true,
  imports: [NgOptimizedImage, NgClass, NgStyle, RouterLink],
  templateUrl: './chat-preview.component.html',
  styles: ``,
})
export class ChatPreviewComponent {
  @Input()
  public id: number;
  @Input()
  public chatName: string;
  @Input()
  public avatarUrl: string;
  @Input()
  public lastMessage: string;
  @Input()
  public lastMessageTime: string;
  @Input()
  public unreadMessages: number;

  constructor() {
    this.id = 0;
    this.chatName = '';
    this.avatarUrl = 'assets/images/avatar.webp';
    this.lastMessage = '';
    this.lastMessageTime = '';
    this.unreadMessages = 0;
  }
}
