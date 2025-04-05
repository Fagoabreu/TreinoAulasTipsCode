create table if not exists users(
    id int auto_increment,
    name varchar(100),
    phone varchar(20),
    obs text,
    primary key(id)
);