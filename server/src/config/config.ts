export default {
  logger: {
    level: 'debug',
    transport: ['file', 'console'],
    exceptionFile: 'logs/exception.log',
    logFile: 'logs/console.log',
  },
  middlewares: {
    pre: [
      { ids: 'hrefstart' },
      { __ssdGlobalMiddlewares__: 'sd_7EmxxOk703exD5hF' },
      { __ssdGlobalMiddlewares__: 'cors' },
    ],
    post: [],
    sequences: { IDSAuthroizedAPIs: { pre: [{ ids: 'Authorize' }], post: [] } },
  },
  ids: {
    client_id: 'l4Z_btuVLNtEXSYX_eVld',
    client_secret:
      'RBaIKt8C5lkzkQOLpAkmCnOTWDFOy5fxp26HSGH_r4vzINJM5KBk77nkaiVYdrfz-I0mKezX-3aV5JorfweWPw',
    issuerURL: 'https://ids.neutrinos.co',
    enabled: true,
  },
};
