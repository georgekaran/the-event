CREATE USER george;
CREATE DATABASE event;
GRANT ALL PRIVILEGES ON DATABASE event TO george;
\c event;
create table user_account (
    id serial PRIMARY KEY,
    name text not null,
    gender text null,
    email text not null UNIQUE,
    password text not null,
    date_birth date null,
    telephone text,
    address text null
);

-- insert into user_account (id, name, email, password) values (default, 'George Karan', 'georgekaran12@gmail.com', '123');

create table event (
    id serial PRIMARY KEY,
    name text not null,
    date TIMESTAMP null,
    place text not null,
    price decimal(10,2) not null,
    capacity int not null
);

insert into event (id, name, date, place, price, capacity) values (default, 'EVENTO 1', NOW(), 'Lajeado', 0.00, 100);
insert into event (id, name, date, place, price, capacity) values (default, 'Sertaneja Doida', NOW(), 'Venâncio Aires', 0.00, 100);
insert into event (id, name, date, place, price, capacity) values (default, 'Dia de Medieval', NOW(), 'POA', 0.00, 100);
insert into event (id, name, date, place, price, capacity) values (default, 'Vai raspa', NOW(), 'Santa', 0.00, 100);
insert into event (id, name, date, place, price, capacity) values (default, 'Johson Party', NOW(), 'Dois Lajeado', 0.00, 100);

create table user_event (
    id serial PRIMARY KEY,
    id_event bigint NOT NULL,
    id_user_account bigint NOT NULL,
    status CHAR,
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

--insert into user_event (id, id_event, id_user_account)
--values (default, 1, 1);

create table event_checkin (
    id serial PRIMARY KEY,
    id_user_event bigint NOT NULL,
    date timestamp NOT NULL,
    CONSTRAINT "fk_user_event_event_checkin_id"
    FOREIGN KEY ("id_user_event")
    REFERENCES "user_event" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

--INSERT INTO event_checkin ( id_user_event, date, id ) VALUES (1,"2019-11-16",DEFAULT);

create table user_event_certificate (
    id serial PRIMARY KEY,
    id_user_event bigint NOT NULL,
    auth text NOT NULL,
    title text not null,
    body text not null,
    CONSTRAINT "fk_user_event_certificate_id"
    FOREIGN KEY ("id_user_event")
    REFERENCES "user_event" ("id")
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);