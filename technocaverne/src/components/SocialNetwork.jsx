import React from 'react'

const SocialNetwork = () => {
  const anim = () => {
    const icons = document.querySelectorAll('.social-network a')
    icons.forEach(the_icon => {
      the_icon.addEventListener('mouseover', e => {
        the_icon.style.transform = `translate(${e.offsetX -
					20}px, ${e.offsetY - 13}px)`
      })
      the_icon.addEventListener('mouseleave', () => {
        the_icon.style.transform = ''
      })
    })
  }

  return (
    <div className='social-network'>
      <ul className='content'>
        <li id='lang'>
          <i className='fa-solid fa-globe' />
          <span>Fr</span>
        </li>
        <a
          href='https://www.facebook.com'
          target='_blank'
          className='hover'
          rel='noopenner noreferrer'
          onMouseOver={anim}
				>
          <li>
            <i className='fab fa-facebook-f' />
          </li>
        </a>{' '}
        {/* le target="_blank" permet d'ouvrir le lien dans une autre page */}
        <a
          href='https://www.twitter.com'
          target='_blank'
          className='hover'
          rel='noopenner noreferrer'
          onMouseOver={anim}
				>
          <li>
            <i className='fab fa-twitter' />
          </li>
        </a>
        <a
          href='https://www.instagram.com'
          target='_blank'
          className='hover'
          rel='noopenner noreferrer'
          onMouseOver={anim}
				>
          <li>
            <i className='fab fa-instagram' />
          </li>
        </a>
      </ul>
    </div>
  )
}

export default SocialNetwork
