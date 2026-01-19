import Image from "next/image";
import Link from "next/link";
import styles from "./ProfilePicture.module.css";

type ProfilePictureProps = {
  link: string;
  pictureUrl: string;
};

const ProfilePicture = ({ link, pictureUrl }: ProfilePictureProps) => (
  <div className={styles.container}>
    <Link href={link} className={styles.pictureWrapper}>
      <Image
        src={`/${pictureUrl}`}
        className={styles.picture}
        width={180}
        height={180}
        alt="Profile picture"
      />
      <div className={styles.frame} />
      <div className={styles.frameOuter} />
    </Link>
  </div>
);

export default ProfilePicture;
