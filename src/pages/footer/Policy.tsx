import React from 'react';
import styled from 'styled-components';

const Container = styled.div({
  minHeight: '90vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const Wrapper = styled.div({
  padding: '10px 0',
  width: '800px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  '@media screen and (max-width: 768px)': {
    padding: '0 20px'
  }
});

const H1 = styled.div({
  fontSize: '30px',
  fontWeight: 'bolder',
  margin: '0 0 10px',
  textAlign: 'center',
  '@media screen and (max-width: 768px)': {
    fontSize: '22px'
  }
});

const H2 = styled.div({
  fontSize: '25px',
  fontWeight: 'bold',
  margin: '10px 0',
  textAlign: 'center',
  '@media screen and (max-width: 768px)': {
    fontSize: '18px'
  }
});

const P = styled.p({
  fontSize: '18px',
  margin: '10px 0',
  '@media screen and (max-width: 768px)': {
    fontSize: '14px'
  }
});

const Li = styled.li({
  listStyleType: 'circle',
  textIndent: '20px',
  '@media screen and (max-width: 768px)': {
    fontSize: '14px'
  }
});

export function Policy() {
  return (
    <Container>
      <Wrapper>
        <H1>Privacy Policy for Genshin Simul</H1>

        <P>
          At Genshin Simul, accessible from https://genshin-simul.com, one of our main priorities is the privacy of our visitors. This
          Privacy Policy document contains types of information that is collected and recorded by Genshin Simul and how we use it.
        </P>

        <P>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</P>

        <P>
          This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information
          that they shared and/or collect in Genshin Simul. This policy is not applicable to any information collected offline or via
          channels other than this website.
        </P>

        <H2>Consent</H2>

        <P>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</P>

        <H2>Information we collect</H2>

        <P>
          The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you
          at the point we ask you to provide your personal information.
        </P>
        <P>
          If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the
          contents of the message and/or attachments you may send us, and any other information you may choose to provide.
        </P>
        <P>
          When you register for an Account, we may ask for your contact information, including items such as name, company name, address,
          email address, and telephone number.
        </P>

        <H2>How we use your information</H2>

        <P>We use the information we collect in various ways, including to:</P>

        <ul>
          <Li>Provide, operate, and maintain our webste</Li>
          <Li>Improve, personalize, and expand our webste</Li>
          <Li>Understand and analyze how you use our webste</Li>
          <Li>Develop new products, services, features, and functionality</Li>
          <Li>
            Communicate with you, either directly or through one of our partners, including for customer service, to provide you with
            updates and other information relating to the webste, and for marketing and promotional purposes
          </Li>
          <Li>Send you emails</Li>
          <Li>Find and prevent fraud</Li>
        </ul>

        <H2>Log Files</H2>

        <P>
          Genshin Simul follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting
          companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP)
          addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of
          clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing
          trends, administering the site, tracking users' movement on the website, and gathering demographic information.
        </P>

        <H2>Advertising Partners Privacy Policies</H2>

        <P>You may consult this list to find the Privacy Policy for each of the advertising partners of Genshin Simul.</P>

        <P>
          Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on Genshin Simul, which are sent directly to users' browser. They automatically receive your
          IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to
          personalize the advertising content that you see on websites that you visit.
        </P>

        <P>Note that Genshin Simul has no access to or control over these cookies that are used by third-party advertisers.</P>

        <H2>Third Party Privacy Policies</H2>

        <P>
          Genshin Simul's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the
          respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and
          instructions about how to opt-out of certain options.{' '}
        </P>

        <P>
          You can choose to disable cookies through your individual browser options. To know more detailed information about cookie
          management with specific web browsers, it can be found at the browsers' respective websites.
        </P>

        <H2>CCPA Privacy Rights (Do Not Sell My Personal Information)</H2>

        <P>Under the CCPA, among other rights, California consumers have the right to:</P>
        <P>
          Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that
          a business has collected about consumers.
        </P>
        <P>Request that a business delete any personal data about the consumer that a business has collected.</P>
        <P>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</P>
        <P>
          If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
        </P>

        <H2>GDPR Data Protection Rights</H2>

        <P>
          We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
        </P>
        <P>
          The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.
        </P>
        <P>
          The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also
          have the right to request that we complete the information you believe is incomplete.
        </P>
        <P>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</P>
        <P>
          The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under
          certain conditions.
        </P>
        <P>
          The right to object to processing – You have the right to object to our processing of your personal data, under certain
          conditions.
        </P>
        <P>
          The right to data portability – You have the right to request that we transfer the data that we have collected to another
          organization, or directly to you, under certain conditions.
        </P>
        <P>
          If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
        </P>

        <H2>Children's Information</H2>

        <P>
          Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to
          observe, participate in, and/or monitor and guide their online activity.
        </P>

        <P>
          Genshin Simul does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think
          that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will
          do our best efforts to promptly remove such information from our records.
        </P>
      </Wrapper>
    </Container>
  );
}
