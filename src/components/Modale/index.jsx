export default function Modale({ title, isOpen, setIsOpen, children }) {
  return (
    <dialog open={isOpen}>
      <article>
        <header>
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            aria-label="Close"
            rel="prev"
          />
          <p>
            <strong>{title}</strong>
          </p>
        </header>
        {children}
      </article>
    </dialog>
  );
}
