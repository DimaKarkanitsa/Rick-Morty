import { useQuery } from "@tanstack/react-query"
import { getEpisodeInfo } from "../api/api"

import "./EpisodeInfoItem.css"

import { rm_images } from "../assets/images/R&M images/rm_images"
import SliderContainer from "../components/Slider/SliderContainer"

function EpisodeInfoPage() {
  const episodeId = window.location.pathname.split("/")[2]
  const { data, status } = useQuery(["episodeInfo"], () =>
    getEpisodeInfo(episodeId)
  )

  if (status === "loading") return <div>Loading...</div>
  if (status === "error") return <div>An error has occurred</div>
  if (!data) return <div>Nothing to show</div>
  return (
    <div>
      <h1>Episode Info</h1>
      <div className='episode_info_container'>
        <div className='episode_content'>
          <div className='image_container'>
            <img
              className='episode_image'
              src={rm_images[data.id]}
              alt='episode_image'
            ></img>
          </div>
          <div className='episode_text'>
            <div>{data.name}</div>
            <div>{data.air_date}</div>
            <div>{data.episode}</div>
          </div>
        </div>
        <h2>Related episodes</h2>
        <SliderContainer />
      </div>
    </div>
  )
}

export default EpisodeInfoPage
