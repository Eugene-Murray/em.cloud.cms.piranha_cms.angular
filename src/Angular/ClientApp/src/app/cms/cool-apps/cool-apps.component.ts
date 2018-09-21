import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CmsService } from '../cms.service';
import { CmsBasePage } from '../shared/cms-base.page';

@Component({
  selector: 'page',
  templateUrl: './cool-apps.component.html'
})
export class CoolAppsComponent extends CmsBasePage {
  
  constructor(cmsService: CmsService, http: HttpClient) {
    super(cmsService);
  }
  
}


