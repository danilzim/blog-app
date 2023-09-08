import { URL } from "../utils/const";


export async function fetchPosts(search: string) {
        const queryParams = search ? `?title=${search}` : "";
        const url = `${URL}${queryParams}`;
        const response = await fetch(url);
        const posts = await response.json();
      
        return posts;
      }

