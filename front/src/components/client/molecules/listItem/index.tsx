import { IconType } from '@/types/Types'
import { Link, ListItem } from '@mui/material'
import PIcon from '../../atoms/icon'

type PListItemProps = {
  text: string
  icon?: IconType
  link?: string
}

const PListItem = ({ text, icon, link }: PListItemProps) => {
  return (
    <ListItem>
      {link ? (
        <Link href={link}>
          <PIcon icon={icon} />
          {text}
        </Link>
      ) : (
        <>
          <PIcon icon={icon} />
          <>{text}</>
        </>
      )}
    </ListItem>
  )
}

export default PListItem
