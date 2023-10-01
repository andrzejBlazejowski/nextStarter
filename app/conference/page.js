import Link from 'next/Link';

export default function Page(){
    return (
        <>
            <h1>Welcome to Globomantics conference page</h1>
            <div><Link href="/conference">conference</Link></div>
            <div><Link href="/conference/speakers">speakers</Link></div>
            <div><Link href="/conference/sessions">sessions</Link></div>
            <div><Link href="/blog">blog</Link></div>
            <div><Link href="/settings">settings</Link></div>
        </>
    )
}