/*
    What is NodeJS ?
        - NodeJS is a JavaScript runtime built on Chrome's V8 JavaScript engine.
        - NodeJS is an open source, cross-platform runtime environment for developing server-side and networking applications.
    
    npm: Node Package Manager
        - built-in
            - examples:
                1. http - create a server
                2. fs - file system (to read/write files)
                3. path - to work with file and directory paths
                4. os - to get info about operation system  
                    examples: to execute commands in terminal
                5. events - to work with events
                6. util - to work with utilities
                    examples: to inherit from classes

                    util.format('Hello %s', 'World'); // 'Hello World'
        
        - 3rd party
            - examples:
                1. express - web framework for NodeJS (to create a server)
                3. nodemon - to restart server automatically on file changes
                4. body-parser - to parse incoming request bodies
                5. multer - to parse multipart/form-data
                6. dotenv - to work with environment variables (to store sensitive data)
                7. mongoose - to work with MongoDB
                8. bcrypt - to hash passwords
                9. jsonwebtoken - to generate tokens
                10. axios - to make HTTP requests
        
        - custom
            - examples:
                1. config - to work with configuration files
                2. logger - to log messages
                3. auth - to work with authentication
                4. middleware - to work with middleware
                5. routes - to work with routes
                6. models - to work with models
                7. controllers - to work with controllers
                8. services - to work with services
                9. validators - to work with validators
                10. utils - to work with utilities
        
        NodeJS:
            - built using javascript, so it can be called as a framework
*/