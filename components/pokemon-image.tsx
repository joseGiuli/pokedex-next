"use client";

import Image from "next/image";

export function PokemonImage({ image, name }: { image: string; name: string }) {
  return (
    <div className="relative m-auto w-[15.625rem] h-[15.625rem]">
      <Image
        src={image}
        alt={`${name} picture`}
        fill
        quality={100}
        className="pointer-events-none"
      />
    </div>
  );
}
