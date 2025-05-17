import { NextRequest } from "next/server";
import { movies } from "./db";

// export async function GET(){
//     return  Response.json(movies )
// }

export async function POST(req:Request){
    let movie = await req.json();
    console.log("movies to be watched", movie)

    const newMovie ={ ...movie}
    movies.push(newMovie)
    return new Response(JSON.stringify(newMovie));
 }

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');

  const filteredMovies = query
    ? movies.filter((m) => m.name.toLowerCase().includes(query.toLowerCase()))
    : movies;

  return new Response(JSON.stringify(filteredMovies), {
    headers: { 'Content-Type': 'application/json' },
  });
}