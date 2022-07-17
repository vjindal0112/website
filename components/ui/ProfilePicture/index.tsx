import Image from 'next/image'
import Link from "next/link"
import styles from "./ProfilePicture.module.css"

type ProfilePictureProps = {
    link: string,
    pictureUrl: string,
}

const ProfilePicture = ({ link, pictureUrl }: ProfilePictureProps) => (
    <div className={styles.container}>
        <Link href={link}>
            <Image src={`/${pictureUrl}`} className={styles.picture} width={200} height={200} />
        </Link>
    </div>
)

export default ProfilePicture
