import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'

import IconDashboard from '@material-ui/icons/Dashboard'
import AddIcon from '@material-ui/icons/Add';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import LowPriorityIcon from '@material-ui/icons/LowPriority';

import AppMenuItem from './AppMenuItem'

const appMenuItems = [
  {
    name: 'Dashboard',
    link: '/',
    Icon: IconDashboard,
  },
  {
    name: 'New',
    Icon: AddIcon,
    items: [
      {
        name: 'Simple',
        link: '/simple',
      },
      {
        name: 'Advanced',
        link: '/advanced',
      },
    ],
  },
  {
    name: 'List',
    link: '/list',
    Icon: FormatListBulletedIcon,
  },
  {
    name: 'Todo',
    link: '/todo',
    Icon: LowPriorityIcon ,
  },
]

const AppMenu: React.FC = () => {
  const classes = useStyles()

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {/* <AppMenuItem {...appMenuItems[0]} /> */}
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  )
}

const drawerWidth = 240

const useStyles = makeStyles(theme =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: '#FFFFFF',
    },
  }),
)

export default AppMenu
