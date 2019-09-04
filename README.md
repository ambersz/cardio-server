# cardio-server
## Setup
Make sure you have [Redis](https://redis.io/download) installed and test that the command ```redis-server``` properly runs Redis in the project directory.

## Running the server

To run locally: ``` npm start ```
This will automatically start the Redis server and the server. It will listen on port 3000 by default. Opening http://localhost:3000/ in your browser of choice should show you page saying ```Welcome to Express```.

### Debugging

When debugging with [VSCode](https://code.visualstudio.com/download) or your preferred IDE, you may run your Redis server in the background manually using ```redis-server&``` before debugging with the default confiuration. As express-session uses Redis to store session data, it will persist across debug sessions unless cleared manually.
 
## Testing

See spec/jasmine_examples for examples to write jasmine tests
Run the tests using ``` npm run test ```

If you need to manually test something you can run the server locally and send requests from [Postman](http://getpostman.com). 
```http://localhost:3000/{route here}```