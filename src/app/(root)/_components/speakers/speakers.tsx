import Image from 'next/image'

const speakers = [
  {
    name: 'Emmanuel Ogbiyoyo (Keynote Speaker)',
    topic: 'Event driven Microservices: The rationale the pitfalls and the path ahead',
    image: '/images/hosts/emmanuel.JPG',
  },
  {
    name: 'Adegbenga Agoro',
    topic: 'The Majestic Monolith: Modularity Design Principles & practices',
    image: '/images/speakers/speaker-one.jpeg',
  },
  {
    name: 'Ayotomiwa Ogunniran',
    topic: 'Cybercrime: Navigating the rising tide of sextortion',
    image: '/images/speakers/speaker-two.jpeg',
  },
  {
    name: 'Ameen Alade',
    topic: 'Accessibility vs. Aesthetics: Exploring the Tension and Finding a Middle Ground',
    image: '/images/hosts/ameen.jpeg',
  },
]

export const Speakers = () => {
  return (
    <section id="speakers" className="py-20 sm:py-32 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="font-display text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">Speakers</h2>
          <p className="mt-6 text-xl text-zinc-600">Fancy speaking at our upcoming event? submit your talk proposal</p>
        </div>
        <ul className="space-y-4 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8 mx-auto mt-16">
          {speakers.map((speaker) => (
            <li className="rounded-xl md:rounded-5xl text-center xl:text-left" key={speaker.name}>
              <div className="space-y-6 xl:space-y-10 relative w-full">
                <div>
                  <div className="relative w-full h-[300px]">
                    <div className="absolute inset-0 grayscale">
                      <Image
                        alt=""
                        loading="lazy"
                        width="2270"
                        height="2272"
                        decoding="async"
                        className="mx-auto w-full h-full object-cover rounded-t-lg object-top"
                        src={speaker.image}
                      />
                    </div>
                  </div>
                  <div className="h-2 bg-red-500 w-full"></div>
                </div>

                <div className="space-y-2">
                  <div className="space-y-1 text-lg font-medium leading-6">
                    <h3 className="text-zinc-800 text-[22px] font-bold">{speaker.name}</h3>
                    <p className="text-zinc-800 pt-4">{speaker.topic}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
