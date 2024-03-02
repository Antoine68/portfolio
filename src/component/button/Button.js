import './button.css';

function Button({text, action, type, style="primary"}) {
  return (
   <button className={'button button-' + style} onClick={action} type={type ?? ''}>{text}</button>
  );
}

export default Button;
