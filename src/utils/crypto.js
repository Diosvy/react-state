// Funcion para generar un hash seguro con la API de la WEB

export const hashPassword = async (password) => {
    const encode = new TextEncoder()
    const data = encode.encode(password)

    const hashBuffer = await crypto.subtle.digest('SHA-256', data)

    const hashArray = Array.from(new Uint8Array(hashBuffer))
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

export const verifyPassword = async (password, storeHash) => {
    const inputHash = await hashPassword(password)
    return inputHash === storeHash
}