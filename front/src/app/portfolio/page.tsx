import PText from "@/components/client/atoms/text"
import PListItem from "@/components/client/molecules/listItem"
import { List } from "@mui/material"

export default function Home() {
  return (
    <>
      <PText value="ポートフォリオ" />
      <List>
        <PListItem text="タスク管理" link="/portfolio/pTask" icon="task" />
        <PListItem
          text="Youtube動画"
          link="/portfolio/pYtVideos"
          icon="youTube"
        />
      </List>
    </>
  )
}
