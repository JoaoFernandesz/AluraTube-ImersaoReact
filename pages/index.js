import config from '../config.json'
import styled from 'styled-components'
import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';

function Home() {
  const estiloDaHomePage = {
    // backgroundColor: "red" 

  };

  // console.log(config.playlists)

  return (
    <>
      <CSSReset />
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        // backgroundColor: "red",
      }}>
        <Menu />
        <Header />
        <TimeLine playlists={config.playlists}>
          Conteúdo
        </TimeLine>
      </div>
    </>
  )
}

export default Home

// function Menu() {
//   return (
//     <div>
//       Menu
//     </div>
//   )
// }

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;

  }
`;
function Header() {
  return (
    <StyledHeader>
      {/* <img src='Banner' /> */}
      <section className='user-info'>
        <img src={`https://github.com/${config.gitHub}.png`} />
        <div>
          <h2>
            {config.name}
          </h2>
          <p>
            {config.job}
          </p>
        </div>
      </section>
    </StyledHeader>
  )
}

function TimeLine(props) {
  // console.log("dentro do componente", props);
  const playlistsNames = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playlistsNames.map((playlistsNames) => {
        const videos = props.playlists[playlistsNames];
        console.log(playlistsNames);
        console.log(videos);
        return (
          <section>
            <h2>{playlistsNames}</h2>
            <div>
              {videos.map((videos) => {
                return (
                  <a href={videos.url}>
                    <img src={videos.thumb} />
                    <span>
                      {videos.title}
                    </span>
                  </a>
                );
              })};
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}