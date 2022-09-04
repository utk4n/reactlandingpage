import './about.scss'
import pp from '../../assets/pp.png'
import { DiCodeBadge } from "react-icons/di";
import {AiOutlineProject} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
<h2>About Me</h2>

<div className="container about_container">
  <div className="about_me">
    <div className="about_me_photo">
      {/* Your profile photo */}
      <img src="https://picsum.photos/400/400.jpg" alt="" />
    </div>
  </div>
  <div className="about_content">
<div className="about_cards">
  <article className='about_card'>
    <DiCodeBadge className='icon'/>
    <h4>Experiences</h4>
    <small>None</small>
  </article>
  <article className='about_card'>
    <AiOutlineProject className='icon'/>
    <h4>Projects</h4>
    <small>None</small>
  </article>
</div>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In magni illum eos doloremque explicabo obcaecati recusandae est iusto ipsa nihil perspiciatis qui vel tempora dolor, delectus, eaque doloribus numquam. Maxime.</p>
<a href="#contacts" className='btn btn_primary'>Message</a>
  </div>
</div>
    </section>
  )
}

export default About