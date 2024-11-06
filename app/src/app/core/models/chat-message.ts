export class ChatMessage {
  public message: string;
  public time: string;
  public isMine: boolean;
  public hasBeenRead: boolean;

  constructor() {
    this.message = '';
    this.time = '';
    this.isMine = false;
    this.hasBeenRead = false;
  }
}
