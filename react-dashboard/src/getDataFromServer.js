export async function getProducts() {
    const getResult = await fetch("http://localhost:3000/api/products");
    const productsResult = await getResult.json();

    return productsResult.products;
}

export async function getUsers() {
    const getResult = await fetch("http://localhost:3000/api/profile");
    const usersResult = await getResult.json();

    return usersResult.users;
}