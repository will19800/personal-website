import React from 'react'

function NavbarBottom() {
  return (
    <div>
      <div className='w-full mt-6'>
        <span className='block full-wdith border-t border-mydarkgreen'></span>
      </div>
      <div className='Container flex my-4 justify-between items-center align-middle'>
        <div>
          <p className='text-black items-center'>
          Take care, keep up the great work, and stay connected.
        </p>
        </div>
        <div>
        <ul className="flex flex-row">
          <a href="https://github.com/will19800" className="pr-5">
            <img
              src="/githubicon.svg"
              alt="github"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/will-chen-a62953279/"
            className="pr-5"
          >
            <img
              src="/linkedlnicon.svg"
              alt="linkedin"
              width={30}
              height={30}
            />
          </a>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default NavbarBottom