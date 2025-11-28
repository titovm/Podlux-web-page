import imgCover from "figma:asset/e86360af3fbddf9c71549231151f94741fc89c80.png";

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="393×852">
      <div className="absolute bottom-[176px] font-['ABC_Gravity_Variable:Normal_Italic',sans-serif] font-black italic leading-[40px] left-1/2 text-[0px] text-[40px] text-black text-center text-nowrap translate-x-[-50%] translate-y-[100%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 132, 'slnt' -16" }}>
        <p className="font-['ABC_Gravity_Variable:Wide_Italic',sans-serif] mb-0" style={{ fontVariationSettings: "'wdth' 150" }}>
          Champagne Coast
        </p>
        <p>Blood Orange</p>
      </div>
      <div className="absolute left-[calc(50%+0.5px)] size-[136px] top-[460px] translate-x-[-50%]" data-name="Cover">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCover} />
      </div>
      <Button />
      <div className="absolute font-['ABC_Gravity_Variable:Wide_Italic',sans-serif] font-black italic leading-[40px] left-[calc(50%+0.5px)] text-[40px] text-black text-center text-nowrap top-[96px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 150" }}>
        <p className="mb-0">Podgorica</p>
        <p>Lux</p>
      </div>
    </div>
  );
}