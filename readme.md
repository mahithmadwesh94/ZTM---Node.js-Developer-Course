
# ZTM Node.js Developer Course

This repo is created to Track and save my Node.js Developer course


## Fundementals

v8 Engine => Node.js API(fs,http,path,crypto) => bindings => libuv

Node.js bindings are C/C++ code to interact with machine level

libuv is async i/o library with code for unix and windows. Async i/o is done with thread pool (file system operations) or os (kernel)(network, server request, close connection)



## Event loop

Has two parts - 
1. Thread pool
2. Operating System


Thread pool by default has main thread (v8 + event loop) + 4 threads (1 task at a time for each thread);


Async operations are done with Event loop. When each thread or os picks up a task when done notifies the event loop and callbacks gets pushed to callback queue where FIFO is applied to them.

### Phases of Event loop

Severl queues habdle several phases

1. Timers => setTimeout, setInterval
2. I/O Callbacks => file system operations
3. setImmediate => execute callback ASAP when event loop gets notified
4. close callbacks => close file, close network connections and perform its callbacks
## Is Node.js multi-threaded?

Node.js has javascript as its base which is synchronours and single threaded.

But under the hood libuv uses the threads to handle asynchrounous events with threads. 

That is the best part of Node.js where the programmer unlike in other languages don't need to worry about handling and managing threads. Its taken care by libuv.
## What is Node.js best at?

It is not good for CPU/GPU intensive or blocking applications such as video processing, machine learning.

It is good as servers => DB connections, communications, authentication and authorization.

Mainly used for i/o operations to server files from servers, delegate taks, serve data where i/o operations are very high.

Eg. Netflix uses Node.js to server files when requested. Node.js server fetches the files from server and sends it to the client browser on request.
## Desing Patterns

Subject, Observer pattern

Node Event emitter.

Multiple observers can subscribe to one subject and react in its own way to the subscribed events.

Please refer to the js file for the code and understanding.