import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbInputModule, NbButtonModule, NbIconModule, NbSpinnerModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule } from '@angular/forms';

interface Message {
  content: string;
  isUser: boolean;
  timestamp: Date;
}

@Component({
  selector: 'app-ai-assistant',
  standalone: true,
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    NbEvaIconsModule,
    NbSpinnerModule,
    FormsModule
  ],
  templateUrl: './ai-assistant.component.html',
  styleUrls: ['./ai-assistant.component.scss']
})
export class AiAssistantComponent implements OnInit {
  messages: Message[] = [];
  newMessage: string = '';
  isLoading: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // Add welcome message
    this.messages.push({
      content: 'Hello! I\'m your AI travel assistant. I can help you plan your trips, suggest destinations, and provide travel tips. What would you like to know?',
      isUser: false,
      timestamp: new Date()
    });
  }

  async sendMessage(): Promise<void> {
    if (!this.newMessage.trim()) return;

    // Add user message
    this.messages.push({
      content: this.newMessage,
      isUser: true,
      timestamp: new Date()
    });

    const userMessage = this.newMessage;
    this.newMessage = '';
    this.isLoading = true;

    try {
      // TODO: Implement API call to AI service
      // For now, simulate a response
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      this.messages.push({
        content: 'I understand you\'re asking about ' + userMessage + '. Let me help you with that...',
        isUser: false,
        timestamp: new Date()
      });
    } catch (error) {
      console.error('Error sending message:', error);
      this.messages.push({
        content: 'Sorry, I encountered an error. Please try again.',
        isUser: false,
        timestamp: new Date()
      });
    } finally {
      this.isLoading = false;
    }
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
} 