import Image from "next/image";
import Link from "next/link";
import AnimationFadeIn from "@/components/atoms/AnimationFadeIn";
import { homeTeam } from "velite-generated";

interface TeamProps extends homeTeam {}

export default function Team({
  title,
  subtitle,
  members,
  ...props
}: TeamProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center pb-[10rem]">
      <div className="container flex flex-col items-center justify-center mx-auto py-[6rem] sm:py-[2rem] px-[1.5rem]">
        {title && (
          <AnimationFadeIn>
            <h2 className="font-bebas-neue uppercase text-center text-[4rem] sm:text-[8vw] 2xl:text-[6rem] mb-[2rem]">
              {title}
            </h2>
          </AnimationFadeIn>
        )}
        {subtitle && (
          <AnimationFadeIn className="origin-left">
            <p className="font-bebas-neue uppercase text-[2rem] sm:text-[3vw] 2xl:text-[3rem] leading-[100%]">
              {subtitle}
            </p>
          </AnimationFadeIn>
        )}
      </div>
      {members && (
        <div className="container mx-auto px-[1.5rem]">
          <div className="flex flex-col lg:flex-row gap-[2rem] lg:gap-[4rem] justify-center">
            {members.map((member, index) => (
              <AnimationFadeIn
                key={index}
                className="lg:max-w-[50%] 2xl:max-w-[33%]"
              >
                <div className="flex items-center justify-center flex-col">
                  <div className="relative aspect-[1/1] w-[16rem] h-[16rem] mb-[1rem]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      placeholder="blur"
                      fill
                      className="object-cover object-center rounded-full border border-white/10"
                    />
                  </div>
                  <h3 className="font-bebas-neue text-[4rem] text-center">
                    {member.name}
                  </h3>
                  <div className="font-bebas-neue text-[1.5rem] text-center">
                    {member.description}
                  </div>
                </div>
              </AnimationFadeIn>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
