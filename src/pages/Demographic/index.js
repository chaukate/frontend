import React from 'react'
import AppLayout from '../../components/AppLayout';
import AppTitle from "../../components/AppTitle";


export default function Demographic() {
    return (
        <AppLayout>
            <AppTitle variant="h1" value="This is H1 header." />
            <AppTitle variant="h2" value="This is H2 header." />
            <AppTitle variant="h3" value="This is H3 header." />
            <AppTitle variant="h4" value="This is H4 header." />
            <AppTitle variant="h5" value="This is H5 header." />
            <AppTitle variant="p" value="This is paragraph." />
        </AppLayout>
    )
}
