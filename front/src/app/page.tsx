import YoutubeUtils from "@/util/YoutubeUtils"
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck"
import YouTubeIcon from "@mui/icons-material/YouTube"
import { Link, List, ListItem, Typography } from "@mui/material"

const Home = () => {
  const { hasOAuthTokenCookie } = YoutubeUtils
  return (
    <>
      <Typography>メニュー</Typography>
      <List>
        <ListItem>
          <PlaylistAddCheckIcon />
          <Link href="/pTask">タスク管理</Link>
        </ListItem>
        <ListItem>
          <YouTubeIcon />
          <Link
            href={hasOAuthTokenCookie() ? "/pYtVideos" : "/api/youtube/oauth"}
          >
            Youtube動画
          </Link>
        </ListItem>
      </List>
    </>
  )
}

export default Home
