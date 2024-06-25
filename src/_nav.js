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
    name: 'SOP',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    badge: {
      text : "6",
      color: "warning"
    },
    items: [
      {
        component: CNavItem,
        name: 'Open',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Search',
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
