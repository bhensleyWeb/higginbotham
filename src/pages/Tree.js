import React, { useEffect } from 'react';
import { Container } from '../globalStyles';
import {
  Magnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION
} from "react-image-magnifiers";
import {Link} from 'react-router-dom';

const Tree = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "../scripts/zoom.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    }
  }, []);


  return (
    <Container>
      <div className='tree'>
        <h1>Tree</h1>
        <hr />
        <b>Note:</b> Due to the depth and width of displaying 12 generations of families, I have only provided a pedigree view of my son and by proxy, my mother. Unlike most trees, rather than start with a patriarch and show decendency, I began with myself and my son and worked backwards. If you would like to view my complete tree of over 300 individuals, I am on Ancestry.com's site and can gladly share my tree with you. I can also provide a method to view a more robust tree upon request or provide a more extended branch from any family member. This tree shows only shows the joining of couples with marriage dates where they occur with locations. To zoom in, click or tap on the tree where you want to soom in, move your mouse or drag your finger to move about the tree. To view more about a specific person, look in the <Link to='/higginbotham/docs'>Docs</Link> section of the site. Notes about duplicate people in the tree can be found in the <Link to="/higginbotham/notes">Notes</Link> page.
        <br /><br />

        <div style={{width:'90%',border:'4px solid #8b8b8b'}}>

        <Magnifier
          imageSrc={`${process.env.PUBLIC_URL}/images/noah_small.png`}
          imageAlt="Example"
          largeImageSrc={`${process.env.PUBLIC_URL}/images/noah.png`} // Optional
          mouseActivation={MOUSE_ACTIVATION.CLICK} // Optional
          touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP} // Optional
        />
        </div>

      </div>
    </Container>
  )
}

export default Tree