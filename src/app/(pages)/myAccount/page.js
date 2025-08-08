import Breadcrumb from '@/app/components/common/Breadcrumb'
import AccountMenu from '@/app/components/myAccount/AccountMenu'
import React from 'react'

const page = () => {
  return (
    <div>
      <Breadcrumb />
      <AccountMenu/>
    </div>
  )
}

export default page