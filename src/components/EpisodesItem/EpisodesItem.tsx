import { Link } from "react-router-dom"
import styles from "./EpisodesItem.module.css"

function EpisodesItem({
  id,
  name,
  date,
  episode,
  coverImg,
}: {
  id: number
  name: string
  date: string
  episode: string
  coverImg: string
}) {
  return (
    <div className={styles.episodes_item}>
      <Link to={`/episodes/${id}`}>
        <img src={coverImg} alt='episode cover' />
        <div className={styles.text_container}>
          <div className={styles.episode_title}>
            <h3>{name}</h3>
          </div>
          <p>{episode}</p>
          <p>{date}</p>
        </div>
      </Link>
    </div>
  )
}

export default EpisodesItem
