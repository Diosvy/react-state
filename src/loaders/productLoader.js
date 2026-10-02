export const productLoader = async ({request}) => {

  const url = new URL(request.url);
  const q = url.searchParams.get("q") ?? "";


  const mod = await import('../data/productos.js');
  const { productos } = mod;

  if (!q) return { productos };

  return {
    productos: productos.filter((p) =>
      p.name.toLowerCase().includes(q.toLowerCase())
    ),
  };

};

