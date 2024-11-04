import { Component } from '@angular/core';
import { ChatPreviewComponent } from '../../components/chat-preview/chat-preview.component';
import { ChatPreview } from '../../../core/interfaces/chat-preview.interface';
import { chats } from '../../../core/mocks/chats.mock';

@Component({
  selector: 'app-chats-page',
  standalone: true,
  imports: [ChatPreviewComponent],
  templateUrl: './chats-page.component.html',
  styles: `
    :host {
      height: calc(100% - 48px);
    }
  `,
})
export class ChatsPageComponent {
  public chats: ChatPreview[];

  constructor() {
    this.chats = chats;
  }
}
