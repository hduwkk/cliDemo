const a = {a: 11,b:22,c: 33};
const b = [...a];

function c () {
  return new Promise((resolve) => {
    resolve(123)
  })
}

async function d () {
  return await c()
}
