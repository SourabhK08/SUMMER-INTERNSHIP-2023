# Theory -

## 1. What is NodeJS?

- Node.js is an open-source, cross-platform runtime environment that allows developers to execute JavaScript code outside of a web browser. It is built on Chrome's V8 JavaScript engine and provides an event-driven, non-blocking I/O model that makes it efficient and well-suited for scalable network applications.

- Properties of Node :-

1. **Asynchronous and Non-Blocking** : Allowing it to handle multiple concurrent connections efficiently. This makes it suitable for building real-time applications and servers with high scalability.

2. Node JS uses an **event-driven**.

3. Node JS **runs the code outside** the web browser.

4. Give access to **local file system**.

## 2. What is V8 Engine?

V8 engine is used to compile the JavaScript and then convert it into machine code that is easily understandable by the computer.

## 3. What is Event Loop in NodeJS.

- The Event Loop is a mechanism that allows Node JS to handle multiple operations concurrently without getting blocked by time-consuming tasks, such as reading/writing files or making network requests.

- Here's how the Event Loop works:

1. Event Queue: When an asynchronous operation is initiated (e.g., reading a file or making an API call), Node.js does not wait for the operation to complete. Instead, it registers a callback function and adds it to the Event Queue. The callback contains the code that should run once the operation is finished.

2. Call Stack: Meanwhile, Node.js continues to execute other parts of the code in the Call Stack. The Call Stack is a data structure that keeps track of the functions being executed at any given time. When a function is called, it's added to the stack, and when it completes, it's removed from the stack.

3. Event Loop: Once the Call Stack becomes empty (i.e., all the synchronous tasks have been completed), the Event Loop comes into play. It checks the Event Queue for any completed asynchronous operations (callbacks) and adds them to the Call Stack for execution.

4. Execution: The callbacks from the Event Queue are executed one by one in the Call Stack. Each callback runs to completion, and any new asynchronous operations initiated by these callbacks follow the same process, getting registered in the Event Queue.

This cycle of adding callbacks from the Event Queue to the Call Stack when the Call Stack is empty is what allows Node.js to perform non-blocking I/O operations efficiently and handle a large number of concurrent connections without the need for additional threads.

## 4. What is the use of tsconfig.json file?

- The tsconfig.json file is crucial for setting up and maintaining TypeScript projects, as it defines how TypeScript code is compiled and processed. By configuring the tsconfig.json file appropriately, developers can customize TypeScript to suit their project's needs and ensure code quality through strict type-checking and other compiler options.

- You can use the include and exclude fields in the tsconfig.json file to specify which files or directories should be included or excluded from the TypeScript compilation process. This allows you to control which TypeScript files are part of the project.

## 5. What are the methods provided by `fs` module to manipulate files?

The `fs` module in Node.js provides several methods to manipulate files on the file system. These methods allow you to read, write, modify, and delete files. Here are some of the commonly used methods provided by the `fs` module:

1. Reading Files:

   - `fs.readFile(path, options, callback)`: Reads the contents of a file asynchronously and returns the file data as a Buffer or string. The `callback` function is called with an error object and the file data.

   - `fs.readFileSync(path, options)`: Reads the contents of a file synchronously and returns the file data as a Buffer or string. This method blocks the execution until the file is read.

2. Writing Files:

   - `fs.writeFile(file, data, options, callback)`: Writes data to a file asynchronously. If the file already exists, it will be replaced. The `callback` function is called with an error object if there is an error.

   - `fs.writeFileSync(file, data, options)`: Writes data to a file synchronously. If the file already exists, it will be replaced. This method blocks the execution until the data is written.

3. Appending to Files:

   - `fs.appendFile(file, data, options, callback)`: Appends data to a file asynchronously. If the file does not exist, it will be created. The `callback` function is called with an error object if there is an error.

   - `fs.appendFileSync(file, data, options)`: Appends data to a file synchronously. If the file does not exist, it will be created. This method blocks the execution until the data is appended.

4. Renaming and Moving Files:

   - `fs.rename(oldPath, newPath, callback)`: Renames a file or moves it to a different location asynchronously. The `callback` function is called with an error object if there is an error.

   - `fs.renameSync(oldPath, newPath)`: Renames a file or moves it to a different location synchronously. This method blocks the execution until the operation is completed.

5. Deleting Files:

   - `fs.unlink(path, callback)`: Deletes a file asynchronously. The `callback` function is called with an error object if there is an error.

   - `fs.unlinkSync(path)`: Deletes a file synchronously. This method blocks the execution until the file is deleted.

6. Checking File Existence:

   - `fs.exists(path, callback)`: Checks if a file exists asynchronously. The `callback` function is called with a boolean value indicating whether the file exists or not.

   - Note: The `fs.exists()` method is deprecated. It's recommended to use `fs.access()` instead.

7. Checking File Accessibility:

   - `fs.access(path, mode, callback)`: Checks the accessibility of a file or directory asynchronously. The `callback` function is called with an error object if there is an error, or it's null if the file or directory is accessible.

   - `fs.accessSync(path, mode)`: Checks the accessibility of a file or directory synchronously. This method blocks the execution until the operation is completed.

## 6. What is API?

- API stands for Application Program Interface , API is used for interaction between user and database.
- API is build using Express JS.

## 7. What is JSON format?

- JSON stands for JAVA SCRIPT OBJECT NOTATION.
- JSON data is represented as key-value pairs, where the keys (also called properties) are strings, and the values can be one of the following data types:

1. Strings: Enclosed in double quotes (e.g., "Hello, JSON!").

2. Numbers: Integer or floating-point numbers (e.g., 42 or 3.14).

3. Booleans: Represented as true or false.

4. Arrays: Ordered lists of values enclosed in square brackets (e.g., [1, 2, 3]).

5. Objects: Unordered collections of key-value pairs enclosed in curly braces (e.g., {"name": "John", "age": 30}).

6. null: Represents an empty value (e.g., null).

## 8. Why we use JSON format for API?

- It is used for data exchange between servers and clients.
- Lightweight and Human-Readable
- It can be easily parsed and generated in various programming languages.
- Easy to Parse.

## 9. What is a Framework?

- A framework is a pre-built, reusable set of tools, libraries, and conventions that provide a structured foundation for building applications.
- Frameworks aim to simplify and streamline the development process by providing common functionalities, design patterns, and abstractions.
- Characteristics of frameworks include: Abstraction , Reusability and Extensibility etc.

## 10. How an HTTP Communication works?

HTTP (Hypertext Transfer Protocol) is the foundation of communication on the World Wide Web and governs how data is exchanged between web servers and clients (usually web browsers). The communication process involves a series of steps, which can be summarized as follows:

1. Client Sends a Request:

   - The communication begins when a client (usually a web browser) sends an HTTP request to a web server. The request includes various components, such as the HTTP method (e.g., GET, POST, PUT, DELETE), the target URL (Uniform Resource Locator), headers, and, in the case of certain methods like POST, a message body containing additional data.

2. Web Server Receives the Request:

   - The web server, upon receiving the HTTP request, processes it and begins to interpret the request's components, such as the method and the target resource.

3. Web Server Processes the Request:

   - The web server processes the request based on the HTTP method and the requested resource. For example, if it's a GET request, the server may retrieve the requested data or file, while a POST request might involve updating data on the server.

4. Web Server Sends a Response:

   - After processing the request, the web server generates an HTTP response. This response contains a status code indicating the success or failure of the request (e.g., 200 for success, 404 for "Not Found," 500 for "Internal Server Error"), along with response headers and, if applicable, a response body containing the requested data.

5. Client Receives the Response:

   - The client (web browser) receives the HTTP response from the web server and begins to process it.

6. Client Renders the Web Page:

   - If the request was for an HTML page, the web browser renders the received HTML content, along with any other linked resources such as stylesheets, scripts, and images. This rendering process creates the visual representation of the web page that the user sees.

7. Closing the Connection:
   - Depending on the situation and the "Connection" header in the HTTP response, the connection between the client and server may be closed or kept open for further requests. In many cases, HTTP/1.1 and later versions support persistent connections, allowing multiple requests to be sent over a single connection, reducing latency and improving performance.

The HTTP communication process occurs repeatedly as users interact with web pages, triggering various HTTP requests and responses. This continuous communication enables dynamic and interactive web experiences, making the World Wide Web a dynamic and interconnected platform.

## 11. What is Middleware in ExpressJS.

In Express.js, middleware refers to functions that are invoked during the request-response cycle of a web application. These functions have access to the request object (`req`), the response object (`res`), and the next middleware function in the application's request-response cycle. Middleware functions can perform various tasks, modify the request and response objects, and execute additional code before the final response is sent to the client.

Middleware functions are the heart of Express.js and allow developers to add custom logic and processing to the request-response flow. They are commonly used for tasks such as:

1. Logging: Middleware can log information about incoming requests, such as the request method, URL, headers, and timestamps, for debugging and monitoring purposes.

2. Authentication and Authorization: Middleware can handle user authentication and authorization by verifying user credentials or checking access rights to certain routes.

3. Data Parsing: Middleware can parse incoming request data, such as JSON, form data, or query parameters, and make it accessible in the request object for easy processing by route handlers.

4. Error Handling: Middleware can handle errors and exceptions that may occur during the processing of requests and provide appropriate error responses.

5. Security: Middleware can implement security measures, such as setting HTTP headers to prevent certain types of attacks, like Cross-Site Scripting (XSS) or Cross-Site Request Forgery (CSRF).

6. Compression and Caching: Middleware can compress response data to reduce bandwidth usage and enable caching to improve performance and reduce server load.

Middleware functions in Express.js can be created using the `app.use()` method or the corresponding HTTP method functions (`app.get()`, `app.post()`, etc.). Middleware added using `app.use()` will be executed for every request, regardless of the HTTP method, while middleware added with the HTTP method functions will only be executed for specific routes and methods.

For example, a simple middleware function that logs the request method and URL could be implemented as follows:

```javascript
const express = require("express");
const app = express();

// Custom middleware function
const logRequest = (req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next(); // Call the next middleware function in the chain
};

// Add the middleware to the application
app.use(logRequest);

// Route handler
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
```

In this example, the `logRequest` middleware function logs information about each incoming request before allowing the request to proceed to the route handler (`app.get('/')`).

Middleware functions in Express.js are powerful tools for customizing the behavior of the application and providing reusable functionality across routes. They enable developers to create well-structured and modular applications that can handle a wide range of tasks efficiently.
