import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', {
      opacity: 1,
      y: 0,
    })

    gsap.to('.link', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    })
  }, [])

  return (
    <article
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <section className="screen-max-width">
        <section className="md:flex mb-12 w-full items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img className="ml-2" src={watchImg} alt="Watch video icon" />
            </p>
            <p className="link">
              Watch the event
              <img className="ml-2" src={rightImg} alt="Right arrow icon" />
            </p>
          </div>
        </section>

        <VideoCarousel />
      </section>
    </article>
  )
}

export default Highlights
