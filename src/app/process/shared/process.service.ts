import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Process } from './process';
import { ApiConfig } from '../../core/models/api-config';
import { BaseService } from '../../core/services/base.service';
import { CommonUtil } from '../../core/utilities/common.util';

@Injectable()
export class ProcessService extends BaseService<Process> {
  constructor(protected http: Http, @Inject('api.config') protected apiConfig: ApiConfig) { super(http); }

  public getServiceUrl(): string {
    return CommonUtil.getApiUrl('PROCESS_SERVICE_URL', this.apiConfig);
  }
}