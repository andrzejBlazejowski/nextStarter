import style from './styles.css';

export default function ConferenceLayout({ children }) {
  return (
    <>
      <header style={style.header}>
        <h1>Welcome to Globomantics conference pages</h1>
      </header>
      <main>{children}</main>
    </>
  );
}
