## Running app locally


```bash
npm run dev 
```
## Configuring environment variables

There is an env.example file that can be use as a guide for the env variables being used in the app. The app uses OpenAI assistant for formatting the search query and Foursquare API for fetching places.

## Notes
Right now, my newly created Foursquare account is still under review and Im not sure how long I should wait before I can actually generate an API key. So instead, the the endpoint for fetching the places (/api/foursquare) I just used a sample mockdata (and commented out the actual fetch code) where the schema is actually coming from their API documentation. I will just update if ever I have now the API key to use the actual request.