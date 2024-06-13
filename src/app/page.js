import "./fonts"
import { zilla_slab } from "./fonts";

export default function Home() {
  return (
    <main>
      <section className=" bg-[#F4F9FC] w-[100vw] h-[100vh] box-border border-[1.25em] p-5 border-white" >
        <nav className="flex">
          <img src='/images/coding.svg' alt="terminal icon" className="h-[7vh] ml-8 mt-4" />
          <img src='/images/thick_line.png' className="h-[2.8vh] mt-9 ml-4" />
          <div className="group w-[3em] flex justify-center ml-4">
            <div className="text-[#0F1B61] text-[12px] font-bold mt-[3.3em] tracking-[4px] transition-all duration-300 group-hover:tracking-[6px]">
              HOME
            </div>
          </div>
          <div className="group w-[5em] flex justify-center ml-7">
            <div className="text-[#0F1B61] text-[12px] font-bold mt-[3.3em] tracking-[4px] transition-all duration-300 group-hover:tracking-[6px]">
              RESUME
            </div>
          </div>
          <img src='/images/chat_outline.svg' className="right-0 absolute h-[4vh] mt-[1.9em] ml-4 mr-[17em]" />
          <div className="text-[#0F1B61] right-0 absolute text-[12px] font-bold mt-[3.3em] mr-[6em] tracking-[1px] ">vinhnguyensj01@gmail.com</div>
        </nav>
        <section className={zilla_slab.className}>
          <div className="text-[#0F1B61] ml-[3.5em] mt-[1.54em] text-[88px]">
            <div className="-mb-[0.56em]">Hi, my</div>
            <div>name is <span className="font-bold">Vinh</span></div>
            <div className="text-[26px] mt-[0.3em]">I am a <span className="font-bold">software engineering </span>major at San Jose</div>
            <div className="text-[26px]">State University, graduating Fall 2024.</div>
          </div>
        </section>
        <section>
          <div className="tracking-[4px] text-[11px] ml-[45.3em] mt-[9.7em]">SCROLL</div>
          <div className="ml-[33em] mt-[20px] w-[1px] h-[200px] bg-black "></div>
        </section>
      </section>

    </main>
  );
}
