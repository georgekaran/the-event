CREATE USER george;
CREATE DATABASE event;
GRANT ALL PRIVILEGES ON DATABASE event TO george;
\c event;
create table user_account (
    id serial PRIMARY KEY,
    name text not null,
    gender text not null,
    email text not null UNIQUE,
    password text not null,
    date_birth date not null,
    telephone text,
    address text not null
);