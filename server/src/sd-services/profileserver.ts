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
import * as safeStringify from 'fast-safe-stringify'; //_splitter_
import { GenericRDBMSOperations } from '../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class profileserver {
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
    this.serviceName = 'profileserver';
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
      instance = new profileserver(
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
      //appendnew_flow_profileserver_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: profileserver');

    //appendnew_flow_profileserver_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: profileserver');

    if (!this.swaggerDocument['paths']['/users/{id}']) {
      this.swaggerDocument['paths']['/users/{id}'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/users/{id}']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/users/:id`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          this.sd_kY4dwlZXkdv55cfg(bh);
          bh = await this.sd_fV3yAMVFARYgeTiq(bh);
          //appendnew_next_sd_dzOQGH9RJ7SgguNq
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_dzOQGH9RJ7SgguNq');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/updateprofile']) {
      this.swaggerDocument['paths']['/updateprofile'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/updateprofile']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/updateprofile`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          this.sd_kY4dwlZXkdv55cfg(bh);
          bh = await this.sd_x98oyEaEIzbOLldW(bh);
          //appendnew_next_sd_u9WzWVYcJ8W6qQJk
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_u9WzWVYcJ8W6qQJk');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/updatesocial']) {
      this.swaggerDocument['paths']['/updatesocial'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/updatesocial']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/updatesocial`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_eRliwBs8XRMv5X8u(bh);
          //appendnew_next_sd_XukcghfPRJ6dTWUv
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_XukcghfPRJ6dTWUv');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_profileserver_HttpIn
  }
  //   service flows_profileserver

  //appendnew_flow_profileserver_start

  async sd_kY4dwlZXkdv55cfg(bh) {
    try {
      let logobj: any = bh.input;
      if (logobj instanceof Error) {
        log.info(logobj);
      } else {
        log.info(safeStringify.default(logobj));
      }
      //appendnew_next_sd_kY4dwlZXkdv55cfg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kY4dwlZXkdv55cfg');
    }
  }

  async sd_fV3yAMVFARYgeTiq(bh) {
    try {
      bh.local.id = [bh.input.params.id];
      bh = await this.sd_4paPQGnN6Hp2ZSgp(bh);
      //appendnew_next_sd_fV3yAMVFARYgeTiq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fV3yAMVFARYgeTiq');
    }
  }

  async sd_4paPQGnN6Hp2ZSgp(bh) {
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_DbjywM4edN2Z427p'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.local.id;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        'SELECT * FROM users WHERE id=$1',
        params
      );
      await this.sd_nTRnnMUugiGxotml(bh);
      //appendnew_next_sd_4paPQGnN6Hp2ZSgp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4paPQGnN6Hp2ZSgp');
    }
  }

  async sd_nTRnnMUugiGxotml(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nTRnnMUugiGxotml');
    }
  }

  async sd_x98oyEaEIzbOLldW(bh) {
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_DbjywM4edN2Z427p'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.input.body;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        'UPDATE users SET fullname=$2, title=$3, email=$4, birthday=$5, country = $6, state = $7, postalcode = $8, phone = $9, agree_notif = $10 WHERE id=$1',
        params
      );
      await this.sd_dy5GXm1sjO5VbFxX(bh);
      //appendnew_next_sd_x98oyEaEIzbOLldW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_x98oyEaEIzbOLldW');
    }
  }

  async sd_dy5GXm1sjO5VbFxX(bh) {
    try {
      bh.web.res.status(200).send('OK');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dy5GXm1sjO5VbFxX');
    }
  }

  async sd_9pzILOoN67plRmWk(bh) {
    try {
      let logobj: any = bh.error;
      if (logobj instanceof Error) {
        log.error(logobj);
      } else {
        log.error(safeStringify.default(logobj));
      }
      //appendnew_next_sd_9pzILOoN67plRmWk
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9pzILOoN67plRmWk');
    }
  }

  async sd_eRliwBs8XRMv5X8u(bh) {
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_DbjywM4edN2Z427p'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.input.body;
      params = params ? params : [];
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        'UPDATE users SET facebook=$2, twitter=$3, blogger=$4, google=$5, linkedin = $6, website = $7 WHERE id=$1',
        params
      );
      await this.sd_GL2U9cEfCrMbB2Oh(bh);
      //appendnew_next_sd_eRliwBs8XRMv5X8u
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eRliwBs8XRMv5X8u');
    }
  }

  async sd_GL2U9cEfCrMbB2Oh(bh) {
    try {
      bh.web.res.status(200).send('OK');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GL2U9cEfCrMbB2Oh');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_gkZIGFQ05cjm0eiv(bh))
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
  async sd_gkZIGFQ05cjm0eiv(bh) {
    const catchConnectedNodes = ['sd_9pzILOoN67plRmWk'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    this.sd_9pzILOoN67plRmWk(bh);
    //appendnew_next_sd_gkZIGFQ05cjm0eiv
    return true;
  }
  //appendnew_flow_profileserver_Catch
}
