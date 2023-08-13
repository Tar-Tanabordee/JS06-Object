const product1 = {
    name: 'Water',
    distributor: {
      name: 'Giraffe Water Company',
      address: {
        street: 'Phetchaburi',
        subdistrict: 'Thanonphetchaburi',
        district: 'Ratchathewi',
        province: 'Bangkok'
      }
    }
  };
  
  const product2 = null; // หรือสามารถกำหนดให้เป็น object ว่างได้เช่น const product2 = {};
  
  const provinceProduct1 = product1?.distributor?.address?.province;
  const provinceProduct2 = product2?.distributor?.address?.province;
  
  console.log("Province of product1:", provinceProduct1); // แสดง province ของ product1
  console.log("Province of product2:", provinceProduct2); // แสดง province ของ product2 (ถ้าไม่มีจะแสดง undefined)
  