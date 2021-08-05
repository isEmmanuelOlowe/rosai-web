/** @jsx jsx */
import { jsx, Box, Grid, Flex, Container, Image, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import { LearnMore } from 'components/link';
import app from 'assets/images/hatai.png';
import emoji from 'assets/images/icons/emoji.png';
import check from 'assets/images/icons/check-circle.png';

const data = [
  {
    id: 1,
    label: 'Modern UI/UX Design',
  },
  {
    id: 2,
    label: 'Mobile Responsive',
  },
  {
    id: 3,
    label: 'SEO Optimised',
  },
  {
    id: 4,
    label: 'Load Time Optimisation',
  },
  {
    id: 5,
    label: 'Google Business Listing',
  },
  {
    id: 6,
    label: 'Conversion Rate Optimisation',
  },
  {
    id: 7,
    label: 'Google Analytics Integration'
  },
  {
    id: 8,
    label: 'E-Mail Marketing Integration'
  }
];

const AppFeature = () => {
  return (
    <section sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <Box sx={styles.rightContent}>
            <SectionHeading
              emoji={emoji}
              sx={styles.heading}
              title="What you get with every project."
              description="These are features we gaurantee in every Web Development project we work on regardless of the Development Package you choose."
            />
            <Box sx={styles.features}>
              {data?.map(({ id, label }) => (
                <Flex key={id} as="span" sx={{ alignItems: 'flex-start' }}>
                  <Image src={check} alt="check icon" />
                  <Text as="span">{label}</Text>
                </Flex>
              ))}
            </Box>
            <LearnMore label="Explore more" path="#!" />
          </Box>
          <Box sx={styles.illustration}>
            <Image src={app} alt="workHard" />
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default AppFeature;

const styles = {
  section: {
    pt: [6, null, null, 9, 7, 4, 9],
    pb: [8, null, null, 11, 0],
  },
  grid: {
    gap: [0, 0, 0, 0, 10, 30],
    display: ['flex', null, null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'column', 'row'],
    gridTemplateColumns: ['0.9fr 1.1fr'],
    alignItems: 'center',
  },
  heading: {
    maxWidth: ['auto', null, null, '495px', 'auto'],
    textAlign: ['center', null, null, null, 'left'],
    mb: ['20px'],
    ml: [0],
    h2: {
      color: 'heading',
      fontSize: ['24px', null, null, '36px', '31px', 10, 40],
      lineHeight: [1.33, 1.33, 1.26, null, 1.5, 1.26],
      letterSpacing: '-1px',
      letterSpacing: '-1px',
    },
    img: {
      maxWidth: [24, null, null, 30, 25, null, '100%'],
      top: ['4px', '8px', null, null, '4px', '8px'],
      '@media screen and (min-width: 1441px) and (max-width:1600px)': {
        maxWidth: 35,
      },
    },
    p: {
      maxWidth: 430,
    },
  },
  features: {
    columnCount: [1, 2],
    lineHeight: 2.81,
    ml: ['20px', 0],
    mt: [null, null, null, 6, 0],
    img: {
      mr: '10px',
      mt: '11px',
    },
    '+ a': {
      mt: '25px',
      ml: ['20px', 0],
    },
  },
  illustration: {
    mb: [0, null, null, null, '-150px', '-260px'],
    mt: [0],
    zIndex: '-1',
    img: {
      display: ['none', null, null, null, 'block'],
    },
    '@media screen and (max-width: 767px)': {
      background: `transparent url(${app}) no-repeat center top / cover`,
      width: '100%',
      minHeight: 310,
      marginBottom: 40,
    },
  },
};
