export const productLoader = async () => {
    const mod = await import('../data/productos.js');
    
    console.log("viendo el modulo ",mod)

    const { productos } = mod;
    
    return productos;
};


