/** @jsx jsx */
import { jsx, Container, Grid, Box, Flex, Heading, Text } from 'theme-ui';
import Image from 'components/image';
import support from 'assets/images/support.png';
import rightArrow from 'assets/images/icons/right-arrow.png';
import Link from 'next/link';

const data = [
  {
    id: 1,
    icon: support,
    title: 'Do you need help with SEO?',
    subject:'SEO Services Help',
    description: `It’s not enough to have a website. You need to get found! We offer affordable SEO services increasing your competitiveness in search engines and boosting your search ranks.
    We offer free Audits! to help access the SEO health of your site.`,
  },
  {
    id: 2,
    icon: support,
    subject: 'Graphic Design Services Help',
    title: 'Do you need help with Graphic Design',
    description: `You need the perfect images for your business. Stunning visuals grab attention and can turn leads into customers. Design is a reflection of your business. Our job is to show customers how strong your brand is.`,
  },
];

const Support = () => {
  return (
    <Box as="section" id="support" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          {data?.map((item) => (
            <Flex key={item.id} sx={styles.supportItem}>
              <Flex as="figure" sx={styles.media}>
                <Image src={item?.icon} alt={item?.title} />
              </Flex>
                <a href={"mailto:contact@rosai.co.uk?subject=" + item?.subject} style={{"textDecoration":"none"}}>
                  <Box sx={styles.content}>
                    <Heading>
                      {item?.title} <Image src={rightArrow} alt="rightArrow" />
                    </Heading>
                    <Text as="p">{item?.description}</Text>
                  </Box>
                </a>
            </Flex>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Support;

const styles = {
  section: {
    pt: [9, null, null, 10, 11, 11, 11],
    pb: [7, null, null, 8, null, 9, 10],
  },
  grid: {
    gap: ['30px 30px'],
    justifyContent: 'center',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      null,
      'repeat(2, 540px)',
    ],
  },
  supportItem: {
    backgroundColor: '#F6F8FB',
    borderRadius: 7,
    flexDirection: ['column', null, null, null, null, 'row'],
    alignItems: 'flex-start',
    p: ['25px 25px 20px', null, null, null, '35px 30px', '45px 40px 50px'],
    transition: '0.3s ease-in-out 0s',
    ':hover': {
      backgroundColor: 'white',
      boxShadow: '0px 15px 60px rgba(63, 90, 130, 0.12)',
    },
  },
  media: {
    alignItems: 'center',
    mr: [6],
    mb: [5, null, null, null, null, 0],
    minWidth: [80],
    img: {
      maxWidth: [60, null, null, null, null, '100%'],
    },
  },
  content: {
    mt: ['-7px'],
    h2: {
      fontWeight: 700,
      fontSize: [2, null, null, null, 4],
      lineHeight: 1.5,
      color: 'textSecondary',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    p: {
      fontSize: [1, null, null, null, 15],
      lineHeight: [2.13],
      color: 'headingSecondary',
      mt: [3],
    },
  },
};
