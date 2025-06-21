import React from "react";
import how1 from "../assets/howitworks1.svg";
import how2 from "../assets/howitworks2.svg";
import how3 from "../assets/howitworks3.svg";

function HowItWorks() {
  return (
    <section id="how-it-works" className=" scroll-mt-20 py-8 px-6  pt-0  mb-4">
      <div className="container wrapper mx-auto flex flex-col justify-center">
        <h3 className="header-text mb-4 ">How It Works</h3>
        <p className="mb-5 p-0 text-left text-[var(--simplr-grey)]">
          Highlight text, press a key, and get instant clarity, right on the
          page. All in 3 steps

          
        </p>
        <div className="grid grid-cols-3 gap-6 items-start text-center my-6">
          <img
            src={how1}
            alt="Highlight any text on a webpage"
            className="w-full mx-auto mb-2"
          />


<svg width="295" height="185" viewBox="0 0 295 185" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_73_981)">
<path d="M62.5374 87.7265C62.5376 85.7706 63.9526 84.1012 65.8821 83.7805L155.457 68.8946C156.111 68.7859 156.781 68.8412 157.408 69.0558L228.834 93.5052C230.452 94.0591 231.538 95.5799 231.538 97.2896L231.538 106.273C231.538 108.055 230.36 109.622 228.648 110.117L130.431 138.485C129.357 138.795 128.201 138.641 127.246 138.061L64.4622 99.9577C63.2674 99.2324 62.538 97.9358 62.538 96.538L62.5374 87.7265Z" fill="#AFD4FF" stroke="#4994EC" stroke-width="2"/>
<path d="M63.6615 87.5518C60.6408 85.7002 61.3408 81.1255 64.7771 80.2621L155.044 57.5819C155.943 57.3561 156.892 57.4491 157.73 57.8452L228.677 91.4016C232.01 92.9781 231.616 97.8423 228.073 98.8621L130.442 126.959C129.363 127.269 128.202 127.111 127.245 126.524L63.6615 87.5518Z" fill="#F2F8FF" stroke="#4994EC" stroke-width="2"/>
<path d="M134.298 98.0123C130.446 99.2189 126.655 100.372 122.896 101.486C124.594 103.88 126.345 106.283 128.122 108.71C127.595 108.876 126.055 109.189 125.538 109.352C119.701 101.248 115.001 93.5633 110.038 85.8524C110.516 85.6972 111.359 85.1563 111.82 85.0151C123.172 90.8135 135.937 96.3252 149.406 101.694C148.291 102.069 147.167 102.457 146.052 102.833C142.112 101.234 138.181 99.6335 134.298 98.0123ZM131.763 96.9469C125.608 94.2441 119.747 91.4873 114.233 88.6756C114.194 88.6841 114.155 88.6926 114.118 88.7109C116.586 92.4312 119.13 96.1758 121.783 99.9479C125.072 98.9763 128.407 97.9843 131.763 96.9469ZM154.756 99.8947C144.952 93.4523 134.926 87.1196 125.108 80.8029C125.961 80.5355 126.823 80.2659 127.685 79.9964C137.161 85.6813 146.635 91.4075 155.82 97.2582C160.355 95.7595 164.985 94.2298 169.709 92.6592C170.493 93.154 171.276 93.6488 172.049 94.1457C166.121 96.1112 160.358 98.0308 154.756 99.8947ZM182.004 90.792C180.785 91.2108 179.544 91.6241 178.335 92.0407C168.906 86.4276 158.914 81.1005 148.039 76.1296C144.564 77.1416 141.237 78.1217 138.063 79.058C137.138 78.6146 136.222 78.1692 135.306 77.7237C142.79 75.573 151.105 73.1494 159.752 70.5612C160.639 70.9209 161.526 71.2805 162.403 71.6423C158.822 72.8208 155.232 73.9603 151.653 75.0564C162.459 79.9402 172.479 85.2099 182.004 90.792Z" fill="#4994EC"/>
</g>
<path d="M65.5381 85.5L156.538 63.5L226.538 96.5" stroke="white" stroke-width="3"/>
<defs>
<filter id="filter0_d_73_981" x="60.75" y="56.4612" width="171.788" height="88.1808" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.286275 0 0 0 0 0.580392 0 0 0 0 0.92549 0 0 0 0.45 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_73_981"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_73_981" result="shape"/>
</filter>
</defs>
</svg>


          
          <img
            src={how2}
            alt="Press Alt+S to simplify or Alt+D to define"
            className="w-full mx-auto mb-2"
          />
          <img
            src={how3}
            alt="Get instant results without leaving the page"
            className="w-full mx-auto mb-2"
          />
          <div className=" flex flex-col  justify-start gap-1">
            <p className="font-bold text-[var(--simplr-blue)] ">
              Highlight Text
            </p>
            <p className="text-[var(--simplr-grey)]">
              Select any text to understand from a webpage.
            </p>
          </div>
          <div className=" flex flex-col  justify-start gap-1">
            <p className="font-bold text-[var(--simplr-blue)] ">
              Press a Hotkey
            </p>
            <p className="text-[var(--simplr-grey)]">
              Use Alt+S to simplify or Alt+D to define.
            </p>
          </div>
          <div className=" flex flex-col  justify-start gap-1">
            <p className="font-bold text-[var(--simplr-blue)] ">
              Instant Results
            </p>
            <p className="text-[var(--simplr-grey)]">
              Clean popup shows simplified text or definition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
