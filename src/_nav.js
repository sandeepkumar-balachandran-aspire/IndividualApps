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
    name: 'IT Help',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    badge: {
      text : "7",
      color: "warning"
    },
    items: [
      {
        component: CNavItem,
        name: 'Open',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Search',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'Queue',
        to: '/base/jumbotrons',
      }
    ],
  }
]

export default _nav
