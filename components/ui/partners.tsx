import Marquee from "@/components/ui/marquee";

const press = [
  "TheNewYorkTimes",
  "TheWashingtonPost",
  "Forbes",
  "Bloomberg",
  "BusinessInsider",
  "TechCrunch",
  "TheGuardian",
  "Wired",
];

export function Press() {
  return (
    <section id="press" className="bg-muted">
      <div className="py-14">
        <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col justify-center gap-2">
        <div className="text-3xl md:text-5xl lg:text-6xl font-semibold text-center md:text-start mx-3">
          Nos Clients
        </div>
        <div className="flex flex-col md:flex-row justify-between my-4 sm:gap-4 gap-0 lg:gap-4">
          <div className="md:text-lg lg:text-xl text-center md:text-start sm:my-2 my-0 lg:my-2">
          Nous attachons une grande importance à la qualité des relations établie avec ses partenaires et clients afin de nouer une relation fidèle et durable. Entre autres partenaires nous avons :
          </div>
        </div>
      </div>
          <div className="relative mt-6">
            <Marquee className="max-w-full [--duration:40s]">
              {press.map((logo, idx) => (
                <img
                  key={idx}
                  src={`https://cdn.magicui.design/press/${logo}.svg`}
                  className="h-10 w-40 px-2 dark:brightness-0 dark:invert"
                  alt={`logo-${logo}`}
                />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
