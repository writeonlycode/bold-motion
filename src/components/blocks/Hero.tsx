import AnimationFadeOut from "@/components/atoms/AnimationFadeOut";
import AnimationParalax from "@/components/atoms/AnimationParalax";
import { homeHero } from "velite-generated";

interface HeroProps extends homeHero {}

export default function Hero({ title, lead, ...props }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      {title && (
        <div className="container mx-auto px-[1.5rem] mb-[8rem]">
          <AnimationFadeOut>
            <h1 className="font-display uppercase text-[6rem] sm:text-[14vw] 2xl:text-[18rem] text-center leading-[100%]">
              {title}
            </h1>
          </AnimationFadeOut>
        </div>
      )}
      {lead.map((item, index) => {
        return (
          <AnimationParalax
            key={index}
            baseVelocity={item.speed}
            className="font-bebas-neue text-[2rem] sm:text-[3vw] 2xl:text-[3rem] leading-[100%]"
          >
            {item.text}
          </AnimationParalax>
        );
      })}
    </section>
  );
}
