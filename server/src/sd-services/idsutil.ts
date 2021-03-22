let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
//append_imports_end
export class idsutil {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'idsutil';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new idsutil(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_idsutil_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: idsutil');

    //appendnew_flow_idsutil_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: idsutil');
    //appendnew_flow_idsutil_HttpIn
  }
  //   service flows_idsutil

  async getIDSClientInstance(clientInstance = null, ...others) {
    try {
      var bh = {
        input: {
          clientInstance: clientInstance,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_WtjPViL3AsGVzKX9(bh);
      //appendnew_next_getIDSClientInstance
      return (
        // formatting output variables
        {
          input: {
            clientInstance: bh.input.clientInstance,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tmcuE5q73PGmudrD');
    }
  }

  async getAuthorizationParams(authParams = null, ...others) {
    try {
      var bh = {
        input: {
          authParams: authParams,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_zNbAH2A1sWwjDQgW(bh);
      //appendnew_next_getAuthorizationParams
      return (
        // formatting output variables
        {
          input: {
            authParams: bh.input.authParams,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FHMpsVuIbblOB0oP');
    }
  }

  async handleTokenExpiry(existingSession = '', newSession = '', ...others) {
    try {
      var bh = {
        input: {
          existingSession: existingSession,
          newSession: newSession,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_dn3hcsEDBVJBTogx(bh);
      //appendnew_next_handleTokenExpiry
      return (
        // formatting output variables
        {
          input: {
            newSession: bh.input.newSession,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mIdsPnkgmpf7EpIa');
    }
  }

  //appendnew_flow_idsutil_start

  //__server_service_designer_class_variable_declaration__client
  client: any;
  async sd_WtjPViL3AsGVzKX9(bh) {
    try {
      bh.local.client = this.client;
      bh = await this.sd_AqragNT74wWEUn2d(bh);
      //appendnew_next_sd_WtjPViL3AsGVzKX9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WtjPViL3AsGVzKX9');
    }
  }

  async sd_AqragNT74wWEUn2d(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['istype'](
          bh.local.client,
          'undefined',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_G0L1MrlC5Y3vnOU1(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_2m6MCspcYRqXGjIQ(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AqragNT74wWEUn2d');
    }
  }

  async sd_G0L1MrlC5Y3vnOU1(bh) {
    try {
      const DEFAULT_HTTP_OPTIONS = {
        timeout: 60000,
      };

      custom.setHttpOptionsDefaults({
        timeout: DEFAULT_HTTP_OPTIONS.timeout,
      });
      log.info(
        `Identity server default HTTP options : ${DEFAULT_HTTP_OPTIONS}`
      );
      const issuer = await Issuer.discover(
        settings.default['ids']['issuerURL']
      );
      log.info(`Identity server discovered at : ${issuer.issuer}`);
      const client = await new issuer.Client({
        client_id: settings.default['ids']['client_id'],
        client_secret: settings.default['ids']['client_secret'],
      });
      client[custom.clock_tolerance] = process.env.CLOCK_TOLERANCE;
      log.info('Client connected...');
      bh.input.clientInstance = client;
      bh = await this.sd_ozGKnH1b3a1TI7DX(bh);
      //appendnew_next_sd_G0L1MrlC5Y3vnOU1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_G0L1MrlC5Y3vnOU1');
    }
  }

  async sd_ozGKnH1b3a1TI7DX(bh) {
    try {
      this.client = bh.input.clientInstance;
      //appendnew_next_sd_ozGKnH1b3a1TI7DX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ozGKnH1b3a1TI7DX');
    }
  }

  async sd_2m6MCspcYRqXGjIQ(bh) {
    try {
      bh.input.clientInstance = this.client;
      //appendnew_next_sd_2m6MCspcYRqXGjIQ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2m6MCspcYRqXGjIQ');
    }
  }

  async sd_zNbAH2A1sWwjDQgW(bh) {
    try {
      bh.input.authParams = {
        scope: 'openid profile email address phone offline_access user',
        prompt: 'consent',
      };
      //appendnew_next_sd_zNbAH2A1sWwjDQgW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zNbAH2A1sWwjDQgW');
    }
  }

  async sd_dn3hcsEDBVJBTogx(bh) {
    try {
      const tokenset = bh.input.existingSession.data.tokenset;
      bh.local.expires_at = tokenset['expires_at'] * 1000;
      bh.local.refreshTime = new Date().valueOf() + 300000; // 5min before
      bh = await this.sd_6DEXZ2gTsODHJ35G(bh);
      //appendnew_next_sd_dn3hcsEDBVJBTogx
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dn3hcsEDBVJBTogx');
    }
  }

  async sd_6DEXZ2gTsODHJ35G(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['gt'](
          bh.local.expires_at,
          bh.local.refreshTime,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Z1GZbHLoOUb3moaQ(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_y6jgHXeipORcFXfr(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6DEXZ2gTsODHJ35G');
    }
  }

  async sd_Z1GZbHLoOUb3moaQ(bh) {
    try {
      bh.input.newSession = bh.input.existingSession.data;
      //appendnew_next_sd_Z1GZbHLoOUb3moaQ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Z1GZbHLoOUb3moaQ');
    }
  }

  async sd_y6jgHXeipORcFXfr(bh) {
    try {
      let outputVariables = await this.getIDSClientInstance(null);
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_xPB6IN2uuy4IN4n9(bh);
      //appendnew_next_sd_y6jgHXeipORcFXfr
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_y6jgHXeipORcFXfr');
    }
  }

  async sd_xPB6IN2uuy4IN4n9(bh) {
    try {
      bh.local.refresh_token = await bh.input.client.introspect(
        bh.input.existingSession.data.tokenset.refresh_token,
        'refresh_token'
      );
      bh = await this.sd_XAx2AvBH6ynNm53I(bh);
      //appendnew_next_sd_xPB6IN2uuy4IN4n9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xPB6IN2uuy4IN4n9');
    }
  }

  async sd_XAx2AvBH6ynNm53I(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.refresh_token.active,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_0la5flOgoZAnpZJd(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_61uMXs9TK5Axpj5Y(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XAx2AvBH6ynNm53I');
    }
  }

  async sd_0la5flOgoZAnpZJd(bh) {
    try {
      bh.input.newSession = { rotated: true };
      bh.input.newSession['tokenset'] = await bh.input.client.refresh(
        bh.input.existingSession.data.tokenset.refresh_token
      );
      bh.input.newSession['userInfo'] = await bh.input.client.userinfo(
        bh.input.newSession['tokenset']['access_token']
      );
      bh.input.newSession['tokenset']['claims'] = Object.assign(
        {},
        bh.input.newSession['tokenset'].claims()
      );
      //appendnew_next_sd_0la5flOgoZAnpZJd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0la5flOgoZAnpZJd');
    }
  }

  async sd_61uMXs9TK5Axpj5Y(bh) {
    try {
      bh.input.newSession = false;
      //appendnew_next_sd_61uMXs9TK5Axpj5Y
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_61uMXs9TK5Axpj5Y');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_oKcvsWhIBFLyof8v(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_oKcvsWhIBFLyof8v(bh) {
    const nodes = ['handleTokenExpiry'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_61uMXs9TK5Axpj5Y(bh);
      //appendnew_next_sd_oKcvsWhIBFLyof8v
      return true;
    }
    return false;
  }
  //appendnew_flow_idsutil_Catch
}
