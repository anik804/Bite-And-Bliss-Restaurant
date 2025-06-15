export const foodCreatedByPromise = email => {
  return fetch(`https://bite-and-bliss-server-side.vercel.app/menu?email=${email}`,{
    credentials: "include"
  }).then(res => res.json())
}