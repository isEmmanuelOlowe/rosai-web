import React from 'react';
import { ThemeProvider } from 'theme-ui';
import SEO from 'components/seo';
import Layout from 'components/layout';
import theme from 'theme';
import Banner from 'sections/banner';


export default function SEOPage() {

    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <SEO
                    title="Search Engine Optimisation Services | ROSAI"
                    description="Learn more about our Search Engine Optimisation offerings." />
            </Layout>
        </ThemeProvider>
    )
}