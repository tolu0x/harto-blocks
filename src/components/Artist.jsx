import React from 'react'
import harto from '../assets/harto.jpg'

const Artist = () => {
  return (
    <div className="bg-neutral-200 px-9 pt-20 pb-16">
      <h2 className="font-semibold text-center text-2xl">About the artist</h2>

      <div className="pt-16 flex items-center justify-between sm:flex-col">
        <img className="rounded-full w-72" src={harto} alt="Harto" />

        <p className="text-center w-3/5 sm:w-full sm:pt-5">
          Harto is a talented art director and Web3 specialist. He has had his
          experimental 1/1 pieces auction for as high as 1Eth. One more thing to
          note, his art has been to space! Yes, you heard right. He collaborated
          with NASA to launch an NFT into space and that shows how much he’s
          contributed to the NFT community.
        </p>
      </div>
    </div>
  );
}

export default Artist