import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptCustomRotors } from '@demo/shared';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
  (global as any).currentPage = page;
}

export class DemoModel extends DemoSharedNativescriptCustomRotors {}
