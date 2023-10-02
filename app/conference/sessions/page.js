
//Staticsite generation
async function fetchSessions(){
    const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/sessions.json",
    {cashe: "no-cashe"}
     
    );
    return await response.json();
}

export default async function Page(){
    const {sessions} = await fetchSessions();

    return (
        <>
            <h1>Welcome to Globomantics sessions page</h1>
            {sessions && sessions instanceof Array && <ul>
                {sessions?.map(({id, startsAt, endsAt, room, title, description})=>(
                    <li key={id}>{startsAt} - {endsAt} [{room}] {title}, {description}</li>
                ))}
            </ul>}
        </>
    )
}