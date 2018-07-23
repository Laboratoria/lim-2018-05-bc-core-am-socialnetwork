describe('ingresar', () => {

  // it('debería ser un objeto', () => {
  //   assert.equal(typeof cipher, 'object');
  // });

  describe('ingresar', () => {

    it('debería ser una función', () => {
      assert.equal(typeof ingresar, 'function');
    });

    it('debería ser una función', () => {
      assert.equal(typeof registrar, 'function');
    });

    it('debería ser una función', () => {
      assert.equal(typeof observador, 'function');
    });
    // it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33',()=> {
    //   assert.equal(cipher.encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ'),'HIJKLMNOPQRSTUVWXYZABCDEFG');
    // });
  });



  // describe('cipher.createCipherWithOffset', () => {

  //   it('debería ser una función', () => {
  //     assert.equal(typeof cipher.createCipherWithOffset, 'function');
  //   });

  //   it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado',() =>{
  //     assert.equal(typeof cipher.createCipherWithOffset(33), 'object');
  //     assert.equal(typeof cipher.createCipherWithOffset(33).encode, 'function');  // el createCipherWithOffset necesita un OFFSET para devolverme una función: encode
  //     assert.equal(typeof cipher.createCipherWithOffset(33).decode, 'function');  // el createCipherWithOffset necesita un OFFSET para devolverme una función: decode
  //   });

  //   it('probando la funcionalidad de: función encode con offset fijado',() =>{   // TRABAJANDO
  //     assert.equal(cipher.createCipherWithOffset(33).encode('ABCD'), 'HIJK');
  //   });

  //   it('probando la funcionalidad de: función decode con offset fijado',() =>{   // TRABAJANDO
  //     assert.equal(cipher.createCipherWithOffset(33).decode('HIJK'), 'ABCD');
  //   });

  //  });

});