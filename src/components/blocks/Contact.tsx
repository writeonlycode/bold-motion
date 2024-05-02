import AnimationFadeIn from "@/components/atoms/AnimationFadeIn";
import { homeContact } from "velite-generated";

interface ContactProps extends homeContact {}

export default function Contact({
  title,
  text,
  button,
  action,
  method,
  hiddenFields,
  ...props
}: ContactProps) {
  return (
    <section className="flex flex-col justify-center bg-white/10 rounded-[2rem] py-[8rem]">
      <div className="container flex-col justify-center items-stretch mx-auto text-end px-[1.5rem]">
        {title && (
          <AnimationFadeIn>
            <h2 className="font-bebas-neue uppercase text-center text-[4rem] sm:text-[8vw] 2xl:text-[6rem] origin-center mb-[2rem]">
              {title}
            </h2>
          </AnimationFadeIn>
        )}
        {text && (
          <AnimationFadeIn className="origin-center">
            <div className="font-bebas-neue uppercase text-[2rem] sm:text-[4vw] 2xl:text-[3rem] text-center leading-[100%] mb-[4rem]">
              {text}
            </div>
          </AnimationFadeIn>
        )}
        <AnimationFadeIn>
          <form
            className="2xl:w-[50%] mx-auto "
            action={action}
            method={method}
          >
            {hiddenFields.map((item, index) => (
              <input
                key={index}
                type="hidden"
                name={item.name}
                value={item.value}
              />
            ))}
            <div className="mb-[1rem]">
              <input
                type="email"
                placeholder="your@email.com"
                name="email"
                required
                className="w-full p-[1rem] rounded text-black font-bebas-neue text-[2rem]"
              />
            </div>
            <div className="mb-[1rem]">
              <input
                type="name"
                placeholder="Your Name"
                name="name"
                required
                className="w-full p-[1rem] rounded text-black font-bebas-neue text-[2rem]"
              />
            </div>
            <div className="mb-[1rem]">
              <textarea
                rows={10}
                required
                placeholder="Your Message"
                name="message"
                className="w-full p-[1rem] rounded text-black font-bebas-neue text-[1.4rem]"
              />
            </div>
            <div className="mt-[2rem] text-center">
              <button
                type="submit"
                className="font-bebas-neue text-[2rem] border-[2px] py-[1rem] px-[2rem] rounded hover:scale-[1.1] duration-300 active:scale-[1]"
              >
                {button}
              </button>
            </div>
          </form>
        </AnimationFadeIn>
      </div>
    </section>
  );
}
