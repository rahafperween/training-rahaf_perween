-- Use the editor to create new tables, insert data and all other SQL operations.
  insert into customers(customer_id,first_name,last_name,age,country) values(6,'rahaf','perween',21,'india');

--   display the table content to which it the value is added
select *
from customers;

--   no of customers per country
select country,count(*)
from customers
group by country;

-- joining the customers and order table
select *
from customers c, orders o
where c.customer_id==o.customer_id;

-- display the customers and order detail where the order amount is more than the Rs.350
select *
from customers c, orders o
where c.customer_id==o.customer_id and o.amount>350; 

-- count the no of order shipping is still pending
select count(*)
from shippings s
where s.status='Pending';

