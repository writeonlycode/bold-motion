import { ComponentType, RefAttributes, SVGProps } from "react";
import { sharedFooter } from "velite-generated";
import Icon from "../icons/Icon";

interface FooterProps extends sharedFooter {}

type HeroIcon = ComponentType<
  Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>
>;

// const Facebook = dynamic(() => import("../icons/Facebook"));

// const Icon = { Facebook }

export default function Footer({ copyright, social, ...props }: FooterProps) {
  return (
    <section className="flex flex-col justify-center py-[4rem] gap-[2rem]">
      {social && (
        <div className="container mx-auto px-[1.5rem] flex items-center justify-center text-sm text-white/90 gap-[1rem]">
          {social.map(async (item, index) => {
            return (
              <a
                key={index}
                href={item.href}
                target="_blank"
                aria-label={item.label}
                className="block hover:scale-[1.1] active:scale-[1] duration-300"
              >
                <Icon icon={item.icon} className="w-[1.5rem] h-[1.5rem]" />
              </a>
            );
          })}
        </div>
      )}
      {copyright && (
        <div className="container mx-auto px-[1.5rem] text-center text-sm text-white/90">
          {copyright}
        </div>
      )}
    </section>
  );
}
