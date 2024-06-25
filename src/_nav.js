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
    name: 'Orders@',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      text : "2",
      color: "warning"
    },
    items: [
      {
        component: CNavItem,
        name: 'New',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Search',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'Open',
        to: '/base/open',
      },
      {
        component: CNavItem,
        name: 'Group',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Assigned',
        to: '/base/cards',
      }
    ],
  }
]

export default _nav
