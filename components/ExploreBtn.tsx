'use client';

import Image from "next/image";

const ExploreBtn = () => {
  return (
    <button type="button" id="explore-btn" className="mt-7 mx-auto" onClick={() => console.log('CLICK')}>
      <a href="#events">
        Explore Events
        <Image src="/icons/arrow-down.svg" alt="down arrow" width={0} height={0} style={{width: "auto", height: "auto"}} />
      </a>
    </button>
  );
};

export default ExploreBtn;