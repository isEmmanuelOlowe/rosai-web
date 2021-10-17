/** @jsx jsx */
import { useState, useCallback } from 'react';
import { keyframes } from '@emotion/core';
import { jsx, Box, Grid, Container, Flex, Text, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import PriceTable from 'components/cards/price-table';
import Switch from 'components/switch';

const data = [
  {
    id: 1,
    title: 'Startup',
    subtitle: 'Small business with Low Maintenance',
    amount: {
      monthly: 24.99,
      annual: 24.99 * 12 - 10,
    },
    isRecommended: false,
    buttonText: 'Contact Us',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Domain Name',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Website Hosting`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Business Email Address`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Contant Us Page`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `SSL Certificate`,
      },
      {
        id: 6,
        isAvailable: false,
        title: `Online Booking System`,
      },
    {
        id: 7,
        isAvailable: false,
        title: `Keyword Analysis Report`,
    },
    ],
  },
  {
    id: 2,
    title: 'Premium',
    subtitle: 'For the Pro users who work with modern data stack',
    amount: {
      monthly: 49.99,
      annual: 49.99 * 12 - 10,
    },
    isRecommended: true,
    buttonText: 'Contact Us',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Domain Name',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Web Hosting`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Business Email Address`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Contact Us Page`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `SSL Certificate`,
      },
      {
        id: 6,
        isAvailable: true,
        title: `Online Booking System`,
      },
      {
        id: 7,
        isAvailable: true,
        title: `Keyword Analysis Report`,
      },
      {
        id: 8,
        isAvailable: true,
        title: `QR Code Website and Menu Card Options`
      },
      {
        id: 9,
        isAvailable: false,
        title: `Online Ordering via QR Code Menu`
      },
    ],
  },
  {
    id: 3,
    title: 'Online Shop',
    subtitle: 'For the Pro users who work with modern data stack',
    amount: {
      monthly: 69.99,
      annual: 69.99 * 12 - 10,
    },
    isRecommended: true,
    buttonText: 'Contact Us',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Domain Name',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Web Hosting`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Business Email Address`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Contact Us Page`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `SSL Certificate`,
      },
      {
        id: 6,
        isAvailable: true,
        title: `Inventory Management System`,
      },
      {
        id: 7,
        isAvailable: true,
        title: `Online Booking System`,
      },
      {
        id: 8,
        isAvailable: true,
        title: `Keyword Analysis Report`,
      },
      {
        id: 9,
        isAvailable: true,
        title: `Competitor Analysis Report`
      },
    ],
  },
];

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handlePlan = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <Box as="section" id="pricing" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Web Development Packages"
          description="View our pricing plans which include hosting."
        />
        <Flex sx={styles.priceSwitcher}>
          <Text as="span">Monthly Plan</Text>
          <Switch isMonthly={isMonthly} handlePlan={handlePlan} />
          <Text as="span">Annual Plan</Text>
        </Flex>
        <Box sx={styles.priceWrapper}>
          {data?.map((price, index) => (
            <PriceTable
              price={price}
              isAnnual={!isMonthly}
              key={`${isMonthly}-${index}`}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [11],
    pb: [11],
  },
  heading: {
    mb: 3,
    h2: {
      fontSize: [6, null, null, 8],
    },
    p: {
      color: '#858B91',
      fontSize: 3,
      m: ['10px auto', null, null, '0 auto'],
    },
  },
  priceSwitcher: {
    display: 'flex',
    alignItems: 'center',
    margin: [
      '35px auto 50px',
      null,
      null,
      '0 auto 30px',
      null,
      '60px auto 50px',
    ],
    maxWidth: 300,
    p: 2,
    span: {
      color: 'text',
      fontWeight: 500,
      outline: 0,
      p: 0,
      minHeight: 'auto',
    },
  },
  priceWrapper: {
    display: ['block', null, null, 'flex'],
    alignItems: 'center',
    justifyContent: 'center',
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s linear`,
      },
      '.priceAmount': {
        animation: `${fadeIn} 0.9s linear`,
      },
      '.priceButton': {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};
