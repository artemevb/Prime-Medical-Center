"use client"
import Image from "next/image"

export default function NewCard({ key, title, date, imageSrc, specializationList }) {
  return (
    <div className="w-full bg-white h-full flex flex-col gap-2 justify-between">
      <div className="relative w-full aspect-w-4 aspect-h-5 overflow-hidden">
        <Image
          src={imageSrc}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt={`News Image ${key}`}
          className="object-cover"
        />
      </div>
      <div className="w-full flex flex-col gap-3">
        <h3 className="text-xl max-mdx:text-lg font-semibold line-clamp-4 max-w-[280px]">
          {title}
        </h3>
        <div className="flex gap-[12px] justify-start flex-row flex-wrap">
          {specializationList && specializationList.length > 0 ? (
            specializationList.map((spec, index) => (
              <p key={index} className="text-[#9C9C9C] text-[16px]">
                {spec.name}
                {index < specializationList.length - 1 && <span className="text-[#EEEEEE] mx-2">|</span>}
              </p>
            ))
          ) : (
            <p className="text-[#9C9C9C] text-[16px]">Специализации не указаны</p>
          )}
        </div>
      </div>
    </div>
  )
}
