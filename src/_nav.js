import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Apps',
  },
  {
    component: CNavGroup,
    name: 'Users',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    badge: {
      text : "9",
      color: "warning"
    },
    items: [
        {
          component: CNavItem,
          name: 'Users',
          to: '/base/accordion',
        }
      ],
  },
]

export default _nav
