import { ColorConsts } from '@/consts/ColorConsts'
import { CalendarType } from '@/types/Types'
import DateUtils from '@/util/DateUtils'
import PBox from '../../atoms/container'
import PDay from '../../molecules/day'
import PText from '../../atoms/text'
import { StringConsts } from '@/consts/StringConsts'

type PCalendarProps = {
  calendar?: CalendarType
}

const PCalendar = ({
  calendar = DateUtils.createCalendar(),
}: PCalendarProps) => {
  return (
    <>
      <PBox
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '702px',
          borderLeft: '1px solid',
          borderTop: '1px solid',
          borderRight: '1px solid',
          borderColor: ColorConsts.SILVER,
          ml: 1,
        }}
      >
        {StringConsts.DayOfWeeks.map((d, index) => (
          <PText
            key={`dayOfWeek${index}`}
            value={d}
            sx={{
              width: 100,
              height: 30,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        ))}
      </PBox>
      <PBox
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '702px',
          border: '1px solid',
          borderColor: ColorConsts.SILVER,
          ml: 1,
        }}
      >
        {calendar?.values.map((d, index) => (
          <>
            <PDay
              key={`day${index}`}
              date={{ value: d.value, format: 'D' }}
              tooltip={{ show: false }}
            />
          </>
        ))}
      </PBox>
    </>
  )
}

export default PCalendar
