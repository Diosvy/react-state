export const productLoader = async () => {
  const mod = await import('../data/productos.js');
  const { productos } = mod;

  
  const productosPromise = new Promise((resolve) =>
    setTimeout(() => resolve(productos), 2000)
  );

  return { productos: productosPromise };
};


