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
import * as sd_dTSbgLoaOeq5gFqR from './idsutil'; //_splitter_
//append_imports_end
export class ids {
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
    this.serviceName = 'ids';
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
      instance = new ids(
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
      //appendnew_flow_ids_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids');

    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          bh = await this.sd_Rm2zSBN1MAMEXtvu(bh);
          //appendnew_next_sd_jl4B1ZKNOsRmcswP
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_jl4B1ZKNOsRmcswP');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['hrefstart'] = mw_hrefstart;
    let mw_Authorize: Middleware = new Middleware(
      this.serviceName,
      'Authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          bh = await this.sd_eD9jRQYwRSDUIDCT(bh);
          //appendnew_next_sd_gIJDWPjWlkakvfT7
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_gIJDWPjWlkakvfT7');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Authorize'] = mw_Authorize;
    //appendnew_flow_ids_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids');

    if (!this.swaggerDocument['paths']['/login']) {
      this.swaggerDocument['paths']['/login'] = {
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
      this.swaggerDocument['paths']['/login']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/login`,
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
          bh = await this.sd_w7m1mEUU2kJ14W6U(bh);
          //appendnew_next_sd_E4ppmhQ6i7AVEDje
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_E4ppmhQ6i7AVEDje');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/login/cb']) {
      this.swaggerDocument['paths']['/login/cb'] = {
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
      this.swaggerDocument['paths']['/login/cb']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/login/cb`,
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
          bh = await this.sd_v4JMaffkca9AAzBm(bh);
          //appendnew_next_sd_VFqnB5su1F2RifOx
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_VFqnB5su1F2RifOx');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/user/info']) {
      this.swaggerDocument['paths']['/user/info'] = {
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
      this.swaggerDocument['paths']['/user/info']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/user/info`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
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
          bh = await this.sd_u4HovsyTTFfA7k6n(bh);
          //appendnew_next_sd_LoQ58LEazOLV4wEb
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_LoQ58LEazOLV4wEb');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/logout']) {
      this.swaggerDocument['paths']['/logout'] = {
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
      this.swaggerDocument['paths']['/logout']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/logout`,
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
          bh = await this.sd_V6xTgUGlvWgm34g4(bh);
          //appendnew_next_sd_dAZmC1YUOLyZDvND
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_dAZmC1YUOLyZDvND');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/logout/cb']) {
      this.swaggerDocument['paths']['/logout/cb'] = {
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
      this.swaggerDocument['paths']['/logout/cb']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/logout/cb`,
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
          bh = await this.sd_7uTpByzrpePQrewM(bh);
          //appendnew_next_sd_tGUtMYExU9Phc6EM
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_tGUtMYExU9Phc6EM');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_HttpIn
  }
  //   service flows_ids

  //appendnew_flow_ids_start

  async sd_w7m1mEUU2kJ14W6U(bh) {
    try {
      bh.local.idsConfigured = false;
      if (
        settings.default.hasOwnProperty('ids') &&
        settings.default['ids'].hasOwnProperty('client_id') &&
        settings.default['ids'].hasOwnProperty('client_secret')
      ) {
        bh.local.idsConfigured = true;
      }
      bh = await this.sd_gDsPbsBfsLz8nsqO(bh);
      //appendnew_next_sd_w7m1mEUU2kJ14W6U
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_w7m1mEUU2kJ14W6U');
    }
  }

  async sd_gDsPbsBfsLz8nsqO(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.idsConfigured,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_jrlSjigCXr7dH75k(bh);
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
        bh = await this.sd_d3mqkeGUfnx5HKJf(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gDsPbsBfsLz8nsqO');
    }
  }

  async sd_jrlSjigCXr7dH75k(bh) {
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo,
      };
      bh = await this.sd_9bNMeRd7Uo6K48Gv(bh);
      //appendnew_next_sd_jrlSjigCXr7dH75k
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jrlSjigCXr7dH75k');
    }
  }

  async sd_9bNMeRd7Uo6K48Gv(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      bh = await this.sd_nPzcmJ97Gh0uY5yq(bh);
      //appendnew_next_sd_9bNMeRd7Uo6K48Gv
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9bNMeRd7Uo6K48Gv');
    }
  }

  async sd_nPzcmJ97Gh0uY5yq(bh) {
    try {
      const sd_dTSbgLoaOeq5gFqRInstance: sd_dTSbgLoaOeq5gFqR.idsutil = sd_dTSbgLoaOeq5gFqR.idsutil.getInstance();
      let outputVariables = await sd_dTSbgLoaOeq5gFqRInstance.getIDSClientInstance(
        null
      );
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_yJ9W6U6IaF8wCRht(bh);
      //appendnew_next_sd_nPzcmJ97Gh0uY5yq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nPzcmJ97Gh0uY5yq');
    }
  }

  async sd_yJ9W6U6IaF8wCRht(bh) {
    try {
      const sd_dTSbgLoaOeq5gFqRInstance: sd_dTSbgLoaOeq5gFqR.idsutil = sd_dTSbgLoaOeq5gFqR.idsutil.getInstance();
      let outputVariables = await sd_dTSbgLoaOeq5gFqRInstance.getAuthorizationParams(
        null
      );
      bh.input.authParams = outputVariables.input.authParams;

      bh = await this.sd_7xNK2AxMUPblf1B6(bh);
      //appendnew_next_sd_yJ9W6U6IaF8wCRht
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yJ9W6U6IaF8wCRht');
    }
  }

  async sd_7xNK2AxMUPblf1B6(bh) {
    try {
      const authorizationRequest = Object.assign(
        {
          redirect_uri: url.resolve(bh.web.req.href, '/api/login/cb'),
          scope: 'openid profile email address phone user',
          state: bh.local.reqParams.state,
          nonce: bh.local.reqParams.nonce,
          response_type: bh.input.client.response_types[0],
        },
        bh.input.authParams
      );

      bh.local.redirectHeaders = {
        location: bh.input.client.authorizationUrl(authorizationRequest),
      };

      await this.sd_WPl8nA2qDDvC8LfG(bh);
      //appendnew_next_sd_7xNK2AxMUPblf1B6
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7xNK2AxMUPblf1B6');
    }
  }

  async sd_WPl8nA2qDDvC8LfG(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WPl8nA2qDDvC8LfG');
    }
  }

  async sd_d3mqkeGUfnx5HKJf(bh) {
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      await this.sd_aHrMZqgsw61RKCca(bh);
      //appendnew_next_sd_d3mqkeGUfnx5HKJf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_d3mqkeGUfnx5HKJf');
    }
  }

  async sd_aHrMZqgsw61RKCca(bh) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aHrMZqgsw61RKCca');
    }
  }

  async sd_Rm2zSBN1MAMEXtvu(bh) {
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      await this.sd_dfLVSZPVIzi1e3iw(bh);
      //appendnew_next_sd_Rm2zSBN1MAMEXtvu
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Rm2zSBN1MAMEXtvu');
    }
  }

  async sd_dfLVSZPVIzi1e3iw(bh) {
    try {
      bh.web.next();
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dfLVSZPVIzi1e3iw');
    }
  }

  async sd_v4JMaffkca9AAzBm(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.input.sessionParams = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_Kaj5rWBwkTwsRaIl(bh);
      //appendnew_next_sd_v4JMaffkca9AAzBm
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_v4JMaffkca9AAzBm');
    }
  }

  async sd_Kaj5rWBwkTwsRaIl(bh) {
    try {
      const sd_dTSbgLoaOeq5gFqRInstance: sd_dTSbgLoaOeq5gFqR.idsutil = sd_dTSbgLoaOeq5gFqR.idsutil.getInstance();
      let outputVariables = await sd_dTSbgLoaOeq5gFqRInstance.getIDSClientInstance(
        null
      );
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_3dHr3kXNYJkzgXSf(bh);
      //appendnew_next_sd_Kaj5rWBwkTwsRaIl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Kaj5rWBwkTwsRaIl');
    }
  }

  async sd_3dHr3kXNYJkzgXSf(bh) {
    try {
      const params = bh.input.client.callbackParams(bh.web.req);
      let tokenset = await bh.input.client.callback(
        url.resolve(bh.web.req.href, 'cb'),
        params,
        {
          nonce: bh.input.sessionParams.data.nonce,
          state: bh.input.sessionParams.data.state,
        }
      );

      bh.local.redirectTo = bh.input.sessionParams.data.redirectTo;

      bh.local.userDetails = {
        tokenset: Object.assign({}, tokenset),
        userInfo: await bh.input.client.userinfo(tokenset['access_token']),
      };
      bh.local.userDetails['tokenset']['claims'] = Object.assign(
        {},
        tokenset.claims()
      );
      bh = await this.sd_De27z3OaXN8nQPJa(bh);
      //appendnew_next_sd_3dHr3kXNYJkzgXSf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3dHr3kXNYJkzgXSf');
    }
  }

  async sd_De27z3OaXN8nQPJa(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      bh = await this.sd_dhMAFkgbi4XarG1L(bh);
      //appendnew_next_sd_De27z3OaXN8nQPJa
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_De27z3OaXN8nQPJa');
    }
  }

  async sd_dhMAFkgbi4XarG1L(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.input.sessionParams.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_t4L10qWEE20AjiKi(bh);
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
        bh = await this.sd_X7d0fYcREVP0Aznx(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dhMAFkgbi4XarG1L');
    }
  }

  async sd_t4L10qWEE20AjiKi(bh) {
    try {
      bh.local.htmlResponse = `
 <html>
   <script>
      let _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      await this.sd_8QiylUIITbgWM47K(bh);
      //appendnew_next_sd_t4L10qWEE20AjiKi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_t4L10qWEE20AjiKi');
    }
  }

  async sd_8QiylUIITbgWM47K(bh) {
    try {
      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8QiylUIITbgWM47K');
    }
  }

  async sd_X7d0fYcREVP0Aznx(bh) {
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      await this.sd_lIGWOAcwrRaachiI(bh);
      //appendnew_next_sd_X7d0fYcREVP0Aznx
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_X7d0fYcREVP0Aznx');
    }
  }

  async sd_lIGWOAcwrRaachiI(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lIGWOAcwrRaachiI');
    }
  }

  async sd_u4HovsyTTFfA7k6n(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      await this.sd_ha5JHZfayHNst5ii(bh);
      //appendnew_next_sd_u4HovsyTTFfA7k6n
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_u4HovsyTTFfA7k6n');
    }
  }

  async sd_ha5JHZfayHNst5ii(bh) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ha5JHZfayHNst5ii');
    }
  }

  async sd_pSLDD3m2qGE8XAzq(bh) {
    try {
      bh.web.res.redirect('/api/login');
      //appendnew_next_sd_pSLDD3m2qGE8XAzq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pSLDD3m2qGE8XAzq');
    }
  }

  async sd_V6xTgUGlvWgm34g4(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_mtU7yVqN7o3Ie4Oh(bh);
      //appendnew_next_sd_V6xTgUGlvWgm34g4
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_V6xTgUGlvWgm34g4');
    }
  }

  async sd_mtU7yVqN7o3Ie4Oh(bh) {
    try {
      bh.local.sessionExists = false;
      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset
      ) {
        bh.local.sessionData['data']['redirectTo'] =
          bh.input.query['redirectTo'];
        bh.local.sessionData['data']['isMobile'] = bh.input.query['isMobile'];
        bh.local.sessionExists = true;
      } else {
        delete bh.local.sessionData['redirectTo'];
      }
      bh = await this.sd_cXhVXTjf9hwYhTIq(bh);
      //appendnew_next_sd_mtU7yVqN7o3Ie4Oh
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mtU7yVqN7o3Ie4Oh');
    }
  }

  async sd_cXhVXTjf9hwYhTIq(bh) {
    try {
      const sd_dTSbgLoaOeq5gFqRInstance: sd_dTSbgLoaOeq5gFqR.idsutil = sd_dTSbgLoaOeq5gFqR.idsutil.getInstance();
      let outputVariables = await sd_dTSbgLoaOeq5gFqRInstance.getIDSClientInstance(
        null
      );
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_YuJfncaf4KSLH4r1(bh);
      //appendnew_next_sd_cXhVXTjf9hwYhTIq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cXhVXTjf9hwYhTIq');
    }
  }

  async sd_YuJfncaf4KSLH4r1(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_z7JvHRPWtcQZEgHg(bh);
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
        bh = await this.sd_8OU7DOZdfVKE6c58(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YuJfncaf4KSLH4r1');
    }
  }

  async sd_z7JvHRPWtcQZEgHg(bh) {
    try {
      await Promise.all([
        bh.local.sessionData.data.tokenset.access_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.access_token,
              'access_token'
            )
          : undefined,
        bh.local.sessionData.data.tokenset.refresh_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.refresh_token,
              'refresh_token'
            )
          : undefined,
      ]);

      bh.local.res = {
        idsURL: url.format(
          Object.assign(
            url.parse(bh.input.client.issuer.end_session_endpoint),
            {
              search: null,
              query: {
                id_token_hint: bh.local.sessionData.data.tokenset.id_token,
                post_logout_redirect_uri: url.resolve(
                  bh.web.req.href,
                  '/api/logout/cb'
                ),
                client_id: settings.default['ids']['client_id'],
              },
            }
          )
        ),
        sessionExists: true,
      };

      // Remove user info and tokenset before login redirect
      bh.local.sessionData.data.tokenset = null;
      bh.local.sessionData.data.userInfo = null;
      bh = await this.sd_dCWCI7Lqpk6tk1KJ(bh);
      //appendnew_next_sd_z7JvHRPWtcQZEgHg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_z7JvHRPWtcQZEgHg');
    }
  }

  async sd_dCWCI7Lqpk6tk1KJ(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.sessionData.data;
      }
      await this.sd_DGK9ncTxhyJLnDtB(bh);
      //appendnew_next_sd_dCWCI7Lqpk6tk1KJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dCWCI7Lqpk6tk1KJ');
    }
  }

  async sd_DGK9ncTxhyJLnDtB(bh) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DGK9ncTxhyJLnDtB');
    }
  }

  async sd_8OU7DOZdfVKE6c58(bh) {
    try {
      bh.local.res = {
        sessionExists: false,
      };
      await this.sd_DGK9ncTxhyJLnDtB(bh);
      //appendnew_next_sd_8OU7DOZdfVKE6c58
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8OU7DOZdfVKE6c58');
    }
  }

  async sd_7uTpByzrpePQrewM(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_zuOolU1wED5OvYhk(bh);
      //appendnew_next_sd_7uTpByzrpePQrewM
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7uTpByzrpePQrewM');
    }
  }

  async sd_zuOolU1wED5OvYhk(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      bh = await this.sd_svj7px3F55xLf9pa(bh);
      //appendnew_next_sd_zuOolU1wED5OvYhk
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zuOolU1wED5OvYhk');
    }
  }

  async sd_svj7px3F55xLf9pa(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.local.sessionData.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_9w2lrFtB9Tau7IoC(bh);
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
        bh = await this.sd_yMAOn5IXXBRM1bUl(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_svj7px3F55xLf9pa');
    }
  }

  async sd_9w2lrFtB9Tau7IoC(bh) {
    try {
      bh.local.res = `<html>
   <script>
      var _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      await this.sd_17KtkdWqZGH8gvk6(bh);
      //appendnew_next_sd_9w2lrFtB9Tau7IoC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9w2lrFtB9Tau7IoC');
    }
  }

  async sd_17KtkdWqZGH8gvk6(bh) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_17KtkdWqZGH8gvk6');
    }
  }

  async sd_yMAOn5IXXBRM1bUl(bh) {
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      await this.sd_3AmL6ysxzFXIj4UX(bh);
      //appendnew_next_sd_yMAOn5IXXBRM1bUl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yMAOn5IXXBRM1bUl');
    }
  }

  async sd_3AmL6ysxzFXIj4UX(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3AmL6ysxzFXIj4UX');
    }
  }

  async sd_eD9jRQYwRSDUIDCT(bh) {
    try {
      bh.local = {};
      bh = await this.sd_9BsI2v5ZAlDQTLm1(bh);
      //appendnew_next_sd_eD9jRQYwRSDUIDCT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eD9jRQYwRSDUIDCT');
    }
  }

  async sd_9BsI2v5ZAlDQTLm1(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_xhtfcqMny0R6VHYp(bh);
      //appendnew_next_sd_9BsI2v5ZAlDQTLm1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9BsI2v5ZAlDQTLm1');
    }
  }

  async sd_xhtfcqMny0R6VHYp(bh) {
    try {
      bh.local.sessionExists = false;

      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset &&
        bh.local.sessionData.data.tokenset.access_token &&
        bh.local.sessionData.data.tokenset.refresh_token
      ) {
        bh.local.sessionExists = true;
      }
      bh = await this.sd_yxsYjXzz4kQc5CAE(bh);
      //appendnew_next_sd_xhtfcqMny0R6VHYp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xhtfcqMny0R6VHYp');
    }
  }

  async sd_yxsYjXzz4kQc5CAE(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_n9jXAN2B94Rii3Sf(bh);
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
        bh = await this.sd_zBvPi5Skv1cSnmue(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yxsYjXzz4kQc5CAE');
    }
  }

  async sd_n9jXAN2B94Rii3Sf(bh) {
    try {
      const sd_dTSbgLoaOeq5gFqRInstance: sd_dTSbgLoaOeq5gFqR.idsutil = sd_dTSbgLoaOeq5gFqR.idsutil.getInstance();
      let outputVariables = await sd_dTSbgLoaOeq5gFqRInstance.handleTokenExpiry(
        bh.local.sessionData,
        null
      );
      bh.local.newSession = outputVariables.input.newSession;

      bh = await this.sd_3bMDs1zNW3QuRltt(bh);
      //appendnew_next_sd_n9jXAN2B94Rii3Sf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_n9jXAN2B94Rii3Sf');
    }
  }

  async sd_3bMDs1zNW3QuRltt(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['false'](
          bh.local.newSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_e9r4bgKPO6ja8oYf(bh);
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
        bh = await this.sd_mSfyWzfImzu82Fap(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3bMDs1zNW3QuRltt');
    }
  }

  async sd_e9r4bgKPO6ja8oYf(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      bh = await this.sd_8joKXsTu2sXnvpp4(bh);
      //appendnew_next_sd_e9r4bgKPO6ja8oYf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_e9r4bgKPO6ja8oYf');
    }
  }

  async sd_8joKXsTu2sXnvpp4(bh) {
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      await this.sd_Cqb9x7pioqwSfIYc(bh);
      //appendnew_next_sd_8joKXsTu2sXnvpp4
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8joKXsTu2sXnvpp4');
    }
  }

  async sd_Cqb9x7pioqwSfIYc(bh) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Cqb9x7pioqwSfIYc');
    }
  }

  async sd_mSfyWzfImzu82Fap(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.newSession.rotated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_xMBZAq1MS8zzLa1m(bh);
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
        bh = await this.sd_poQF5TqtJFSLeg4P(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mSfyWzfImzu82Fap');
    }
  }

  async sd_xMBZAq1MS8zzLa1m(bh) {
    try {
      delete bh.local.newSession.rotated;
      bh = await this.sd_HVyZD4EDTDRQSOLb(bh);
      //appendnew_next_sd_xMBZAq1MS8zzLa1m
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xMBZAq1MS8zzLa1m');
    }
  }

  async sd_HVyZD4EDTDRQSOLb(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      await this.sd_poQF5TqtJFSLeg4P(bh);
      //appendnew_next_sd_HVyZD4EDTDRQSOLb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HVyZD4EDTDRQSOLb');
    }
  }

  async sd_poQF5TqtJFSLeg4P(bh) {
    try {
      bh.web.next();
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_poQF5TqtJFSLeg4P');
    }
  }

  async sd_zBvPi5Skv1cSnmue(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['cont'](
          bh.input.path,
          '/user/info',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_x0ca3oGQ3kNebWAe(bh);
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
        bh = await this.sd_LdW5Ev56249GEWSm(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zBvPi5Skv1cSnmue');
    }
  }

  async sd_x0ca3oGQ3kNebWAe(bh) {
    try {
      bh.local.res = { message: 'Session expired' };
      await this.sd_Cqb9x7pioqwSfIYc(bh);
      //appendnew_next_sd_x0ca3oGQ3kNebWAe
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_x0ca3oGQ3kNebWAe');
    }
  }

  async sd_LdW5Ev56249GEWSm(bh) {
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      await this.sd_Cqb9x7pioqwSfIYc(bh);
      //appendnew_next_sd_LdW5Ev56249GEWSm
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LdW5Ev56249GEWSm');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_ZqXpMjeluSktDbJR(bh)) ||
      (await this.sd_xKNQynpcaUHG5OPh(bh))
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
  async sd_ZqXpMjeluSktDbJR(bh) {
    const nodes = [
      'sd_yJ9W6U6IaF8wCRht',
      'sd_VFqnB5su1F2RifOx',
      'sd_Kaj5rWBwkTwsRaIl',
      'sd_3dHr3kXNYJkzgXSf',
      'sd_v4JMaffkca9AAzBm',
      'sd_dhMAFkgbi4XarG1L',
      'sd_t4L10qWEE20AjiKi',
      'sd_X7d0fYcREVP0Aznx',
      'sd_8QiylUIITbgWM47K',
      'sd_lIGWOAcwrRaachiI',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_pSLDD3m2qGE8XAzq(bh);
      //appendnew_next_sd_ZqXpMjeluSktDbJR
      return true;
    }
    return false;
  }
  async sd_xKNQynpcaUHG5OPh(bh) {
    const nodes = ['sd_n9jXAN2B94Rii3Sf'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_8joKXsTu2sXnvpp4(bh);
      //appendnew_next_sd_xKNQynpcaUHG5OPh
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
