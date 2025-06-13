export const foodCreatedByPromise = email => {
  return fetch(`http://localhost:3000/menu?email=${email}`).then(res => res.json())
}