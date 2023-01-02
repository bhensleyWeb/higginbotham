import React from 'react'
import { Container } from '../globalStyles';

const Home = () => {
  return (
    <>
      <Container>
      <div class="bgimg-1" style={{ backgroundImage: `url("${process.env.PUBLIC_URL}/images/overlooking-anaconda-mt-3.jpg")` }}>
              <div class="caption">
                <span class="border" style={{whiteSpace:'none',fontSize:'3vw'}}>Anaconda, MT </span>
              </div>
            </div>
        <div className="row">
          <div className="side">
            <h2>Whats in a name?</h2>
            <br />
            <quoteblock style={{ margin: '80% auto' }}>"That which we call a rose by any other name would smell as sweet." - William Shakespear (Romeo & Juliet)</quoteblock>
            <br /><br />
            <p>According to "The National Research Center<sup>&trade;</sup>" The English surname Higginbotham is of habitation origin, belinging to that category of surnames drived from the name of the place where an original bearer dwelt or where he once held land. Thus, it envokes simply "dweller in or man from Higginbotham". The place name itself has quite a complicated history, as is evidenced in early examples of the surname, which date from 1246.  For example , and Alexander Akinbothum is listed in the Assine Rolls for Lancaster. This was from Oakenbottom in Bolton-le-moors in Lancaster which was   "aecen-botome," "oaken vally". This became Eakenbottom, then Ickenbottom, which was subsequently associated with "hicken" or "higgin", a Lacanshire and Cheshire dialect-word for "mountain-ash"</p>
            <h2>Crest - Coat of Arms</h2>
            <div style={{textAlign: "center" }}><img src={`${process.env.PUBLIC_URL}/images/Crest.jpg`} width="300px" alt='coat of arms' /></div>
            <p><dl><dt>Heraldry</dt>
            <dd>Argant, a rose gules, barbed and sedded 'or' with dexter and sinister arm shooting an arrow from a bow all proper or helm.</dd>
            <dd>Argent (white or silver) - denotes purity, innocense, beauty, peace.</dd>
            <dd>Arrow - one who is prepared for battle.</dd>
            <dd>Bow - power, ability to hit a target, war.</dd>
            <dd>Gules - (guelz) The color red - military strength and nobility and fairness.</dd>
            <dd>Or - (gold) generosity and elevation of mind</dd>
            <dd>Rose - The rose shown full faced with five petals , barb and seeds - grace and beauty.</dd>
            </dl>
            <br />
            </p>
            <p> The family crest is oftend displayed with a motto scrolled above or below the coat reading 'Aut Vicire aut Morri' which litterally translates to 'either conquer or die' or less literal, 'By Aim and By Effort'</p>
           
          </div>
          <div className="main">
            <h2>Welcome</h2>            
            <br />
            <p>Welcome to my Higginbotham family tree site. I first began this page as a tribute to two people. First to my son so that he would know where he comes from and the type of people who are apart of his heritage. And also because he may have to do a family tree assignment some day and I want to give him the most information possible. Secondly for my mother. Since my maternal grandparents did not have any male children, my mother and her sisters are the end of a line - so to speak. The final leaves on a particular twig on a specific branch in a rather large and expansive tree. </p>
            <p>I have done my best to capture the truest sense of my pedigree. I followed my pedigree upward more than outward. And while there are thousands of Higginbothams in the world today, I attempted only to trace that singular path back as far as I could. To conduct reasarch, document, and define every aunt, uncle, and cousin who ever decened from the original settlers in 1608 would be a massive undertaking for which I simply do not have time for. Some of these cousins, aunts, etc are listed when their stories seemed interesting enough to do so.  </p>
            <p>Given the amount of data transcribed, the passing of stories and inflamation of history, there may be errors in my interpretation of relationships, dates, etc. Furthermore, the propencity of our ancestors to name their children after themselves, parents, grandparnets, aunts, uncles, etc. it can be difficutlt to decipher which Higginbotham a record may pertain to. Any user who can provide proof of erros and sugested corrections is welcome to contact me to request an edit.</p>
            <br />
            <h2>How to use this site</h2>
            <div class="bgimg-1" style={{ backgroundImage: `url("${process.env.PUBLIC_URL}/images/coshocton_1846.jpg")`, height:'100px' }}></div>
            <p>I have attempted to break this site into the following sections, <ul>
              <li>Tree - the tree itself showing my ancestry.</li>
              <li>Documents - a library of marriage certificates, death certificates and obituaries, land warrents, and other supporting documentaion.</li>
              <li>Stories - A collection of interesting stories uncovered during my research</li>
              <li>Notes - Credits and general synopsis of confusing relationships throughout the tree. Links to resources and cited records.</li>
              <li>Land - Land warrents and permits granted.</li>
            </ul>
            </p>
            
          </div>
        </div>
      </Container>
    </>
  )
}
export default Home;