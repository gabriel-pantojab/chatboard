import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chat-header',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './chat-header.component.html',
  styles: ``,
})
export class ChatHeaderComponent {}
