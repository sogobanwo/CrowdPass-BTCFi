import React from 'react'
import Layout from '../../Components/dashboard/layout'
import DashboardAnalytics from '../../Components/dashboard/dashboard-analytics'
import RecentActivities from '../../Components/dashboard/recent-activities'

const Dashboard = () => {
 

  return (
    <Layout>
      <DashboardAnalytics eventHosted={"0"} eventAttended={"0"} poa={"0"} totalEvents={"0"}/>
      <RecentActivities />

    </Layout>
  )
}

export default Dashboard