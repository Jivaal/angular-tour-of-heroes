import { Component, OnInit } from '@angular/core';

import { MessagesService } from './messages.service';

@Component({
  selector: 'kg-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit 
{
  constructor(public messagesService : MessagesService) { }

  public ngOnInit(): void { }
}
