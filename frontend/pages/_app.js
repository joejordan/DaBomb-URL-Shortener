import App, { Container } from 'next/app';
import PageComponent from '../components/Page';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <PageComponent>
          <Component {...pageProps} />
        </PageComponent>
      </Container>
    );
  }
}

export default MyApp;
