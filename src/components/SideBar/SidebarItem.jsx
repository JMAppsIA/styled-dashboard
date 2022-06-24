import React from 'react'
import { ItemLink, NotificationBadge } from '../../styled-components/Sidebar'

const SidebarItem = ({to, icon, title, hasNotifications, notifications}) => {
  return (
    <ItemLink href={to}>
          {icon}
          {title}
          {hasNotifications && <NotificationBadge>{notifications}</NotificationBadge>}
    </ItemLink>
  )
}

export default SidebarItem