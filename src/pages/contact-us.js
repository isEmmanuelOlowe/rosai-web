import React from 'react';
import { ThemeProvider } from 'theme-ui';
import SEO from 'components/seo';
import Layout from 'components/layout';
import theme from 'theme';
import Banner from 'sections/banner';


export default function ContactUsPage() {

    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <SEO
                    title="Contact US | ROSAI"
                    description="Get in contact with us to contact our project"/>
            </Layout>
        </ThemeProvider>
    )
}