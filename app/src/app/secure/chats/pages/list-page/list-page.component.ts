import { Component } from '@angular/core';

import { ChatPreview } from '@core/interfaces/chat-preview.interface';
import { chats } from '@core/mocks/chats.mock';

import { ChatPreviewComponent } from '@/app/secure/chats/components/chat-preview/chat-preview.component';

@Component({
  selector: 'app-chats-page',
  standalone: true,
  imports: [ChatPreviewComponent],
  templateUrl: './list-page.component.html',
  styles: `
    :host {
      height: calc(100% - 48px);
    }
  `,
})
export class ListPageComponent {
  public chats: ChatPreview[];

  constructor() {
    this.chats = chats;
  }
}
