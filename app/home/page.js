import Image from "next/image";
import OurStoryPic from "../../images/home-page.jpg";
import styles from "./Home.module.css";

export default function Page(){
    return (
        <>
        <div className={styles.bgWrap}>
            <Image
                src={OurStoryPic}
                alt="Picture of the author"
                style={{objectFit: "cover"}}
                quality={100}
                placeholder="blur"
                sizes="100vw"
                fill
            />
        </div>
            <h1>Welcome to Globomantics home page</h1>
            
        </>
    )
}