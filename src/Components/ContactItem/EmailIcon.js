import * as React from 'react'

export const EmailIcon
 = (props) => (
   <svg
     width={20}
     height={20}
     viewBox={'0 0 24 24'}
     fill={'none'}
     xmlns={'http://www.w3.org/2000/svg'}
     {...props}
   >
     <path
       d={'m4 7 6.2 4.65a3 3 0 0 0 3.6 0L20 7'}
       stroke={'#000'}
       strokeWidth={2}
       strokeLinecap={'round'}
       strokeLinejoin={'round'}
     />
     <rect
       x={3}
       y={5}
       width={18}
       height={14}
       rx={2}
       stroke={'#000'}
       strokeWidth={2}
       strokeLinecap={'round'}
     />
   </svg>
 )

export default EmailIcon
