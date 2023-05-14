
const { sum, multiply, divide } =  require('./02-math');

test ("adds 1 + 3 should be 4", () => {
  const rta = sum(1,3);
  expect(rta).toBe(4)  // .toBe(4) this is the number expected to receive
})

test ("multiply 1 * 3 should be 3", () => {
  const rts = multiply(1,3);
  expect(rts).toBe(3);
})

test ("should divide the numbers", () => {
  const answ1 = divide(1,3);
  const rst = parseFloat(answ1.toFixed(2));
  expect(rst).toBe(0.33);

  const answ2 = divide(5,2);
  const rst2 = parseFloat(answ2.toFixed(2));
  expect(rst2).toBe(2.50)
})

test ("divide by 0", () => {
  const rta = divide(6, 0);
  expect(rta).toBeNull();  // 6 / 0, should cause an Infinity error, we should refactor the code.
})
