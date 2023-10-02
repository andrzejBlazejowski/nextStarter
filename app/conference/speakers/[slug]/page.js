import {fetchSpeakers} from '../page';

async function fetchSpeakerInformation(params){
    const speakerJson = await fetchSpeakers();
    
    const speakerInfo = speakerJson.speakers.find(({name}) => encodeURI(name) === params.slug);

    return speakerInfo;
}

export default async function Page({params}){

    const speakerInfo = await fetchSpeakerInformation(params);

    return (
        <>
            <h1>{speakerInfo.name}</h1>
            <p>{speakerInfo.bio}</p>
            <ul>{speakerInfo.sessions.map(({name})=> <li>{name}</li>)}</ul>
        </>
    )
}
