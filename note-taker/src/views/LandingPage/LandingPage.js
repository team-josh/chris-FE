import React from 'react';
import styled, { css } from 'styled-components';
import { Typography, Box, Grid, Container } from '@material-ui/core';
// import { spacing } from '@material-ui/system';

import CallToAction from './CallToAction';

const TopSection = styled(Container)`
    padding-top: 110px;
`;

const PaddedContainer = styled(Container)`
    padding: 50px 0px;
`;

const HeaderTypography = styled(Typography)`
    padding-bottom: 20px;
`;

const ContentTypography = styled.p`
    font-size: 0.9rem;
    line-height: 22px;
`;

const LandingPage = () => {
    return (
        <div>
            <TopSection maxWidth="md">
                <Grid container direction="column">
                    <Typography variant="h3">Take notes. Or don't, I don't care.</Typography>
                    <Typography variant="h6" color="textSecondary">This is some filler text until we get the right text in here.</Typography>
                    <CallToAction />
                </Grid>
            </TopSection>

            <hr />

            <PaddedContainer maxWidth="md">
                <Grid container justify="space-between">
                    <Grid item sm={5}>
                        <HeaderTypography variant="h4">Do what you want</HeaderTypography>
                        <ContentTypography>This is some filler text just for now. This is some filler text just for now. This is some filler text just for now. This is some filler text just for now. This is some filler text just for now. This is some filler text just for now.</ContentTypography>
                    </Grid>
                    <Grid item sm={5}>
                        <HeaderTypography variant="h4">Do it efficiently</HeaderTypography>
                        <ContentTypography>This is some filler text just for now. This is some filler text just for now. This is some filler text just for now. This is some filler text just for now. This is some filler text just for now. This is some filler text just for now.</ContentTypography>
                    </Grid>
                </Grid>
            </PaddedContainer>

            <hr />
        </div>
    )
}

export default LandingPage;