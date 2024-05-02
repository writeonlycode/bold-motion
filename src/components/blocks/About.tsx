import { homeAbout } from "velite-generated";
import AnimationFadeIn from "@/components/atoms/AnimationFadeIn";

interface AboutProps extends homeAbout {}

export default function About({ text, ...props }: AboutProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white/10 px-[1.5rem] rounded-[2rem]">
      <div className="container mx-auto px-[1.5rem]">
        {text && (
          <AnimationFadeIn className="origin-center">
            <div className="font-bebas-neue uppercase text-[2rem] sm:text-[4vw] 2xl:text-[4rem] text-center leading-[100%]">
              {text}
            </div>
          </AnimationFadeIn>
        )}
      </div>
    </section>
  );
}
