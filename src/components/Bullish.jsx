import React from 'react'
import ethereum from '../assets/ethereum.png'
import tag from '../assets/tag.png'
import checkmark from '../assets/checkmark.png'

const items = [
  {
    title: "Affordable",
    icon: ethereum,
    desc: "Blocks has a minting price of just 0.027 ETH",
  },
  {
    title: "Community approved",
    icon: checkmark,
    desc: "NFT chads and collectoors will be minting",
  },
  {
    title: "Rare",
    icon: tag,
    desc: "It has a low supply of 125 items",
  },
];


const Bullish = () => {
  return (
    <div className="bg-neutral-200 px-9 sm:pt-16">
      <h2 className="font-semibold text-center text-2xl">Why You Should Be Bullish?</h2>

      <div>
        <div className="flex justify-center items-center gap-8 pt-9 w-[93%] my-0 mx-auto sm:flex-col sm:gap-5">
        {items.map((item, index) => (
          <div className="flex items-center justify-center gap-3 sm:gap-9" key={index}>
            <img src={item.icon} alt={item.title} />
            <div >
              <h3 className="mdm font-semibold text-lg">{item.title}</h3>
              <p className="text-base">{item.desc}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Bullish