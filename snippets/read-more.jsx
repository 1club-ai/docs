/*
 * "Read more" for a note on docs.1club.ai/changelog: the note's text stays in the
 * page, folded, and opens in place. Mintlify strips a raw <details>, so this is a
 * component of our own.
 *
 * Generated: copied to the docs repo as /snippets/read-more.jsx by
 * scripts/build-release-notes.mjs in the 1club repo, which also writes the
 * changelog that imports it. Edit it there, not in the docs repo. Styled by
 * docs-launches.css (.lx-more).
 */
export const ReadMore = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="lx-more">
      <div className="lx-more-body" hidden={!open}>
        {children}
      </div>
      <button type="button" className="lx-more-toggle" aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? 'Show less' : 'Read more'}
      </button>
    </div>
  );
};
