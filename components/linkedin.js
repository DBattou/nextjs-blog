import React from 'react'

export default function LinkedinBadge() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
      }}
    >
      <script
        type="text/javascript"
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
      ></script>

      <div
        className="LI-profile-badge"
        style={{ position: 'fixed', top: '15px', left: '15px', background: 'white' }}
        data-version="v1"
        data-size="medium"
        data-locale="fr_FR"
        data-type="horizontal"
        data-theme="light"
        data-vanity="baptiste-d-ab179299"
      >
        <a
          className="LI-simple-link"
          href="https://fr.linkedin.com/in/baptiste-d-ab179299?trk=profile-badge"
        >
          Linkedin Baptiste D.
        </a>
      </div>
    </div>
  )
}
