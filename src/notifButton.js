/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { registerServiceWorker, requestNotificationPermission } from './notificationHub'
import { CButton } from '@coreui/react'

function NotifButton() {
  const [registration, setRegistration] = useState(null)

  useEffect(() => {
    registerServiceWorker().then((reg) => setRegistration(reg))
  }, [])

  const handleButtonClick = async () => {
    if (registration) {
      const subscription = await requestNotificationPermission(registration)
      // You can now use the subscription object to send notifications from your server
      console.log('Subscription object:', subscription)

      // Simulate a push event for testing
      registration.showNotification('Test Notification', {
        body: 'This is a test notification from the button click!',
        icon: '/notification-icon.png',
      })
    }
  }

  return (
    <div className="App">
      <h5> Click below for Push Notification</h5>
      <CButton color="primary" onClick={handleButtonClick}>Show Notification</CButton>
    </div>
  )
}

export default NotifButton
