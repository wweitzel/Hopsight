# Hopsight

Hopsight is an early-stage Ionic application for scanning beer menus. When a beer menu is scanned, the beers can then be selected by the user and automatically ranked based on user rating from Untappd.

https://hopsightbeer.firebaseapp.com

## Getting Started

### Using real data

In order to run a live version you will need to get an OCR Space API key as well as an Untappd API key. Once you have them, put them in a file under client/api_keys/keys.ts with the content

```
export const api_keys = {
    UNTAPPD_CLIENT_ID: 'yourkey',
    UNTAPPED_CLIENT_SECRET: 'yourkey',
    OCR_SPACE_API_KEY: 'yourkey',
}
```

### Using mock data

You can test the front end with mock data by using the mock versions `UntappdMockService` and `OcrSpaceMockService` in the constructor of `home.page.ts` instead of the real services.

### Running the front end

Navigate to the client directory

`cd client`

Install Dependencies

`npm install`

Run local server

`ng s`

This will then start the app.

**NOTE: When running locally, the app will currently try to authenticate with the live authentication service which will cause a redirect to the live site. For development you will need to work around this. One solution is to manually figure out your user access token and add it to `IndexedDB` storage for `localhost:4200` with key `"access_token_hopsight"`**

## Authentication

The app uses OAuth2 with an Untappd account to authenticate. A live server to authenticate with is running that the app will connect to. The server code is provided in the `/server` folder in case you want to host your own.

### Main features to come:
- Remove the need for user to choose beers from list of menu text
- Implement own OCR scanning code, to remove dependency on OCR space api
- Ability to save previous scanned menus
- Use machine learning to extract beer names from menus
- Give the app a theme
