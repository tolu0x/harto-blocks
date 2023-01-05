import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black text-white px-9 py-7 sm:px-4">
      <div className="flex items-center justify-between sm:flex-col sm:items-start">
        <div className="flex flex-col sm:pb-7">
          <h3 className="font-semibold text-xl pb-4">Founders</h3>
          <a
            className="text-lg hover:underline"
            href="https://twitter.com/harto_fr"
            target="_blank"
            rel="noreferrer noopener"
          >
            Harto
          </a>
          <a
            className="text-lg hover:underline"
            href="https://twitter.com/DobeyDick"
            target="_blank"
            rel="noreferrer noopener"
          >
            Dobey Dick
          </a>
        </div>

        <div className="flex flex-col">
          <h3 className="font-semibold text-xl pb-4">Mint Date</h3>
          <p className="font-medium">9th of January, 2023</p>
        </div>
      </div>

      <h3 className="text-center pt-5">
        Made with ❤ by{" "}
        <a
          className="font-semibold text-xl hover:underline"
          href="https://twitter.com/tolufbg"
          target="_blank"
          rel="noreferrer noopener"
        >
          Tolu
        </a>
      </h3>
    </div>
  );
}

export default Footer