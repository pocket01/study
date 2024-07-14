import { DateFormatType, DateType } from '@/types/Types'
import DateUtils from '@/util/DateUtils'
import PBox from '../../atoms/container'
import PText from '../../atoms/text'
import PTooltip from '../../atoms/tooltip'
import { ColorConsts } from '@/consts/ColorConsts'

const PDayBox = (
  { value, format }: DateType = { value: new Date(), format: 'D' },
) => {
  return (
    <PBox
      sx={{
        width: 100,
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <PBox
        sx={{
          width: 50,
          height: 50,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <PText
          value={DateUtils.formatString({ value, format })}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            bgcolor:
              DateUtils.now() ===
              DateUtils.formatString({ value, format: 'YYYY/MM/DD' })
                ? ColorConsts.LightBlue
                : undefined,
            borderRadius: '50%',
          }}
        />
      </PBox>
    </PBox>
  )
}

type PDayProps = {
  date: DateType
  tooltip?: {
    show: boolean
    format?: DateFormatType
  }
}

const PDay = ({
  date,
  tooltip = { show: true, format: 'YYYY/MM/DD' },
}: PDayProps) => {
  return tooltip.show ? (
    <PTooltip
      title={DateUtils.formatString({
        value: date.value,
        format: tooltip.format,
      })}
    >
      <PDayBox {...date} />
    </PTooltip>
  ) : (
    <PDayBox {...date} />
  )
}

export default PDay
