CREATE USER george;
CREATE DATABASE event;
GRANT ALL PRIVILEGES ON DATABASE event TO george;
\c event;
create table user_account (
    id serial PRIMARY KEY,
    name text not null,
    email text not null UNIQUE,
    password text not null,
    isSync boolean DEFAULT FALSE
);

create table event (
    id serial PRIMARY KEY,
    name text not null,
    date TIMESTAMP null,
    place text not null,
    price decimal(10,2) not null,
    capacity int not null
);

create table user_event (
    id serial PRIMARY KEY,
    id_event SERIAL NOT NULL,
    id_user_account SERIAL NOT NULL,
    status CHAR,
    isSync boolean DEFAULT FALSE,
    CONSTRAINT "fk_event_id"
    FOREIGN KEY ("id_event")
    REFERENCES "event" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT "fk_user_account_id"
    FOREIGN KEY ("id_user_account")
    REFERENCES "user_account" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

create table event_checkin (
    id serial PRIMARY KEY,
    id_user_event SERIAL NOT NULL,
    date timestamp NOT NULL,
    isSync boolean DEFAULT FALSE,
    CONSTRAINT "fk_user_event_event_checkin_id"
    FOREIGN KEY ("id_user_event")
    REFERENCES "user_event" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);