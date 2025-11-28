import svgPaths from "./svg-o48mz8lhrm";
import imgBackground2000X12001 from "figma:asset/e392cae85ecf7586202140d22ccf666294c6d2fb.png";
import imgImage from "figma:asset/e86360af3fbddf9c71549231151f94741fc89c80.png";

function Group() {
  return (
    <div className="absolute left-[1804px] size-[68px] top-[48px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 68">
        <g id="Group 2">
          <circle cx="34" cy="34" fill="var(--fill-0, black)" id="Ellipse 1" r="34" />
          <path d={svgPaths.p1a064b00} fill="var(--fill-0, white)" id="Polygon 1" />
        </g>
      </svg>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="2">
      <div className="absolute bottom-0 h-[1152px] left-1/2 translate-x-[-50%] w-[1920px]" data-name="Background-2000x1200 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBackground2000X12001} />
      </div>
      <div className="absolute font-['ABC_Gravity_Variable:Wide_Italic',sans-serif] font-black italic leading-[40px] left-[48px] text-[40px] text-black text-nowrap top-[48px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 150" }}>
        <p className="mb-0">Podgorica</p>
        <p>Lux</p>
      </div>
      <div className="absolute font-['ABC_Gravity_Variable:Normal_Italic',sans-serif] font-black italic leading-[40px] left-[calc(50%+0.5px)] text-[40px] text-black text-center text-nowrap top-[48px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 132, 'slnt' -16" }}>
        <p className="font-['ABC_Gravity_Variable:Wide_Italic',sans-serif] mb-0" style={{ fontVariationSettings: "'wdth' 150" }}>
          Champagne Coast
        </p>
        <p className="font-['ABC_Gravity_Variable:Compressed_Italic',sans-serif]" style={{ fontVariationSettings: "'wdth' 67, 'slnt' -16" }}>
          Blood Orange
        </p>
      </div>
      <div className="absolute left-[1736px] size-[68px] top-[48px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <Group />
    </div>
  );
}