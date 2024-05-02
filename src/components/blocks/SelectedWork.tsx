import Image from "next/image";
import Link from "next/link";
import AnimationFadeIn from "@/components/atoms/AnimationFadeIn";
import { homeSelectedWork } from "velite-generated";

interface SelectedWorkProps extends homeSelectedWork {}

export default function SelectedWork({
  title,
  subtitle,
  items,
  ...props
}: SelectedWorkProps) {
  const itemsLeft = items.filter((_item, index) => index % 2 === 0);
  const itemsRight = items.filter((_item, index) => index % 2 !== 0);

  return (
    <section className="min-h-screen flex flex-col justify-center pb-[10rem]">
      <div className="container flex flex-col items-start justify-center mx-auto py-[6rem] sm:py-[12rem] px-[1.5rem]">
        {title && (
          <AnimationFadeIn className="origin-left">
            <h2 className="font-bebas-neue uppercase text-[4rem] sm:text-[8vw] 2xl:text-[5rem] leading-[100%] mb-[1rem]">
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
      {items && (
        <div className="container grid grid-cols-1 lg:grid-cols-2 lg:gap-[8rem] mx-auto px-[1.5rem]">
          {itemsLeft && (
            <div className="flex flex-col gap-[8rem] lg:gap-[16rem]">
              {itemsLeft.map((item, index) => (
                <AnimationFadeIn key={index}>
                  <Link
                    href={item.href}
                    className="block hover:scale-[1.1] active:scale-[1] duration-300"
                  >
                    <div className="relative aspect-[1/1] mb-[1rem]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        placeholder="blur"
                        fill
                        className="object-cover object-center rounded border border-white/10"
                      />
                    </div>
                    <h3 className="font-bebas-neue text-[4rem]">
                      {item.title}
                    </h3>
                    <div className="font-bebas-neue text-[1.5rem]">
                      {item.description}
                    </div>
                  </Link>
                </AnimationFadeIn>
              ))}
            </div>
          )}
          {itemsRight && (
            <div className="flex flex-col gap-[8rem] lg:gap-[16rem]">
              <div />
              {itemsRight.map((item, index) => (
                <AnimationFadeIn key={index}>
                  <Link
                    href={item.href}
                    className="block hover:scale-[1.1] active:scale-[1] duration-300"
                  >
                    <div className="relative aspect-[1/1] mb-[1rem]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        placeholder="blur"
                        fill
                        className="object-cover object-center rounded border border-white/10"
                      />
                    </div>
                    <h3 className="font-bebas-neue text-[4rem]">
                      {item.title}
                    </h3>
                    <div className="font-bebas-neue text-[1.5rem]">
                      {item.description}
                    </div>
                  </Link>
                </AnimationFadeIn>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
