import styles from "./styles/App.module.scss";
import FirmFacts from './components/FirmFacts';
import { FirmFactsProps } from './components/FirmFacts/FirmFacts.types';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  const content: FirmFactsProps = [
    {
      buttonProps: {
        label: "This is a two line button that terminates with anything else",
        onClick: handleClick,
        variant: "icon"
      },
      isTwoRows: true,
      index: 1,
    },
    {
      buttonProps: {
        label: "This is a two line button that terminates with anything else",
        onClick: handleClick,
        variant: "icon"
      },
      index: 2,
    },
    {
      buttonProps: {
        label: "This is a one line button",
        onClick: handleClick,
      },
      index: 3,
    },
    {
      buttonProps: {
        label: "This is a two line button that terminates with anything else",
        onClick: handleClick,
        variant: "icon"
      },
      index: 4,
    },
    {
      buttonProps: {
        label: "This is a two line button that terminates with anything else",
        onClick: handleClick,
        variant: "icon"
      },
      cardProps: {
        childrenPosition: "top",
      },
      index: 5,
    },
    {
      buttonProps: {
        label: "This is a two line button that terminates with anything else",
        onClick: handleClick,
        variant: "icon",
        disabled: true,
      },
      cardProps: {
        childrenPosition: "top",
        disabled: true,
      },
      index: 6,
    },
    {
      buttonProps: {
        label: "This is a two line button that terminates with anything else",
        onClick: handleClick,
        variant: "icon",
      },
      cardProps: {
        childrenPosition: "top",
        variant: "border",
      },
      index: 7,
    }
  ]

  return (
    <div className={styles["container"]}>
      <FirmFacts data={content} />
    </div>
  )
}

export default App
