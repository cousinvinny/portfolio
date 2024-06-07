import "./fonts"
import { zilla_slab } from "./fonts";

export default function Home() {
  return (
    <main>
      <section className=" bg-[#F4F9FC] w-[100vw] h-[100vh] box-border border-[1.25em] p-5 border-white" >
        <nav className="flex">
          <img src='/images/coding.svg' alt="terminal icon" className="h-[7vh] ml-8 mt-4" />
          <img src='/images/thick_line.png' className="h-[2.8vh] mt-9 ml-4" />
          <div className="text-[#0F1B61] text-[12px] font-bold mt-[3.3em] ml-[1.5em] tracking-[4px]">HOME</div>
          <div className="text-[#0F1B61] text-[12px] font-bold mt-[3.3em] ml-9 tracking-[4px]">RESUME</div>
          <img src='/images/chat_outline.svg' className="right-0 absolute h-[4vh] mt-[1.9em] ml-4 mr-[17em]" />
          <div className="text-[#0F1B61] right-0 absolute text-[12px] font-bold mt-[3.3em] mr-[6em] tracking-[1px]">vinhnguyensj01@gmail.com</div>
        </nav>
        <section className={zilla_slab.className}>
          <div className="text-[#0F1B61] ml-40 mt-40 text-[70px]">
            <div>Hi, my</div>
            <div>name is <span className="font-bold">Vinh</span></div>
          </div>
        </section>
      </section>
    </main>
  );
}
