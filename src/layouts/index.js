import styles from './index.css';

function BasicLayout(props) {
  return (
    <div className={""}>
      { props.children }
    </div>
  );
}

export default BasicLayout;
