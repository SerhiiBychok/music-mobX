import TextField from '@material-ui/core/TextField'
import React from 'react'

function Input(props: any) {
  const {
    className,
    error,
    addon,
    topAddon,
    label,
    isTwofa,
    helper,
    valid,
    ...rest
  } = props
  return (
    <div className={className}>
      {(label || topAddon) && (
        <label>
          {label}
          {topAddon}
        </label>
      )}

      <TextField error={error} valid={!!valid} {...rest} />
      {(addon || isTwofa) && <span>{addon}</span>}
      {(error || helper || valid) && (
        <div dangerouslySetInnerHTML={{ __html: error || valid || helper }} />
      )}
    </div>
  )
}

export default Input
