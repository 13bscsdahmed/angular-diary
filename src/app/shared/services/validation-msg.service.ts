import { Injectable } from '@angular/core';

@Injectable()
export class ValidationMsgService {
  
  private errorMessages: any = {
    'note-required' : 'Note is a required field',
    'picture-required' : 'Picture is a required field',
    'video-required': 'Video is a required field',
    'date-required': 'Date is a required field',
  };
  
  public getValidationMsg(validationId: string): string {
    return this.errorMessages[validationId];
  }
  
}
