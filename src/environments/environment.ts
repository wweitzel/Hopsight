// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { api_keys } from '../../api_keys/keys';

export const environment = {
  production: false,

  ocr_space_url: 'https://api.ocr.space',
  untappd_url: 'https://api.untappd.com/v4',

  untappd_client_id: api_keys.UNTAPPD_CLIENT_ID,
  untappd_client_secret: api_keys.UNTAPPED_CLIENT_SECRET,
  ocr_space_api_key: api_keys.OCR_SPACE_API_KEY
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
