import svgPaths from "./svg-jwr91t2k48";
import imgImage from "figma:asset/e86360af3fbddf9c71549231151f94741fc89c80.png";

function Group() {
  return (
    <div className="absolute left-[129px] size-[136px] top-[212px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 136">
        <g id="Group 2">
          <circle cx="68" cy="68" fill="var(--fill-0, black)" id="Ellipse 1" r="68" />
          <path d={svgPaths.p2fb0e2f0} fill="var(--fill-0, white)" id="Polygon 1" />
        </g>
      </svg>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="1">
      <div className="absolute font-['ABC_Gravity_Variable:Wide_Italic',sans-serif] font-black italic leading-[40px] left-[calc(50%+0.5px)] text-[40px] text-black text-center text-nowrap top-[96px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 150" }}>
        <p className="mb-0">Podgorica</p>
        <p>Lux</p>
      </div>
      <div className="absolute bottom-[164px] font-['ABC_Gravity_Variable:Normal_Italic',sans-serif] font-black italic leading-[40px] left-1/2 text-[40px] text-black text-center text-nowrap translate-x-[-50%] translate-y-[100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 132, 'slnt' -16" }}>
        <p className="font-['ABC_Gravity_Variable:Wide_Italic',sans-serif] mb-0" style={{ fontVariationSettings: "'wdth' 150" }}>
          Champagne Coast
        </p>
        <p className="font-['ABC_Gravity_Variable:Compressed_Italic',sans-serif]" style={{ fontVariationSettings: "'wdth' 67, 'slnt' -16" }}>
          Blood Orange
        </p>
      </div>
      <div className="absolute left-[calc(50%+0.5px)] size-[136px] top-[504px] translate-x-[-50%]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <Group />
    </div>
  );
}