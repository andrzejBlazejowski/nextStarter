import Link from "next/link";

//Staticsite generation
export async function fetchSpeakers(){
    const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json",
     
    );
    return await response.json();
}

export default async function Page(){
    const {speakers} = await fetchSpeakers();

    return (
        <>
            <h1>Welcome to Globomantics speakers page</h1>
            {speakers && speakers instanceof Array && <ul>
                {speakers?.map(({id, name, bio})=>(
                    <li key={id}><Link href={`/conference/speakers/${name}`}>{name}</Link> - {bio}</li>
                ))}
            </ul>}
        </>
    )
}