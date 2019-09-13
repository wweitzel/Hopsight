import { api_keys } from '../../api_keys/keys';

export const environment = {
  production: true,

  ocr_space_url: 'https://api.ocr.space',
  untappd_url: 'https://api.untappd.com/v4',

  untappd_client_id: api_keys.UNTAPPD_CLIENT_ID,
  untappd_client_secret: api_keys.UNTAPPED_CLIENT_SECRET,
  ocr_space_api_key: api_keys.OCR_SPACE_API_KEY
};
