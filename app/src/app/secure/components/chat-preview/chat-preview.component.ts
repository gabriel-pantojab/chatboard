import { NgClass, NgOptimizedImage, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-preview',
  standalone: true,
  imports: [NgOptimizedImage, NgClass, NgStyle],
  templateUrl: './chat-preview.component.html',
  styles: ``,
})
export class ChatPreviewComponent {
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
    this.chatName = '';
    this.avatarUrl = 'assets/images/avatar.webp';
    this.lastMessage = '';
    this.lastMessageTime = '';
    this.unreadMessages = 0;
  }
}
