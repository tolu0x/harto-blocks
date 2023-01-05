import React from 'react'
import blockImg from '../assets/block-art.jpg'

const Main = () => {
  return (
    <div className="min-h-screen w-screen pt-32 px-9 sm:px-4 flex sm:flex-col items-start justify-between bg-neutral-200">
      <div className="pt-9 sm:pt-0">
        <h1 className="font-semibold text-5xl w-96 sm:w-72 pt-9 sm:pt-0 pb-4">
          The coolest art on the
          <span className="text-red-600 font-bold inline-block pl-3 sm:pl-1">
            BLOCK!
          </span>
        </h1>

        <p className="w-96 sm:w-72">
          125 generative unique artworks representing the infinite ways to build
          a cube in the (x,y,z) axis.
        </p>

        <a
          href="https://twitter.com/harto_fr/status/1605225204535508993?s=20&t=jy4_q-lnvYutNhAcS6L7EQ"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-block mt-5 p-3 bg-red-600 text-white font-semibold rounded-2xl w-40 sm:w-72 text-center hover:bg-white hover:text-red-600"
        >
          Learn More.
        </a>
      </div>

      <div className="pt-9">
        <img
          className="w-[27rem] m-0"
          src={blockImg}
          alt="An illustration of blocks"
        />
      </div>
    </div>
  );
}

export default Main