export const myOrderPromise = email =>{
  return fetch(`https://bite-and-bliss-server-side.vercel.app/purchase?email=${email}`,{
    credentials: "include"
  }).then(res => res.json())
}