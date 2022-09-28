import React from 'react'
import { Container } from '../globalStyles';

const Stories = () => {
  return (
    <div className='stories'>
      <Container>
        <h1>Stories</h1>
        <h2>William (Indian Billy) Ice</h2>
        <p>
          <br />
        </p>
        <h2>I was sucked into a jet engine.</h2>
        <p>On May 14, 1956, Airman Third Class Fred Higinbotham was working as a flight deck crewman in Okinawa, Japan. His job was to attach a 'static line' to a jet's nose gear while they were refueling to prevent sparks from ignighting the fuel.  A flight of F-86F Sabre jets was coming in for refueling. Fred was attaching his static line when he was 'sucked' into the air intake duct on the plane. He began to hover in the air only inches from the spinning rotor blades. Thankfully, Grandpa Fred made it and we are all here because of it. </p>
        <p>Grandpa Fred's full account of the harrowing experience can be found in multiple newspapers and even in congressional records after his return back to the States. To read his account of the experience, click <a href={`${process.env.PUBLIC_URL}/docs/The_Knoxville_Journal_Sun__Feb_3__1957_.jpg`} target="blank">here</a>.
          <br />
        </p>
        <h2>Cresap's War ,the role Higginbothams Played, and happy endings.</h2>
        <p>
          <b>Background</b><br />
          Pennsylvania's Charter (1681) specified that the colony was bounded "on the South by a Circle drawne at twelve miles [19 km] distance from New Castle Northward and Westward unto the beginning of the fortieth degree of Northern Latitude, and then by a streight Line Westward...." Later surveys established that the town of New Castle in fact lay a full 25 miles (40 km) south of the fortieth parallel, setting the stage for a boundary dispute. Maryland insisted that the boundary be drawn at the fortieth parallel as specified in the Charter, while Pennsylvania proposed that it be drawn by an elaborate method which purported to compensate for the geographic misunderstanding on which the Charter had been based. This proposal placed the boundary near 39 36', creating a 28-mile (45 km) wide strip of disputed territory.
        </p>
        <p>
          After years of confused settlers and multiple claims to territory, vilence began to break out in the 1730's. Colonel Thomas Cresap had established a ferry service along the river with permission of Lord Calvert, Lord of Baltimore. Col. Cresap and several men were commisioned by Lord Baltimore to run out Dutch Settlers from Yourk and Lancaster counties in what was believed to be Maryland territory. Among those men was a Capt Charles Higginbotham and his nephew Ralph Higginbotham(from wich we decened). At one point, Col. Cresap was captured and later freed by Capt. Higginbotham. 
        </p>
        <p>Long story short - nobody won. After years of fighing, it was decided that neither side had claim to the land and a temporary border was established. In 1767, descendants of the Penns and Calverts hired surveyors Charles Mason and Jeremiah Dixon to establish a boundary (The Mason-Dison Line).  </p>
        <p>Wait, where's the happy ending you ask. On 7 Sep. 1957, Fred Edward Higginbotham married a young lady named Leona Margaret Leonard. Leona is the great-granddaughter of one Mary Cresap (3xGreat - granddaughter of Col Cresap). This marriage would join the Cresaps and the Higginbothams ~200 Years after Cresap's War. It is worth noting that Capt. Charles Higginbotham was considered by many at the time to be Cresap's <em>right-hand man</em>. Surprisingly, these families did not join sooner. The marriage between Mary Cresap to Nathan Hankins in 1846 was hard to track down. The only known record is a mention in the Hankins family Bible, which no-one seemed to have. Thankfully, Glenn O'Meara was able to help me authenticate the marriage on more then hearsay by confirming his family was in possesion of the Hankins Bible. Even though it has been some time since her passing, I would like to think that Grandma Higinbotham would like to know she was a Daughter of the American Revolution. </p>
        <p>A simple 'Google' search for Cresaps War will reveal a plethera of information on the border dispute. </p>

      </Container>
    </div>
  );
}

export default Stories