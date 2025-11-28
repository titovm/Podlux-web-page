import svgPaths from "./svg-4tfah38jxr";
import imgBackgroundImg from "figma:asset/e392cae85ecf7586202140d22ccf666294c6d2fb.png";
import imgCover from "figma:asset/e86360af3fbddf9c71549231151f94741fc89c80.png";

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="1920×1080">
      <div className="absolute bottom-0 h-[1152px] left-1/2 translate-x-[-50%] w-[1920px]" data-name="background img">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBackgroundImg} />
      </div>
      <div className="absolute bg-black box-border content-stretch flex gap-[10px] items-center justify-center left-[1804px] pl-[24px] pr-[18px] py-[18px] rounded-[34px] size-[68px] top-[48px]" data-name="Button">
        <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "32.15625", "--transform-inner-height": "27.84375" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <div className="h-[27.854px] relative w-[32.163px]" data-name="Play">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 28">
                <path d={svgPaths.p7331f80} fill="var(--fill-0, white)" id="Play" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[1736px] size-[68px] top-[48px]" data-name="Cover">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCover} />
      </div>
      <div className="absolute font-['ABC_Gravity_Variable:Normal_Italic',sans-serif] font-black italic leading-[40px] left-[calc(50%+0.5px)] text-[40px] text-black text-center text-nowrap top-[48px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 132, 'slnt' -16" }}>
        <p className="font-['ABC_Gravity_Variable:Wide_Italic',sans-serif] mb-0" style={{ fontVariationSettings: "'wdth' 150" }}>
          Champagne Coast
        </p>
        <p>Blood Orange</p>
      </div>
      <div className="absolute font-['ABC_Gravity_Variable:Wide_Italic',sans-serif] font-black italic leading-[40px] left-[48px] text-[40px] text-black text-nowrap top-[48px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 150" }}>
        <p className="mb-0">Подгорица</p>
        <p>Люкс</p>
      </div>
    </div>
  );
}