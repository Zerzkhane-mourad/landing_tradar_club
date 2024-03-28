import MainLayout from 'layouts/MainLayout'
import { Outlet } from 'react-router-dom'

const Page = () => {
  return (
    <div>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </div>
  )
}

export default Page