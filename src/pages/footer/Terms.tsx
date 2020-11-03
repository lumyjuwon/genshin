import React from 'react';
import styled from 'styled-components';

const Container = styled.div({
  minHeight: '90vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const Wrapper = styled.div({
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

export function Terms() {
  return (
    <Container>
      <Wrapper>
        <H1>Website Terms and Conditions of Use</H1>

        <H2>1. Terms</H2>

        <P>
          By accessing this Website, accessible from https://genshin-simul.com, you are agreeing to be bound by these Website Terms and
          Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of
          these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and
          trade mark law.
        </P>

        <H2>2. Use License</H2>

        <P>
          Permission is granted to temporarily download one copy of the materials on Genshin Simul's Website for personal, non-commercial
          transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </P>

        <ul>
          <Li>modify or copy the materials;</Li>
          <Li>use the materials for any commercial purpose or for any public display;</Li>
          <Li>attempt to reverse engineer any software contained on Genshin Simul's Website;</Li>
          <Li>remove any copyright or other proprietary notations from the materials; or</Li>
          <Li>transferring the materials to another person or "mirror" the materials on any other server.</Li>
        </ul>

        <P>
          This will let Genshin Simul to terminate upon violations of any of these restrictions. Upon termination, your viewing right will
          also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.
        </P>

        <H2>3. Disclaimer</H2>

        <P>
          All the materials on Genshin Simul’s Website are provided "as is". Genshin Simul makes no warranties, may it be expressed or
          implied, therefore negates all other warranties. Furthermore, Genshin Simul does not make any representations concerning the
          accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to
          this Website.
        </P>

        <H2>4. Limitations</H2>

        <P>
          Genshin Simul or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the
          materials on Genshin Simul’s Website, even if Genshin Simul or an authorize representative of this Website has been notified,
          orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or
          limitations of liability for incidental damages, these limitations may not apply to you.
        </P>

        <H2>5. Revisions and Errata</H2>

        <P>
          The materials appearing on Genshin Simul’s Website may include technical, typographical, or photographic errors. Genshin Simul
          will not promise that any of the materials in this Website are accurate, complete, or current. Genshin Simul may change the
          materials contained on its Website at any time without notice. Genshin Simul does not make any commitment to update the materials.
        </P>

        <H2>6. Links</H2>

        <P>
          Genshin Simul has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked
          site. The presence of any link does not imply endorsement by Genshin Simul of the site. The use of any linked website is at the
          user’s own risk.
        </P>

        <H2>7. Site Terms of Use Modifications</H2>

        <P>
          Genshin Simul may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are
          agreeing to be bound by the current version of these Terms and Conditions of Use.
        </P>

        <H2>8. Your Privacy</H2>

        <P>Please read our Privacy Policy.</P>

        <H2>9. Governing Law</H2>

        <P>
          Any claim related to Genshin Simul's Website shall be governed by the laws of kr without regards to its conflict of law
          provisions.
        </P>
      </Wrapper>
    </Container>
  );
}
