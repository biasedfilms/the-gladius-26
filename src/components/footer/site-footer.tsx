import { InstitutionalLockup } from "@/components/institutional-lockup/institutional-lockup";
import { ExternalArrow, ExternalLink } from "@/components/links/external-link";
import { GoldRule } from "@/components/motion/gold-rule";
import { credits, externalLinks } from "@/content/site";

import styles from "./site-footer.module.css";

const PROFILES = [externalLinks.gladius, externalLinks.gladiators];

/** The title block of the drawing: who it belongs to, and who drew it. */
export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`page-shell ${styles.body}`}>
        <GoldRule />
        <div className={styles.columns}>
          <nav aria-label="Religio, Mores, Cultura" className={styles.institutions}>
            <p className={`meta ${styles.field}`}>Religio, Mores, Cultura</p>
            <InstitutionalLockup linked markHeight={64} className={styles.lockup} />
          </nav>

          <nav aria-label={externalLinks.gladius.service} className={styles.profiles}>
            <p className={`meta ${styles.field}`}>{externalLinks.gladius.service}</p>
            <ul>
              {PROFILES.map((profile) => (
                <li key={profile.href}>
                  <ExternalLink target={profile} className={styles.profile} hiddenText="destination">
                    <span className={styles.profileName}>{profile.name}</span>
                    <span aria-hidden="true" className={`meta ${styles.handle}`}>
                      {profile.handle}
                      <ExternalArrow />
                    </span>
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className={styles.band}>
        <div className={`page-shell ${styles.signoff}`}>
          <p className={`meta ${styles.copyright}`}>{credits.copyright}</p>
          <p className={styles.creator}>{credits.creator}</p>
          <a href="#beranda" className={`meta ${styles.top}`}>
            Kembali ke atas
            <span aria-hidden="true" className={styles.topPoint} />
          </a>
        </div>
      </div>
    </footer>
  );
}
