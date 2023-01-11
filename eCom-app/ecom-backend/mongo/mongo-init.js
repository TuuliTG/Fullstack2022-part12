db.createUser({
    user: 'tg_tuuli',
    pwd: '1Qazxsw2',
    roles: [
      {
        role: 'dbOwner',
        db: 'ecom_db',
      },
    ],
  });
  
  db.createCollection('products');
  
  db.products.insert({ name: 'Apple', price: 0.70 });
  db.products.insert({ name: 'Milk', price: 1.20 });
  db.products.insert({ name: 'Bread', price: 2.50 });
  db.products.insert({ name: 'Cheese', price: 5.90 });