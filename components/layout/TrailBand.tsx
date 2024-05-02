import Image from "next/image";

/** Illustrated trail with walkers that closes the home hero. */
export function TrailBand() {
  return (
    <div className="trail-band" aria-hidden="true">
      <svg className="trail-svg" viewBox="0 0 1440 220" preserveAspectRatio="none">
        <path d="M0 70c180-40 360 30 560 10s420-60 620-20 200 30 260 20V220H0z" fill="#BFE6D6" />
        <path d="M0 110c200-30 400 20 620 0s440-40 820 10V220H0z" fill="#8FD3C0" />
        <path d="M0 150c240-24 480 16 740 4s500-20 700 6V220H0z" fill="#F6E7C8" />
        <path
          d="M0 162c240-24 480 16 740 4s500-20 700 6"
          fill="none"
          stroke="#E4CFA3"
          strokeWidth="3"
          strokeDasharray="2 14"
          strokeLinecap="round"
        />
      </svg>
      <Image className="tb-bush" src="/images/bush.webp" alt="" width={147} height={167} />
      <Image className="tb-w1" src="/images/walker-green.webp" alt="" width={256} height={512} />
      <Image className="tb-w2" src="/images/walker-red.webp" alt="" width={256} height={366} />
      <Image className="tb-w3" src="/images/walker-cap.webp" alt="" width={256} height={361} />
      <Image className="tb-rock" src="/images/rock.webp" alt="" width={121} height={218} />
      <span className="tb-bubble b1">+1,240</span>
      <span className="tb-bubble b2">Day 23</span>
    </div>
  );
}
