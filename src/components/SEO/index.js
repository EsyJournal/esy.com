/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

 import React from "react"
 import PropTypes from "prop-types"
 import Helmet from "react-helmet"
 import { useStaticQuery, graphql } from "gatsby"
 
 
 
 function SEO({ description, lang, meta, title }) {
   const { site } = useStaticQuery(
     graphql`
       query {
         site {
           siteMetadata {
             title
             description
           }
         }
       }
     `
   )
 
   const metaDescription = description || site.siteMetadata.description
   const metaTitle = title || site.siteMetadata.title
 
   return (<Helmet
             htmlAttributes={{
               lang,
             }}
             title={metaTitle}
             titleTemplate={`%s | ${site.siteMetadata.title}`}
             meta={[
               {
                 name: `description`,
                 content: metaDescription,
               },
               {
                 property: `og:title`,
                 content: title,
               },
               {
                property: `og:type`,
                content: "article",
               },
              //  {
              //   property: `og:image`,
              //   content: og_image,
              //  },
               {
                 property: `og:description`,
                 content: metaDescription,
               },
               {
                name: `twitter:card`,
                content: `summary`,
               }, 
               {
                 name: `twitter:card`,
                 content: `summary`,
               },
               {
                 name: `twitter:creator`,
                 content: site.siteMetadata.author,
               },
               {
                 name: `twitter:title`,
                 content: title,
               },
               {
                 name: `twitter:description`,
                 content: metaDescription,
               },
             ].concat(meta)}
           />)
 }
 
 export default SEO
 
 
 
 SEO.defaultProps = {
   lang: `en`,
   meta: [],
   description: ``,
 }
 
 SEO.propTypes = {
   description: PropTypes.string,
   lang: PropTypes.string,
   meta: PropTypes.arrayOf(PropTypes.object),
   title: PropTypes.string.isRequired,
 }
 
 