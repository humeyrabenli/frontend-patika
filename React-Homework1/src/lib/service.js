import axios from 'axios'

async function getData(user_id) {
    const {data:user}= await axios("https://jsonplaceholder.typicode.com/users/" +user_id);
    console.log("user", user)

    const {data:posts}= await axios("https://jsonplaceholder.typicode.com/posts?userId=" +user_id);
    console.log("posts", posts)
}


export default getData;