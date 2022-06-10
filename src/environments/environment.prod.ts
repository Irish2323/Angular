import { Environment } from '@abp/ng.core';

const baseUrl = 'https://delosreyes-bookstore.netlify.app';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'BookStore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'http://reyes23-001-site1.etempurl.com',
    redirectUri: baseUrl,
    clientId: 'BookStore_App',
    responseType: 'code',
    scope: 'offline_access BookStore',
    requireHttps: false
  },
  apis: {
    default: {
      url: 'http://reyes23-001-site1.etempurl.com',
      rootNamespace: 'Acme.BookStore',
    },
  },
} as Environment;
