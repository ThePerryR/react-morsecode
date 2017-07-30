import React from 'react'
import { storiesOf } from '@storybook/react'

import MorseCode from '../'

storiesOf('MorseCode', module)
  .add('default', () => (
    <MorseCode/>
  ))
