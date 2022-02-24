CREATE DATABASE app;
USE app
CREATE TABLE users (
    id VARCHAR(25), 
    password VARCHAR(255)
);
INSERT INTO users VALUES('root', 'root');