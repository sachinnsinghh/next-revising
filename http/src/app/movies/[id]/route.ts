import { Stats } from "fs";
import { movies } from "../db";

export async function GET(_req:Request, {params}:{params: {id:string}}){
    const { id} = await params;
    const movie = movies.find((m => m.id === +id));

    return movie ? new Response(JSON.stringify(movie)) : new Response("movie not found");
}

export async function PATCH(req: Request, {params} : {params: {id:string}}){
    const {id} = await params;
     const movieId =+id;

     const movie = movies.find((m) => m.id === movieId);
     if(!movie){
        return new Response(JSON.stringify({error: "mobie not found"}))
     }
    try{
        const updateMovie = await  req.json();
        const index = movies.findIndex(m => m.id === movieId)
        if(!movie){
        return new Response(JSON.stringify({error: "mobie not found"}))
     }  

     movies[index] = { ...movie , ...updateMovie}
     return new Response(JSON.stringify(movies[index]), { status: 200 })

    }catch(error)
{
    return new Response(JSON.stringify({error: "failed ot parsse json"}))
}
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
    const {id} = await params;
    const movieIndex= movies.findIndex(m => m.id === +id);
    if (movieIndex === -1){
        return  new Response ( "movie not found", { status: 404});
    }
    movies.splice(movieIndex,1);
    return new Response("Movie deleted successduly", {status:200})
}    
