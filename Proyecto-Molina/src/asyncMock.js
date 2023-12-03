
const products = [
    {
        id:"1",
        name:"Zapatillas Nike Air Force 1 Shadow",
        img:"https://firebasestorage.googleapis.com/v0/b/sneakers-styles.appspot.com/o/women%2F17608067-800-auto.webp?alt=media&token=453a9a2a-056b-41e6-97a5-691d715e009f",
        price:139.000,
        category:"women",
        stock:"43",
        description: "El Nike Air Force 1 Shadow le da un giro divertido a un clásico del básquetbol con texturas complejas, colores vibrantes y estampados divertidos"
    },
    {
        id:"2",
        name:"Zapatillas Nike Air Force 1 Lo 07",
        img:"https://firebasestorage.googleapis.com/v0/b/sneakers-styles.appspot.com/o/women%2F17587702-800-auto.webp?alt=media&token=e26be244-5bb6-41fa-8baa-5b4e6b05ce70",
        price:121.000,
        category:"women",
        stock:"22",
        description:"Diseñado para aquellos que no tienen miedo de expresarse, este legendario AF1 muestra mucha personalidad. Confeccionado con el estilo de los 80 brindan una sensación clásica a este calzado, a la vez que los colores vibrantes en degradé aportan un estilo único. Material exterior: cuero sintético. Costuras resistentes."
    },
    {
        id:"3",
        name:"Zapatillas Nike Air Force 1 Lo 07",
        img:"https://firebasestorage.googleapis.com/v0/b/sneakers-styles.appspot.com/o/women%2F17587702-800-auto.webp?alt=media&token=e26be244-5bb6-41fa-8baa-5b4e6b05ce70",
        price:121.000,
        category:"men",
        stock:"22",
        description:"Diseñado para aquellos que no tienen miedo de expresarse, este legendario AF1 muestra mucha personalidad. Confeccionado con el estilo de los 80 brindan una sensación clásica a este calzado, a la vez que los colores vibrantes en degradé aportan un estilo único. Material exterior: cuero sintético. Costuras resistentes."
    },
    {
        id:"4",
        name:"Zapatillas Nike Air Force 1 Shadow",
        img:"https://firebasestorage.googleapis.com/v0/b/sneakers-styles.appspot.com/o/women%2F17608067-800-auto.webp?alt=media&token=453a9a2a-056b-41e6-97a5-691d715e009f",
        price:139.000,
        category:"women",
        stock:"43",
        description: "El Nike Air Force 1 Shadow le da un giro divertido a un clásico del básquetbol con texturas complejas, colores vibrantes y estampados divertidos"
    },
    {
        id:"5",
        name:"Zapatillas Nike Air Force 1 Shadow",
        img:"https://firebasestorage.googleapis.com/v0/b/sneakers-styles.appspot.com/o/women%2F17608067-800-auto.webp?alt=media&token=453a9a2a-056b-41e6-97a5-691d715e009f",
        price:139.000,
        category:"women",
        stock:"43",
        description: "El Nike Air Force 1 Shadow le da un giro divertido a un clásico del básquetbol con texturas complejas, colores vibrantes y estampados divertidos"
    },
]

export const getProducts = () =>{
    // Spinner.show();
    return new Promise((resolve)=>{
        setTimeout(()=>{
            // Spinner.hide()
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (productId) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}

export const getProductsByCategory = (categoryId) =>{
return new Promise ((resolve)=>{
    setTimeout(()=>{
        resolve(products.filter(prod=>prod.category.toLowerCase()===categoryId.toLowerCase()))
    },500)
})
}