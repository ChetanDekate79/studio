const navbar = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    {
      name: 'OUR PRODUCTS',
      id: 'product',
      child: [
        { name: 'Product 1', id: 'p1' },
        { name: 'Product 2', id: 'p2' },
        { name: 'Product 3', id: 'p3' },
        { name: 'Product 4', id: 'p4' },
      ],
    },
    { name: 'CONTACT US', id: 'contact' },
  ];
  
  export default navbar;
  