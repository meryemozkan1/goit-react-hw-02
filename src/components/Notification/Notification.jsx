import css from "./Notification.module.css";

export default function Notification({ message }) {
  return <p className={css.notificationText}>{message}</p>;
}
