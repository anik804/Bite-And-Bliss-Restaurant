export const myOrderPromise = email =>{
  return fetch(`http://localhost:3000/purchase?email=${email}`,{
    credentials: "include"
  }).then(res => res.json())
}