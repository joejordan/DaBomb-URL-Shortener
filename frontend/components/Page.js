import PropTypes from 'prop-types';
import Header from './Header';
import Meta from './Meta';

function Page(props) {
  const { children } = props;
  return (
    <>
      <Meta />
      <Header />
      {children}
    </>
  );
}

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
