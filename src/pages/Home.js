import React from 'react';
import { Container } from '../globalStyles';


function Home() {
  return (
    <div className='home'>
      <div class="bgimg-1" style={{ backgroundImage: `url("${process.env.PUBLIC_URL}/images/overlooking-anaconda-mt-3.jpg")` }}>
        <div class="caption">
          <span class="border">Anaconda, MT </span>
        </div>
      </div>

      <Container>
        <div style={{
          color: '#777',
          backgroundColor: 'white',
          padding: '50px 80px'
        }}>
          <h3 style={{ textAlign: 'center' }}>Welcome</h3>
          <p>Welcome to my 'Higginbotham' family tree website. I created this site for several reasons. Firstly, I wanted to understand who I was. Like most people, I heard stories from my parents, or aunts and uncles. Most were questionable and having played 'Telephone' in grade school, I know stories are often conveluded or exaggerated with each iteration. By researching the Higginbotham Line, I have hopefully brought new light and clarity to some of the myths and legends surrounding this branch of our very, very, extended family. </p>
          <br />
          <h1>Dedication</h1>
          <br />
          <blockquote>
            <ol>
              <li><b>Noah</b>: For my son Noah, because someday he will have to do a family tree assignment, much like I did when I was young. Or, perhaps, he may be interested in his heritage on his own. Either way, I've made it simpler for him.</li>
              <li><b>My mom - Ellen</b>: Since my maternal grandparents did not have any male children together, my mother and her sisters are the end of a line for our branch. Sure, there are thousands of Hig(g)inbothams out there, but without a male heir, my grandfather's name will not continue on this branch.</li>

            </ol>
          </blockquote>
        </div>
      </Container>
      <div class="bgimg-2" style={{ backgroundImage: `url("${process.env.PUBLIC_URL}/images/coshocton_1846.jpg")` }}>
        <div class="caption">
          <span class="border" style={{
            color: '#777',
            backgroundColor: 'white',
            fontSize: '25px',
          }}>Coshocton, OH (1846)</span>
        </div>
      </div>
      <Container>
        <div style={{ position: 'relative' }}>
          <div style={{
            color: '#777',
            backgroundColor: 'white',
            textAlign: 'left',
            padding: '50px 80px'
          }}>
            <h1>Research</h1>
            <br />
            <p> While deciding how to conduct my research, I decided to only do extensive resarch on the pedigree or direct lineage of my tree. To do in-depth study of each and every child, sibling, aunt, uncle, or distant cousin woul be never-ending. Siblings and children are noted for relatives, but not exccesively wide. Each generation doubles the number of parents which raises the hours needed to do the research exponentially. Additoinally, at a certain point, historical records simply do not exist or become unreliable. For my wife's family line, I was completly depandant on the recollection of living family members for lineage and name spellings.</p>
          </div>
        </div>
      </Container>
      <div class="bgimg-3" style={{ backgroundImage: `url("${process.env.PUBLIC_URL}/images/crest.jpg")` }}>
        <div class="caption">
          <span class="border" style={{
            backgroundColor: "#FFF",
            fontSize: '25px',
            color: '#777'
          }}>Family Crest</span>
        </div>
      </div>
      <Container>
        <div style={{
          position: 'relative'
        }}>
          <div style={{
            color: '#ddd',
            backgroundColor: '#282E34',
            padding: '50px 80px',
          }}><br />
            <fieldset style={{ padding: "10px"}}><legend><h2>Whats in a name?</h2></legend>
              <br />
              <quoteblock style={{margin:'80% auto' }}>"That which we call a rose by any other name would smell as sweet." - William Shakespear (Romeo & Juliet)</quoteblock>
              <br /><br />
              <p>According to "The National Research Center<sup>&trade;</sup>" The English surname Higginbotham is of habitation origin, belinging to that category of surnames drived from the name of the place where an original bearer dwelt or where he once held land. Thus, it envokes simply "dweller in or man from Higginbotham". The place name itself has quite a complicated history, as is evidenced in early examples of the surname, which date from 1246.  For example , and Alexander Akinbothum is listed in the Assine Rolls for Lancaster. This was from Oakenbottom in Bolton-le-moors in Lancaster which was   "aecen-botome," "oaken vally". This became Eakenbottom, then Ickenbottom, which was subsequently associated with "hicken" or "higgin", a Lacanshire and Cheshire dialect-word for "mountain-ash"</p>
              <p></p>
            </fieldset>
          </div>
        </div>

      </Container>
    </div>
  );
}

export default Home;
