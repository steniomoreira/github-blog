import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/defaultLayout/DefaultLayout'

import { Home } from './pages/home/Home'
import { Post } from './pages/post/Post'
import { NotFound } from './pages/notFound/NotFound'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
