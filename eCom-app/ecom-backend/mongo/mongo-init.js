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
  
  db.products.insert({ name: 'Apple', price: 0.7 });
  db.products.insert({ name: 'Milk', price: 1.2 });