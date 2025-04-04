create table produtos(
  id INT not NULL,
  nome STRING,
  preco MONEY,
  PRIMARY KEY (id)
  );
  
insert into 
    produtos (id,nome,preco) 
    values (1,'caneta',2.5);

INSERT INTO produtos (id,nome) VALUES(2,'CHAVES');

SELECT * FROM produtos;

SELECT NOME,PRECO 
FROM produtos
WHERE ID=1;

UPDATE PRODUTOS 
SET PRECO = 2.8
WHERE ID = 2

Alter table produtos
add COLUMN estoque INT;

update produtos 
set estoque =40
where id=2;

delete from produtos where id =2;

insert into 
produtos (id,nome,preco,estoque)
values(2,'chaves',2,23);

create table clientes(
  id int not null,
  last_name string,
  first_name dtring,
  address string,
  primary KEY(id)
);
insert into clientes (id,last_name,first_name,address)
values
	(1,'Alisson','Suassuna','TipsCode1'),
    (2,'Paula','Suassuna','TipsCode2'),
    (3,'Fabio','Abreu','Indies Brasil');

create table Pedidos(
  id int NOT NULL,
  numero_pedido int,
  cliente_id int,
  produto_id int,
  primary key (id),
  FOREIGN KEY (produto_id) references produtos(id),
  FOREIGN key (cliente_id) references clientes(id)
);

insert into 
	pedidos (id,numero_pedido,cliente_id,produto_id)
values (1,53,2,1),(2,30,1,1);

SELECT p.numero_pedido , c.first_name, c.last_name,c.address
FROM pedidos p
inner join clientes c on p.cliente_id = c.id;

SELECT 
	p.numero_pedido , 
    c.first_name, 
    c.last_name,
    c.address,
    pd.nome,
    pd.preco
FROM pedidos p
inner join clientes c on p.cliente_id = c.id
inner join produtos pd on p.produto_id = pd.id;