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
    name: 'RASAccount',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    badge: {
      text : "4",
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
        to: '/base/navs',
      },
      {
        component: CNavItem,
        name: 'Assigned',
        to: '/base/paginations',
      }
    ],
  }
]

export default _nav
