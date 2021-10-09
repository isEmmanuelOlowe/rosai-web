import React from 'react';
import { ThemeProvider } from 'theme-ui';
import SEO from 'components/seo';
import Layout from 'components/layout';
import theme from 'theme';
import Banner from 'sections/banner';


export default function GraphicDesignPage() {

    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <SEO
                    title="Graphic Design Services | ROSAI"
                    description="Learn more about our Graphic Design offerings." />
            </Layout>
        </ThemeProvider>
    )
}