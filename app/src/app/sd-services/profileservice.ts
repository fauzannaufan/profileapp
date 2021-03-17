/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from '../../app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable()
export class profileservice {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {
    this.registerListeners();
  }
  registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_profileservice

  async getUser(id: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          id: id,
        },
        local: {
          userData: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.getUserFromDb(bh);
      //appendnew_next_getUser
      return (
        // formatting output variables
        {
          input: {},
          local: {
            userData: bh.local.userData,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WfxRIo4xzeAHjMm5');
    }
  }

  async updateprofile(data: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          data: data,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.updatedb1(bh);
      //appendnew_next_updateprofile
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_66LBonsvhEtLloSL');
    }
  }

  async updatesocial(data: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          data: data,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.updatedb2(bh);
      //appendnew_next_updatesocial
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_A4R4ha5srSMpAlQq');
    }
  }

  //appendnew_flow_profileservice_start

  async getUserFromDb(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `users/${bh.input.id}/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.userData = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_getUserFromDb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lxN1NNveKfxSSBwO');
    }
  }

  async updatedb1(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `updateprofile/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'text',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.data,
      };
      bh.local.userData = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_3QY95FgmlwakdIm0(bh);
      //appendnew_next_updatedb1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Bdw6pp3GU9Id85bG');
    }
  }

  async sd_3QY95FgmlwakdIm0(bh) {
    try {
      this.matSnackBar.open('Success Update', 'OK', {
        duration: 2000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_3QY95FgmlwakdIm0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3QY95FgmlwakdIm0');
    }
  }

  async updatedb2(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `updatesocial/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'text',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.data,
      };
      bh.local.userData = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_3QY95FgmlwakdIm0(bh);
      //appendnew_next_updatedb2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WiCZ9qxo6GYEg8Ld');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_profileservice_Catch
}
