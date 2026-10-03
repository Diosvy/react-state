export const productLoader = async ({request}) => {

  const url = new URL(request.url);
    // { q, min, max, freeDelivery, sort }
    // defect value  (q: '', min: 0, max: Infinity, freeDelivery: false, sort: 'relevance').
  const q = url.searchParams.get("q") ?? "";

  const minParam = url.searchParams.get("min");
  const min = minParam ? Number(minParam) : 0;

  const maxParam = url.searchParams.get("max");
  const max = maxParam ? Number(maxParam) : Infinity;
  

  const mod = await import('../data/productos.js');
  const { productos } = mod;

  let resultado = productos;

    // filtro por búsqueda
  if (q) {
    resultado = resultado.filter((p) =>
      p.name.toLowerCase().includes(q.toLowerCase())
    );
  }

  // filtro por precio min
  if (min > 0) {
    resultado = resultado.filter((p) => p.price >= min);
  }

  return {
    productos: resultado
  };

};

