import { CircularProgress, LinearProgress } from '@mui/material'

/**
 * プログレスバー
 */
type ProgressModeType = 'circle' | 'linear'
type PProgressProps = {
  mode?: ProgressModeType
}

const PProgress = ({ mode = 'circle' }: PProgressProps) => {
  return mode === 'circle' ? <CircularProgress /> : <LinearProgress />
}

export default PProgress
