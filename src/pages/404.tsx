import * as React from 'react'
import { graphql } from 'gatsby'

import { HomeLayout } from 'layouts'

const NotFoundPage = () => {
   return (
      <HomeLayout>
         <div className="my-5">
            <div className="my-20">
               <h1 className="text-center my-5">Page Not Found</h1>
            </div>
         </div>
      </HomeLayout>
   )
}

export default NotFoundPage

export const query = graphql`
   query($language: String!) {
      locales: allLocale(filter: { language: { eq: $language } }) {
         edges {
            node {
               ns
               data
               language
            }
         }
      }
   }
`
